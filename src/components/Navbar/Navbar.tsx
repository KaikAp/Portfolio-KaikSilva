'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContent}`}>
          <div className={styles.logo} onClick={() => handleNavClick('#home')}>
            <Image
              src="/logo.svg"
              alt="Kaik Silva Logo"
              width={120}
              height={120}
              className={styles.logoImage}
              priority
            />
          </div>

          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.navRight}>
            <button
              className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`}
              onClick={toggleTheme}
              aria-label="Alternar tema"
              id="theme-toggle"
            >
              <svg className={styles.iconSun} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <svg className={styles.iconMoon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
            <button
              className={styles.menuButton}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
              id="mobile-menu-toggle"
            >
              <div className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        <button
          className={styles.closeButton}
          onClick={() => setMobileOpen(false)}
          aria-label="Fechar menu"
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            className={styles.mobileNavLink}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
        <button
          className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : styles.light}`}
          onClick={toggleTheme}
          aria-label="Alternar tema"
          id="mobile-theme-toggle"
        >
          <svg className={styles.iconSun} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg className={styles.iconMoon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
      </div>
    </>
  );
}
