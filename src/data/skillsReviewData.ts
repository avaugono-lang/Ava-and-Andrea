import { SkillsGapReviewItem } from '../types';

export const SKILLS_GAP_REVIEW_DATA: SkillsGapReviewItem[] = [
  // =========================================================================
  // SILVER LEVEL (USAG Level 3 / Xcel Silver)
  // Benchmark: Solid fundamentals, beginning acro connections, bar circles & beam confidence
  // =========================================================================
  {
    id: 'gap_slv_vt_01',
    name: 'Handstand Flatback onto Mat Stack',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'VAULT',
    categoryName: 'Vault',
    elementCode: 'USAG-SLV-VT-01',
    difficulty: 'A',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'Accelerated board hurdle into tight handstand with heel drive, falling straight to flat back on 32" mat stack.',
    writtenTutorial: {
      steps: [
        'Run with forward acceleration and hurdle onto the springboard with feet together and arms swinging back to front.',
        'Punch the board explosively, punching arms up through ears into a 45° entry toward the mat stack.',
        'Hit a vertical handstand momentarily on the front edge of the mat stack with locked elbows and tight ribs.',
        'Hollow down and drop flat onto the back with chin tucked, maintaining complete body alignment.'
      ],
      keyCoachingCues: ['Fast arm swing', 'Eyes on the board', 'Lock ribs flat', 'Pinch heels together'],
      commonFaults: ['Arching through lower back on impact', 'Bending elbows on contact', 'Under-rotating and landing on hips'],
      prerequisites: ['Level 2 Handstand fall to flatback (16")', 'Handstand hold against wall (30 sec)']
    },
    videoTutorial: {
      videoId: 'K3gM33g2W1I',
      title: 'Handstand Flat Back Vault Technique & Drills',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=K3gM33g2W1I',
      embedUrl: 'https://www.youtube.com/embed/K3gM33g2W1I',
      thumbnail: 'https://i.ytimg.com/vi/K3gM33g2W1I/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_vt_02',
    name: 'Run & Hurdle onto Springboard to Straight Jump',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'VAULT',
    categoryName: 'Vault',
    elementCode: 'USAG-SLV-VT-02',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Consistent accelerated sprint, low hurdle onto sweet spot of the board, and explosive vertical straight jump with stuck landing.',
    writtenTutorial: {
      steps: [
        'Sprint 40-50 feet with upright sprinting mechanics and high knees, accelerating progressively.',
        'Execute a low, forward-driven hurdle step off one foot without elevating excessively.',
        'Punch both balls of feet simultaneously on the sweet spot (front third) of the springboard.',
        'Drive arms straight up by ears, soaring into a tight hollow straight jump, and stick the landing on 8" mat.'
      ],
      keyCoachingCues: ['Accelerate into board', 'Low fast hurdle', 'Punch the springs', 'Stick and hold 3 seconds'],
      commonFaults: ['Decelerating before the hurdle', 'Jumping too high into the board', 'Dropping arms on landing'],
      prerequisites: ['Springboard bounce drills', 'Straight jump stick on floor line']
    },
    videoTutorial: {
      videoId: 'vA6qL1hNq_4',
      title: 'How to Run and Hurdle onto the Springboard | Vault Drills',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=vA6qL1hNq_4',
      embedUrl: 'https://www.youtube.com/embed/vA6qL1hNq_4',
      thumbnail: 'https://i.ytimg.com/vi/vA6qL1hNq_4/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_ub_01',
    name: 'Glide Swing with Extension',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-SLV-UB-01',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Jump from mat into piked glide swing forward, full body extension with toes pointing at end of swing, and swing back.',
    writtenTutorial: {
      steps: [
        'Stand arm distance behind low bar, jump forward to catch bar with overhand grip.',
        'Pike legs smoothly at hips with straight knees, sliding toes just inches off the floor mat.',
        'At peak forward swing, open shoulders and extend hips fully into an open hollow body line.',
        'Pull heels and hips back toward bar on backswing with straight arms engaged.'
      ],
      keyCoachingCues: ['Straight arms locked', 'Pike on way out', 'Shoot toes forward at full extension', 'Keep chin neutral'],
      commonFaults: ['Bending knees during glide', 'Feet scraping the floor', 'Failing to extend at forward peak'],
      prerequisites: ['Hanging hollow hold (15 sec)', 'Straight leg toe-to-bar raises']
    },
    videoTutorial: {
      videoId: 'b5mN40Rj9bA',
      title: 'How to Master the Glide Swing on Bars | Key Drills',
      channelName: 'Shift Movement Science',
      youtubeUrl: 'https://www.youtube.com/watch?v=b5mN40Rj9bA',
      embedUrl: 'https://www.youtube.com/embed/b5mN40Rj9bA',
      thumbnail: 'https://i.ytimg.com/vi/b5mN40Rj9bA/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_ub_02',
    name: 'Pullover to Front Support',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-SLV-UB-02',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Chin-up pull, dynamic leg kick over low bar, shifting wrists into locked front support.',
    writtenTutorial: {
      steps: [
        'Hang with overgrip, initiate with a strong flexed-arm chin pull bringing chin over bar.',
        'Drive knees or straight legs overhead, pulling hips tight against the bar.',
        'Rotate hips over the bar while shifting wrists from hang to front support position.',
        'Push tall into locked front support with shoulders over bar and legs tight.'
      ],
      keyCoachingCues: ['Chin to bar first', 'Pull hips into bar', 'Shift wrists on top', 'Tall locked chest'],
      commonFaults: ['Arms straightening during kickover', 'Hips drifting away from bar', 'Failing to roll wrists forward'],
      prerequisites: ['Flexed arm hang 15s', 'Candlestick roll to stand']
    },
    videoTutorial: {
      videoId: 'e9K3p7vX6v8',
      title: 'How to Do a Pullover on Bars | Gymnastics Step by Step',
      channelName: 'Head Over Heels Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=e9K3p7vX6v8',
      embedUrl: 'https://www.youtube.com/embed/e9K3p7vX6v8',
      thumbnail: 'https://i.ytimg.com/vi/e9K3p7vX6v8/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_ub_03',
    name: 'Cast to 30°-45° (Hips Clear of Bar)',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-SLV-UB-03',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'From front support, round into hollow, dip shoulders and drive hips upward at least 30°-45° with straight arms.',
    writtenTutorial: {
      steps: [
        'Begin in locked front support with straight arms and rounded upper back.',
        'Bend slightly at the hips to load momentum while keeping arms locked straight.',
        'Explosively drive toes and heels backward and upward while pressing downward with hands.',
        'Reach a minimum 30° angle with hips clear of the bar before returning softly.'
      ],
      keyCoachingCues: ['Press down with palms', 'Straight elbows locked', 'Drive with toes', 'Keep chest hollow'],
      commonFaults: ['Bent elbows absorbing power', 'Arching back instead of hollow cast', 'Hips remaining touching the bar'],
      prerequisites: ['Front support hold 20s', 'Floor cast push-up drills']
    },
    videoTutorial: {
      videoId: 'Wp_YxT7j8M4',
      title: 'How to Cast on Uneven Bars | Level 3 & Silver Cast Drills',
      channelName: 'Gymnast Care',
      youtubeUrl: 'https://www.youtube.com/watch?v=Wp_YxT7j8M4',
      embedUrl: 'https://www.youtube.com/embed/Wp_YxT7j8M4',
      thumbnail: 'https://i.ytimg.com/vi/Wp_YxT7j8M4/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_ub_04',
    name: 'Back Hip Circle',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-SLV-UB-04',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Cast off bar, fall backward rotating around the bar with hips glued to bar, returning to front support.',
    writtenTutorial: {
      steps: [
        'Perform a preliminary cast to clear hips from bar.',
        'As body returns, glue thighs/hips to the bar with head neutral and body straight.',
        'Drop backward like a statue, using momentum to rotate 360° around the bar.',
        'Shift wrists dynamically on top to finish in tall front support.'
      ],
      keyCoachingCues: ['Glue hips to the bar', 'Head neutral (look at toes)', 'Fast wrist shift on top', 'Stay stiff like a pencil'],
      commonFaults: ['Throwing head back', 'Hips peeling away mid-circle', 'Bending knees'],
      prerequisites: ['Solid cast', 'Front support balance']
    },
    videoTutorial: {
      videoId: 'U8W32qg-n9I',
      title: 'How to do a Back Hip Circle | Step-by-Step Gymnastics Tutorial',
      channelName: 'Tamara Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=U8W32qg-n9I',
      embedUrl: 'https://www.youtube.com/embed/U8W32qg-n9I',
      thumbnail: 'https://i.ytimg.com/vi/U8W32qg-n9I/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_ub_05',
    name: 'Undershoot Dismount (Sole Circle / Cast Prep)',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-SLV-UB-05',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Cast, drop into hollow under the bar, shoot toes upward and outward, releasing bar to a stuck landing.',
    writtenTutorial: {
      steps: [
        'Execute a cast to 30°, then drop into an undershoot under the bar keeping hips close.',
        'Maintain eye contact with feet as body swings forward under the bar.',
        'Shoot toes up toward ceiling and release bar with both hands simultaneously.',
        'Land softly in demi-plié with chest upright and stick without stepping.'
      ],
      keyCoachingCues: ['Push bar away on cast', 'Hollow drop', 'Shoot feet to the ceiling', 'Spot the landing mat'],
      commonFaults: ['Releasing too early or late', 'Piking on landing', 'Cowboying knees on dismount'],
      prerequisites: ['Back hip circle', 'Glide swing']
    },
    videoTutorial: {
      videoId: 'Kz99HwL2W_g',
      title: 'Undershoot Dismount Tutorial | Level 3 Uneven Bars',
      channelName: 'Gymnastics HQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=Kz99HwL2W_g',
      embedUrl: 'https://www.youtube.com/embed/Kz99HwL2W_g',
      thumbnail: 'https://i.ytimg.com/vi/Kz99HwL2W_g/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_bb_01',
    name: 'Jump to Front Support Mount on Beam',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-SLV-BB-01',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'From springboard or mat, jump with hands on beam to straight-arm front support with tight legs and pointed toes.',
    writtenTutorial: {
      steps: [
        'Place hands flat on beam shoulder-width apart, fingers wrapping sides.',
        'Punch springboard and push down through palms to elevate hips above beam.',
        'Extend shoulders over hands in locked front support with legs glued together.',
        'Swing right leg over beam into straddle or squat position with graceful posture.'
      ],
      keyCoachingCues: ['Push tall into palms', 'Knees straight and locked', 'Eyes focused on far end of beam'],
      commonFaults: ['Shoulders sagging', 'Banging thighs on beam surface', 'Loose feet'],
      prerequisites: ['Front support hold on floor bar', 'Beam walk posture']
    },
    videoTutorial: {
      videoId: 'f9V_73oM_qE',
      title: 'Beam Mounts for Beginners & Silver Level',
      channelName: 'Head Over Heels Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=f9V_73oM_qE',
      embedUrl: 'https://www.youtube.com/embed/f9V_73oM_qE',
      thumbnail: 'https://i.ytimg.com/vi/f9V_73oM_qE/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_bb_02',
    name: 'Cross Handstand on Beam (Min 45° to Vertical)',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-SLV-BB-02',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Lunge on beam, place hands thumb-to-thumb, kick into tight cross handstand, and step down into balanced lunge.',
    writtenTutorial: {
      steps: [
        'Start in deep beam lunge with arms by ears and torso aligned with front leg.',
        'Reach far out, placing thumbs touching across the beam with fingers wrapped around sides.',
        'Kick back leg up while levering body into a vertical or minimum 45° cross handstand.',
        'Step down with dominant foot first into a clean beam lunge, arms finished in crown.'
      ],
      keyCoachingCues: ['Reach long in lever', 'Thumbs touching', 'Squeeze butt and ribs', 'Step back into deep lunge'],
      commonFaults: ['Rushing the kickover without levering', 'Crooked hand placement causing beam slip', 'Falling off on step-down'],
      prerequisites: ['Floor handstand hold 5s', 'Beam line handstand on floor']
    },
    videoTutorial: {
      videoId: 'mH8_Rj5x0bY',
      title: 'How to Do a Handstand on Beam | Safe Drills & Confidence',
      channelName: 'Gymnastics HQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=mH8_Rj5x0bY',
      embedUrl: 'https://www.youtube.com/embed/mH8_Rj5x0bY',
      thumbnail: 'https://i.ytimg.com/vi/mH8_Rj5x0bY/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_bb_03',
    name: 'Cartwheel on Balance Beam',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-SLV-BB-03',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Lunge on beam, place hand-hand in line, cartwheel in vertical plane, and land foot-foot in balanced lunge.',
    writtenTutorial: {
      steps: [
        'Stand in tall lunge on beam, sight the target spot 2 feet in front of toes.',
        'Lever down placing lead hand turned inward, follow with second hand directly along center line.',
        'Kick back leg strongly over top, passing through a vertical straddle plane with straight legs.',
        'Land first foot on center line, immediately followed by second foot in a steady lunge.'
      ],
      keyCoachingCues: ['Keep shoulders in line of beam', 'Spot hands onto beam', 'Lock knees at vertical', 'Step down along center'],
      commonFaults: ['Missing center line with second hand', 'Piking hips out of beam plane', 'Rushing landing and falling sideways'],
      prerequisites: ['Floor beam cartwheel', 'Floor cartwheel on line']
    },
    videoTutorial: {
      videoId: '5zT7rZl4W9g',
      title: 'Cartwheel on Beam Tutorial | Step by Step Breakdown',
      channelName: 'Whitney Bjerken',
      youtubeUrl: 'https://www.youtube.com/watch?v=5zT7rZl4W9g',
      embedUrl: 'https://www.youtube.com/embed/5zT7rZl4W9g',
      thumbnail: 'https://i.ytimg.com/vi/5zT7rZl4W9g/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_bb_04',
    name: 'Split Jump (60°-90° Split) on Beam',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-SLV-BB-04',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'From beam stand, plie and spring straight up, splitting legs equally to 90° separation and landing safely on beam.',
    writtenTutorial: {
      steps: [
        'Stand with one foot slightly in front of the other, knees relaxed.',
        'Plie through both feet and jump straight upward with arms swinging into side-middle or crown.',
        'Split front and back leg simultaneously to at least 90° separation with pointed toes.',
        'Pull legs together quickly on descent to land front-foot back-foot with soft knees.'
      ],
      keyCoachingCues: ['Jump UP before splitting', 'Equal split front and back', 'Chest stays upright', 'Absorb landing in plie'],
      commonFaults: ['Leaning chest forward', 'Uneven leg split (front leg high, back leg low)', 'Landing stiff-legged'],
      prerequisites: ['Straight jump on beam', 'Split jump on floor line']
    },
    videoTutorial: {
      videoId: 'q-b9E7h8k_o',
      title: 'How to Do a Split Jump on Beam | Tips for Balance & Height',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=q-b9E7h8k_o',
      embedUrl: 'https://www.youtube.com/embed/q-b9E7h8k_o',
      thumbnail: 'https://i.ytimg.com/vi/q-b9E7h8k_o/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_bb_05',
    name: '1/2 Pivot Turn on One Foot (Beam)',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-SLV-BB-05',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Step onto relevé on one foot, rotate 180° smoothly on ball of foot with high posture, and step down.',
    writtenTutorial: {
      steps: [
        'Step forward onto the ball of one foot in high relevé, arms in first or fifth position.',
        'Spot a focal point at opposite end of the beam to lock balance.',
        'Turn head and shoulders 180° while pivoting cleanly on ball of foot.',
        'Finish in locked relevé before lowering heel into preparation for next skill.'
      ],
      keyCoachingCues: ['Stay tall in relevé', 'Spot the end of beam', 'Squeeze inner thighs', 'Core engaged'],
      commonFaults: ['Dropping heel mid-turn', 'Wobbling arms out of alignment', 'Turning off-axis'],
      prerequisites: ['Relevé walk on beam', 'Pivot turns on floor line']
    },
    videoTutorial: {
      videoId: 'vB97L_x31yU',
      title: 'Beam Pivot Turns Tutorial | Perfect Balance in Relevé',
      channelName: 'Gymnastics HQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=vB97L_x31yU',
      embedUrl: 'https://www.youtube.com/embed/vB97L_x31yU',
      thumbnail: 'https://i.ytimg.com/vi/vB97L_x31yU/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_bb_06',
    name: 'Round-off Dismount off End of Beam',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-SLV-BB-06',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Lunge toward end of beam, round-off with 1/4 turn, snap down off beam onto 8" landing mat and stick.',
    writtenTutorial: {
      steps: [
        'Lunge along beam line approaching the dismount end with confident momentum.',
        'Place hands in line near the end of the beam, kicking legs over with aggressive snap.',
        'Push off beam with hands, snapping legs together before passing end of beam.',
        'Land facing beam on landing mat, absorbing impact in demi-plié with arms presented.'
      ],
      keyCoachingCues: ['Drive the hurdle along center line', 'Push beam away with hands', 'Snap feet down together', 'Stick landing firmly'],
      commonFaults: ['Looking down at hands and under-rotating', 'Releasing hands prematurely', 'Landing too close to beam'],
      prerequisites: ['Floor round-off with rebound', 'Cartwheel dismount off beam']
    },
    videoTutorial: {
      videoId: 'h8L2vQ5M9_4',
      title: 'How to Do a Round Off Dismount on Beam',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=h8L2vQ5M9_4',
      embedUrl: 'https://www.youtube.com/embed/h8L2vQ5M9_4',
      thumbnail: 'https://i.ytimg.com/vi/h8L2vQ5M9_4/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_fx_01',
    name: 'Round-off Rebound',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-SLV-FX-01',
    difficulty: 'A',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'Hurdle into powerful 1/2 turn round-off with strong hand repulsion, snapping down to high vertical rebound.',
    writtenTutorial: {
      steps: [
        'Take a 3-step run into a long, low hurdle with chest upright.',
        'Reach hands down in a T-shape line, kicking back leg overhead into 1/2 twist.',
        'Block aggressively through shoulders, snapping feet together through hollow body.',
        'Rebound straight up out of punch with arms by ears, sticking clean on landing.'
      ],
      keyCoachingCues: ['Fast low hurdle', 'T-hand placement', 'Snap down to hollow', 'Explosive vertical rebound'],
      commonFaults: ['Bent elbows on hand contact', 'Slow snap down', 'Landing with chest dropped forward'],
      prerequisites: ['Level 1 Cartwheel', 'Handstand snap-down on mat']
    },
    videoTutorial: {
      videoId: '8qZ9mQ2s1L4',
      title: 'Round-Off Rebound Technique & Common Mistakes',
      channelName: 'Shift Movement Science',
      youtubeUrl: 'https://www.youtube.com/watch?v=8qZ9mQ2s1L4',
      embedUrl: 'https://www.youtube.com/embed/8qZ9mQ2s1L4',
      thumbnail: 'https://i.ytimg.com/vi/8qZ9mQ2s1L4/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_fx_02',
    name: 'Handstand to Bridge Kickover',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-SLV-FX-02',
    difficulty: 'A',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'Controlled vertical handstand, soft step down into bridge, followed by immediate split kickover to lunge.',
    writtenTutorial: {
      steps: [
        'Lunge forward into a vertical handstand with shoulders open and toes pointed.',
        'Lower lead foot softly to mat into bridge while pushing shoulders open over hands.',
        'Without pausing, push off floor through supporting foot and drive lead leg overhead in split.',
        'Pass through handstand back to a tall finish lunge.'
      ],
      keyCoachingCues: ['Hold handstand 1 count before bridge', 'Push shoulders over wrists in bridge', 'Kick with straight knee', 'Stand tall into lunge'],
      commonFaults: ['Crashing onto feet in bridge', 'Stuck in bridge unable to kickover', 'Bending supporting leg'],
      prerequisites: ['Bridge kickover from mat', 'Solid handstand hold']
    },
    videoTutorial: {
      videoId: '7vB3M2x1q0Y',
      title: 'How to Do a Handstand to Bridge Kickover Tutorial',
      channelName: 'Head Over Heels Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=7vB3M2x1q0Y',
      embedUrl: 'https://www.youtube.com/embed/7vB3M2x1q0Y',
      thumbnail: 'https://i.ytimg.com/vi/7vB3M2x1q0Y/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_fx_03',
    name: 'Back Extension Roll to Push-up / Handstand',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-SLV-FX-03',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Straight arm backward roll with fast hip extension, pushing up through handstand or push-up hollow.',
    writtenTutorial: {
      steps: [
        'Stand tall, roll back with straight legs and hands positioned next to ears palms-up.',
        'As hips pass over head, push explosively through palms while extending hips fully.',
        'Lock arms and legs straight, passing through a high push-up or handstand angle.',
        'Step down into balanced finish with chest high.'
      ],
      keyCoachingCues: ['Fast hands by ears', 'Drive toes to the ceiling', 'Push hard through palms', 'Stay hollow in core'],
      commonFaults: ['Bending knees during roll', 'Slow hand push causing head strain', 'Piking on push-up finish'],
      prerequisites: ['Level 1 Backward roll', 'Push-up hold 30s']
    },
    videoTutorial: {
      videoId: 'd7wV9M_2x0Q',
      title: 'Back Extension Roll Tutorial | Clean Form & Drills',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=d7wV9M_2x0Q',
      embedUrl: 'https://www.youtube.com/embed/d7wV9M_2x0Q',
      thumbnail: 'https://i.ytimg.com/vi/d7wV9M_2x0Q/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_fx_04',
    name: 'Split Leap (90° Separation) on Floor',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-SLV-FX-04',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Step-chassé into grand jeté split leap with minimum 90° split angle, straight knees, and pointed toes.',
    writtenTutorial: {
      steps: [
        'Take a continuous step or chassé with upright carriage and pointed feet.',
        'Brush lead foot forward through low battement, exploding off trailing leg.',
        'Achieve minimum 90° leg split at the peak of elevation with chest held tall.',
        'Land softly in plie on front foot and step out with elegance.'
      ],
      keyCoachingCues: ['Brush foot along floor', 'Split at apex of jump', 'Keep chest over hips', 'Quiet toe-ball-heel landing'],
      commonFaults: ['Bent back knee', 'Dropping chest forward', 'Insufficient split under 90°'],
      prerequisites: ['Floor split stretches', 'Split leaps over mat']
    },
    videoTutorial: {
      videoId: 'f_6g8u4qX3o',
      title: 'How to Get Better Split Leaps | Drills for 180 and Height',
      channelName: 'Tamara Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=f_6g8u4qX3o',
      embedUrl: 'https://www.youtube.com/embed/f_6g8u4qX3o',
      thumbnail: 'https://i.ytimg.com/vi/f_6g8u4qX3o/hqdefault.jpg'
    }
  },
  {
    id: 'gap_slv_fx_05',
    name: '1/1 Full Turn on One Foot (Floor)',
    tier: 'SILVER',
    usagEquivalent: 'Level 3 / Xcel Silver',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-SLV-FX-05',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Preparation step into high relevé, complete 360° turn on single support leg with heel high off floor.',
    writtenTutorial: {
      steps: [
        'Step forward into preparation plie, arms curved in first position.',
        'Rise sharply onto high relevé on supporting foot, drawing free foot into passé at ankle or knee.',
        'Spot a fixed target on wall, whip head around 360° to lock landing spot.',
        'Finish with control on relevé before lowering heel gracefully.'
      ],
      keyCoachingCues: ['High relevé on big toe', 'Snap head around in spot', 'Squeeze glutes', 'Hold finish 1 second'],
      commonFaults: ['Dropping heel mid-rotation', 'Losing spot causing over/under-rotation', 'Wobbling on step-out'],
      prerequisites: ['1/2 turn on relevé', 'Passé balance on floor (10 sec)']
    },
    videoTutorial: {
      videoId: 'p3M9W_q2X0I',
      title: 'How to Do a Full Turn in Gymnastics & Dance | Form & Spotting',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=p3M9W_q2X0I',
      embedUrl: 'https://www.youtube.com/embed/p3M9W_q2X0I',
      thumbnail: 'https://i.ytimg.com/vi/p3M9W_q2X0I/hqdefault.jpg'
    }
  },

  // =========================================================================
  // GOLD LEVEL (USAG Level 4-5 / Xcel Gold)
  // Benchmark: Over-the-table vaulting, bar kips, beam walkovers/tucks, floor saltos
  // =========================================================================
  {
    id: 'gap_gld_vt_01',
    name: 'Front Handspring over Vault Table',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'VAULT',
    categoryName: 'Vault',
    elementCode: 'USAG-GLD-VT-01',
    difficulty: 'A',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'Full run, punch springboard, pre-flight onto vault table, shoulder repulsion into post-flight, and stuck feet landing.',
    writtenTutorial: {
      steps: [
        'Sprint with maximum velocity down the 60-foot runway without stuttering.',
        'Hurdle onto the springboard with arms driving backward to forward.',
        'Hit board and punch into a straight pre-flight body angle of ~40° to the table.',
        'Block explosively through shoulders on contact with the table and fly into stuck landing.'
      ],
      keyCoachingCues: ['Full sprint acceleration', 'Fast shoulder block off table', 'Stay completely hollow', 'Stick landing firmly'],
      commonFaults: ['Piking or arching on the table', 'Bending elbows during contact', 'Squatting on landing'],
      prerequisites: ['Silver Handstand flatback', 'Front handspring on floor']
    },
    videoTutorial: {
      videoId: '98_hG4vQ1aA',
      title: 'How to Do a Front Handspring Vault | Technique Breakdown',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=98_hG4vQ1aA',
      embedUrl: 'https://www.youtube.com/embed/98_hG4vQ1aA',
      thumbnail: 'https://i.ytimg.com/vi/98_hG4vQ1aA/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_vt_02',
    name: 'Half-On Vault Entry Drill (1/4 - 1/2 Twist Entry)',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'VAULT',
    categoryName: 'Vault',
    elementCode: 'USAG-GLD-VT-02',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Board punch with 1/4 to 1/2 twist onto vault table or mat stack, setting foundation for Tsukahara & Yurchenko family.',
    writtenTutorial: {
      steps: [
        'Hurdle onto springboard with rapid arm drive.',
        'Punch board and initiate 1/4 to 1/2 turn from hips and core during pre-flight.',
        'Place hands staggered/turned on table to repel off in sideways-to-backward alignment.',
        'Land on feet or back onto mat stack with body rigid.'
      ],
      keyCoachingCues: ['Twist from the core, not arms', 'Eyes spot hands on table', 'Explosive shoulder block', 'Tight hollow alignment'],
      commonFaults: ['Twisting too early before leaving board', 'Collapsing support arm', 'Over-rotating off side of mat'],
      prerequisites: ['Front handspring vault', 'Round-off onto mat stack']
    },
    videoTutorial: {
      videoId: 'X8qZ9mQ2s1L',
      title: 'Tsukahara & Half-On Vault Drills for Level 5 and Gold',
      channelName: 'Shift Movement Science',
      youtubeUrl: 'https://www.youtube.com/watch?v=X8qZ9mQ2s1L',
      embedUrl: 'https://www.youtube.com/embed/X8qZ9mQ2s1L',
      thumbnail: 'https://i.ytimg.com/vi/X8qZ9mQ2s1L/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_ub_01',
    name: 'Glide Kip on Low Bar',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-GLD-UB-01',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Full extension glide swing forward, toes-to-bar pull on backswing, shift wrists and shoot into front support.',
    writtenTutorial: {
      steps: [
        'Jump from mat into a long, powerful glide swing with legs straight and toes off floor.',
        'Extend fully at forward peak, opening chest and hips into hollow body.',
        'On backswing, pull toes rapidly to the bar while keeping arms straight.',
        'Slide shins up the bar, shift wrists aggressively over bar and press tall into front support.'
      ],
      keyCoachingCues: ['Big open glide at the front', 'Toes to bar fast on return', 'Shins slide the bar', 'Wrist shift on top!'],
      commonFaults: ['Piking on forward glide', 'Bending elbows when pulling toes up', 'Failing to roll wrists forward'],
      prerequisites: ['Silver glide swing', 'Toe-to-bar leg lifts (10 reps)', 'Front support press']
    },
    videoTutorial: {
      videoId: '13jU2p5fB9A',
      title: 'How to Do a Kip on Uneven Bars | The Ultimate Coaching Guide',
      channelName: 'Shift Movement Science',
      youtubeUrl: 'https://www.youtube.com/watch?v=13jU2p5fB9A',
      embedUrl: 'https://www.youtube.com/embed/13jU2p5fB9A',
      thumbnail: 'https://i.ytimg.com/vi/13jU2p5fB9A/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_ub_02',
    name: 'Cast to Horizontal (Min Above 0°)',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-GLD-UB-02',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'From front support, dip shoulders slightly and cast explosively to horizontal or higher with straight arms and locked body.',
    writtenTutorial: {
      steps: [
        'Start in high front support with straight arms and rounded hollow upper body.',
        'Load with a slight hip drop without bending elbows.',
        'Press downward with palms while driving heels and toes upward past horizontal.',
        'Hit horizontal line with toes pointed and return smoothly to bar.'
      ],
      keyCoachingCues: ['Push down hard through palms', 'Straight elbows never bend', 'Drive heels above horizontal', 'Keep core locked'],
      commonFaults: ['Casting below horizontal', 'Arched back casting', 'Bent arms'],
      prerequisites: ['Silver cast to 30°', 'Plank push-ups (15 reps)']
    },
    videoTutorial: {
      videoId: 'K6F9Q_vXw3I',
      title: 'How to Cast to Horizontal and Handstand | Bars Drills',
      channelName: 'Gymnast Care',
      youtubeUrl: 'https://www.youtube.com/watch?v=K6F9Q_vXw3I',
      embedUrl: 'https://www.youtube.com/embed/K6F9Q_vXw3I',
      thumbnail: 'https://i.ytimg.com/vi/K6F9Q_vXw3I/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_ub_03',
    name: 'Clear Hip Circle to Horizontal (Back Free Hip)',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-GLD-UB-03',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Cast, drop backward maintaining gap between hips and bar, rotate around bar and shoot clear of bar to horizontal.',
    writtenTutorial: {
      steps: [
        'Cast to horizontal, drop backward keeping straight arms pushing bar down.',
        'Do not let hips rest on the bar; maintain hollow curve 2-4 inches off bar.',
        'Rotate under bar and pull bar into hips momentarily, then push bar away.',
        'Shoot open to horizontal or above on rise with arms locked straight.'
      ],
      keyCoachingCues: ['Push bar away on drop', 'Keep arms locked straight', 'Open shoulders on the rise', 'Look at toes then spot bar'],
      commonFaults: ['Resting hips on bar (turning it into a back hip circle)', 'Bent arms', 'Dropping head back'],
      prerequisites: ['Cast to horizontal', 'Back hip circle mastery']
    },
    videoTutorial: {
      videoId: 'jVb6FjC0N2A',
      title: 'Clear Hip Circle on Uneven Bars | Level 4/5 Technique Drills',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=jVb6FjC0N2A',
      embedUrl: 'https://www.youtube.com/embed/jVb6FjC0N2A',
      thumbnail: 'https://i.ytimg.com/vi/jVb6FjC0N2A/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_ub_04',
    name: 'Squat-on / Pike-on to High Bar Jump',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-GLD-UB-04',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Cast from low bar, place feet between hands on low bar in squat or pike, stand and jump to catch high bar.',
    writtenTutorial: {
      steps: [
        'Cast from low bar, lift hips high above bar level with straight arms.',
        'Place balls of feet softly on the low bar between or outside hands.',
        'Stand up with chest rising and eyes spotting the high bar overhead.',
        'Jump forward and upward to catch high bar in solid overgrip with straight arms.'
      ],
      keyCoachingCues: ['Lift hips high on cast', 'Light feet on the bar', 'Spot high bar with eyes', 'Catch high bar with straight arms'],
      commonFaults: ['Feet slipping off low bar', 'Jumping before standing balanced', 'Bent arm catch on high bar'],
      prerequisites: ['Cast to horizontal', 'Floor squat-on drills']
    },
    videoTutorial: {
      videoId: 'N8qW_7j9x1L',
      title: 'Squat On and Jump to High Bar Tutorial | Uneven Bars',
      channelName: 'Head Over Heels Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=N8qW_7j9x1L',
      embedUrl: 'https://www.youtube.com/embed/N8qW_7j9x1L',
      thumbnail: 'https://i.ytimg.com/vi/N8qW_7j9x1L/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_ub_05',
    name: 'Tuck Flyaway Dismount from High Bar',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-GLD-UB-05',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Tap swing on high bar, drive toes upward on front swing, release bar into tucked backward somersault and stick landing.',
    writtenTutorial: {
      steps: [
        'Execute dynamic tap swings on high bar, creating high hollow-to-arch momentum.',
        'On front swing, drive toes upward past horizontal toward ceiling.',
        'Release the bar at 45° angle, pull knees tightly to chest in tucked somersault.',
        'Spot landing mat, open tuck and stick firmly with arms in salute.'
      ],
      keyCoachingCues: ['Kick toes to the ceiling', 'Release on the rise', 'Tuck tight around shins', 'Spot mat and open to stick'],
      commonFaults: ['Releasing too early (flying backward low)', 'Releasing too late (flying straight up into bar)', 'Loose tuck'],
      prerequisites: ['Tap swings on high bar', 'Back tuck on trampoline / floor']
    },
    videoTutorial: {
      videoId: 'aRz8gWqXo78',
      title: 'How to Do a Flyaway on Bars | Progressive Drills & Safety',
      channelName: 'Shift Movement Science',
      youtubeUrl: 'https://www.youtube.com/watch?v=aRz8gWqXo78',
      embedUrl: 'https://www.youtube.com/embed/aRz8gWqXo78',
      thumbnail: 'https://i.ytimg.com/vi/aRz8gWqXo78/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_bb_01',
    name: 'Back Walkover on Balance Beam',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-GLD-BB-01',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Lift lead leg, arch backward placing hands in line on beam, kick through 180° split and land in balanced lunge.',
    writtenTutorial: {
      steps: [
        'Stand tall on beam with lead leg extended front and arms by ears.',
        'Lift lead leg while arching backward through upper spine, eyes watching hands.',
        'Place hands thumb-to-thumb on center line of beam with open shoulders.',
        'Kick back foot up and through a full 180° split, stepping down softly in lunge.'
      ],
      keyCoachingCues: ['Lift leg before arching', 'Keep arms glued to ears', 'Hands thumb-to-thumb', 'Hold finish lunge solid'],
      commonFaults: ['Dropping hands off center line', 'Insufficient leg split under 120°', 'Wobbling on landing step-out'],
      prerequisites: ['Floor back walkover on line', 'Beam back walkover on low beam']
    },
    videoTutorial: {
      videoId: 'Y3eM_p8WJto',
      title: 'How to Do a Back Walkover on Beam | Balance & Alignment',
      channelName: 'Gymnastics HQ',
      youtubeUrl: 'https://www.youtube.com/watch?v=Y3eM_p8WJto',
      embedUrl: 'https://www.youtube.com/embed/Y3eM_p8WJto',
      thumbnail: 'https://i.ytimg.com/vi/Y3eM_p8WJto/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_bb_02',
    name: 'Back Handspring Step-out on Beam (Acro Prep)',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-GLD-BB-02',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Sit in beam chair, jump backward with flight onto hands, step-out one foot at a time into confident lunge.',
    writtenTutorial: {
      steps: [
        'Stand on beam with feet aligned, sit back as if into a chair with arms swinging.',
        'Jump backward aggressively, extending through hips and driving arms by ears.',
        'Place hands in line on beam, blocking through shoulders while splitting legs.',
        'Step lead foot down along center line followed by back foot into secure lunge.'
      ],
      keyCoachingCues: ['Sit back before jumping', 'Look for beam between hands', 'Snap lead foot down on line', 'Stand tall into lunge'],
      commonFaults: ['Jumping crooked off center', 'Short undercutting jump causing head crash', 'Bent arms on hand impact'],
      prerequisites: ['Floor back handspring step-out on line', 'Low beam back handspring with mats']
    },
    videoTutorial: {
      videoId: 'h_m52qQ-x3M',
      title: 'Back Handspring on Balance Beam Tutorial | Fear-Free Drills',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=h_m52qQ-x3M',
      embedUrl: 'https://www.youtube.com/embed/h_m52qQ-x3M',
      thumbnail: 'https://i.ytimg.com/vi/h_m52qQ-x3M/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_bb_03',
    name: 'Split Leap (120° Separation) on Beam',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-GLD-BB-03',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Running step or chassé into forward grand jeté on beam with minimum 120° split separation, sticking landing on line.',
    writtenTutorial: {
      steps: [
        'Step smoothly along beam with upright core and confident vision.',
        'Brush front foot forward aggressively while pushing through back ball of foot.',
        'Reach a minimum 120° split at peak height with torso vertical.',
        'Land on front foot in demi-plié along center line with trailing leg controlled.'
      ],
      keyCoachingCues: ['Brush foot along beam', 'Split evenly at apex', 'Chest tall and proud', 'Land softly on center line'],
      commonFaults: ['Leaning forward on take-off', 'Split less than 120°', 'Landing off center line of beam'],
      prerequisites: ['Silver split leap', 'Floor 180° splits']
    },
    videoTutorial: {
      videoId: 'f_6g8u4qX3o',
      title: 'Mastering Split Leaps on Beam | Height, Split & Consistency',
      channelName: 'Tamara Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=f_6g8u4qX3o',
      embedUrl: 'https://www.youtube.com/embed/f_6g8u4qX3o',
      thumbnail: 'https://i.ytimg.com/vi/f_6g8u4qX3o/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_bb_04',
    name: 'Full 1/1 Turn on One Foot on Beam',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-GLD-BB-04',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Single foot relevé turn completing 360° on beam with free leg in passé, finishing locked on beam line.',
    writtenTutorial: {
      steps: [
        'Step forward onto supporting foot in deep plie, setting arms in first position.',
        'Press into high relevé on ball of foot, snapping free foot into coupé or passé.',
        'Spot far end of beam, whip head 360° and lock gaze back onto the beam.',
        'Stop turn precisely on line with high relevé before lowering heel.'
      ],
      keyCoachingCues: ['Highest relevé possible', 'Spot the end of beam', 'Hold core hollow and tight', 'Freeze finish on line'],
      commonFaults: ['Dropping heel during turn', 'Incomplete rotation (under 360°)', 'Wobbling off side of beam on stop'],
      prerequisites: ['1/2 turn on beam', 'Full turn on floor beam']
    },
    videoTutorial: {
      videoId: 'p3M9W_q2X0I',
      title: 'Full Turn on Beam Tutorial | How to Stick Every Time',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=p3M9W_q2X0I',
      embedUrl: 'https://www.youtube.com/embed/p3M9W_q2X0I',
      thumbnail: 'https://i.ytimg.com/vi/p3M9W_q2X0I/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_bb_05',
    name: 'Front Tuck Dismount off Beam',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-GLD-BB-05',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Hurdle or step punch off end of beam into forward tucked somersault, opening to stick on landing mat.',
    writtenTutorial: {
      steps: [
        'Approach end of beam with confident step-hurdle punch off balls of feet.',
        'Drive arms and hips upward into a high forward somersault takeoff.',
        'Tuck knees tightly to chest with hands grabbing shins.',
        'Spot landing mat, open out of tuck and stick firmly in demi-plié.'
      ],
      keyCoachingCues: ['Punch off toes at end of beam', 'Jump UP before tucking', 'Grab shins tight', 'Spot mat and stick'],
      commonFaults: ['Diving forward instead of upward', 'Slow opening causing deep squat or fall', 'Stumbling forward on landing'],
      prerequisites: ['Front tuck on floor / trampoline', 'Round-off dismount off beam']
    },
    videoTutorial: {
      videoId: 'kP5wZ4L8_uM',
      title: 'How to Do a Front Tuck Dismount off Beam | Safe Progressions',
      channelName: 'Head Over Heels Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=kP5wZ4L8_uM',
      embedUrl: 'https://www.youtube.com/embed/kP5wZ4L8_uM',
      thumbnail: 'https://i.ytimg.com/vi/kP5wZ4L8_uM/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_fx_01',
    name: 'Round-off Back Handspring Back Tuck (Salto)',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-GLD-FX-01',
    difficulty: 'A',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'Speed approach into round-off, connected back handspring, rebound punch into high backward tucked salto with stuck landing.',
    writtenTutorial: {
      steps: [
        'Run with acceleration into a powerful round-off with aggressive snap down.',
        'Immediately rebound into a fast, long back handspring, keeping arms by ears.',
        'Punch both feet off floor through toes, driving chest and arms straight up into the air.',
        'Pull knees to chest in a tight tuck, rotate 360°, open body and stick the landing.'
      ],
      keyCoachingCues: ['Fast handspring into punch', 'Drive chest UP on takeoff', 'Tuck tight around shins', 'Spot floor and stick landing'],
      commonFaults: ['Throwing head back on takeoff', 'Slow back handspring robbing height', 'Under-rotating into hands-down landing'],
      prerequisites: ['Solid back handspring series', 'Standing back tuck on mat']
    },
    videoTutorial: {
      videoId: 'h8L2vQ5M9_4',
      title: 'Round-Off Back Handspring Back Tuck Gymnastics Tutorial',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=h8L2vQ5M9_4',
      embedUrl: 'https://www.youtube.com/embed/h8L2vQ5M9_4',
      thumbnail: 'https://i.ytimg.com/vi/h8L2vQ5M9_4/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_fx_02',
    name: 'Front Tuck (Punch Front Salto)',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-GLD-FX-02',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Short run into two-foot punch, soaring into high forward tucked somersault and landing upright with control.',
    writtenTutorial: {
      steps: [
        'Run 3-4 steps with forward acceleration into a low, fast hurdle.',
        'Punch both balls of feet simultaneously with arms lifting from hips past ears.',
        'Lift hips high over head while tucking knees firmly into chest.',
        'Spot floor on rotation, kick out of tuck and absorb landing with chest high.'
      ],
      keyCoachingCues: ['Punch hard off toes', 'Lift hips over shoulders', 'Tuck tight', 'Kick out before landing'],
      commonFaults: ['Diving forward with low hips', 'Cowboying knees wide', 'Landing in low squat'],
      prerequisites: ['Front handspring step-out', 'Trampoline punch front']
    },
    videoTutorial: {
      videoId: 'u7B8_p91X2m',
      title: 'How to Do a Punch Front (Front Tuck) | Floor Gymnastics',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=u7B8_p91X2m',
      embedUrl: 'https://www.youtube.com/embed/u7B8_p91X2m',
      thumbnail: 'https://i.ytimg.com/vi/u7B8_p91X2m/hqdefault.jpg'
    }
  },
  {
    id: 'gap_gld_fx_03',
    name: 'Switch Leap (120°+ Separation)',
    tier: 'GOLD',
    usagEquivalent: 'Level 4-5 / Xcel Gold',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-GLD-FX-03',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Swing lead leg forward to 45°, quickly scissor-switch legs in mid-air to reach minimum 120°-180° grand jeté split.',
    writtenTutorial: {
      steps: [
        'Take a step-chassé preparation with upright posture.',
        'Swing lead leg forward to approximately 45° with straight knee and pointed toe.',
        'Aggressively switch legs in mid-air, driving front leg back and back leg forward.',
        'Hit peak split of 120°+ before landing softly in demi-plié on front foot.'
      ],
      keyCoachingCues: ['Quick leg scissor in air', 'Chest stays upright and tall', 'Point both toes through switch', 'Land softly on front foot'],
      commonFaults: ['Swinging lead leg too high before switch', 'Dropping chest forward during split', 'Bent back leg on finish'],
      prerequisites: ['Silver split leap', 'Floor switch leap drills']
    },
    videoTutorial: {
      videoId: 'f_6g8u4qX3o',
      title: 'Switch Leap Tutorial | How to Get a 180 Degree Switch Leap',
      channelName: 'Tamara Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=f_6g8u4qX3o',
      embedUrl: 'https://www.youtube.com/embed/f_6g8u4qX3o',
      thumbnail: 'https://i.ytimg.com/vi/f_6g8u4qX3o/hqdefault.jpg'
    }
  },

  // =========================================================================
  // PLATINUM LEVEL (USAG Level 6-7 / Xcel Platinum)
  // Benchmark: Twisting vaults, cast to handstand, giant swings, beam flight, layout saltos
  // =========================================================================
  {
    id: 'gap_plt_vt_01',
    name: 'Front Handspring Half-Off Vault (1/2 Twist Off)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'VAULT',
    categoryName: 'Vault',
    elementCode: 'USAG-PLT-VT-01',
    difficulty: 'B',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'Front handspring repulsion off vault table with 180° twist during post-flight, landing facing the vault table.',
    writtenTutorial: {
      steps: [
        'Execute maximum speed run and punch springboard into strong pre-flight.',
        'Block aggressively off table through shoulders in straight body alignment.',
        'Initiate 1/2 twist from hips and core during post-flight after clearing table.',
        'Spot the vault table and stick landing facing back toward the apparatus.'
      ],
      keyCoachingCues: ['Block first, then twist', 'Keep arms close to body on twist', 'Spot vault table on landing', 'Stick with locked knees'],
      commonFaults: ['Twisting on the table before blocking', 'Piking hips during twist', 'Under-rotating into backwards step'],
      prerequisites: ['Gold front handspring vault', 'Trampoline front handspring 1/2 twist']
    },
    videoTutorial: {
      videoId: 'K3gM33g2W1I',
      title: 'Front Handspring Half Off Vault Breakdown & Post-Flight Drills',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=K3gM33g2W1I',
      embedUrl: 'https://www.youtube.com/embed/K3gM33g2W1I',
      thumbnail: 'https://i.ytimg.com/vi/K3gM33g2W1I/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_vt_02',
    name: 'Tsukahara Vault Entry Drill (1/4 - 1/2 Turn On)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'VAULT',
    categoryName: 'Vault',
    elementCode: 'USAG-PLT-VT-02',
    difficulty: 'C',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Punch board, 1/4 to 1/2 turn cartwheel entry onto vault table, repelling backwards into high post-flight landing on feet.',
    writtenTutorial: {
      steps: [
        'High-velocity run into aggressive springboard punch with arms driving up.',
        'Turn 1/4 to 1/2 onto the table, placing first and second hand in cartwheel/round-off line.',
        'Repel violently off the table through shoulders while snapping body straight.',
        'Soar backward through air into solid upright landing on resi-mat.'
      ],
      keyCoachingCues: ['Fast board entry', 'Square shoulders to table on contact', 'Violent repulsion block', 'Tight hollow backward flight'],
      commonFaults: ['Turning too late off the board', 'Collapsing shoulder on hand contact', 'Piking on post-flight'],
      prerequisites: ['Gold front handspring vault', 'Round-off onto vault table drills']
    },
    videoTutorial: {
      videoId: 'X8qZ9mQ2s1L',
      title: 'Tsukahara Vault Drills & Progressions | Platinum Gymnastics',
      channelName: 'Shift Movement Science',
      youtubeUrl: 'https://www.youtube.com/watch?v=X8qZ9mQ2s1L',
      embedUrl: 'https://www.youtube.com/embed/X8qZ9mQ2s1L',
      thumbnail: 'https://i.ytimg.com/vi/X8qZ9mQ2s1L/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_ub_01',
    name: 'Cast to Handstand (Vertical on Bars)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-PLT-UB-01',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'From front support, cast with straight arms directly into a vertical handstand (within 10° of vertical) with ribs tucked.',
    writtenTutorial: {
      steps: [
        'Start in high front support with straight arms and rounded upper back.',
        'Lower slightly into hollow load and press down vigorously through palms.',
        'Drive heels upward and open shoulders over hands into vertical handstand line.',
        'Lock ribs, squeeze glutes, and hold vertical momentarily before returning or circling.'
      ],
      keyCoachingCues: ['Push bar down aggressively', 'Open shoulders all the way', 'Heels drive straight to ceiling', 'Lock ribs flat'],
      commonFaults: ['Bent arms', 'Arching back (banana back) over vertical', 'Casting short below 45°'],
      prerequisites: ['Gold cast to horizontal', 'Floor handstand push-ups', 'Bar pirouette drills']
    },
    videoTutorial: {
      videoId: 'K6F9Q_vXw3I',
      title: 'How to Cast to Handstand on Uneven Bars | Pro Drills',
      channelName: 'Gymnast Care',
      youtubeUrl: 'https://www.youtube.com/watch?v=K6F9Q_vXw3I',
      embedUrl: 'https://www.youtube.com/embed/K6F9Q_vXw3I',
      thumbnail: 'https://i.ytimg.com/vi/K6F9Q_vXw3I/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_ub_02',
    name: 'Giant Circle (Back Giant on High Bar)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-PLT-UB-02',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Full 360° rotation around high bar with straight arms and extended body line, passing through handstand.',
    writtenTutorial: {
      steps: [
        'Cast to handstand on high bar, fall forward in long straight-body extension.',
        'Pass under bar maintaining straight arms and tap heels through bottom.',
        'On upswing, hollow chest and shift wrists over top of bar.',
        'Kick heels through vertical handstand at apex and continue or prepare dismount.'
      ],
      keyCoachingCues: ['Stay long and straight on drop', 'Tap through the bottom', 'Shift wrists on top', 'Hit handstand line at peak'],
      commonFaults: ['Bending arms at the bottom', 'Piking too early on upswing', 'Failing to shift wrists resulting in peel-off'],
      prerequisites: ['Cast to handstand', 'Strap bar giant swings', 'Clear hip circle']
    },
    videoTutorial: {
      videoId: '7Xg9t0Y6M24',
      title: 'How to Do a Giant Swing on Uneven Bars | Level 7 & Platinum',
      channelName: 'Shift Movement Science',
      youtubeUrl: 'https://www.youtube.com/watch?v=7Xg9t0Y6M24',
      embedUrl: 'https://www.youtube.com/embed/7Xg9t0Y6M24',
      thumbnail: 'https://i.ytimg.com/vi/7Xg9t0Y6M24/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_ub_03',
    name: 'Layout Flyaway Dismount from High Bar',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'BARS',
    categoryName: 'Uneven Bars',
    elementCode: 'USAG-PLT-UB-03',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'High tap swing on high bar, release into straight-body backward layout salto with zero knee bend and stick landing.',
    writtenTutorial: {
      steps: [
        'Build momentum with high tap swing from giant circle or long hang cast.',
        'At bottom of front swing, execute a sharp hollow tap driving heels upward.',
        'Release bar as toes reach 45° above horizontal, holding body completely straight.',
        'Spot the mat, absorb landing in solid stuck position with arms raised.'
      ],
      keyCoachingCues: ['Strong heel drive on front swing', 'Release at 45° angle', 'Keep body locked like a board', 'Spot mat to stick'],
      commonFaults: ['Piking or tucking knees (downgrade to tuck flyaway)', 'Releasing too early or late', 'Arching over on landing'],
      prerequisites: ['Gold tuck flyaway', 'Trampoline back layout']
    },
    videoTutorial: {
      videoId: '8hWq_y90L5g',
      title: 'Layout Flyaway on Bars Tutorial | Perfect Technique & Safety',
      channelName: 'Head Over Heels Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=8hWq_y90L5g',
      embedUrl: 'https://www.youtube.com/embed/8hWq_y90L5g',
      thumbnail: 'https://i.ytimg.com/vi/8hWq_y90L5g/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_bb_01',
    name: 'Back Handspring Step-out on Beam (Flight Acro)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-PLT-BB-01',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Sit back into beam flight jump backward, hands contacting center line with shoulder block, stepping out into confident lunge.',
    writtenTutorial: {
      steps: [
        'Stand in tall aligned posture on beam, sit hips back in controlled hinge.',
        'Drive through legs into backwards jump with arms sweeping past ears.',
        'Block through palms on beam line while opening legs in split step-out.',
        'Land first foot on center line, followed immediately by second foot in a locked lunge.'
      ],
      keyCoachingCues: ['Sit back before leaping', 'Spot hands onto beam line', 'Aggressive shoulder block', 'Hold finish lunge motionless'],
      commonFaults: ['Jumping crooked off beam', 'Bending elbows on hand contact', 'Flipping head back and missing line'],
      prerequisites: ['Gold back handspring prep', 'Floor back handspring on straight line']
    },
    videoTutorial: {
      videoId: 'h_m52qQ-x3M',
      title: 'Back Handspring Step-Out on Beam | Fear Breakdown & Drills',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=h_m52qQ-x3M',
      embedUrl: 'https://www.youtube.com/embed/h_m52qQ-x3M',
      thumbnail: 'https://i.ytimg.com/vi/h_m52qQ-x3M/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_bb_02',
    name: 'Aerial Cartwheel on Balance Beam',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-PLT-BB-02',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Forward lunge on beam, aggressive heel kick into no-handed cartwheel over beam, landing foot-foot in balanced lunge.',
    writtenTutorial: {
      steps: [
        'Take a confident step into deep lunge on beam with chest driving forward.',
        'Drive lead leg down into beam while kicking back leg with maximum velocity overhead.',
        'Keep chest up and arms pulled into body or crown, rotating without hand support.',
        'Spot beam center line on landing, stepping lead foot down followed by back foot.'
      ],
      keyCoachingCues: ['Deep lunge drive', 'Violent back leg kick', 'Keep chest aligned with beam', 'Spot the beam for landing'],
      commonFaults: ['Diving hands down toward beam in panic', 'Piking hips sideways', 'Landing crooked off center line'],
      prerequisites: ['Floor aerial cartwheel', 'Low beam aerial cartwheel with mats']
    },
    videoTutorial: {
      videoId: 'o2L8mZ-x0Qw',
      title: 'Aerial Cartwheel on Balance Beam Tutorial | Drills & Confidence',
      channelName: 'Whitney Bjerken',
      youtubeUrl: 'https://www.youtube.com/watch?v=o2L8mZ-x0Qw',
      embedUrl: 'https://www.youtube.com/embed/o2L8mZ-x0Qw',
      thumbnail: 'https://i.ytimg.com/vi/o2L8mZ-x0Qw/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_bb_03',
    name: 'Back Layout Dismount off Beam',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'BEAM',
    categoryName: 'Balance Beam',
    elementCode: 'USAG-PLT-BB-03',
    difficulty: 'A',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Round-off or punch off end of beam, soaring into straight-body back layout salto, sticking on landing mat.',
    writtenTutorial: {
      steps: [
        'Hurdle into round-off off end of beam, blocking through hands on the wood.',
        'Rebound backwards and upward with body held straight as an arrow.',
        'Rotate through 360° layout somersault with arms by ears or crossed on chest.',
        'Spot the landing mat, open chest and stick firmly in demi-plié.'
      ],
      keyCoachingCues: ['Explosive rebound off beam end', 'Straight body alignment (no tuck or pike)', 'Spot the mat and stick'],
      commonFaults: ['Piking or tucking knees mid-air', 'Under-rotating into back step', 'Rebounding crooked off beam'],
      prerequisites: ['Gold front tuck dismount', 'Round-off back layout on floor']
    },
    videoTutorial: {
      videoId: 'kP5wZ4L8_uM',
      title: 'Back Layout Beam Dismount Tutorial | Level 7 & Platinum',
      channelName: 'Head Over Heels Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=kP5wZ4L8_uM',
      embedUrl: 'https://www.youtube.com/embed/kP5wZ4L8_uM',
      thumbnail: 'https://i.ytimg.com/vi/kP5wZ4L8_uM/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_fx_01',
    name: 'Layout Salto (Floor Back Layout)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-PLT-FX-01',
    difficulty: 'B',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'Round-off back handspring into maximum height punch, soaring through completely straight backward somersault to stick.',
    writtenTutorial: {
      steps: [
        'Accelerate through a long hurdle into powerful round-off and back handspring.',
        'Punch both balls of feet, driving arms straight overhead into high backward trajectory.',
        'Maintain rigid hollow body line throughout entire 360° backward rotation.',
        'Spot the floor, extend through ankles and stick landing cleanly with no steps.'
      ],
      keyCoachingCues: ['Fast round-off BHS transition', 'Punch straight UP', 'Hold body straight like a pencil', 'Spot floor and stick'],
      commonFaults: ['Bending knees (turning it into a back tuck)', 'Piking at hips (piked layout)', 'Throwing head backward prematurely'],
      prerequisites: ['Gold back tuck on floor', 'Trampoline layout somersault']
    },
    videoTutorial: {
      videoId: 'w7G9q8m_2aU',
      title: 'How to Do a Back Layout on Floor | Gymnastics Tutorial',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=w7G9q8m_2aU',
      embedUrl: 'https://www.youtube.com/embed/w7G9q8m_2aU',
      thumbnail: 'https://i.ytimg.com/vi/w7G9q8m_2aU/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_fx_02',
    name: 'Back Layout 1/2 Twist (Floor)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-PLT-FX-02',
    difficulty: 'B',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'Punch into back layout salto, initiating a 180° twist at the peak of the jump, and landing facing backwards.',
    writtenTutorial: {
      steps: [
        'Execute powerful round-off back handspring into vertical punch.',
        'Rise into layout position with arms overhead.',
        'At apex of salto, wrap arms into chest and initiate 1/2 twist from hips.',
        'Spot landing facing backwards, absorb impact in demi-plié and stick.'
      ],
      keyCoachingCues: ['Flip first, then twist', 'Tight wrap across chest', 'Look over shoulder for spot', 'Land facing opposite direction'],
      commonFaults: ['Twisting off the floor before lifting', 'Piking hips during twist', 'Under-twisting landing sideways'],
      prerequisites: ['Back layout salto', 'Front layout salto']
    },
    videoTutorial: {
      videoId: '2pQ8x1vN6m4',
      title: 'Back Layout Half Twist Tutorial | Floor Gymnastics',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=2pQ8x1vN6m4',
      embedUrl: 'https://www.youtube.com/embed/2pQ8x1vN6m4',
      thumbnail: 'https://i.ytimg.com/vi/2pQ8x1vN6m4/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_fx_03',
    name: 'Front Layout Salto (Punch Front Layout)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-PLT-FX-03',
    difficulty: 'B',
    previousAppStatus: 'CAPTURED',
    currentResolution: 'COVERED',
    shortDescription: 'High forward punch into straight-body front salto, rotating 360° forward without knee bend, sticking landing.',
    writtenTutorial: {
      steps: [
        'Sprint forward into low, aggressive hurdle punch on balls of feet.',
        'Drive arms and chest upward into high forward trajectory.',
        'Maintain hollow body straight alignment as hips rotate forward over shoulders.',
        'Spot floor on final descent, open body and stick landing softly.'
      ],
      keyCoachingCues: ['Lift hips high over head', 'Keep legs glued together', 'Lock body straight', 'Stick landing with chest high'],
      commonFaults: ['Piking at hips', 'Diving forward low to mat', 'Over-rotating and taking forward step'],
      prerequisites: ['Gold punch front tuck', 'Front pike salto']
    },
    videoTutorial: {
      videoId: '98_hG4vQ1aA',
      title: 'Front Layout Salto Tutorial | Floor Gymnastics',
      channelName: 'Gymnastics Method',
      youtubeUrl: 'https://www.youtube.com/watch?v=98_hG4vQ1aA',
      embedUrl: 'https://www.youtube.com/embed/98_hG4vQ1aA',
      thumbnail: 'https://i.ytimg.com/vi/98_hG4vQ1aA/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_fx_04',
    name: 'Switch Leap to Tour Jeté Connection (Dance Series)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-PLT-FX-04',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Switch leap (180° split) connected seamlessly without extra steps into a 1/2-turning tour jeté split leap.',
    writtenTutorial: {
      steps: [
        'Perform switch leap with full 180° leg split and upright chest.',
        'Land on ball of front foot in plie and immediately step into tour jeté preparation.',
        'Jump and turn 180° in mid-air while switching legs into reverse grand jeté.',
        'Land softly in arabesque or fondue with expressive posture.'
      ],
      keyCoachingCues: ['Seamless rhythm between leaps', '180° split on both elements', 'Spot each landing', 'Maintain high artistic presentation'],
      commonFaults: ['Stutter step between leaps', 'Insufficient split angle under 180°', 'Losing balance on landing'],
      prerequisites: ['Gold switch leap', 'Tour jeté leap']
    },
    videoTutorial: {
      videoId: 'f_6g8u4qX3o',
      title: 'Switch Leap & Tour Jeté Dance Connections | Gymnastics Artistry',
      channelName: 'Tamara Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=f_6g8u4qX3o',
      embedUrl: 'https://www.youtube.com/embed/f_6g8u4qX3o',
      thumbnail: 'https://i.ytimg.com/vi/f_6g8u4qX3o/hqdefault.jpg'
    }
  },
  {
    id: 'gap_plt_fx_05',
    name: 'Double Turn (720° on One Foot on Floor)',
    tier: 'PLATINUM',
    usagEquivalent: 'Level 6-7 / Xcel Platinum',
    apparatus: 'FLOOR',
    categoryName: 'Floor Exercise',
    elementCode: 'USAG-PLT-FX-05',
    difficulty: 'B',
    previousAppStatus: 'IDENTIFIED_GAP',
    currentResolution: 'EXPANDED_WITH_VIDEO_AND_TUTORIAL',
    shortDescription: 'Two full rotations (720°) on the ball of a single foot in high relevé with free leg in passé, finishing with control.',
    writtenTutorial: {
      steps: [
        'Step forward into preparation lunge, arms centered in first position.',
        'Push sharply into high relevé on single support leg, snapping free leg to knee passé.',
        'Whip head around twice in rapid spotting action to complete 720° rotation.',
        'Lock hips and core, checking out cleanly on relevé before lowering heel.'
      ],
      keyCoachingCues: ['High relevé on big toe', 'Fast double spot with head', 'Squeeze core and inner thighs', 'Clean finish on relevé'],
      commonFaults: ['Dropping heel after first turn', 'Failing to spot causing dizziness/drifting', 'Under-rotating into uncontrolled fall'],
      prerequisites: ['Gold full turn (360°)', 'Passé balance on high relevé']
    },
    videoTutorial: {
      videoId: 'p3M9W_q2X0I',
      title: 'How to Do a Double Turn in Gymnastics & Dance | 720 Degree Turn',
      channelName: 'Precision Gymnastics',
      youtubeUrl: 'https://www.youtube.com/watch?v=p3M9W_q2X0I',
      embedUrl: 'https://www.youtube.com/embed/p3M9W_q2X0I',
      thumbnail: 'https://i.ytimg.com/vi/p3M9W_q2X0I/hqdefault.jpg'
    }
  }
];

export const SKILLS_TIER_SUMMARY = {
  totalSkillsReviewed: SKILLS_GAP_REVIEW_DATA.length,
  silverCount: SKILLS_GAP_REVIEW_DATA.filter((s) => s.tier === 'SILVER').length,
  goldCount: SKILLS_GAP_REVIEW_DATA.filter((s) => s.tier === 'GOLD').length,
  platinumCount: SKILLS_GAP_REVIEW_DATA.filter((s) => s.tier === 'PLATINUM').length,
  previouslyCapturedCount: SKILLS_GAP_REVIEW_DATA.filter((s) => s.previousAppStatus === 'CAPTURED').length,
  identifiedGapsCount: SKILLS_GAP_REVIEW_DATA.filter((s) => s.previousAppStatus === 'IDENTIFIED_GAP').length,
  resolvedCount: SKILLS_GAP_REVIEW_DATA.length
};
