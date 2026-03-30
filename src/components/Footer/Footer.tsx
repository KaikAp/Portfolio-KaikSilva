'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolagem suave manual (mais robusta contra configurações do navegador/OS)
  const smoothScrollTo = (targetY: number, duration: number = 800) => {
    const startY = window.pageYOffset;
    const difference = targetY - startY;
    const startTime = performance.now();

    function step() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Função de ease (ease-in-out cubic)
      const ease = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      window.scrollTo(0, startY + (difference * ease(progress)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  };

  const handleScroll = (e?: React.MouseEvent, href?: string) => {
    if (e) e.preventDefault();
    
    if (href === '#home' || !href) {
      smoothScrollTo(0);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset;
      smoothScrollTo(top);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Image
                src="/logo.svg"
                alt="Kaik Silva Logo"
                width={120}
                height={120}
                className={styles.footerLogoImage}
              />
            </div>
            <p className={styles.footerDescription}>
              Desenvolvedor Full-Stack focado em arquiteturas escaláveis e soluções robustas com o ecossistema Microsoft.
            </p>
            <div className={styles.footerSocials}>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerSocialLink}
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className={styles.footerSocialLink}
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4>Navegação</h4>
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className={styles.footerLink}>Início</a>
            <a href="#about" onClick={(e) => handleScroll(e, '#about')} className={styles.footerLink}>Sobre</a>
            <a href="#skills" onClick={(e) => handleScroll(e, '#skills')} className={styles.footerLink}>Skills</a>
            <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className={styles.footerLink}>Projetos</a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className={styles.footerLink}>Contato</a>
          </div>

          <div className={styles.footerColumn}>
            <h4>Tecnologias</h4>
            <div className={styles.techGroup}>
              <h5>Linguagens</h5>
              <span>C# / TypeScript</span>
            </div>
            <div className={styles.techGroup}>
              <h5>Back-End</h5>
              <span>.NET Core / NestJS</span>
            </div>
            <div className={styles.techGroup}>
              <h5>Front-End</h5>
              <span>Angular / TypeScript</span>
            </div>
            <div className={styles.techGroup}>
              <h5>Banco de Dados</h5>
              <span>SQL Server / PostgreSQL</span>
            </div>
            <div className={styles.techGroup}>
              <h5>Cloud</h5>
              <span>Azure / AWS</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © {new Date().getFullYear()} Kaik Silva.
          </p>
        </div>
      </div>

      <button
        className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}
        onClick={(e) => handleScroll(e, '#home')}
        aria-label="Voltar ao início"
        style={{
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        ↑
      </button>
    </footer>
  );
}
