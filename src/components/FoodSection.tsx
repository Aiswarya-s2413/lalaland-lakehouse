import React from 'react';

export const FoodSection: React.FC = () => {
  const chips = [
    'Farm-grown vegetables',
    'Seasonal & local',
    'Adivasi recipes',
    'Breakfast to dinner',
    'BBQ on demand',
    'Homemade, always',
  ];

  return (
    <section id="food">
      <div className="narrow">
        <span className="eyebrow rv">The food</span>
        <h2 className="rv d1" style={{ marginTop: '16px' }}>
          Food the way it's <em>supposed to be.</em>
        </h2>
        <div className="prose rv d2" style={{ marginTop: '26px', maxWidth: 'none' }}>
          <p>
            Meals are part of the stay, not an add-on. We're remote, there are no restaurants nearby 
            and no guest kitchen access. So meals are mandatory, and we've made sure that's never a downside. 
            Fresh, home-style food, cooked the way it's done in Dhamni village.
          </p>
          <p>
            The kitchen belongs to Vinita, shaped over years by what the land and the village give her. 
            Vegetables come from the farm on the property. The recipes carry knowledge from the 
            Adivasi community of Dhamni — people who have been cooking this way long before 
            anyone called it farm-to-table.
          </p>
        </div>

        <div className="rv d2" style={{ marginTop: '30px', padding: '24px 28px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(241,235,217,0.1)', borderRadius: '4px' }}>
          <h3 className="mono" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--sun)', marginBottom: '14px' }}>
            Dining &amp; Pricing
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(241,235,217,0.1)', paddingBottom: '8px' }}>
              <span>Full Board (Breakfast, Lunch, High Tea &amp; Dinner)</span>
              <strong style={{ color: 'var(--sun)' }}>₹1,500 <span style={{ fontSize: '12px', fontWeight: 300, color: 'var(--day)' }}>/ person</span></strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px' }}>
              <span>BBQ Session (Mixed Veg &amp; Non-Veg, on demand)</span>
              <strong style={{ color: 'var(--sun)' }}>₹3,000 <span style={{ fontSize: '12px', fontWeight: 300, color: 'var(--day)' }}>/ session</span></strong>
            </div>
          </div>
          <p className="price-note" style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(241,235,217,0.5)' }}>
            * Meals are unhurried and seasonal. Please confirm in advance so nothing is rushed.
          </p>
        </div>

        <div className="chips rv d2">
          {chips.map((chip, idx) => (
            <span key={idx} className="chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
