import React from 'react';
import { valuesData } from '../data/portfolioData';

export default function ValuesBanner() {
  return (
    <section className="vision-section">
      <div className="vision-glow"></div>

      <div className="vision-content">
        <h2 className="vision-title">
          Une Vision Portée par la <span className="accent">Rigueur</span> et l'<span className="accent">Innovation</span>
        </h2>
        <p className="vision-desc">
          Les meilleurs projets technologiques naissent d'une compréhension intime des besoins,
          d'une modélisation rigoureuse et d'une exécution sans compromis sur la qualité logicielle.
        </p>

        <div className="values-grid">
          {valuesData.map((val, idx) => (
            <div key={idx} className="value-item">
              <div className="value-number">{val.number}</div>
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
