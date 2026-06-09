import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/c5496dbd-3b9c-41dd-9ce2-dc45f66ed24f/files/e1d891e0-2fd7-4679-8024-39647189c155.jpg';
const MASTERCLASS_IMG = 'https://cdn.poehali.dev/projects/c5496dbd-3b9c-41dd-9ce2-dc45f66ed24f/files/adfba3c2-1a39-46d1-9283-26e7c8c53bb3.jpg';
const EXHIBITION_IMG = 'https://cdn.poehali.dev/projects/c5496dbd-3b9c-41dd-9ce2-dc45f66ed24f/files/2739d7cf-681b-4333-b5ec-63991e6d415c.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const philosophyCards = [
  { icon: 'Leaf', title: 'Натуральные ингредиенты', text: 'Только отборное какао с фермерских плантаций Эквадора и Мадагаскара, без добавок и консервантов.' },
  { icon: 'Hands', title: 'Ручная работа', text: 'Каждая плитка и трюфель созданы вручную нашими мастерами, следующими традиционным рецептурам.' },
  { icon: 'Award', title: 'Авторские рецепты', text: 'Уникальные рецептуры, разработанные шоколатье с многолетним опытом, вдохновлённые Тулой.' },
  { icon: 'Heart', title: 'Местные традиции', text: 'Мы бережно сохраняем и переосмысляем богатую кондитерскую историю Тульского края.' },
  { icon: 'Star', title: 'Премиальное качество', text: 'Многократные победители российских и международных конкурсов ремесленного шоколада.' },
];

const masterclassCards = [
  { emoji: '🍫', title: 'Основы шоколатье', duration: '2 часа', price: '2 500 ₽', desc: 'Темперирование, формовка, базовые начинки. Идеально для начинающих.' },
  { emoji: '✨', title: 'Трюфели и конфеты', duration: '3 часа', price: '3 500 ₽', desc: 'Ганаш, кремовые начинки, декор. Для тех, кто хочет большего.' },
  { emoji: '🎨', title: 'Арт-шоколад', duration: '4 часа', price: '5 000 ₽', desc: 'Роспись, рельеф, съедобные краски. Создайте настоящий шедевр.' },
  { emoji: '👨‍👩‍👧', title: 'Семейный мастер-класс', duration: '2 часа', price: '4 000 ₽', desc: 'Для детей от 6 лет с родителями. Весело, вкусно, незабываемо.' },
];

const testimonials = [
  { name: 'Анна Сергеевна', city: 'Тула', text: 'Были на мастер-классе с дочерью — оба в восторге. Очень профессиональные мастера, уютная атмосфера.' },
  { name: 'Михаил Романов', city: 'Москва', text: 'Привёз шоколад в подарок коллегам из Москвы. Все были поражены качеством. Теперь специально езжу в Тулу!' },
  { name: 'Светлана и Игорь', city: 'Тула', text: 'Отметили годовщину свадьбы в выставочном зале. Спасибо за индивидуальный подход и волшебную обстановку.' },
  { name: 'Дарья Козлова', city: 'Калуга', text: 'Детский мастер-класс для именинника — лучшее решение. Дети были в полном восторге весь вечер!' },
  { name: 'Виктор Петрович', city: 'Тула', text: 'Профессиональный подход к делу. Корпоративный заказ выполнили точно в срок, упаковка — произведение искусства.' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: `linear-gradient(to right, rgba(30,22,18,0.97) 45%, rgba(30,22,18,0.5) 100%), url(${HERO_IMG}) center/cover no-repeat`,
        }}
      >
        <div className="choco-container pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="section-label mb-6 animate-fade-in-up" style={{ opacity: 0 }}>
              Тула · Ремесленный шоколад с 2018 года
            </div>
            <h1
              className="choco-heading mb-6 animate-fade-in-up delay-100"
              style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', opacity: 0 }}
            >
              Философия<br />
              <em style={{ color: 'var(--copper)', fontStyle: 'italic' }}>шоколада</em>
            </h1>
            <div className="divider-copper animate-fade-in-up delay-200" style={{ opacity: 0 }} />
            <p
              className="animate-fade-in-up delay-300"
              style={{ fontSize: '1.05rem', color: 'rgba(239,230,217,0.75)', maxWidth: '520px', lineHeight: 1.75, opacity: 0 }}
            >
              История тульского шоколада, воплощённая в каждой плитке. Пространство, где традиции встречаются с современным ремесленным искусством.
            </p>
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
              <button className="btn-copper" onClick={() => onNavigate('masterclasses')}>
                <Icon name="Calendar" size={16} />
                Записаться на мастер-класс
              </button>
              <button className="btn-outline" onClick={() => onNavigate('about')}>
                <Icon name="BookOpen" size={16} />
                Узнать о нас
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
          style={{ opacity: 0.4 }}
        >
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream)' }}>Листать</span>
          <Icon name="ChevronDown" size={16} style={{ color: 'var(--copper)' }} />
        </div>
      </section>

      {/* О ПРОЕКТЕ */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">О проекте</div>
            <h2 className="choco-heading">Место, где рождается шоколад</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Building',
                title: 'Выставочный зал',
                text: 'Погрузитесь в историю тульского кондитерского дела. Уникальная экспозиция охватывает более 150 лет традиций производства шоколада в регионе.',
              },
              {
                icon: 'GraduationCap',
                title: 'Мастерская',
                text: 'Профессиональное оборудование и опытные наставники. Здесь каждый может почувствовать себя настоящим шоколатье и создать собственный шедевр.',
              },
            ].map((card, i) => (
              <div key={i} className="choco-card flex gap-5">
                <div
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm"
                  style={{ background: 'rgba(183,110,74,0.12)', border: '1px solid rgba(183,110,74,0.25)' }}
                >
                  <Icon name={card.icon} size={22} style={{ color: 'var(--copper)' }} />
                </div>
                <div>
                  <h3 className="choco-subheading mb-2" style={{ fontSize: '1.4rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.65)', lineHeight: 1.7 }}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФИЛОСОФИЯ — 5 карточек */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Наша философия</div>
            <h2 className="choco-heading">Пять принципов мастерства</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {philosophyCards.map((card, i) => (
              <div
                key={i}
                className={`choco-card text-center ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div
                  className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-sm"
                  style={{ background: 'rgba(183,110,74,0.1)', border: '1px solid rgba(183,110,74,0.2)' }}
                >
                  <Icon name={card.icon} size={24} style={{ color: 'var(--copper)' }} fallback="Star" />
                </div>
                <h3 className="choco-subheading mb-3" style={{ fontSize: '1.25rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.7 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ТУЛЬСКИЙ ШОКОЛАД */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">История</div>
              <h2 className="choco-heading mb-6">Тульский шоколад</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.7)', lineHeight: 1.85, marginBottom: '1.2rem' }}>
                Тула — не только самовары и пряники. С конца XIX века город занимал особое место на кондитерской карте России. Купеческие шоколадные мастерские передавали рецепты из поколения в поколение.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.7)', lineHeight: 1.85 }}>
                Сегодня «Философия шоколада» продолжает эту традицию, соединяя исторические рецептуры с современными технологиями темперирования и работы с какао.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { num: '6', label: 'лет работы' },
                  { num: '40+', label: 'сортов шоколада' },
                  { num: '2000+', label: 'гостей в год' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-sm" style={{ border: '1px solid rgba(183,110,74,0.2)' }}>
                    <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '2rem', color: 'var(--copper)', lineHeight: 1 }}>{stat.num}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(239,230,217,0.5)', marginTop: '0.3rem', letterSpacing: '0.05em' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Тульский шоколад"
                className="w-full rounded-sm"
                style={{ height: '420px', objectFit: 'cover' }}
              />
              <div
                className="absolute -bottom-4 -left-4 p-4 rounded-sm"
                style={{ background: 'var(--cocoa)', border: '1px solid rgba(183,110,74,0.3)' }}
              >
                <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.1rem', color: 'var(--copper)' }}>
                  «Каждая плитка —<br />маленькая история»
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ШОКОЛАД РУЧНОЙ РАБОТЫ */}
      <section className="choco-section" style={{ background: 'rgba(183,110,74,0.04)' }}>
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={MASTERCLASS_IMG}
                alt="Шоколад ручной работы"
                className="w-full rounded-sm"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="section-label mb-4">Ремесло</div>
              <h2 className="choco-heading mb-6">Шоколад ручной работы</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.7)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Наши мастера вручную создают каждое изделие — от темперирования до финального декора. Никаких промышленных линий, только человеческие руки и страсть к шоколаду.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Какао-бобы из отборных регионов мира',
                  'Ручное темперирование для идеального блеска',
                  'Авторские начинки и специи',
                  'Экологичная упаковка собственного дизайна',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name="Check" size={16} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.75)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ВЫСТАВОЧНЫЙ ЗАЛ */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Экспозиция</div>
              <h2 className="choco-heading mb-6">Выставочный зал</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.7)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Погрузитесь в мир тульского шоколада через уникальную экспозицию. Исторические артефакты, редкие документы и живые демонстрации процесса создания шоколада.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'Историческая экспозиция XIX–XX века',
                  'Коллекция редкого инструментария',
                  'Интерактивные зоны для гостей',
                  'Дегустационный зал',
                  'Магазин авторской продукции',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span style={{ color: 'var(--copper)', fontSize: '0.5rem' }}>◆</span>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.7)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-copper">
                <Icon name="MapPin" size={16} />
                Как добраться
              </button>
            </div>
            <div>
              <img
                src={EXHIBITION_IMG}
                alt="Выставочный зал"
                className="w-full rounded-sm"
                style={{ height: '430px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* МАСТЕР-КЛАССЫ */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Обучение</div>
            <h2 className="choco-heading">Мастер-классы</h2>
            <div className="divider-copper centered" />
            <p style={{ maxWidth: '480px', margin: '0 auto', fontSize: '0.9rem', color: 'rgba(239,230,217,0.55)', lineHeight: 1.7 }}>
              Научитесь создавать настоящий ремесленный шоколад под руководством опытных мастеров
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {masterclassCards.map((card, i) => (
              <div key={i} className="choco-card flex flex-col">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="choco-subheading mb-2" style={{ fontSize: '1.2rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.55)', lineHeight: 1.65, flex: 1, marginBottom: '1.25rem' }}>{card.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(183,110,74,0.15)' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(239,230,217,0.4)', letterSpacing: '0.05em' }}>{card.duration}</div>
                    <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.2rem', color: 'var(--copper)' }}>{card.price}</div>
                  </div>
                  <button
                    className="btn-copper py-2 px-4 text-xs"
                    onClick={() => onNavigate('masterclasses')}
                  >
                    Записаться
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* НАШИ ПРОСТРАНСТВА */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Локации</div>
            <h2 className="choco-heading">Наши пространства</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Главный магазин',
                address: 'пр. Ленина, 44',
                hours: 'Пн–Вс: 10:00–20:00',
                desc: 'Основное пространство с выставочным залом, мастерской и магазином.',
                icon: 'Store',
              },
              {
                name: 'Мастерская на Металлистов',
                address: 'ул. Металлистов, 12',
                hours: 'Пт–Вс: 11:00–19:00',
                desc: 'Камерная площадка для мастер-классов и частных мероприятий.',
                icon: 'Wrench',
              },
            ].map((loc, i) => (
              <div key={i} className="choco-card flex gap-5">
                <div
                  className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm"
                  style={{ background: 'rgba(183,110,74,0.1)', border: '1px solid rgba(183,110,74,0.2)' }}
                >
                  <Icon name={loc.icon} size={22} style={{ color: 'var(--copper)' }} />
                </div>
                <div>
                  <h3 className="choco-subheading mb-1" style={{ fontSize: '1.3rem' }}>{loc.name}</h3>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Icon name="MapPin" size={12} style={{ color: 'var(--copper)' }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.5)' }}>{loc.address}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{loc.desc}</p>
                  <div className="flex items-center gap-1.5">
                    <Icon name="Clock" size={12} style={{ color: 'var(--copper)' }} />
                    <span style={{ fontSize: '0.8rem', color: 'rgba(239,230,217,0.45)' }}>{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ГАЛЕРЕЯ */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Галерея</div>
            <h2 className="choco-heading">В объективе</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { emoji: '🍫', label: 'Тёмный шоколад' },
              { emoji: '🌿', label: 'Травяные начинки' },
              { emoji: '✨', label: 'Арт-коллекция' },
              { emoji: '🎁', label: 'Подарочные наборы' },
              { emoji: '☕', label: 'Горячий шоколад' },
              { emoji: '🏺', label: 'Историческая экспозиция' },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square flex flex-col items-center justify-center gap-3 rounded-sm cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'rgba(183,110,74,0.05)', border: '1px solid rgba(183,110,74,0.15)' }}
              >
                <span className="text-4xl">{item.emoji}</span>
                <span style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.5)', letterSpacing: '0.05em' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Отзывы</div>
            <h2 className="choco-heading">Что говорят гости</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="choco-card">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} style={{ color: 'var(--copper)' }} />
                  ))}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.7)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  «{t.text}»
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{ background: 'rgba(183,110,74,0.2)', color: 'var(--copper)' }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--cream)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(239,230,217,0.4)' }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section className="choco-section" style={{ background: 'rgba(183,110,74,0.03)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Связь</div>
            <h2 className="choco-heading">Контакты</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { icon: 'Phone', title: 'Телефоны', lines: ['+7 (4872) 35-00-00', '+7 (960) 600-00-00'] },
              { icon: 'MapPin', title: 'Адрес', lines: ['г. Тула', 'пр. Ленина, 44'] },
              { icon: 'Mail', title: 'Email', lines: ['info@filosofiya-shokolada.ru', 'events@filosofiya-shokolada.ru'] },
            ].map((card, i) => (
              <div key={i} className="choco-card text-center">
                <div
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-sm"
                  style={{ background: 'rgba(183,110,74,0.1)', border: '1px solid rgba(183,110,74,0.25)' }}
                >
                  <Icon name={card.icon} size={22} style={{ color: 'var(--copper)' }} />
                </div>
                <h3 className="choco-subheading mb-3" style={{ fontSize: '1.2rem' }}>{card.title}</h3>
                {card.lines.map((line, j) => (
                  <div key={j} className="flex items-center justify-center gap-2 mb-1.5">
                    <span style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.65)' }}>{line}</span>
                    <button
                      onClick={() => handleCopy(line)}
                      className="transition-colors duration-200"
                      title="Скопировать"
                    >
                      <Icon
                        name={copied === line ? 'Check' : 'Copy'}
                        size={13}
                        style={{ color: copied === line ? '#5a9e5a' : 'rgba(183,110,74,0.5)' }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden mb-10" style={{ border: '1px solid rgba(183,110,74,0.2)' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.617534%2C54.193122&z=15&pt=37.617534,54.193122,pm2rdm"
              width="100%"
              height="360"
              frameBorder="0"
              allowFullScreen
              title="Карта — Философия шоколада"
              style={{ filter: 'sepia(30%) saturate(0.8)' }}
            />
          </div>

          {/* Feedback form */}
          <div className="max-w-xl mx-auto">
            <h3 className="choco-subheading text-center mb-8" style={{ fontSize: '1.6rem' }}>Напишите нам</h3>
            {submitted ? (
              <div
                className="text-center py-8 rounded-sm"
                style={{ background: 'rgba(183,110,74,0.08)', border: '1px solid rgba(183,110,74,0.3)' }}
              >
                <div className="text-3xl mb-3">✓</div>
                <div style={{ color: 'var(--copper)', fontSize: '1rem', fontFamily: 'Cormorant Infant, serif', fontSize: '1.4rem' }}>
                  Сообщение отправлено!
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.5)', marginTop: '0.5rem' }}>
                  Мы ответим в течение нескольких часов
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  className="choco-input"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  className="choco-input"
                  placeholder="Телефон или email"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <textarea
                  className="choco-input"
                  placeholder="Ваше сообщение"
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                  style={{ resize: 'vertical' }}
                />
                <button type="submit" className="btn-copper w-full justify-center">
                  <Icon name="Send" size={16} />
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
