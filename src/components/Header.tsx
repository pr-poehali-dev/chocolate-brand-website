import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О нас' },
  { id: 'masterclasses', label: 'Мастер-классы' },
  { id: 'contacts', label: 'Контакты' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(30, 22, 18, 0.95)'
          : 'rgba(30, 22, 18, 0.6)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(183, 110, 74, 0.2)' : '1px solid transparent',
      }}
    >
      <div className="choco-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group"
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-300 group-hover:scale-110"
              style={{ background: 'var(--copper)', color: 'var(--cocoa)' }}
            >
              <span style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.1rem', fontWeight: 600 }}>Ф</span>
            </div>
            <div>
              <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.15rem', color: 'var(--cream)', lineHeight: 1.1 }}>
                Философия шоколада
              </div>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--copper)', textTransform: 'uppercase' }}>
                Тула · с 2018 года
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="relative transition-all duration-300"
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: currentPage === link.id ? 'var(--copper)' : 'var(--cream)',
                }}
              >
                {link.label}
                {currentPage === link.id && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: 'var(--copper)' }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Burger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--cream)' }}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: 'rgba(30, 22, 18, 0.98)',
            borderTop: '1px solid rgba(183, 110, 74, 0.2)',
          }}
        >
          <div className="choco-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left py-3 px-4 rounded transition-all duration-200"
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: currentPage === link.id ? 'var(--copper)' : 'var(--cream)',
                  background: currentPage === link.id ? 'rgba(183, 110, 74, 0.08)' : 'transparent',
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
