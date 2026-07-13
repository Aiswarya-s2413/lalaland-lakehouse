import React from 'react';

export const TheLandSection: React.FC = () => {
  const tags = [
    'Lake views',
    'Forest',
    'Farm',
    'Orchard',
    'Trails',
    'Hilltop setting',
    'Private lake access',
    'Fully private environment',
  ];

  return (
    <section id="land" style={{ position: 'relative', zIndex: 1 }}>
      <div className="mist-wrap" aria-hidden="true">
        <div className="mist m1"></div>
        <div className="mist m2"></div>
      </div>
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="rv d1" style={{ marginTop: '16px', fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 58px)', color: 'var(--day)' }}>
          The Place
        </h2>
        <p className="lede rv d2" style={{ fontWeight: 500, color: 'var(--sun)' }}>
          A hilltop above a private lake, in the middle of nowhere you'd expect.
        </p>
        <p className="lede rv d2" style={{ marginTop: '14px' }}>
          Lalaland sits in a remote, rural setting near Pen, Maharashtra — forest on one side,
          farmland and orchard on the other, and a lake that's entirely ours. No crowds. No noise.
          Just an immersive, nature-based escape from the city.
        </p>

        <div className="tag-cloud rv d2" style={{ marginTop: '40px', maxWidth: '800px' }}>
          {tags.map((tag, idx) => (
            <span key={idx} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
