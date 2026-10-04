import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { RegisteredClub, ClubDirectoryItem } from '../types';
import { AVAILABLE_GYMNASTICS_CLUBS } from '../data/gymData';
import { 
  Building2, 
  Search, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Plus, 
  Check, 
  ChevronRight, 
  ExternalLink, 
  Users, 
  Phone, 
  Mail, 
  Globe, 
  Sparkles, 
  CreditCard, 
  CheckCircle2, 
  X,
  SlidersHorizontal,
  ArrowRight,
  Shield,
  FileCheck,
  Star
} from 'lucide-react';

export const ClubsScreen: React.FC = () => {
  const { registeredClubs, user, setCurrentTab, setUserRole } = useGym();
  const [searchQuery, setSearchQuery] = useState('');
  const [nearCity, setNearCity] = useState<string | null>(null);
  const [regionFilter, setRegionFilter] = useState<'ALL' | 'NIGERIA' | 'AFRICA' | 'INTERNATIONAL'>('ALL');
  const [selectedClubForModal, setSelectedClubForModal] = useState<RegisteredClub | null>(null);

  // Club Registration Modal state
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [regStep, setRegStep] = useState<'DETAILS' | 'PAYMENT' | 'CONFIRMATION'>('DETAILS');

  // Registration Form State
  const [clubName, setClubName] = useState('');
  const [locationAddress, setLocationAddress] = useState('');
  const [city, setCity] = useState('Lagos');
  const [state, setState] = useState('Lagos State');
  const [country, setCountry] = useState('Nigeria');
  const [ownerName, setOwnerName] = useState(user.fullName || 'Coach');
  const [adminRole, setAdminRole] = useState('Head Coach & Founder');
  const [contactEmail, setContactEmail] = useState(user.email || '');
  const [contactPhone, setContactPhone] = useState(user.phoneNumber || '+234 ');
  const [website, setWebsite] = useState('');
  const [gymnastCountTier, setGymnastCountTier] = useState('26–50 Gymnasts');
  const [facilities, setFacilities] = useState('Olympic Spring Floor (40x40), Vault Runway & Table, Resi-Pits');
  const [programs, setPrograms] = useState('USAG Development Program Levels 1–10, Gymfest 3.0 Prep');
  const [description, setDescription] = useState('');
  const [yearEstablished, setYearEstablished] = useState<number>(2022);
  const [logoUrl, setLogoUrl] = useState('https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=400&q=80');

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState<'CARD' | 'TRANSFER' | 'USSD'>('CARD');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [completedClubRegistration, setCompletedClubRegistration] = useState<RegisteredClub | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const registrationFeeAmount = 75000; // NGN (or ~$99 USD)

  // Filter clubs from registered clubs and available directory
  const filteredRegisteredClubs = registeredClubs.filter((club) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q ||
      club.name.toLowerCase().includes(q) ||
      club.city.toLowerCase().includes(q) ||
      club.state.toLowerCase().includes(q) ||
      club.country.toLowerCase().includes(q) ||
      club.ownerName.toLowerCase().includes(q);

    if (!matchesSearch) return false;

    if (regionFilter === 'NIGERIA') return club.country.toLowerCase() === 'nigeria';
    if (regionFilter === 'AFRICA') return club.country.toLowerCase() !== 'nigeria' && ['South Africa', 'Egypt', 'Kenya', 'Ghana'].includes(club.country);
    if (regionFilter === 'INTERNATIONAL') return !['Nigeria', 'South Africa', 'Egypt', 'Kenya', 'Ghana'].includes(club.country);

    return true;
  }).slice().sort((a, b) => {
    if (!nearCity) return 0;
    if (a.city.toLowerCase() === nearCity && b.city.toLowerCase() !== nearCity) return -1;
    if (b.city.toLowerCase() === nearCity && a.city.toLowerCase() !== nearCity) return 1;
    return 0;
  });

  const handleStartRegistration = () => {
    setRegStep('DETAILS');
    setFormError(null);
    setShowRegisterModal(true);
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clubName.trim()) {
      setFormError('Please enter your gymnastics club name.');
      return;
    }
    if (!locationAddress.trim() || !city.trim()) {
      setFormError('Please enter your club address and city.');
      return;
    }
    if (!ownerName.trim()) {
      setFormError('Please enter the club administrator / owner name.');
      return;
    }
    if (!contactEmail.trim() || !contactPhone.trim()) {
      setFormError('Please provide contact email and phone number.');
      return;
    }

    setFormError(null);
    setRegStep('PAYMENT');
  };

  const handleProcessPayment = () => {
    setFormError('Student places are created from signup. Each student pays ₦1,000 before the account is active.');
    setIsProcessingPayment(false);
    setRegStep('DETAILS');
  };

  const handleGoToDashboard = () => {
    setShowRegisterModal(false);
    setUserRole('CLUB_ADMIN');
    setCurrentTab('dashboard');
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 space-y-6 pt-2 pb-16">
      {/* 1. HERO HEADER WITH REGISTER CLUB CTA */}
      <section className="relative rounded-3xl bg-gradient-to-br from-[#1f1619] via-[#2d1b24] to-[#1f1619] p-6 sm:p-8 text-white overflow-hidden shadow-lg border border-[#ec4899]/30">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#ec4899]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#f59e0b]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 fill-current" />
                <span>Verified Clubs Directory</span>
              </span>
              <span className="text-xs text-[#fef08a] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">
                2026 Federation Affiliated
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Gymnastics Clubs & Gym Management
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Explore officially verified gymnastics academies, or register your club to access the coach roster portal, track event scores, review video submissions, and prepare gymnasts for competition.
            </p>
          </div>

          {/* Primary Call to Action: Register Your Club Button */}
          <div className="shrink-0 flex flex-col sm:items-end gap-2">
            <button
              id="btn-register-club-hero"
              onClick={handleStartRegistration}
              className="py-3.5 px-6 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f59e0b] hover:opacity-95 text-white font-black text-xs sm:text-sm shadow-xl shadow-pink-500/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Building2 className="w-4 h-4" />
              <span>Register Your Club</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>
            <span className="text-[11px] text-gray-300 text-center sm:text-right">
              Student places are ₦1,000 each, paid at signup
            </span>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & REGION FILTERS */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <button
            type="button"
            onClick={() => {
              if (!navigator.geolocation) {
                setNearCity('lagos');
                return;
              }
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  const lagos = (latitude - 6.52) ** 2 + (longitude - 3.38) ** 2;
                  const abuja = (latitude - 9.08) ** 2 + (longitude - 7.4) ** 2;
                  setNearCity(lagos <= abuja ? 'lagos' : 'abuja');
                },
                () => setNearCity('lagos'),
              );
            }}
            className="px-3 py-2 rounded-2xl bg-white border border-[#fce7f3] text-xs font-bold"
          >
            {nearCity ? `Near ${nearCity}` : 'Near me'}
          </button>
          <input
              type="text"
              id="input-club-directory-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by club name, city, state, or director..."
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-white border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex p-1 bg-[#fff5f8] rounded-2xl border border-[#fce7f3] text-xs font-bold shrink-0">
            {(['ALL', 'NIGERIA', 'AFRICA', 'INTERNATIONAL'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRegionFilter(r)}
                className={`py-2 px-3 rounded-xl transition-all ${
                  regionFilter === r
                    ? 'bg-white text-[#db2777] shadow-xs font-black'
                    : 'text-[#6b555c] hover:text-[#1f1619]'
                }`}
              >
                {r === 'ALL' ? 'All Regions' : r === 'NIGERIA' ? '🇳🇬 Nigeria' : r === 'AFRICA' ? '🌍 Africa' : '🌐 Global'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. REGISTERED & VERIFIED CLUBS SECTION */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#db2777]" />
            <h2 className="text-lg sm:text-xl font-black text-[#1f1619] tracking-tight">
              Registered & Verified Gyms ({filteredRegisteredClubs.length})
            </h2>
          </div>
          <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Accredited SafeSport Facilities</span>
          </span>
        </div>

        {filteredRegisteredClubs.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-[#fce7f3] space-y-3">
            <Building2 className="w-10 h-10 text-[#f472b6] mx-auto" />
            <h3 className="text-sm font-bold text-[#1f1619]">No clubs found matching your search</h3>
            <p className="text-xs text-[#6b555c]">
              Be the first to register your gymnastics club in this area!
            </p>
            <button
              onClick={handleStartRegistration}
              className="py-2.5 px-4 rounded-full bg-[#ec4899] text-white text-xs font-bold hover:bg-[#db2777] shadow-xs"
            >
              Register Your Club Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredRegisteredClubs.map((club) => (
              <article
                key={club.id}
                id={`card-club-${club.id}`}
                className="bg-white rounded-3xl border border-[#fce7f3] shadow-xs p-5 flex flex-col justify-between hover:border-pink-300 transition-all hover:shadow-md space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#fff0f5] border border-[#fce7f3] shrink-0 shadow-2xs">
                        <img
                          src={club.logo}
                          alt={club.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="text-base font-black text-[#1f1619] leading-snug">
                            {club.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-[#db2777] font-semibold mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#ec4899] shrink-0" />
                          <span>{club.city}, {club.country}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[10px] font-black shrink-0 flex items-center gap-1 shadow-2xs">
                      <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <p className="text-xs text-[#6b555c] line-clamp-2 mt-3 leading-relaxed">
                    {club.description}
                  </p>

                  {/* Club Badges / Highlights */}
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] font-bold">
                      👥 {club.gymnastCountTier}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#fff5f8] text-[#db2777] border border-[#fce7f3] font-medium">
                      Est. {club.yearEstablished}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-gray-50 text-gray-700 border border-gray-200">
                      Director: {club.ownerName}
                    </span>
                  </div>
                </div>

                {/* Bottom actions */}
                <div className="pt-2 border-t border-[#fce7f3] flex items-center justify-between gap-2">
                  <div className="text-[11px] text-[#6b555c]">
                    <span>Affiliation ID: </span>
                    <strong className="text-[#1f1619] font-mono">{club.paymentReference}</strong>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedClubForModal(club)}
                      className="py-2 px-3 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] hover:bg-[#fde047] text-xs font-bold transition-all"
                    >
                      View Club Info
                    </button>
                    {user.clubName === club.name && (
                      <button
                        onClick={() => {
                          setUserRole('CLUB_ADMIN');
                          setCurrentTab('dashboard');
                        }}
                        className="py-2 px-3 rounded-full bg-[#ec4899] text-white hover:bg-[#db2777] text-xs font-black shadow-xs transition-all"
                      >
                        Manage
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* 4. CLUB REGISTRATION & PAYMENT MODAL */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1619]/65 backdrop-blur-xs p-4">
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#fce7f3] max-h-[92vh] overflow-y-auto flex flex-col justify-between">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-[#fce7f3] flex items-center justify-between bg-gradient-to-r from-[#fff5f8] to-white rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#ec4899] text-white flex items-center justify-center shadow-md">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#1f1619]">
                    {regStep === 'DETAILS' && 'Gymnast Club Official Registration'}
                    {regStep === 'PAYMENT' && 'Complete Registration Fee Payment'}
                    {regStep === 'CONFIRMATION' && 'Club Officially Registered & Verified!'}
                  </h3>
                  <p className="text-xs text-[#6b555c]">
                    {regStep === 'DETAILS' && 'Step 1 of 2: Enter club details & administrative information'}
                    {regStep === 'PAYMENT' && 'Step 2 of 2: Review registration fee and verify club status'}
                    {regStep === 'CONFIRMATION' && 'Official accreditation issued for the 2026 gymnastics season'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowRegisterModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: STEP 1 - DETAILS */}
            {regStep === 'DETAILS' && (
              <form onSubmit={handleProceedToPayment} className="p-5 sm:p-6 space-y-4">
                {formError && (
                  <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold animate-in fade-in">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">
                      Gymnastics Club Name <span className="text-[#db2777] font-black">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={clubName}
                      onChange={(e) => setClubName(e.target.value)}
                      placeholder="e.g. Apex Gymnastics Academy"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">
                      Facility Street Address <span className="text-[#db2777] font-black">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={locationAddress}
                      onChange={(e) => setLocationAddress(e.target.value)}
                      placeholder="e.g. 14 Sports Arena Way, Surulere"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">City <span className="text-[#db2777]">*</span></label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Lagos"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">State / Province</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="Lagos State"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">Country</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Nigeria"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">Year Established</label>
                    <input
                      type="number"
                      value={yearEstablished}
                      onChange={(e) => setYearEstablished(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">
                      Club Owner / Administrator Name <span className="text-[#db2777] font-black">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      placeholder="Coach Anthony Okafor"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">Administrator Role</label>
                    <input
                      type="text"
                      value={adminRole}
                      onChange={(e) => setAdminRole(e.target.value)}
                      placeholder="Head Coach & Technical Director"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">Contact Email <span className="text-[#db2777]">*</span></label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="admin@apexgym.ng"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">Contact Phone <span className="text-[#db2777]">*</span></label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+234 802 000 1122"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">
                      Estimated Active Gymnasts Count
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['10–25 Gymnasts', '26–50 Gymnasts', '51–100 Gymnasts', '100+ Elite Roster'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setGymnastCountTier(tier)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all border ${
                            gymnastCountTier === tier
                              ? 'bg-[#ec4899] text-white border-[#ec4899] shadow-xs'
                              : 'bg-white text-[#6b555c] border-[#fce7f3] hover:bg-[#fff5f8]'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">
                      Key Facilities & Equipment Available
                    </label>
                    <input
                      type="text"
                      value={facilities}
                      onChange={(e) => setFacilities(e.target.value)}
                      placeholder="e.g. Olympic Spring Floor, Dual Vault Tables, Resi-Pit, Uneven Bars"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#fce7f3] text-xs font-semibold focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-[#1f1619] block mb-1">
                      Club Description / Training Philosophy
                    </label>
                    <textarea
                      rows={2}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe your gymnastics programs, competition team, and coaching focus..."
                      className="w-full px-3.5 py-2 rounded-xl border border-[#fce7f3] text-xs font-medium focus:ring-2 focus:ring-[#ec4899] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#fce7f3] flex items-center justify-between">
                  <div className="text-xs text-[#854d0e] font-bold bg-[#fef9c3] px-3 py-1 rounded-full border border-[#fef08a]">
                    Registration Fee: ₦75,000 / year
                  </div>
                  <button
                    type="submit"
                    id="btn-proceed-to-payment"
                    className="py-3 px-6 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] hover:opacity-95 text-white font-black text-xs shadow-md shadow-pink-500/25 flex items-center gap-1.5"
                  >
                    <span>Continue to Payment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Modal Body: STEP 2 - PAYMENT & REGISTRATION FEE */}
            {regStep === 'PAYMENT' && (
              <div className="p-5 sm:p-6 space-y-5">
                {/* Fee Breakdown Card */}
                <div className="rounded-2xl bg-gradient-to-br from-[#fffdf0] to-[#fef9c3] p-5 border border-[#fef08a] space-y-3">
                  <div className="flex items-center justify-between border-b border-amber-200/80 pb-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#854d0e]">
                        Official Gymtrack Accreditation
                      </span>
                      <h4 className="text-base font-black text-[#1f1619]">{clubName}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-[#db2777]">₦75,000</span>
                      <span className="text-[10px] text-[#6b555c] block">Annual Affiliation Fee</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#854d0e] font-semibold">
                    What is included in your official club registration:
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1f1619]">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Official <strong>Verified Club Badge</strong> & Directory Listing</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Dedicated <strong>Gym / Coach Dashboard</strong> Access</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Unlimited Gymnast Roster & Score Tracking</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Video Evidence Evaluation & Stamp Portal</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>FIG / GFN Competition & Gymfest 3.0 Alignment</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>SafeSport Compliance Accreditation</span>
                    </li>
                  </ul>
                </div>

                {/* Payment Method Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#1f1619] block">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('CARD')}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'CARD'
                          ? 'border-[#ec4899] bg-[#fff0f5] text-[#db2777] ring-2 ring-pink-200 shadow-xs'
                          : 'border-[#fce7f3] bg-white text-[#6b555c]'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Debit / Credit Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('TRANSFER')}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'TRANSFER'
                          ? 'border-[#ec4899] bg-[#fff0f5] text-[#db2777] ring-2 ring-pink-200 shadow-xs'
                          : 'border-[#fce7f3] bg-white text-[#6b555c]'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span>Direct Bank Transfer</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('USSD')}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'USSD'
                          ? 'border-[#ec4899] bg-[#fff0f5] text-[#db2777] ring-2 ring-pink-200 shadow-xs'
                          : 'border-[#fce7f3] bg-white text-[#6b555c]'
                      }`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>USSD / QR Code</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Checkout Box */}
                <div className="p-4 rounded-2xl bg-[#fff9fb] border border-[#fce7f3] space-y-3 text-xs">
                  <div className="flex items-center justify-between text-[#6b555c]">
                    <span>Affiliation Period</span>
                    <strong className="text-[#1f1619]">12 Months (2026–2027 Season)</strong>
                  </div>
                  <div className="flex items-center justify-between text-[#6b555c]">
                    <span>Accreditation Type</span>
                    <strong className="text-[#1f1619]">Full Competitive Club Roster</strong>
                  </div>
                  <div className="flex items-center justify-between text-[#6b555c] pt-2 border-t border-[#fce7f3]">
                    <span className="font-bold text-[#1f1619]">Total Registration Fee</span>
                    <strong className="text-base text-[#db2777] font-black">₦75,000 NGN</strong>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setRegStep('DETAILS')}
                    className="py-2.5 px-4 rounded-full text-xs font-bold text-[#6b555c] hover:bg-gray-100"
                  >
                    Back to Details
                  </button>

                  <button
                    type="button"
                    id="btn-confirm-pay-fee"
                    onClick={handleProcessPayment}
                    disabled={isProcessingPayment}
                    className="py-3 px-6 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-600/25 flex items-center gap-2 active:scale-98 transition-all disabled:opacity-50"
                  >
                    {isProcessingPayment ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Securing Payment & Accreditation...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Pay ₦75,000 & Register Club</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Modal Body: STEP 3 - CONFIRMATION */}
            {regStep === 'CONFIRMATION' && completedClubRegistration && (
              <div className="p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center ring-8 ring-emerald-50 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black uppercase">
                    Status: Registered & Verified ✓
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1f1619] pt-2">
                    {completedClubRegistration.name}
                  </h3>
                  <p className="text-xs text-[#6b555c]">
                    Your registration fee of <strong>₦75,000</strong> has been processed successfully.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#fffdf0] border border-[#fef08a] text-left text-xs space-y-2">
                  <div className="flex items-center justify-between text-[#854d0e]">
                    <span>Accreditation Ref:</span>
                    <strong className="font-mono text-[#1f1619]">{completedClubRegistration.paymentReference}</strong>
                  </div>
                  <div className="flex items-center justify-between text-[#854d0e]">
                    <span>Official Badge:</span>
                    <span className="font-bold text-emerald-700">{completedClubRegistration.verificationBadge}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#854d0e]">
                    <span>Director / Administrator:</span>
                    <strong className="text-[#1f1619]">{completedClubRegistration.ownerName}</strong>
                  </div>
                </div>

                <p className="text-xs text-[#6b555c]">
                  You have been upgraded to <strong>Club Administrator</strong>. You can now access the Gym Dashboard to view gymnasts, add scores, review routine videos, and track performance.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                  <button
                    id="btn-goto-gym-dashboard"
                    onClick={handleGoToDashboard}
                    className="w-full sm:flex-1 py-3.5 px-4 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white font-black text-xs sm:text-sm shadow-md shadow-pink-500/25 flex items-center justify-center gap-2"
                  >
                    <span>Open Gym / Coach Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setShowRegisterModal(false)}
                    className="w-full sm:w-auto py-3.5 px-4 rounded-full text-xs font-bold text-[#6b555c] hover:bg-gray-100"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. CLUB DETAILS PREVIEW MODAL */}
      {selectedClubForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1619]/65 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#fce7f3] max-h-[90vh] overflow-y-auto p-5 sm:p-6 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#fff0f5] border border-[#fce7f3] shrink-0">
                  <img
                    src={selectedClubForModal.logo}
                    alt={selectedClubForModal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#1f1619]">{selectedClubForModal.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-[#db2777] font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{selectedClubForModal.location}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedClubForModal(null)}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#6b555c] leading-relaxed">
              {selectedClubForModal.description}
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-2xl bg-[#fffdf0] border border-[#fef08a] space-y-1">
                <span className="text-[10px] font-black uppercase text-[#854d0e]">Leadership & Contact</span>
                <p className="font-bold text-[#1f1619]">{selectedClubForModal.ownerName} ({selectedClubForModal.adminRole})</p>
                <p className="text-[#6b555c]">Phone: {selectedClubForModal.phone} • Email: {selectedClubForModal.email}</p>
                {selectedClubForModal.address && (
                  <p className="text-[#6b555c]">Facility: {selectedClubForModal.address}</p>
                )}
              </div>

              {selectedClubForModal.facilities && selectedClubForModal.facilities.length > 0 && (
                <div>
                  <span className="font-bold text-[#1f1619] block mb-1">Equipment & Facilities:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedClubForModal.facilities.map((fac, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#fff5f8] text-[#db2777] border border-[#fce7f3] text-[11px] font-medium">
                        ✓ {fac}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedClubForModal.programs && selectedClubForModal.programs.length > 0 && (
                <div>
                  <span className="font-bold text-[#1f1619] block mb-1">Training Programs:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedClubForModal.programs.map((prog, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-[11px] font-bold">
                        ★ {prog}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-[#fce7f3] flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#6b555c]">
                Ref: {selectedClubForModal.paymentReference}
              </span>

              <button
                onClick={() => setSelectedClubForModal(null)}
                className="py-2 px-4 rounded-full bg-[#1f1619] text-white text-xs font-bold hover:bg-[#33222a]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
