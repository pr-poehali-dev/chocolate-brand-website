import { useState } from 'react';
import Icon from '@/components/ui/icon';

const classes = [
  {
    emoji: '🧒',
    icon: 'Baby',
    title: 'Детские',
    desc: 'Волшебное приключение для маленьких сладкоежек. Лепка шоколадных фигурок, роспись плиток и яркие эмоции. Безопасно, увлекательно, с подарком.',
  },
  {
    emoji: '👨‍👩‍👧',
    icon: 'Users',
    title: 'Семейные',
    desc: 'Совместное творчество родителей и детей. Создайте семейную шоколадную коллекцию, проведите время тепло и сладко. Доступно для детей от 5 лет.',
  },
  {
    emoji: '🍷',
    icon: 'Wine',
    title: 'Взрослые',
    desc: 'Искусство шоколатье для гурманов: работа с бельгийским шоколадом, создание бонбонов с необычными начинками, дегустация и винное сопровождение.',
  },
  {
    emoji: '💼',
    icon: 'Briefcase',
    title: 'Корпоративные',
    desc: 'Идеальный формат для тимбилдинга и праздников. Команда создаёт свой шоколадный бренд, конкурсы, фотосессия и чаепитие из самовара.',
  },
];

const advantages = [
  { emoji: '🍫', text: 'Ингредиенты премиум-класса' },
  { emoji: '🎓', text: 'Авторские рецепты от шоколатье' },
  { emoji: '🎁', text: 'Созданный шоколад с собой' },
  { emoji: '📷', text: 'Фотозона и атмосфера' },
];

const programOptions = ['Детский', 'Семейный', 'Взрослый', 'Корпоративный'];

export default function MasterclassesPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', participants: '1',
    datetime: '', program: 'Детский', comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', participants: '1', datetime: '', program: 'Детский', comment: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '52vh',
          background: 'linear-gradient(135deg, #1a0f0b 0%, #2a1810 50%, #1a0f0b 100%)',
          borderBottom: '1px solid rgba(183,110,74,0.15)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 60% 40%, rgba(183,110,74,0.08) 0%, transparent 60%)',
          }}
        />
        <div className="choco-container pb-16 pt-36 relative">
          <div className="section-label mb-4">Обучение</div>
          <h1 className="choco-heading" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            Мастер-классы
          </h1>
          <div className="divider-copper" />
          <p
            style={{
              fontFamily: 'Cormorant Infant, serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
              fontStyle: 'italic',
              color: 'var(--copper)',
              marginBottom: '0.75rem',
            }}
          >
            «Погружение в мир шоколадного искусства»
          </p>
          <p style={{ maxWidth: '540px', fontSize: '0.95rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.78 }}>
            От истории до создания собственных шедевров — под руководством наших мастеров.
          </p>
        </div>
      </section>

      {/* 4 подробные карточки */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {classes.map((cls, i) => (
              <div key={i} className="choco-card flex flex-col">
                <div className="text-5xl mb-5">{cls.emoji}</div>
                <h3 style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.75rem' }}>{cls.title}</h3>
                <div className="divider-copper" style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.58)', lineHeight: 1.75, flex: 1 }}>{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Фото мероприятий — плейсхолдер */}
      <section className="pb-0">
        <div className="choco-container">
          <div
            className="flex flex-col items-center justify-center gap-5 rounded-sm"
            style={{
              height: '260px',
              background: 'rgba(183,110,74,0.05)',
              border: '1px solid rgba(183,110,74,0.18)',
            }}
          >
            <div className="text-5xl">📸</div>
            <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.4rem', color: 'var(--copper)' }}>
              Фотографии мероприятий
            </div>
            <p style={{ fontSize: '0.8rem', color: 'rgba(239,230,217,0.35)', textAlign: 'center' }}>
              Атмосфера наших мастер-классов
            </p>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="choco-section" style={{ background: 'rgba(183,110,74,0.03)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Почему мы</div>
            <h2 className="choco-heading">Преимущества участия</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 py-7 px-5 rounded-sm transition-all duration-300 hover:scale-[1.03]"
                style={{ border: '1px solid rgba(183,110,74,0.18)', background: 'rgba(255,255,255,0.02)' }}
              >
                <span className="text-4xl">{adv.emoji}</span>
                <span style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.72)', lineHeight: 1.55 }}>{adv.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма записи */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-label mb-4">Запись</div>
              <h2 className="choco-heading" style={{ fontSize: '2.5rem' }}>Записаться</h2>
              <div className="divider-copper centered" />
              <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.45)', marginTop: '0.5rem' }}>
                Оставьте заявку — мы свяжемся с вами в течение 2 часов
              </p>
            </div>

            {submitted ? (
              <div
                className="text-center py-12 rounded-sm"
                style={{ background: 'rgba(183,110,74,0.08)', border: '1px solid rgba(183,110,74,0.3)' }}
              >
                <div className="text-4xl mb-4">🍫</div>
                <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.8rem', color: 'var(--copper)', marginBottom: '0.5rem' }}>
                  Заявка принята!
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.45)' }}>
                  Мы позвоним вам для подтверждения записи
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  className="choco-input"
                  placeholder="Имя *"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  className="choco-input"
                  placeholder="Телефон *"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
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
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="choco-input"
                    type="number"
                    min="1"
                    placeholder="Кол-во участников *"
                    value={form.participants}
                    onChange={e => setForm({ ...form, participants: e.target.value })}
                    required
                  />
                  <input
                    className="choco-input"
                    type="datetime-local"
                    value={form.datetime}
                    onChange={e => setForm({ ...form, datetime: e.target.value })}
                    required
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <select
                  className="choco-input"
                  value={form.program}
                  onChange={e => setForm({ ...form, program: e.target.value })}
                  style={{ cursor: 'pointer' }}
                >
                  {programOptions.map(opt => (
                    <option key={opt} value={opt} style={{ background: '#1E1612' }}>{opt}</option>
                  ))}
                </select>
                <textarea
                  className="choco-input"
                  placeholder="Комментарий (необязательно)"
                  rows={3}
                  value={form.comment}
                  onChange={e => setForm({ ...form, comment: e.target.value })}
                  style={{ resize: 'none' }}
                />
                <button type="submit" className="btn-copper w-full justify-center">
                  <Icon name="Calendar" size={16} />
                  Записаться
                </button>
                <p style={{ fontSize: '0.72rem', color: 'rgba(239,230,217,0.28)', textAlign: 'center', lineHeight: 1.6 }}>
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
