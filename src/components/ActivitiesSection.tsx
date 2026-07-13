import React, { useState } from 'react';

export const ActivitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'included' | 'addons'>('included');

  const included = [
    { ico: '🔭', title: 'Stargazing' },
    { ico: '🚲', title: 'Bicycles' },
    { ico: '🎯', title: 'Sports equipment' },
    { ico: '🎲', title: 'Board games' },
    { ico: '🎨', title: 'Painting setup' },
    { ico: '🐦', title: 'Bird watching' },
    { ico: '📚', title: 'Books' },
    { ico: '🌳', title: 'Nature exploration' },
  ];

  const addons = [
    { ico: '🏡', title: 'Life at Lalaland' },
    { ico: '🧺', title: 'Picnic by the Lake' },
    { ico: '🔥', title: 'BBQ & Bonfire Experience' },
    { ico: '🍂', title: 'Seasonal Experiences' },
  ];

  return (
    <section id="do">
      <div className="wrap">
        <h2 className="rv d1" style={{ marginTop: '16px', fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 58px)', color: 'var(--day)' }}>
          Discover Lalaland Lakehouse
        </h2>
        <p className="lede rv d2" style={{ color: 'var(--sun)', fontFamily: 'var(--mono)', fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '10px' }}>
          There's no itinerary. That's the whole point.
        </p>

        <div className="exp-switcher rv d2" style={{ marginTop: '40px' }}>
          <button
            className={`exp-tab ${activeTab === 'included' ? 'active' : ''}`}
            onClick={() => setActiveTab('included')}
          >
            Included experiences:
          </button>
          <button
            className={`exp-tab ${activeTab === 'addons' ? 'active' : ''}`}
            onClick={() => setActiveTab('addons')}
          >
            Add-on experiences:
          </button>
        </div>

        <div className="chips rv d1" style={{ marginTop: '30px', justifyContent: 'center', maxWidth: '800px', margin: '30px auto 0' }}>
          {(activeTab === 'included' ? included : addons).map((item, idx) => (
            <span key={idx} className="tag-chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '15px' }}>
              <span>{item.ico}</span>
              <span style={{ color: 'var(--day)' }}>{item.title}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
