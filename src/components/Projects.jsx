import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Code2, FolderGit2, Smartphone } from 'lucide-react';
import { GithubIcon } from './Icons';

const filterCategories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'ai', label: 'IA & Machine Learning' },
  { id: 'data', label: 'Data Analytics & Big Data' },
  { id: 'web', label: 'Full Stack Web' },
  { id: 'mobile', label: 'Mobile & FinTech' },
  { id: 'tools', label: 'Outils & Utilitaires' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projets">
      <div className="section-head">
        <span className="tag">PORTFOLIO</span>
        <h2>Projets & Réalisations Phares</h2>
        <p>
          Découvrez une sélection de mes travaux concrets en Intelligence Artificielle, 
          analyse de données décisionnelle, applications mobiles et plateformes fullstack.
        </p>
      </div>

      <div className="projects-filters">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-header">
              <span className="project-cat-badge">{project.categoryLabel}</span>
              <FolderGit2 size={20} className="project-icon-top accent-gold" />
            </div>

            <div className="project-card-body">
              <h3>{project.title}</h3>
              <div className="project-subtitle">{project.subtitle}</div>

              {project.highlight && (
                <div className="project-highlight-badge">
                  <span>{project.highlight}</span>
                </div>
              )}

              <p className="project-desc">{project.description}</p>

              <div className="project-tech-list">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="project-tech-item">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-card-actions">
                {project.playstoreUrl ? (
                  <a
                    href={project.playstoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    title="Voir l'application sur le Google Play Store"
                    style={{ background: 'var(--gold-light)', borderColor: 'var(--gold-border)', color: 'var(--navy-deep)', fontWeight: '700' }}
                  >
                    <Smartphone size={15} className="accent-gold" />
                    <span>Voir sur Google Play Store</span>
                    <ExternalLink size={13} style={{ marginLeft: '4px' }} />
                  </a>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    title="Voir le code source sur GitHub"
                  >
                    <GithubIcon size={15} />
                    <span>Dépôt GitHub</span>
                  </a>
                ) : (
                  <span className="project-link-badge">
                    <Smartphone size={15} className="accent-gold" />
                    <span>Application Google Play Store</span>
                  </span>
                )}

                {project.secondaryGithub && (
                  <a
                    href={project.secondaryGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    title="Voir le backend sur GitHub"
                  >
                    <Code2 size={15} />
                    <span>Backend</span>
                  </a>
                )}

                {project.managerGithub && (
                  <a
                    href={project.managerGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    title="Voir le manager sur GitHub"
                  >
                    <Code2 size={15} />
                    <span>Manager</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
