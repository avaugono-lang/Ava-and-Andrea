import { YouTubeTutorial } from '../types';

export interface SearchTutorialResult {
  found: boolean;
  tutorial?: YouTubeTutorial;
  message?: string;
  fallbackSearchUrl: string;
  searchQuery: string;
  source?: 'api' | 'verified_cache' | 'oembed';
}

/**
 * Builds candidate search queries prioritized by the requirements:
 * 1. "[skill] gymnastics tutorial"
 * 2. "[skill] gymnastics beginner tutorial"
 * 3. "how to do [skill] gymnastics"
 * 4. "[skill] gymnastics drills"
 */
export function buildTutorialSearchQueries(skillName: string, level?: number, category?: string): string[] {
  const cleanName = skillName.trim();
  return [
    `${cleanName} gymnastics tutorial`,
    `${cleanName} gymnastics beginner tutorial`,
    `how to do ${cleanName} gymnastics`,
    `${cleanName} gymnastics drills`,
  ];
}

export function buildYouTubeSearchUrl(skillName: string): string {
  const query = `${skillName} gymnastics tutorial`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

/**
 * Client-side caller to search for a skill tutorial via the server API
 */
export async function fetchSkillTutorial(
  skillName: string,
  level: number,
  category: string,
  customApiKey?: string
): Promise<SearchTutorialResult> {
  const defaultFallbackUrl = buildYouTubeSearchUrl(skillName);
  const primaryQuery = `${skillName} gymnastics tutorial`;

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (customApiKey) {
      headers['x-youtube-api-key'] = customApiKey;
    }

    const response = await fetch('/api/youtube/search', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        skillName,
        level,
        category,
        query: primaryQuery,
        apiKey: customApiKey,
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    return data as SearchTutorialResult;
  } catch (err) {
    console.warn('YouTube search API request failed, falling back:', err);
    return {
      found: false,
      message: 'No suitable tutorial found yet.',
      fallbackSearchUrl: defaultFallbackUrl,
      searchQuery: primaryQuery,
    };
  }
}

/**
 * Check YouTube Data API v3 status on server
 */
export const searchSkillTutorial = fetchSkillTutorial;

/**
 * Check YouTube Data API v3 status on server
 */
export async function checkYouTubeApiStatus(): Promise<{ hasApiKey: boolean }> {
  try {
    const res = await fetch('/api/youtube/status');
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // ignore
  }
  return { hasApiKey: false };
}
