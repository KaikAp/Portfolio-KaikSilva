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
const projects: Project[] = [];

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
                {/* ... existing card code ... */}
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
