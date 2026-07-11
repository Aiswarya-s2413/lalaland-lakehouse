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

  const cards = [
    {
      tag: 'Now rising',
      title: 'A house of mud',
      desc: 'Cob walls of the hill\'s own soil, bamboo frame, lime plasters mixed the way the village elders remember. Cool in May, warm in January — and honest about its failures along the way.',
    },
    {
      tag: 'Eighteen seasons in',
      title: 'The food forest',
      desc: 'Mango and jackfruit in the canopy, turmeric in the shade, vegetables on mulched beds. No cold chain — a basket, a short walk, and whatever the morning calls for.',
    },
    {
      tag: 'Our teachers',
      title: 'The Adivasi way',
      desc: 'Earth building, forest foods, seed keeping, a calendar read in blossoms and birds. We hire locally, pay our teachers as teachers, and guests meet them as experts — never exhibits.',
    },
  ];

  return (
    <section id="land">
      <div className="mist-wrap" aria-hidden="true">
        <div className="mist m1"></div>
        <div className="mist m2"></div>
      </div>
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow rv">The land &amp; place</span>
        <h2 className="rv d1" style={{ marginTop: '16px' }}>
          A hilltop above a private lake, <em>in the middle of nowhere you'd expect.</em>
        </h2>
        <p className="lede rv d2">
          Lalaland sits in a remote, rural setting near Pen, Maharashtra — forest on one side,
          farmland and orchard on the other, and a lake that's entirely ours. No crowds. No noise.
          Just an immersive, nature-based escape from the city.
        </p>

        <div className="tag-cloud rv d2" style={{ marginTop: '30px' }}>
          {tags.map((tag, idx) => (
            <span key={idx} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="land-grid">
          {cards.map((card, i) => (
            <div key={i} className={`land-card rv d${i + 1}`}>
              <span className="tag">{card.tag}</span>
              <h3>
                {card.title.split(' ')[0]} <em>{card.title.split(' ').slice(1).join(' ')}</em>
              </h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
