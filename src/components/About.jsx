import React from 'react';
import profilePhoto from '../assets/profile-portrait.jpg';
import { personalInfo } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="a-propos">
      <div className="section-head">
        <span className="tag">QUI SUIS-JE ?</span>
        <p style={{ marginTop: '14px' }}>
          Découvrez mon parcours, ma vision et mon approche orientée vers la création
          de solutions logicielles et de modèles d'IA à forte valeur ajoutée.
        </p>
      </div>

      {/* Side-by-side: Photo agrandie + Narrative */}
      <div className="about-hero-split">
        {/* Photo Column */}
        <div className="about-photo-wrapper">
          <div className="about-photo-frame">
            <img
              src={profilePhoto}
              alt="CHAKPALI Ahlin Espoir - Concepteur Développeur Full Stack & IA"
              className="about-photo-img"
            />
          </div>
          <div className="about-photo-caption">
            <h3 className="caption-fullname">
              <span className="caption-surname">CHAKPALI</span> Ahlin Espoir
            </h3>
            <p className="caption-title">Concepteur Développeur Full Stack & IA</p>
          </div>
        </div>

        {/* Narrative Column */}
        <div className="about-narrative-col">
          <h3 className="about-narrative-title">
            Transformer des problématiques complexes en architectures logicielles fiables
          </h3>

          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className="about-narrative-p">{paragraph}</p>
          ))}

          <div className="about-quote">
            « Mon objectif : allier la puissance de l'intelligence artificielle et l'ingénierie logicielle pour concevoir des applications web et mobiles qui résolvent des défis concrets. »
          </div>

          <div className="about-checks">
            <div className="check-item">
              <CheckCircle2 size={18} className="accent-gold" />
              <span>Licence IA & Big Data (Mention Bien)</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={18} className="accent-gold" />
              <span>Certifié Google Data Analytics</span>
            </div>
            <div className="check-item">
              <CheckCircle2 size={18} className="accent-gold" />
              <span>BAC II Série C4 (Mention Bien)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
