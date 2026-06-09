import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/c5496dbd-3b9c-41dd-9ce2-dc45f66ed24f/files/e1d891e0-2fd7-4679-8024-39647189c155.jpg';

const cards = [
  {
    icon: 'BookOpen',
    title: 'История проекта',
    text: 'В 2018 году группа тульских энтузиастов и шоколатье объединилась, чтобы создать нечто большее, чем просто магазин шоколада. Так родилась «Философия шоколада» — культурно-гастрономическое пространство с двумя локациями в центре Тулы, собственным производством и музейной экспозицией.',
  },
  {
    icon: 'Clock',
    title: 'История тульского шоколада',
    text: 'В XIX веке Тула была не только городом самоваров и пряников, но и центром шоколадного производства. Купцы-кондитеры владели процветающими мастерскими, поставляя продукцию по всей России. Мы восстановили эти утраченные техники и рецептуры, дав им новую жизнь.',
  },
  {
    icon: 'Target',
    title: 'Миссия проекта',
    text: 'Наша миссия — популяризация культурного наследия Тулы через гастрономический опыт. Мы верим, что шоколад — это не просто сладость, а способ прикоснуться к истории, узнать традиции и разделить момент радости с близкими людьми.',
  },
  {
    icon: 'Factory',
    title: 'Производство',
    text: 'Мы сочетаем старинные рецепты с бельгийским сырьём премиального класса. Каждое изделие создаётся вручную: ручное темперирование, авторские начинки, уникальный декор. Ни одного грамма промышленного производства — только живое ремесло.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '60vh',
          background: `linear-gradient(to bottom, rgba(22,15,11,0.25) 0%, rgba(22,15,11,0.97) 100%), url(${HERO_IMG}) center/cover no-repeat`,
        }}
      >
        <div className="choco-container pb-16 pt-36">
          <div className="section-label mb-4">О нас</div>
          <h1 className="choco-heading" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            О нас
          </h1>
          <div className="divider-copper" />
          <p
            style={{
              fontFamily: 'Cormorant Infant, serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontStyle: 'italic',
              color: 'var(--copper)',
              marginBottom: '0.75rem',
            }}
          >
            «История, миссия и философия нашего ремесла»
          </p>
          <p style={{ maxWidth: '540px', fontSize: '0.95rem', color: 'rgba(239,230,217,0.62)', lineHeight: 1.78 }}>
            Познакомьтесь с проектом, который возрождает традиции тульского шоколада и создаёт уникальный культурно-гастрономический опыт.
          </p>
        </div>
      </section>

      {/* 4 карточки 2×2 */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="choco-card">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-sm"
                    style={{ background: 'rgba(183,110,74,0.12)', border: '1px solid rgba(183,110,74,0.25)' }}
                  >
                    <Icon name={card.icon} size={20} style={{ color: 'var(--copper)' }} fallback="Star" />
                  </div>
                  <h3 className="choco-subheading" style={{ fontSize: '1.4rem' }}>{card.title}</h3>
                </div>
                <div className="divider-copper" style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.63)', lineHeight: 1.82 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Плейсхолдер ручного производства */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="choco-container">
          <div
            className="flex flex-col items-center justify-center gap-6 rounded-sm"
            style={{
              height: '280px',
              background: 'rgba(183,110,74,0.06)',
              border: '1px solid rgba(183,110,74,0.22)',
            }}
          >
            <div className="text-6xl">✨</div>
            <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.5rem', color: 'var(--copper)', textAlign: 'center' }}>
              Ручное производство в действии
            </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.38)', textAlign: 'center', maxWidth: '300px', lineHeight: 1.65 }}>
              Каждое изделие — результат мастерства и любви к шоколадному ремеслу
            </p>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Ценности</div>
            <h2 className="choco-heading">Что нас объединяет</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: '🤝', label: 'Честность' },
              { emoji: '🎯', label: 'Мастерство' },
              { emoji: '🌱', label: 'Устойчивость' },
              { emoji: '💛', label: 'Любовь к делу' },
            ].map((v, i) => (
              <div
                key={i}
                className="py-6 px-4 rounded-sm text-center transition-all duration-300 hover:scale-[1.03]"
                style={{ border: '1px solid rgba(183,110,74,0.2)', background: 'rgba(183,110,74,0.04)' }}
              >
                <div className="text-3xl mb-3">{v.emoji}</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.65)', letterSpacing: '0.05em' }}>{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
