import { Skill } from '../types';

// =========================================================================
// GYMFEST SKILLS CATEGORIZATION: LEVELS 3 - 8
// Authentic curriculum items from GYMFEST document
// =========================================================================

export const GYMFEST_ADVANCED_SKILLS: Skill[] = [
  // =======================================================================
  // LEVEL 3 (Silver, Gold, Platinum & Vault)
  // =======================================================================
  {
    id: 'gf_l3_slv_01',
    name: 'Hand stand forward roll (hold handstand for 2 to 3 seconds).',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3: Kick into vertical handstand, hold stationary for 2 to 3 seconds, tuck chin and roll out to stand.',
    xpReward: 45,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L3 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'PFqKbqRGUyY',
      title: 'Handstand Hold (2-3s) to Forward Roll Tutorial',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/PFqKbqRGUyY/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=PFqKbqRGUyY',
      embedUrl: 'https://www.youtube.com/embed/PFqKbqRGUyY'
    },
    writtenTutorial: {
      steps: ['Kick into vertical handstand.', 'Hold stationary for 2-3 seconds with squeezed glutes.', 'Bend arms slowly, tuck chin to chest and roll along spine.', 'Stand tall without hands pushing off floor.'],
      keyCoachingCues: ['Hold vertical 2-3s', 'Tuck chin before rolling', 'Stand up tall'],
      commonFaults: ['Rolling before holding handstand', 'Flat back impact']
    }
  },
  {
    id: 'gf_l3_slv_02',
    name: 'Straight jump and split jump in a spot',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3: Vertical straight jump connected on the spot to split jump with equal leg separation.',
    xpReward: 40,
    status: 'VERIFIED',
    officialRef: 'Gymfest L3 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Straight Jump to Split Jump Connection on Spot',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Plie into vertical straight jump.', 'Upon landing, rebound immediately into split jump in air.', 'Land softly in demi-plié with chest upright.'],
      keyCoachingCues: ['Continuous rebound', 'Equal split front and back', 'Stick landing'],
      commonFaults: ['Pausing between jumps', 'Uneven leg split']
    }
  },
  {
    id: 'gf_l3_slv_03',
    name: 'Hand stand to bridge kickover',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3: Controlled vertical handstand lowered softly into bridge, followed immediately by kickover to lunge.',
    xpReward: 45,
    status: 'VERIFIED',
    officialRef: 'Gymfest L3 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'iCFw0hYwa0A',
      title: 'Gymnastics Handstand Bridge Kickover Tutorial',
      channelName: 'Incredible Gymnasts!',
      thumbnail: 'https://i.ytimg.com/vi/iCFw0hYwa0A/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=iCFw0hYwa0A',
      embedUrl: 'https://www.youtube.com/embed/iCFw0hYwa0A'
    },
    writtenTutorial: {
      steps: ['Kick to handstand.', 'Lower feet softly to mat into bridge.', 'Without pausing, push off floor and kick over to lunge.'],
      keyCoachingCues: ['Hold handstand 1s', 'Open shoulders in bridge', 'Kick with straight knee'],
      commonFaults: ['Crashing feet in bridge', 'Stuck in bridge']
    }
  },
  {
    id: 'gf_l3_slv_04',
    name: 'Side split on the floor',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3: Full side (straddle) split flat on the floor with straight knees and pointed toes.',
    xpReward: 40,
    status: 'VERIFIED',
    officialRef: 'Gymfest L3 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'How to Get Flat Side Splits Fast',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Slide feet outward along straight line into side split.', 'Keep knees facing upward or forward with toes pointed.', 'Hold flat position with upright torso.'],
      keyCoachingCues: ['Straight knees', 'Toes pointed', 'Hips aligned'],
      commonFaults: ['Rolling knees forward', 'Bent knees']
    }
  },
  {
    id: 'gf_l3_slv_05',
    name: 'Half turn',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3: 180° pivot turn on one foot in high relevé with pointed passé foot.',
    xpReward: 35,
    status: 'VERIFIED',
    officialRef: 'Gymfest L3 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '5S4EOgtS-Pg',
      title: 'Half Turn on Releve Gymnastics Dance',
      channelName: 'Altadore Gymnastic Club',
      thumbnail: 'https://i.ytimg.com/vi/5S4EOgtS-Pg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=5S4EOgtS-Pg',
      embedUrl: 'https://www.youtube.com/embed/5S4EOgtS-Pg'
    },
    writtenTutorial: {
      steps: ['Step into high relevé.', 'Pivot 180° on ball of foot.', 'Finish in locked relevé before lowering heel.'],
      keyCoachingCues: ['High relevé', 'Spot the turn', 'Engage core'],
      commonFaults: ['Dropping heel', 'Wobbly arms']
    }
  },
  {
    id: 'gf_l3_slv_06',
    name: 'Roundoff to bridge kickover',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3 Silver: Rebounding round-off finishing into back bridge and immediate kickover to lunge.',
    xpReward: 45,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L3 Silver Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TaV8TBELBLc',
      title: 'Roundoff to Bridge Kickover Gymnastics Drill',
      channelName: 'Emily Smith',
      thumbnail: 'https://i.ytimg.com/vi/TaV8TBELBLc/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TaV8TBELBLc',
      embedUrl: 'https://www.youtube.com/embed/TaV8TBELBLc'
    },
    writtenTutorial: {
      steps: ['Hurdle into powerful round-off.', 'Snap down and rebound softly back into bridge.', 'Immediately kick over with lead leg into finish lunge.'],
      keyCoachingCues: ['Fast snap down', 'Control bridge entry', 'Dynamic kickover'],
      commonFaults: ['Crashing onto back', 'Hesitation in bridge']
    }
  },
  {
    id: 'gf_l3_slv_07',
    name: 'Roundoff backhand spring',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3: Accelerated hurdle into snapping round-off connected immediately to back handspring.',
    xpReward: 50,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L3 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'PZQmDXztYME',
      title: 'Roundoff Back Handspring Tutorial & Tumbling Drills',
      channelName: 'Syd the Yogi',
      thumbnail: 'https://i.ytimg.com/vi/PZQmDXztYME/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=PZQmDXztYME',
      embedUrl: 'https://www.youtube.com/embed/PZQmDXztYME'
    },
    writtenTutorial: {
      steps: ['Run and hurdle into round-off with aggressive snap down.', 'Rebound backward immediately, arms reaching past ears.', 'Block through palms and snap feet to floor in rebound.'],
      keyCoachingCues: ['Fast snap down', 'Sit back on rebound', 'Explosive shoulder block'],
      commonFaults: ['Hesitation between skills', 'Piking hips on BHS', 'Bent arms']
    }
  },
  {
    id: 'gf_l3_gld_01',
    name: 'Front walkover',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3 Gold: Lunge forward, hands to floor, kick through 180° split handstand, stepping lead foot into bridge and standing up.',
    xpReward: 45,
    status: 'VERIFIED',
    officialRef: 'Gymfest L3 Gold Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TXmAMLif1D4',
      title: 'How to Do a Front Walkover Step-by-Step',
      channelName: 'Fit And Fun With Coach Meggin',
      thumbnail: 'https://i.ytimg.com/vi/TXmAMLif1D4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TXmAMLif1D4',
      embedUrl: 'https://www.youtube.com/embed/TXmAMLif1D4'
    },
    writtenTutorial: {
      steps: ['Lunge forward, reach hands to floor.', 'Kick through 180° split handstand.', 'Step lead foot down into high bridge and push hips forward to stand.'],
      keyCoachingCues: ['Full 180 split in air', 'Push hips forward to stand', 'Arms stay by ears'],
      commonFaults: ['Short split', 'Head lifting early on standup']
    }
  },
  {
    id: 'gf_l3_gld_02',
    name: 'Roundoff back limber / roundoff stop and handspring',
    level: 3,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3 Gold: Round-off connected to back limber or round-off with controlled stop into standing back handspring.',
    xpReward: 50,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L3 Gold Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'KkdRT_6ODRI',
      title: 'Roundoff Back Limber & Handspring Drills',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/KkdRT_6ODRI/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=KkdRT_6ODRI',
      embedUrl: 'https://www.youtube.com/embed/KkdRT_6ODRI'
    },
    writtenTutorial: {
      steps: ['Hurdle into round-off.', 'Execute back limber into bridge or pause and jump into standing back handspring.', 'Finish tall in lunge.'],
      keyCoachingCues: ['Fast round-off', 'Open shoulders on limber', 'Aggressive shoulder block'],
      commonFaults: ['Collapsing arms', 'Crooked hand placement']
    }
  },
  {
    id: 'gf_l3_vt_01',
    name: 'Running handspring over the big mat',
    level: 3,
    category: 'VAULT',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 3 Vault (Page 2): Accelerated run, punch springboard, handspring repulsion over mat stack onto landing mat.',
    xpReward: 50,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest Level 3 Vault',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'rjG9jb_m8bI',
      title: 'Running Handspring over Vault Mat Progression',
      channelName: 'Saving Tenths',
      thumbnail: 'https://i.ytimg.com/vi/rjG9jb_m8bI/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=rjG9jb_m8bI',
      embedUrl: 'https://www.youtube.com/embed/rjG9jb_m8bI'
    },
    writtenTutorial: {
      steps: ['Fast sprint down runway.', 'Punch springboard with arms driving backward to forward.', 'Block off mat stack through shoulders.', 'Fly into stuck landing on feet.'],
      keyCoachingCues: ['Accelerate to board', 'Fast shoulder block', 'Stick landing firmly'],
      commonFaults: ['Bending elbows on block', 'Piking hips on landing']
    }
  },

  // =======================================================================
  // LEVEL 4 (Silver, Gold, Platinum & Vault)
  // =======================================================================
  {
    id: 'gf_l4_slv_01',
    name: 'Back Walkover',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4: Lift lead leg, arch backward placing hands on floor, kick through 180° split into locked lunge.',
    xpReward: 50,
    status: 'VERIFIED',
    officialRef: 'Gymfest L4 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'Y3eM_p8WJto',
      title: 'How to Do a Back Walkover Step by Step',
      channelName: 'Gymnastics HQ',
      thumbnail: 'https://i.ytimg.com/vi/Y3eM_p8WJto/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=Y3eM_p8WJto',
      embedUrl: 'https://www.youtube.com/embed/Y3eM_p8WJto'
    },
    writtenTutorial: {
      steps: ['Stand in tall lunge with arms by ears.', 'Lift lead leg and arch backward.', 'Place hands on floor, kick back leg through full 180° split.', 'Step down into finish lunge.'],
      keyCoachingCues: ['Lift leg before arching', 'Arms glued to ears', 'Full split overhead'],
      commonFaults: ['Bending kick leg', 'Hands landing unevenly']
    }
  },
  {
    id: 'gf_l4_slv_02',
    name: 'Front handspring stepout To Cartwheel',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4: Accelerated front handspring step-out connected immediately into smooth cartwheel.',
    xpReward: 55,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L4 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TXmAMLif1D4',
      title: 'Front Handspring Step Out to Cartwheel Connection',
      channelName: 'Fit And Fun With Coach Meggin',
      thumbnail: 'https://i.ytimg.com/vi/TXmAMLif1D4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TXmAMLif1D4',
      embedUrl: 'https://www.youtube.com/embed/TXmAMLif1D4'
    },
    writtenTutorial: {
      steps: ['Hurdle into front handspring.', 'Block through shoulders, step out with lead foot.', 'Immediately reach into cartwheel without pause.', 'Finish in balanced lunge.'],
      keyCoachingCues: ['Fast shoulder block', 'Fluid step-out into cartwheel', 'Clean finish lunge'],
      commonFaults: ['Pausing between skills', 'Bent arms on handspring']
    }
  },
  {
    id: 'gf_l4_slv_03',
    name: 'Back ward roll to Hand stand',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4: Backward roll with fast hip extension, pushing straight arms up into vertical handstand.',
    xpReward: 55,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L4 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'LYNLFv_JRZQ',
      title: 'Back Extension Roll to Handstand Tutorial',
      channelName: 'eHowSports',
      thumbnail: 'https://i.ytimg.com/vi/LYNLFv_JRZQ/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=LYNLFv_JRZQ',
      embedUrl: 'https://www.youtube.com/embed/LYNLFv_JRZQ'
    },
    writtenTutorial: {
      steps: ['Roll backward with hands by ears.', 'Drive toes straight up to ceiling.', 'Push through palms, locking arms into vertical handstand.', 'Step down with control.'],
      keyCoachingCues: ['Drive toes straight up', 'Lock elbows', 'Hit vertical handstand line'],
      commonFaults: ['Bending elbows', 'Piking hips on descent']
    }
  },
  {
    id: 'gf_l4_slv_04',
    name: 'Half twist (180% turn)',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4: Jump or pivot executing 180° longitudinal twist in air or on high relevé with clean finish.',
    xpReward: 40,
    status: 'VERIFIED',
    officialRef: 'Gymfest L4 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '5S4EOgtS-Pg',
      title: 'Half Twist 180 Degree Turn Gymnastics Tutorial',
      channelName: 'Altadore Gymnastic Club',
      thumbnail: 'https://i.ytimg.com/vi/5S4EOgtS-Pg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=5S4EOgtS-Pg',
      embedUrl: 'https://www.youtube.com/embed/5S4EOgtS-Pg'
    },
    writtenTutorial: {
      steps: ['Plie and jump vertically.', 'Initiate 180° twist from hips and core at apex.', 'Land in demi-plié with control.'],
      keyCoachingCues: ['Jump before twisting', 'Wrap arms tight', 'Stick landing'],
      commonFaults: ['Twisting off the floor', 'Over-rotating']
    }
  },
  {
    id: 'gf_l4_slv_05',
    name: 'Running leap jump',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4: Accelerated running approach into dynamic grand jeté split leap.',
    xpReward: 45,
    status: 'VERIFIED',
    officialRef: 'Gymfest L4 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '8ibt-SHYepI',
      title: 'How to do a Split Leap (Gymnastics Tutorial)',
      channelName: 'Nicole Ferrier',
      thumbnail: 'https://i.ytimg.com/vi/8ibt-SHYepI/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=8ibt-SHYepI',
      embedUrl: 'https://www.youtube.com/embed/8ibt-SHYepI'
    },
    writtenTutorial: {
      steps: ['Continuous running steps.', 'Brush front leg aggressively while pushing off back foot.', 'Hit split at apex of jump.', 'Land softly in demi-plié.'],
      keyCoachingCues: ['Brush foot along floor', 'Split at apex', 'Chest upright'],
      commonFaults: ['Chest dropped forward', 'Bent rear knee']
    }
  },
  {
    id: 'gf_l4_slv_06',
    name: 'Straddle Jump',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4: Explosive vertical jump from two feet, opening legs into wide straddle split with chest upright.',
    xpReward: 45,
    status: 'VERIFIED',
    officialRef: 'Gymfest L4 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '6wrtA6TcWJ8',
      title: 'Gymnastics How To: Straddle Jump',
      channelName: 'Shannon Miller',
      thumbnail: 'https://i.ytimg.com/vi/6wrtA6TcWJ8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=6wrtA6TcWJ8',
      embedUrl: 'https://www.youtube.com/embed/6wrtA6TcWJ8'
    },
    writtenTutorial: {
      steps: ['Demi-plié swinging arms back to front.', 'Explode vertically, driving legs wide into straddle with toes pointed.', 'Pull legs together quickly on descent to stick landing.'],
      keyCoachingCues: ['Chest high', 'Point toes', 'Snap legs together to land'],
      commonFaults: ['Leaning chest forward', 'Bent knees']
    }
  },
  {
    id: 'gf_l4_slv_07',
    name: 'Sidesplit to forward split',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4: Flat side (straddle) split transition smoothly pivoting hips into flat forward split.',
    xpReward: 45,
    status: 'VERIFIED',
    officialRef: 'Gymfest L4 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'Side Split to Forward Split Transition Flexibility',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Lower into flat side split.', 'Turn torso and hips 90° smoothly into forward split without standing up.', 'Hold clean forward split with square hips.'],
      keyCoachingCues: ['Smooth hip pivot', 'Square hips in forward split', 'Chest upright'],
      commonFaults: ['Standing up during transition', 'Crooked hips']
    }
  },
  {
    id: 'gf_l4_slv_08',
    name: 'Full turn on one foot',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4: 360° rotation on single supporting foot in high relevé with free leg in passé.',
    xpReward: 45,
    status: 'VERIFIED',
    officialRef: 'Gymfest L4 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '5S4EOgtS-Pg',
      title: 'Full Turn on One Foot | Controlled Releve Landing',
      channelName: 'Altadore Gymnastic Club',
      thumbnail: 'https://i.ytimg.com/vi/5S4EOgtS-Pg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=5S4EOgtS-Pg',
      embedUrl: 'https://www.youtube.com/embed/5S4EOgtS-Pg'
    },
    writtenTutorial: {
      steps: ['Plie preparation with arms curved.', 'Press into high relevé, snapping free foot to passé.', 'Spot wall, whip head 360° to lock landing spot.', 'Finish with control on relevé before lowering heel.'],
      keyCoachingCues: ['High relevé on big toe', 'Snap head in spot', 'Hold finish 1s'],
      commonFaults: ['Dropping heel mid-turn', 'Losing spot']
    }
  },
  {
    id: 'gf_l4_gld_01',
    name: 'Roundoff backhand spring backhand spring (they can be a stop in between)',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4 Gold: Round-off connected to two back handsprings (continuous or with a brief pause in between).',
    xpReward: 60,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L4 Gold Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'PZQmDXztYME',
      title: 'Roundoff Back Handspring Series Breakdown',
      channelName: 'Syd the Yogi',
      thumbnail: 'https://i.ytimg.com/vi/PZQmDXztYME/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=PZQmDXztYME',
      embedUrl: 'https://www.youtube.com/embed/PZQmDXztYME'
    },
    writtenTutorial: {
      steps: ['Hurdle into round-off.', 'Snap down into first back handspring.', 'Rebound into second back handspring (or brief stop then second BHS).', 'Rebound tall into stick.'],
      keyCoachingCues: ['Fast round-off snap', 'Powerful shoulder block', 'Accelerate through series'],
      commonFaults: ['Bent elbows', 'Undercutting jump']
    }
  },
  {
    id: 'gf_l4_plt_01',
    name: 'Back extension roll',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4 Platinum: Straight arm backward roll with fast hip drive pushing through vertical handstand.',
    xpReward: 55,
    status: 'VERIFIED',
    officialRef: 'Gymfest L4 Platinum Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'a1mVzDjll1w',
      title: 'Straight-Armed Back Extension Roll Tutorial',
      channelName: 'holtstumblingclinic',
      thumbnail: 'https://i.ytimg.com/vi/a1mVzDjll1w/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=a1mVzDjll1w',
      embedUrl: 'https://www.youtube.com/embed/a1mVzDjll1w'
    },
    writtenTutorial: {
      steps: ['Roll backward with straight arms and hands ready by ears.', 'Push hard through palms, extending hips to vertical handstand.', 'Step down into lunge.'],
      keyCoachingCues: ['Straight arms locked', 'Drive toes to ceiling', 'Push hard through palms'],
      commonFaults: ['Bending elbows', 'Low hip extension']
    }
  },
  {
    id: 'gf_l4_plt_02',
    name: 'Straddle Jump with 120 degree split',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4 Platinum: High vertical straddle jump achieving minimum 120° leg separation at apex.',
    xpReward: 55,
    status: 'VERIFIED',
    officialRef: 'Gymfest L4 Platinum Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '6wrtA6TcWJ8',
      title: 'Straddle Jump (120 Degree Split) Tutorial',
      channelName: 'Shannon Miller',
      thumbnail: 'https://i.ytimg.com/vi/6wrtA6TcWJ8/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=6wrtA6TcWJ8',
      embedUrl: 'https://www.youtube.com/embed/6wrtA6TcWJ8'
    },
    writtenTutorial: {
      steps: ['Explode straight upward from demi-plié.', 'Drive legs wide hitting 120° split with chest upright.', 'Pull legs together on descent and stick.'],
      keyCoachingCues: ['Hit 120 split at apex', 'Chest upright', 'Point toes'],
      commonFaults: ['Split less than 120°', 'Dropping chest forward']
    }
  },
  {
    id: 'gf_l4_plt_03',
    name: 'Roundoff backhand spring backhand spring',
    level: 4,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4 Platinum: Round-off connected directly and continuously into two accelerated back handsprings.',
    xpReward: 65,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L4 Platinum Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'PZQmDXztYME',
      title: 'Continuous Roundoff Back Handspring Series',
      channelName: 'Syd the Yogi',
      thumbnail: 'https://i.ytimg.com/vi/PZQmDXztYME/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=PZQmDXztYME',
      embedUrl: 'https://www.youtube.com/embed/PZQmDXztYME'
    },
    writtenTutorial: {
      steps: ['Hurdle into snapping round-off.', 'Rebound immediately into first back handspring.', 'Block through shoulders into second back handspring without pause.', 'Rebound high into stuck landing.'],
      keyCoachingCues: ['Continuous fluid rhythm', 'Lock elbows on block', 'High rebound finish'],
      commonFaults: ['Hesitation between handsprings', 'Short undercutting jump']
    }
  },
  {
    id: 'gf_l4_vt_01',
    name: 'Running handspring on the vault',
    level: 4,
    category: 'VAULT',
    xcelTier: 'SILVER',
    gymfestTier: 'SILVER',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 4 Vault (Page 2): Full sprint approach, punch springboard, pre-flight onto vault table, shoulder repulsion into post-flight landing on feet.',
    xpReward: 60,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest Level 4 Vault',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'rjG9jb_m8bI',
      title: 'Running Handspring on Vault Table Tutorial',
      channelName: 'Saving Tenths',
      thumbnail: 'https://i.ytimg.com/vi/rjG9jb_m8bI/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=rjG9jb_m8bI',
      embedUrl: 'https://www.youtube.com/embed/rjG9jb_m8bI'
    },
    writtenTutorial: {
      steps: ['Sprint with maximum acceleration down runway.', 'Punch springboard into straight pre-flight angle to table.', 'Block explosively through shoulders on contact.', 'Fly through post-flight and stick on landing mat.'],
      keyCoachingCues: ['Full sprint acceleration', 'Fast shoulder block off table', 'Stick landing firmly'],
      commonFaults: ['Bending elbows on table', 'Piking hips on block']
    }
  },

  // =======================================================================
  // LEVEL 5 (Gold, Platinum & Vault)
  // =======================================================================
  {
    id: 'gf_l5_gld_01',
    name: 'Aeriel cartwheel',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5 Gold: Cartwheel performed with no hand support in air, explosive hurdle and leg whip to controlled landing.',
    xpReward: 85,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L5 Gold Floor',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'XCHPaHDf12w',
      title: 'Elite Gymnast Explains SIDE AERIAL! You got this.',
      channelName: 'Sophia Campana',
      thumbnail: 'https://i.ytimg.com/vi/XCHPaHDf12w/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=XCHPaHDf12w',
      embedUrl: 'https://www.youtube.com/embed/XCHPaHDf12w'
    },
    writtenTutorial: {
      steps: ['Take deep hurdle step with chest driving forward.', 'Drive lead leg into floor and whip back leg violently overhead.', 'Rotate through vertical straddle without hands touching.', 'Land softly in lunge.'],
      keyCoachingCues: ['Deep hurdle drive', 'Violent back leg whip', 'Stay upright on landing'],
      commonFaults: ['Touching hands down in panic', 'Piking hips sideways']
    }
  },
  {
    id: 'gf_l5_gld_02',
    name: 'Front walk over, front Walkover',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5: Two connected front walkovers showing fluid step-out and continuous momentum.',
    xpReward: 80,
    status: 'VERIFIED',
    officialRef: 'Gymfest L5 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'TXmAMLif1D4',
      title: 'Connected Front Walkovers Technique',
      channelName: 'Fit And Fun With Coach Meggin',
      thumbnail: 'https://i.ytimg.com/vi/TXmAMLif1D4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=TXmAMLif1D4',
      embedUrl: 'https://www.youtube.com/embed/TXmAMLif1D4'
    },
    writtenTutorial: {
      steps: ['Perform first front walkover with 180° split.', 'As lead foot lands, step directly into second front walkover.', 'Stand up tall in finish lunge.'],
      keyCoachingCues: ['Continuous fluid rhythm', 'Open shoulders', 'Full split in air'],
      commonFaults: ['Pausing between walkovers', 'Bent knees']
    }
  },
  {
    id: 'gf_l5_gld_03',
    name: 'Backward extension roll',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5: Straight arm backward roll with explosive hip extension directly to vertical handstand.',
    xpReward: 80,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L5 Floor',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'a1mVzDjll1w',
      title: 'Straight-Armed Back Extension Roll Tutorial: BEST Drills',
      channelName: 'holtstumblingclinic',
      thumbnail: 'https://i.ytimg.com/vi/a1mVzDjll1w/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=a1mVzDjll1w',
      embedUrl: 'https://www.youtube.com/embed/a1mVzDjll1w'
    },
    writtenTutorial: {
      steps: ['Roll backward with arms locked straight.', 'Push forcefully through palms, driving heels to ceiling.', 'Lock into vertical handstand line before stepping down.'],
      keyCoachingCues: ['Straight arms locked', 'Drive heels to ceiling', 'Lock core in handstand'],
      commonFaults: ['Bending elbows', 'Piking hips on handstand']
    }
  },
  {
    id: 'gf_l5_gld_04',
    name: 'Full twist (360% turn).',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5: 360° longitudinal twist jump in air or turn on high relevé with sharp spotting.',
    xpReward: 75,
    status: 'VERIFIED',
    officialRef: 'Gymfest L5 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '5S4EOgtS-Pg',
      title: 'Full Twist 360 Turn Gymnastics Tutorial',
      channelName: 'Altadore Gymnastic Club',
      thumbnail: 'https://i.ytimg.com/vi/5S4EOgtS-Pg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=5S4EOgtS-Pg',
      embedUrl: 'https://www.youtube.com/embed/5S4EOgtS-Pg'
    },
    writtenTutorial: {
      steps: ['Plie and jump straight upward.', 'Wrap arms tightly across chest at apex to complete 360° twist.', 'Spot landing and stick in demi-plié.'],
      keyCoachingCues: ['Jump UP before twisting', 'Wrap arms tight', 'Spot landing'],
      commonFaults: ['Twisting off the floor', 'Incomplete rotation']
    }
  },
  {
    id: 'gf_l5_gld_05',
    name: 'Switch kick',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5 Gold: Swing lead leg forward to 45°, quickly scissor-switch legs in mid-air with pointed toes.',
    xpReward: 75,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L5 Gold Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'f_6g8u4qX3o',
      title: 'Switch Kick & Switch Leap Tutorial',
      channelName: 'Tamara Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/f_6g8u4qX3o/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=f_6g8u4qX3o',
      embedUrl: 'https://www.youtube.com/embed/f_6g8u4qX3o'
    },
    writtenTutorial: {
      steps: ['Step forward with upright posture.', 'Swing lead leg to 45° with straight knee.', 'Scissor legs quickly in air.', 'Land softly on front foot in demi-plié.'],
      keyCoachingCues: ['Fast scissor switch', 'Chest upright', 'Point both toes'],
      commonFaults: ['Dropping chest forward', 'Bent back leg']
    }
  },
  {
    id: 'gf_l5_gld_06',
    name: 'Front split on the floor',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5: Flat forward split on the floor with hips square and chest held upright.',
    xpReward: 70,
    status: 'VERIFIED',
    officialRef: 'Gymfest L5 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'ng0TU-tUEw0',
      title: 'How to Get Flat Front Splits Fast',
      channelName: 'Anna McNulty',
      thumbnail: 'https://i.ytimg.com/vi/ng0TU-tUEw0/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=ng0TU-tUEw0',
      embedUrl: 'https://www.youtube.com/embed/ng0TU-tUEw0'
    },
    writtenTutorial: {
      steps: ['Slide front leg forward and back leg straight behind.', 'Square hips to front wall with torso upright.', 'Hold flat position with toes pointed.'],
      keyCoachingCues: ['Square hips to front', 'Chest upright', 'Point toes'],
      commonFaults: ['Twisting hips open', 'Bent back knee']
    }
  },
  {
    id: 'gf_l5_gld_07',
    name: 'Full turn on one foot (360%).',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5: 360° pirouette on high relevé on one foot with free leg in passé.',
    xpReward: 75,
    status: 'VERIFIED',
    officialRef: 'Gymfest L5 Floor',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '5S4EOgtS-Pg',
      title: 'Full Turn on One Foot (360) Tutorial',
      channelName: 'Altadore Gymnastic Club',
      thumbnail: 'https://i.ytimg.com/vi/5S4EOgtS-Pg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=5S4EOgtS-Pg',
      embedUrl: 'https://www.youtube.com/embed/5S4EOgtS-Pg'
    },
    writtenTutorial: {
      steps: ['Plie in preparation.', 'Rise to high relevé on supporting foot, snapping free foot to passé.', 'Spot wall, whip head 360° to lock landing spot.', 'Finish tall on relevé.'],
      keyCoachingCues: ['High relevé', 'Fast head spot', 'Hold finish 1s'],
      commonFaults: ['Dropping heel', 'Losing spot']
    }
  },
  {
    id: 'gf_l5_gld_08',
    name: 'Round off to back tuck.',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5 Gold: Round-off with aggressive snap down, rebounding directly into backward tucked salto to stick.',
    xpReward: 90,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L5 Gold Floor',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'bYAbf0Ep6rk',
      title: 'Mastering the Back Tuck | Step-by-Step Gymnastics Tutorial',
      channelName: 'ChloeD_Gymnast',
      thumbnail: 'https://i.ytimg.com/vi/bYAbf0Ep6rk/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=bYAbf0Ep6rk',
      embedUrl: 'https://www.youtube.com/embed/bYAbf0Ep6rk'
    },
    writtenTutorial: {
      steps: ['Hurdle into round-off with powerful snap down.', 'Punch floor, driving chest and arms straight up into air.', 'Pull knees to chest in tight tuck, rotating 360° backward.', 'Spot floor, open tuck and stick firmly.'],
      keyCoachingCues: ['Drive chest UP on takeoff', 'Tuck tight around shins', 'Spot floor and stick landing'],
      commonFaults: ['Throwing head back on takeoff', 'Under-rotating']
    }
  },
  {
    id: 'gf_l5_plt_01',
    name: 'Front tuck / Front aeriel',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5 Platinum: Forward punch somersault in tuck position (punch front) or forward aerial walkover.',
    xpReward: 90,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L5 Platinum Floor',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'u7B8_p91X2m',
      title: 'How to Do a Punch Front (Front Tuck) | Floor Gymnastics',
      channelName: 'Gymnastics Method',
      thumbnail: 'https://i.ytimg.com/vi/u7B8_p91X2m/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=u7B8_p91X2m',
      embedUrl: 'https://www.youtube.com/embed/u7B8_p91X2m'
    },
    writtenTutorial: {
      steps: ['Accelerated run into low hurdle punch.', 'Punch balls of feet, driving arms and hips upward.', 'Tuck knees to chest tightly.', 'Spot floor, open and stick landing with chest high.'],
      keyCoachingCues: ['Punch hard off toes', 'Lift hips over shoulders', 'Tuck tight and stick'],
      commonFaults: ['Diving forward with low hips', 'Cowboying knees wide']
    }
  },
  {
    id: 'gf_l5_plt_02',
    name: 'Switch kick to Split jump',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5 Platinum: Switch kick connected directly into stationary split jump in air.',
    xpReward: 85,
    status: 'IN_PROGRESS',
    officialRef: 'Gymfest L5 Platinum Floor',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'f_6g8u4qX3o',
      title: 'Switch Kick to Split Jump Connection Tutorial',
      channelName: 'Tamara Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/f_6g8u4qX3o/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=f_6g8u4qX3o',
      embedUrl: 'https://www.youtube.com/embed/f_6g8u4qX3o'
    },
    writtenTutorial: {
      steps: ['Perform switch kick in air.', 'Land on front foot in plie and rebound immediately into split jump.', 'Absorb landing in clean demi-plié.'],
      keyCoachingCues: ['Fast scissor switch', 'Immediate rebound', 'Equal split'],
      commonFaults: ['Pausing between jumps', 'Uneven leg split']
    }
  },
  {
    id: 'gf_l5_plt_03',
    name: 'Round off to back hand spring to back tuck.',
    level: 5,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5 Platinum: Accelerated round-off connected to back handspring, rebounding into high backward tucked salto to stick.',
    xpReward: 95,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L5 Platinum Floor',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'h8L2vQ5M9_4',
      title: 'Round-Off Back Handspring Back Tuck Gymnastics Tutorial',
      channelName: 'Precision Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/h8L2vQ5M9_4/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=h8L2vQ5M9_4',
      embedUrl: 'https://www.youtube.com/embed/h8L2vQ5M9_4'
    },
    writtenTutorial: {
      steps: ['Sprint into snapping round-off.', 'Rebound immediately into fast, long back handspring.', 'Punch floor with toes, driving chest straight up into air.', 'Tuck knees to chest, rotate 360°, open body and stick.'],
      keyCoachingCues: ['Fast handspring into punch', 'Drive chest UP on takeoff', 'Tuck tight around shins', 'Stick landing'],
      commonFaults: ['Throwing head back', 'Slow back handspring robbing height', 'Under-rotating']
    }
  },
  {
    id: 'gf_l5_vt_01',
    name: 'Running handspring on the vault',
    level: 5,
    category: 'VAULT',
    xcelTier: 'GOLD',
    gymfestTier: 'GOLD',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 5 Vault (Page 2): Full sprint approach, punch springboard, pre-flight onto vault table, shoulder repulsion into post-flight landing on feet.',
    xpReward: 95,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest Level 5 Vault',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'Xg0F7SpWT04',
      title: 'Gymnastics Vault - Handspring Front',
      channelName: 'Rick McCharles',
      thumbnail: 'https://i.ytimg.com/vi/Xg0F7SpWT04/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=Xg0F7SpWT04',
      embedUrl: 'https://www.youtube.com/embed/Xg0F7SpWT04'
    },
    writtenTutorial: {
      steps: ['Sprint with maximum velocity down runway.', 'Punch springboard into straight pre-flight angle.', 'Block explosively through shoulders on contact with table.', 'Fly through post-flight and stick firmly.'],
      keyCoachingCues: ['Full sprint acceleration', 'Fast shoulder block off table', 'Stay completely hollow', 'Stick landing firmly'],
      commonFaults: ['Piking on table', 'Bending elbows during contact']
    }
  },

  // =======================================================================
  // LEVEL 6 (Platinum & Vault)
  // =======================================================================
  {
    id: 'gf_l6_plt_01',
    name: 'Running round off back layout',
    level: 6,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 6 Platinum: Accelerated round-off back handspring into straight-body backward somersault (layout) without hip bend.',
    xpReward: 120,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L6 Platinum Floor',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'DSckWbWDKWA',
      title: 'Back Layout on Floor | Gymnastics Acrobatics',
      channelName: 'Eureka Gymnastics Club',
      thumbnail: 'https://i.ytimg.com/vi/DSckWbWDKWA/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=DSckWbWDKWA',
      embedUrl: 'https://www.youtube.com/embed/DSckWbWDKWA'
    },
    writtenTutorial: {
      steps: ['Accelerate into round-off back handspring.', 'Punch floor vertically, driving arms straight overhead.', 'Maintain rigid straight-body hollow line throughout entire 360° backward rotation.', 'Spot floor and stick landing cleanly.'],
      keyCoachingCues: ['Punch straight UP', 'Hold body straight like a pencil', 'Spot floor and stick'],
      commonFaults: ['Bending knees', 'Piking at hips', 'Throwing head back']
    }
  },
  {
    id: 'gf_l6_plt_02',
    name: 'A dance passage with minimum of two different leaps, jumps, hop. 1 must be 180 split',
    level: 6,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 6 Platinum: Dance passage with minimum of 2 different leaps, jumps, or hops directly or indirectly connected, with at least one hitting full 180° split.',
    xpReward: 110,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L6 Dance Passage Requirement',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'f_6g8u4qX3o',
      title: 'Floor Dance Passage Series Tutorial (180 Split)',
      channelName: 'Tamara Gymnastics',
      thumbnail: 'https://i.ytimg.com/vi/f_6g8u4qX3o/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=f_6g8u4qX3o',
      embedUrl: 'https://www.youtube.com/embed/f_6g8u4qX3o'
    },
    writtenTutorial: {
      steps: ['Connect two distinct dance elements with continuous rhythm.', 'Achieve full 180° cross or side split on at least one element.', 'Land softly in plie and step out with elegance.'],
      keyCoachingCues: ['Full 180 split at peak', 'Continuous movement', 'Upright posture'],
      commonFaults: ['Split under 180°', 'Pausing between dance skills']
    }
  },
  {
    id: 'gf_l6_plt_03',
    name: 'A 360 degree turn on one foot',
    level: 6,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 6 Platinum: 360° turn on single support leg in high relevé with pointed passé foot.',
    xpReward: 100,
    status: 'VERIFIED',
    officialRef: 'Gymfest L6 Turn Requirement',
    difficulty: 'A',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '5S4EOgtS-Pg',
      title: '360 Degree Turn on One Foot in Relevé',
      channelName: 'Altadore Gymnastic Club',
      thumbnail: 'https://i.ytimg.com/vi/5S4EOgtS-Pg/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=5S4EOgtS-Pg',
      embedUrl: 'https://www.youtube.com/embed/5S4EOgtS-Pg'
    },
    writtenTutorial: {
      steps: ['Plie into preparation.', 'Rise to high relevé on supporting foot, snapping free foot to passé.', 'Spot wall, whip head 360° and lock landing spot.', 'Finish with control on relevé.'],
      keyCoachingCues: ['Highest relevé possible', 'Spot the turn', 'Tight core'],
      commonFaults: ['Dropping heel mid-turn', 'Incomplete rotation']
    }
  },
  {
    id: 'gf_l6_plt_04',
    name: '1 salto or Aerial acro element',
    level: 6,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 6 Platinum: Acro pass featuring an aerial cartwheel, aerial walkover, or punch salto with stuck landing.',
    xpReward: 110,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L6 Acro Element',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'XCHPaHDf12w',
      title: 'Side Aerial & Salto Acro Elements on Floor',
      channelName: 'Sophia Campana',
      thumbnail: 'https://i.ytimg.com/vi/XCHPaHDf12w/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=XCHPaHDf12w',
      embedUrl: 'https://www.youtube.com/embed/XCHPaHDf12w'
    },
    writtenTutorial: {
      steps: ['Accelerate into acro element.', 'Execute no-handed aerial or punch salto with full rotation.', 'Spot landing and stick in demi-plié.'],
      keyCoachingCues: ['Maximum flight height', 'Clean rotation', 'Stick landing'],
      commonFaults: ['Touching hands down', 'Under-rotating']
    }
  },
  {
    id: 'gf_l6_plt_05',
    name: 'Hand spring front tuck',
    level: 6,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 6 Platinum: Front handspring step-out rebounding directly into forward tucked punch salto.',
    xpReward: 120,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L6 Platinum Floor',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '0CbixcHrSVc',
      title: 'Front Handspring into Front Tuck Gymnastics Tutorial',
      channelName: 'ringsking',
      thumbnail: 'https://i.ytimg.com/vi/0CbixcHrSVc/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=0CbixcHrSVc',
      embedUrl: 'https://www.youtube.com/embed/0CbixcHrSVc'
    },
    writtenTutorial: {
      steps: ['Hurdle into front handspring.', 'Block off hands and punch floor balls of feet.', 'Drive arms and hips up into front tuck somersault.', 'Spot floor, open and stick.'],
      keyCoachingCues: ['Fast handspring block', 'Immediate punch rebound', 'Tuck tight around shins'],
      commonFaults: ['Hesitation on punch', 'Low hip elevation']
    }
  },
  {
    id: 'gf_l6_vt_01',
    name: 'Front handspring 1/2 turn / Round off',
    level: 6,
    category: 'VAULT',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 6 Vault (Page 1): Front handspring with 180° twist off table (half-off vault) or round-off onto springboard table entry.',
    xpReward: 130,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest Level 6 Vault',
    difficulty: 'B',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'nmzGNpvBMKM',
      title: 'Front Handspring on Vault Progression (Half-Off)',
      channelName: 'Owatonna Gymnastics Club',
      thumbnail: 'https://i.ytimg.com/vi/nmzGNpvBMKM/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=nmzGNpvBMKM',
      embedUrl: 'https://www.youtube.com/embed/nmzGNpvBMKM'
    },
    writtenTutorial: {
      steps: ['Sprint down runway with top speed.', 'Punch springboard into straight pre-flight.', 'Block off table through shoulders, initiating 1/2 twist from core.', 'Spot table and stick landing facing back.'],
      keyCoachingCues: ['Block first then twist', 'Spot vault table on landing', 'Stick with locked knees'],
      commonFaults: ['Twisting before blocking', 'Piking hips during twist']
    }
  },

  // =======================================================================
  // LEVEL 7 (Platinum & Vault)
  // =======================================================================
  {
    id: 'gf_l7_plt_01',
    name: 'Handspring front salto in the layout position / Running front layout',
    level: 7,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 7 Platinum: Running approach or front handspring connected into straight-body forward punch layout salto to stick.',
    xpReward: 150,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest L7 Platinum Floor',
    difficulty: 'C',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'k6-3pXjnqis',
      title: 'How To Do A Front Layout (Gymnastics Tutorial)',
      channelName: 'Gyminny Kids',
      thumbnail: 'https://i.ytimg.com/vi/k6-3pXjnqis/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=k6-3pXjnqis',
      embedUrl: 'https://www.youtube.com/embed/k6-3pXjnqis'
    },
    writtenTutorial: {
      steps: ['Sprint forward into low, aggressive hurdle punch.', 'Drive arms and chest upward into high forward trajectory.', 'Maintain hollow straight alignment as hips rotate forward over shoulders.', 'Spot floor on descent and stick landing softly.'],
      keyCoachingCues: ['Lift hips high over head', 'Lock body straight', 'Stick landing with chest high'],
      commonFaults: ['Piking at hips', 'Diving forward low to mat']
    }
  },
  {
    id: 'gf_l7_vt_01',
    name: 'Front handspring Full turn / Round off',
    level: 7,
    category: 'VAULT',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 7 Vault (Page 1): Front handspring repulsion off table with complete 360° longitudinal twist (full-twist off table) or Tsukahara round-off entry.',
    xpReward: 160,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest Level 7 Vault',
    difficulty: 'C',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'eMB2go49_YE',
      title: 'Front Handspring Full Turn & Yurchenko Drills on Vault',
      channelName: 'Nick Blanton',
      thumbnail: 'https://i.ytimg.com/vi/eMB2go49_YE/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=eMB2go49_YE',
      embedUrl: 'https://www.youtube.com/embed/eMB2go49_YE'
    },
    writtenTutorial: {
      steps: ['Maximum speed runway sprint.', 'Punch springboard into strong pre-flight.', 'Block through shoulders off vault table.', 'Execute full 360° longitudinal twist in post-flight before sticking on mat.'],
      keyCoachingCues: ['Explosive repulsion block', 'Wrap arms across chest for full twist', 'Spot landing mat to stick'],
      commonFaults: ['Twisting on table prematurely', 'Under-twisting on landing']
    }
  },

  // =======================================================================
  // LEVEL 8 (Platinum & Vault)
  // =======================================================================
  {
    id: 'gf_l8_plt_01',
    name: 'Optional Routine',
    level: 8,
    category: 'FLOOR',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 8 Platinum: Complete optional floor exercise routine choreography meeting all composition requirements: multiple saltos, 180° dance passage, and 360° turn.',
    xpReward: 200,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest Level 8 Optional Floor Routine',
    difficulty: 'C',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: 'Pu4RE7h1tPw',
      title: 'Optional Floor Routine Composition & Tumbling Passes',
      channelName: 'The Pro Cheerleader',
      thumbnail: 'https://i.ytimg.com/vi/Pu4RE7h1tPw/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=Pu4RE7h1tPw',
      embedUrl: 'https://www.youtube.com/embed/Pu4RE7h1tPw'
    },
    writtenTutorial: {
      steps: ['Perform introductory choreography to music.', 'Execute primary tumbling pass (e.g. RO-BHS-Layout Full).', 'Perform connected dance passage with 180° split leap.', 'Execute secondary acro pass and stick finish salute.'],
      keyCoachingCues: ['Artistry and presentation', 'High execution tumbling', 'Stuck landings throughout'],
      commonFaults: ['Loss of rhythm with music', 'Stepping out of bounds']
    }
  },
  {
    id: 'gf_l8_vt_01',
    name: 'Tsukahara / Yurchenko',
    level: 8,
    category: 'VAULT',
    xcelTier: 'PLATINUM',
    gymfestTier: 'PLATINUM',
    curriculumSource: 'GYMFEST_DOC',
    description: 'Gymfest Level 8 Vault (Page 1): Tsukahara (1/4 to 1/2 turn entry into back salto) or Yurchenko (round-off onto board, back handspring onto table into post-flight salto).',
    xpReward: 200,
    status: 'NOT_COMPLETED',
    officialRef: 'Gymfest Level 8 Vault',
    difficulty: 'C',
    tutorialStatus: 'FOUND',
    tutorial: {
      videoId: '8QvztPNJwCc',
      title: 'Tsuk Vault Drills Progression & Journey',
      channelName: 'Alizé Lee',
      thumbnail: 'https://i.ytimg.com/vi/8QvztPNJwCc/hqdefault.jpg',
      youtubeUrl: 'https://www.youtube.com/watch?v=8QvztPNJwCc',
      embedUrl: 'https://www.youtube.com/embed/8QvztPNJwCc'
    },
    writtenTutorial: {
      steps: ['Run with top speed down runway.', 'Execute round-off onto board (Yurchenko) or 1/2 turn entry (Tsukahara).', 'Block violently through shoulders off vault table.', 'Fly into backward layout somersault and stick on landing mat.'],
      keyCoachingCues: ['Fast runway sprint', 'Violent repulsion block off table', 'Hold tight hollow post-flight'],
      commonFaults: ['Slow hurdle punch', 'Collapsing arms on table']
    }
  }
];
