import React, { useState } from 'react';
import { experiencesData, educationData, certificationsData, volunteerData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Heart, CheckCircle2, ExternalLink, Smartphone } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('exp'); // 'exp' ou 'edu'

  return (
    <section id="parcours" className="section-alt">
      <div className="section-head">
        <span className="tag">PARCOURS</span>
        <h2>Expériences & Cursus Académique</h2>
        <p>
          Du développement mobile FinTech chez Revolutech à la Health-Tech chez DokitaEyes et la modélisation IA pour l'État, 
          un parcours axé sur la rigueur scientifique, l'excellence opérationnelle et l'impact.
        </p>
      </div>

      {/* Boutons bascule visibles uniquement sur smartphone */}
      <div className="parcours-toggle-wrapper">
        <div className="parcours-toggle-pill">
          <button
            type="button"
            className={`parcours-toggle-btn ${activeTab === 'exp' ? 'active' : ''}`}
            onClick={() => setActiveTab('exp')}
          >
            <Briefcase size={16} />
            <span>Expériences</span>
          </button>
          <button
            type="button"
            className={`parcours-toggle-btn ${activeTab === 'edu' ? 'active' : ''}`}
            onClick={() => setActiveTab('edu')}
          >
            <GraduationCap size={16} />
            <span>Formations</span>
          </button>
        </div>
      </div>

      <div className="experience-layout">
        {/* Left Column: Expériences Professionnelles */}
        <div className={`experience-col-wrapper ${activeTab === 'exp' ? 'show-tab' : 'hide-on-mobile'}`}>
          <h3 className="column-title">
            <Briefcase size={22} className="accent-gold" />
            <span>Expériences Professionnelles</span>
          </h3>

          <div className="timeline">
            {experiencesData.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-role">{exp.role}</h4>
                    <div className="timeline-company">{exp.company} • {exp.type}</div>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>

                <p className="timeline-desc">{exp.description}</p>

                <ul className="timeline-points">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>

                <div className="timeline-techs">
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} className="timeline-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {exp.playstoreUrl && (
                  <div style={{ marginTop: '14px' }}>
                    <a
                      href={exp.playstoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '7px 14px', fontSize: '13px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}
                      title="Voir l'application Flypoints sur le Google Play Store"
                    >
                      <Smartphone size={15} className="accent-gold" />
                      <span>Voir Flypoints sur Google Play Store</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Formations, Certifications & Engagements */}
        <div className={`edu-cert-stack experience-col-wrapper ${activeTab === 'edu' ? 'show-tab' : 'hide-on-mobile'}`}>
          <div>
            <h3 className="column-title">
              <GraduationCap size={22} className="accent-gold" />
              <span>Formations & Diplômes</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {educationData.map((edu, idx) => (
                <div key={idx} className="edu-card">
                  <span className="edu-year">{edu.year}</span>
                  <h4>{edu.diploma}</h4>
                  <div className="edu-inst">{edu.institution}</div>
                  <span className="badge-mention">{edu.mention}</span>
                  <p className="edu-details">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="column-title" style={{ marginTop: '14px' }}>
              <Award size={22} className="accent-gold" />
              <span>Certification Internationale</span>
            </h3>

            {certificationsData.map((cert, idx) => (
              <div key={idx} className="edu-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span className="edu-year">{cert.issuer}</span>
                  <span className="badge-mention" style={{ background: '#eefcf5', color: '#16834d', borderColor: '#b2f0cf' }}>
                    <CheckCircle2 size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {cert.tag}
                  </span>
                </div>
                <h4>{cert.title}</h4>
                <p className="edu-details">{cert.details}</p>

                {cert.link && (
                  <div style={{ marginTop: '12px' }}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '6px 14px', fontSize: '13px', display: 'inline-flex', gap: '6px', alignItems: 'center' }}
                      title="Vérifier la certification sur Coursera"
                    >
                      <ExternalLink size={14} className="accent-gold" />
                      <span>Vérifier le certificat sur Coursera</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            <h3 className="column-title" style={{ marginTop: '14px' }}>
              <Heart size={22} className="accent-gold" />
              <span>Engagement Associatif</span>
            </h3>

            {volunteerData.map((vol, idx) => (
              <div key={idx} className="edu-card">
                <span className="edu-year">{vol.role}</span>
                <h4>{vol.organization}</h4>
                <p className="edu-details">{vol.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
