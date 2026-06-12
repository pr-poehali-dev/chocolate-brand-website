import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/c5496dbd-3b9c-41dd-9ce2-dc45f66ed24f/files/e1d891e0-2fd7-4679-8024-39647189c155.jpg';

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
          <p style={{ maxWidth: '540px', fontSize: '0.95rem', color: 'rgba(239,230,217,0.6)', lineHeight: 1.78 }}>
            Познакомьтесь с проектом, который возрождает традиции тульского шоколада и создаёт уникальный культурно-гастрономический опыт.
          </p>
        </div>
      </section>

      {/* 1. История создания бренда */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-4">Основание</div>
              <h2 className="choco-heading mb-6">История создания бренда</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.87, marginBottom: '1.25rem' }}>
                В 2018 году группа тульских энтузиастов — историк, шоколатье и предприниматель — объединились с одной идеей: создать в Туле место, где шоколад становится частью культурного опыта.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.87, marginBottom: '1.25rem' }}>
                Начав с небольшой мастерской на Советской, они открыли первый выставочный зал, где история города переплелась с искусством шоколатье. Уже через год к ним выстраивались очереди на экскурсии.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.87 }}>
                Сегодня «Философия шоколада» — это два пространства в центре Тулы, собственное производство, музейная экспозиция и сотни мастер-классов в год.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { year: '2018', event: 'Открытие первой мастерской на ул. Советской' },
                { year: '2019', event: 'Запуск экскурсионной программы и выставочного зала' },
                { year: '2021', event: 'Открытие второго пространства на Металлистов, 8' },
                { year: '2023', event: 'Более 5 000 гостей в год. Победитель премии «Тульский бренд»' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 items-start p-5 rounded-sm"
                  style={{ border: '1px solid rgba(183,110,74,0.18)', background: 'rgba(183,110,74,0.03)' }}
                >
                  <div
                    className="flex-shrink-0 px-3 py-1 rounded-sm text-center"
                    style={{ background: 'rgba(183,110,74,0.12)', border: '1px solid rgba(183,110,74,0.3)' }}
                  >
                    <span style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.2rem', color: 'var(--copper)', fontWeight: 600 }}>{item.year}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.65, paddingTop: '0.2rem' }}>{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Историческая справка */}
      <section className="choco-section" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="flex flex-col items-center justify-center gap-6 rounded-sm order-2 lg:order-1"
              style={{
                minHeight: '320px',
                background: 'rgba(183,110,74,0.05)',
                border: '1px solid rgba(183,110,74,0.2)',
                padding: '2.5rem',
              }}
            >
              <div className="text-6xl">🏛️</div>
              <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.35rem', color: 'var(--copper)', textAlign: 'center' }}>
                Тула · XIX век
              </div>
              <div
                className="w-full rounded-sm p-4"
                style={{ background: 'rgba(22,15,11,0.5)', border: '1px solid rgba(183,110,74,0.15)' }}
              >
                <p style={{ fontSize: '0.82rem', color: 'rgba(239,230,217,0.5)', lineHeight: 1.7, textAlign: 'center', fontStyle: 'italic' }}>
                  «Шоколадные мастерские купцов Воронцовых и Преображенских снабжали сладким товаром всю центральную Россию»
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="section-label mb-4">История</div>
              <h2 className="choco-heading mb-6">Шоколадное дело в Туле</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.87, marginBottom: '1.25rem' }}>
                Мало кто знает, что Тула была не только городом самоваров и пряников. В конце XIX века здесь процветало шоколадное производство: купеческие мастерские работали с лучшим какао из Южной Америки и производили конфеты, известные по всей Российской Империи.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.87, marginBottom: '1.25rem' }}>
                После 1917 года частное производство было национализировано, рецептуры осели в семейных архивах. Уникальные техники темперирования, характерные именно для тульских мастеров, оказались под угрозой забвения.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.87 }}>
                Мы провели архивную работу, восстановили исторические рецепты и создали музейную экспозицию, которая рассказывает эту почти забытую главу истории города.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Миссия */}
      <section className="choco-section">
        <div className="choco-container">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Зачем мы</div>
            <h2 className="choco-heading">Миссия проекта</h2>
            <div className="divider-copper centered" />
            <p
              style={{
                maxWidth: '580px',
                margin: '0 auto 3rem',
                fontFamily: 'Cormorant Infant, serif',
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontStyle: 'italic',
                color: 'var(--copper)',
                lineHeight: 1.75,
              }}
            >
              «Популяризация культурного наследия Тулы через гастрономический опыт»
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: 'BookOpen',
                title: 'Сохранение наследия',
                text: 'Восстанавливаем исторические рецептуры, создаём архивы и экспозиции, чтобы знание о тульском шоколадном деле не исчезло.',
              },
              {
                icon: 'Users',
                title: 'Живой опыт',
                text: 'Верим, что история воспринимается глубже через вкус, запах и прикосновение. Каждая экскурсия и мастер-класс — погружение в культуру.',
              },
              {
                icon: 'Sprout',
                title: 'Новая жизнь традиций',
                text: 'Соединяем старинные рецептуры с современным подходом к качеству, эстетике и осознанному производству.',
              },
            ].map((item, i) => (
              <div key={i} className="choco-card text-center">
                <div
                  className="w-13 h-13 mx-auto mb-5 flex items-center justify-center rounded-sm"
                  style={{ width: '52px', height: '52px', background: 'rgba(183,110,74,0.1)', border: '1px solid rgba(183,110,74,0.25)' }}
                >
                  <Icon name={item.icon} size={22} style={{ color: 'var(--copper)' }} fallback="Star" />
                </div>
                <h3 style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.3rem', color: 'var(--cream)', marginBottom: '0.75rem' }}>{item.title}</h3>
                <div className="divider-copper centered" style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.58)', lineHeight: 1.75 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Производство */}
      <section className="choco-section" style={{ background: 'rgba(183,110,74,0.03)' }}>
        <div className="choco-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label mb-4">Ремесло</div>
              <h2 className="choco-heading mb-6">Производство</h2>
              <div className="divider-copper" />
              <p style={{ fontSize: '0.95rem', color: 'rgba(239,230,217,0.68)', lineHeight: 1.87, marginBottom: '1.5rem' }}>
                Наш подход к изготовлению шоколада строится на трёх принципах: лучшее сырьё, ручной труд и уважение к традиции.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: 'Package',
                    title: 'Бельгийское сырьё',
                    text: 'Используем бельгийский шоколад Callebaut — один из лучших в мире. Каждая партия проходит входной контроль качества.',
                  },
                  {
                    icon: 'Sparkles',
                    title: 'Ручное темперирование',
                    text: 'Темперируем шоколад вручную на мраморной плите — так, как делали тульские мастера XIX века. Это даёт блеск и правильный хруст.',
                  },
                  {
                    icon: 'Candy',
                    title: 'Авторские рецептуры',
                    text: 'Каждая начинка разработана нашими шоколатье — от классических пралине до нетривиальных сочетаний с тульскими травами и мёдом.',
                  },
                  {
                    icon: 'Eye',
                    title: 'Контроль на каждом этапе',
                    text: 'Ни одно изделие не покидает мастерскую без проверки. Внешний вид, вкус, текстура — всё соответствует нашим стандартам.',
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="flex-shrink-0 flex items-center justify-center rounded-sm"
                      style={{ width: '40px', height: '40px', background: 'rgba(183,110,74,0.1)', border: '1px solid rgba(183,110,74,0.22)', marginTop: '2px' }}
                    >
                      <Icon name={step.icon} size={17} style={{ color: 'var(--copper)' }} fallback="Star" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.2rem', color: 'var(--cream)', marginBottom: '0.3rem' }}>{step.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(239,230,217,0.58)', lineHeight: 1.7 }}>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div
                className="flex flex-col items-center justify-center gap-5 rounded-sm"
                style={{ height: '260px', background: 'rgba(183,110,74,0.06)', border: '1px solid rgba(183,110,74,0.22)' }}
              >
                <span className="text-5xl">✨</span>
                <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '1.3rem', color: 'var(--copper)', textAlign: 'center' }}>
                  Ручное производство
                </div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(239,230,217,0.35)', textAlign: 'center', maxWidth: '220px', lineHeight: 1.6 }}>
                  Мастерская на ул. Советской, 15
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '5 000+', label: 'гостей в год' },
                  { num: '40+', label: 'видов шоколада' },
                  { num: '8 лет', label: 'опыта' },
                  { num: '2', label: 'пространства' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="py-5 px-4 rounded-sm text-center"
                    style={{ background: 'rgba(183,110,74,0.05)', border: '1px solid rgba(183,110,74,0.15)' }}
                  >
                    <div style={{ fontFamily: 'Cormorant Infant, serif', fontSize: '2rem', color: 'var(--copper)', marginBottom: '0.2rem' }}>{stat.num}</div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(239,230,217,0.45)', letterSpacing: '0.06em' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
