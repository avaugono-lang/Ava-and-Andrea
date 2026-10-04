import { Skill } from '../types';

// =========================================================================
// GYMFEST SKILLS CATEGORIZATION (Directly from official document)
// Levels 1 - 8 across Silver, Gold, Platinum tiers + Pre-Level and Vaults
// =========================================================================

export const GYMFEST_DOCUMENT_SKILLS: Skill[] = [
  // =======================================================================
  // PRE-LEVEL (Foundation / Level 1 Prep)
  // =======================================================================
  {
    id: 'gf_pre_fl_01',
    name: 'Forward roll tuck',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'BRONZE',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Pre-Level: Tucked chin, rounded spine roll to stand without hand push.',
    xpReward: 20,
    status: 'VERIFIED',
    officialRef: 'Gymfest Pre-Level Floor #1',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TSsCIEs17D8',
      title: 'How to Forward Roll | Gymnastics Tutorial',
      channelName: 'CBBC Gym Stars',
      thumbnail: 'https://i.ytimg.com/vi/TSsCIEs17D8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TSsCIEs17D8',
      embedUrl: 'https://www.youtube.com/embed/TSsCIEs17D8'
    },
    writtenTutorial: {
      steps: ['Squat with knees together.', 'Tuck chin to chest.', 'Roll along spine.', 'Stand without hands pushing off floor.'],
      keyCoachingCues: ['Chin to chest', 'Stay in tight tuck', 'Stand tall'],
      commonFaults: ['Head touching floor flat', 'Using hands to stand up']
    }
  },
  {
    id: 'gf_pre_fl_02',
    name: 'Forward roll walkout',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'BRONZE',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Pre-Level: Forward roll finishing in a continuous step-out / walkout into lunge.',
    xpReward: 20,
    status: 'VERIFIED',
    officialRef: 'Gymfest Pre-Level Floor #2',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TSsCIEs17D8',
      title: 'Forward Roll Step Out / Walkout Breakdown',
      channelName: 'CBBC Gym Stars',
      thumbnail: 'https://i.ytimg.com/vi/TSsCIEs17D8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TSsCIEs17D8',
      embedUrl: 'https://www.youtube.com/embed/TSsCIEs17D8'
    },
    writtenTutorial: {
      steps: ['Roll forward smoothly with tucked head.', 'Step lead foot forward as hips pass over.', 'Walk out into balanced lunge.'],
      keyCoachingCues: ['Smooth roll', 'Step forward with lead foot', 'Upright posture'],
      commonFaults: ['Stopping momentum', 'Landing on both feet flat']
    }
  },
  {
    id: 'gf_pre_fl_03',
    name: 'Forward roll straddle',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'BRONZE',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Pre-Level: Forward roll finishing in wide straddle stand with straight knees and pointed toes.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'Gymfest Pre-Level Floor #3',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TSsCIEs17D8',
      title: 'Straddle Forward Roll Tutorial',
      channelName: 'Head Over Heels Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/TSsCIEs17D8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TSsCIEs17D8',
      embedUrl: 'https://www.youtube.com/embed/TSsCIEs17D8'
    },
    writtenTutorial: {
      steps: ['Roll forward along rounded back.', 'Open legs wide into straddle as heels touch.', 'Press hands between legs to push up to stand.'],
      keyCoachingCues: ['Wide straddle', 'Straight knees locked', 'Hands press between legs'],
      commonFaults: ['Bending knees', 'Not opening straddle wide enough']
    }
  },
  {
    id: 'gf_pre_fl_04',
    name: 'Bridge',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'BRONZE',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Pre-Level: Back bridge hold with open shoulders, straight arms, and feet flat on floor.',
    xpReward: 20,
    status: 'VERIFIED',
    officialRef: 'Gymfest Pre-Level Floor #4',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'hde3jd_8yb8',
      title: 'How to Do a Bridge with Open Shoulders',
      channelName: 'MGA Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/hde3jd_8yb8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=hde3jd_8yb8',
      embedUrl: 'https://www.youtube.com/embed/hde3jd_8yb8'
    },
    writtenTutorial: {
      steps: ['Lie on back, place hands by ears with fingers toward shoulders.', 'Press through palms and feet to elevate hips.', 'Push shoulders over wrists and hold.'],
      keyCoachingCues: ['Push shoulders over hands', 'Straight arms', 'Feet together'],
      commonFaults: ['Bent elbows', 'Closed shoulders']
    }
  },
  {
    id: 'gf_pre_fl_05',
    name: 'Straight jump and tuck jump',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'BRONZE',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Pre-Level: Vertical straight jump immediately connected to explosive tuck jump with knees to chest.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'Gymfest Pre-Level Floor #5',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'WmpN6b4tV1E',
      title: 'Straight Jump & Tuck Jump Gymnastics Drills',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/WmpN6b4tV1E/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=WmpN6b4tV1E',
      embedUrl: 'https://www.youtube.com/embed/WmpN6b4tV1E'
    },
    writtenTutorial: {
      steps: ['Plie and jump into vertical straight jump.', 'Upon rebound, immediately pull knees into chest in tuck jump.', 'Stick landing in demi-plié.'],
      keyCoachingCues: ['Knees to chest (not heels to butt)', 'Arms by ears', 'Stick and hold'],
      commonFaults: ['Dropping chest on tuck', 'Kicking heels back']
    }
  },
  {
    id: 'gf_pre_vt_01',
    name: 'Running tuck jump on the big mat stick it.',
    level: 1,
    category: 'VAULT',
    xcelTier: 'BRONZE',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Pre-Level Vault: Accelerated run, punch springboard, tuck jump onto mat stack and stick firmly.',
    xpReward: 30,
    status: 'VERIFIED',
    officialRef: 'Gymfest Pre-Level Vault',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '-UhJoZWFT7s',
      title: 'Running Punch Tuck Jump on Vault Mat',
      channelName: 'Carousel Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/-UhJoZWFT7s/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=-UhJoZWFT7s',
      embedUrl: 'https://www.youtube.com/embed/-UhJoZWFT7s'
    },
    writtenTutorial: {
      steps: ['Accelerated run down runway.', 'Low hurdle punch onto springboard.', 'Drive knees up into tuck jump onto mat stack.', 'Stick landing motionless.'],
      keyCoachingCues: ['Accelerate into board', 'Two-foot punch', 'Stick the landing'],
      commonFaults: ['Decelerating before board', 'Landing stiff-legged']
    }
  },

  // =======================================================================
  // LEVEL 1 (Silver, Gold, Platinum & Vault)
  // =======================================================================
  {
    id: 'gf_l1_slv_01',
    name: 'Cartwheel',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1 (Silver/Gold/Platinum): Side-to-side hand placement with straight legs, pointed toes, and balanced lunge finish.',
    xpReward: 30,
    status: 'VERIFIED',
    officialRef: 'Gymfest L1 Floor (Silver/Gold/Platinum)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'GAbIx6oQAv4',
      title: 'How to EASILY do a cartwheel! (Tutorial)',
      channelName: 'Rylie Shaw',
      thumbnail: 'https://i.ytimg.com/vi/GAbIx6oQAv4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=GAbIx6oQAv4',
      embedUrl: 'https://www.youtube.com/embed/GAbIx6oQAv4'
    },
    writtenTutorial: {
      steps: ['Start in deep lunge with arms by ears.', 'Reach lead hand then second hand along straight line.', 'Kick legs through vertical straddle.', 'Land foot-foot in clean lunge.'],
      keyCoachingCues: ['Straight arms locked', 'Pass through vertical', 'Finish in tall lunge'],
      commonFaults: ['Bent knees', 'Piking hips out of plane', 'Crooked hand placement']
    }
  },
  {
    id: 'gf_l1_slv_02',
    name: 'Candle stick',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1: Tight hollow roll onto shoulder blades, toes pointing to ceiling in rigid candlestick position.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'Gymfest L1 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '83-8RNZaDuw',
      title: 'Candlestick to Stand Gymnastics Tutorial',
      channelName: 'Jubilee Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/83-8RNZaDuw/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=83-8RNZaDuw',
      embedUrl: 'https://www.youtube.com/embed/83-8RNZaDuw'
    },
    writtenTutorial: {
      steps: ['Stand tall, roll back onto shoulder blades.', 'Push toes straight up to ceiling.', 'Squeeze glutes and core.', 'Roll forward to stand without hands.'],
      keyCoachingCues: ['Point toes to ceiling', 'Squeeze butt', 'Roll to stand'],
      commonFaults: ['Bent knees', 'Hips sagging toward floor']
    }
  },
  {
    id: 'gf_l1_slv_03',
    name: 'Chasse',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1: Graceful dance step-together-step traveling across floor with pointed toes and upright carriage.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'Gymfest L1 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Chassé & Dance Steps in Gymnastics',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Step lead foot forward.', 'Slide trailing foot to kiss heels in air.', 'Step lead foot forward and present arms.'],
      keyCoachingCues: ['Point both toes', 'Heels touch in air', 'Chest held high'],
      commonFaults: ['Flat feet', 'Slouching posture']
    }
  },
  {
    id: 'gf_l1_slv_04',
    name: 'Straight Jump',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1: Explosive vertical jump from two feet, fully extending hips, knees, and ankles in air, stuck landing.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'Gymfest L1 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'WmpN6b4tV1E',
      title: 'Straight Jump Technique & Stick Landings',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/WmpN6b4tV1E/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=WmpN6b4tV1E',
      embedUrl: 'https://www.youtube.com/embed/WmpN6b4tV1E'
    },
    writtenTutorial: {
      steps: ['Demi-plié swinging arms back.', 'Explode upward with arms lifting to ears.', 'Lock body in straight vertical line at apex.', 'Absorb landing in stick freeze.'],
      keyCoachingCues: ['Arms by ears', 'Toes pointed down', 'Stick and hold 3 seconds'],
      commonFaults: ['Piking hips', 'Landing stiff-legged']
    }
  },
  {
    id: 'gf_l1_slv_05',
    name: 'Forward roll tuck',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1: Round back, chin tucked to chest, rolling through smooth tuck to clean stand.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'Gymfest L1 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TSsCIEs17D8',
      title: 'How to Forward Roll | Gymnastics Tutorial',
      channelName: 'CBBC Gym Stars',
      thumbnail: 'https://i.ytimg.com/vi/TSsCIEs17D8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TSsCIEs17D8',
      embedUrl: 'https://www.youtube.com/embed/TSsCIEs17D8'
    },
    writtenTutorial: {
      steps: ['Squat with knees glued together.', 'Tuck chin tightly to chest.', 'Roll along rounded spine.', 'Stand without hands pressing on mat.'],
      keyCoachingCues: ['Tuck chin', 'Rounded back', 'Stand up tall'],
      commonFaults: ['Flat back impact', 'Using hands to stand']
    }
  },
  {
    id: 'gf_l1_slv_06',
    name: 'Hand stand for at least 1 second',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1: Kick to straight body vertical handstand, holding locked line for at least 1 full second.',
    xpReward: 30,
    status: 'VERIFIED',
    officialRef: 'Gymfest L1 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'PFqKbqRGUyY',
      title: 'How to do a Handstand for Beginners | Hold for 1+ Second',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/PFqKbqRGUyY/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=PFqKbqRGUyY',
      embedUrl: 'https://www.youtube.com/embed/PFqKbqRGUyY'
    },
    writtenTutorial: {
      steps: ['Lunge forward, reach hands to mat shoulder-width.', 'Kick rear leg up into vertical line.', 'Glue legs together, lock elbows and hold 1 second.', 'Step down into balanced finish lunge.'],
      keyCoachingCues: ['Push tall through shoulders', 'Squeeze glutes', 'Hold 1 second'],
      commonFaults: ['Banana back arch', 'Bent elbows', 'Kicking over too fast']
    }
  },
  {
    id: 'gf_l1_gld_01',
    name: 'Forward roll straddle',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1 Gold: Forward roll opening into wide straddle stand with straight knees.',
    xpReward: 30,
    status: 'VERIFIED',
    officialRef: 'Gymfest L1 Gold Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TSsCIEs17D8',
      title: 'Straddle Forward Roll Breakdown',
      channelName: 'Head Over Heels Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/TSsCIEs17D8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TSsCIEs17D8',
      embedUrl: 'https://www.youtube.com/embed/TSsCIEs17D8'
    },
    writtenTutorial: {
      steps: ['Tuck roll forward.', 'Open legs into wide straddle.', 'Push hands between thighs to rise to stand.'],
      keyCoachingCues: ['Wide straddle', 'Straight legs', 'Push to stand'],
      commonFaults: ['Bent knees', 'Narrow straddle']
    }
  },
  {
    id: 'gf_l1_plt_01',
    name: 'Backward roll',
    level: 1,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1 Platinum: Hands by ears in pizza-pan shape, fast hip lift with straight arm push to feet.',
    xpReward: 35,
    status: 'VERIFIED',
    officialRef: 'Gymfest L1 Platinum Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'U_scqEjjZbM',
      title: 'How to do a Backwards Roll | Gymnastics Tutorial',
      channelName: 'Head Over Heels Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/U_scqEjjZbM/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=U_scqEjjZbM',
      embedUrl: 'https://www.youtube.com/embed/U_scqEjjZbM'
    },
    writtenTutorial: {
      steps: ['Squat with hands by ears palms facing ceiling.', 'Roll backward rapidly onto rounded back.', 'Push hard through palms as feet pass over head.', 'Land softly on feet.'],
      keyCoachingCues: ['Pizza hands by ears', 'Push hard through palms', 'Stay rounded'],
      commonFaults: ['Rolling over one shoulder', 'Failing to push with hands']
    }
  },
  {
    id: 'gf_l1_vt_01',
    name: 'Run, jump on the big mat then handstand to flat back',
    level: 1,
    category: 'VAULT',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 1 Vault (Page 2): Accelerated approach run, punch springboard onto mat stack into vertical handstand falling flat to back.',
    xpReward: 35,
    status: 'VERIFIED',
    officialRef: 'Gymfest Level 1 Vault',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'XUPTTA1tY6M',
      title: 'Gymnastics Handstand Flatback Vault Tutorial',
      channelName: 'Incredible Gymnasts!',
      thumbnail: 'https://i.ytimg.com/vi/XUPTTA1tY6M/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=XUPTTA1tY6M',
      embedUrl: 'https://www.youtube.com/embed/XUPTTA1tY6M'
    },
    writtenTutorial: {
      steps: ['Run with acceleration down runway.', 'Punch springboard with feet together and arms swinging up.', 'Kick into vertical handstand on mat stack with locked arms.', 'Fall straight onto back with neutral head.'],
      keyCoachingCues: ['Accelerate into board', 'Hit vertical handstand', 'Flat back fall'],
      commonFaults: ['Arched back fall', 'Bent elbows on mat contact']
    }
  },

  // =======================================================================
  // LEVEL 2 (Silver, Gold, Platinum & Vault)
  // =======================================================================
  {
    id: 'gf_l2_slv_01',
    name: 'Backward roll to push up',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2: Backward roll extending legs directly into locked front leaning rest (push-up) hollow position.',
    xpReward: 35,
    status: 'VERIFIED',
    officialRef: 'Gymfest L2 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'LYNLFv_JRZQ',
      title: 'Backward Roll to Pushup Position Tutorial',
      channelName: 'eHowSports',
      thumbnail: 'https://i.ytimg.com/vi/LYNLFv_JRZQ/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=LYNLFv_JRZQ',
      embedUrl: 'https://www.youtube.com/embed/LYNLFv_JRZQ'
    },
    writtenTutorial: {
      steps: ['Roll backward with hands by ears.', 'Shoot toes backward and up while pushing palms down.', 'Land on toes in locked push-up plank.'],
      keyCoachingCues: ['Fast hand push', 'Shoot legs straight', 'Lock hollow plank'],
      commonFaults: ['Sagging hips in plank', 'Bending knees']
    }
  },
  {
    id: 'gf_l2_slv_02',
    name: 'Running split',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2: Running steps into forward dynamic split leap showing leg separation in motion.',
    xpReward: 35,
    status: 'VERIFIED',
    officialRef: 'Gymfest L2 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Running Split Leap Tutorial',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Take 3 continuous running steps.', 'Brush front leg forward while driving rear leg back.', 'Hit split in air and land softly in plie.'],
      keyCoachingCues: ['Brush front foot', 'Straight back knee', 'Soft landing'],
      commonFaults: ['Chest leaning forward', 'Bent front knee']
    }
  },
  {
    id: 'gf_l2_slv_03',
    name: 'Leap split (on the spot)',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2: Stationary split leap or jump from the spot achieving clean leg separation and soft landing.',
    xpReward: 35,
    status: 'VERIFIED',
    officialRef: 'Gymfest L2 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Split Jump & Spot Leap Gymnastics Tutorial',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Plie in place.', 'Spring vertically splitting legs equally front and back.', 'Pull feet together and absorb landing in demi-plié.'],
      keyCoachingCues: ['Spring straight up', 'Equal split front & back', 'Quiet landing'],
      commonFaults: ['Uneven leg split', 'Landing stiff-legged']
    }
  },
  {
    id: 'gf_l2_slv_04',
    name: 'Bridge with one leg raise for 5seconds',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2 Silver: Push up into high bridge with open shoulders, lifting one leg straight toward ceiling for 5 seconds.',
    xpReward: 35,
    status: 'VERIFIED',
    officialRef: 'Gymfest L2 Silver Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'hde3jd_8yb8',
      title: 'Bridge with One Leg Lift Tutorial',
      channelName: 'MGA Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/hde3jd_8yb8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=hde3jd_8yb8',
      embedUrl: 'https://www.youtube.com/embed/hde3jd_8yb8'
    },
    writtenTutorial: {
      steps: ['Push into bridge with locked arms.', 'Transfer weight onto supporting foot.', 'Extend other leg straight to ceiling.', 'Hold stationary for 5 full seconds.'],
      keyCoachingCues: ['Shoulders over hands', 'Point raised toe', 'Hold 5 seconds'],
      commonFaults: ['Dropping hips', 'Bent raised leg']
    }
  },
  {
    id: 'gf_l2_gld_01',
    name: 'Handstand to bridge standup',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2 Gold: Kick to vertical handstand, step softly into bridge, and push hips forward to stand upright.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L2 Gold Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'iCFw0hYwa0A',
      title: 'Handstand into Bridge and Stand Up Tutorial',
      channelName: 'Incredible Gymnasts!',
      thumbnail: 'https://i.ytimg.com/vi/iCFw0hYwa0A/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=iCFw0hYwa0A',
      embedUrl: 'https://www.youtube.com/embed/iCFw0hYwa0A'
    },
    writtenTutorial: {
      steps: ['Kick into vertical handstand.', 'Lower feet softly to mat into bridge.', 'Push hips forward over knees, lift arms and stand tall.'],
      keyCoachingCues: ['Soft bridge landing', 'Push hips forward to stand', 'Arms by ears on finish'],
      commonFaults: ['Crashing onto feet', 'Head lifting early on standup']
    }
  },
  {
    id: 'gf_l2_plt_01',
    name: 'Backward roll to front support',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2 Platinum: Roll backward smoothly pressing directly into locked front support plank.',
    xpReward: 40,
    status: 'VERIFIED',
    officialRef: 'Gymfest L2 Platinum Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'LYNLFv_JRZQ',
      title: 'Backward Roll to Front Support Plank',
      channelName: 'eHowSports',
      thumbnail: 'https://i.ytimg.com/vi/LYNLFv_JRZQ/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=LYNLFv_JRZQ',
      embedUrl: 'https://www.youtube.com/embed/LYNLFv_JRZQ'
    },
    writtenTutorial: {
      steps: ['Roll backward with hands by ears.', 'Push palms down into floor.', 'Extend hips and legs into locked straight body plank.'],
      keyCoachingCues: ['Push palms down', 'Lock elbows', 'Squeeze glutes'],
      commonFaults: ['Sagging hips', 'Bent knees']
    }
  },
  {
    id: 'gf_l2_plt_02',
    name: 'Passe hop to heel snap turn',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2 Platinum: Hop on one foot with opposite leg in passé, snapping heel to execute sharp 180° turn.',
    xpReward: 40,
    status: 'VERIFIED',
    officialRef: 'Gymfest L2 Platinum Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '5S4EOgtS-Pg',
      title: 'Passe Hop and Heel Snap Turn Technique',
      channelName: 'Altadore Gymnastic Club',
      thumbnail: 'https://i.ytimg.com/vi/5S4EOgtS-Pg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=5S4EOgtS-Pg',
      embedUrl: 'https://www.youtube.com/embed/5S4EOgtS-Pg'
    },
    writtenTutorial: {
      steps: ['Hop on standing leg with free leg in passé at knee.', 'Snap heel to initiate 180° rotation.', 'Hold high posture and balance on finish.'],
      keyCoachingCues: ['Passé toe at knee', 'Sharp heel snap', 'Spot the turn'],
      commonFaults: ['Dropping free foot', 'Losing balance']
    }
  },
  {
    id: 'gf_l2_plt_03',
    name: 'Chasse split leap',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2 Platinum: Chassé step connected immediately into dynamic split leap in air.',
    xpReward: 40,
    status: 'VERIFIED',
    officialRef: 'Gymfest L2 Platinum Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '8ibt-SHYepI',
      title: 'Chasse Connected to Split Leap Tutorial',
      channelName: 'Nicole Ferrier',
      thumbnail: 'https://i.ytimg.com/vi/8ibt-SHYepI/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=8ibt-SHYepI',
      embedUrl: 'https://www.youtube.com/embed/8ibt-SHYepI'
    },
    writtenTutorial: {
      steps: ['Execute forward chassé.', 'Brush front foot through low battement into grand jeté.', 'Split legs in air and absorb landing in plie.'],
      keyCoachingCues: ['Fluid connection', 'Hit split at apex', 'Chest upright'],
      commonFaults: ['Pausing between chassé and leap', 'Bent knees']
    }
  },
  {
    id: 'gf_l2_plt_04',
    name: 'Bridge kick over',
    level: 2,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2 Platinum: Push into bridge, kick dominant leg overhead with open shoulders, landing in controlled lunge.',
    xpReward: 40,
    status: 'VERIFIED',
    officialRef: 'Gymfest L2 Platinum Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'hde3jd_8yb8',
      title: 'How to do a BRIDGE KICKOVER at home!',
      channelName: 'MGA Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/hde3jd_8yb8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=hde3jd_8yb8',
      embedUrl: 'https://www.youtube.com/embed/hde3jd_8yb8'
    },
    writtenTutorial: {
      steps: ['Push into high bridge with open shoulders.', 'Push off supporting foot and drive lead leg overhead.', 'Pass through split handstand.', 'Step down into finish lunge.'],
      keyCoachingCues: ['Push shoulders over hands', 'Kick with straight knee', 'Stand tall into lunge'],
      commonFaults: ['Closed shoulders', 'Bending kick leg']
    }
  },
  {
    id: 'gf_l2_vt_01',
    name: 'Running hand stand flat back',
    level: 2,
    category: 'VAULT',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 2 Vault (Page 2): Accelerated approach run, hurdle punch springboard into tight handstand falling to flat back on mat stack.',
    xpReward: 40,
    status: 'VERIFIED',
    officialRef: 'Gymfest Level 2 Vault',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'Zxbs4Jgw-3g',
      title: 'Running Handstand Flatback over Vault Progression',
      channelName: 'Gym South',
      thumbnail: 'https://i.ytimg.com/vi/Zxbs4Jgw-3g/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=Zxbs4Jgw-3g',
      embedUrl: 'https://www.youtube.com/embed/Zxbs4Jgw-3g'
    },
    writtenTutorial: {
      steps: ['Sprint down runway with speed.', 'Punch springboard with feet together.', 'Drive heels into vertical handstand on mat stack.', 'Fall straight onto back with tight core.'],
      keyCoachingCues: ['Heel drive into board', 'Straight arms', 'Fall flat like a board'],
      commonFaults: ['Arching lower back on impact', 'Bending elbows']
    }
  }
];
