import React from 'react';

export const WhoRediscoversSection: React.FC = () => {
  const cards = [
    {
      ico: '🏍️',
      title: 'The Bikers',
      focus: 'Rediscover: the joy of the road',
      desc: '21 km of winding reserve forest to get here. Single lane, uneven, alive. The kind of road that reminds you why you ride. The destination is worth every bend.',
    },
    {
      ico: '🌿',
      title: 'Nature Lovers',
      focus: 'Discover: the world as it actually is',
      desc: '35 acres, 2 km of shoreline, a sky at night that makes city people go quiet. A reminder that most of the world looks like this, not like a screen.',
    },
    {
      ico: '🏕️',
      title: 'Outdoor Enthusiasts',
      focus: 'Discover: your body in the open',
      desc: 'Trails, lake access, birding, bonfires, cricket in the clearing. Days full without a single agenda item. You set the pace. The land sets the scene.',
    },
    {
      ico: '🌅',
      title: 'Slow-Living Seekers',
      focus: 'Discover: the pleasure of doing less',
      desc: 'The jhoola. The hammock. A book and nowhere to be. A home-cooked lunch from the farm. This is what you\'ve been quietly craving for months.',
    },
    {
      ico: '✍️',
      title: 'Writers & Creatives',
      focus: 'Rediscover: your voice',
      desc: 'Ideas that have been stuck for months tend to move again here. Something about the light, the silence, and the absence of everything competing for your attention.',
    },
    {
      ico: '👨‍👩‍👧',
      title: 'Families & Groups',
      focus: 'Rediscover: each other',
      desc: 'Up to 12, entirely private. Kids who forget screens exist. Adults who remember why they became friends. Conversations that go somewhere true.',
    },
  ];

  return (
    <section id="who" style={{ paddingTop: '40px' }}>
      <div className="wrap">
        <span className="eyebrow rv">Who comes here</span>
        <h2 className="rv d1" style={{ marginTop: '16px' }}>
          All kinds — drawn by the <em>same quiet feeling.</em>
        </h2>
        <p className="lede rv d2">
          What guests share is a sense that life has been moving too fast, and a readiness
          — even if they can't name it yet — to let it slow down for a few days. Some
          arrive knowing exactly why. Others figure it out somewhere between the lake walk
          and the bonfire.
        </p>
        <div className="who-grid">
          {cards.map((card, i) => (
            <div key={i} className={`who-card rv d${(i % 3) + 1}`}>
              <span className="ico">{card.ico}</span>
              <h3>{card.title}</h3>
              <p style={{ color: 'var(--sun)', fontSize: '12px', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                {card.focus}
              </p>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
