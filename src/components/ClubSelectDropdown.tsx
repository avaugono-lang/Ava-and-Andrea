import React, { useState, useRef, useEffect } from 'react';
import { AVAILABLE_GYMNASTICS_CLUBS } from '../data/gymData';
import { ClubDirectoryItem } from '../types';
import { 
  Building2, 
  Search, 
  ChevronDown, 
  Check, 
  X, 
  PlusCircle, 
  MapPin, 
  Sparkles, 
  Edit3,
  AlertCircle 
} from 'lucide-react';

interface ClubSelectDropdownProps {
  selectedClub: string; // Either club name, 'OTHER', or ''
  customClubName: string; // Name typed when 'OTHER'
  onSelectClub: (clubName: string) => void;
  onChangeCustomClub: (name: string) => void;
  error?: string | null;
  required?: boolean;
}

export const ClubSelectDropdown: React.FC<ClubSelectDropdownProps> = ({
  selectedClub,
  customClubName,
  onSelectClub,
  onChangeCustomClub,
  error,
  required = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const customInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click or tap
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Focus custom input when 'OTHER' is selected
  useEffect(() => {
    if (selectedClub === 'OTHER') {
      setTimeout(() => {
        customInputRef.current?.focus();
      }, 100);
    }
  }, [selectedClub]);

  // Filter clubs based on search query
  const filteredClubs = AVAILABLE_GYMNASTICS_CLUBS.filter((club) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      club.name.toLowerCase().includes(query) ||
      club.location.toLowerCase().includes(query) ||
      club.country.toLowerCase().includes(query) ||
      club.region.toLowerCase().includes(query)
    );
  });

  const handleSelectPredefined = (club: ClubDirectoryItem) => {
    onSelectClub(club.name);
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleSelectOther = () => {
    onSelectClub('OTHER');
    setIsOpen(false);
    setSearchQuery('');
  };

  const handleUseSearchAsCustom = () => {
    const trimmed = searchQuery.trim();
    if (trimmed) {
      onChangeCustomClub(trimmed);
      onSelectClub('OTHER');
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  // Determine display label for trigger button
  const getTriggerLabel = () => {
    if (selectedClub === 'OTHER') {
      return customClubName.trim()
        ? `${customClubName.trim()} (Custom Club)`
        : 'Not listed / Other club';
    }
    if (selectedClub) {
      return selectedClub;
    }
    return 'Select or search your gymnastics club...';
  };

  const isOther = selectedClub === 'OTHER';

  return (
    <div className="space-y-2" ref={dropdownRef}>
      {/* Label with required marker */}
      <div className="flex items-center justify-between">
        <label 
          htmlFor="btn-club-dropdown-trigger" 
          className="text-xs font-bold text-[#1f1619] flex items-center gap-1.5"
        >
          <Building2 className="w-3.5 h-3.5 text-[#ec4899]" />
          <span>Gymnastics Club</span>
          {required && <span className="text-[#db2777] font-black">*</span>}
        </label>
        <span className="text-[10px] text-[#6b555c] font-medium">
          {isOther ? 'Custom club entry' : 'Searchable directory'}
        </span>
      </div>

      {/* Main Searchable Dropdown Trigger Button */}
      <div className="relative">
        <button
          type="button"
          id="btn-club-dropdown-trigger"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border text-left text-xs flex items-center justify-between gap-2 transition-all ${
            error
              ? 'border-rose-300 bg-rose-50/30 text-[#1f1619] ring-2 ring-rose-200'
              : isOpen
              ? 'border-pink-400 bg-white ring-2 ring-pink-200 shadow-xs'
              : selectedClub
              ? 'border-[#fce7f3] bg-[#fffdfa] text-[#1f1619] hover:border-pink-300'
              : 'border-[#fce7f3] bg-[#fffdfa] text-[#6b555c] hover:border-pink-300'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <Building2 
              className={`w-4 h-4 shrink-0 ${
                selectedClub ? 'text-[#db2777]' : 'text-gray-400'
              }`} 
            />
            <span className={`truncate ${selectedClub ? 'font-bold text-[#1f1619]' : 'text-[#6b555c]'}`}>
              {getTriggerLabel()}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 text-[#6b555c]">
            {selectedClub && (
              <span className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#fef9c3] text-[#854d0e] text-[10px] font-bold border border-[#fef08a]">
                Selected
              </span>
            )}
            <ChevronDown 
              className={`w-4 h-4 text-[#6b555c] transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-[#db2777]' : ''
              }`} 
            />
          </div>
        </button>

        {/* Dropdown Popover */}
        {isOpen && (
          <div 
            className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-2xl shadow-xl border border-[#fce7f3] p-2 space-y-2 animate-in fade-in zoom-in-95 duration-150"
            role="listbox"
            id="listbox-gym-clubs"
          >
            {/* Search Input Box with Search Icon and Clear button */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                id="input-club-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search club by name, city, or country..."
                className="w-full pl-8 pr-8 py-2 rounded-xl bg-[#fff5f8] border border-[#fce7f3] text-xs text-[#1f1619] placeholder:text-[#6b555c]/80 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600 rounded-full"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Pinned "Not listed / Other" Option Bar */}
            <button
              type="button"
              id="opt-club-other"
              onClick={handleSelectOther}
              className={`w-full min-h-[42px] px-3 py-2 rounded-xl text-left text-xs font-bold transition-all flex items-center justify-between border ${
                isOther
                  ? 'bg-[#fff0f5] border-[#ec4899] text-[#db2777] shadow-xs'
                  : 'bg-[#fffdf0] border-[#fef08a] text-[#854d0e] hover:bg-[#fef9c3]'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <Edit3 className="w-4 h-4 text-[#db2777] shrink-0" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-[#1f1619]">
                      Not listed / Other
                    </span>
                    <span className="px-1.5 py-0.2 text-[9px] font-black uppercase rounded bg-[#fce7f3] text-[#db2777]">
                      Type Custom Name
                    </span>
                  </div>
                  <p className="text-[10px] text-[#6b555c] truncate">
                    Tap to type your gymnastics club name manually
                  </p>
                </div>
              </div>

              {isOther ? (
                <Check className="w-4 h-4 text-[#db2777] shrink-0" />
              ) : (
                <PlusCircle className="w-4 h-4 text-[#854d0e] shrink-0" />
              )}
            </button>

            {/* Scrollable Clubs List */}
            <div className="max-h-56 sm:max-h-60 overflow-y-auto space-y-1 pr-1 divide-y divide-pink-50/80">
              {filteredClubs.length > 0 ? (
                filteredClubs.map((club) => {
                  const isSelected = selectedClub === club.name;
                  return (
                    <button
                      key={club.id}
                      type="button"
                      id={`opt-club-${club.id}`}
                      onClick={() => handleSelectPredefined(club)}
                      className={`w-full min-h-[44px] px-3 py-2.5 rounded-xl text-left text-xs transition-all flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-[#fff0f5] text-[#db2777] font-bold shadow-2xs'
                          : 'hover:bg-[#fff9fb] text-[#1f1619]'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`leading-snug ${isSelected ? 'font-black text-[#db2777]' : 'font-bold'}`}>
                            {club.name}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-[#fef9c3] text-[#854d0e] border border-[#fef08a] font-semibold">
                            {club.country === 'Nigeria' ? '🇳🇬 Nigeria' : club.region === 'Africa' ? '🌍 Africa' : '🌐 International'}
                          </span>
                        </div>
                        <div className="text-[10px] text-[#6b555c] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-[#ec4899] shrink-0" />
                          <span className="truncate">{club.location}, {club.country}</span>
                        </div>
                      </div>

                      {isSelected && (
                        <Check className="w-4 h-4 text-[#db2777] shrink-0 ml-1" />
                      )}
                    </button>
                  );
                })
              ) : (
                /* Empty search state with quick action to use typed search query */
                <div className="py-4 px-3 text-center space-y-2">
                  <p className="text-xs text-[#6b555c]">
                    No clubs found matching &ldquo;{searchQuery}&rdquo;
                  </p>
                  {searchQuery.trim() && (
                    <button
                      type="button"
                      onClick={handleUseSearchAsCustom}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-xs font-bold shadow-xs transition-all"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Use &ldquo;{searchQuery.trim()}&rdquo; as your club</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* When "Not listed / Other" is selected, render a clear, required text input */}
      {isOther && (
        <div className="pt-1.5 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex items-center justify-between">
            <label 
              htmlFor="input-custom-club-name" 
              className="text-xs font-bold text-[#1f1619] flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3 text-[#db2777]" />
              <span>Enter Your Gymnastics Club Name</span>
              {required && <span className="text-[#db2777] font-black">*</span>}
            </label>
            <button
              type="button"
              onClick={() => onSelectClub('')}
              className="text-[10px] text-[#db2777] hover:underline font-semibold"
            >
              Choose from list instead
            </button>
          </div>

          <div className="relative">
            <input
              ref={customInputRef}
              type="text"
              id="input-custom-club-name"
              required={required}
              value={customClubName}
              onChange={(e) => onChangeCustomClub(e.target.value)}
              placeholder="e.g. Phoenix Gymnastics Academy"
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#1f1619] bg-[#fffdfa] focus:ring-2 focus:ring-pink-300 focus:outline-none transition-all ${
                error && !customClubName.trim()
                  ? 'border-rose-300 ring-2 ring-rose-200 bg-rose-50/20'
                  : 'border-[#fce7f3] focus:border-pink-400'
              }`}
            />
          </div>

          <p className="text-[10px] text-[#6b555c]">
            This club will appear on your athlete profile and gym tracking records.
          </p>
        </div>
      )}

      {/* Error message indicator */}
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-rose-600 font-semibold pt-0.5 animate-in fade-in">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
