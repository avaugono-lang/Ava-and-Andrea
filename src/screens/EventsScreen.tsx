import React, { useState, useMemo } from 'react';
import { useGym } from '../context/GymContext';
import { EventItem, GymnasticsDiscipline } from '../types';
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Bookmark, 
  Check, 
  Search, 
  X, 
  Award, 
  Sparkles, 
  Download, 
  Globe, 
  Clock, 
  Eye, 
  ChevronRight,
  Flame,
  Radio,
  Share2
} from 'lucide-react';

export const EventsScreen: React.FC = () => {
  const { events, downloadEventIcs, toggleEventCalendar } = useGym();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusTab, setStatusTab] = useState<'UPCOMING' | 'CALENDAR' | 'PAST'>('UPCOMING');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('ALL');
  const [activeEventModal, setActiveEventModal] = useState<EventItem | null>(null);

  // Identify Gymfest 3.0 for primary top feature (Requirement 10)
  const gymfestEvent = useMemo(() => {
    return events.find((e) => e.name.toLowerCase().includes('gymfest 3.0')) || events[0];
  }, [events]);

  const availableDisciplines: GymnasticsDiscipline[] = [
    'Artistic Gymnastics',
    'Rhythmic Gymnastics',
    'Trampoline & Tumbling',
    'Acrobatic Gymnastics',
  ];

  // Filter events based on tab, search, discipline
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Tab filter
      if (statusTab === 'CALENDAR') {
        if (!event.isAddedToCalendar) return false;
      } else if (statusTab === 'PAST') {
        if (!event.isCompleted) return false;
      } else {
        if (event.isCompleted) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          event.name.toLowerCase().includes(q) ||
          event.city.toLowerCase().includes(q) ||
          event.country.toLowerCase().includes(q) ||
          event.venue.toLowerCase().includes(q) ||
          event.discipline.toLowerCase().includes(q) ||
          event.shortDescription.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Discipline filter
      if (selectedDiscipline !== 'ALL' && event.discipline !== selectedDiscipline) {
        return false;
      }

      return true;
    });
  }, [events, statusTab, searchQuery, selectedDiscipline]);

  // Group events by hierarchy (Requirement 9, 10, 11):
  // 1. Local / Nigerian Events (excluding the top featured Gymfest banner if rendered separately)
  // 2. Other African Events
  // 3. International Events
  const localNigerianEvents = useMemo(() => {
    return filteredEvents.filter(
      (e) => (e.country.toLowerCase() === 'nigeria' || e.regionScope === 'LOCAL_NIGERIA') && e.id !== gymfestEvent?.id
    );
  }, [filteredEvents, gymfestEvent]);

  const otherAfricanEvents = useMemo(() => {
    return filteredEvents.filter(
      (e) =>
        e.country.toLowerCase() !== 'nigeria' &&
        e.regionScope !== 'LOCAL_NIGERIA' &&
        (e.continent === 'Africa' || e.regionScope === 'AFRICA')
    );
  }, [filteredEvents]);

  const internationalEvents = useMemo(() => {
    return filteredEvents.filter(
      (e) => e.continent !== 'Africa' && e.regionScope !== 'LOCAL_NIGERIA' && e.regionScope !== 'AFRICA'
    );
  }, [filteredEvents]);

  const handleDirections = (event: EventItem) => {
    const query = `${event.venue}, ${event.city}, ${event.country}`;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  };

  const renderEventCard = (event: EventItem) => (
    <article
      key={event.id}
      id={`card-event-${event.id}`}
      className="bg-white rounded-3xl border border-[#fce7f3] shadow-xs overflow-hidden flex flex-col justify-between hover:border-pink-300 transition-all group"
    >
      {/* Event Header Banner Image */}
      <div className="relative w-full h-40 bg-black overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Level & Region Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-[10px] font-black uppercase tracking-wide shadow-xs">
              {event.eventLevel}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#db2777] text-[10px] font-bold shadow-xs">
              {event.discipline}
            </span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full bg-[#ec4899] text-white text-[10px] font-black shadow-xs flex items-center gap-1">
            {event.country === 'Nigeria' ? '🇳🇬 Nigeria' : event.continent === 'Africa' ? '🌍 Africa' : '🌐 World'}
          </span>
        </div>

        {/* Title over dark overlay */}
        <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
          <h3 className="text-base sm:text-lg font-black leading-tight text-white drop-shadow-sm line-clamp-1">
            {event.name}
          </h3>
          <span className="text-xs text-[#fef08a] font-bold flex items-center gap-1 mt-0.5">
            <Calendar className="w-3 h-3 text-[#fef08a]" />
            <span>{event.dateDisplay}</span>
          </span>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-1.5 text-[#1f1619] font-medium">
            <MapPin className="w-4 h-4 text-[#ec4899] shrink-0" />
            <span className="truncate">{event.venue}, {event.city}, {event.country}</span>
          </div>

          <p className="text-xs text-[#6b555c] line-clamp-2 leading-relaxed">
            {event.shortDescription}
          </p>

          <div className="flex items-center justify-between text-[11px] text-[#6b555c] pt-1">
            <span>Organizer: <strong className="text-[#1f1619]">{event.organizer}</strong></span>
            <button
              onClick={() => handleDirections(event)}
              className="text-[#db2777] font-bold hover:underline flex items-center gap-0.5"
            >
              <span>Map</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="pt-2.5 flex items-center gap-2 border-t border-[#fce7f3]">
          <button
            id={`btn-event-details-${event.id}`}
            onClick={() => setActiveEventModal(event)}
            className="flex-1 py-2.5 px-3 rounded-full bg-[#fef9c3] border border-[#fef08a] text-[#854d0e] text-xs font-extrabold hover:bg-[#fde047] transition-all flex items-center justify-center gap-1.5 shadow-2xs active:scale-98"
          >
            <Eye className="w-3.5 h-3.5 text-[#db2777]" />
            <span>View Details</span>
          </button>

          <button
            id={`btn-event-calendar-${event.id}`}
            onClick={() => toggleEventCalendar(event.id)}
            className={`px-4 py-2.5 rounded-full text-xs font-black transition-all flex items-center gap-1.5 active:scale-98 shadow-2xs ${
              event.isAddedToCalendar
                ? 'bg-[#fce7f3] text-[#db2777] border border-pink-200'
                : 'bg-[#ec4899] text-white hover:bg-[#db2777]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>{event.isAddedToCalendar ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto px-4 sm:px-6 space-y-6 pt-2 pb-16">
      {/* 1. SCREEN TITLE & INTRO */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-black uppercase tracking-wider text-[#854d0e] bg-[#fef9c3] border border-[#fef08a] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
            <span>🇳🇬</span>
            <span>Local & African Gymnastics Meets</span>
          </span>
          <span className="text-xs font-bold text-[#db2777] bg-[#fce7f3] px-3 py-1 rounded-full border border-pink-200">
            2026 Season Schedule
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#1f1619] tracking-tight">
          Gymnastics Competitions & Meets
        </h1>
        <p className="text-xs sm:text-sm text-[#6b555c]">
          Discover local Nigerian meets, continental championships across Africa, and international FIG championships.
        </p>
      </div>

      {/* 2. PROMINENT GYMFEST 3.0 FEATURED HERO BANNER (Requirement 10) */}
      {statusTab === 'UPCOMING' && !searchQuery.trim() && gymfestEvent && (
        <section className="relative rounded-3xl overflow-hidden shadow-[0_12px_32px_rgba(244,114,182,0.22)] border-2 border-[#ec4899] bg-[#1f1619] text-white">
          <div className="relative w-full h-56 sm:h-72 overflow-hidden">
            <img
              src={gymfestEvent.image}
              alt={gymfestEvent.name}
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1619] via-[#1f1619]/40 to-transparent" />

            {/* Featured Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f59e0b] text-white text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Premier Featured Event</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#fef08a] text-xs font-black border border-white/20">
                🇳🇬 Lagos, Nigeria
              </span>
            </div>

            {/* Gymfest Title & Headline */}
            <div className="absolute bottom-4 left-4 right-4 space-y-1">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <span className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-widest">
                  Nigeria's #1 Gymnastics Festival
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                Gymfest 3.0
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-bold text-gray-200 pt-0.5">
                <span className="flex items-center gap-1 text-[#fef08a]">
                  <Calendar className="w-4 h-4" />
                  <span>{gymfestEvent.dateDisplay}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#f472b6]" />
                  <span>National Stadium Sports Hall & Teslim Balogun Arena</span>
                </span>
              </div>
            </div>
          </div>

          {/* Banner Description & CTA Buttons */}
          <div className="p-5 sm:p-6 bg-[#261b20] space-y-4">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              {gymfestEvent.detailedDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              <button
                id="btn-gymfest-view-details"
                onClick={() => setActiveEventModal(gymfestEvent)}
                className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] hover:opacity-95 text-white text-xs sm:text-sm font-black shadow-lg shadow-pink-500/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>View Event Details & Schedule</span>
              </button>

              <button
                id="btn-gymfest-add-calendar"
                onClick={() => toggleEventCalendar(gymfestEvent.id)}
                className="w-full sm:w-auto py-3 px-5 rounded-full bg-[#fef9c3] border border-[#fef08a] text-[#854d0e] hover:bg-[#fde047] text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all shrink-0"
              >
                <Bookmark className="w-4 h-4 text-[#db2777]" />
                <span>{gymfestEvent.isAddedToCalendar ? 'Saved in My Calendar ✓' : 'Add to Calendar'}</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 3. TABS & SEARCH CONTROLS */}
      <div className="space-y-3">
        {/* Status Tabs: Upcoming / My Calendar / Past */}
        <div className="w-full flex p-1.5 rounded-2xl bg-[#fff5f8] border border-[#fce7f3] text-xs font-bold shadow-2xs">
          <button
            id="tab-events-upcoming"
            onClick={() => setStatusTab('UPCOMING')}
            className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              statusTab === 'UPCOMING'
                ? 'bg-white text-[#db2777] shadow-xs border border-[#fce7f3] font-black'
                : 'text-[#6b555c] hover:text-[#1f1619]'
            }`}
          >
            <span>✨ Upcoming Meets</span>
          </button>

          <button
            id="tab-events-calendar"
            onClick={() => setStatusTab('CALENDAR')}
            className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              statusTab === 'CALENDAR'
                ? 'bg-white text-[#db2777] shadow-xs border border-[#fce7f3] font-black'
                : 'text-[#6b555c] hover:text-[#1f1619]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-[#db2777]" />
            <span>My Saved Calendar</span>
          </button>

          <button
            id="tab-events-past"
            onClick={() => setStatusTab('PAST')}
            className={`flex-1 py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              statusTab === 'PAST'
                ? 'bg-white text-[#db2777] shadow-xs border border-[#fce7f3] font-black'
                : 'text-[#6b555c] hover:text-[#1f1619]'
            }`}
          >
            <span>Past Results</span>
          </button>
        </div>

        {/* Search input and Discipline filter */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6b555c]" />
            <input
              type="text"
              id="input-events-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, event name, or venue..."
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

          <select
            id="select-events-discipline"
            value={selectedDiscipline}
            onChange={(e) => setSelectedDiscipline(e.target.value)}
            className="py-2.5 px-3 rounded-2xl bg-white border border-[#fce7f3] text-xs font-bold text-[#1f1619] focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
          >
            <option value="ALL">All Disciplines</option>
            {availableDisciplines.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 4. LOCAL & NIGERIAN EVENTS SECTION (Requirement 9 & 11) */}
      {(statusTab !== 'UPCOMING' || searchQuery.trim() || localNigerianEvents.length > 0) && (
        <section className="space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🇳🇬</span>
              <h2 className="text-lg sm:text-xl font-black text-[#1f1619] tracking-tight">
                Local & Nigerian Events
              </h2>
            </div>
            <span className="text-xs font-extrabold text-[#db2777] bg-[#fff0f5] px-2.5 py-0.5 rounded-full border border-pink-200">
              {localNigerianEvents.length} Events
            </span>
          </div>

          {localNigerianEvents.length === 0 ? (
            <p className="text-xs text-[#6b555c] bg-white p-4 rounded-2xl border border-[#fce7f3] text-center">
              No local events matching this filter.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {localNigerianEvents.map(renderEventCard)}
            </div>
          )}
        </section>
      )}

      {/* 5. OTHER AFRICAN EVENTS SECTION (Requirement 9 & 11) */}
      <section className="space-y-3.5 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌍</span>
            <h2 className="text-lg sm:text-xl font-black text-[#1f1619] tracking-tight">
              Other African Events
            </h2>
          </div>
          <span className="text-xs font-extrabold text-[#854d0e] bg-[#fef9c3] px-2.5 py-0.5 rounded-full border border-[#fef08a]">
            {otherAfricanEvents.length} Continental Meets
          </span>
        </div>

        {otherAfricanEvents.length === 0 ? (
          <p className="text-xs text-[#6b555c] bg-white p-4 rounded-2xl border border-[#fce7f3] text-center">
            No continental events matching this filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherAfricanEvents.map(renderEventCard)}
          </div>
        )}
      </section>

      {/* 6. INTERNATIONAL EVENTS SECTION (Requirement 9: further down) */}
      <section className="space-y-3.5 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌐</span>
            <h2 className="text-lg sm:text-xl font-black text-[#1f1619] tracking-tight">
              International Events
            </h2>
          </div>
          <span className="text-xs font-bold text-[#6b555c] bg-gray-100 px-2.5 py-0.5 rounded-full">
            {internationalEvents.length} Global Meets
          </span>
        </div>

        {internationalEvents.length === 0 ? (
          <p className="text-xs text-[#6b555c] bg-white p-4 rounded-2xl border border-[#fce7f3] text-center">
            No international events matching this filter.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {internationalEvents.map(renderEventCard)}
          </div>
        )}
      </section>

      {/* Event Details Modal */}
      {activeEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1619]/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4 border border-[#fce7f3] max-h-[92vh] overflow-y-auto">
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] text-xs font-black uppercase tracking-wide">
                  {activeEventModal.eventLevel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#fce7f3] text-[#db2777] border border-pink-200 text-xs font-bold">
                  {activeEventModal.discipline}
                </span>
              </div>
              <button
                id="btn-event-modal-close"
                onClick={() => setActiveEventModal(null)}
                className="w-8 h-8 rounded-full bg-[#fff5f8] border border-[#fce7f3] flex items-center justify-center text-[#6b555c] hover:text-[#1f1619]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Header */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-black">
              <img
                src={activeEventModal.image}
                alt={activeEventModal.name}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-xs text-[#fef08a] font-bold">
                  {activeEventModal.dateDisplay}
                </span>
                <h3 className="text-lg font-black leading-snug">
                  {activeEventModal.name}
                </h3>
              </div>
            </div>

            {/* Location & Host */}
            <div className="p-3 rounded-2xl bg-[#fffdf0] border border-[#fef08a] space-y-1 text-xs">
              <div className="flex items-center gap-2 text-[#854d0e] font-bold">
                <MapPin className="w-4 h-4 text-[#db2777] shrink-0" />
                <span>{activeEventModal.venue}, {activeEventModal.city}, {activeEventModal.country}</span>
              </div>
              <p className="text-[11px] text-[#6b555c]">
                Organized by: <strong className="text-[#1f1619]">{activeEventModal.organizer}</strong>
              </p>
            </div>

            {/* Detailed Description */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-black text-[#1f1619] uppercase tracking-wider">
                About The Championship
              </h4>
              <p className="text-xs text-[#6b555c] leading-relaxed">
                {activeEventModal.detailedDescription}
              </p>
            </div>

            {/* Schedule Highlights */}
            {activeEventModal.scheduleHighlights && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-black text-[#1f1619] uppercase tracking-wider">
                  Competition Schedule
                </h4>
                <ul className="space-y-1 text-xs text-[#6b555c]">
                  {activeEventModal.scheduleHighlights.map((sh, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#fff5f8] p-2 rounded-xl border border-[#fce7f3]">
                      <Clock className="w-3.5 h-3.5 text-[#ec4899] shrink-0 mt-0.5" />
                      <span>{sh}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Bottom Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
              <button
                id="btn-modal-save-calendar"
                onClick={() => {
                  toggleEventCalendar(activeEventModal.id);
                  setActiveEventModal(null);
                }}
                className="w-full sm:flex-1 py-3 rounded-full bg-gradient-to-r from-[#ec4899] to-[#db2777] text-white text-xs font-black shadow-md flex items-center justify-center gap-1.5"
              >
                <Bookmark className="w-4 h-4" />
                <span>{activeEventModal.isAddedToCalendar ? 'Remove from Saved' : 'Save to My Calendar'}</span>
              </button>

              <button
                id="btn-modal-download-ics"
                onClick={() => downloadEventIcs(activeEventModal)}
                className="w-full sm:w-auto py-3 px-4 rounded-full bg-[#fef9c3] border border-[#fef08a] text-[#854d0e] text-xs font-bold hover:bg-[#fde047] flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download .ICS</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
