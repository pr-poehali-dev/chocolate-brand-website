const HERO_IMG = 'https://cdn.poehali.dev/projects/c5496dbd-3b9c-41dd-9ce2-dc45f66ed24f/files/e1d891e0-2fd7-4679-8024-39647189c155.jpg';

const cards = [
  {
    emoji: '📖',
    title: 'История проекта',
    text: 'В 2018 году группа тульских энтузиастов решила возродить традиции местного шоколадного производства. Начав с небольшой мастерской, мы выросли в культурное пространство, известное за пределами региона. Каждый шаг нашего пути — это история любви к шоколаду и к Туле.',
  },
  {
    emoji: '🏛️',
    title: 'История тульского шоколада',
    text: 'Тула начала производить шоколад ещё в конце XIX века. Купеческие мастерские снабжали сладким товаром всю центральную Россию. После революции производство было национализировано, но рецепты сохранились в семейных архивах. Мы собрали эти рецептуры и дали им новую жизнь.',
  },
  {
    emoji: '🌟',
    title: 'Миссия',
    text: 'Наша миссия — сохранить и популяризировать богатое кондитерское наследие Тулы, создавая пространство для диалога между традицией и современностью. Мы верим, что шоколад — это не просто сладость, а культурный артефакт, несущий историю места и людей.',
  },
  {
    emoji: '⚙️',
    title: 'Производство',
    text: 'Мы работаем по методу bean-to-bar: закупаем необжаренные какао-бобы напрямую у фермеров, сами проводим все этапы обработки. Наша мастерская оснащена профессиональным оборудованием, но каждое изделие проходит финальную отделку вручную — только так рождается настоящий артизанский шоколад.',
  },
];

const team = [
  { name: 'Алексей Воронов', role: 'Основатель и шоколатье', emoji: '👨‍🍳' },
  { name: 'Марина Соколова', role: 'Историк кондитерского дела', emoji: '👩‍🔬' },
  { name: 'Дмитрий Лебедев', role: 'Мастер по трюфелям', emoji: '👨‍🎨' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '60vh',
          background: `linear-gradient(to bottom, rgba(30,22,18,0.3) 0%, rgba(30,22,18,0.97) 100%), url(${HERO_IMG}) center/cover no-repeat`,
        }}
      >
        <div className="choco-container pb-16 pt-36">
          <div className="section-label mb-4">О нас</div>
          <h1 className="choco-heading" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>
            Люди за каждой<br />
            <em style={{ color: 'var(--copper)', fontStyle: 'italic' }}>плиткой шоколада</em>
          </h1>
          <div className="divider-copper" />
        </div>
      </section>

      {/* 4 cards */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="choco-card">
                <div className="text-4xl mb-5">{card.emoji}</div>
                <h3 className="choco-subheading mb-3" style={{ fontSize: '1.5rem' }}>{card.title}</h3>
                <div className="divider-copper" style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.9rem', color: 'rgba(239,230,217,0.65)', lineHeight: 1.8 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Команда</div>
            <h2 className="choco-heading">Наши мастера</h2>
            <div className="divider-copper centered" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {team.map((member, i) => (
              <div key={i} className="choco-card text-center">
                <div className="text-5xl mb-4">{member.emoji}</div>
                <h3 style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--copper)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-label mb-4">Ценности</div>
            <h2 className="choco-heading mb-6">Что нас объединяет</h2>
            <div className="divider-copper centered" />
            <p style={{ fontSize: '1.05rem', color: 'rgba(239,230,217,0.65)', lineHeight: 1.85, marginBottom: '3rem' }}>
              Мы создаём не просто шоколад — мы создаём опыт. Опыт встречи с историей, ремеслом и вкусом. Каждый гость нашего пространства уходит с чем-то большим, чем плитка шоколада.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { emoji: '🤝', label: 'Честность' },
                { emoji: '🎯', label: 'Мастерство' },
                { emoji: '🌱', label: 'Устойчивость' },
                { emoji: '💛', label: 'Любовь к делу' },
              ].map((v, i) => (
                <div
                  key={i}
                  className="py-5 px-3 rounded-sm text-center"
                  style={{ border: '1px solid rgba(183,110,74,0.2)', background: 'rgba(183,110,74,0.04)' }}
                >
                  <div className="text-3xl mb-2">{v.emoji}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.65)', letterSpacing: '0.05em' }}>{v.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
