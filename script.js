const languagesData = {
  ru: {
    accessibility: {
      skip: 'Перейти к портфолио'
    },
    brand: {
      subline: 'Premium Design Atelier'
    },
    nav: {
      styles: 'Стили',
      services: 'Услуги',
      portfolio: 'Портфолио',
      calculator: 'Интерактивный расчет',
      contacts: 'Контакты',
      cta: 'Обсудить проект'
    },
    hero: {
      eyebrow: 'Элитные интерьеры и ландшафты под ключ',
      title: 'Дорогой дизайн.',
      lead: 'Интерьеры, ландшафты и приватные пространства с сильной визуальной подачей для жизни, продаж и контента в TikTok.',
      primaryCta: 'Рассчитать стоимость',
      secondaryCta: 'Смотреть портфолио',
      metricOne: 'премиальных объектов',
      metricTwo: 'интерьеров и ландшафтов',
      metricThree: 'ведение до реализации',
      chooseLabel: 'Выберите визуальную философию',
      loftTitle: 'INDUSTRIAL LOFT',
      loftText: 'Графит, бетон, металл, янтарный неон и brutal luxury.',
      oldTitle: 'QUIET LUXURY',
      oldText: 'Мрамор, кремовые тона, латунь, шелк и аристократичная тишина.',
      minimalTitle: 'MODERN MINIMAL',
      minimalText: 'Чистые линии, воздух, архитектурный свет и дорогая простота.',
      bioTitle: 'BIOPHILIC OASIS',
      bioText: 'Сады, вода, натуральный камень, дерево и ощущение private resort.',
      japandiTitle: 'JAPANDI CALM',
      japandiText: 'Японская тишина, скандинавское тепло и тактильные материалы.',
      hitechTitle: 'FUTURE LUXURY',
      hitechText: 'Умный дом, темное стекло, хром, LED-сценарии и технологичный вау-эффект.'
    },
    styles: {
      eyebrow: 'Больше визуальных сценариев',
      title: 'Шесть направлений, чтобы клиент сразу увидел свой масштаб.',
      lead: 'Переключатель меняет не только цвет: он перестраивает свет, шрифтовое настроение, карточки, акценты и атмосфере всей страницы.'
    },
    mood: {
      eyebrow: 'Фото-атмосфера',
      title: 'Больше живых визуалов прямо в блоке стилей.',
      lead: 'Клиент сразу видит фактуры, свет, материалы, садовые сценарии и премиальную глубину проекта.',
      cardOne: 'Future living room',
      cardTwo: 'Quiet kitchen',
      cardThree: 'Soft lounge',
      cardFour: 'Minimal volume',
      cardFive: 'Private garden'
    },
    portfolio: {
      eyebrow: 'Портфолио для вау-контента',
      title: 'Проекты, которые хочется показывать крупным планом.',
      lead: 'Интерьеры и ландшафты собраны в кинематографичную сетку: масштаб, свет, материалы и ощущение дорогого объекта.',
      before: 'До',
      after: 'После',
      sliderEyebrow: 'Интерактив до / после',
      sliderTitle: 'До / после для TikTok: один свайп — и проект оживает.',
      sliderText: 'Клиент видит не просто красивые картинки, а путь от пустого бетона или участка до полноценного премиального пространства.'
    },
    services: {
      eyebrow: 'Услуги и цены',
      title: 'От концепции до полностью готового объекта.',
      lead: 'Мы берем на себя визуальную стратегию, документацию, комплектацию, надзор и финальную атмосферу.'
    },
    quiz: {
      eyebrow: 'Интерактивный расчет',
      title: 'Получите ориентир по бюджету до первой встречи.',
      lead: 'Ответьте на 3 вопроса. Анкета отправится напрямую в ваш Телеграм.',
      step: 'Шаг',
      next: 'Далее',
      back: 'Назад',
      send: 'Получить смету в Telegram',
      validationChoice: 'Выберите один из вариантов, чтобы продолжить.',
      success: 'Анкета успешно отправлена в ваш Telegram!',
      error: 'Ошибка отправки. Мы скопировали заявку и открыли диалог.',
      questions: [
        {
          id: 'objectType',
          title: 'Какой объект нужно оформить?',
          answers: [
            { value: 'house', title: 'Частный дом', description: 'Интерьер, фасад, терраса и приватные зоны.' },
            { value: 'landscape', title: 'Участок / ландшафт', description: 'Сад, бассейн, дорожки, свет и зоны отдыха.' },
            { value: 'penthouse', title: 'Пентхаус', description: 'Видовой интерьер с дорогими материалами и сценарием света.' }
          ]
        },
        {
          id: 'style',
          title: 'Какой стиль ближе вашему проекту?',
          answers: [
            { value: 'loft', title: 'Industrial Loft', description: 'Темная графика, бетон, металл, теплый неон.' },
            { value: 'oldmoney', title: 'Quiet Luxury', description: 'Кремовый мрамор, латунь, спокойная аристократия.' },
            { value: 'minimal', title: 'Modern Minimal', description: 'Чистая архитектура, воздух и дорогая простота.' },
            { value: 'bio', title: 'Biophilic Oasis', description: 'Природа, вода, дерево, камень и resort-атмосфера.' },
            { value: 'japandi', title: 'Japandi Calm', description: 'Тишина, тактильность, натуральные фактуры.' },
            { value: 'hitech', title: 'Future Luxury', description: 'Умный дом, LED, стекло, технологичный вау-эффект.' }
          ]
        },
        {
          id: 'area',
          title: 'Какая примерная площадь?',
          answers: [
            { value: 'under150', title: 'До 150 м²', description: 'Компактный объект с точечной премиальной проработкой.' },
            { value: '150-350', title: '150–350 м²', description: 'Дом, пентхаус или большой интерьер под ключ.' },
            { value: '350+', title: '350+ м²', description: 'Масштабная резиденция, участок или комплексный объект.' }
          ]
        }
      ],
      leadTitle: 'Куда отправить расчет?',
      leadText: 'Оставьте имя и телефон/Telegram. Анкета придет в бота моментально.',
      nameLabel: 'Имя',
      contactLabel: 'Телефон или Telegram',
      namePlaceholder: 'Например, Алина',
      contactPlaceholder: '+996 ... или @username'
    },
    forms: {
      eyebrow: 'Быстрая консультация',
      title: 'Расскажите о проекте.',
      nameLabel: 'Ваше имя',
      contactLabel: 'Телефон или Telegram',
      messageLabel: 'Что нужно спроектировать?',
      namePlaceholder: 'Например, Алина',
      contactPlaceholder: '+996 ... или @username',
      messagePlaceholder: 'Дом, участок, пентхаус, ресторан...',
      submit: 'Отправить в Telegram',
      success: 'Заявка отправлена в Telegram!',
      error: 'Ошибка отправки.',
      nameError: 'Введите имя минимум из 2 символов.',
      contactError: 'Введите корректный телефон или Telegram username.'
    },
    contacts: {
      mapLabel: 'Онлайн и выезд',
      mapTitle: 'Работаем онлайн и на объекте',
      mapText: 'Принимаем заявки онлайн, обсуждаем проект в Telegram и выезжаем на объект по договоренности — без лишних офисных формальностей.'
    },
    process: {
      eyebrow: 'Как строится проект',
      title: 'Премиальный результат начинается с точной системы.',
      lead: 'Мы показываем понятный маршрут от первого сообщения до финальной визуальной концепции, чтобы клиент сразу чувствовал масштаб.',
      stepOneTitle: 'Бриф и стиль',
      stepOneText: 'Фиксируем объект, вкус, бюджет, нужные сценарии жизни и визуальную философию.',
      stepTwoTitle: 'Концепция',
      stepTwoText: 'Собираем moodboard, планировочную логику, материалы, свет и ключевые кадры.',
      stepThreeTitle: 'Визуализация',
      stepThreeText: 'Даем эффектные ракурсы, понятные решения и презентацию, которую хочется пересматривать.',
      stepFourTitle: 'Передача',
      stepFourText: 'Финализируем пакет материалов, рекомендации и следующий шаг по реализации.'
    },
    footer: {
      copy: 'Премиальные интерьеры и ландшафты с сильной визуальной идентичностью.',
      socialTitle: 'Соцсети',
      contactsTitle: 'Контакты',
      hours: 'Пн–Сб: 10:00–20:00',
      legal: 'Премиальный шаблон для дизайн-проектов. Все права защищены.'
    }
  },
  kg: {
    accessibility: {
      skip: 'Портфолиого өтүү'
    },
    brand: {
      subline: 'Premium Design Atelier'
    },
    nav: {
      styles: 'Стилдер',
      services: 'Кызматтар',
      portfolio: 'Портфолио',
      calculator: 'Интерактивдүү эсеп',
      contacts: 'Байланыш',
      cta: 'Долбоорду талкуулоо'
    },
    hero: {
      eyebrow: 'Премиум интерьер жана ландшафт ачкычка чейин',
      title: 'Кымбат дизайн.',
      lead: 'Интерьер, ландшафт жана приват мейкиндиктер жашоо, сатуу жана TikTok контенти үчүн күчтүү визуал менен.',
      primaryCta: 'Баасын эсептөө',
      secondaryCta: 'Портфолиону көрүү',
      metricOne: 'премиум объект',
      metricTwo: 'интерьер жана ландшафт',
      metricThree: 'толук коштоо',
      chooseLabel: 'Визуалдык философияны тандаңыз',
      loftTitle: 'INDUSTRIAL LOFT',
      loftText: 'Графит, бетон, металл, янтарь неон жана brutal luxury.',
      oldTitle: 'QUIET LUXURY',
      oldText: 'Мрамор, крем түстөр, латунь, жибек жана аристократиялык тынчтык.',
      minimalTitle: 'MODERN MINIMAL',
      minimalText: 'Таза сызыктар, аба, архитектуралык жарык жана кымбат жөнөкөйлүк.',
      bioTitle: 'BIOPHILIC OASIS',
      bioText: 'Бакча, суу, табигый таш, жыгач жана private resort сезими.',
      japandiTitle: 'JAPANDI CALM',
      japandiText: 'Жапон тынчтыгы, скандинав жылуулугу жана тактилдүү материалдар.',
      hitechTitle: 'FUTURE LUXURY',
      hitechText: 'Акылдуу үй, кара айнек, хром, LED сценарий жана технологиялык вау-эффект.'
    },
    styles: {
      eyebrow: 'Көбүрөөк визуалдык сценарий',
      title: 'Кардар масштабын дароо көрүшү үчүн алты багыт.',
      lead: 'Которгуч түстү гана эмес, жарыкты, шрифт маанайын, карточкаларды, акценттерди жана бүт барактын атмосферасын өзгөрөт.'
    },
    mood: {
      eyebrow: 'Фото атмосфера',
      title: 'Стиль блогунда көбүрөөк жандуу визуал.',
      lead: 'Кардар фактураны, жарыкты, материалды, бакча сценарийин жана премиум тереңдикти дароо көрөт.',
      cardOne: 'Future living room',
      cardTwo: 'Quiet kitchen',
      cardThree: 'Soft lounge',
      cardFour: 'Minimal volume',
      cardFive: 'Private garden'
    },
    portfolio: {
      eyebrow: 'Вау-контент үчүн портфолио',
      title: 'Жакын планда көрсөткүң келген долбоорлор.',
      lead: 'Интерьер жана ландшафт кинематографиялык сеткага чогултулган: масштаб, жарык, материалдар жана кымбат объект сезими.',
      before: 'Чейин',
      after: 'Кийин',
      sliderEyebrow: 'Интерактивдүү чейин / кийин',
      sliderTitle: 'TikTok үчүн чейин / кийин: бир свайп — долбоор жанданды.',
      sliderText: 'Кардар жөн гана сүрөттү эмес, бош бетон же участоктон премиум мейкиндикке чейинки жолду көрөт.'
    },
    services: {
      eyebrow: 'Кызматтар жана баалар',
      title: 'Концепциядан толук даяр объектке чейин.',
      lead: 'Визуалдык стратегияны, документацияны, комплектацияны, көзөмөлдү жана финалдык атмосфераны өзүбүз алабыз.'
    },
    quiz: {
      eyebrow: 'Интерактивдүү эсеп',
      title: 'Биринчи жолугушууга чейин бюджет багытын алыңыз.',
      lead: '3 суроого жооп бериңиз. Анкета Telegram аркылуу жөнөтүлөт.',
      step: 'Кадам',
      next: 'Кийинки',
      back: 'Артка',
      send: 'Сметаны Telegramга алуу',
      validationChoice: 'Улантуу үчүн бир вариантты тандаңыз.',
      success: 'Анкета жөнөтүлдү. Биз жакында байланышабыз.',
      error: 'Ката кетти.',
      questions: [
        {
          id: 'objectType',
          title: 'Кайсы объектти жасалгалоо керек?',
          answers: [
            { value: 'house', title: 'Жеке үй', description: 'Интерьер, фасад, терраса жана приват зоналар.' },
            { value: 'landscape', title: 'Участок / ландшафт', description: 'Бакча, бассейн, жолдор, жарык жана эс ава турган зоналар.' },
            { value: 'penthouse', title: 'Пентхаус', description: 'Көрүнүшү күчтүү интерьер, кымбат материалдар жана жарык сценарийи.' }
          ]
        },
        {
          id: 'style',
          title: 'Кайсы стиль сизге жакыныраак?',
          answers: [
            { value: 'loft', title: 'Industrial Loft', description: 'Кара графика, бетон, металл, жылуу неон.' },
            { value: 'oldmoney', title: 'Quiet Luxury', description: 'Крем мрамор, латунь, тынч аристократия.' },
            { value: 'minimal', title: 'Modern Minimal', description: 'Таза архитектура, аба жана кымбат жөнөкөйлүк.' },
            { value: 'bio', title: 'Biophilic Oasis', description: 'Табият, суу, жыгач, таш жана resort атмосфера.' },
            { value: 'japandi', title: 'Japandi Calm', description: 'Тынчтык, тактилдүүлүк, табигый фактуралар.' },
            { value: 'hitech', title: 'Future Luxury', description: 'Акылдуу үй, LED, айнек, технологиялык вау-эффект.' }
          ]
        },
        {
          id: 'area',
          title: 'Болжолдуу аянты канча?',
          answers: [
            { value: 'under150', title: '150 м² чейин', description: 'Компакт объект, премиум деталдуу иш.' },
            { value: '150-350', title: '150–350 м²', description: 'Үй, пентхаус же чоң интерьер ачкычка чейин.' },
            { value: '350+', title: '350+ м²', description: 'Чоң резиденция, участок же комплекстүү объект.' }
          ]
        }
      ],
      leadTitle: 'Эсепти кайда жөнөтөбүз?',
      leadText: 'Атыңызды жана телефон/Telegram калтырыңыз.',
      nameLabel: 'Атыңыз',
      contactLabel: 'Телефон же Telegram',
      namePlaceholder: 'Мисалы, Алина',
      contactPlaceholder: '+996 ... же @username'
    },
    forms: {
      eyebrow: 'Тез консультация',
      title: 'Долбоор тууралуу айтеп бериңиз.',
      nameLabel: 'Атыңыз',
      contactLabel: 'Телефон же Telegram',
      messageLabel: 'Эмне долбоорлоо керек?',
      namePlaceholder: 'Мисалы, Алина',
      contactPlaceholder: '+996 ... же @username',
      messagePlaceholder: 'Үй, участок, пентхаус, ресторан...',
      submit: 'Telegramга жөнөтүү',
      success: 'Заявка Telegramга жөнөтүлдү. Биз жакында байланышабыз.',
      error: 'Ката кетти.',
      nameError: 'Атыңыз кеминде 2 символ болушу керек.',
      contactError: 'Туура телефон же Telegram username киргизиңиз.'
    },
    contacts: {
      mapLabel: 'Онлайн жана объектке чыгуу',
      mapTitle: 'Онлайн жана объектте иштейбиз',
      mapText: 'Заявкаларды онлайн кабыл алабыз, долбоорду Telegramда талкуулайбыз жана келишим боюнча объектке чыгабыз.'
    },
    process: {
      eyebrow: 'Долбоор кантип курулат',
      title: 'Премиум натыйжа так системадан башталат.',
      lead: 'Биринчи билдирүүдөн финалдык визуалдык концепцияга чейинки жолду көрсөтөбүз, кардар масштабды дароо сезет.',
      stepOneTitle: 'Бриф жана стиль',
      stepOneText: 'Объектти, тавитти, бюджетти, жашоо сценарийин жана визуалдык философияны тактайбыз.',
      stepTwoTitle: 'Концепция',
      stepTwoText: 'Moodboard, планировка логикасы, материалдар, жарык жана негизги кадрларды чогултабыз.',
      stepThreeTitle: 'Визуализация',
      stepThreeText: 'Күчтүү ракурстарды, түшүнүктүү чечимдерди жана кайра көргүң келген презентацияны беребиз.',
      stepFourTitle: 'Тапшыруу',
      stepFourText: 'Материалдар пакетин, сунуштарды жана реализация боюнча кийинки кадамды финалдаштырабыз.'
    },
    footer: {
      copy: 'Күчтүү визуалдык идентификациясы бар премиум интерьер жана ландшафттар.',
      socialTitle: 'Соцтармактар',
      contactsTitle: 'Байланыш',
      hours: 'Дүй–Иш: 10:00–20:00',
      legal: 'Дизайн долбоорлору үчүн премиум шаблон. Бардык укуктар корголгон.'
    }
  }
};

const styleDirections = [
  {
    id: 'loft',
    tag: '01 / LOFT',
    title: { ru: 'Industrial Loft', kg: 'Industrial Loft' },
    text: { ru: 'Бетон, металл, темный графит и теплый неон для сильного мужского характера.', kg: 'Бетон, металл, кара графит жана жылуу неон — күчтүү мүнөз.' },
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'oldmoney',
    tag: '02 / QUIET',
    title: { ru: 'Quiet Luxury', kg: 'Quiet Luxury' },
    text: { ru: 'Мрамор, шелк, латунь и мягкий свет без визуального шума.', kg: 'Мрамор, жибек, латунь жана жумшак жарык.' },
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'minimal',
    tag: '03 / MINIMAL',
    title: { ru: 'Modern Minimal', kg: 'Modern Minimal' },
    text: { ru: 'Архитектурная чистота, скрытые системы хранения и идеальные пропорции.', kg: 'Таза архитектура, жашырылган сактоо жана идеалдуу пропорциялар.' },
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'bio',
    tag: '04 / NATURE',
    title: { ru: 'Biophilic Oasis', kg: 'Biophilic Oasis' },
    text: { ru: 'Ландшафт, вода, натуральные фактуры и ощущение приватного курорта.', kg: 'Ландшафт, суу, табигый фактура жана жеке курорт сезими.' },
    image: 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'japandi',
    tag: '05 / CALM',
    title: { ru: 'Japandi Calm', kg: 'Japandi Calm' },
    text: { ru: 'Тактильная тишина, дерево, глина, лен и мягкая асимметрия.', kg: 'Тактилдүү тынчтык, жыгач, чопо, лен жана жумшак асимметрия.' },
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'hitech',
    tag: '06 / FUTURE',
    title: { ru: 'Future Luxury', kg: 'Future Luxury' },
    text: { ru: 'Умный дом, темное стекло, хром и световые сценарии для видеоэффекта.', kg: 'Акылдуу үй, кара айнек, хром жана видеоэффект үчүн жарык сценарийи.' },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'
  }
];

const projectData = [
  {
    title: { ru: 'Резиденция на склоне', kg: 'Эңиштеги резиденция' },
    style: 'loft',
    area: '420 м²',
    budget: '$180k+',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: { ru: 'Пентхаус Quiet Luxury', kg: 'Quiet Luxury пентхаус' },
    style: 'oldmoney',
    area: '210 м²',
    budget: '$95k+',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: { ru: 'Минималистичная вилла', kg: 'Минималисттик вилла' },
    style: 'minimal',
    area: '360 м²',
    budget: '$140k+',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: { ru: 'Ландшафтный оазис', kg: 'Ландшафт оазиси' },
    style: 'bio',
    area: '18 соток',
    budget: '$120k+',
    image: 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: { ru: 'Japandi апартаменты', kg: 'Japandi батири' },
    style: 'japandi',
    area: '145 м²',
    budget: '$62k+',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=85'
  },
  {
    title: { ru: 'High-Tech гостиная', kg: 'High-Tech конок бөлмө' },
    style: 'hitech',
    area: '190 м²',
    budget: '$88k+',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85'
  }
];

const serviceData = [
  {
    icon: '01',
    title: { ru: 'Дизайн интерьера', kg: 'Интерьер дизайны' },
    text: { ru: 'Концепция, планировки, визуализации, чертежи, материалы и сценарии света.', kg: 'Концепция, планировка, визуализация, чиймелер, материалдар жана жарык.' }
  },
  {
    icon: '02',
    title: { ru: 'Ландшафтная архитектура', kg: 'Ландшафт архитектурасы' },
    text: { ru: 'Сад, террасы, бассейн, дорожки, посадки и вечерняя подсветка.', kg: 'Бакча, терраса, бассейн, жолдор, өсүмдүктөр жана кечки жарык.' }
  },
  {
    icon: '03',
    title: { ru: 'Авторский надзор', kg: 'Автордук көзөмөл' },
    text: { ru: 'Контроль реализации, правки на объекте и защита визуального результата.', kg: 'Ишке ашырууну көзөмөлдөө, объектте түзөтүү жана финалдык сапат.' }
  },
  {
    icon: '04',
    title: { ru: 'Комплектация под ключ', kg: 'Ачкычка чейин комплектация' },
    text: { ru: 'Мебель, свет, камень, текстиль, декор, логистика и финальная стилизация.', kg: 'Эмерек, жарык, таш, текстиль, декор, логистика жана финалдык стиль.' }
  }
];

const state = {
  language: 'ru',
  style: 'loft',
  quizStep: 0,
  quizAnswers: {}
};

const selectors = {
  languageButtons: '[data-lang]',
  styleButtons: '[data-style]',
  i18n: '[data-i18n]',
  i18nPlaceholder: '[data-i18n-placeholder]',
  reveal: '[data-reveal]'
};

const dom = {
  body: document.body,
  header: document.querySelector('.site-header'),
  navToggle: document.querySelector('.nav-toggle'),
  navList: document.querySelector('.nav-list'),
  navLinks: document.querySelectorAll('.nav-list a'),
  heroTitle: document.querySelector('.hero__title'),
  styleGallery: document.querySelector('#styleGallery'),
  projectGrid: document.querySelector('#projectGrid'),
  serviceGrid: document.querySelector('#serviceGrid'),
  quizMount: document.querySelector('#quizMount'),
  beforeAfter: document.querySelector('#beforeAfter'),
  beforeLayer: document.querySelector('#beforeLayer'),
  beforeHandle: document.querySelector('#beforeHandle'),
  consultationForm: document.querySelector('#consultationForm'),
  consultationStatus: document.querySelector('#consultationStatus')
};

function init() {
  renderStaticContent();
  setLanguage(state.language, { animateTitle: true });
  setStyle(state.style);
  renderQuiz();
  initEvents();
  initBeforeAfterSlider();
  initRevealAnimations();
  updateHeader();
}

function initEvents() {
  document.addEventListener('click', handleDocumentClick);
  dom.navToggle.addEventListener('click', toggleNavigation);
  dom.consultationForm.addEventListener('submit', handleConsultationSubmit);
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', updateHeader);
}

function handleDocumentClick(event) {
  const languageButton = event.target.closest(selectors.languageButtons);
  if (languageButton) {
    setLanguage(languageButton.dataset.lang, { animateTitle: true });
    return;
  }

  const styleButton = event.target.closest(selectors.styleButtons);
  if (styleButton) {
    setStyle(styleButton.dataset.style);
    return;
  }

  if (event.target.closest('.nav-list a')) {
    closeNavigation();
  }
}

function renderStaticContent() {
  renderStyleGallery();
  renderProjects();
  renderServices();
}

function setLanguage(language, options = {}) {
  if (!languagesData[language]) return;
  state.language = language;
  document.documentElement.lang = language === 'kg' ? 'ky' : 'ru';

  document.querySelectorAll(selectors.languageButtons).forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === language);
  });

  document.querySelectorAll(selectors.i18n).forEach((element) => {
    const value = getTranslation(element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll(selectors.i18nPlaceholder).forEach((element) => {
    const value = getTranslation(element.dataset.i18nPlaceholder);
    if (value) element.setAttribute('placeholder', value);
  });

  renderStyleGallery();
  renderProjects();
  renderServices();
  renderQuiz();

  if (options.animateTitle) animateHeroTitle();
}

function setStyle(style) {
  const validStyle = styleDirections.some((item) => item.id === style) ? style : 'loft';
  state.style = validStyle;

  dom.body.classList.remove('theme-loft', 'theme-oldmoney', 'theme-minimal', 'theme-bio', 'theme-japandi', 'theme-hitech');
  dom.body.classList.add(`theme-${validStyle}`);

  document.querySelectorAll(selectors.styleButtons).forEach((button) => {
    button.classList.toggle('is-active', button.dataset.style === validStyle);
  });
}

function renderStyleGallery() {
  dom.styleGallery.innerHTML = styleDirections.map((style) => `
    <article class="style-card" data-style="${escapeAttribute(style.id)}" data-reveal>
      <img class="style-card__media" src="${escapeAttribute(style.image)}" alt="${escapeAttribute(style.title[state.language])}" loading="lazy" />
      <div class="style-card__top">
        <span class="style-card__tag">${escapeHTML(style.tag)}</span>
        <span>${style.id === state.style ? 'ACTIVE' : 'VIEW'}</span>
      </div>
      <h3>${escapeHTML(style.title[state.language])}</h3>
      <p>${escapeHTML(style.text[state.language])}</p>
    </article>
  `).join('');
  observeNewRevealElements();
}

function renderProjects() {
  dom.projectGrid.innerHTML = projectData.map((project) => `
    <article class="project-card" data-reveal>
      <img src="${escapeAttribute(project.image)}" alt="${escapeAttribute(project.title[state.language])}" loading="lazy" />
      <div class="project-card__overlay">
        <h3>${escapeHTML(project.title[state.language])}</h3>
        <div class="project-card__meta">
          <span>${escapeHTML(getStyleLabel(project.style))}</span>
          <span>${escapeHTML(project.area)}</span>
          <span>${escapeHTML(project.budget)}</span>
        </div>
      </div>
    </article>
  `).join('');
  observeNewRevealElements();
}

function renderServices() {
  dom.serviceGrid.innerHTML = serviceData.map((service) => `
    <article class="service-card" data-reveal>
      <span class="service-card__icon">${escapeHTML(service.icon)}</span>
      <h3>${escapeHTML(service.title[state.language])}</h3>
      <p>${escapeHTML(service.text[state.language])}</p>
    </article>
  `).join('');
  observeNewRevealElements();
}

function renderQuiz() {
  const questions = getTranslation('quiz.questions');
  const currentQuestion = questions[state.quizStep];
  const progress = Math.round((state.quizStep / questions.length) * 100);

  if (!currentQuestion) {
    dom.quizMount.innerHTML = renderLeadStep(questions);
    const form = dom.quizMount.querySelector('.quiz-lead-form');
    form.addEventListener('submit', handleQuizLeadSubmit);
    return;
  }

  dom.quizMount.innerHTML = `
    <div class="quiz-progress" aria-hidden="true"><span style="--progress: ${progress}%"></span></div>
    <p class="eyebrow">${escapeHTML(getTranslation('quiz.step'))} ${state.quizStep + 1} / ${questions.length}</p>
    <h3>${escapeHTML(currentQuestion.title)}</h3>
    <div class="quiz-options">
      ${currentQuestion.answers.map((answer) => `
        <label class="quiz-option">
          <input type="radio" name="${escapeAttribute(currentQuestion.id)}" value="${escapeAttribute(answer.value)}" ${state.quizAnswers[currentQuestion.id] === answer.value ? 'checked' : ''} />
          <span>
            <strong>${escapeHTML(answer.title)}</strong><br />
            <small>${escapeHTML(answer.description)}</small>
          </span>
        </label>
      `).join('')}
    </div>
    <p class="quiz-status" id="quizStatus" aria-live="polite"></p>
    <div class="quiz-actions">
      ${state.quizStep > 0 ? `<button class="button button--ghost" type="button" data-quiz-back>${escapeHTML(getTranslation('quiz.back'))}</button>` : ''}
      <button class="button button--gold" type="button" data-quiz-next>${escapeHTML(getTranslation('quiz.next'))}</button>
    </div>
  `;

  dom.quizMount.querySelector('[data-quiz-next]').addEventListener('click', () => goToNextQuizStep(currentQuestion));
  const backButton = dom.quizMount.querySelector('[data-quiz-back]');
  if (backButton) backButton.addEventListener('click', goToPreviousQuizStep);
}

function renderLeadStep(questions) {
  const summary = questions.map((question) => {
    const selectedValue = state.quizAnswers[question.id];
    const selectedAnswer = question.answers.find((answer) => answer.value === selectedValue);
    if (!selectedAnswer) return '';
    return `<span>${escapeHTML(question.title)}: <strong>${escapeHTML(selectedAnswer.title)}</strong></span>`;
  }).join('');

  return `
    <div class="quiz-progress" aria-hidden="true"><span style="--progress: 100%"></span></div>
    <p class="eyebrow">${escapeHTML(getTranslation('quiz.send'))}</p>
    <h3>${escapeHTML(getTranslation('quiz.leadTitle'))}</h3>
    <p>${escapeHTML(getTranslation('quiz.leadText'))}</p>
    <div class="quiz-summary">${summary}</div>
    <form class="quiz-lead-form" novalidate>
      <label>
        <span>${escapeHTML(getTranslation('quiz.nameLabel'))}</span>
        <input type="text" name="name" placeholder="${escapeAttribute(getTranslation('quiz.namePlaceholder'))}" required />
        <small class="field-error" aria-live="polite"></small>
      </label>
      <label>
        <span>${escapeHTML(getTranslation('quiz.contactLabel'))}</span>
        <input type="text" name="contact" placeholder="${escapeAttribute(getTranslation('quiz.contactPlaceholder'))}" required />
        <small class="field-error" aria-live="polite"></small>
      </label>
      <p class="form-status" id="quizLeadStatus" aria-live="polite"></p>
      <div class="quiz-actions">
        <button class="button button--ghost" type="button" data-quiz-back>${escapeHTML(getTranslation('quiz.back'))}</button>
        <button class="button button--gold" type="submit">${escapeHTML(getTranslation('quiz.send'))}</button>
      </div>
    </form>
  `;
}

function goToNextQuizStep(question) {
  const selected = dom.quizMount.querySelector(`input[name="${CSS.escape(question.id)}"]:checked`);
  if (!selected) {
    dom.quizMount.querySelector('#quizStatus').textContent = getTranslation('quiz.validationChoice');
    return;
  }

  state.quizAnswers[question.id] = selected.value;
  state.quizStep += 1;
  renderQuiz();
}

function goToPreviousQuizStep() {
  if (state.quizStep === 0) return;
  state.quizStep -= 1;
  renderQuiz();
}

async function handleQuizLeadSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const status = form.querySelector('#quizLeadStatus');
  if (event.submitter && event.submitter.matches('[data-quiz-back]')) {
    goToPreviousQuizStep();
    return;
  }
  if (!validateLeadForm(form)) return;

  const payload = createLeadPayload({
    source: 'Квиз (Расчет стоимости)',
    name: form.elements.name.value,
    contact: form.elements.contact.value,
    message: buildQuizMessage()
  });

  const success = await submitLead(payload, status, getTranslation('quiz.success'), getTranslation('quiz.error'));
  if (!success) return;

  form.reset();
  state.quizAnswers = {};
  window.setTimeout(() => {
    state.quizStep = 0;
    renderQuiz();
  }, 3800);
}

async function handleConsultationSubmit(event) {
  event.preventDefault();
  if (!validateLeadForm(dom.consultationForm)) return;

  const payload = createLeadPayload({
    source: 'Быстрая консультация',
    name: dom.consultationForm.elements.name.value,
    contact: dom.consultationForm.elements.contact.value,
    message: dom.consultationForm.elements.message.value || 'Без дополнительного сообщения'
  });

  const success = await submitLead(
    payload,
    dom.consultationStatus,
    getTranslation('forms.success'),
    getTranslation('forms.error')
  );

  if (success) dom.consultationForm.reset();
}

function createLeadPayload({ source, name, contact, message }) {
  return {
    source,
    ownerTelegram: '@quvdp',
    language: state.language,
    activeStyle: getStyleLabel(state.style),
    name: name.trim(),
    contact: contact.trim(),
    message: message.trim(),
    page: window.location.href,
    createdAt: new Date().toISOString()
  };
}

// ОБНОВЛЕННАЯ ФУНКЦИЯ: ШЛЕТ НАПРЯМУЮ В БОТА С АВТОМАТИЧЕСКИМ ФОЛБЕКОМ ПРИ ОШИБКЕ
async function submitLead(payload, statusElement, successMessage, errorMessage) {
  statusElement.textContent = state.language === 'kg' ? 'Жөнөтүлүүдө...' : 'Отправляем...';

  const botToken = '8583429894:AAGb9TuNnFp5pF-rQfKlUZqUmwjYUZUxeUI';
  const chatId = '8636802936';

  const text = [
    '🔥 <b>Новая заявка AURA DOMUS</b>',
    '',
    `<b>Источник:</b> ${payload.source}`,
    `<b>Имя:</b> ${payload.name}`,
    `<b>Контакт:</b> ${payload.contact}`,
    `<b>Выбранный стиль страницы:</b> ${payload.activeStyle}`,
    `<b>Язык интерфейса:</b> ${payload.language.toUpperCase()}`,
    '',
    '<b>Сообщение / Выбранные ответы:</b>',
    payload.message,
    '',
    `<b>Ссылка:</b> ${payload.page}`,
    `<b>Дата:</b> ${new Date(payload.createdAt).toLocaleString()}`
  ].join('\n');

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    });

    const result = await response.json().catch(() => ({ ok: response.ok }));

    if (!response.ok || result.ok === false) {
      throw new Error(result.error || `Telegram API responded with ${response.status}`);
    }

    statusElement.textContent = successMessage;
    return true;
  } catch (error) {
    console.error('Direct send failed, triggering smart fallback:', error);
    
    // Если прямой fetch заблокирован или упал, запускается твой красивый фолбек:
    await copyLeadToClipboard(payload);
    statusElement.textContent = errorMessage;
    window.open(buildTelegramFallbackUrl(payload), '_blank', 'noopener,noreferrer');
    return false;
  }
}

function buildQuizMessage() {
  const questions = getTranslation('quiz.questions');
  return questions.map((question) => {
    const selectedValue = state.quizAnswers[question.id];
    const answer = question.answers.find((item) => item.value === selectedValue);
    return `• ${question.title} — ${answer ? answer.title : '-'}`;
  }).join('\n');
}

function validateLeadForm(form) {
  const nameInput = form.querySelector('[name="name"]');
  const contactInput = form.querySelector('[name="contact"]');
  const nameValid = nameInput.value.trim().length >= 2;
  const contactValid = isValidContact(contactInput.value);

  setFieldFeedback(nameInput, nameValid, getTranslation('forms.nameError'));
  setFieldFeedback(contactInput, contactValid, getTranslation('forms.contactError'));

  return nameValid && contactValid;
}

function setFieldFeedback(input, valid, message) {
  const error = input.closest('label').querySelector('.field-error');
  input.toggleAttribute('aria-invalid', !valid);
  error.textContent = valid ? '' : message;
}

function isValidContact(value) {
  const trimmed = value.trim();
  const telegramPattern = /^@[a-zA-Z0-9_]{5,32}$/;
  const phonePattern = /^\+?[0-9\s().-]{7,22}$/;
  const digits = trimmed.replace(/\D/g, '');
  return telegramPattern.test(trimmed) || (phonePattern.test(trimmed) && digits.length >= 7);
}

function initBeforeAfterSlider() {
  let isDragging = false;

  const updateSlider = (clientX) => {
    const rect = dom.beforeAfter.getBoundingClientRect();
    const percentage = clamp(((clientX - rect.left) / rect.width) * 100, 6, 94);
    dom.beforeLayer.style.width = `${percentage}%`;
    dom.beforeHandle.style.left = `${percentage}%`;
  };

  dom.beforeAfter.addEventListener('pointerdown', (event) => {
    isDragging = true;
    dom.beforeAfter.setPointerCapture(event.pointerId);
    updateSlider(event.clientX);
  });

  dom.beforeAfter.addEventListener('pointermove', (event) => {
    if (isDragging) updateSlider(event.clientX);
  });

  dom.beforeAfter.addEventListener('pointerup', () => {
    isDragging = false;
  });

  dom.beforeAfter.addEventListener('pointerleave', () => {
    isDragging = false;
  });
}

let revealObserver;

function initRevealAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll(selectors.reveal).forEach((element) => element.classList.add('is-visible'));
    return;
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -40px 0px' });

  observeNewRevealElements();
}

function observeNewRevealElements() {
  const elements = document.querySelectorAll(`${selectors.reveal}:not(.is-visible)`);
  if (!revealObserver) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  elements.forEach((element) => revealObserver.observe(element));
}

async function copyLeadToClipboard(payload) {
  try {
    await navigator.clipboard.writeText(buildLeadText(payload));
  } catch (error) {
    console.warn('Clipboard fallback unavailable', error);
  }
}

function buildTelegramFallbackUrl(payload) {
  const message = encodeURIComponent(buildLeadText(payload));
  return `https://t.me/share/url?url=https://t.me/quvdp&text=${message}`;
}

function buildLeadText(payload) {
  return [
    'Новая заявка AURA DOMUS для @quvdp',
    `Источник: ${payload.source}`,
    `Имя: ${payload.name}`,
    `Контакт: ${payload.contact}`,
    `Стиль: ${payload.activeStyle}`,
    `Язык: ${payload.language}`,
    '',
    payload.message,
    '',
    `Страница: ${payload.page}`,
    `Дата: ${payload.createdAt}`
  ].join('\n');
}

function animateHeroTitle() {
  const text = getTranslation('hero.title');
  let characterIndex = 0;
  dom.heroTitle.innerHTML = text.split(' ').map((word) => {
    const letters = Array.from(word).map((character) => {
      const html = `<span class="char" style="--char-index: ${characterIndex}">${escapeHTML(character)}</span>`;
      characterIndex += 1;
      return html;
    }).join('');
    characterIndex += 1;
    return `<span class="word">${letters}</span>`;
  }).join(' ');
}

function updateHeader() {
  dom.header.classList.toggle('is-scrolled', window.scrollY > 12);
  updateActiveNavLink();
}

function updateActiveNavLink() {
  const sections = Array.from(dom.navLinks)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  let activeSection = sections[0];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 150) activeSection = section;
  });

  dom.navLinks.forEach((link) => {
    link.classList.toggle('is-active', activeSection && link.getAttribute('href') === `#${activeSection.id}`);
  });
}

function toggleNavigation() {
  const isOpen = dom.navList.classList.toggle('is-open');
  dom.navToggle.classList.toggle('is-open', isOpen);
  dom.navToggle.setAttribute('aria-expanded', String(isOpen));
}

function closeNavigation() {
  dom.navList.classList.remove('is-open');
  dom.navToggle.classList.remove('is-open');
  dom.navToggle.setAttribute('aria-expanded', 'false');
}

function getTranslation(path) {
  return path.split('.').reduce((source, key) => source && source[key], languagesData[state.language]);
}

function getStyleLabel(styleId) {
  const style = styleDirections.find((item) => item.id === styleId);
  return style ? style.title[state.language] : styleId;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttribute(value) {
  return escapeHTML(value).replace(/`/g, '&#096;');
}

init();