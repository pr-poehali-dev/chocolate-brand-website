import { useState } from 'react';
import Icon from '@/components/ui/icon';

const locations = [
  {
    name: 'Советская, 15',
    address: 'ул. Советская, 15, Тула',
    phone: '+7 (4872) 35-00-00',
    hours: [
      { day: 'Пн — Пт', time: '10:00 — 20:00' },
      { day: 'Суббота', time: '10:00 — 21:00' },
      { day: 'Воскресенье', time: '10:00 — 20:00' },
    ],
    icon: 'Store',
    tag: 'Экскурсии, магазин',
  },
  {
    name: 'Металлистов, 8',
    address: 'ул. Металлистов, 8, Тула',
    phone: '+7 (960) 600-00-00',
    hours: [
      { day: 'Пятница', time: '14:00 — 20:00' },
      { day: 'Суббота', time: '11:00 — 20:00' },
      { day: 'Воскресенье', time: '11:00 — 19:00' },
    ],
    icon: 'Paintbrush',
    tag: 'Мастер-классы',
  },
];

const socials = [
  { label: 'ВКонтакте', icon: 'MessageSquare', handle: '@filosofiya_shokolada' },
  { label: 'Дзен', icon: 'BookOpen', handle: '@filosofiya_shokolada' },
  { label: 'Rutube', icon: 'Youtube', handle: '@filosofiya_shokolada' },
  { label: 'Одноклассники', icon: 'Users', handle: '@filosofiya_shokolada' },
];

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '42vh',
          background: 'linear-gradient(135deg, #160f0b 0%, #241610 50%, #160f0b 100%)',
          borderBottom: '1px solid rgba(183,110,74,0.15)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(183,110,74,0.07) 0%, transparent 60%)' }}
        />
        <div className="choco-container pb-16 pt-36 relative">
          <div className="section-label mb-4">Связь</div>
          <h1 className="choco-heading" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            Контакты и локации
          </h1>
          <div className="divider-copper" />
          <p style={{ maxWidth: '480px', fontSize: '0.95rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.78 }}>
            Два пространства в центре Тулы — приходите к нам в гости или свяжитесь онлайн.
          </p>
        </div>
      </section>

      {/* 4.2 Две карточки локаций */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <div key={i} className="choco-card">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0"
                    style={{ background: 'rgba(183,110,74,0.12)', border: '1px solid rgba(183,110,74,0.25)' }}
                  >
                    <Icon name={loc.icon} size={18} style={{ color: 'var(--copper)' }} />
                  </div>
                  <div>
                    <h3 className="choco-subheading" style={{ fontSize: '1.4rem' }}>{loc.name}</h3>
                    <span style={{ fontSize: '0.7rem', color: 'var(--copper)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{loc.tag}</span>
                  </div>
                </div>
                <div className="divider-copper" style={{ marginBottom: '1.25rem' }} />
                <div className="flex items-center gap-2 mb-3">
                  <Icon name="MapPin" size={14} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.7)' }}>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 mb-5">
                  <Icon name="Phone" size={14} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.7)' }}>{loc.phone}</span>
                  <button onClick={() => handleCopy(loc.phone)} title="Копировать телефон" className="ml-1">
                    <Icon name={copied === loc.phone ? 'Check' : 'Copy'} size={13} style={{ color: copied === loc.phone ? '#5a9e5a' : 'rgba(183,110,74,0.5)' }} />
                  </button>
                </div>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(183,110,74,0.12)' }}>
                  <div className="section-label mb-2.5" style={{ fontSize: '0.65rem' }}>Режим работы</div>
                  <div className="flex flex-col gap-1.5">
                    {loc.hours.map((h, j) => (
                      <div key={j} className="flex justify-between">
                        <span style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.45)' }}>{h.day}</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--cream)' }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.3 Карта */}
      <section className="pb-0">
        <div className="choco-container">
          <div className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(183,110,74,0.2)' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617534%2C54.193122&z=15&pt=37.617534,54.193122,pm2rdm"
              width="100%"
              height="420"
              frameBorder="0"
              allowFullScreen
              title="Карта — Философия шоколада"
              style={{ filter: 'sepia(25%) saturate(0.8)', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 4.4 Соцсети + 4.5 Форма */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Соцсети */}
            <div>
              <div className="section-label mb-4">Соцсети</div>
              <h2 className="choco-heading mb-6" style={{ fontSize: '2.2rem' }}>Мы в социальных сетях</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.52)', lineHeight: 1.78, marginBottom: '2rem' }}>
                Следите за нашими новостями, рецептами и анонсами мастер-классов.
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-sm cursor-pointer transition-all duration-300"
                    style={{ border: '1px solid rgba(183,110,74,0.15)', background: 'rgba(255,255,255,0.02)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(183,110,74,0.4)';
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(183,110,74,0.05)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(183,110,74,0.15)';
                      (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                    }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: 'rgba(183,110,74,0.1)' }}>
                      <Icon name={s.icon} size={18} style={{ color: 'var(--copper)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--cream)', marginBottom: '0.15rem' }}>{s.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(239,230,217,0.38)' }}>{s.handle}</div>
                    </div>
                    <Icon name="ArrowRight" size={15} style={{ color: 'var(--copper)', marginLeft: 'auto', opacity: 0.4 }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Форма */}
            <div>
              <div className="section-label mb-4">Обратная связь</div>
              <h2 className="choco-heading mb-6" style={{ fontSize: '2.2rem' }}>Напишите нам</h2>
              <div className="divider-copper" />
              {submitted ? (
                <div className="text-center py-10 mt-6 rounded-sm" style={{ background: 'rgba(183,110,74,0.08)', border: '1px solid rgba(183,110,74,0.3)' }}>
                  <div className="text-3xl mb-3">✓</div>
                  <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.6rem', color: 'var(--copper)' }}>Спасибо за сообщение!</div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.45)', marginTop: '0.5rem' }}>Мы ответим в течение нескольких часов</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
                  <input
                    className="choco-input"
                    placeholder="Имя *"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    className="choco-input"
                    type="email"
                    placeholder="E-mail *"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                  />
                  <textarea
                    className="choco-input"
                    placeholder="Сообщение *"
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    style={{ resize: 'none' }}
                  />
                  <button type="submit" className="btn-copper w-full justify-center">
                    <Icon name="Send" size={15} />
                    Отправить
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
