import React, { useState } from 'react';
import { useGym } from '../context/GymContext';

export const ClubOffice: React.FC = () => {
  const {
    userRole,
    rosterGymnasts,
    attendance,
    notices,
    documents,
    certificates,
    markAttendance,
    sendFeeReminder,
    publishNotice,
    addDocument,
    issueCertificate,
  } = useGym();
  const staff = userRole === 'COACH' || userRole === 'CLUB_ADMIN';
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeBody, setNoticeBody] = useState('');
  const [feeName, setFeeName] = useState(rosterGymnasts[0]?.name ?? '');
  const [feeMessage, setFeeMessage] = useState('Your training fee is due.');
  const [sent, setSent] = useState<string | null>(null);

  const saveFile = (file: File | undefined) => {
    if (!file) return;
    if (file.size > 1_500_000) {
      setSent('That file is over 1.5 MB. Use a smaller document until file storage is connected.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        addDocument(file.name, reader.result);
        setSent(`${file.name} is stored for the club.`);
      }
    };
    reader.readAsDataURL(file);
  };

  if (!staff) {
    return (
      <section className="bg-white border border-[#E4D7EE] rounded-2xl p-5 space-y-3">
        <h1 className="font-display text-3xl text-[#3E1B4A]">Club Dashboard</h1>
        <p className="text-sm text-[#5C4A68]">Reviews, attendance, fees, certificates and documents are for the coach or club.</p>
        <h2 className="font-display text-xl text-[#3E1B4A]">Training notice board</h2>
        {notices.length === 0 && <p className="text-sm text-[#5C4A68]">No notices yet.</p>}
        {notices.map((item) => (
          <article key={item.id}>
            <h3>{item.title}</h3>
            <p className="text-sm text-[#5C4A68]">{item.body}</p>
          </article>
        ))}
      </section>
    );
  }

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="font-display text-2xl text-[#3E1B4A]">Attendance register</h2>
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} className="rounded-xl border border-[#E4D7EE] px-3 py-2 text-sm" />
        <div className="space-y-2">
          {rosterGymnasts.map((gymnast) => {
            const mark = attendance.find((item) => item.gymnastId === gymnast.id && item.date === date);
            return (
              <div key={gymnast.id} className="bg-white border border-[#E4D7EE] rounded-2xl p-3 flex items-center justify-between gap-3">
                <span className="text-sm">{gymnast.name}</span>
                <span className="flex gap-2">
                  <button type="button" onClick={() => markAttendance(gymnast.id, gymnast.name, date, true)} className={`px-3 py-1 rounded-full text-sm ${mark?.present === true ? 'bg-[#5C2A6E] text-white' : 'border border-[#E4D7EE]'}`}>Present</button>
                  <button type="button" onClick={() => markAttendance(gymnast.id, gymnast.name, date, false)} className={`px-3 py-1 rounded-full text-sm ${mark?.present === false ? 'bg-[#5C2A6E] text-white' : 'border border-[#E4D7EE]'}`}>Absent</button>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white border border-[#E4D7EE] rounded-2xl p-4 space-y-2">
        <h2 className="font-display text-2xl text-[#3E1B4A]">Fee reminders</h2>
        <select value={feeName} onChange={(event) => setFeeName(event.target.value)} className="w-full rounded-xl border border-[#E4D7EE] px-3 py-2 text-sm">
          {rosterGymnasts.map((gymnast) => <option key={gymnast.id}>{gymnast.name}</option>)}
        </select>
        <textarea value={feeMessage} onChange={(event) => setFeeMessage(event.target.value)} className="w-full rounded-xl border border-[#E4D7EE] px-3 py-2 text-sm" />
        <button
          type="button"
          onClick={() => { sendFeeReminder(feeName, feeMessage); setSent(`Reminder sent to ${feeName}.`); }}
          className="px-4 py-2 rounded-full bg-[#5C2A6E] text-white text-sm"
        >
          Send reminder
        </button>
      </section>

      <section className="bg-white border border-[#E4D7EE] rounded-2xl p-4 space-y-2">
        <h2 className="font-display text-2xl text-[#3E1B4A]">Training notice board</h2>
        <input value={noticeTitle} onChange={(event) => setNoticeTitle(event.target.value)} placeholder="Session title" className="w-full rounded-xl border border-[#E4D7EE] px-3 py-2 text-sm" />
        <textarea value={noticeBody} onChange={(event) => setNoticeBody(event.target.value)} placeholder="Day, time and what to bring" className="w-full rounded-xl border border-[#E4D7EE] px-3 py-2 text-sm" />
        <button
          type="button"
          onClick={() => {
            if (!noticeTitle.trim() || !noticeBody.trim()) return;
            publishNotice(noticeTitle.trim(), noticeBody.trim());
            setNoticeTitle('');
            setNoticeBody('');
            setSent('Notice published.');
          }}
          className="px-4 py-2 rounded-full bg-[#5C2A6E] text-white text-sm"
        >
          Publish notice
        </button>
        {notices.map((item) => (
          <article key={item.id} className="border-t border-[#F4EEF8] pt-2">
            <h3>{item.title}</h3>
            <p className="text-sm text-[#5C4A68]">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="bg-white border border-[#E4D7EE] rounded-2xl p-4 space-y-2">
        <h2 className="font-display text-2xl text-[#3E1B4A]">Certificates</h2>
        {rosterGymnasts.map((gymnast) => (
          <div key={gymnast.id} className="flex items-center justify-between gap-3 text-sm">
            <span>{gymnast.name} · Level {gymnast.level}</span>
            <button
              type="button"
              className="text-[#5C2A6E]"
              onClick={() => {
                issueCertificate(gymnast.name, gymnast.level, `${gymnast.name} passed level ${gymnast.level}.`);
                setSent(`Certificate sent to ${gymnast.name}.`);
              }}
            >
              Send certificate
            </button>
          </div>
        ))}
        {certificates.slice(0, 5).map((item) => (
          <p key={item.id} className="text-sm text-[#5C4A68]">{item.gymnastName} · level {item.level}</p>
        ))}
      </section>

      <section className="bg-white border border-[#E4D7EE] rounded-2xl p-4 space-y-2">
        <h2 className="font-display text-2xl text-[#3E1B4A]">Document storage</h2>
        <input type="file" onChange={(event) => saveFile(event.target.files?.[0])} className="text-sm" />
        {documents.map((item) => (
          <a key={item.id} href={item.dataUrl} download={item.name} className="block text-sm text-[#5C2A6E]">{item.name}</a>
        ))}
      </section>
      {sent && <p className="text-sm text-[#3E1B4A]">{sent}</p>}
    </div>
  );
};
