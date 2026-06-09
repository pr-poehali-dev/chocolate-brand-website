import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#150f0c', borderTop: '1px solid rgba(183,110,74,0.15)' }}>
      <div className="choco-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-sm"
                style={{ background: 'var(--copper)', color: 'var(--cocoa)' }}
              >
                <span style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1rem', fontWeight: 600 }}>Ф</span>
              </div>
              <span style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1rem', color: 'var(--cream)' }}>
                Философия шоколада
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.55)', lineHeight: 1.7 }}>
              Пространство, где история тульского шоколада встречается с современным ремесленным искусством.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: 'MessageSquare', label: 'ВК' },
                { icon: 'BookOpen', label: 'Дзен' },
                { icon: 'Youtube', label: 'Rutube' },
                { icon: 'Users', label: 'ОК' },
              ].map((s) => (
                <button
                  key={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-sm transition-all duration-300 hover:scale-110"
                  style={{
                    border: '1px solid rgba(183,110,74,0.3)',
                    color: 'var(--copper)',
                  }}
                  title={s.label}
                >
                  <Icon name={s.icon} size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="section-label mb-5">Навигация</div>
            <div className="flex flex-col gap-2.5">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О нас' },
                { id: 'masterclasses', label: 'Мастер-классы' },
                { id: 'contacts', label: 'Контакты' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-left transition-colors duration-200"
                  style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.55)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--copper)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(239,230,217,0.55)')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div className="section-label mb-5">Контакты</div>
            <div className="flex flex-col gap-3">
              {[
                { icon: 'MapPin', text: 'Тула, пр. Ленина, 44' },
                { icon: 'Phone', text: '+7 (4872) 35-00-00' },
                { icon: 'Mail', text: 'info@filosofiya-shokolada.ru' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Icon name={item.icon} size={14} style={{ color: 'var(--copper)', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.55)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="section-label mb-5">Часы работы</div>
            <div className="flex flex-col gap-2.5">
              {[
                { day: 'Пн — Пт', time: '10:00 — 20:00' },
                { day: 'Суббота', time: '10:00 — 21:00' },
                { day: 'Воскресенье', time: '11:00 — 19:00' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span style={{ fontSize: '0.8rem', color: 'rgba(239,230,217,0.45)' }}>{item.day}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--cream)' }}>{item.time}</span>
                </div>
              ))}
              <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(183,110,74,0.15)' }}>
                <span
                  className="inline-flex items-center gap-1.5 text-xs"
                  style={{ color: '#5a9e5a' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Сейчас открыто
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(183,110,74,0.1)' }}
        >
          <span style={{ fontSize: '0.75rem', color: 'rgba(239,230,217,0.3)' }}>
            © 2024 Философия шоколада. Тула, Россия.
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(239,230,217,0.3)' }}>
            Ремесленный шоколад ручной работы
          </span>
        </div>
      </div>
    </footer>
  );
}
