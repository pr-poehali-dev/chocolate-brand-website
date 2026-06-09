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
        background: scrolled ? 'rgba(22,15,11,0.97)' : 'rgba(22,15,11,0.6)',
        backdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(183,110,74,0.25)' : '1px solid transparent',
      }}
    >
      <div className="choco-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => handleNav('home')} className="group flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'var(--copper)' }}
            >
              <span style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1rem', fontWeight: 700, color: 'var(--cocoa)' }}>Ф</span>
            </div>
            <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1 }}>
              <span style={{ color: 'var(--cream)' }}>ФИЛОСОФИЯ </span>
              <span style={{ color: 'var(--copper)' }}>ШОКОЛАДА</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="relative pb-1 transition-colors duration-300"
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: currentPage === link.id ? 'var(--copper)' : 'rgba(239,230,217,0.7)',
                }}
                onMouseEnter={e => { if (currentPage !== link.id) (e.currentTarget as HTMLButtonElement).style.color = 'var(--cream)'; }}
                onMouseLeave={e => { if (currentPage !== link.id) (e.currentTarget as HTMLButtonElement).style.color = 'rgba(239,230,217,0.7)'; }}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'var(--copper)' }} />
                )}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-sm"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--cream)', border: '1px solid rgba(183,110,74,0.3)' }}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ background: 'rgba(22,15,11,0.99)', borderTop: '1px solid rgba(183,110,74,0.2)' }}>
          <div className="choco-container py-3 flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left py-3.5 border-b"
                style={{
                  fontFamily: 'Raleway, sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: currentPage === link.id ? 'var(--copper)' : 'rgba(239,230,217,0.7)',
                  borderColor: 'rgba(183,110,74,0.1)',
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
