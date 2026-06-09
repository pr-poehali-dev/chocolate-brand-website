import { useState } from 'react';
import Icon from '@/components/ui/icon';

const MASTERCLASS_IMG = 'https://cdn.poehali.dev/projects/c5496dbd-3b9c-41dd-9ce2-dc45f66ed24f/files/adfba3c2-1a39-46d1-9283-26e7c8c53bb3.jpg';

const classes = [
  {
    emoji: '🍫',
    title: 'Основы шоколатье',
    duration: '2 часа',
    price: '2 500 ₽',
    level: 'Начинающий',
    desc: 'Идеальный старт в мире шоколада. Вы узнаете о происхождении какао, освоите темперирование на мраморной плите и создадите свою первую плитку с авторским декором.',
    includes: ['Все материалы включены', 'Дегустация 5 видов шоколада', 'Уносите всё сделанное домой', 'Чай/кофе в подарок'],
  },
  {
    emoji: '✨',
    title: 'Трюфели и конфеты',
    duration: '3 часа',
    price: '3 500 ₽',
    level: 'Средний',
    desc: 'Погружение в мир начинок: ганаш, карамель, фруктовые кремы. Вы создадите набор авторских конфет в фирменной упаковке — отличный подарок или личное удовольствие.',
    includes: ['Профессиональные формы', 'Набор бельгийского шоколада', 'Красивая подарочная коробка', 'Рецепты с собой'],
  },
  {
    emoji: '🎨',
    title: 'Арт-шоколад',
    duration: '4 часа',
    price: '5 000 ₽',
    level: 'Продвинутый',
    desc: 'Шоколад как искусство. Роспись какао-маслом, рельефные текстуры, съедобные краски и золото. Создайте настоящий визуальный шедевр, которым будет жаль угощать.',
    includes: ['Съедобное золото и краски', 'Профессиональный пистолет', 'Фотосессия готовых работ', 'Диплом участника'],
  },
  {
    emoji: '👨‍👩‍👧',
    title: 'Семейный мастер-класс',
    duration: '2 часа',
    price: '4 000 ₽',
    level: 'Для всей семьи',
    desc: 'Весёлый и вкусный мастер-класс для детей от 6 лет вместе с родителями. Простые техники, максимум удовольствия и совместное творчество, которое запомнится надолго.',
    includes: ['Детские фартуки и колпаки', 'Безопасные инструменты', 'Горячий шоколад в финале', 'Фото на память'],
  },
];

const advantages = [
  { icon: 'Users', text: 'Группы до 12 человек — индивидуальный подход' },
  { icon: 'Award', text: 'Мастера с международным опытом' },
  { icon: 'Package', text: 'Все изделия вы забираете с собой' },
  { icon: 'Gift', text: 'Сертификаты в подарок близким' },
  { icon: 'Calendar', text: 'Гибкое расписание под вашу группу' },
  { icon: 'MapPin', text: 'Удобное расположение в центре Тулы' },
];

export default function MasterclassesPage() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', participants: '1', date: '', comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', participants: '1', date: '', comment: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '55vh',
          background: `linear-gradient(to bottom, rgba(30,22,18,0.2) 0%, rgba(30,22,18,0.97) 100%), url(${MASTERCLASS_IMG}) center/cover no-repeat`,
        }}
      >
        <div className="choco-container pb-16 pt-36">
          <div className="section-label mb-4">Обучение</div>
          <h1 className="choco-heading" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            Мастер-классы<br />
            <em style={{ color: 'var(--copper)', fontStyle: 'italic' }}>по шоколаду</em>
          </h1>
          <div className="divider-copper" />
          <p style={{ maxWidth: '520px', fontSize: '0.95rem', color: 'rgba(239,230,217,0.65)', lineHeight: 1.75 }}>
            Станьте шоколатье на один вечер — или навсегда. Наши мастера передадут вам все секреты ремесленного шоколада.
          </p>
        </div>
      </section>

      {/* 4 detailed cards */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid md:grid-cols-2 gap-6">
            {classes.map((cls, i) => (
              <div key={i} className="choco-card flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div className="text-4xl">{cls.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="choco-subheading" style={{ fontSize: '1.5rem' }}>{cls.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs px-2 py-0.5 rounded-sm"
                        style={{ background: 'rgba(183,110,74,0.15)', color: 'var(--copper)', letterSpacing: '0.05em' }}
                      >
                        {cls.level}
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.4)' }}>
                        <Icon name="Clock" size={12} style={{ display: 'inline', marginRight: '4px' }} />
                        {cls.duration}
                      </span>
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.6rem', color: 'var(--copper)', flexShrink: 0 }}>
                    {cls.price}
                  </div>
                </div>
                <div className="divider-copper" style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.65)', lineHeight: 1.75, marginBottom: '1.25rem', flex: 1 }}>
                  {cls.desc}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {cls.includes.map((inc, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Icon name="Check" size={13} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.55)' }}>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="choco-section" style={{ background: 'rgba(183,110,74,0.03)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Почему мы</div>
            <h2 className="choco-heading">Наши преимущества</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-sm" style={{ border: '1px solid rgba(183,110,74,0.15)', background: 'rgba(255,255,255,0.02)' }}>
                <div
                  className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm"
                  style={{ background: 'rgba(183,110,74,0.1)' }}
                >
                  <Icon name={adv.icon} size={18} style={{ color: 'var(--copper)' }} />
                </div>
                <span style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.7)', lineHeight: 1.5 }}>{adv.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <div className="section-label mb-4">Запись</div>
              <h2 className="choco-heading" style={{ fontSize: '2.5rem' }}>Забронировать место</h2>
              <div className="divider-copper centered" />
              <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.5)', marginTop: '0.5rem' }}>
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
                <p style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.5)' }}>
                  Мы позвоним вам для подтверждения записи
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="choco-input"
                    placeholder="Ваше имя *"
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
                </div>
                <input
                  className="choco-input"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    className="choco-input"
                    type="number"
                    min="1"
                    max="12"
                    placeholder="Кол-во участников"
                    value={form.participants}
                    onChange={e => setForm({ ...form, participants: e.target.value })}
                  />
                  <input
                    className="choco-input"
                    type="date"
                    placeholder="Желаемая дата"
                    value={form.date}
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <textarea
                  className="choco-input"
                  placeholder="Комментарий (тип мастер-класса, пожелания...)"
                  rows={3}
                  value={form.comment}
                  onChange={e => setForm({ ...form, comment: e.target.value })}
                  style={{ resize: 'none' }}
                />
                <button type="submit" className="btn-copper w-full justify-center mt-2">
                  <Icon name="Calendar" size={16} />
                  Отправить заявку
                </button>
                <p style={{ fontSize: '0.72rem', color: 'rgba(239,230,217,0.3)', textAlign: 'center', lineHeight: 1.6 }}>
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
