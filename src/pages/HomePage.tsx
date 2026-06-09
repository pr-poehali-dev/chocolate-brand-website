import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/c5496dbd-3b9c-41dd-9ce2-dc45f66ed24f/files/e1d891e0-2fd7-4679-8024-39647189c155.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const philosophyItems = [
  { icon: 'Star', title: 'Качество', text: 'Отборное сырьё, бельгийский шоколад премиум-класса.' },
  { icon: 'Clock', title: 'Традиции', text: 'Уважение к истории тульского шоколадного дела.' },
  { icon: 'Palette', title: 'Эстетика', text: 'Вдохновляющий дизайн и атмосфера осознанного удовольствия.' },
  { icon: 'Sparkles', title: 'Ручная работа', text: 'Каждая конфета создана вручную с вниманием к деталям.' },
  { icon: 'Landmark', title: 'Культурное наследие', text: 'Шоколад как часть культурного кода Тулы.' },
];

const masterclassItems = [
  { emoji: '🧒', title: 'Детские', text: 'Волшебное приключение для маленьких сладкоежек. Лепка шоколадных фигурок, роспись плиток и яркие эмоции.' },
  { emoji: '👨‍👩‍👧', title: 'Семейные', text: 'Совместное творчество родителей и детей. Создайте семейную шоколадную коллекцию, проведите время тепло и сладко.' },
  { emoji: '🍷', title: 'Взрослые', text: 'Искусство шоколатье для гурманов: работа с бельгийским шоколадом, создание бонбонов, дегустация и винное сопровождение.' },
  { emoji: '💼', title: 'Корпоративные', text: 'Идеальный формат для тимбилдинга и праздников. Команда создаёт свой шоколадный бренд, конкурсы, фотосессия и чаепитие из самовара.' },
];

const testimonials = [
  { text: 'Потрясающая экскурсия! Узнали много нового о тульском шоколаде. Уходить не хотелось — атмосфера невероятная!', author: 'Елена', city: 'Москва' },
  { text: 'Водили детей на мастер-класс, всё прошло замечательно. Дети были в восторге, унесли домой целую коробку шоколада.', author: 'Семья Петровых', city: 'Тула' },
  { text: 'Премиальный шоколад, эстетика, душевность. Купила наборы в подарок всем коллегам — все были очарованы.', author: 'Анна', city: 'Тула' },
  { text: 'Были в Туле проездом — остались на три часа! Дочка в восторге, уже просит вернуться на следующие выходные.', author: 'Светлана', city: 'Воронеж' },
  { text: 'Корпоративный мастер-класс для команды из 20 человек. Лучший тимбилдинг, который у нас когда-либо был!', author: 'Алексей', city: '«ИнфоТех»' },
  { text: 'Настоящее открытие! Не знала, что в Туле такое место. История, вкус и красота в одном пространстве — это бесценно.', author: 'Ирина', city: 'Рязань' },
];

const galleryItems = [
  { emoji: '🍫', label: 'Авторские трюфели' },
  { emoji: '🏪', label: 'Интерьер пространства' },
  { emoji: '👦', label: 'Мастер-класс для детей' },
  { emoji: '☕', label: 'Царское чаепитие' },
  { emoji: '🏭', label: 'Производственный цех' },
  { emoji: '🏛️', label: 'Экскурсия в музее' },
];

const contacts = [
  {
    icon: 'Store',
    title: 'Советская, 15',
    tag: 'Экскурсии, магазин',
    lines: [
      { icon: 'Clock', text: 'Пн–Пт 10:00–20:00 · Сб–Вс 10:00–21:00', copy: false },
      { icon: 'Phone', text: '+7 (4872) 35-00-00', copy: true },
    ],
  },
  {
    icon: 'Paintbrush',
    title: 'Металлистов, 8',
    tag: 'Мастер-классы',
    lines: [
      { icon: 'Clock', text: 'Пт 14:00–20:00 · Сб–Вс 11:00–20:00', copy: false },
      { icon: 'Phone', text: '+7 (960) 600-00-00', copy: true },
    ],
  },
  {
    icon: 'Globe',
    title: 'Онлайн',
    tag: 'Бронирование',
    lines: [
      { icon: 'Mail', text: 'info@filosofiya-shokolada.ru', copy: true },
      { icon: 'Phone', text: '+7 (4872) 35-00-00', copy: true },
    ],
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
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

      {/* 1.1 HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: `linear-gradient(105deg, rgba(22,15,11,0.97) 40%, rgba(22,15,11,0.55) 100%), url(${HERO_IMG}) center/cover no-repeat`,
        }}
      >
        <div className="choco-container pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="section-label mb-5" style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.1s forwards' }}>
              Тула · Ремесленный шоколад · с 2018 года
            </div>
            <h1
              className="choco-heading mb-4"
              style={{ fontSize: 'clamp(3rem, 6vw, 4.8rem)', opacity: 0, animation: 'fadeInUp 0.8s ease 0.2s forwards' }}
            >
              Философия<br />
              <em style={{ color: 'var(--copper)', fontStyle: 'italic' }}>шоколада</em>
            </h1>
            <div className="divider-copper" style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.3s forwards' }} />
            <p
              style={{
                fontFamily: 'Cormorant Infant, serif',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                fontStyle: 'italic',
                color: 'var(--copper)',
                marginBottom: '0.75rem',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease 0.35s forwards',
              }}
            >
              «История тульского шоколада, воплощённая в современном ремесле»
            </p>
            <p
              style={{
                fontSize: '0.98rem',
                color: 'rgba(239,230,217,0.65)',
                maxWidth: '460px',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                opacity: 0,
                animation: 'fadeInUp 0.8s ease 0.45s forwards',
              }}
            >
              Ручное производство, культурное наследие и уникальные впечатления в сердце Тулы.
            </p>
            <div className="flex flex-wrap gap-4" style={{ opacity: 0, animation: 'fadeInUp 0.8s ease 0.55s forwards' }}>
              <button className="btn-copper" onClick={() => onNavigate('contacts')}>
                <Icon name="Calendar" size={16} />
                Запись на экскурсию
              </button>
              <button className="btn-outline" onClick={() => onNavigate('masterclasses')}>
                <Icon name="ChefHat" size={16} fallback="Star" />
                Запись на мастер-класс
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.35 }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream)' }}>Листать</span>
          <Icon name="ChevronDown" size={16} style={{ color: 'var(--copper)' }} />
        </div>
      </section>

      {/* 1.2 О ПРОЕКТЕ */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-12">
            <div className="section-label mb-4">О проекте</div>
            <h2 className="choco-heading">О проекте</h2>
            <div className="divider-copper centered" />
            <p style={{ maxWidth: '580px', margin: '0 auto', fontSize: '1rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.78 }}>
              Культурно-гастрономический бренд нового формата, объединяющий производство, музей и мастерские.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="choco-card flex gap-5">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm" style={{ background: 'rgba(183,110,74,0.12)', border: '1px solid rgba(183,110,74,0.25)' }}>
                <Icon name="History" size={22} style={{ color: 'var(--copper)' }} fallback="Clock" />
              </div>
              <div>
                <h3 className="choco-subheading mb-3" style={{ fontSize: '1.35rem' }}>Сохранение истории тульского шоколада</h3>
                <p style={{ fontSize: '0.87rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.78 }}>
                  Мы возрождаем богатые традиции тульского шоколадного дела, создавая уникальную экспозицию, проводя тематические экскурсии и восстанавливая исторические рецептуры купцов-кондитеров XIX века.
                </p>
              </div>
            </div>
            <div className="choco-card flex gap-5">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm" style={{ background: 'rgba(183,110,74,0.12)', border: '1px solid rgba(183,110,74,0.25)' }}>
                <Icon name="Candy" size={22} style={{ color: 'var(--copper)' }} fallback="Star" />
              </div>
              <div>
                <h3 className="choco-subheading mb-3" style={{ fontSize: '1.35rem' }}>Создание шоколада ручной работы</h3>
                <p style={{ fontSize: '0.87rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.78 }}>
                  Бельгийское сырьё премиального качества, авторские рецептуры наших шоколатье и жёсткий контроль качества на каждом этапе. Каждое изделие — маленькое произведение искусства.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.3 ФИЛОСОФИЯ — 5 карточек */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Наши принципы</div>
            <h2 className="choco-heading">Философия шоколада</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {philosophyItems.map((item, i) => (
              <div key={i} className="choco-card text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-sm" style={{ background: 'rgba(183,110,74,0.1)', border: '1px solid rgba(183,110,74,0.2)' }}>
                  <Icon name={item.icon} size={22} style={{ color: 'var(--copper)' }} fallback="Star" />
                </div>
                <h3 style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.55)', lineHeight: 1.65 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.4 ТУЛЬСКИЙ ШОКОЛАД */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">История</div>
              <h2 className="choco-heading mb-6">Тульский шоколад</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.87 }}>
                Тула издавна славилась пряниками, но мало кто знает: в XIX веке здесь процветало шоколадное дело.
                «Философия шоколада» возрождает утраченные традиции, соединяя историю города с гастрономическим
                искусством. Наша экспозиция расскажет о купцах-кондитерах и уникальных рецептах.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="flex flex-col items-center justify-center gap-5 w-full rounded-sm"
                style={{ height: '300px', background: 'rgba(183,110,74,0.06)', border: '1px solid rgba(183,110,74,0.25)' }}
              >
                <span className="text-6xl">🍫</span>
                <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.3rem', color: 'var(--copper)', textAlign: 'center' }}>
                  Историческое наследие
                </div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.38)', textAlign: 'center', maxWidth: '220px', lineHeight: 1.6 }}>
                  XIX–XXI вв. · Тульские традиции
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 ШОКОЛАД РУЧНОЙ РАБОТЫ */}
      <section className="choco-section" style={{ background: 'rgba(183,110,74,0.03)' }}>
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div
                className="flex flex-col items-center justify-center gap-5 w-full rounded-sm"
                style={{ height: '300px', background: 'rgba(183,110,74,0.06)', border: '1px solid rgba(183,110,74,0.25)' }}
              >
                <span className="text-6xl">❤️</span>
                <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.3rem', color: 'var(--copper)', textAlign: 'center' }}>
                  Производство шоколада<br />ручной работы
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="section-label mb-4">Ремесло</div>
              <h2 className="choco-heading mb-6">Шоколад ручной работы</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Бельгийский шоколад премиального качества, ручное изготовление, контроль качества, авторский подход.
              </p>
              <div className="flex flex-col gap-3">
                {['Бельгийское какао-сырьё высшего сорта', 'Ручное темперирование и формовка', 'Авторские начинки и декор', 'Каждое изделие — уникально'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name="Check" size={15} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.72)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.6 ВЫСТАВОЧНЫЙ ЗАЛ */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">Экскурсии</div>
              <h2 className="choco-heading mb-6">Выставочный зал</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.58)', lineHeight: 1.78, marginBottom: '1.75rem' }}>
                Погрузитесь в историю тульского шоколада. Программа экскурсии включает:
              </p>
              <ul className="flex flex-col gap-3.5 mb-8">
                {[
                  { emoji: '🏛️', text: 'Историческая часть и выставочная экспозиция' },
                  { emoji: '📖', text: 'Рассказ о шоколадном деле в Туле' },
                  { emoji: '🍫', text: 'Демонстрация производственного цеха' },
                  { emoji: '🍬', text: 'Дегустация шоколада' },
                  { emoji: '🫖', text: 'Царское чаепитие из самовара в фарфоровой посуде' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-xl">{item.emoji}</span>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.72)' }}>{item.text}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-copper" onClick={() => onNavigate('contacts')}>
                <Icon name="Calendar" size={16} />
                Записаться на экскурсию
              </button>
            </div>
            <div>
              <img src={HERO_IMG} alt="Выставочный зал" className="w-full rounded-sm" style={{ height: '440px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 1.7 МАСТЕР-КЛАССЫ анонс */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Обучение</div>
            <h2 className="choco-heading">Мастер-классы</h2>
            <div className="divider-copper centered" />
            <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '0.92rem', color: 'rgba(239,230,217,0.55)', lineHeight: 1.78 }}>
              Погружение в мир шоколадного искусства: от истории до создания собственных шедевров.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {masterclassItems.map((item, i) => (
              <div key={i} className="choco-card flex flex-col">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.3rem', color: 'var(--cream)', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.83rem', color: 'rgba(239,230,217,0.55)', lineHeight: 1.72, flex: 1 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="btn-outline" onClick={() => onNavigate('masterclasses')}>
              Все программы и запись
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 1.8 НАШИ ПРОСТРАНСТВА */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Локации</div>
            <h2 className="choco-heading">Наши пространства</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'Building', title: 'Пространство на Советской', text: 'Выставочный зал, экскурсии, дегустации, фирменный магазин.', address: 'ул. Советская, 15, Тула' },
              { icon: 'Paintbrush', title: 'Пространство на Металлистов', text: 'Мастер-классы, творческие мероприятия.', address: 'ул. Металлистов, 8, Тула' },
            ].map((loc, i) => (
              <div key={i} className="choco-card flex gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm" style={{ background: 'rgba(183,110,74,0.1)', border: '1px solid rgba(183,110,74,0.2)' }}>
                  <Icon name={loc.icon} size={22} style={{ color: 'var(--copper)' }} />
                </div>
                <div>
                  <h3 className="choco-subheading mb-2" style={{ fontSize: '1.3rem' }}>{loc.title}</h3>
                  <p style={{ fontSize: '0.87rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{loc.text}</p>
                  <div className="flex items-center gap-1.5">
                    <Icon name="MapPin" size={13} style={{ color: 'var(--copper)' }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.45)' }}>{loc.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.9 ГАЛЕРЕЯ */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Фото</div>
            <h2 className="choco-heading">Галерея</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="aspect-square flex flex-col items-center justify-center gap-3 rounded-sm cursor-pointer group transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'rgba(183,110,74,0.05)', border: '1px solid rgba(183,110,74,0.15)' }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(183,110,74,0.4)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(183,110,74,0.15)'}
              >
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{item.emoji}</span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.5)', letterSpacing: '0.05em', textAlign: 'center', padding: '0 1rem' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.10 ОТЗЫВЫ */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Отзывы</div>
            <h2 className="choco-heading">Отзывы посетителей</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="choco-card">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Icon key={j} name="Star" size={13} style={{ color: 'var(--copper)' }} />
                  ))}
                </div>
                <p style={{ fontSize: '0.87rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  «{t.text}»
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{ background: 'rgba(183,110,74,0.18)', color: 'var(--copper)' }}>
                    {t.author[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--cream)', fontWeight: 500 }}>{t.author}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(239,230,217,0.38)' }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1.11 КОНТАКТЫ */}
      <section className="choco-section" style={{ background: 'rgba(183,110,74,0.03)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Связь</div>
            <h2 className="choco-heading">Контакты</h2>
            <div className="divider-copper centered" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {contacts.map((card, i) => (
              <div key={i} className="choco-card text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-sm" style={{ background: 'rgba(183,110,74,0.1)', border: '1px solid rgba(183,110,74,0.22)' }}>
                  <Icon name={card.icon} size={20} style={{ color: 'var(--copper)' }} />
                </div>
                <h3 style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.25rem', color: 'var(--cream)', marginBottom: '0.3rem' }}>{card.title}</h3>
                <div style={{ fontSize: '0.7rem', color: 'var(--copper)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{card.tag}</div>
                {card.lines.map((line, j) => (
                  <div key={j} className="flex items-center justify-center gap-2 mb-2">
                    <Icon name={line.icon} size={13} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.62)' }}>{line.text}</span>
                    {line.copy && (
                      <button onClick={() => handleCopy(line.text)} title="Копировать">
                        <Icon name={copied === line.text ? 'Check' : 'Copy'} size={12} style={{ color: copied === line.text ? '#5a9e5a' : 'rgba(183,110,74,0.5)' }} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mb-10">
            {[
              { icon: 'MessageSquare', label: 'ВКонтакте' },
              { icon: 'BookOpen', label: 'Дзен' },
              { icon: 'Youtube', label: 'Rutube' },
              { icon: 'Users', label: 'Одноклассники' },
            ].map((s, i) => (
              <button
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-sm transition-all duration-300"
                style={{ border: '1px solid rgba(183,110,74,0.25)', color: 'rgba(239,230,217,0.6)', fontSize: '0.78rem' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--copper)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--copper)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(183,110,74,0.25)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(239,230,217,0.6)'; }}
                title={s.label}
              >
                <Icon name={s.icon} size={15} />
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="rounded-sm overflow-hidden mb-10" style={{ border: '1px solid rgba(183,110,74,0.2)' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617534%2C54.193122&z=15&pt=37.617534,54.193122,pm2rdm"
              width="100%"
              height="340"
              frameBorder="0"
              allowFullScreen
              title="Карта"
              style={{ filter: 'sepia(25%) saturate(0.8)', display: 'block' }}
            />
          </div>

          <div className="max-w-lg mx-auto">
            <h3 style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.8rem', color: 'var(--cream)', textAlign: 'center', marginBottom: '2rem' }}>
              Форма обратной связи
            </h3>
            {submitted ? (
              <div className="text-center py-8 rounded-sm" style={{ background: 'rgba(183,110,74,0.08)', border: '1px solid rgba(183,110,74,0.3)' }}>
                <div className="text-3xl mb-3">✓</div>
                <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.5rem', color: 'var(--copper)' }}>Сообщение отправлено!</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.45)', marginTop: '0.5rem' }}>Мы ответим в течение нескольких часов</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input className="choco-input" placeholder="Имя" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                <input className="choco-input" type="email" placeholder="E-mail" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                <textarea className="choco-input" placeholder="Сообщение" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required style={{ resize: 'none' }} />
                <button type="submit" className="btn-copper w-full justify-center">
                  <Icon name="Send" size={15} />
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
