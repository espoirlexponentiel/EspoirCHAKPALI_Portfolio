import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Brain, Code2, Smartphone, BarChart3, Check } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Code2: Code2,
  Smartphone: Smartphone,
  BarChart3: BarChart3
};

export default function Skills() {
  return (
    <section id="expertises">
      <div className="section-head">
        <span className="tag">SAVOIR-FAIRE</span>
        <h2>Mes Piliers d'Expertise Technique</h2>
        <p>
          Un ensemble cohérent de compétences modernes pour concevoir, modéliser,
          développer et orchestrer des solutions logicielles complètes et résilientes.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Code2;
          return (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon-wrap">
                  <IconComponent size={26} />
                </div>
                <div>
                  <h3>{skill.title}</h3>
                </div>
              </div>

              <p className="skill-desc">{skill.description}</p>

              <div className="skill-tags">
                {skill.tags.map((tag, idx) => (
                  <span key={idx} className="skill-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
