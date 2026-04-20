'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './Projects.module.css';

type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'mobile';

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  category: ProjectCategory;
  tech: string[];
  icon: string;
  github: string;
  live: string;
  status: 'active' | 'completed';
  gradient: string;
}

// Projetos removidos a pedido do usuário. Aguardando novos projetos.
const projects: Project[] = [
  {
    id: 1,
    title: 'Gerador de Senhas',
    description: 'Um aplicativo simples capaz de gerar senhas seguras customizáveis com opção de cópia.',
    type: 'Frontend',
    category: 'frontend',
    tech: ['React Native', 'Expo', 'TypeScript'],
    icon: '🔐',
    github: 'https://github.com/KaikAp/Gerador-de-Senhas-com-React-Native',
    live: 'https://gerador-de-senhas-com-react-native-ten.vercel.app',
    status: 'completed',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
  },
];

const filters: { label: string; value: ProjectCategory }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Mobile', value: 'mobile' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container" ref={ref}>
        <div
          className={styles.projectsHeader}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className={styles.projectsLabel}>Portfolio</span>
          <h2 className="section-title">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="section-subtitle">
            Uma seleção dos meus trabalhos mais recentes.
          </p>
        </div>

        <div
          className={styles.filterButtons}
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.2s',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className={`${styles.filterBtn} ${
                activeFilter === filter.value ? styles.active : ''
              }`}
              onClick={() => setActiveFilter(filter.value)}
              id={`filter-${filter.value}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={styles.projectCard}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <div className={styles.projectImage}>
                  <div
                    className={styles.projectImagePlaceholder}
                    style={{ background: project.gradient }}
                  >
                    <span className={styles.projectImageIcon}>{project.icon}</span>
                  </div>
                  <div className={styles.projectOverlay}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn} aria-label="GitHub">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.overlayBtn} aria-label="Ver ao vivo">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className={styles.projectInfo}>
                  <span className={styles.projectType}>{project.type}</span>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.tech.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.projectFooter}>
                  <div className={styles.projectLinks}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Código
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Demo
                    </a>
                  </div>
                  <div className={styles.projectStatus}>
                    <span
                      className={`${styles.statusDot} ${
                        project.status === 'active' ? styles.statusActive : styles.statusCompleted
                      }`}
                    ></span>
                    {project.status === 'active' ? 'Ativo' : 'Concluído'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className={styles.emptyState}
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out 0.4s',
            }}
          >
            <div className={styles.emptyIcon}>🚀</div>
            <h3>Projetos em breve...</h3>
            <p>Estou selecionando os melhores trabalhos da minha carreira para exibir aqui.</p>
          </div>
        )}
      </div>
    </section>
  );
}
