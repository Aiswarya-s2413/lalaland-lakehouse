import React from 'react';
import houseImg from '../assets/house.png';

export const StaysSection: React.FC = () => {
  const stays = [
    {
      no: '01',
      title: 'The Lake Rooms',
      desc: 'A handful of quiet, well-made rooms built into our home — deep beds, long views, the plunge pool a few stone steps away. Quality over keys, always.',
    },
    {
      no: '02',
      title: 'The Luxury Tents',
      desc: 'Safari canvas hand-stitched in Jodhpur — insulated, blackout-lined, all-weather — pitched on ridge decks, each facing its own stretch of water.',
    },
    {
      no: '03',
      title: 'The Shack & Boat Club',
      desc: 'The open-sided heart of the estate: long table, wood fire, much-loaned library — and kayaks, boards and the silent boat, yours sunrise to sundown.',
    },
    {
      no: '04',
      title: 'The Whole Estate',
      desc: 'Taken privately, the lake-side is yours — one family or party, every room, tent and boat, and thirty-five acres with no strangers in them.',
    },
  ];

  const specs = [
    { label: 'Beds', value: 'King or twin — all configurable. 3 rooms, up to 4 per room, up to 12 guests total (Up to 14 comfortably, 16 with extra bedding)' },
    { label: 'Bathrooms', value: 'Attached to every room. Western fittings. Hot water 24/7' },
    { label: 'Views', value: 'Lake, forest, mountain — all three, through large picture windows in every room' },
    { label: 'Power & comfort', value: 'Solar-powered. Fan-cooled. Air conditioning, hot water, WiFi. Blissfully, deliberately TV-free' },
    { label: 'Linen & toiletries', value: 'Cotton bed linen, fresh towels, handwash, shower gel — all provided' },
    { label: 'Privacy', value: 'The whole property is privately yours. No shared spaces, no strangers' },
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
        <span className="eyebrow rv">Ways to stay</span>
        <h2 className="rv d1" style={{ marginTop: '16px' }}>
          A few good rooms. <em>And a lot of lake.</em>
        </h2>
        <div className="stay-grid">
          <figure className="house-photo rv">
            <img src={houseImg} alt="The estate house at dusk — laterite brick, a round plunge pool ringed with lanterns, stone steps through the forest" />
            <figcaption>The house at dusk · plunge pool, lamps &amp; forest</figcaption>
          </figure>
          <ul className="stay-list rv d2">
            {stays.map((stay, index) => (
              <li key={index}>
                <h3>
                  <i>{stay.no}</i>
                  {stay.title}
                </h3>
                <p>{stay.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rv d2" style={{ marginTop: '48px' }}>
          <h3 className="mono" style={{ fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sun)', marginBottom: '16px' }}>
            Specifications &amp; Amenities
          </h3>
          <ul className="spec" style={{ maxWidth: '760px' }}>
            {specs.map((spec, index) => (
              <li key={index}>
                <b>{spec.label}</b>
                <span>{spec.value}</span>
              </li>
            ))}
          </ul>

          <div className="tag-cloud" style={{ maxWidth: '760px' }}>
            {tags.map((tag, index) => (
              <span key={index} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
