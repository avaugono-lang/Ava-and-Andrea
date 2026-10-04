import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserProfile, 
  Skill, 
  Workout, 
  EventItem, 
  Product, 
  CartItem, 
  CommunityPost, 
  AchievementBadge, 
  USAGLevel, 
  SkillStatus, 
  ApparatusCategory, 
  YouTubeTutorial,
  UserRole,
  NavigationTab,
  RegisteredClub,
  RosterGymnast,
  CompetitionResult,
  CoachNote,
  PracticeFocusArea,
} from '../types';
import { 
  INITIAL_USER, 
  INITIAL_SKILLS, 
  WORKOUTS, 
  GYM_EVENTS, 
  PRODUCTS, 
  BADGES, 
  COMMUNITY_POSTS 
} from '../data/gymData';
import { 
  INITIAL_REGISTERED_CLUBS, 
  INITIAL_ROSTER_GYMNASTS 
} from '../data/gymManagementData';

interface XpToast {
  id: string;
  amount: number;
  message: string;
}

interface GymContextType {
  user: UserProfile;
  skills: Skill[];
  workouts: Workout[];
  events: EventItem[];
  products: Product[];
  cart: CartItem[];
  badges: AchievementBadge[];
  communityPosts: CommunityPost[];
  currentTab: NavigationTab;
  setCurrentTab: (tab: NavigationTab) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  activeXpToast: XpToast | null;
  celebrationBadge: AchievementBadge | null;
  dismissCelebration: () => void;
  
  // Auth actions
  loginUser: (email: string, name?: string, level?: USAGLevel, role?: UserRole) => void;
  registerUser: (name: string, phone: string, email: string, level: USAGLevel, clubName?: string, role?: UserRole) => void;
  logoutUser: () => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  changeUserLevel: (level: USAGLevel) => void;

  // Club & Gym Management Actions
  registeredClubs: RegisteredClub[];
  registerClub: (clubData: Omit<RegisteredClub, 'id' | 'isVerified' | 'verificationBadge' | 'registeredDate' | 'paymentReference'>) => RegisteredClub;
  rosterGymnasts: RosterGymnast[];
  addRosterGymnast: (gymnast: Partial<RosterGymnast> & { name: string; level: USAGLevel }) => void;
  addCompetitionResult: (gymnastId: string, result: Omit<CompetitionResult, 'id'>) => void;
  addCoachNote: (gymnastId: string, note: Omit<CoachNote, 'id' | 'date'>) => void;
  addPracticeFocus: (gymnastId: string, focus: Omit<PracticeFocusArea, 'id' | 'assignedDate'>) => void;
  updatePracticeFocusStatus: (gymnastId: string, focusId: string, status: PracticeFocusArea['status']) => void;
  reviewEvidenceSubmission: (gymnastId: string, submissionId: string, status: 'APPROVED' | 'NEEDS_WORK', coachFeedback: string) => void;

  // Skills actions
  submitSkillVideo: (skillId: string, videoFileName: string, videoUrl?: string) => void;
  verifySkill: (skillId: string, coachName?: string) => void;
  toggleSkillStatus: (skillId: string, status: SkillStatus) => void;
  updateSkillTutorial: (skillId: string, tutorial: YouTubeTutorial) => void;

  // Workout actions
  completeWorkout: (workoutId: string) => void;

  // Event actions
  toggleEventCalendar: (eventId: string) => void;
  downloadEventIcs: (event: EventItem) => void;

  // Shop & Cart actions
  addToCart: (product: Product, quantity?: number, selectedSize?: string, selectedColor?: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  // Community actions
  addCommunityPost: (title: string, description: string, apparatus: ApparatusCategory, videoFileName?: string) => void;
  reactToPost: (postId: string, reactionType: 'heart' | 'star' | 'clap' | 'fire') => void;
  addCommentToPost: (postId: string, commentText: string) => void;

  // XP & Gamification
  awardXp: (amount: number, reason: string) => void;
}

const GymContext = createContext<GymContextType | undefined>(undefined);

export const GymProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load saved state or default - ensure login page is shown first on initial launch
  const [user, setUser] = useState<UserProfile>(() => {
    const sessionAuthed = typeof window !== 'undefined' ? sessionStorage.getItem('gymtrack_session_authed') : null;
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_user') : null;
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          role: parsed.role || 'GYMNAST',
          isLoggedIn: sessionAuthed === 'true',
        };
      } catch {
        // fallback
      }
    }
    return { ...INITIAL_USER, role: 'GYMNAST', isLoggedIn: false };
  });

  const [userRole, setUserRoleState] = useState<UserRole>(() => {
    if (typeof window !== 'undefined') {
      const savedRole = localStorage.getItem('gymtrack_user_role') as UserRole;
      if (savedRole) return savedRole;
    }
    return user.role || 'GYMNAST';
  });

  const setUserRole = (role: UserRole) => {
    setUserRoleState(role);
    setUser((prev) => ({ ...prev, role }));
    if (typeof window !== 'undefined') {
      localStorage.setItem('gymtrack_user_role', role);
    }
  };

  const [skills, setSkills] = useState<Skill[]>(() => {
    const initialMap = new Map(INITIAL_SKILLS.map((s) => [s.id, s]));
    const savedV5 = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_skills_v5_aligned') : null;
    if (savedV5) {
      try {
        const parsed: Skill[] = JSON.parse(savedV5);
        // Strictly filter to skills defined in authentic INITIAL_SKILLS
        const validParsed = parsed.filter((s) => initialMap.has(s.id));
        const existingIds = new Set(validParsed.map((s) => s.id));
        const merged: Skill[] = validParsed.map((s) => {
          const init = initialMap.get(s.id)!;
          return {
            ...init,
            status: s.status || init.status,
            verifiedBy: s.verifiedBy || init.verifiedBy,
            verifiedNote: s.verifiedNote || init.verifiedNote,
            submittedVideoName: s.submittedVideoName || init.submittedVideoName,
            videoPreviewUrl: s.videoPreviewUrl || init.videoPreviewUrl,
          };
        });
        // Append newly added curriculum skills from INITIAL_SKILLS
        for (const initSkill of INITIAL_SKILLS) {
          if (!existingIds.has(initSkill.id)) {
            merged.push(initSkill);
          }
        }
        return merged;
      } catch {
        // fallback
      }
    }
    return INITIAL_SKILLS;
  });

  const [workouts, setWorkouts] = useState<Workout[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_workouts_v2') : null;
    return saved ? JSON.parse(saved) : WORKOUTS;
  });

  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_events_v2') : null;
    return saved ? JSON.parse(saved) : GYM_EVENTS;
  });

  const [products] = useState<Product[]>(PRODUCTS);

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_cart') : null;
    return saved ? JSON.parse(saved) : [];
  });

  const [badges, setBadges] = useState<AchievementBadge[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_badges') : null;
    return saved ? JSON.parse(saved) : BADGES;
  });

  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_community') : null;
    return saved ? JSON.parse(saved) : COMMUNITY_POSTS;
  });

  // Registered clubs state (persisted)
  const [registeredClubs, setRegisteredClubs] = useState<RegisteredClub[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_registered_clubs') : null;
    return saved ? JSON.parse(saved) : INITIAL_REGISTERED_CLUBS;
  });

  // Roster gymnasts state (persisted)
  const [rosterGymnasts, setRosterGymnasts] = useState<RosterGymnast[]>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gymtrack_roster_gymnasts') : null;
    return saved ? JSON.parse(saved) : INITIAL_ROSTER_GYMNASTS;
  });

  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const [activeXpToast, setActiveXpToast] = useState<XpToast | null>(null);
  const [celebrationBadge, setCelebrationBadge] = useState<AchievementBadge | null>(null);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('gymtrack_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('gymtrack_skills_v5_aligned', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem('gymtrack_workouts_v2', JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem('gymtrack_events_v2', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('gymtrack_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('gymtrack_badges', JSON.stringify(badges));
  }, [badges]);

  useEffect(() => {
    localStorage.setItem('gymtrack_community', JSON.stringify(communityPosts));
  }, [communityPosts]);

  useEffect(() => {
    localStorage.setItem('gymtrack_registered_clubs', JSON.stringify(registeredClubs));
  }, [registeredClubs]);

  useEffect(() => {
    localStorage.setItem('gymtrack_roster_gymnasts', JSON.stringify(rosterGymnasts));
  }, [rosterGymnasts]);

  // Award XP with visual toast and level progression check
  const awardXp = (amount: number, reason: string) => {
    setUser((prev) => {
      const newXp = prev.xp + amount;
      return {
        ...prev,
        xp: newXp,
      };
    });

    const toastId = Math.random().toString();
    setActiveXpToast({
      id: toastId,
      amount,
      message: reason,
    });

    setTimeout(() => {
      setActiveXpToast((current) => (current?.id === toastId ? null : current));
    }, 3500);
  };

  const dismissCelebration = () => {
    setCelebrationBadge(null);
  };

  // Auth functions
  const registerUser = (
    name: string, 
    phone: string, 
    email: string, 
    level: USAGLevel, 
    clubName?: string, 
    role: UserRole = 'GYMNAST'
  ) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('gymtrack_session_authed', 'true');
    }
    const finalClub = (clubName && clubName.trim()) ? clubName.trim() : 'Lagos Flyers Gymnastics Club';
    setUser({
      id: 'usr_' + Date.now(),
      fullName: name || 'Gymnast',
      phoneNumber: phone,
      email: email || 'gymnast@example.com',
      level,
      clubName: finalClub,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      xp: 2500,
      nextLevelXpGoal: 3500,
      dayStreak: 1,
      skillsMasteredCount: 0,
      isLoggedIn: true,
      role,
    });
    setUserRole(role);
    awardXp(100, `Welcome to ${finalClub}! Ready to train! ⭐`);
    setCurrentTab(role === 'COACH' || role === 'CLUB_ADMIN' ? 'dashboard' : 'home');
  };

  const loginUser = (email: string, name?: string, level?: USAGLevel, role?: UserRole) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('gymtrack_session_authed', 'true');
    }
    const activeRole = role || user.role || 'GYMNAST';
    setUser((prev) => ({
      ...prev,
      email: email || prev.email,
      fullName: name || prev.fullName,
      level: level || prev.level,
      role: activeRole,
      isLoggedIn: true,
    }));
    setUserRole(activeRole);
    awardXp(25, 'Daily Login Streak continued! ⭐');
    setCurrentTab(activeRole === 'COACH' || activeRole === 'CLUB_ADMIN' ? 'dashboard' : 'home');
  };

  const logoutUser = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('gymtrack_session_authed');
    }
    setUser((prev) => ({
      ...prev,
      isLoggedIn: false,
    }));
  };

  const updateUserProfile = (updates: Partial<UserProfile>) => {
    setUser((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const changeUserLevel = (level: USAGLevel) => {
    setUser((prev) => ({
      ...prev,
      level,
    }));
  };

  // Club & Gym Management implementation
  const registerClub = (
    clubData: Omit<RegisteredClub, 'id' | 'isVerified' | 'verificationBadge' | 'registeredDate' | 'paymentReference'>
  ): RegisteredClub => {
    const newClub: RegisteredClub = {
      ...clubData,
      id: 'reg_club_' + Date.now(),
      isVerified: true,
      verificationBadge: 'FIG / GFN Verified Club 2026',
      registeredDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      paymentReference: 'GT-PAY-' + Math.floor(100000 + Math.random() * 900000),
    };

    setRegisteredClubs((prev) => [newClub, ...prev]);
    awardXp(300, `🎉 ${newClub.name} officially registered and verified on GymTrack!`);
    
    // Auto-update user club and upgrade role to CLUB_ADMIN
    setUser((prev) => ({
      ...prev,
      clubName: newClub.name,
      role: 'CLUB_ADMIN',
    }));
    setUserRole('CLUB_ADMIN');
    return newClub;
  };

  const addRosterGymnast = (gymnast: Partial<RosterGymnast> & { name: string; level: USAGLevel }) => {
    const newGymnast: RosterGymnast = {
      id: 'gymnast_' + Date.now(),
      name: gymnast.name,
      level: gymnast.level,
      avatar: gymnast.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      age: gymnast.age || 13,
      clubName: gymnast.clubName || user.clubName || 'Lagos Flyers Gymnastics Club',
      eventsFocus: gymnast.eventsFocus || ['VAULT', 'FLOOR', 'BEAM', 'BARS'],
      completedSkillsCount: gymnast.completedSkillsCount || 12,
      totalSkillsCount: gymnast.totalSkillsCount || 20,
      personalBests: gymnast.personalBests || {
        vault: { score: 9.300, meet: 'Club Entry Baseline', date: '2026' },
        bars: { score: 9.100, meet: 'Club Entry Baseline', date: '2026' },
        beam: { score: 9.200, meet: 'Club Entry Baseline', date: '2026' },
        floor: { score: 9.400, meet: 'Club Entry Baseline', date: '2026' },
        allAround: { score: 37.000, meet: 'Club Entry Baseline', date: '2026' },
      },
      competitionHistory: gymnast.competitionHistory || [],
      coachNotes: gymnast.coachNotes || [
        {
          id: 'note_' + Date.now(),
          coachName: user.fullName || 'Head Coach',
          date: 'Just now',
          category: 'Form & Execution',
          text: 'Enrolled onto official competitive team roster.',
        },
      ],
      practiceAreas: gymnast.practiceAreas || [
        {
          id: 'focus_' + Date.now(),
          apparatus: 'VAULT',
          title: 'Landing Stick Freeze Drills',
          description: 'Focus on balance rebound and tight hollow body on dismount.',
          priority: 'HIGH',
          assignedDate: 'Today',
          status: 'IN_PROGRESS',
        },
      ],
      evidenceSubmissions: gymnast.evidenceSubmissions || [],
    };

    setRosterGymnasts((prev) => [newGymnast, ...prev]);
    awardXp(50, `Added ${newGymnast.name} to team roster! 🤸‍♀️`);
  };

  const addCompetitionResult = (gymnastId: string, result: Omit<CompetitionResult, 'id'>) => {
    const newResult: CompetitionResult = {
      ...result,
      id: 'comp_res_' + Date.now(),
    };

    setRosterGymnasts((prev) =>
      prev.map((g) => {
        if (g.id !== gymnastId) return g;
        const pb = { ...g.personalBests };
        if (newResult.vaultScore > pb.vault.score) pb.vault = { score: newResult.vaultScore, meet: newResult.meetName, date: newResult.date };
        if (newResult.barsScore > pb.bars.score) pb.bars = { score: newResult.barsScore, meet: newResult.meetName, date: newResult.date };
        if (newResult.beamScore > pb.beam.score) pb.beam = { score: newResult.beamScore, meet: newResult.meetName, date: newResult.date };
        if (newResult.floorScore > pb.floor.score) pb.floor = { score: newResult.floorScore, meet: newResult.meetName, date: newResult.date };
        if (newResult.allAroundScore > pb.allAround.score) pb.allAround = { score: newResult.allAroundScore, meet: newResult.meetName, date: newResult.date };

        return {
          ...g,
          personalBests: pb,
          competitionHistory: [newResult, ...g.competitionHistory],
        };
      })
    );
    awardXp(40, `Saved score record for ${result.meetName}! 🏆`);
  };

  const addCoachNote = (gymnastId: string, note: Omit<CoachNote, 'id' | 'date'>) => {
    const newNote: CoachNote = {
      ...note,
      id: 'note_' + Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    setRosterGymnasts((prev) =>
      prev.map((g) => {
        if (g.id !== gymnastId) return g;
        return {
          ...g,
          coachNotes: [newNote, ...g.coachNotes],
        };
      })
    );
    awardXp(25, `Performance note logged for gymnast! 📝`);
  };

  const addPracticeFocus = (gymnastId: string, focus: Omit<PracticeFocusArea, 'id' | 'assignedDate'>) => {
    const newFocus: PracticeFocusArea = {
      ...focus,
      id: 'focus_' + Date.now(),
      assignedDate: 'Today',
    };

    setRosterGymnasts((prev) =>
      prev.map((g) => {
        if (g.id !== gymnastId) return g;
        return {
          ...g,
          practiceAreas: [newFocus, ...g.practiceAreas],
        };
      })
    );
    awardXp(25, `Assigned practice drill to athlete! 🎯`);
  };

  const updatePracticeFocusStatus = (gymnastId: string, focusId: string, status: PracticeFocusArea['status']) => {
    setRosterGymnasts((prev) =>
      prev.map((g) => {
        if (g.id !== gymnastId) return g;
        return {
          ...g,
          practiceAreas: g.practiceAreas.map((f) => (f.id === focusId ? { ...f, status } : f)),
        };
      })
    );
  };

  const reviewEvidenceSubmission = (
    gymnastId: string, 
    submissionId: string, 
    status: 'APPROVED' | 'NEEDS_WORK', 
    coachFeedback: string
  ) => {
    setRosterGymnasts((prev) =>
      prev.map((g) => {
        if (g.id !== gymnastId) return g;
        const updatedSubmissions = g.evidenceSubmissions.map((s) => {
          if (s.id !== submissionId) return s;
          return {
            ...s,
            status,
            coachFeedback,
          };
        });
        const completedDelta = status === 'APPROVED' ? 1 : 0;
        return {
          ...g,
          completedSkillsCount: Math.min(g.totalSkillsCount, g.completedSkillsCount + completedDelta),
          evidenceSubmissions: updatedSubmissions,
        };
      })
    );
    awardXp(50, status === 'APPROVED' ? 'Skill verified & approved! (+XP to athlete)' : 'Feedback sent to gymnast');
  };

  // Skills actions
  const submitSkillVideo = (skillId: string, videoFileName: string, videoUrl?: string) => {
    setSkills((prev) =>
      prev.map((skill) => {
        if (skill.id === skillId) {
          return {
            ...skill,
            status: 'AWAITING_VERIFICATION',
            submittedVideoName: videoFileName,
            videoPreviewUrl: videoUrl || skill.videoPreviewUrl,
          };
        }
        return skill;
      })
    );

    // Also link into current user in roster
    setRosterGymnasts((prev) =>
      prev.map((g) => {
        if (g.name === user.fullName || g.id === 'gymnast_01') {
          const matchingSkill = skills.find((s) => s.id === skillId);
          return {
            ...g,
            evidenceSubmissions: [
              {
                id: 'sub_' + Date.now(),
                skillName: matchingSkill ? matchingSkill.name : 'Routine Skill',
                submittedDate: 'Just now',
                videoName: videoFileName,
                videoPreviewUrl: videoUrl,
                status: 'AWAITING_REVIEW',
                coachFeedback: 'Awaiting coach evaluation.',
              },
              ...g.evidenceSubmissions,
            ],
          };
        }
        return g;
      })
    );

    awardXp(50, 'Evidence submitted for coach verification! 🎥');
  };

  const verifySkill = (skillId: string, coachName: string = 'Coach Elena') => {
    setSkills((prev) =>
      prev.map((skill) => {
        if (skill.id === skillId) {
          return {
            ...skill,
            status: 'VERIFIED',
            verifiedBy: coachName,
            verifiedNote: 'Form checked, clean landing, certified USAG execution.',
          };
        }
        return skill;
      })
    );

    awardXp(100, `Skill approved by ${coachName}! Level XP +100! 🌟`);
  };

  const toggleSkillStatus = (skillId: string, status: SkillStatus) => {
    setSkills((prev) =>
      prev.map((skill) => {
        if (skill.id === skillId) {
          return {
            ...skill,
            status,
            verifiedBy: status === 'VERIFIED' ? 'Coach Elena' : undefined,
          };
        }
        return skill;
      })
    );
  };

  const updateSkillTutorial = (skillId: string, tutorial: YouTubeTutorial) => {
    setSkills((prev) =>
      prev.map((skill) => {
        if (skill.id === skillId) {
          return {
            ...skill,
            tutorial,
            tutorialStatus: 'FOUND',
          };
        }
        return skill;
      })
    );
  };

  // Workout actions
  const completeWorkout = (workoutId: string) => {
    const workout = workouts.find((w) => w.id === workoutId);
    if (!workout) return;

    setWorkouts((prev) =>
      prev.map((w) => (w.id === workoutId ? { ...w, completedToday: true } : w))
    );

    awardXp(workout.xpReward, `Completed ${workout.title}! 💪`);
  };

  // Event actions
  const toggleEventCalendar = (eventId: string) => {
    setEvents((prev) =>
      prev.map((event) => {
        if (event.id === eventId) {
          const nextState = !event.isAddedToCalendar;
          if (nextState) {
            awardXp(20, `Added ${event.name} to your competition calendar! 📅`);
          }
          return {
            ...event,
            isAddedToCalendar: nextState,
          };
        }
        return event;
      })
    );
  };

  const downloadEventIcs = (event: EventItem) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//GymTrack//Gymnastics Events//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.name}`,
      `DESCRIPTION:${event.shortDescription}\\nVenue: ${event.venue}\\nDiscipline: ${event.discipline}`,
      `LOCATION:${event.venue}, ${event.city}, ${event.country}`,
      `DTSTART;VALUE=DATE:${event.startDate.replace(/-/g, '')}`,
      `DTEND;VALUE=DATE:${event.endDate.replace(/-/g, '')}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.name.replace(/[^a-zA-Z0-9]/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    awardXp(15, `Downloaded calendar invite for ${event.name}! 📲`);
  };

  // Shop & Cart actions
  const addToCart = (product: Product, quantity: number = 1, selectedSize?: string, selectedColor?: string) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity, selectedSize, selectedColor }];
    });
    awardXp(10, `Added ${product.name} to Pro Shop bag! 🛍️`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Community actions
  const addCommunityPost = (
    title: string, 
    description: string, 
    apparatus: ApparatusCategory, 
    videoFileName?: string
  ) => {
    const newPost: CommunityPost = {
      id: 'post_' + Date.now(),
      authorName: user.fullName,
      authorLevel: user.level,
      authorClub: user.clubName,
      authorAvatar: user.avatar,
      title,
      description,
      apparatus,
      videoUrl: videoFileName
        ? 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        : 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      date: 'Just now',
      reactions: { heart: 1, star: 0, clap: 1, fire: 0 },
      userReactions: { heart: true },
      comments: [],
    };

    setCommunityPosts((prev) => [newPost, ...prev]);
    awardXp(75, 'Shared routine update with GymTrack community! 🌟');
  };

  const reactToPost = (postId: string, reactionType: 'heart' | 'star' | 'clap' | 'fire') => {
    setCommunityPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const hasReacted = post.userReactions[reactionType];
          const delta = hasReacted ? -1 : 1;

          return {
            ...post,
            reactions: {
              ...post.reactions,
              [reactionType]: Math.max(0, post.reactions[reactionType] + delta),
            },
            userReactions: {
              ...post.userReactions,
              [reactionType]: !hasReacted,
            },
          };
        }
        return post;
      })
    );
  };

  const addCommentToPost = (postId: string, commentText: string) => {
    if (!commentText.trim()) return;

    setCommunityPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const newComment = {
            id: 'cmt_' + Date.now(),
            author: user.fullName,
            avatar: user.avatar,
            level: user.level,
            text: commentText.trim(),
            timeAgo: 'Just now',
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      })
    );
    awardXp(15, 'Commented on fellow gymnast routine! 💬');
  };

  return (
    <GymContext.Provider
      value={{
        user,
        skills,
        workouts,
        events,
        products,
        cart,
        badges,
        communityPosts,
        currentTab,
        setCurrentTab,
        userRole,
        setUserRole,
        registeredClubs,
        registerClub,
        rosterGymnasts,
        addRosterGymnast,
        addCompetitionResult,
        addCoachNote,
        addPracticeFocus,
        updatePracticeFocusStatus,
        reviewEvidenceSubmission,
        activeXpToast,
        celebrationBadge,
        dismissCelebration,
        loginUser,
        registerUser,
        logoutUser,
        updateUserProfile,
        changeUserLevel,
        submitSkillVideo,
        verifySkill,
        toggleSkillStatus,
        updateSkillTutorial,
        completeWorkout,
        toggleEventCalendar,
        downloadEventIcs,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        addCommunityPost,
        reactToPost,
        addCommentToPost,
        awardXp,
      }}
    >
      {children}
    </GymContext.Provider>
  );
};

export const useGym = () => {
  const context = useContext(GymContext);
  if (!context) {
    throw new Error('useGym must be used within a GymProvider');
  }
  return context;
};
