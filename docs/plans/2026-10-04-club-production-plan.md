# GymTrack club product plan

**Goal:** Take GymTrack from the current browser demo to a product a gymnastics club will pay for, with a web app for the office and iOS and Android apps for gymnasts, parents, and coaches.

**Buyer:** ₦1,000 per student per month, paid at signup. The club can pay for its students, or a student can pay for themselves.

**Repo today:** `avaugono-lang/Ava-and-Andrea`, public, write access for `uvieugono`. Local checkout: `C:\Users\pc\src\Ava-and-Andrea`. This file is the plan. It is not an implementation.

**Rough duration:** 5 to 6 months for one or two full-stack engineers, plus store review and a 4-week pilot. Mobile is on the critical path to completion, not an extra at the end.

---

## Decisions this plan uses

1. **First market is Nigerian clubs.** The seed data is already Lagos and Abuja clubs, naira, and `+234` phones. Clubs pay by bank transfer in NGN. Privacy duties follow the Nigeria Data Protection Act. A US launch (Stripe, COPPA, USA Gymnastics trademark care) is a later market, not this release.
2. **GymTrack is its own SolyntaFlow company, and club payments land in its Spend Management wallet.** SolyntaFlow has one Spend Management wallet per company (`CompanyWallet` on a tenant). A marketplace vendor account is a different wallet and is not used. Create a GymTrack tenant, then provision its wallet and NUBAN with `setup_company_nuban`. Inbound transfers to that NUBAN credit `CompanyWallet.balance` after the ₦200 inbound fee. The Solynta Academy Flutterwave business is not used, and Academy fee income is not credited.
3. **The mother operates the Spend Management wallet.** She is the only SolyntaFlow user who can approve a payout, and the payout goes to a bank account she controls. The children do not get a login that can move money, and they do not enroll as the Apple or Google seller. The father still opens those store accounts, because the sellers must be adults. The wallet’s Anchor account is created under the existing SolyntaFlow Anchor customer. The Spend Management page has no Withdraw button. A payout leaves only after her approval, and only if the shared Anchor float can cover it. A balance on the wallet screen is not a separate pile of cash.
4. **One gymnastics club is one GymTrack tenant.** A coach at Tony International never sees Lagos Flyers’ athletes, videos, or notes. This is separate from the SolyntaFlow company called GymTrack.
5. **A student is signed up in one of two ways, and payment is part of that signup.** The club can register the student and allocate them to that club, or the student can register directly and start with no club. Either way the signup collects the first ₦1,000 before the account can be used. A student who already paid does not pay again when a club later allocates them. Before that child can upload a skill video or an Inspo video, the account asks for a parent’s email and the parent must accept. Browsing events, clubs, and Inspo does not require an account.
6. **Web and phone share one API.** The web app is the club-admin console (roster, billing, exports, setup). The iOS and Android apps are one Expo (React Native) codebase, not two native rewrites and not a WebView of the current site.
7. **The phone apps cover the gym-floor jobs and the public pages:** sign in, today’s session, skills, record a skill video, see progress, coach attendance, parent view of linked children, Find an Event, Find a Club, Inspo, and a push when a coach approves or returns a video.
8. **The existing screens and skill list are the head start.** Auth, payments, roster truth, and video storage are rebuilt. The shop, YouTube page scraping, client-side role switching, and the unused Gemini package stay out of the first paid version. Find an Event, Find a Club, and Inspo ship in the first version.
9. **Curriculum is a training aid owned and reviewed by us.** Marketing does not say “official USAG” or “FIG verified.” The current “FIG / GFN Verified” badge and invented payment references are removed.
10. **The GitHub repo is made private** before any real athlete, parent, or payment data exists. It is public today.

The subscription is **₦1,000 per active student per month**. The first month is paid during signup, not invoiced afterwards. A club that signs up 40 students pays ₦40,000 before those 40 can train. The ₦75,000 figure in `src/data/gymManagementData.ts` is a sample club’s fee to families. It is not our price.

An active student is a paid roster profile that is not archived. Each later month is another ₦1,000 for that student. When a student’s month has not been paid, that student can still read their old progress. They cannot mark attendance or upload video until the next ₦1,000 lands.

### How a signup payment moves

The signup screen shows GymTrack’s Spend Management account number, the amount, and a reference. SolyntaFlow credits the company wallet and writes a funding transaction for the gross amount. GymTrack matches that reference once. The account or the roster place stays pending until the match. A replay of the same transfer does not create a second month.

- **Club path.** The club enters each student and pays ₦1,000 times the number of students in that batch, in one transfer. When it matches, those students are allocated to that club and can sign in.
- **Student path.** The student enters their own details and pays ₦1,000. When it matches, they can sign in. They are not on a club roster until a club allocates them.

The wallet does not know about gymnasts. GymTrack does.

A payout is a Spend Request from that wallet to the mother’s bank account. It needs her approval. If the shared Anchor float is short, the wallet can show a balance that cannot be sent until the float is topped up. That is the same rule Academy already hits.

---

## Where the code is now

GymTrack is a React 19, Vite, and Tailwind phone-shaped site. Express on port 3000 serves the site and a YouTube search API (`server.ts`). The package name is still `react-example`. There is no README, no test suite, and no database.

`src/context/GymContext.tsx` holds the whole product and writes it to `localStorage`. Closing the tab clears the session flag. The data remains on that one browser.

`src/screens/AuthScreen.tsx` requires a password and then ignores it. `loginUser` in `GymContext` accepts any email. The header lets anyone flip between gymnast, coach, and club admin.

What is worth keeping:

- Types in `src/types.ts`: levels 1–10, vault / bars / beam / floor, skill status, roster, scores, coach notes, practice focus, evidence.
- Skill content in `src/data/gymfestSkillsData.ts` (about 25), `gymfestAdvancedSkillsData.ts` (about 45), `usagGapSkillsData.ts` (about 59), merged in `src/data/gymData.ts`, plus the review rows in `skillsReviewData.ts`. Copies also sit in `public/` as CSV, JSON, and HTML.
- Screen map in `src/App.tsx` and `src/components/BottomNav.tsx`: home, skills, meets, clubs, progress, coach dashboard, community, shop, profile.
- Coach dashboard behavior in `src/screens/GymDashboardScreen.tsx`: search the roster, add a gymnast, scores, notes, practice focus, approve or return evidence.
- The pink and yellow visual language.

What a paying club cannot use:

- Login, roles, club signup, and checkout are local pretence. `registerClub` marks the club verified and invents a `GT-PAY-…` reference.
- Skill videos are file names and preview URLs in the browser, not stored files.
- There is no attendance, no parent account, and no subscription.
- `@google/genai` is installed. `metadata.json` claims a Gemini capability. Nothing calls it.
- YouTube search scrapes a results page and accepts an API key from the browser (`x-youtube-api-key` in `src/services/youtubeService.ts`).

---

## Target product

A student can register on their own, or a club can register them and allocate them to that club. Neither signup finishes until the first ₦1,000 matches a transfer. A head coach then invites coaches and sets up groups. A parent is linked before that child uploads a skill video or an Inspo video. Parents and gymnasts install the iOS or Android app. Coaches on the floor use the same app to take attendance and review videos. The office uses the web app for billing, exports, and setup. Visitors who are not logged in can open Find an Event, Find a Club, and Inspo.

A skill moves through the statuses already in the code: not completed, in progress, awaiting verification, verified. Verification stores the coach’s name. The gymnast and the linked parent can see it. Another club cannot.

### Web app, first paid version

- Club owner signup, login, logout, password reset
- Kid and adult registration, login, logout, password reset
- Pending signups and this month’s ₦1,000 per student, each tied to a transfer reference
- Coach invites
- Roster, groups, archive a gymnast
- Attendance history and a CSV export
- Review evidence that was uploaded from the phone
- Coach notes, practice focus, meet scores
- Privacy tools: export a gymnast’s data, delete a gymnast, delete the club
- Find an Event, Find a Club, and Inspo, open to visitors
- The shop is removed from the nav

### iOS and Android, first paid version

One Expo app, two store listings.

- Register or sign in with email and password, or open an invite link
- Gymnast home: level, streak, next session, skills waiting on the coach
- Skills for the gymnast’s level and apparatus, with the written cues already in the data files
- Play a curated tutorial, then record or pick a video and upload it
- Progress: verified skills and recent coach notes
- Coach mode: today’s groups, mark present / absent / excused, open the evidence queue
- Parent mode: switch between linked children, read-only progress, no roster of the rest of the club
- Push notification when evidence is approved or returned, and a reminder before a session the gymnast is enrolled in
- Find an Event, Find a Club, and Inspo
- Profile, log out, change password, delete account (Apple requires this in the app)
- Works on a current iPhone and on Android 8 and newer

Left out of the phone apps until after the first paying clubs: the shop, paying the club bill from the child’s phone, curriculum editing, and any chatbot.

### Find an Event

A public, searchable directory of gymnastics events. The seed is `GYM_EVENTS` in `src/data/gymData.ts`. Search covers name, city, country, and date. Nigeria events are activities a gymnast can go to. International events are ones they can watch online, and each of those shows the stream or broadcast link. **Gymfest 3.0** (`ev_gymfest_3`, 14–15 November 2026, Lagos) stays pinned at the top of the first page, above the search results. Filters do not push it off that first screen.

### Find a Club

A public directory. A visitor shares a location or types a city and sees clubs near that place, nearest first. The seed is `INITIAL_REGISTERED_CLUBS` in `src/data/gymManagementData.ts` (Lagos and Abuja). Clubs that finish signup appear here too. Browsing does not require an account. Joining a club does.

### Inspo

A scrolling feed of gymnastics videos uploaded by gymnasts. Visitors can watch a public video. A signed-in gymnast posts. If that gymnast is under 18, the parent must already have accepted before the video can be published. Coach skill videos and Inspo videos are separate. Posting to Inspo does not submit the clip for coach verification.

Each post shows the video, the gymnast’s name or username, their club, a caption, and the age or level only when that gymnast turned those on. Age and level are off unless the gymnast opts in. Under the video: Like, Comment, Share, and Save.

A **+ Upload Video** button stays on the page. The gymnast can:

- Record a clip or upload one from the phone
- Pick the skill and a category. Example: skill Back handspring, level Intermediate, club Solynta Gymnastics Club
- Tag their club
- Add hashtags
- Choose who can see it: everyone, followers, or my club

Browse filters, in this order: All, Floor, Vault, Bars, Beam, Tumbling, Flexibility, Strength, Skills, Training, Competitions, Challenges, Progress. All is the latest public videos. The other filters keep that same order inside one category.

- **Like.** Any signed-in user can like a video they are allowed to see.
- **Comment.** Comments are for encouragement. The box says so. There is no private message thread. A reported comment is hidden until it is reviewed.
- **Share.** A public video can be shared inside GymTrack or by an outside link. A followers-only or club-only video can be shared only with people who are allowed to see it.
- **Save.** The video goes into that user’s Saved Inspo list.
- **Follow.** A user can follow a gymnast or a club. The feed leads with new videos from accounts they follow.

Notifications, on the phone and in the app:

- Someone liked your video
- Someone commented
- Someone followed you
- Someone replied to your comment
- Someone you follow uploaded a video

Roster notes, attendance, and coach evidence stay inside the club. They do not appear on Inspo. A person can block another user. A blocked user’s videos disappear from their feed.

---

## Architecture

```
apps/web          current Vite React app, moved here, talks only to the API
apps/mobile       Expo app for iOS and Android
packages/shared   types, API client, skill-status labels
server            HTTP API, auth, tenancy, billing webhooks
```

Postgres holds the records. Object storage holds evidence videos. The API never puts video bytes in the database. The phone asks for a signed upload URL, uploads the file, then tells the API the upload finished.

**Auth, both clients.** Passwords are hashed (Argon2id or bcrypt). The web app uses an httpOnly session cookie. The phone apps use a short access token in memory and a refresh token in the iOS Keychain or Android Keystore (`expo-secure-store`). The same user row serves both. A gymnast session cannot call coach routes. A parent session can only open children linked to that parent.

**Tenancy.** Every club-owned row has `club_id`. The API sets the club from the membership on the session, not from a client-supplied id. Tests create two clubs and prove a token from club A gets 404 on club B’s gymnast, video, and note.

**Video.** Private bucket, club prefix, content type allow-list (`video/mp4`, `video/quicktime`), max size 200 MB, signed URL that expires in minutes. The web dashboard and the phone play through a short-lived read URL.

**Push.** The phone registers a device token. The API sends through FCM (Android and Expo) and APNs (iOS). The server stores the token against the user and deletes it on logout.

**Tutorials.** Ship the video ids already written in the skill data files. Open them in an in-app player where the YouTube terms allow, or hand off to the YouTube app. Delete the HTML scrape in `server.ts` and the custom key field on the skills screen.

**Hosting.** One API service, managed Postgres, object storage, daily backups. The AI Studio notes in `.env.example` (`APP_URL`, `GEMINI_API_KEY`) are not the production design. Gemini stays unused.

**Repo layout change** happens in phase 1, before features pile onto `server.ts` and `GymContext.tsx`. `npm run clean` is switched off `rm` so it runs on Windows.

---

## Data model

Global, not owned by a club:

- `users` (email, password hash, name, phone, date of birth optional)
- `skills` (imported once from the current TypeScript curriculum: id, name, level, apparatus, cues, curated video id)
- `plans`

Owned by a club:

- `clubs`, `memberships` (user, club, role: `CLUB_ADMIN` | `COACH` | `GYMNAST` | `PARENT`)
- `gymnast_profiles` (membership, level, date of birth, archived flag, group ids)
- `parent_links` (parent membership, gymnast profile)
- `groups` (name, schedule)
- `sessions` and `attendance_marks` (present, absent, excused)
- `skill_progress` (gymnast, skill, status, verified_by, verified_at)
- `evidence` (storage key, status, coach feedback)
- `coach_notes`, `practice_focus`, `meet_results`
- `subscriptions` (student, payer is the club or the student, status pending or active, period end, SolyntaFlow funding reference, club allocation)
- `device_tokens`
- `audit_log` (who viewed or changed a child’s video, note, or profile)

Inspo, visible according to the post’s audience rather than by club admin rights:

- `inspo_posts` (author, video storage key, caption, skill, category, club tag, hashtags, visibility, show_age, show_level)
- `inspo_likes`, `inspo_comments`, `inspo_saves`
- `follows` (follower, and either a user or a club)
- `notifications` (recipient, kind, post or user it points at, read flag)

---

## Phase 0 — Lock the sale and open the store accounts

About one week. Little or no product code.

- Make the GitHub repository private.
- Write down the buyer, the Nigeria-first market, the four roles, kid self-registration, and ₦1,000 per student. Get the owner’s yes.
- Have someone who knows the source check the Gymfest and USAG wording and the embedded YouTube clips. If a passage or video is not ours to ship, drop it before import. Linking out is safer than embedding when the right is unclear.
- Draft terms of service, a privacy notice, and a data-processing page the club can sign. Name the purpose: running the club’s training records. Name retention: videos and notes stay until the club or the parent deletes them, or 24 months after the gymnast is archived, whichever comes first.
- The father opens the Apple Developer membership and the Google Play Console account. The children do not enroll. Budget the Apple annual fee and the Play one-time fee. Both reviews need a real privacy policy URL. The seller name is the father’s legal name, or a CAC business name he owns, not the children’s names and not Solynta Academy.
- Create the GymTrack company on SolyntaFlow and provision its Spend Management wallet and NUBAN. The mother is the only user who can approve a payout. Do not create a marketplace vendor NUBAN for GymTrack. Do not point clubs at the Academy Flutterwave account.
- Decide the public app name (GymTrack, unless the owner picks another) and reserve it on both stores. The repo can stay `Ava-and-Andrea`.
- Talk to three clubs. Confirm they will pay ₦1,000 per student for roster, attendance, skill video, and a parent view. Confirm who at the club is the adult signer.

**Done when:** the owner has accepted this document’s decisions, the repo is private, both store accounts exist, and the curriculum pass has a keep-or-drop list.

---

## Phase 1 — Accounts, clubs, and an API the phone can call

About three weeks.

Build the database, migrations, and the server structure above. Replace pretend login.

Web:

- `AuthScreen` posts to `POST /api/auth/register-club` and `POST /api/auth/login`. The password is checked. A wrong password returns 401 and does not fall through to Amara Okafor.
- `POST /api/auth/logout`, `POST /api/auth/request-password-reset`, `POST /api/auth/reset-password`.
- Remove the role switcher from `src/components/Header.tsx`. The role comes from `memberships`.
- `GymContext` loads the signed-in user from the API. It stops being the source of truth for the user and the club.

API rules the mobile app will rely on from day one:

- JSON errors with a stable `code`
- Access token and refresh token endpoints, as well as the web cookie
- `GET /api/me` returns the user, the club, and the role
- Rate limit on login
- Request bodies limited in size. Video does not travel through `express.json()`

Tests: register, login failure, reset, and the two-club isolation test on a sample gymnast route. Typecheck in CI (`npm run lint` is already `tsc --noEmit`). Add a test runner (Vitest) and run it in CI.

**Done when:** two test clubs cannot read each other, a wrong password is rejected, and a script can log in with a token the way the phone will.

---

## Phase 2 — The club work that makes the subscription true

About three weeks. Web first, API shaped so phase 4 does not invent new resources.

- Invite a coach by email. Invite expires in 7 days.
- A student signup is pending until its ₦1,000 matches. The club path allocates the student to that club at the same moment. The student path does not. Date of birth is required. A parent email is required only before `POST /api/evidence`. The parent invite must be accepted before that upload succeeds.
- Groups and a weekly schedule.
- Attendance: create a session for a group and date, mark each gymnast, correct a mark, list history.
- Persist coach notes, practice focus, and meet scores that the dashboard already collects.
- Parent `GET /api/children` returns only linked gymnasts.

The coach dashboard screens stay. They call the API instead of `addRosterGymnast` writing React state only.

**Done when:** a head coach can add a group, take attendance for a paid student, and see it after a fresh login on another browser. An unpaid signup cannot sign in. A parent token cannot open an unlinked gymnast.

---

## Public pages — Events, clubs, and Inspo

About four weeks. Starts once registration exists. The web pages and the phone screens use the same API. Inspo video uses the same private bucket as skill evidence, with a separate post record.

- **Find an Event.** Load `GYM_EVENTS`. Search by name, city, country, and date. Split Nigeria events (go there) from international events (watch online, with the broadcast link). Pin Gymfest 3.0 at the top of the first page.
- **Find a Club.** Load registered clubs. Ask for a city or a device location and sort by distance. A visitor can open a club page without an account.
- **Inspo.** Build the feed, filters, upload, like, comment, share, save, follow, and the five notifications described under Target product. An under-18 publish waits on the parent accept. A club-only video returns 404 to a user outside that club.

**Done when:** a logged-out visitor can find Gymfest 3.0 first, find a Lagos club from a Lagos location, and watch a public Inspo video. A signed-in gymnast can record a Back handspring clip, tag Solynta Gymnastics Club, file it under Floor, and see it in Saved Inspo after they tap Save. A follower gets an upload notification. A second club’s gymnast cannot open a video set to My club.

---

## Phase 3 — Skills and evidence

About three weeks.

- One-off import script reads the deduped list from `src/data/gymData.ts` and inserts `skills`. Record the source file and the keep-or-drop list from phase 0 on each row.
- Gymnast skill list filtered by level and apparatus, using the statuses in `src/types.ts`.
- Upload flow: `POST /api/evidence/upload-url`, client uploads, `POST /api/evidence/:id/complete`. Coach `POST /api/evidence/:id/review` with approved or needs-work, plus a note. That updates `skill_progress`.
- Progress screen reads those rows.
- Remove `searchYouTubeViaOembed` and the batch scrape path from `server.ts`. Tutorials come from the imported video ids.
- Audit every evidence view and review.

**Done when:** a skill can go from not completed to verified with a file that still plays after reload, and the other club’s token cannot fetch the read URL.

---

## Phase 4 — iOS and Android apps

About six to eight weeks. Start the app shell in the last week of phase 1 so navigation and sign-in exist. Camera, attendance, and push land after phases 2 and 3 have APIs. Store submission is phase 6, after billing and the privacy pages exist. Building the apps is this phase. Being listed and sellable is phase 6.

### One codebase

`apps/mobile` is an Expo app managed with EAS Build.

- TypeScript, Expo Router, NativeWind so the GymTrack pink and yellow can be matched without copying the web CSS
- `packages/shared` holds the API client both apps use
- iOS bundle id and Android application id reserved in phase 0
- Environments: development, preview (internal testers), production
- No WebView of `apps/web` as the shipping UI. The office screens are a poor phone experience, and a wrapper fails store review more easily on camera, login, and account deletion

### Screens

Match the phone list in “Target product.” Tab bar for the gymnast: Home, Skills, Progress, Profile. Events, Clubs, and Inspo are in the same app. A coach sees Attendance and Review in place of the gymnast home. A parent sees Children, then the same progress view.

Build these as new screens. Do not port `GymDashboardScreen.tsx` (about 76 KB) or `SkillsScreen.tsx` (about 56 KB) line for line. Use their behavior as the spec: filters, evidence states, notes, practice focus.

### Device behavior

- Camera and library: record in the app, or pick an existing clip, compress on device before upload, show a progress bar, retry a failed upload
- Permission text that says why: “GymTrack uses the camera so you can film a skill for your coach.”
- Secure token storage, logout clears it
- Push: permission prompt after the first successful login, not on the first cold open. Tapping a review notification opens that skill
- Invite links: `gymtrack://invite/…` and a universal link / app link on the production domain
- Offline: the attendance mark queue stores on the phone and sends when the network returns. Skill video upload waits for a connection and says so. No other offline mode in v1
- Account deletion in Profile calls `DELETE /api/me` and confirms in the UI. Apple rejects apps that hide this
- A demo coach and a demo gymnast, documented for store reviewers, on a demo club with no real children

### Kids and store rules, built in this phase

Gymnasts are often children. Even for a Nigeria-first launch, App Store and Play review the binary they receive.

- Do not let the app create a child account by itself
- No ads, no third-party analytics that profile children, no social feed
- Age rating questionnaire answered as a tool that can be used by children under adult club and parent accounts
- Parent link enforced by the API, not only hidden buttons
- Privacy nutrition details on both stores match the real SDK list (Expo, camera, notifications, no ad SDK)

### Test devices

- One current iPhone, one older phone still on the minimum iOS the Expo SDK supports
- One current Android, one Android 8 or 9 device
- A coach flow and a gymnast flow on each: login, mark attendance or upload, kill the app, reopen, see the same server state
- Airplane mode during an attendance mark, then reconnect and see one mark, not two

**Done when:** internal TestFlight and Play internal-testing builds pass those four flows against the production API, and a second club’s data never appears.

---

## Phase 5 — Take payment

About two weeks. Can overlap the second half of phase 4.

- Each signup shows the Spend Management account number, ₦1,000 per student, and a reference. A funding transaction is the only writer of paid status. Match it once, so a replay does not extend the month twice. The amount must equal ₦1,000 times the students in that signup.
- Club onboarding can create the office login before any student exists. Student places and student self-signups stay pending until the matching credit lands. A paid student the club did not create can be allocated later with no second charge.
- The next month is another ₦1,000 per student, due before that period starts. It is the same transfer flow.
- Past due for one student: that student can read and cannot upload or be marked present. The club banner shows the account number and the amount. The gymnast app says the month needs to be paid. Other paid students in the club are unaffected.
- Email a receipt that names GymTrack and the transfer reference.
- A test payout is one approved Spend Request to the mother’s account. Confirm the GymTrack wallet drops by that amount and Academy’s wallet does not.
- Delete the fake card, transfer, and USSD flow in `src/screens/ClubsScreen.tsx`, and the auto-verify path in `registerClub`.

**Done when:** a club transfer of ₦2,000 activates two students and allocates both to that club, a student’s own ₦1,000 activates an account with no club, the same transfer replayed does not add a month, a missed renewal blocks that student only, and an approved payout debits the GymTrack Spend Management wallet only.

---

## Phase 6 — Store release, hardening, and the first clubs

About three weeks of work, then a four-week pilot. Apple and Google review sit inside this phase and can add days, longer if the first binary is rejected.

Hardening:

- Security headers, login rate limits, upload size already from earlier phases
- Backups every day, and one restore rehearsal onto a scratch database
- Error reporting with club id and request id, and no video contents or passwords in the logs
- Dependency and secret scan in CI
- Export CSV for roster, attendance, and skill status
- Delete gymnast: remove the profile, notes, attendance marks, progress, and the video objects
- A short club-admin guide: invite coaches, add a child, what the parent sees, how to export, how to cancel

Store submission, both platforms:

- Production EAS builds, signed with the accounts from phase 0
- Screenshots from the real app: gymnast skills, coach attendance, parent progress. Phone-sized for each store’s required sizes
- Description that says clubs use it to track training. It does not say official USAG or FIG
- Privacy policy URL, support email, account-deletion note
- Reviewer notes with the demo club login and the path to delete an account
- Submit iOS to App Store review and Android to Play production (or a closed track first if Play’s organization verification is still pending)
- Fix the first rejection, resubmit. Plan on at least one rejection for a first kids-adjacent app (permission strings, login, or deletion are the usual causes)

Pilot:

- Two clubs, each paying ₦1,000 per active student, for four weeks
- They take attendance each training day and verify at least ten skill videos
- Each club has at least one parent on a personal phone
- A founder watches the error log and sits with one coach in week one
- Exit interview: would they keep paying, and what blocked them

**The product is complete for first sale when all of these are true:**

- A new club can pay on the web and invite a coach without our help
- A coach can run attendance from the Android or iOS app
- A gymnast can upload a video from the app and a coach can verify it
- A parent can see only their child
- Another club cannot see any of that
- Unpaid clubs cannot keep adding athletes or videos
- Both store listings are approved and the builds match the API in production
- A backup has been restored in a rehearsal
- The two pilot clubs finished four weeks, and at least one is willing to keep paying

---

## Later, after the first sale

Do not start these during the phases above.

- US clubs: Stripe, COPPA verifiable parental consent before any under-13 profile, and a trademark review of any USAG wording
- Club-authored skills and an Xcel track (`XcelTier` already exists on the skill type)
- The club’s own meet calendar. The current world-event list in `src/data/gymData.ts` is not that product
- WhatsApp or SMS session reminders
- Reports: attendance rate, skills verified this month
- A coaching assistant. Only if a club asks, and only with a design that cannot invent corrections for a child’s skill video
- Extra native code only where Expo blocks a proven need. A full Swift and Kotlin rewrite is not the plan

---

## Risks

- **Children’s video.** A tenancy bug is a privacy incident. The two-club test stays in CI from phase 1 on. Access is logged.
- **Store rejection or delay.** The apps are part of “done,” so a rejected binary blocks the sale. Reviewer logins, in-app deletion, and plain permission text are in phase 4 so the first submission is not the first time we think about them.
- **Curriculum rights.** Shipping copied drills or someone else’s video inside a paid product is a different risk from a student demo. Phase 0 drops anything we cannot stand behind.
- **YouTube.** Scraping search results will break and is the wrong base for a paid app. Curated ids only.
- **Scope of the current screens.** Porting every web screen to the phone would blow the calendar. The phone gets the gym-floor jobs. The office keeps the web.
- **Public repo.** It stays public only until phase 0 flips it. No `.env`, tokens, or athlete data in git. `.gitignore` already ignores `.env*`.
- **Demo data.** There are no real users to migrate off `localStorage`. The pilot starts empty on purpose.

---

## What we build first when implementation starts

Phase 1 only, in this order: private repo already done, database and migrations, auth endpoints, tenancy test, web login wired to the API, role switcher removed, token endpoint the Expo app can call, CI running the tests.

The Expo app shell (sign-in screen and empty tabs) is the first mobile task, immediately after that token endpoint exists. Camera and store listings wait for their phases.
