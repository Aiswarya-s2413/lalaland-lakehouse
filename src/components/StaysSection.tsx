import React from 'react';
import houseImg from '../assets/house.png';

export const StaysSection: React.FC = () => {
  const specs = [
    { label: 'Beds', value: 'King or twin — all configurable. 3 rooms, up to 4 per room, up to 12 guests total.' },
    { label: 'Bathrooms', value: 'Attached to every room. Western fittings. Hot water 24/7.' },
    { label: 'Views', value: 'Lake, forest, mountain — all three, through large picture windows in every room.' },
    { label: 'Power & comfort', value: 'Solar-powered. Fan-cooled. AC available. Blissfully, deliberately TV-free.' },
    { label: 'Linen & toiletries', value: 'Cotton bed linen, fresh towels, handwash, shower gel — all provided.' },
    { label: 'Privacy', value: 'The whole property is privately yours. No shared spaces, no strangers.' },
  ];

  const details = [
    { label: 'Bedrooms', value: '3 bedrooms, attached bathrooms' },
    { label: 'Comfort', value: 'Air conditioning, hot water, WiFi' },
    { label: 'Capacity', value: 'Up to 14 comfortably, 16 with extra bedding' },
    { label: 'Shared spaces', value: 'Living area & dining space for everyone' },
  ];

  const tags = [
    'Attached bathrooms',
    'Air conditioning',
    'Hot water 24/7',
    'WiFi',
    'Shared living areas',
    'Dining space',
    'Solar-powered',
    'Fully private',
  ];

  return (
    <section id="stays">
      <div className="wrap">
        <span className="eyebrow rv">Stays</span>
        <h2 className="rv d1" style={{ marginTop: '16px', fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 58px)', color: 'var(--day)' }}>
          Your Home Here
        </h2>
        <p className="lede rv d2" style={{ color: 'var(--sun)', fontFamily: 'var(--mono)', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '10px' }}>
          A home, not a hotel.
        </p>
        <p className="lede rv d2" style={{ marginTop: '6px', fontWeight: 500 }}>
          Rooms in the house, views for days.
        </p>
        <p className="lede rv d2" style={{ marginTop: '12px' }}>
          A handful of quiet, well-made rooms built into our home — laterite brick, deep beds, long views. Wake to birdsong. Sleep to absolutely nothing.
        </p>

        <div className="stay-grid" style={{ alignItems: 'flex-start' }}>
          <figure className="house-photo rv" style={{ marginTop: '24px' }}>
            <img src={houseImg} alt="The estate house at dusk — laterite brick, a round plunge pool ringed with lanterns, stone steps through the forest" />
            <figcaption>The house at dusk</figcaption>
          </figure>
          
          <div className="rv d2" style={{ marginTop: '24px' }}>
            <ul className="spec" style={{ listStyle: 'none', paddingLeft: 0 }}>
              {specs.map((spec, index) => (
                <li key={index} style={{ padding: '12px 0', borderBottom: '1px dashed rgba(241,235,217,0.16)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <b style={{ color: 'var(--sun)', fontFamily: 'var(--mono)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {spec.label}
                  </b>
                  <span style={{ fontSize: '15px', color: 'rgba(241,235,217,0.85)', fontWeight: 300 }}>{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rv d2" style={{ marginTop: '48px', padding: '28px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(241,235,217,0.1)', borderRadius: '4px', maxWidth: '760px' }}>
          <div className="numbers" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px 24px', marginTop: 0 }}>
            {details.map((detail, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="mono" style={{ fontSize: '10.5px', color: 'var(--sun)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  {detail.label}
                </span>
                <span style={{ fontSize: '18px', fontFamily: 'var(--display)', fontWeight: 300, color: 'var(--day)' }}>
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="tag-cloud rv d2" style={{ marginTop: '36px', maxWidth: '760px' }}>
          {tags.map((tag, index) => (
            <span key={index} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
