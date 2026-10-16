export interface VerifiedClub {
  id: string;
  name: string;
  city: 'Lagos' | 'Abuja';
  logo: string | null;
  address: string | null;
  phone: string | null;
  coach: string | null;
  instagram: string | null;
  facebook: string | null;
  tiktok: string | null;
  youtube: string | null;
  missing: string[];
}

// Only details that could be checked against a public page or news caption.
// Blank fields stay blank. Missing items are listed so they can be filled in later.
export const VERIFIED_CLUBS: VerifiedClub[] = [
  {
    id: 'tee-tumblers-surulere',
    name: 'Tee Tumblers Gymnastics Club',
    city: 'Lagos',
    logo: null,
    address: 'Pampers School, 99 Owukori Crescent, Alaka Estate, Surulere, Lagos',
    phone: '08090932463, 08130027220',
    coach: 'Patrick Umoh',
    instagram: 'https://www.instagram.com/teetumblersgymnastics/',
    facebook: 'https://www.facebook.com/Teetumblersgymnastics/',
    tiktok: null,
    youtube: null,
    missing: ['Club logo', 'TikTok', 'YouTube', 'Street address for the Lekki and Meadow Hall sites'],
  },
  {
    id: 'lagos-state-gymnastics',
    name: 'Lagos State Gymnastics Club',
    city: 'Lagos',
    logo: null,
    address: null,
    phone: null,
    coach: 'Patrick Umoh',
    instagram: null,
    facebook: null,
    tiktok: null,
    youtube: null,
    missing: ['Club logo', 'Full address', 'Telephone', 'Instagram', 'Facebook', 'TikTok', 'YouTube'],
  },
  {
    id: 'emmy-gymnastics-abuja',
    name: 'Emmy Gymnastics Club',
    city: 'Abuja',
    logo: null,
    address: 'FCT Sports Complex, Area 10 Old Parade Ground, Abuja',
    phone: '+234 906 728 0137',
    coach: null,
    instagram: null,
    facebook: 'https://www.facebook.com/p/Emmy-Gymnastics-100027332606122/',
    tiktok: null,
    youtube: null,
    missing: ['Club logo', "Coach's name", 'Instagram', 'TikTok', 'YouTube'],
  },
];
