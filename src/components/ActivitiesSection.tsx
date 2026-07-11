import React, { useState } from 'react';

export const ActivitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'included' | 'addons'>('included');

  const included = [
    { ico: '🔭', title: 'Stargazing', desc: 'A telescope, zero light pollution, and a sky that makes city people go quiet.' },
    { ico: '🚲', title: 'Bicycles & Trails', desc: 'Cruise around the property or take a quiet ride on surrounding village paths.' },
    { ico: '🎯', title: 'Sports Equipment', desc: 'Cricket, badminton, and football. The clearing by the aangan becomes a pitch in no time.' },
    { ico: '🎲', title: 'Board Games', desc: 'A collection for when the evening turns slow, comfortable, and runs later than expected.' },
    { ico: '🎨', title: 'Painting Setup', desc: 'Easels, colors, and papers provided. The views from the hill will do the rest.' },
    { ico: '🐦', title: 'Bird Watching', desc: 'Binoculars provided. The reserve forest holds species you won\'t see near the city.' },
    { ico: '📚', title: 'Library Books', desc: 'Find a quiet corner or a hammock, borrow a book from our much-loaned collection.' },
    { ico: '🌳', title: 'Nature Exploration', desc: '35 acres of permaculture land laced with walking paths. Trees, birdsong, and quiet.' },
  ];

  const addons = [
    { ico: '🏡', title: 'Life at Lalaland', desc: 'Spend time with Dilip & Vinita learning about permaculture, earth builds, and homestay life.' },
    { ico: '🧺', title: 'Picnic by the Lake', desc: 'Pack a basket, take your time, and find a private spot on our two kilometres of shoreline.' },
    { ico: '🔥', title: 'BBQ & Bonfire', desc: 'A wood fire pit at the highest point of the estate. Veg and non-veg options on demand.' },
    { ico: '🍂', title: 'Seasonal Experiences', desc: 'Monsoon waterfall paddles, winter stargazing meets, and summer mango harvesting.' },
  ];

  return (
    <section id="do">
      <div className="wrap">
        <span className="eyebrow rv">What you'll do</span>
        <h2 className="rv d1" style={{ marginTop: '16px' }}>
          There's no itinerary. <em>That's the whole point.</em>
        </h2>

        <div className="exp-switcher rv d2">
          <button
            className={`exp-tab ${activeTab === 'included' ? 'active' : ''}`}
            onClick={() => setActiveTab('included')}
          >
            Included Experiences
          </button>
          <button
            className={`exp-tab ${activeTab === 'addons' ? 'active' : ''}`}
            onClick={() => setActiveTab('addons')}
          >
            Add-on Experiences
          </button>
        </div>

        <div className="act-grid">
          {(activeTab === 'included' ? included : addons).map((item, idx) => (
            <div key={idx} className="act rv d1" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <span className="ico" style={{ fontSize: '28px', marginBottom: '12px' }}>{item.ico}</span>
              <h3 style={{ fontSize: '20px', fontWeight: 300, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(241,235,217,0.7)', fontWeight: 300, flexGrow: 1 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
