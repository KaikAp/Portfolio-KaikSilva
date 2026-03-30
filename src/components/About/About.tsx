'use client';

import { useInView } from '@/hooks/useInView';
import styles from './About.module.css';

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={styles.aboutFadeBottom}></div>
      <div className="container" ref={ref}>
        <div 
          className={styles.aboutContent}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Main Info Card (2/3 width) */}
          <div className={`${styles.bentoCard} ${styles.headerCard}`}>
            <span className={styles.aboutLabel}>Sobre Mim</span>
            <h2 className={styles.aboutTitle}>
              Perfil Técnico & <br />
              <span className="gradient-text">Expertise Full-Stack</span>
            </h2>
            <p className={styles.aboutDescription}>
              Sou desenvolvedor Full-Stack na <strong>Integrativa</strong>, focado na construção de 
              sistemas escaláveis e resilientes. Com sólido background em <strong>Angular</strong> e <strong>C#</strong>, 
              minha atuação une rigor técnico à visão estratégica de negócio para entregar 
              soluções que geram impacto real.
            </p>
          </div>

          {/* Stats Card (1/3 width) */}
          <div className={`${styles.bentoCard} ${styles.statsCard}`}>
            <div className={styles.statsIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeOpacity="0.3"></rect>
                <path d="M16 2v4M8 2v4M3 10h18" strokeOpacity="0.5"></path>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth="2"></path>
              </svg>
            </div>
            <div className={styles.statsNumber}>2+</div>
            <div className={styles.statsLabel}>Anos de Experiência<br />no Mercado</div>
          </div>

          {/* Main Stack */}
          <div className={`${styles.bentoCard} ${styles.infoCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" fillOpacity="0.1"></path>
                </svg>
              </div>
              <h4 className={styles.cardTitle}>Main Stack</h4>
            </div>
            <p className={styles.cardBody}>Especialista em Angular, C#, TypeScript e o ecossistema moderno de APIs com NestJS e Node.js.</p>
          </div>

          {/* Learning Now */}
          <div className={`${styles.bentoCard} ${styles.infoCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" fillOpacity="0.1"></path>
                </svg>
              </div>
              <h4 className={styles.cardTitle}>Inovação</h4>
            </div>
            <p className={styles.cardBody}>Aprofundando em Java e Arquitetura de Microsserviços para construir sistemas robustos.</p>
          </div>

          {/* Soft Skills */}
          <div className={`${styles.bentoCard} ${styles.infoCard}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2.5"></path>
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.1" fill="currentColor" fillOpacity="0.05"></circle>
                </svg>
              </div>
              <h4 className={styles.cardTitle}>Impacto</h4>
            </div>
            <p className={styles.cardBody}>Liderança técnica e comunicação executiva focada em transformar desafios técnicos em valor de negócio.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
