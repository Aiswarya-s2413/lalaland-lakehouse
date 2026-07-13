import React from 'react';

export const WhyComeSection: React.FC = () => {
  const cards = [
    {
      title: 'Discover Nature',
      content: 'The world outside. Lake. Forest. Farm. Orchard. Birds. Stars. Trails. Seasons.',
    },
    {
      title: 'Rediscover Play',
      content: 'The joy of simply doing. Exploring. Playing. Creating. Trying something new.',
    },
    {
      title: 'Rediscover Connections',
      content: 'The people, places and moments that matter. Family. Friends. Stories. Bonfires.',
    },
    {
      title: 'Rediscover Yourself',
      content: 'The version of you that modern life quietly borrowed. Curiosity. Presence. Wonder. Peace. Perspective.',
    },
  ];

  return (
    <section id="why" style={{ paddingTop: '30px', paddingBottom: '40px' }}>
      <div className="narrow">
        <h2 className="rv d1" style={{ marginTop: '16px', fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 58px)', color: 'var(--day)' }}>
          Section 2: What Modern Life Takes
        </h2>
        <div className="prose rv d2" style={{ marginTop: '26px', maxWidth: 'none' }}>
          <p>
            Nobody tells you it's happening. It isn't dramatic. It's just gradually you stop noticing the sky. 
            You eat faster than you're hungry. Your best conversations are now the ones you plan to have. 
            The version of you that used to find things wonderful has just been busy.
          </p>
          <p>
            Modern life doesn't break you. It just quietly borrows from you, a little each day. Your patience. 
            Your curiosity. The ease you used to feel with the people you love most. The ideas that stopped coming.
          </p>
          <p>
            Lalaland Lakehouse exists as an antidote to all of that.
          </p>
        </div>
      </div>

      <div className="wrap">
        <div className="glass-grid">
          {cards.map((card, i) => (
            <div key={i} className={`glass-card rv d${i + 1}`}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
        
        <div className="narrow rv d3" style={{ marginTop: '36px', textAlign: 'center' }}>
          <p className="mono" style={{ fontSize: '15px', color: 'var(--sun)', letterSpacing: '0.05em' }}>
            You don't need to fix anything. You just need to arrive.
          </p>
        </div>
      </div>
    </section>
  );
};
