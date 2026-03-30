'use client';

import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { siteConfig } from '@/config/siteConfig';

const titles = ['Full-Stack Developer'];

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const title = titles[currentTitle];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(title.substring(0, displayText.length + 1));
          if (displayText.length === title.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(title.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentTitle((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLeft}>
          <div className={styles.greeting}>
            <span className={styles.greetingEmoji}>👋</span>
            Olá, eu sou
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>Kaik Silva</span>
            <span className={`${styles.heroTitleLine} gradient-text`}>
              <span className={styles.typewriter}>{displayText}</span>
            </span>
          </h1>

          <p className={styles.heroSubtitle}>
            Construindo soluções web robustas e escaláveis com{' '}
            <strong>Angular</strong>, <strong>C#</strong> e <strong>NestJS</strong>.
            Focado em código limpo, performance e em entregar resultados de alto valor.
          </p>

          <div className={styles.stackTags}>
            {['Angular', 'C#', 'TypeScript', 'NestJS', 'Node.js', 'Docker'].map((tech) => (
              <span key={tech} className={styles.stackTag}>{tech}</span>
            ))}
          </div>

          <div className={styles.heroButtons}>
            <button
              className={styles.btnPrimary}
              onClick={() => handleScroll('#projects')}
              id="home-cta-projects"
            >
              <span>Ver Projetos</span>
              <span>→</span>
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => handleScroll('#contact')}
              id="home-cta-contact"
            >
              Fale Comigo
            </button>
          </div>

          <div className={styles.heroSocials}>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
              id="social-github"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
              id="social-linkedin"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className={styles.socialLink}
              aria-label="Email"
              id="social-email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroVisual}>
            <div className={`${styles.heroOrb} ${styles.heroOrb1}`}></div>
            <div className={`${styles.heroOrb} ${styles.heroOrb2}`}></div>
            <div className={`${styles.heroOrb} ${styles.heroOrb3}`}></div>

            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <span className={`${styles.codeDot} ${styles.codeDotRed}`}></span>
                <span className={`${styles.codeDot} ${styles.codeDotYellow}`}></span>
                <span className={`${styles.codeDot} ${styles.codeDotGreen}`}></span>
              </div>
              <code>
                <span className={styles.codeLine}>
                  <span className={styles.codeKeyword}>const</span>{' '}
                  <span className={styles.codeFunction}>kaik</span> = {'{'}
                </span>
                <span className={styles.codeLine}>
                  {'  '}cargo: <span className={styles.codeString}>&quot;Full-Stack Dev&quot;</span>,
                </span>
                <span className={styles.codeLine}>
                  {'  '}stack: [<span className={styles.codeString}>&quot;Angular&quot;</span>,{' '}
                  <span className={styles.codeString}>&quot;C#&quot;</span>,{' '}
                  <span className={styles.codeString}>&quot;NestJS&quot;</span>],
                </span>
                <span className={styles.codeLine}>
                  {'  '}disponivel: <span className={styles.codeString}>true</span>,
                </span>
                <span className={styles.codeLine}>
                  <span className={styles.codeBracket}>{'}'}</span>;
                </span>
              </code>
            </div>
          </div>
        </div>
      </div>

      <div
        className={styles.scrollIndicator}
        style={{
          opacity: scrolled ? 0 : 1,
          transform: scrolled ? 'translateX(-50%) translateY(20px)' : 'translateX(-50%) translateY(0)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          pointerEvents: scrolled ? 'none' : 'auto',
        }}
      >
        <div className={styles.scrollMouse}></div>
        <span>Role para baixo</span>
      </div>
    </section>
  );
}
