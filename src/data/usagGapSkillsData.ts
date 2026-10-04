import { Skill } from '../types';

// =========================================================================
// USAG GAPS DATASET: FLOOR, UNEVEN BARS, BALANCE BEAM, AND VAULT
// Provides full four-event Olympic gymnastics coverage alongside Gymfest Document
// =========================================================================

export const USAG_GAP_SKILLS: Skill[] = [
  // =======================================================================
  // UNEVEN BARS GAPS (LEVELS 1 - 10 / BRONZE, SILVER, GOLD, PLATINUM, DIAMOND)
  // =======================================================================
  {
    id: 'gap_l1_ub_01',
    name: 'Cast to 20° (Hips Lifting off Bar)',
    level: 1,
    category: 'BARS',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Front support on low bar, lean shoulders forward, drive legs back and hollow core to elevate hips 20° off bar.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'USAG L1 Bars Element #1',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K3gM33g2W1I',
      title: 'How to Cast on Bars | Beginner Drills',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/K3gM33g2W1I/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K3gM33g2W1I',
      embedUrl: 'https://www.youtube.com/embed/K3gM33g2W1I'
    },
    writtenTutorial: {
      steps: ['Start in locked front support with straight arms.', 'Shift shoulders slightly forward over the bar.', 'Drive feet and hips back into a tight hollow cast.', 'Return smoothly to front support without banging thighs.'],
      keyCoachingCues: ['Lock elbows straight', 'Hollow chest', 'Keep toes pointed together'],
      commonFaults: ['Bending elbows', 'Arching back on cast', 'Piking too early on return']
    }
  },
  {
    id: 'gap_l1_ub_02',
    name: 'Straight Arm Hang to Candlestick Hold',
    level: 1,
    category: 'BARS',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Straight arm hang from high or low bar, lift straight legs upward into inverted candlestick position with toes to bar.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'USAG L1 Bars Element #2',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'b5mN40Rj9bA',
      title: 'Bar Core & Hanging Candlestick Drills',
      channelName: 'Shift Movement Science',
      thumbnail: 'https://i.ytimg.com/vi/b5mN40Rj9bA/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=b5mN40Rj9bA',
      embedUrl: 'https://www.youtube.com/embed/b5mN40Rj9bA'
    },
    writtenTutorial: {
      steps: ['Hang with overhand grip with shoulders active.', 'Engage lats and lift legs with straight knees.', 'Raise hips to bar level holding tight vertical body line.', 'Lower with controlled eccentric strength.'],
      keyCoachingCues: ['Active shoulders', 'Straight knees', 'Control the descent'],
      commonFaults: ['Swinging excessively', 'Bending knees', 'Dropping down abruptly']
    }
  },
  {
    id: 'gap_l2_ub_01',
    name: 'Pullover to Front Support',
    level: 2,
    category: 'BARS',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Chin-up arm flexion, dynamic leg drive overhead pulling hips to bar, and wrist shift into front support.',
    xpReward: 30,
    status: 'VERIFIED',
    officialRef: 'USAG L2 Bars Element #1',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'e9K3p7vX6v8',
      title: 'How to Do a Pullover on Bars | Gymnastics Tutorial',
      channelName: 'Head Over Heels Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/e9K3p7vX6v8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=e9K3p7vX6v8',
      embedUrl: 'https://www.youtube.com/embed/e9K3p7vX6v8'
    },
    writtenTutorial: {
      steps: ['Step forward under bar with overhand grip.', 'Pull chin to bar while driving legs overhead.', 'Keep thighs close to the bar as hips rotate over.', 'Shift wrists forward to lock out in front support.'],
      keyCoachingCues: ['Chin to bar first', 'Keep bar close to belly', 'Roll wrists over'],
      commonFaults: ['Letting arms straighten early', 'Kicking legs away from the bar']
    }
  },
  {
    id: 'gap_l2_ub_02',
    name: 'Cast to 30° with Straight Body',
    level: 2,
    category: 'BARS',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Front support cast elevating hips 30° above bar with tight hollow posture and locked arms.',
    xpReward: 30,
    status: 'VERIFIED',
    officialRef: 'USAG L2 Bars Element #2',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K3gM33g2W1I',
      title: 'Casting Drills for Level 2 Bars',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/K3gM33g2W1I/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K3gM33g2W1I',
      embedUrl: 'https://www.youtube.com/embed/K3gM33g2W1I'
    },
    writtenTutorial: {
      steps: ['Hold front support with arms locked.', 'Dip hips and kick heels back and up.', 'Hit 30° hollow line with eyes on bar.', 'Absorb back to bar in front support.'],
      keyCoachingCues: ['Kick heels up', 'Eyes on bar', 'Lock elbows'],
      commonFaults: ['Arching back', 'Bending elbows']
    }
  },
  {
    id: 'gap_l2_ub_03',
    name: 'Back Hip Circle',
    level: 2,
    category: 'BARS',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Small cast away from bar, snap hips into bar, rotate backward 360° around bar returning to front support.',
    xpReward: 35,
    status: 'VERIFIED',
    officialRef: 'USAG L2 Bars Element #3',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'sFhWq-K9yQo',
      title: 'How to Do a Back Hip Circle | Bars Step by Step',
      channelName: 'Mary Lee Tracy',
      thumbnail: 'https://i.ytimg.com/vi/sFhWq-K9yQo/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=sFhWq-K9yQo',
      embedUrl: 'https://www.youtube.com/embed/sFhWq-K9yQo'
    },
    writtenTutorial: {
      steps: ['Cast slightly away from bar to create momentum.', 'Snap hips back into contact with bar.', 'Pike slightly and throw head/shoulders backward.', 'Shift wrists over bar at top to finish in front support.'],
      keyCoachingCues: ['Cast first', 'Glue hips to the rail', 'Shift wrists on top'],
      commonFaults: ['Hips peeling off bar', 'Bent arms throughout circle']
    }
  },
  {
    id: 'gap_slv_ub_01',
    name: 'Glide Swing with Extension',
    level: 3,
    category: 'BARS',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Jump to overgrip on low bar, pike glide forward inches off mat, fully open body line at peak, and swing back.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-UB-01 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'b5mN40Rj9bA',
      title: 'How to Master the Glide Swing on Bars',
      channelName: 'Shift Movement Science',
      thumbnail: 'https://i.ytimg.com/vi/b5mN40Rj9bA/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=b5mN40Rj9bA',
      embedUrl: 'https://www.youtube.com/embed/b5mN40Rj9bA'
    },
    writtenTutorial: {
      steps: ['Stand behind low bar and jump forward into pike glide.', 'Extend toes forward without dragging mat.', 'Open hips and shoulders fully at maximum forward swing.', 'Pull heels and hips back toward bar on backswing.'],
      keyCoachingCues: ['Straight arms locked', 'Pike on way out', 'Shoot toes forward at full extension', 'Keep chin neutral'],
      commonFaults: ['Bending knees during glide', 'Feet scraping the floor', 'Failing to extend at forward peak'],
      prerequisites: ['Hanging hollow hold (15 sec)', 'Straight leg toe-to-bar raises']
    }
  },
  {
    id: 'gap_slv_ub_03',
    name: 'Cast to 30°-45° (Hips Clear of Bar)',
    level: 3,
    category: 'BARS',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'From front support, drive heels backward-upward with straight arms, elevating hips 30° to 45° off the bar.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-UB-03 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K3gM33g2W1I',
      title: 'Level 3 / Silver Cast Technique & Height Drills',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/K3gM33g2W1I/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K3gM33g2W1I',
      embedUrl: 'https://www.youtube.com/embed/K3gM33g2W1I'
    },
    writtenTutorial: {
      steps: ['Start in tall front support, shoulders forward of bar.', 'Compress core and push actively down on the rail.', 'Drive heels backward and upward into 45° cast.', 'Lower under control back to thighs on bar.'],
      keyCoachingCues: ['Push bar down', 'Drive heels not head', 'Lock elbows', 'Hollow torso'],
      commonFaults: ['Elbows bending to cheat height', 'Arching lower back', 'Shoulders collapsing backward']
    }
  },
  {
    id: 'gap_slv_ub_05',
    name: 'Undershoot Dismount (Sole Circle / Cast Prep)',
    level: 3,
    category: 'BARS',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Cast from front support, pike hips underneath the bar, open into hollow arch dismount over mat.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-UB-05 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'yU87kK9XwF8',
      title: 'Undershoot Dismount on Uneven Bars Tutorial',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/yU87kK9XwF8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=yU87kK9XwF8',
      embedUrl: 'https://www.youtube.com/embed/yU87kK9XwF8'
    },
    writtenTutorial: {
      steps: ['Perform moderate cast away from bar.', 'Pike hips closely underneath the rail as body swings under.', 'Extend hips explosively upward and outward at 45°.', 'Release bar and stick landing on mat in demi-plié.'],
      keyCoachingCues: ['Pike under bar', 'Shoot toes up and out', 'Release on rise', 'Stick freeze'],
      commonFaults: ['Releasing too early or late', 'Hitting feet on low bar', 'Landing off balance forward']
    }
  },
  {
    id: 'gap_gld_ub_01',
    name: 'Glide Kip on Low Bar',
    level: 4,
    category: 'BARS',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Piked glide forward, toes snap to bar at extension, dynamic hip drive pulling bar to waist into front support.',
    xpReward: 55,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-GLD-UB-01 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'b5mN40Rj9bA',
      title: 'How to Kip on Bars | Step-by-Step Gymnastics Kip Drills',
      channelName: 'Shift Movement Science',
      thumbnail: 'https://i.ytimg.com/vi/b5mN40Rj9bA/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=b5mN40Rj9bA',
      embedUrl: 'https://www.youtube.com/embed/b5mN40Rj9bA'
    },
    writtenTutorial: {
      steps: ['Jump to glide swing, extending fully at front apex.', 'Snap toes to bar aggressively as swing reverses.', 'Pull bar up shins and thighs while driving shoulders forward.', 'Shift wrists over the bar to lock into front support.'],
      keyCoachingCues: ['Full glide extension', 'Toes to bar fast', 'Pants up to pockets', 'Shift wrists on top'],
      commonFaults: ['Early toe pull before extension', 'Bending elbows during pull', 'Dropping chest on bar contact'],
      prerequisites: ['Level 3 Glide swing with extension', 'Leg lifts 10 reps', 'Straight arm lat pull-downs']
    }
  },
  {
    id: 'gap_gld_ub_02',
    name: 'Cast to Horizontal (Min Above 0°)',
    level: 4,
    category: 'BARS',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Dynamic heel drive from front support with shoulders over rail, elevating straight body line to horizontal (0°-15°).',
    xpReward: 50,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-UB-02 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K3gM33g2W1I',
      title: 'How to Cast to Horizontal and Above | Bar Technique',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/K3gM33g2W1I/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K3gM33g2W1I',
      embedUrl: 'https://www.youtube.com/embed/K3gM33g2W1I'
    },
    writtenTutorial: {
      steps: ['Start in hollow front support with straight arms locked.', 'Dip hips slightly and fire glutes/hamstrings to drive heels upward.', 'Keep shoulders leaning slightly in front of bar to balance center of mass.', 'Hit horizontal line with ribs in and toes pointed, returning smoothly.'],
      keyCoachingCues: ['Push the bar through floor', 'Heel drive leads', 'Hollow ribs', 'Eyes on the wood'],
      commonFaults: ['Bent elbows absorbing power', 'Arched back below horizontal', 'Shoulders leaning too far back']
    }
  },
  {
    id: 'gap_gld_ub_03',
    name: 'Clear Hip Circle to Horizontal (Back Free Hip)',
    level: 4,
    category: 'BARS',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Cast away from bar, drop hips without touching rail, circle backward in hollow shape, open to horizontal.',
    xpReward: 55,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-UB-03 (Level 4-5 / Xcel Gold)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '9oV-c-XG3uY',
      title: 'Clear Hip Circle Progression & Technique | Free Hip',
      channelName: 'Coach Brent Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/9oV-c-XG3uY/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=9oV-c-XG3uY',
      embedUrl: 'https://www.youtube.com/embed/9oV-c-XG3uY'
    },
    writtenTutorial: {
      steps: ['Cast into open hollow shape above horizontal.', 'Drop shoulders backward keeping hips 2-4 inches away from bar.', 'Rotate backward under bar maintaining straight arm torque.', 'Push actively and open shoulders to finish cast above horizontal.'],
      keyCoachingCues: ['Hips off the bar', 'Head neutral', 'Straight arms through circle', 'Push at the bottom'],
      commonFaults: ['Hips touching the bar (turns into back hip circle)', 'Bent arms', 'Dropping head back early'],
      prerequisites: ['Back hip circle mastered', 'Cast to horizontal', 'Pike compression strength']
    }
  },
  {
    id: 'gap_gld_ub_04',
    name: 'Squat-on / Pike-on to High Bar Jump',
    level: 4,
    category: 'BARS',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Cast from low bar, place balls of feet between hands on rail (squat or pike), stand and jump to catch high bar.',
    xpReward: 50,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-UB-04 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'v5V2H8N49p0',
      title: 'Squat On / Pike On to High Bar Jump Drill',
      channelName: 'Mary Lee Tracy',
      thumbnail: 'https://i.ytimg.com/vi/v5V2H8N49p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=v5V2H8N49p0',
      embedUrl: 'https://www.youtube.com/embed/v5V2H8N49p0'
    },
    writtenTutorial: {
      steps: ['Cast from low bar to create clearance.', 'Pike hips high and place feet lightly on rail between hands.', 'Spot the high bar, extend legs explosively.', 'Reach arms overhead to catch high bar in solid overhand hang.'],
      keyCoachingCues: ['Hips up high on squat', 'Soft feet on rail', 'Spot high bar', 'Jump up and catch'],
      commonFaults: ['Feet slipping off rail', 'Jumping backward instead of upward to high bar', 'Bending arms on catch']
    }
  },
  {
    id: 'gap_gld_ub_05',
    name: 'Tuck Flyaway Dismount from High Bar',
    level: 5,
    category: 'BARS',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Tap swing on high bar, release at front apex, execute backward tucked salto rotation and stick landing.',
    xpReward: 60,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-UB-05 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K7T6p3eF4e0',
      title: 'How to Do a Flyaway on Uneven Bars | Step by Step',
      channelName: 'Shift Movement Science',
      thumbnail: 'https://i.ytimg.com/vi/K7T6p3eF4e0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K7T6p3eF4e0',
      embedUrl: 'https://www.youtube.com/embed/K7T6p3eF4e0'
    },
    writtenTutorial: {
      steps: ['Generate powerful tap swing on high bar with arch-to-hollow kick under bar.', 'On forward swing, drive toes toward ceiling above bar height.', 'Release bar at top of rise, pull knees into chest in tight tuck.', 'Spot landing mat, open out of tuck, and stick landing in demi-plié.'],
      keyCoachingCues: ['Big tap under bar', 'Release on the rise', 'Pull knees to chest', 'Spot the ground and stick'],
      commonFaults: ['Releasing too early (shoots backwards)', 'Releasing late (cuts down to bar)', 'Loose tuck with open knees'],
      prerequisites: ['Solid high bar tap swings', 'Tuck back salto on trampoline/pit']
    }
  },
  {
    id: 'gap_plt_ub_01',
    name: 'Cast to Handstand (Vertical on Bars)',
    level: 7,
    category: 'BARS',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Dynamic cast straight into 180° vertical handstand on high or low bar with zero hip angle deduction.',
    xpReward: 70,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-UB-01 (Level 6-7 / Xcel Platinum)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ZtU5wM6n8_Y',
      title: 'How to Cast to Handstand on Bars | Coaching Masterclass',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/ZtU5wM6n8_Y/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ZtU5wM6n8_Y',
      embedUrl: 'https://www.youtube.com/embed/ZtU5wM6n8_Y'
    },
    writtenTutorial: {
      steps: ['From front support, drive heels vigorously upward.', 'Lean shoulders forward to counterbalance the heel drive.', 'Extend through thoracic spine and push tall through wrists.', 'Lock out vertical handstand momentarily before initiating next skill.'],
      keyCoachingCues: ['Shoulders forward first', 'Aggressive heel drive', 'Lock elbows solid', 'Pinch ears with arms at vertical'],
      commonFaults: ['Arching through lower back (banana handstand)', 'Under-casting short of vertical (<10° deduction)', 'Collapsing shoulders'],
      prerequisites: ['Cast to 45° above horizontal', 'Floor press handstand', 'Pirouette bar drills']
    }
  },
  {
    id: 'gap_plt_ub_02',
    name: 'Giant Circle (Back Giant on High Bar)',
    level: 7,
    category: 'BARS',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: '360° rotation around high bar with straight arms and body passing through vertical handstand at apex.',
    xpReward: 75,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-UB-02 (Level 6-7 / Xcel Platinum)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'hG5R9eA2_W8',
      title: 'How to Do a Giant on Uneven Bars | Drills & Technique',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/hG5R9eA2_W8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=hG5R9eA2_W8',
      embedUrl: 'https://www.youtube.com/embed/hG5R9eA2_W8'
    },
    writtenTutorial: {
      steps: ['Cast to handstand on high bar with overhand grip.', 'Fall forward maintaining rigid hollow body line.', 'Tap aggressively under bar from slight arch to hollow snap.', 'Heel drive pulls body over high bar back to vertical handstand.'],
      keyCoachingCues: ['Stay long on downswing', 'Late hollow tap under bar', 'Shift wrists on top', 'Hit handstand at top'],
      commonFaults: ['Early tap cutting swing height', 'Bending arms over the top', 'Piking hips on upswing'],
      prerequisites: ['Cast to handstand', 'Strap bar giant swings', 'Clear hip to handstand']
    }
  },
  {
    id: 'gap_plt_ub_03',
    name: 'Layout Flyaway Dismount from High Bar',
    level: 6,
    category: 'BARS',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'High bar swing with tap, release into stretched layout backward salto with stick landing.',
    xpReward: 65,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-UB-03 (Level 6-7 / Xcel Platinum)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K7T6p3eF4e0',
      title: 'Layout Flyaway Technique & Drills for Bars',
      channelName: 'Shift Movement Science',
      thumbnail: 'https://i.ytimg.com/vi/K7T6p3eF4e0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K7T6p3eF4e0',
      embedUrl: 'https://www.youtube.com/embed/K7T6p3eF4e0'
    },
    writtenTutorial: {
      steps: ['Generate powerful tap swing on high bar.', 'Drive toes and hips up into forward swing rise.', 'Release bar at peak and maintain open straight body line in air.', 'Rotate through backward layout, spot mat, and stick.'],
      keyCoachingCues: ['Straight body layout', 'Eyes open spotting ground', 'Release at top of rise', 'Stick freeze'],
      commonFaults: ['Piking or tucking knees (downgrade to tuck flyaway)', 'Throwing head backward prematurely', 'Under-rotating landing']
    }
  },
  {
    id: 'gap_dia_ub_01',
    name: 'Pak Salto Transition to Low Bar',
    level: 9,
    category: 'BARS',
    xcelTier: 'DIAMOND',
    curriculumSource: 'USAG_GAP',
    description: 'Cast handstand on high bar, swing down and release into backward stretched salto between bars to catch low bar in hang.',
    xpReward: 85,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L9 Bars D-Element #1',
    difficulty: 'D',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'hG5R9eA2_W8',
      title: 'Pak Salto Progression on Bars',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/hG5R9eA2_W8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=hG5R9eA2_W8',
      embedUrl: 'https://www.youtube.com/embed/hG5R9eA2_W8'
    },
    writtenTutorial: {
      steps: ['Cast to handstand on high bar.', 'Swing forward, tap and release backward into layout salto.', 'Spot low bar rail during flight.', 'Catch low bar with arms straight and swing through.'],
      keyCoachingCues: ['Late tap', 'Keep layout open', 'Eyes on low bar rail'],
      commonFaults: ['Piking in flight', 'Over-rotating past low bar']
    }
  },

  // =======================================================================
  // BALANCE BEAM GAPS (LEVELS 1 - 10 / BRONZE, SILVER, GOLD, PLATINUM, DIAMOND)
  // =======================================================================
  {
    id: 'gap_l1_bb_01',
    name: 'Jump to Front Support Mount on Beam',
    level: 1,
    category: 'BEAM',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Stand facing beam, jump placing both hands on surface, press into balanced front support with tall chest and pointed toes.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'USAG L1 Beam Element #1',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'PFqKbqRGUyY',
      title: 'Beginner Beam Mounts & Front Support',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/PFqKbqRGUyY/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=PFqKbqRGUyY',
      embedUrl: 'https://www.youtube.com/embed/PFqKbqRGUyY'
    },
    writtenTutorial: {
      steps: ['Stand facing low or medium beam.', 'Jump explosively placing hands thumbs on top.', 'Lock elbows and lift hips into tall front support.', 'Hold motionless 2 seconds.'],
      keyCoachingCues: ['Straight arms', 'Tall chest', 'Squeeze legs together'],
      commonFaults: ['Bent elbows', 'Hips sagging into beam']
    }
  },
  {
    id: 'gap_l1_bb_02',
    name: 'Arabesque Hold (30° Leg Lift)',
    level: 1,
    category: 'BEAM',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Stand on one foot in releve or flat, lift rear leg straight to 30° minimum holding balance for 2 seconds with artistic arms.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'USAG L1 Beam Element #2',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Arabesque & Balance Holds on Beam',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Stand tall with supporting leg locked.', 'Lift back leg smoothly with pointed toe.', 'Hold stationary for 2 seconds with chest lifted.', 'Lower with elegance to beam.'],
      keyCoachingCues: ['Lock supporting knee', 'Lift back leg', 'Chest proud'],
      commonFaults: ['Bending supporting knee', 'Dropping chest forward']
    }
  },
  {
    id: 'gap_l2_bb_01',
    name: 'English Handstand Hold on Beam',
    level: 2,
    category: 'BEAM',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Step into lunge, place hands side by side on beam, kick to 45° English handstand, tap toes together and step down.',
    xpReward: 30,
    status: 'VERIFIED',
    officialRef: 'USAG L2 Beam Element #1',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'y1B3qK7v2p0',
      title: 'Handstand on Balance Beam | Progression & Safety',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/y1B3qK7v2p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=y1B3qK7v2p0',
      embedUrl: 'https://www.youtube.com/embed/y1B3qK7v2p0'
    },
    writtenTutorial: {
      steps: ['Lunge on beam, arms by ears.', 'Reach hands to beam with thumbs on top, fingers gripping sides.', 'Kick to 45° with tight straight legs.', 'Step down one foot at a time into clean lunge.'],
      keyCoachingCues: ['Thumbs on top', 'Lock elbows', 'Step down in lunge'],
      commonFaults: ['Over-kicking off beam', 'Bent elbows']
    }
  },
  {
    id: 'gap_slv_bb_02',
    name: 'Cross Handstand on Beam (Min 45° to Vertical)',
    level: 3,
    category: 'BEAM',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Kick into handstand perpendicular or crosswise on beam, bringing legs together at minimum 45° angle to vertical with straight body alignment.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-BB-02 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'y1B3qK7v2p0',
      title: 'How to Do a Handstand on Balance Beam | Progression & Safety',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/y1B3qK7v2p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=y1B3qK7v2p0',
      embedUrl: 'https://www.youtube.com/embed/y1B3qK7v2p0'
    },
    writtenTutorial: {
      steps: ['Start in high beam lunge with crown of head tall and arms hugging ears.', 'Hinge at hips, placing hands side-by-side with thumbs on top of beam.', 'Kick back leg aggressively, bringing second leg to join at minimum 45° up to vertical.', 'Step down one foot at a time into controlled finish lunge.'],
      keyCoachingCues: ['Thumbs on top, fingers hugging sides', 'Lock elbows solid', 'Pinch ankles together', 'Step down softly into lunge'],
      commonFaults: ['Hands placed crookedly', 'Kicking past vertical without bailout control', 'Bending elbows on weight transfer']
    }
  },
  {
    id: 'gap_slv_bb_03',
    name: 'Cartwheel on Balance Beam',
    level: 3,
    category: 'BEAM',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Straight line cartwheel placing hands hand-over-hand along beam axis, kicking through vertical straddle to lunge.',
    xpReward: 45,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-BB-03 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'Wp_L04K98uQ',
      title: 'How to Cartwheel on the Balance Beam | Confidence Drills',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/Wp_L04K98uQ/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=Wp_L04K98uQ',
      embedUrl: 'https://www.youtube.com/embed/Wp_L04K98uQ'
    },
    writtenTutorial: {
      steps: ['Lunge along center line of the beam.', 'Reach lead hand along beam axis, followed by second hand in line.', 'Kick legs up through vertical straddle plane without hip pike.', 'Land lead foot on center line, followed by trailing foot into balanced lunge.'],
      keyCoachingCues: ['Hands in a straight line', 'Eyes tracking beam between thumbs', 'Kick through true vertical', 'Land on the line'],
      commonFaults: ['Reaching off-center', 'Piking hips backward out of alignment', 'Landing with feet too wide or falling off']
    }
  },
  {
    id: 'gap_slv_bb_04',
    name: 'Split Jump (60°-90° Split) on Beam',
    level: 3,
    category: 'BEAM',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Explosive jump off two feet along beam axis, separating legs into equal 60°-90° split with stuck landing.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-BB-04 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Split Jump Technique & Balance on Beam',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Demi-plié with feet aligned front-to-back on beam.', 'Explode upward extending both legs equally front and back.', 'Hit 60°-90° split angle with chest upright and toes pointed.', 'Absorb landing in demi-plié with lead foot in front, holding stationary.'],
      keyCoachingCues: ['Equal split front and back', 'Chest stays upright', 'Toe-heel landing along beam', 'Freeze 2 seconds'],
      commonFaults: ['Unequal leg split (front leg high, back leg dragging)', 'Dropping chest forward to fake split', 'Wobbling on landing']
    }
  },
  {
    id: 'gap_slv_bb_05',
    name: '1/2 Pivot Turn on One Foot (Beam)',
    level: 3,
    category: 'BEAM',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Step into releve on one foot with other foot in passé, execute 180° rotation with tight core and upright carriage.',
    xpReward: 35,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-BB-05 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Turns and Pivots on Balance Beam | Balance Secrets',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Step forward into high releve on supporting foot.', 'Lock ankle and lift trailing foot into coupé or passé.', 'Rotate 180° using core torque while spotting the opposite beam end.', 'Step through into finished position without heel drop.'],
      keyCoachingCues: ['High ankle releve', 'Spot the end of the beam', 'Squeeze ribs and glutes', 'Clean arm frame'],
      commonFaults: ['Dropping heel during turn', 'Wobbly ankle', 'Losing spot and over-rotating']
    }
  },
  {
    id: 'gap_slv_bb_06',
    name: 'Round-off Dismount off End of Beam',
    level: 3,
    category: 'BEAM',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Hurdle step along beam, place hands in T-position at beam end, snap legs together through vertical, rebound off end and stick.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-BB-06 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'GAbIx6oQAv4',
      title: 'Round-Off Dismount on Balance Beam',
      channelName: 'Rylie Shaw',
      thumbnail: 'https://i.ytimg.com/vi/GAbIx6oQAv4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=GAbIx6oQAv4',
      embedUrl: 'https://www.youtube.com/embed/GAbIx6oQAv4'
    },
    writtenTutorial: {
      steps: ['Take confident step into lunge toward the end of beam.', 'Place lead hand then second hand in T-shape at beam tip.', 'Kick legs up through vertical, snapping together at 12 o’clock.', 'Rebound explosively off hands, turn 1/2, and stick landing facing beam.'],
      keyCoachingCues: ['Hands on center line', 'Snap legs fast at vertical', 'Drive chest up off hands', 'Stick and hold 3 seconds'],
      commonFaults: ['Missing beam with second hand', 'Piking hips early before vertical', 'Landing too close to beam']
    }
  },
  {
    id: 'gap_gld_bb_01',
    name: 'Back Walkover on Balance Beam',
    level: 4,
    category: 'BEAM',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'One-foot lifted bridge back along center line of beam, hands placed with thumbs together, kicking trailing leg smoothly over.',
    xpReward: 55,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-BB-01 (Level 4-5 / Xcel Gold)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'y1B3qK7v2p0',
      title: 'How to Do a Back Walkover on Beam | Overcoming Fear & Technique',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/y1B3qK7v2p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=y1B3qK7v2p0',
      embedUrl: 'https://www.youtube.com/embed/y1B3qK7v2p0'
    },
    writtenTutorial: {
      steps: ['Stand in beam lunge with lead leg lifted slightly in front.', 'Arch backward through upper spine, eyes spotting the beam surface.', 'Place hands thumbs touching on center line of beam with locked arms.', 'Kick supporting leg up through 180° split and step down in lunge.'],
      keyCoachingCues: ['Spot beam before hands touch', 'Thumbs kissing on beam line', 'Push shoulders open', 'Controlled foot-foot landing'],
      commonFaults: ['Hands missing beam line', 'Dropping head to side out of alignment', 'Bending supporting knee on takeoff']
    }
  },
  {
    id: 'gap_gld_bb_02',
    name: 'Back Handspring Step-out on Beam (Acro Prep)',
    level: 5,
    category: 'BEAM',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Dynamic sit and jump backward along beam axis, hands contacting center line with flight, stepping out to lunge.',
    xpReward: 60,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-BB-02 (Level 4-5 / Xcel Gold)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'y1B3qK7v2p0',
      title: 'Back Handspring Step-out on Beam Drills',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/y1B3qK7v2p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=y1B3qK7v2p0',
      embedUrl: 'https://www.youtube.com/embed/y1B3qK7v2p0'
    },
    writtenTutorial: {
      steps: ['Stand in tight prep with feet aligned on beam.', 'Sit back into hips, arms swinging back.', 'Explode backward through fingers, driving hips over head.', 'Hands strike beam with thumbs kissing, step out lead leg smoothly into lunge.'],
      keyCoachingCues: ['Sit without leaning chest forward', 'Jump long along beam line', 'Hands thumbs touching', 'Step out with control'],
      commonFaults: ['Twisting hips off line', 'Bending elbows on hand strike', 'Rushing step-out and losing balance']
    }
  },
  {
    id: 'gap_gld_bb_03',
    name: 'Split Leap (120° Separation) on Beam',
    level: 4,
    category: 'BEAM',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Forward step and elevation off one foot, splitting legs in air to minimum 120° with straight knees and upright chest.',
    xpReward: 50,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-BB-03 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Split Leap Drills for Height and 120+ Degree Extension on Beam',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Step forward with lead foot in demi-plié.', 'Push aggressively off beam driving back leg back and lead leg forward.', 'Achieve 120° split at apex of jump.', 'Land on front foot in plié along center line and step through.'],
      keyCoachingCues: ['Drive through toes for height', 'Split legs equally', 'Chest tall and ribs in', 'Soft toe-ball-heel landing'],
      commonFaults: ['Split angle under 120° (<0.20 deduction)', 'Bent back leg', 'Landing flat footed with balance check']
    }
  },
  {
    id: 'gap_gld_bb_05',
    name: 'Front Tuck Dismount off Beam',
    level: 5,
    category: 'BEAM',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Hurdle or step forward toward end of beam, two-foot punch, forward tucked salto in air, sticking landing on 8" mat.',
    xpReward: 55,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-BB-05 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'yU87kK9XwF8',
      title: 'Front Tuck Dismount off Balance Beam',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/yU87kK9XwF8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=yU87kK9XwF8',
      embedUrl: 'https://www.youtube.com/embed/yU87kK9XwF8'
    },
    writtenTutorial: {
      steps: ['Step forward into low hurdle toward beam end.', 'Punch both feet explosively off the end.', 'Drive hips upward, pulling knees to chest in compact tuck.', 'Spot mat, open out of tuck, and stick landing with arms up.'],
      keyCoachingCues: ['Punch off beam tips', 'Hips lift before tucking', 'Tight tuck', 'Stick freeze'],
      commonFaults: ['Diving chest forward off beam', 'Loose open tuck', 'Landing with deep squat']
    }
  },
  {
    id: 'gap_plt_bb_01',
    name: 'Back Handspring Step-out on Beam (Flight Acro)',
    level: 6,
    category: 'BEAM',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Official flight acro requirement on balance beam: complete flight phase before hand contact, stepping out in rhythm.',
    xpReward: 70,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-BB-01 (Level 6-7 / Xcel Platinum)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'y1B3qK7v2p0',
      title: 'Back Handspring Step-out on Balance Beam | Master Flight',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/y1B3qK7v2p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=y1B3qK7v2p0',
      embedUrl: 'https://www.youtube.com/embed/y1B3qK7v2p0'
    },
    writtenTutorial: {
      steps: ['Stand in balanced prep position.', 'Sit backward with explosive leg jump creating clear flight phase.', 'Hands make contact on center line, thumbs touching.', 'Pass through split handstand and step out into continuous rhythm.'],
      keyCoachingCues: ['Clear flight phase', 'Hands in line on beam', 'Lock elbows', 'Continuous connection cadence'],
      commonFaults: ['Lack of flight phase (deduction)', 'Twisting off beam line', 'Bent arms causing crash']
    }
  },
  {
    id: 'gap_plt_bb_02',
    name: 'Aerial Cartwheel on Balance Beam',
    level: 7,
    category: 'BEAM',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'No-handed cartwheel along beam axis: powerful hurdle punch, torso dip and heel kick through vertical, landing on beam.',
    xpReward: 75,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-BB-02 (Level 6-7 / Xcel Platinum)',
    difficulty: 'D',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'Wp_L04K98uQ',
      title: 'How to Do a Beam Aerial (No-Hand Cartwheel) | Progressions',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/Wp_L04K98uQ/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=Wp_L04K98uQ',
      embedUrl: 'https://www.youtube.com/embed/Wp_L04K98uQ'
    },
    writtenTutorial: {
      steps: ['Hurdle step along beam with forward momentum.', 'Drive chest toward beam while vigorously kicking back heel to sky.', 'Snap arms in close to chest without touching beam.', 'Rotate through vertical straddle and spot beam line for foot-foot landing.'],
      keyCoachingCues: ['Fast heel drive', 'Chest drives down then lifts', 'Spot the beam the entire time', 'Land softly on line'],
      commonFaults: ['Hesitation leading to hand touch', 'Rotating sideways off line', 'Incomplete leg extension']
    }
  },
  {
    id: 'gap_plt_bb_03',
    name: 'Back Layout Dismount off Beam',
    level: 6,
    category: 'BEAM',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Round-off off beam end into stretched backward layout salto in air, landing in stuck position on mat.',
    xpReward: 65,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-BB-03 (Level 6-7 / Xcel Platinum)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K7T6p3eF4e0',
      title: 'Round-off Back Layout Dismount off Balance Beam',
      channelName: 'Shift Movement Science',
      thumbnail: 'https://i.ytimg.com/vi/K7T6p3eF4e0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K7T6p3eF4e0',
      embedUrl: 'https://www.youtube.com/embed/K7T6p3eF4e0'
    },
    writtenTutorial: {
      steps: ['Execute crisp round-off off beam end with aggressive hand block.', 'Punch into layout takeoff, driving toes upward.', 'Maintain hollow straight body line through backward rotation.', 'Spot landing surface, absorb impact, and stick.'],
      keyCoachingCues: ['Solid block off beam', 'Straight body alignment', 'Eyes open', 'Stick freeze'],
      commonFaults: ['Piking hips in flight', 'Throwing head back', 'Step on landing']
    }
  },
  {
    id: 'gap_dia_bb_01',
    name: 'Back Handspring to Layout Step-out on Beam',
    level: 9,
    category: 'BEAM',
    xcelTier: 'DIAMOND',
    curriculumSource: 'USAG_GAP',
    description: 'Acro flight series: back handspring connected directly into stretched layout step-out without pause.',
    xpReward: 85,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L9 Beam Acro Flight Series',
    difficulty: 'D',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'y1B3qK7v2p0',
      title: 'BHS to Layout Step-out Series on Beam',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/y1B3qK7v2p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=y1B3qK7v2p0',
      embedUrl: 'https://www.youtube.com/embed/y1B3qK7v2p0'
    },
    writtenTutorial: {
      steps: ['Execute back handspring step-out along center line.', 'Rebound directly into backward layout jump without halting momentum.', 'Kick trailing leg through vertical layout step-out.', 'Step down into solid lunge balance.'],
      keyCoachingCues: ['Immediate rebound', 'Keep hips square', 'Spot beam throughout'],
      commonFaults: ['Pause between elements', 'Crooked alignment']
    }
  },

  // =======================================================================
  // VAULT GAPS (LEVELS 1 - 10 / BRONZE, SILVER, GOLD, PLATINUM, DIAMOND)
  // =======================================================================
  {
    id: 'gap_l1_vt_01',
    name: 'Kick to Handstand Flatback on 16" Mat Stack',
    level: 1,
    category: 'VAULT',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Take 3-4 steps, lunge onto floor, kick into vertical handstand with hands on edge of 16" mat stack, fall straight to flat back.',
    xpReward: 25,
    status: 'VERIFIED',
    officialRef: 'USAG L1 Vault Element #1',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K3gM33g2W1I',
      title: 'Handstand Flatback Progression for Level 1 Vault',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/K3gM33g2W1I/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K3gM33g2W1I',
      embedUrl: 'https://www.youtube.com/embed/K3gM33g2W1I'
    },
    writtenTutorial: {
      steps: ['Short accelerated approach into deep lunge.', 'Place hands on front edge of 16" mat.', 'Kick to vertical handstand with heels together.', 'Hollow and fall flat onto back with chin tucked.'],
      keyCoachingCues: ['Lock elbows', 'Heels together', 'Chin to chest on landing'],
      commonFaults: ['Arching back', 'Bending elbows on mat contact']
    }
  },
  {
    id: 'gap_l2_vt_01',
    name: 'Run & Hurdle to Flatback on 24" Mat Stack',
    level: 2,
    category: 'VAULT',
    xcelTier: 'BRONZE',
    curriculumSource: 'USAG_GAP',
    description: 'Sprint 30-40ft, hurdle punch onto springboard, kick through handstand onto 24" mat stack, falling straight to flat back.',
    xpReward: 30,
    status: 'VERIFIED',
    officialRef: 'USAG L2 Vault Element #1',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'vA6qL1hNq_4',
      title: 'Springboard to Handstand Flatback Vault Drills',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/vA6qL1hNq_4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=vA6qL1hNq_4',
      embedUrl: 'https://www.youtube.com/embed/vA6qL1hNq_4'
    },
    writtenTutorial: {
      steps: ['Run with forward acceleration.', 'Hurdle punch springboard with both feet simultaneously.', 'Reach hands to front edge of 24" mat stack.', 'Hit vertical and fall flat on back.'],
      keyCoachingCues: ['Low fast hurdle', 'Punch with balls of feet', 'Tight hollow body'],
      commonFaults: ['Slowing down before springboard', 'Arching back on flatback']
    }
  },
  {
    id: 'gap_slv_vt_01',
    name: 'Handstand Flatback onto 32" Mat Stack',
    level: 3,
    category: 'VAULT',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Accelerated board hurdle into tight handstand with heel drive, falling straight to flat back on 32" mat stack.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-VT-01 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K3gM33g2W1I',
      title: 'Handstand Flat Back Vault Technique & Drills',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/K3gM33g2W1I/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K3gM33g2W1I',
      embedUrl: 'https://www.youtube.com/embed/K3gM33g2W1I'
    },
    writtenTutorial: {
      steps: ['Run with forward acceleration and hurdle onto the springboard with feet together.', 'Punch board explosively, punching arms up through ears into 45° entry toward mat stack.', 'Hit vertical handstand momentarily on front edge of 32" mat stack.', 'Hollow down and drop flat onto back with chin tucked.'],
      keyCoachingCues: ['Fast arm swing', 'Eyes on the board', 'Lock ribs flat', 'Pinch heels together'],
      commonFaults: ['Arching through lower back on impact', 'Bending elbows on contact', 'Under-rotating']
    }
  },
  {
    id: 'gap_slv_vt_02',
    name: 'Run & Hurdle onto Springboard to Straight Jump',
    level: 3,
    category: 'VAULT',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Consistent accelerated sprint, low hurdle onto sweet spot of the board, and explosive vertical straight jump with stuck landing.',
    xpReward: 35,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-VT-02 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'vA6qL1hNq_4',
      title: 'How to Run and Hurdle onto the Springboard | Vault Drills',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/vA6qL1hNq_4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=vA6qL1hNq_4',
      embedUrl: 'https://www.youtube.com/embed/vA6qL1hNq_4'
    },
    writtenTutorial: {
      steps: ['Sprint 40-50 feet with upright sprinting mechanics and high knees.', 'Execute low forward-driven hurdle step off one foot.', 'Punch both balls of feet simultaneously on springboard sweet spot.', 'Drive arms straight up by ears into tight hollow straight jump, stick landing.'],
      keyCoachingCues: ['Accelerate into board', 'Low fast hurdle', 'Punch the springs', 'Stick and hold 3 seconds'],
      commonFaults: ['Decelerating before hurdle', 'Jumping too high into board', 'Dropping arms on landing']
    }
  },
  {
    id: 'gap_gld_vt_01',
    name: 'Front Handspring over Vault Table',
    level: 4,
    category: 'VAULT',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Official USAG Level 4-5 vault: accelerated run, punch springboard, pre-flight to table, shoulder block to post-flight and stick.',
    xpReward: 55,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-VT-01 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'X6G7p_R4m_s',
      title: 'Front Handspring Vault Technique | Shoulder Block & Post Flight',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/X6G7p_R4m_s/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=X6G7p_R4m_s',
      embedUrl: 'https://www.youtube.com/embed/X6G7p_R4m_s'
    },
    writtenTutorial: {
      steps: ['Sprint down runway with continuous acceleration into low hurdle.', 'Punch board with feet slightly ahead of hips, driving heels violently upward.', 'Hit table before vertical with straight arms and shrug through shoulders.', 'Repel off table into high hollow post-flight, landing and sticking in demi-plié.'],
      keyCoachingCues: ['Heel drive leads entry', 'Shrug shoulders to ears on contact', 'Short block time (<0.2s)', 'Stick landing with chest high'],
      commonFaults: ['Bending elbows on table (collapsing)', 'Late block past vertical', 'Piking on landing']
    }
  },
  {
    id: 'gap_gld_vt_02',
    name: 'Half-On Vault Entry Drill (1/4 - 1/2 Twist Entry)',
    level: 5,
    category: 'VAULT',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Hurdle onto board, initiate 1/4 to 1/2 twist in pre-flight, contact table in sideways handstand position, repel off to flatback/stand.',
    xpReward: 55,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-VT-02 (Level 4-5 / Xcel Gold)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'vA6qL1hNq_4',
      title: 'Tsukahara / Yurchenko Half-On Vault Entry Drills',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/vA6qL1hNq_4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=vA6qL1hNq_4',
      embedUrl: 'https://www.youtube.com/embed/vA6qL1hNq_4'
    },
    writtenTutorial: {
      steps: ['Execute aggressive sprint and low punch on springboard.', 'Initiate 1/4 turn with shoulders during pre-flight rise.', 'Hands contact table in staggered alignment (first hand sideways, second forward).', 'Block vigorously through shoulders, driving hips off table.'],
      keyCoachingCues: ['Turn starts after board punch', 'Staggered hand placement', 'Shoulder pop off table', 'Eyes spot landing zone'],
      commonFaults: ['Turning on the board before punching', 'Dropping head to side', 'Weak shoulder block']
    }
  },
  {
    id: 'gap_plt_vt_01',
    name: 'Front Handspring Half-Off Vault (1/2 Twist Off)',
    level: 6,
    category: 'VAULT',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Front handspring entry onto vault table, explosive shoulder block, 1/2 twist in post-flight, landing facing the vault table.',
    xpReward: 65,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-VT-01 (Level 6-7 / Xcel Platinum)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'X6G7p_R4m_s',
      title: 'Handspring Half-Off (Twisting Post Flight) Vault Drills',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/X6G7p_R4m_s/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=X6G7p_R4m_s',
      embedUrl: 'https://www.youtube.com/embed/X6G7p_R4m_s'
    },
    writtenTutorial: {
      steps: ['Sprint and punch board into powerful front handspring entry.', 'Shoulders shrug explosive block off table into high post-flight.', 'As body rises, wrap arm across chest to initiate 180° twist.', 'Spot landing mat facing the table and stick landing firmly.'],
      keyCoachingCues: ['Block first, twist second', 'Wrap arm tight across chest', 'Stay in hollow pencil line', 'Spot the landing early'],
      commonFaults: ['Twisting on table (causes deduction/danger)', 'Incomplete twist (<180°)', 'Over-rotating off feet']
    }
  },
  {
    id: 'gap_plt_vt_02',
    name: 'Tsukahara Vault Entry Drill (1/4 - 1/2 Turn On)',
    level: 7,
    category: 'VAULT',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Round-off entry onto vault table with 1/2 turn on, explosive hand block into backward post-flight onto landing mat.',
    xpReward: 70,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-VT-02 (Level 6-7 / Xcel Platinum)',
    difficulty: 'C',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'WBLD4wPLeSg',
      title: 'Tsukahara Vault Progression: From Drills to Table',
      channelName: 'Gymnastics Zone',
      thumbnail: 'https://i.ytimg.com/vi/WBLD4wPLeSg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=WBLD4wPLeSg',
      embedUrl: 'https://www.youtube.com/embed/WBLD4wPLeSg'
    },
    writtenTutorial: {
      steps: ['High-speed runway approach with maximum sprint velocity.', 'Hurdle onto board, punching with quick 1/4 to 1/2 turn into table.', 'First hand hits sideways, second hand points backward toward runway.', 'Block aggressively off hands into high backward salto rotation.'],
      keyCoachingCues: ['Straight run', 'Fast board turn', 'Violent shoulder block', 'Spot landing mat in air'],
      commonFaults: ['Slowing down on approach', 'Hands slipping on table', 'Under-rotating post flight']
    }
  },
  {
    id: 'gap_dia_vt_01',
    name: 'Tsukahara Piked / Layout Vault',
    level: 9,
    category: 'VAULT',
    xcelTier: 'DIAMOND',
    curriculumSource: 'USAG_GAP',
    description: '1/2 turn onto vault table followed by backward salto in piked or layout body shape with stuck landing.',
    xpReward: 85,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L9 Vault Element',
    difficulty: 'D',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'WBLD4wPLeSg',
      title: 'Tsukahara Layout Vault Breakdown',
      channelName: 'Gymnastics Zone',
      thumbnail: 'https://i.ytimg.com/vi/WBLD4wPLeSg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=WBLD4wPLeSg',
      embedUrl: 'https://www.youtube.com/embed/WBLD4wPLeSg'
    },
    writtenTutorial: {
      steps: ['Sprint at 9.0+ m/s down runway.', 'Punch springboard into 1/2 turn on.', 'Block explosively off table into stretched post-flight layout.', 'Rotate 360° backward, spot landing and stick.'],
      keyCoachingCues: ['Maximum speed', 'Repel off table', 'Hold straight body layout'],
      commonFaults: ['Piking in layout', 'Late table contact']
    }
  },

  // =======================================================================
  // FLOOR EXERCISE GAPS (COMPLEMENTING GYMFEST DOC WITH USAG STANDARDS)
  // =======================================================================
  {
    id: 'gap_slv_fx_01',
    name: 'Round-off Rebound Stick',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Accelerated hurdle into round-off, snap legs together through vertical, violent block off hands and high hollow rebound stick.',
    xpReward: 40,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-FX-01 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'GAbIx6oQAv4',
      title: 'How to Do a Powerful Round-off on Floor | Rebound Drills',
      channelName: 'Rylie Shaw',
      thumbnail: 'https://i.ytimg.com/vi/GAbIx6oQAv4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=GAbIx6oQAv4',
      embedUrl: 'https://www.youtube.com/embed/GAbIx6oQAv4'
    },
    writtenTutorial: {
      steps: ['Power hurdle with chest leaning into travel direction.', 'Place hands in T-shape on center floor line.', 'Kick legs up through vertical and snap together at 12 o’clock with 1/2 turn.', 'Repel off hands into high vertical rebound, sticking landing without bounce.'],
      keyCoachingCues: ['Speed into hurdle', 'Hands in T-shape', 'Snap feet together fast', 'Explosive hollow rebound'],
      commonFaults: ['Crooked hand placement', 'Late snap down past vertical', 'Landing on heels and stepping']
    }
  },
  {
    id: 'gap_slv_fx_04',
    name: 'Split Leap (90° Separation) on Floor',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    curriculumSource: 'USAG_GAP',
    description: 'Step into single-leg takeoff, elevate hips into equal 90° leg separation with straight knees and pointed toes, landing on front foot.',
    xpReward: 35,
    status: 'IN_PROGRESS',
    officialRef: 'USAG-SLV-FX-04 (Level 3 / Xcel Silver)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'How to Get Higher Split Leaps & 90+ Degree Splits',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Take preparation step into demi-plié.', 'Drive lead leg forward at 45° while back leg fires upward behind.', 'Split legs equally at apex of flight reaching 90° separation.', 'Land softly through toe-ball-heel on front foot in plié.'],
      keyCoachingCues: ['Push through toes on jump', 'Both legs split equally', 'Keep chest tall', 'Land quietly in plié'],
      commonFaults: ['Front leg high but back leg drooping', 'Bent knees', 'Chest tipping forward']
    }
  },
  {
    id: 'gap_gld_fx_01',
    name: 'Round-off Back Handspring Back Tuck (Salto)',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Fundamental tumbling pass for Level 4-5 / Xcel Gold: round-off into rapid back handspring rebound, set high into backward tucked salto.',
    xpReward: 60,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-FX-01 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'e9K3p7vX6v8',
      title: 'Round-Off Back Handspring Back Tuck Tutorial',
      channelName: 'Head Over Heels Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/e9K3p7vX6v8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=e9K3p7vX6v8',
      embedUrl: 'https://www.youtube.com/embed/e9K3p7vX6v8'
    },
    writtenTutorial: {
      steps: ['Accelerate down floor diagonal into long round-off.', 'Snap down out of round-off directly into low, fast back handspring.', 'Block off hands and punch floor with feet slightly in front of hips.', 'Drive arms to ears in high vertical set, pull knees into chest, rotate tucked salto and stick.'],
      keyCoachingCues: ['Long low back handspring', 'Punch up not back on tuck set', 'Grab shins in tight tuck', 'Spot the floor to open and stick'],
      commonFaults: ['Throwing head back on tuck set (cuts height)', 'Loose tuck with knees apart', 'Under-rotating onto knees']
    }
  },
  {
    id: 'gap_gld_fx_02',
    name: 'Front Tuck (Punch Front Salto)',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Forward running approach, two-foot punch into high vertical set, rotating forward tucked salto to stick landing.',
    xpReward: 55,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-FX-02 (Level 4-5 / Xcel Gold)',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K7T6p3eF4e0',
      title: 'How to Do a Punch Front (Front Tuck) | Tumbling Drills',
      channelName: 'Shift Movement Science',
      thumbnail: 'https://i.ytimg.com/vi/K7T6p3eF4e0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K7T6p3eF4e0',
      embedUrl: 'https://www.youtube.com/embed/K7T6p3eF4e0'
    },
    writtenTutorial: {
      steps: ['Run down floor with upright sprinting posture into low forward hurdle.', 'Punch floor with feet slightly ahead of body, driving arms straight up to ears.', 'Lift hips backward and upward while tucking knees tightly to chest.', 'Spot landing floor, open out of tuck, and stick landing in demi-plié.'],
      keyCoachingCues: ['Lift hips over head', 'Punch with chest up', 'Tuck tight and fast', 'Open early to stick'],
      commonFaults: ['Diving chest forward into floor', 'Under-punching without height', 'Landing in deep crouch or falling forward']
    }
  },
  {
    id: 'gap_gld_fx_03',
    name: 'Switch Leap (120°+ Separation)',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    curriculumSource: 'USAG_GAP',
    description: 'Forward leg swings to 45°, reverses explosively backward while trailing leg swings forward, achieving 120°+ split at apex.',
    xpReward: 50,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-GLD-FX-03 (Level 4-5 / Xcel Gold)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Switch Leap Breakdown & Flexibility Drills',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Step forward and swing lead leg forward to approximately 45° with straight knee.', 'Quickly reverse front leg backward while back leg shoots forward through scissors motion.', 'Hit 120°+ split in mid-air with upright posture and pointed toes.', 'Land softly in plié on forward leg and step through.'],
      keyCoachingCues: ['Quick scissor snap', 'Drive hips high', 'Chest held proud', 'Clean pointed toes'],
      commonFaults: ['Insufficient preliminary swing (<45°)', 'Failing to reach 120° split angle', 'Bending back knee']
    }
  },
  {
    id: 'gap_plt_fx_01',
    name: 'Layout Salto (Floor Back Layout)',
    level: 6,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Round-off back handspring into explosive vertical takeoff, rotating backward in stretched hollow layout body line.',
    xpReward: 70,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-FX-01 (Level 6-7 / Xcel Platinum)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'K7T6p3eF4e0',
      title: 'How to Do a Back Layout on Floor | Step by Step Tumbling',
      channelName: 'Shift Movement Science',
      thumbnail: 'https://i.ytimg.com/vi/K7T6p3eF4e0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=K7T6p3eF4e0',
      embedUrl: 'https://www.youtube.com/embed/K7T6p3eF4e0'
    },
    writtenTutorial: {
      steps: ['Execute high-velocity round-off into rapid back handspring.', 'Punch floor with straight legs, arms lifting directly up to ears.', 'Maintain rigid hollow pencil line with chin neutral as rotation carries over.', 'Spot the floor at 270°, absorb landing in stick freeze without stepping.'],
      keyCoachingCues: ['Punch straight up for height', 'Rigid hollow body (no arch)', 'Chin neutral', 'Stick landing firmly'],
      commonFaults: ['Piking at hips (downgrade to pike salto)', 'Throwing head back (cutting height)', 'Bending knees on landing']
    }
  },
  {
    id: 'gap_plt_fx_02',
    name: 'Back Layout 1/2 Twist (Floor)',
    level: 7,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Round-off back handspring into high layout with 180° longitudinal twist initiated from high set, landing forward.',
    xpReward: 75,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-FX-02 (Level 6-7 / Xcel Platinum)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'PFqKbqRGUyY',
      title: 'Back Layout Half-Twist Tumbling Masterclass',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/PFqKbqRGUyY/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=PFqKbqRGUyY',
      embedUrl: 'https://www.youtube.com/embed/PFqKbqRGUyY'
    },
    writtenTutorial: {
      steps: ['Power tumbling entry through round-off back handspring.', 'Punch upward to ceiling into full layout extension.', 'Wrap lead arm tight to ribs while looking over turning shoulder to initiate 180° twist.', 'Spot landing facing takeoff direction and stick in demi-plié.'],
      keyCoachingCues: ['Set straight up before twisting', 'Wrap arm tight across chest', 'Stay in hollow pencil shape', 'Spot floor early'],
      commonFaults: ['Twisting off the floor before set', 'Piking hips in mid-twist', 'Over or under-twisting off axis']
    }
  },
  {
    id: 'gap_plt_fx_04',
    name: 'Switch Leap to Tour Jeté Connection (Dance Series)',
    level: 7,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Mandatory dance connection series: switch leap (180° split) connected in direct rhythm to 1/2 turning tour jeté leap.',
    xpReward: 70,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-FX-04 (Level 6-7 / Xcel Platinum)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Dance Passages: Switch Leap to Tour Jeté Connection',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Execute high switch leap hitting full 180° split in air.', 'Land softly on lead foot and immediately step into tour jeté takeoff without pausing.', 'Kick leg forward, jump and turn 180° in air, scissor-kicking into second split.', 'Land smoothly in arabesque or fondue along floor line.'],
      keyCoachingCues: ['Full 180° split on first leap', 'No hesitation between leaps', 'Turn exactly 180° on tour jeté', 'Elegant carriage'],
      commonFaults: ['Pause or extra step between elements', 'Incomplete split angles', 'Uncontrolled heavy landings']
    }
  },
  {
    id: 'gap_plt_fx_05',
    name: 'Double Turn (720° on One Foot on Floor)',
    level: 7,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'High difficulty pirouette on floor: step into high releve, execute two full 360° rotations (720°) on one foot in passé.',
    xpReward: 70,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG-PLT-FX-05 (Level 6-7 / Xcel Platinum)',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'How to Do a Double Turn in Gymnastics | Pirouette Drills',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Prep in 4th position plié with square hips.', 'Push tall onto high supporting releve, snapping free leg into high passé.', 'Spot front wall twice during rapid 720° rotation while holding rigid core.', 'Finish in controlled 4th position or lunge without balance check.'],
      keyCoachingCues: ['High ankle releve', 'Spot twice sharply', 'Keep ribs and core locked', 'Clean finish'],
      commonFaults: ['Heel dropping during second turn', 'Traveling off spot', 'Under-rotating (<720° deduction)']
    }
  },
  {
    id: 'gap_dia_fx_01',
    name: 'Double Back Tuck Salto',
    level: 9,
    category: 'FLOOR',
    xcelTier: 'DIAMOND',
    curriculumSource: 'USAG_GAP',
    description: 'Round-off back handspring into explosive high set, completing two full backward tucked saltos before landing.',
    xpReward: 90,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L9 Floor Acro Element #1',
    difficulty: 'D',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'e9K3p7vX6v8',
      title: 'Double Back Tuck Technique & Progressions',
      channelName: 'Head Over Heels Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/e9K3p7vX6v8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=e9K3p7vX6v8',
      embedUrl: 'https://www.youtube.com/embed/e9K3p7vX6v8'
    },
    writtenTutorial: {
      steps: ['High acceleration round-off into rapid back handspring.', 'Punch floor violently, driving chest and arms up to ceiling.', 'Pull knees tight into double tuck rotation.', 'Spot floor at 630°, open out of tuck and stick landing.'],
      keyCoachingCues: ['Maximum set height', 'Hold tight tuck through two flips', 'Open on spot and stick'],
      commonFaults: ['Low set', 'Opening too early', 'Deep squat on landing']
    }
  },
  {
    id: 'gap_l8_ub_01',
    name: 'Blind Change (1/2 Pirouette on High Bar)',
    level: 8,
    category: 'BARS',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Cast to handstand on high bar, turn 180° on one arm into reverse grip swinging down smoothly into front giant.',
    xpReward: 80,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L8 Bars Element #1',
    difficulty: 'C',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ZtU5wM6n8_Y',
      title: 'How to Do a Blind Change on Uneven Bars',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/ZtU5wM6n8_Y/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ZtU5wM6n8_Y',
      embedUrl: 'https://www.youtube.com/embed/ZtU5wM6n8_Y'
    },
    writtenTutorial: {
      steps: ['Cast to vertical handstand on high bar.', 'Shift weight onto turning hand while locking shoulder.', 'Release second hand and turn head and torso 180°.', 'Catch bar in underhand reverse grip at vertical and swing down into front giant.'],
      keyCoachingCues: ['Reach vertical before turning', 'Keep hips square during 180° turn', 'Shift weight cleanly onto single post arm'],
      commonFaults: ['Turning before vertical (deduction)', 'Piking in handstand', 'Missing undergrip catch']
    }
  },
  {
    id: 'gap_l8_bb_01',
    name: 'Back Handspring to Back Handspring Series',
    level: 8,
    category: 'BEAM',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: 'Mandatory acro flight series for Level 8: back handspring step-out connected with direct acceleration into second back handspring.',
    xpReward: 80,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L8 Beam Flight Series',
    difficulty: 'C',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'y1B3qK7v2p0',
      title: 'Back Handspring to Back Handspring Beam Series',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/y1B3qK7v2p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=y1B3qK7v2p0',
      embedUrl: 'https://www.youtube.com/embed/y1B3qK7v2p0'
    },
    writtenTutorial: {
      steps: ['Perform first back handspring step-out with straight hand alignment.', 'Upon lead foot contact, immediately rebound into second back handspring.', 'Keep vision locked on center line of beam.', 'Step down into solid finished lunge.'],
      keyCoachingCues: ['Direct connection with no hesitation', 'Spot beam throughout', 'Lock shoulders on hand block'],
      commonFaults: ['Hesitation or pause between handsprings (breaks connection)', 'Twisting off beam line']
    }
  },
  {
    id: 'gap_l8_vt_01',
    name: 'Tsukahara Tucked Vault over Table',
    level: 8,
    category: 'VAULT',
    xcelTier: 'PLATINUM',
    curriculumSource: 'USAG_GAP',
    description: '1/2 turn onto vault table, violent hand block into backward tucked salto rotation landing firmly on 8" mat stack.',
    xpReward: 80,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L8 Vault Element #1',
    difficulty: 'C',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'WBLD4wPLeSg',
      title: 'Tsukahara Vault Tutorial & Drills',
      channelName: 'Gymnastics Zone',
      thumbnail: 'https://i.ytimg.com/vi/WBLD4wPLeSg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=WBLD4wPLeSg',
      embedUrl: 'https://www.youtube.com/embed/WBLD4wPLeSg'
    },
    writtenTutorial: {
      steps: ['Full sprint acceleration down runway into low board hurdle.', 'Turn 1/2 in pre-flight, contacting table in staggered hand placement.', 'Repel off table, pulling knees into chest in tight tuck.', 'Spot landing surface, open tuck, and stick landing.'],
      keyCoachingCues: ['Fast sprint', 'Block through shoulders', 'Tight tuck rotation', 'Spot and stick'],
      commonFaults: ['Low block height', 'Loose tuck', 'Taking steps on landing']
    }
  },
  {
    id: 'gap_l10_ub_01',
    name: 'Jaeger Salto Release (Straddle / Piked)',
    level: 10,
    category: 'BARS',
    xcelTier: 'DIAMOND',
    curriculumSource: 'USAG_GAP',
    description: 'Front giant on high bar, tap and release over bar into forward tucked/straddled salto, catching bar in swing.',
    xpReward: 100,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L10 Bars Release Element',
    difficulty: 'D',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'hG5R9eA2_W8',
      title: 'Jaeger Release Bar Technique & Progressions',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/hG5R9eA2_W8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=hG5R9eA2_W8',
      embedUrl: 'https://www.youtube.com/embed/hG5R9eA2_W8'
    },
    writtenTutorial: {
      steps: ['Execute powerful front giant with undergrip on high bar.', 'Tap aggressively under bar, driving heels upward.', 'Release bar and flip forward in straddle salto over bar.', 'Catch bar in overgrip with arms extended and swing through.'],
      keyCoachingCues: ['Violent heel drive on tap', 'Spot the bar throughout salto', 'Reach and catch with locked wrists'],
      commonFaults: ['Late release peeling off bar', 'Closing eyes in flight', 'Bent arms on catch']
    }
  },
  {
    id: 'gap_l10_bb_01',
    name: 'Standing Full on Balance Beam',
    level: 10,
    category: 'BEAM',
    xcelTier: 'DIAMOND',
    curriculumSource: 'USAG_GAP',
    description: 'Standing backward salto with 360° twist (full twist) executed directly from beam surface with stuck landing.',
    xpReward: 100,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L10 Beam E-Element',
    difficulty: 'E',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'y1B3qK7v2p0',
      title: 'Standing Full on Beam Progression',
      channelName: 'Coach Marissa',
      thumbnail: 'https://i.ytimg.com/vi/y1B3qK7v2p0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=y1B3qK7v2p0',
      embedUrl: 'https://www.youtube.com/embed/y1B3qK7v2p0'
    },
    writtenTutorial: {
      steps: ['Stand on beam in plié with arms swinging back.', 'Explode vertically, setting chest and arms up to ceiling.', 'Wrap arms tightly to initiate 360° twist.', 'Spot beam at 270°, open body and stick landing on beam axis.'],
      keyCoachingCues: ['Set height first before twist', 'Tight wrap', 'Spot the line and freeze'],
      commonFaults: ['Twisting off beam takeoff', 'Under-rotating twist', 'Landing off center']
    }
  },
  {
    id: 'gap_l10_vt_01',
    name: 'Yurchenko Full Twist (360° Layout)',
    level: 10,
    category: 'VAULT',
    xcelTier: 'DIAMOND',
    curriculumSource: 'USAG_GAP',
    description: 'Round-off onto board, back handspring onto table, block into high layout with 360° full twist in post-flight.',
    xpReward: 100,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L10 Vault 9.95 SV',
    difficulty: 'E',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'WBLD4wPLeSg',
      title: 'Yurchenko Full Twist Technique Breakdown',
      channelName: 'Gymnastics Zone',
      thumbnail: 'https://i.ytimg.com/vi/WBLD4wPLeSg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=WBLD4wPLeSg',
      embedUrl: 'https://www.youtube.com/embed/WBLD4wPLeSg'
    },
    writtenTutorial: {
      steps: ['High-speed sprint into round-off hurdle onto springboard.', 'Back handspring contacts table before vertical.', 'Violent shoulder repulsion into soaring layout post-flight.', 'Wrap for 360° longitudinal twist, spot landing and stick.'],
      keyCoachingCues: ['Maximum speed', 'Fast board turn', 'Instant table block', 'Early landing spot'],
      commonFaults: ['Slow table contact', 'Twisting before table block', 'Piking on landing']
    }
  },
  {
    id: 'gap_l10_fx_01',
    name: 'Full-In Back-Out Salto (Double Salto with Full Twist)',
    level: 10,
    category: 'FLOOR',
    xcelTier: 'DIAMOND',
    curriculumSource: 'USAG_GAP',
    description: 'High difficulty tumbling pass: round-off back handspring into double backward salto with full twist in first salto.',
    xpReward: 100,
    status: 'NOT_COMPLETED',
    officialRef: 'USAG L10 Floor E-Element',
    difficulty: 'E',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'e9K3p7vX6v8',
      title: 'Full-In Back-Out Salto Breakdown on Floor',
      channelName: 'Head Over Heels Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/e9K3p7vX6v8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=e9K3p7vX6v8',
      embedUrl: 'https://www.youtube.com/embed/e9K3p7vX6v8'
    },
    writtenTutorial: {
      steps: ['Maximum speed diagonal tumbling entry.', 'Punch floor vertically to ceiling with violent shoulder set.', 'Initiate full twist during first backward flip.', 'Complete second backward flip in tucked or layout shape, spot and stick.'],
      keyCoachingCues: ['Massive set height', 'Fast twist in first salto', 'Open early to stick landing'],
      commonFaults: ['Low set leading to dangerous landing', 'Late twist', 'Landing off floor boundary']
    }
  }
];
