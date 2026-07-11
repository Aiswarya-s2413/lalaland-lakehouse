import React, { useEffect, useState } from 'react';

interface Fly {
  left: string;
  top: string;
  dx: string;
  dy: string;
  t: string;
  o: string;
}

export const InvitationSection: React.FC = () => {
  const [flies, setFlies] = useState<Fly[]>([]);

  useEffect(() => {
    const generatedFlies: Fly[] = [];
    for (let i = 0; i < 30; i++) {
      generatedFlies.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        dx: `${(Math.random() - 0.5) * 120}px`,
        dy: `${(Math.random() - 0.5) * 160}px`,
        t: `${7 + Math.random() * 8}s`,
        o: `${4 + Math.random() * 5}s`,
      });
    }
    setFlies(generatedFlies);
  }, []);

  return (
    <section className="invite" id="invite">
      <div id="flies" aria-hidden="true">
        {flies.map((fly, idx) => (
          <div
            key={idx}
            className="fly"
            style={{
              left: fly.left,
              top: fly.top,
              '--dx': fly.dx,
              '--dy': fly.dy,
              '--t': fly.t,
              '--o': fly.o,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="wrap invite-inner" style={{ position: 'relative', zIndex: 2 }}>
        <span className="eyebrow rv">By introduction</span>
        <h2 className="rv d1" style={{ marginTop: '18px' }}>
          The lake stays quiet because <em>we keep it that way.</em>
        </h2>
        <p className="lede rv d2" style={{ maxWidth: '54ch', margin: '26px auto 0', textAlign: 'center' }}>
          No booking engine, no rate card, no crowds. We host a small number of guests,
          and we like to know who's coming. Write to us — who you are, when, and what
          would make it matter. One of us will reply personally, usually the same day.
        </p>
        <a className="btn btn-sun rv d3" href="mailto:hello@lalalandlakehouse.in?subject=An%20introduction">
          hello@lalalandlakehouse.in
        </a>
        <p className="contact rv d4" style={{ marginTop: '30px' }}>
          or by referral through a guest who has stayed · WhatsApp on request
        </p>
        <p className="fine rv d4" style={{ marginTop: '54px' }}>
          Lalalandlakehouse · Home of the Dhamni Boat Club · 18°55′ N, 73°14′ E
        </p>
      </div>
    </section>
  );
};
