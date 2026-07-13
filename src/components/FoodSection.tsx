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
        <h2 className="rv d1" style={{ marginTop: '16px', fontFamily: 'var(--display)', fontWeight: 300, fontSize: 'clamp(32px, 5vw, 58px)', color: 'var(--day)' }}>
          Food at Lalaland
        </h2>
        <div className="prose rv d2" style={{ marginTop: '26px', maxWidth: 'none' }}>
          <p>
            Meals are part of the stay, not an add-on.
            We're remote, there are no restaurants nearby and no guest kitchen access. So meals are 
            mandatory, and we've made sure that's never a downside. Fresh, home-style food, cooked 
            the way it's done in Dhamni village.
          </p>
          <p>
            The kitchen belongs to Vinita, shaped over years by what the land and the village give her. 
            Vegetables come from the farm on the property. The recipes carry knowledge from the 
            Adivasi community of Dhamni — people who have been cooking this way long before 
            anyone called it farm-to-table.
          </p>
        </div>

        <div className="chips rv d2" style={{ marginTop: '30px' }}>
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
