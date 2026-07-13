import React from 'react';

export const WhatYouLeaveWithSection: React.FC = () => {
  const cards = [
    {
      title: 'Yourself',
      focus: 'The version of you that isn\'t performing.',
      desc: 'Three days without the pressure to be productive, available, and impressive — and something settles. You remember what you actually think. What you actually want. It was there all along.',
    },
    {
      title: 'Your closest people',
      focus: 'Real time together. Not screen-adjacent time.',
      desc: 'A shared trail. A meal that took care to make. A fire that everyone gathers around because there\'s nothing else competing. You leave remembering why these are your people.',
    },
    {
      title: 'Your creativity',
      focus: 'The ideas that had stopped coming — coming again.',
      desc: 'Boredom is rare in a city. Here, there\'s enough space between things for something new to appear. Most guests write more in a weekend here than in months at their desk.',
    },
    {
      title: 'Your sense of proportion',
      focus: 'The lake has been here for decades. Your inbox hasn\'t.',
      desc: 'There\'s something deeply clarifying about standing at the edge of thirty-five acres of forest and realising that most of the world is this — not the thing you were anxious about on Friday morning.',
    },
  ];

  return (
    <section id="leave-with" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="wrap">
        <span className="eyebrow rv">What you leave with</span>
        <h2 className="rv d1" style={{ marginTop: '16px', fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 58px)', color: 'var(--day)' }}>
          What you leave with
        </h2>
        <p className="lede rv d2">
          You don't realise how much you've been carrying until you put it down somewhere like this.
        </p>

        <div className="who-grid" style={{ marginTop: '48px' }}>
          {cards.map((card, i) => (
            <div key={i} className={`who-card rv d${(i % 3) + 1}`} style={{ height: '100%' }}>
              <h3 style={{ fontSize: '22px', color: 'var(--sun)', marginBottom: '8px' }}>{card.title}</h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '12px', textTransform: 'uppercase', color: 'var(--day)', letterSpacing: '0.08em', marginBottom: '14px', borderBottom: '1px solid rgba(241, 235, 217, 0.1)', paddingBottom: '8px' }}>
                {card.focus}
              </p>
              <p style={{ fontSize: '14.5px', color: 'rgba(241,235,217,0.7)', fontWeight: 300 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
