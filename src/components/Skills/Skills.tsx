'use client';

import { useInView } from '@/hooks/useInView';
import styles from './Skills.module.css';

const skillCategories = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: 'Frontend',
    description: 'Interfaces modernas e responsivas',
    skills: ['Angular', 'TypeScript', 'Next.js', 'React'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-9m3 3H7m0-6h10"></path>
        <rect x="2" y="5" width="20" height="14" rx="2"></rect>
        <path d="M6 12h4m2 0h2m-6 3h6"></path>
      </svg>
    ),
    title: 'Backend',
    description: 'APIs robustas e escaláveis',
    skills: ['C# / .NET', 'NestJS', 'Node.js', 'Java'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    title: 'Banco de Dados',
    description: 'Persistência e modelagem de dados',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'SqlServer'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1V11a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V11a1.65 1.65 0 0 0 1.51 1H11a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51z"></path>
      </svg>
    ),
    title: 'DevOps & Ferramentas',
    description: 'Deploy e produtividade',
    skills: ['Docker', 'Git'],
  },
];

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className={styles.skillsFadeBottom}></div>
      <div className="container" ref={ref}>
        <div
          className={styles.skillsHeader}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className={styles.skillsLabel}>Habilidades</span>
          <h2 className="section-title">
            Minhas <span className="gradient-text">Competências</span> Tecnológicas
          </h2>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={styles.skillCategory}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s ease-out ${index * 0.15}s`,
              }}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <p className={styles.categoryDescription}>{category.description}</p>
                </div>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>
                    <span className={styles.skillDot}></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
