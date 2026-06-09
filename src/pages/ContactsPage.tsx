import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', contact: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const locations = [
    {
      name: 'Главный магазин',
      address: 'г. Тула, пр. Ленина, 44',
      hours: [
        { day: 'Пн — Пт', time: '10:00 — 20:00' },
        { day: 'Суббота', time: '10:00 — 21:00' },
        { day: 'Воскресенье', time: '11:00 — 19:00' },
      ],
      phones: ['+7 (4872) 35-00-00'],
      desc: 'Основное пространство с выставочным залом, дегустационным залом и магазином авторской продукции.',
      icon: 'Store',
    },
    {
      name: 'Мастерская на Металлистов',
      address: 'г. Тула, ул. Металлистов, 12',
      hours: [
        { day: 'Пятница', time: '14:00 — 20:00' },
        { day: 'Суббота', time: '11:00 — 20:00' },
        { day: 'Воскресенье', time: '11:00 — 19:00' },
      ],
      phones: ['+7 (960) 600-00-00'],
      desc: 'Камерная площадка для мастер-классов, частных мероприятий и корпоративных заказов.',
      icon: 'Wrench',
    },
  ];

  const socials = [
    { label: 'ВКонтакте', icon: 'MessageSquare', handle: '@filosofiya_shokolada' },
    { label: 'Дзен', icon: 'BookOpen', handle: 'zen.yandex.ru/filosofiya' },
    { label: 'Rutube', icon: 'Youtube', handle: 'Философия шоколада' },
    { label: 'Одноклассники', icon: 'Users', handle: 'ok.ru/filosofiya' },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '40vh',
          background: 'linear-gradient(135deg, rgba(30,22,18,1) 0%, rgba(40,28,22,1) 100%)',
          borderBottom: '1px solid rgba(183,110,74,0.15)',
        }}
      >
        <div className="choco-container pb-16 pt-36">
          <div className="section-label mb-4">Связь</div>
          <h1 className="choco-heading" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            Будем рады<br />
            <em style={{ color: 'var(--copper)', fontStyle: 'italic' }}>вашему визиту</em>
          </h1>
          <div className="divider-copper" />
        </div>
      </section>

      {/* Locations */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Адреса</div>
            <h2 className="choco-heading">Наши пространства</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <div key={i} className="choco-card">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-sm"
                    style={{ background: 'rgba(183,110,74,0.12)', border: '1px solid rgba(183,110,74,0.25)' }}
                  >
                    <Icon name={loc.icon} size={18} style={{ color: 'var(--copper)' }} />
                  </div>
                  <h3 className="choco-subheading" style={{ fontSize: '1.35rem' }}>{loc.name}</h3>
                </div>
                <div className="divider-copper" style={{ marginBottom: '1.25rem' }} />
                <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.55)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {loc.desc}
                </p>
                <div className="flex items-start gap-2 mb-3">
                  <Icon name="MapPin" size={14} style={{ color: 'var(--copper)', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.7)' }}>{loc.address}</span>
                </div>
                {loc.phones.map((phone, j) => (
                  <div key={j} className="flex items-center gap-2 mb-3">
                    <Icon name="Phone" size={14} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.7)' }}>{phone}</span>
                    <button onClick={() => handleCopy(phone)} title="Скопировать">
                      <Icon
                        name={copied === phone ? 'Check' : 'Copy'}
                        size={13}
                        style={{ color: copied === phone ? '#5a9e5a' : 'rgba(183,110,74,0.5)' }}
                      />
                    </button>
                  </div>
                ))}
                <div
                  className="mt-4 pt-4 flex flex-col gap-2"
                  style={{ borderTop: '1px solid rgba(183,110,74,0.12)' }}
                >
                  <div className="section-label" style={{ fontSize: '0.65rem', marginBottom: '0.25rem' }}>Часы работы</div>
                  {loc.hours.map((h, j) => (
                    <div key={j} className="flex justify-between">
                      <span style={{ fontSize: '0.8rem', color: 'rgba(239,230,217,0.45)' }}>{h.day}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--cream)' }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0 pt-0">
        <div className="choco-container">
          <div className="rounded-sm overflow-hidden" style={{ border: '1px solid rgba(183,110,74,0.2)' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617534%2C54.193122&z=15&pt=37.617534,54.193122,pm2rdm"
              width="100%"
              height="420"
              frameBorder="0"
              allowFullScreen
              title="Карта — Философия шоколада"
              style={{ filter: 'sepia(30%) saturate(0.8)', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Socials + form */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Socials */}
            <div>
              <div className="section-label mb-4">Соцсети</div>
              <h2 className="choco-heading mb-6" style={{ fontSize: '2.2rem' }}>Мы в социальных сетях</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.55)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Следите за нашими новостями, рецептами и анонсами мастер-классов в социальных сетях.
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-sm transition-all duration-300 cursor-pointer group"
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
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0"
                      style={{ background: 'rgba(183,110,74,0.1)' }}
                    >
                      <Icon name={s.icon} size={18} style={{ color: 'var(--copper)' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--cream)', marginBottom: '0.15rem' }}>{s.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(239,230,217,0.4)' }}>{s.handle}</div>
                    </div>
                    <Icon name="ArrowRight" size={16} style={{ color: 'var(--copper)', marginLeft: 'auto', opacity: 0.5 }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="section-label mb-4">Обратная связь</div>
              <h2 className="choco-heading mb-6" style={{ fontSize: '2.2rem' }}>Напишите нам</h2>
              <div className="divider-copper" />

              {submitted ? (
                <div
                  className="text-center py-10 mt-6 rounded-sm"
                  style={{ background: 'rgba(183,110,74,0.08)', border: '1px solid rgba(183,110,74,0.3)' }}
                >
                  <div className="text-3xl mb-3">✓</div>
                  <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.6rem', color: 'var(--copper)' }}>
                    Спасибо за сообщение!
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.5)', marginTop: '0.5rem' }}>
                    Мы ответим в течение нескольких часов
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
                  <input
                    className="choco-input"
                    placeholder="Ваше имя *"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    className="choco-input"
                    placeholder="Телефон или email *"
                    value={form.contact}
                    onChange={e => setForm({ ...form, contact: e.target.value })}
                    required
                  />
                  <textarea
                    className="choco-input"
                    placeholder="Ваше сообщение *"
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    style={{ resize: 'none' }}
                  />
                  <button type="submit" className="btn-copper w-full justify-center">
                    <Icon name="Send" size={16} />
                    Отправить сообщение
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
