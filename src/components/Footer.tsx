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
    <footer style={{ background: '#130e0b', borderTop: '1px solid rgba(183,110,74,0.15)' }}>
      <div className="choco-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Колонка 1 — О компании */}
          <div>
            <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 mb-5 group">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--copper)' }}
              >
                <span style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1rem', fontWeight: 700, color: 'var(--cocoa)' }}>Ф</span>
              </div>
              <div style={{ fontFamily: 'Raleway, sans-serif', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1 }}>
                <span style={{ color: 'var(--cream)' }}>ФИЛОСОФИЯ </span>
                <span style={{ color: 'var(--copper)' }}>ШОКОЛАДА</span>
              </div>
            </button>
            <p style={{ fontSize: '0.83rem', color: 'rgba(239,230,217,0.48)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              Культурно-гастрономическое пространство в Туле. Ремесленный шоколад, экскурсии и мастер-классы.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { icon: 'MessageSquare', label: 'ВКонтакте' },
                { icon: 'BookOpen', label: 'Дзен' },
                { icon: 'Youtube', label: 'Rutube' },
              ].map((s, i) => (
                <button
                  key={i}
                  className="w-8 h-8 flex items-center justify-center rounded-sm transition-all duration-300"
                  style={{ border: '1px solid rgba(183,110,74,0.25)', color: 'rgba(239,230,217,0.5)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--copper)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'var(--copper)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(183,110,74,0.25)';
                    (e.currentTarget as HTMLButtonElement).style.color = 'rgba(239,230,217,0.5)';
                  }}
                  title={s.label}
                >
                  <Icon name={s.icon} size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Колонка 2 — Быстрые ссылки */}
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
                  className="text-left transition-colors duration-200 w-fit"
                  style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.5)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = 'var(--copper)'}
                  onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'rgba(239,230,217,0.5)'}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Колонка 3 — Контакты */}
          <div>
            <div className="section-label mb-5">Контакты</div>
            <div className="flex flex-col gap-3">
              {[
                { icon: 'MapPin', text: 'ул. Советская, 15, Тула' },
                { icon: 'MapPin', text: 'ул. Металлистов, 8, Тула' },
                { icon: 'Phone', text: '+7 (4872) 35-00-00' },
                { icon: 'Phone', text: '+7 (960) 600-00-00' },
                { icon: 'Mail', text: 'info@filosofiya-shokolada.ru' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Icon name={item.icon} size={13} style={{ color: 'var(--copper)', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.83rem', color: 'rgba(239,230,217,0.5)', lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Колонка 4 — Режим работы */}
          <div>
            <div className="section-label mb-5">Режим работы</div>
            <div className="mb-4">
              <div style={{ fontSize: '0.75rem', color: 'var(--copper)', marginBottom: '0.6rem', letterSpacing: '0.06em' }}>Советская, 15</div>
              {[
                { day: 'Пн — Пт', time: '10:00 — 20:00' },
                { day: 'Суббота', time: '10:00 — 21:00' },
                { day: 'Воскресенье', time: '10:00 — 20:00' },
              ].map((h, i) => (
                <div key={i} className="flex justify-between mb-1">
                  <span style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.38)' }}>{h.day}</span>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.62)' }}>{h.time}</span>
                </div>
              ))}
            </div>
            <div className="pt-3" style={{ borderTop: '1px solid rgba(183,110,74,0.12)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--copper)', marginBottom: '0.6rem', letterSpacing: '0.06em' }}>Металлистов, 8</div>
              {[
                { day: 'Пятница', time: '14:00 — 20:00' },
                { day: 'Сб — Вс', time: '11:00 — 20:00' },
              ].map((h, i) => (
                <div key={i} className="flex justify-between mb-1">
                  <span style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.38)' }}>{h.day}</span>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.62)' }}>{h.time}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.72rem', color: 'rgba(239,230,217,0.3)', marginTop: '0.75rem', lineHeight: 1.6 }}>
              * Мастер-классы — по предварительной записи
            </p>
          </div>
        </div>

        {/* Копирайт */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(183,110,74,0.1)' }}
        >
          <span style={{ fontSize: '0.75rem', color: 'rgba(239,230,217,0.28)' }}>
            © 2026 «Философия шоколада» — все права защищены.
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(239,230,217,0.28)' }}>
            Ремесленный шоколад ручной работы · Тула
          </span>
        </div>
      </div>
    </footer>
  );
}
