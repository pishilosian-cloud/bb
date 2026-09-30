import { VocabularyItem } from '../types/vocabulary';

export const INITIAL_VOCABULARY: VocabularyItem[] = [
  // ==========================================
  // LEKTION 1: Leute heute (دوستی و روابط)
  // ==========================================
  {
    id: 'l1-v1',
    german: 'teilnehmen',
    persian: 'شرکت کردن، حضور یافتن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'an einem Workshop über Freundschaft teilnehmen' },
      { source: 'Hörtexte', lesson: 1, module: 'Hörtext 1.2', pageOrTrack: 'Track 1.03', context: 'Möchtest du am Wochenende an unserem Treffen teilnehmen?' }
    ],
    pronunciation: '[ˈtaɪ̯lˌneːmən]',
    infinitive: 'teilnehmen an (+ Dat.)',
    present: 'nimmt teil',
    preterite: 'nahm teil',
    perfect: 'hat teilgenommen',
    auxiliary: 'haben',
    separable: true,
    prepositionCase: 'an + Dativ',
    example: 'Viele Jugendliche nehmen aktiv an sozialen Projekten teil.',
    exampleTranslation: 'بسیاری از جوانان به صورت فعال در پروژه‌های اجتماعی شرکت می‌کنند.',
    level: 'B1+',
    tags: ['ارتباطات', 'اجتماعی']
  },
  {
    id: 'l1-v2',
    german: 'sich verabreden',
    persian: 'قرار گذاشتن، قرار ملاقات گذاشتن',
    category: 'Verben',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Hörtext 1.1', pageOrTrack: 'Track 1.02', context: 'Wir haben uns für heute Abend im Café verabredet.' }
    ],
    pronunciation: '[zɪç fɛɐ̯ˈʔapˌʁeːdn̩]',
    infinitive: 'sich verabreden mit (+ Dat.) / zu (+ Dat.)',
    present: 'verabredet sich',
    preterite: 'verabredete sich',
    perfect: 'hat sich verabredet',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'mit + Dativ',
    example: 'Ich habe mich mit meiner besten Freundin zum Abendessen verabredet.',
    exampleTranslation: 'من با بهترین دوستم برای شام قرار گذاشته‌ام.',
    level: 'B1+',
    tags: ['دوستی', 'قرار']
  },
  {
    id: 'l1-n1',
    german: 'die Herausforderung',
    persian: 'چالش، کار دشوار و انگیزه‌بخش',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 2', pageOrTrack: 'S. 12', context: 'Eine neue Sprache zu lernen ist eine große Herausforderung.' }
    ],
    pronunciation: '[hɛˈʁaʊ̯sˌfɔʁdəʁʊŋ]',
    article: 'die',
    plural: 'die Herausforderungen',
    genderPersian: 'مونث (die)',
    example: 'Das Zusammenleben in einer multikulturellen Stadt bringt manche Herausforderung mit sich.',
    exampleTranslation: 'زندگی مشترک در یک شهر چندفرهنگی چالش‌هایی را به همراه دارد.',
    level: 'B1+',
    tags: ['جامعه', 'مفاهیم']
  },
  {
    id: 'l1-n2',
    german: 'die Hilfsbereitschaft',
    persian: 'آمادگی برای کمک، یاری‌رسانی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'Hilfsbereitschaft ist eine der wichtigsten Eigenschaften eines Freundes.' },
      { source: 'Hörtexte', lesson: 1, module: 'Hörtext 1.3', pageOrTrack: 'Track 1.05', context: 'Ich schätze ihre ständige Hilfsbereitschaft sehr.' }
    ],
    pronunciation: '[ˈhɪlfsbəˌʁaɪ̯tʃaft]',
    article: 'die',
    plural: 'nur Sg. (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Seine Hilfsbereitschaft hat mich in einer schwierigen Phase gerettet.',
    exampleTranslation: 'آمادگی او برای کمک، مرا در مرحله‌ای دشوار نجات داد.',
    level: 'B1+',
    tags: ['اخلاق', 'شخصیت']
  },
  {
    id: 'l1-n3',
    german: 'der Bekanntenkreis',
    persian: 'دایره آشنایان، جمع دوستان و آشنایان',
    category: 'Nomen',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Hörtext 1.2', pageOrTrack: 'Track 1.04', context: 'In meinem Bekanntenkreis gibt es viele Musiker.' }
    ],
    pronunciation: '[bəˈkantn̩ˌkʁaɪ̯s]',
    article: 'der',
    plural: 'die Bekanntenkreise',
    genderPersian: 'مذکر (der)',
    example: 'Sie hat einen sehr großen Bekanntenkreis durch ihre Arbeit aufgebaut.',
    exampleTranslation: 'او از طریق کارش دایره آشنایان بسیار بزرگی تشکیل داده است.',
    level: 'B1+',
    tags: ['روابط']
  },
  {
    id: 'l1-adj1',
    german: 'zuverlässig',
    persian: 'قابل اعتماد، مطمئن',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'Ein zuverlässiger Partner' },
      { source: 'Hörtexte', lesson: 1, module: 'Hörtext 1.1', pageOrTrack: 'Track 1.02', context: 'Er ist absolut zuverlässig und kommt immer pünktlich.' }
    ],
    pronunciation: '[ˈtsuːfɛɐ̯ˌlɛsɪç]',
    comparative: 'zuverlässiger',
    superlative: 'am zuverlässigsten',
    opposite: 'unzuverlässig',
    example: 'Ein zuverlässiger Freund ist in der Not immer für einen da.',
    exampleTranslation: 'یک دوست قابل اعتماد در شرایط اضطراری همیشه در کنار آدم است.',
    level: 'B1+',
    tags: ['شخصیت']
  },
  {
    id: 'l1-adj2',
    german: 'einfühlsam',
    persian: 'با احساس، با درک و همدل',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 11', context: 'einfühlsam auf Probleme reagieren' }
    ],
    pronunciation: '[ˈaɪ̯nfyːlzaːm]',
    comparative: 'einfühlsamer',
    superlative: 'am einfühlsamsten',
    opposite: 'gefühlskalt',
    example: 'Sie hat eine sehr einfühlsame Art und hört immer geduldig zu.',
    exampleTranslation: 'او رفتار بسیار همدلانه‌ای دارد و همیشه با صبوری گوش می‌دهد.',
    level: 'B1+',
    tags: ['شخصیت', 'روانشناسی']
  },
  {
    id: 'l1-adv1',
    german: 'allerdings',
    persian: 'البته، با این وجود، ولی',
    category: 'Adverbien',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 3', pageOrTrack: 'S. 15', context: 'Wir verstehen uns gut, allerdings sehen wir uns selten.' },
      { source: 'Hörtexte', lesson: 1, module: 'Hörtext 1.4', pageOrTrack: 'Track 1.07', context: 'Das stimmt allerdings nicht ganz.' }
    ],
    pronunciation: '[alɐˈdɪŋs]',
    example: 'Das Angebot klingt verlockend, allerdings gibt es einige versteckte Kosten.',
    exampleTranslation: 'این پیشنهاد وسوسه‌انگیز به نظر می‌رسد، البته چند هزینه پنهان هم دارد.',
    level: 'B1+',
    tags: ['حروف ربط و قید']
  },
  {
    id: 'l1-adv2',
    german: 'gelegentlich',
    persian: 'گاهی اوقات، گهگاه، در صورت پیش‌آمدن فرصت',
    category: 'Adverbien',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Hörtext 1.2', pageOrTrack: 'Track 1.03', context: 'Wir telefonieren nur noch gelegentlich.' }
    ],
    pronunciation: '[ɡəˈleːɡn̩tlɪç]',
    example: 'Wir treffen uns nur noch gelegentlich, da wir in verschiedenen Städten wohnen.',
    exampleTranslation: 'ما فقط گاه‌گاهی همدیگر را می‌بینیم چون در شهرهای متفاوتی زندگی می‌کنیم.',
    level: 'B1+',
    tags: ['زمان']
  },
  {
    id: 'l1-red1',
    german: 'Kontakte knüpfen',
    persian: 'ارتباط برقرار کردن، شبکه‌سازی کردن و دوست پیدا کردن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'an der neuen Universität neue Kontakte knüpfen' },
      { source: 'Hörtexte', lesson: 1, module: 'Hörtext 1.3', pageOrTrack: 'Track 1.06', context: 'Auf internationalen Konferenzen kann man wertvolle Kontakte knüpfen.' }
    ],
    pronunciation: '[kɔnˈtaktə ˈknʏpfn̩]',
    explanation: 'ایجاد آشنایی و ارتباط‌های اجتماعی یا حرفه‌ای جدید با افراد',
    literalMeaning: 'گره زدن پیوندها',
    example: 'Durch das Auslandssemester konnte sie weltweit neue Kontakte knüpfen.',
    exampleTranslation: 'او از طریق ترم تحصیلی در خارج توانست ارتباطات جدیدی در سراسر جهان برقرار کند.',
    level: 'B1+',
    tags: ['ارتباطات', 'اصطلاح کاربردی']
  },
  {
    id: 'l1-red2',
    german: 'durch dick und dünn gehen',
    persian: 'در تمام فراز و نشیب‌ها کنار هم بودن، پای هم ایستادن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 2', pageOrTrack: 'S. 13', context: 'Wahre Freunde gehen durch dick und dünn.' }
    ],
    pronunciation: '[dʊʁç dɪk ʊnt dʏn ˈɡeːən]',
    explanation: 'توصیف دوستی‌های بسیار عمیق و وفادار که در سختی و خوشی کنار هم هستند',
    literalMeaning: 'عبور از چاقی و لاغری (سختی و آسانی)',
    example: 'Seit unserer Schulzeit gehen wir durch dick und dünn.',
    exampleTranslation: 'از دوران مدرسه تاکنون در تمام فراز و نشیب‌ها پای هم ایستاده‌ایم.',
    level: 'B1+',
    tags: ['دوستی', 'ضرب‌المثل']
  },

  // ==========================================
  // LEKTION 2: Wohnwelten (سکونت و مسکن)
  // ==========================================
  {
    id: 'l2-v1',
    german: 'einrichten',
    persian: 'چیدمان کردن، مبله کردن، دکوراسیون چیدن',
    category: 'Verben',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 22', context: 'eine neue Wohnung modern einrichten' }
    ],
    pronunciation: '[ˈaɪ̯nˌʁɪçtn̩]',
    infinitive: 'einrichten',
    present: 'richtet ein',
    preterite: 'richtete ein',
    perfect: 'hat eingerichtet',
    auxiliary: 'haben',
    separable: true,
    example: 'Sie haben ihr Wohnzimmer sehr gemütlich und minimalistisch eingerichtet.',
    exampleTranslation: 'آن‌ها اتاق نشیمن خود را بسیار دنج و مینیمال چیدمان کرده‌اند.',
    level: 'B1+',
    tags: ['مسکن', 'دکوراسیون']
  },
  {
    id: 'l2-v2',
    german: 'kündigen',
    persian: 'فسخ کردن (قرارداد)، استعفا دادن یا اخراج کردن',
    category: 'Verben',
    lesson: 2,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Hörtext 2.2', pageOrTrack: 'Track 2.03', context: 'Der Vermieter hat den Mietvertrag fristgerecht gekündigt.' }
    ],
    pronunciation: '[ˈkʏndɪɡn̩]',
    infinitive: 'kündigen (+ Dat. / + Akk.)',
    present: 'kündigt',
    preterite: 'kündigte',
    perfect: 'hat gekündigt',
    auxiliary: 'haben',
    example: 'Wir müssen die alte Wohnung drei Monate im Voraus kündigen.',
    exampleTranslation: 'ما باید آپارتمان قبلی را از سه ماه قبل فسخ کنیم.',
    level: 'B1+',
    tags: ['قرارداد', 'اجاره']
  },
  {
    id: 'l2-n1',
    german: 'die Wohngemeinschaft',
    persian: 'خانه اشتراکی، زندگی اشتراکی چند نفر در یک خانه (WG)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 24', context: 'Das Leben in einer Studenten-Wohngemeinschaft' },
      { source: 'Hörtexte', lesson: 2, module: 'Hörtext 2.1', pageOrTrack: 'Track 2.01', context: 'In unserer WG teilen wir uns die Küche und das Bad.' }
    ],
    pronunciation: '[ˈvoːnɡəˌmaɪ̯nʃaft]',
    article: 'die',
    plural: 'die Wohngemeinschaften',
    genderPersian: 'مونث (die)',
    example: 'Das WG-Zimmer kostet inklusive Nebenkosten 450 Euro im Monat.',
    exampleTranslation: 'اتاق خانه اشتراکی با احتساب هزینه‌های جانبی ماهی ۴۵۰ یورو هزینه دارد.',
    level: 'B1+',
    tags: ['دانشجویی', 'مسکن']
  },
  {
    id: 'l2-n2',
    german: 'die Kaution',
    persian: 'پول پیش، ودیعه اجاره، ضمانت‌نامه',
    category: 'Nomen',
    lesson: 2,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 3', pageOrTrack: 'S. 26', context: 'Die Kaution beträgt üblicherweise drei Monatskaltmieten.' }
    ],
    pronunciation: '[kaʊ̯ˈtsi̯oːn]',
    article: 'die',
    plural: 'die Kautionen',
    genderPersian: 'مونث (die)',
    example: 'Vor dem Einzug muss die Kaution auf das Sperrkonto überwiesen werden.',
    exampleTranslation: 'پیش از اسباب‌کشی، پول ودیعه باید به حساب مسدود واریز شود.',
    level: 'B1+',
    tags: ['مالی', 'اجاره']
  },
  {
    id: 'l2-adj1',
    german: 'geräumig',
    persian: 'جا دار، دلباز، وسیع',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 23', context: 'eine geräumige 3-Zimmer-Wohnung' },
      { source: 'Hörtexte', lesson: 2, module: 'Hörtext 2.3', pageOrTrack: 'Track 2.05', context: 'Der Flur ist erstaunlich geräumig.' }
    ],
    pronunciation: '[ɡəˈʁɔɪ̯mɪç]',
    comparative: 'geräumiger',
    superlative: 'am geräumigsten',
    opposite: 'beengt / eng',
    example: 'Die Küche ist sehr geräumig, sodass ein großer Esstisch hineinpasst.',
    exampleTranslation: 'آشپزخانه بسیار جا دار است، به طوری که یک میز غذاخوری بزرگ در آن جا می‌شود.',
    level: 'B1+',
    tags: ['توصیف مکان']
  },
  {
    id: 'l2-adj2',
    german: 'hellhörig',
    persian: 'کم‌عایق صدا، ساختمانی که صدای همسایه‌ها در آن به راحتی شنیده می‌شود',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Hörtext 2.2', pageOrTrack: 'Track 2.04', context: 'Das Altbauhaus ist leider extrem hellhörig.' }
    ],
    pronunciation: '[ˈhɛlˌhøːʁɪç]',
    comparative: 'hellhöriger',
    superlative: 'am hellhörigsten',
    example: 'In dem alten Gebäude ist es so hellhörig, dass man jeden Schritt oben hört.',
    exampleTranslation: 'در آن ساختمان قدیمی عایق‌بندی صدا آن‌قدر ضعیف است که هر قدمی در بالا شنیده می‌شود.',
    level: 'B1+',
    tags: ['معایب مسکن']
  },
  {
    id: 'l2-adv1',
    german: 'mittlerweile',
    persian: 'در این بین، در حال حاضر، به مرور زمان',
    category: 'Adverbien',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 2', pageOrTrack: 'S. 25', context: 'Mittlerweile sind die Mietpreise in Großstädten stark gestiegen.' },
      { source: 'Hörtexte', lesson: 2, module: 'Hörtext 2.1', pageOrTrack: 'Track 2.02', context: 'Ich habe mich mittlerweile gut eingelebt.' }
    ],
    pronunciation: '[ˈmɪtlɐˌvaɪ̯lə]',
    example: 'Mittlerweile haben wir alle Möbel aufgebaut und fühlen uns richtig wohl.',
    exampleTranslation: 'در این مدت تمام وسایل را سرهم کرده‌ایم و کاملاً احساس راحتی می‌کنیم.',
    level: 'B1+',
    tags: ['زمان']
  },
  {
    id: 'l2-red1',
    german: 'die eigenen vier Wände',
    persian: 'خانه و کاشانه شخصی، خانه خود آدم',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 2, module: 'Modul 1', pageOrTrack: 'S. 21', context: 'Endlich in den eigenen vier Wänden wohnen' },
      { source: 'Hörtexte', lesson: 2, module: 'Hörtext 2.4', pageOrTrack: 'Track 2.06', context: 'Es gibt nichts Schöneres als die eigenen vier Wände.' }
    ],
    pronunciation: '[diː ˈʔaɪ̯ɡnən fiːɐ̯ ˈvɛndə]',
    explanation: 'کنایه از داشتن یا سکونت در آپارتمان یا خانه مستقل خود',
    literalMeaning: 'چهار دیواری خود',
    example: 'Nach Jahren zur Miete konnte sich das Paar endlich die eigenen vier Wände kaufen.',
    exampleTranslation: 'پس از سال‌ها اجاره‌نشینی، این زوج بالاخره توانستند خانه شخصی خودشان را بخرند.',
    level: 'B1+',
    tags: ['مسکن', 'استقلال']
  },

  // ==========================================
  // LEKTION 3: Wie die Zeit vergeht! (زمان و گذشته)
  // ==========================================
  {
    id: 'l3-v1',
    german: 'beschleunigen',
    persian: 'شتاب دادن، سرعت بخشیدن، تندتر کردن',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 34', context: 'Das Tempo des modernen Lebens beschleunigen' }
    ],
    pronunciation: '[bəˈʃlɔɪ̯nɪɡn̩]',
    infinitive: 'beschleunigen',
    present: 'beschleunigt',
    preterite: 'beschleunigte',
    perfect: 'hat beschleunigt',
    auxiliary: 'haben',
    example: 'Die Digitalisierung hat viele alltägliche Abläufe enorm beschleunigt.',
    exampleTranslation: 'دیجیتالی‌شدن سرعت بسیاری از فرایندهای روزمره را به شدت افزایش داده است.',
    level: 'B1+',
    tags: ['زمان', 'فناوری']
  },
  {
    id: 'l3-v2',
    german: 'vergehen',
    persian: 'سپری شدن، گذشتن (زمان)',
    category: 'Verben',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 1', pageOrTrack: 'S. 33', context: 'Wie schnell doch die Zeit vergeht!' },
      { source: 'Hörtexte', lesson: 3, module: 'Hörtext 3.1', pageOrTrack: 'Track 3.01', context: 'Die Urlaubszeit vergeht wie im Fluge.' }
    ],
    pronunciation: '[fɛɐ̯ˈɡeːən]',
    infinitive: 'vergehen',
    present: 'vergeht',
    preterite: 'verging',
    perfect: 'ist vergangen',
    auxiliary: 'sein',
    example: 'Wenn man Spaß hat, vergeht die Zeit wie im Flug.',
    exampleTranslation: 'وقتی آدم لذت می‌برد، زمان مثل برق و باد می‌گذرد.',
    level: 'B1+',
    tags: ['زمان']
  },
  {
    id: 'l3-n1',
    german: 'der Zeitdruck',
    persian: 'فشار زمانی، کمبود وقت و فوریت',
    category: 'Nomen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 36', context: 'Unter ständigem Zeitdruck arbeiten' },
      { source: 'Hörtexte', lesson: 3, module: 'Hörtext 3.3', pageOrTrack: 'Track 3.04', context: 'Wegen des extremen Zeitdrucks machten wir viele Fehler.' }
    ],
    pronunciation: '[ˈtsaɪ̯tˌdʁʊk]',
    article: 'der',
    plural: 'nur Sg. (بدون جمع)',
    genderPersian: 'مذکر (der)',
    example: 'Er leidet unter ständigem Zeitdruck und kann abends schwer abschalten.',
    exampleTranslation: 'او از فشار مداوم کمبود وقت رنج می‌برد و شب‌ها به سختی می‌تواند ذهنش را رها کند.',
    level: 'B1+',
    tags: ['استرس', 'کار']
  },
  {
    id: 'l3-adj1',
    german: 'zeitraubend',
    persian: 'وقت‌گیر، زمان‌بر',
    category: 'Adjektive',
    lesson: 3,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 2', pageOrTrack: 'S. 37', context: 'Eine zeitraubende Recherche durchführen' }
    ],
    pronunciation: '[ˈtsaɪ̯tˌʁaʊ̯bn̩t]',
    comparative: 'zeitraubender',
    superlative: 'am zeitraubendsten',
    opposite: 'zeitsparend',
    example: 'Das manuelle Ausfüllen von Formularen ist eine sehr zeitraubende Aufgabe.',
    exampleTranslation: 'پر کردن دستی فرم‌ها کاری بسیار وقت‌گیر است.',
    level: 'B1+',
    tags: ['توصیف کار']
  },
  {
    id: 'l3-red1',
    german: 'die Zeit totschlagen',
    persian: 'وقت‌کشی کردن، گذراندن بیهوده زمان در انتظار',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 3, module: 'Modul 3', pageOrTrack: 'S. 39', context: 'am Bahnhof die Zeit mit Lesen totschlagen' },
      { source: 'Hörtexte', lesson: 3, module: 'Hörtext 3.2', pageOrTrack: 'Track 3.03', context: 'Wegen der Zugverspätung mussten wir drei Stunden totschlagen.' }
    ],
    pronunciation: '[diː tsaɪ̯t ˈtoːtˌʃlaːɡn̩]',
    explanation: 'تلف کردن یا پر کردن وقت اضافه هنگام انتظار با فعالیت‌های غیرضروری',
    literalMeaning: 'کشتن زمان',
    example: 'Am Flughafen musste ich vier Stunden totschlagen, bis mein Flug startete.',
    exampleTranslation: 'در فرودگاه مجبور شدم چهار ساعت وقت‌کشی کنم تا پروازم شروع شود.',
    level: 'B1+',
    tags: ['اصطلاح', 'روزمره']
  },

  // ==========================================
  // LEKTION 4: Guten Appetit! (تغذیه و غذا)
  // ==========================================
  {
    id: 'l4-v1',
    german: 'zubereiten',
    persian: 'آماده کردن، پختن و آماده‌سازی غذا',
    category: 'Verben',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 1', pageOrTrack: 'S. 45', context: 'Frische Zutaten schonend zubereiten' },
      { source: 'Hörtexte', lesson: 4, module: 'Hörtext 4.1', pageOrTrack: 'Track 4.02', context: 'Wie bereitet man dieses traditionelle Gericht zu?' }
    ],
    pronunciation: '[ˈtsuːbəˌʁaɪ̯tn̩]',
    infinitive: 'zubereiten',
    present: 'bereitet zu',
    preterite: 'bereitete zu',
    perfect: 'hat zubereitet',
    auxiliary: 'haben',
    separable: true,
    example: 'Der Koch bereitet das Gericht mit regionalen Bio-Zutaten zu.',
    exampleTranslation: 'آشپز غذا را با مواد اولیه ارگانیک و محلی آماده می‌کند.',
    level: 'B1+',
    tags: ['آشپزی', 'رستوران']
  },
  {
    id: 'l4-n1',
    german: 'das Nahrungsmittel',
    persian: 'ماده غذایی، خوراکی',
    category: 'Nomen',
    lesson: 4,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 2', pageOrTrack: 'S. 47', context: 'Verschwendung von wertvollen Nahrungsmitteln' }
    ],
    pronunciation: '[ˈnaːʁʊŋsˌmɪtl̩]',
    article: 'das',
    plural: 'die Nahrungsmittel',
    genderPersian: 'خنثی (das)',
    example: 'Jedes Jahr werden tonnenweise genießbare Nahrungsmittel weggeworfen.',
    exampleTranslation: 'هر ساله چندین تن مواد غذایی قابل مصرف دور ریخته می‌شود.',
    level: 'B1+',
    tags: ['تغذیه', 'محیط زیست']
  },
  {
    id: 'l4-adj1',
    german: 'bekömmlich',
    persian: 'زودهضم، گوارا، سبک برای معده',
    category: 'Adjektive',
    lesson: 4,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Hörtext 4.2', pageOrTrack: 'Track 4.04', context: 'Gedämpftes Gemüse ist besonders bekömmlich.' }
    ],
    pronunciation: '[bəˈkœmlɪç]',
    comparative: 'bekömmlicher',
    superlative: 'am bekömmlichsten',
    opposite: 'schwer verdaulich',
    example: 'Gedünstetes Gemüse und Reis sind für den Magen sehr bekömmlich.',
    exampleTranslation: 'سبزیجات بخارپز و برنج برای معده بسیار سبک و زودهضم هستند.',
    level: 'B1+',
    tags: ['سلامتی', 'غذا']
  },
  {
    id: 'l4-red1',
    german: 'über den Tellerrand blicken',
    persian: 'دید باز داشتن، فراتر از چارچوب خود اندیشیدن، تعصب نداشتن',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 4, module: 'Modul 3', pageOrTrack: 'S. 50', context: 'Kulinarisch über den Tellerrand blicken' },
      { source: 'Hörtexte', lesson: 4, module: 'Hörtext 4.3', pageOrTrack: 'Track 4.06', context: 'Man sollte öfter über den Tellerrand blicken und Neues probieren.' }
    ],
    pronunciation: '[ˈyːbɐ deːn ˈtɛlɐˌʁant ˈblɪkn̩]',
    explanation: 'تلاش برای کشف افق‌های نو، تجربه‌های ناشناخته و نترسیدن از تجربیات فرهنگی یا غذایی جدید',
    literalMeaning: 'نگاه کردن به ورای لبه بشقاب',
    example: 'Wer reist, lernt über den eigenen Tellerrand zu blicken und andere Kulturen zu verstehen.',
    exampleTranslation: 'کسی که سفر می‌کند، یاد می‌گیرد افق دید خود را گسترش دهد و فرهنگ‌های دیگر را درک کند.',
    level: 'B1+',
    tags: ['فرهنگ', 'دیدگاه']
  },

  // ==========================================
  // LEKTION 5: Arbeitswelten (دنیای کار و شغل)
  // ==========================================
  {
    id: 'l5-v1',
    german: 'Fuß fassen',
    persian: 'جا افتادن، موقعیت خود را تثبیت کردن، پا گرفتن',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'im Berufsleben schnell Fuß fassen' },
      { source: 'Hörtexte', lesson: 5, module: 'Hörtext 5.2', pageOrTrack: 'Track 5.03', context: 'Es war schwer, auf dem hart umkämpften Arbeitsmarkt Fuß zu fassen.' }
    ],
    pronunciation: '[fuːs ˈfasn̩]',
    explanation: 'موفق شدن در شروع یک حرفه یا جا افتادن در یک محیط و جامعه جدید',
    literalMeaning: 'پا گذاشتن / محکم کردن پا',
    example: 'Nach dem Studium konnte sie schnell in der IT-Branche Fuß fassen.',
    exampleTranslation: 'پس از فارغ‌التحصیلی، او توانست به سرعت در صنعت فناوری اطلاعات جا بیفتد و کار پیدا کند.',
    level: 'B1+',
    tags: ['شغل', 'موفقیت']
  },
  {
    id: 'l5-v2',
    german: 'sich bewerben',
    persian: 'درخواست دادن، اپلای کردن برای شغل یا دانشگاه',
    category: 'Verben',
    lesson: 5,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 2', pageOrTrack: 'S. 60', context: 'sich um eine Stelle als Projektleiter bewerben' }
    ],
    pronunciation: '[zɪç bəˈvɛʁbn̩]',
    infinitive: 'sich bewerben um (+ Akk.) / bei (+ Dat.)',
    present: 'bewirbt sich',
    preterite: 'bewarb sich',
    perfect: 'hat sich beworben',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'um + Akkusativ / bei + Dativ',
    example: 'Er hat sich bei mehreren internationalen Unternehmen um eine Stelle beworben.',
    exampleTranslation: 'او برای یک موقعیت شغلی در چند شرکت بین‌المللی درخواست ارسال کرده است.',
    level: 'B1+',
    tags: ['کاریابی', 'رزومه']
  },
  {
    id: 'l5-n1',
    german: 'die Arbeitsbedingungen',
    persian: 'شرایط کاری، محیط و ضوابط کار',
    category: 'Nomen',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 59', context: 'faire und flexible Arbeitsbedingungen fordern' },
      { source: 'Hörtexte', lesson: 5, module: 'Hörtext 5.1', pageOrTrack: 'Track 5.01', context: 'Die Arbeitsbedingungen in dieser Firma sind vorbildlich.' }
    ],
    pronunciation: '[ˈʔaʁbaɪ̯tsbəˌdɪŋʊŋən]',
    article: 'die',
    plural: 'die Arbeitsbedingungen (معمولاً جمع)',
    genderPersian: 'مونث (die)',
    example: 'Flexible Arbeitszeiten und Homeoffice gehören zu den modernen Arbeitsbedingungen.',
    exampleTranslation: 'ساعات کاری منعطف و دورکاری از جمله شرایط کاری مدرن به شمار می‌روند.',
    level: 'B1+',
    tags: ['شغل', 'حقوق کار']
  },
  {
    id: 'l5-adj1',
    german: 'abwechslungsreich',
    persian: 'متنوع، سرشار از تغییر و تنوع، غیریکنواخت',
    category: 'Adjektive',
    lesson: 5,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 5, module: 'Modul 1', pageOrTrack: 'S. 58', context: 'eine abwechslungsreiche Tätigkeit ausüben' },
      { source: 'Hörtexte', lesson: 5, module: 'Hörtext 5.3', pageOrTrack: 'Track 5.05', context: 'Mein Alltag als Berater ist unheimlich abwechslungsreich.' }
    ],
    pronunciation: '[ˈapvɛkslʊŋsˌʁaɪ̯ç]',
    comparative: 'abwechslungsreicher',
    superlative: 'am abwechslungsreichsten',
    opposite: 'eintönig / monoton',
    example: 'Ich suche eine abwechslungsreiche Stelle, bei der jeder Tag anders ist.',
    exampleTranslation: 'من به دنبال شغلی متنوع هستم که هر روزش متفاوت از روز قبل باشد.',
    level: 'B1+',
    tags: ['شغل', 'شخصیت']
  },

  // ==========================================
  // LEKTION 6: Ganz schön mobil (حمل و نقل و سفر)
  // ==========================================
  {
    id: 'l6-v1',
    german: 'pendeln',
    persian: 'رفت و آمد کردن روزانه بین محل سکونت و محل کار',
    category: 'Verben',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 70', context: 'täglich mit der Bahn zur Arbeit pendeln' },
      { source: 'Hörtexte', lesson: 6, module: 'Hörtext 6.1', pageOrTrack: 'Track 6.02', context: 'Das lange Pendeln raubt mir jeden Tag zwei Stunden.' }
    ],
    pronunciation: '[ˈpɛndl̩n]',
    infinitive: 'pendeln zwischen (+ Dat.)',
    present: 'pendelt',
    preterite: 'pendelte',
    perfect: 'ist gependelt',
    auxiliary: 'sein',
    example: 'Viele Menschen pendeln täglich zwischen Potsdam und Berlin.',
    exampleTranslation: 'بسیاری از مردم روزانه میان پوتسدام و برلین برای کار در رفت و آمد هستند.',
    level: 'B1+',
    tags: ['حمل و نقل', 'رفت‌وآمد']
  },
  {
    id: 'l6-n1',
    german: 'das Verkehrsmittel',
    persian: 'وسیله نقلیه، وسیله حمل و نقل',
    category: 'Nomen',
    lesson: 6,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 1', pageOrTrack: 'S. 71', context: 'öffentliche Verkehrsmittel bevorzugen' }
    ],
    pronunciation: '[fɛɐ̯ˈkeːɐ̯sˌmɪtl̩]',
    article: 'das',
    plural: 'die Verkehrsmittel',
    genderPersian: 'خنثی (das)',
    example: 'Die Bahn ist ein umweltfreundliches Verkehrsmittel für längere Strecken.',
    exampleTranslation: 'قطار یک وسیله نقلیه سازگار با محیط زیست برای مسافت‌های طولانی است.',
    level: 'B1+',
    tags: ['ترابری', 'محیط زیست']
  },
  {
    id: 'l6-adj1',
    german: 'nachhaltig',
    persian: 'پایدار، سازگار با محیط زیست، ماندگار',
    category: 'Adjektive',
    lesson: 6,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 6, module: 'Modul 2', pageOrTrack: 'S. 74', context: 'nachhaltige Mobilitätskonzepte der Zukunft' },
      { source: 'Hörtexte', lesson: 6, module: 'Hörtext 6.3', pageOrTrack: 'Track 6.05', context: 'Wir müssen nachhaltiger reisen, um das Klima zu schützen.' }
    ],
    pronunciation: '[ˈnaːxˌhaltɪç]',
    comparative: 'nachhaltiger',
    superlative: 'am nachhaltigsten',
    example: 'Elektrobusse und Carsharing sind wichtige Bausteine für eine nachhaltige Stadtentwicklung.',
    exampleTranslation: 'اتوبوس‌های برقی و خودروهای اشتراکی بخش‌های مهمی از توسعه شهری پایدار هستند.',
    level: 'B1+',
    tags: ['محیط زیست', 'تکنولوژی']
  },

  // ==========================================
  // LEKTION 7: Blick nach vorn (فناوری و آینده)
  // ==========================================
  {
    id: 'l7-v1',
    german: 'voraussagen',
    persian: 'پیش‌بینی کردن، از قبل گفتن',
    category: 'Verben',
    lesson: 7,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 1', pageOrTrack: 'S. 82', context: 'Zukunftstrends wissenschaftlich voraussagen' }
    ],
    pronunciation: '[foˈʁaʊ̯sˌzaːɡn̩]',
    infinitive: 'voraussagen',
    present: 'sagt voraus',
    preterite: 'sagte voraus',
    perfect: 'hat vorausgesagt',
    auxiliary: 'haben',
    separable: true,
    example: 'Niemand kann mit Sicherheit voraussagen, wie künstliche Intelligenz unseren Alltag verändert.',
    exampleTranslation: 'هیچ‌کس نمی‌تواند با اطمینان پیش‌بینی کند که هوش مصنوعی چگونه زندگی روزمره ما را دگرگون خواهد ساخت.',
    level: 'B1+',
    tags: ['آینده', 'علم']
  },
  {
    id: 'l7-n1',
    german: 'der Fortschritt',
    persian: 'پیشرفت، تکامل، توسعه',
    category: 'Nomen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 2', pageOrTrack: 'S. 85', context: 'technologischer Fortschritt in der Medizin' },
      { source: 'Hörtexte', lesson: 7, module: 'Hörtext 7.2', pageOrTrack: 'Track 7.03', context: 'Der wissenschaftliche Fortschritt eröffnet uns neue Chancen.' }
    ],
    pronunciation: '[ˈfɔʁtˌʃʁɪt]',
    article: 'der',
    plural: 'die Fortschritte',
    genderPersian: 'مذکر (der)',
    example: 'Die Menschheit hat in den letzten Jahrzehnten enorme Fortschritte erzielt.',
    exampleTranslation: 'بشریت در دهه‌های اخیر پیشرفت‌های عظیمی به دست آورده است.',
    level: 'B1+',
    tags: ['فناوری', 'توسعه']
  },
  {
    id: 'l7-red1',
    german: 'Zukunftsmusik sein',
    persian: 'رویایی دور و دست‌نیافتنی در شرایط فعلی بودن، برنامه آینده دور بودن',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 7, module: 'Modul 3', pageOrTrack: 'S. 88', context: 'Fliegende Autos sind vorerst noch reine Zukunftsmusik.' },
      { source: 'Hörtexte', lesson: 7, module: 'Hörtext 7.4', pageOrTrack: 'Track 7.07', context: 'Vollständig autonome Städte sind noch Zukunftsmusik.' }
    ],
    pronunciation: '[ˈtsuːkʊnftsmuziːk zaɪ̯n]',
    explanation: 'ایده یا طرحی که شاید در آینده دور محقق شود اما در حال حاضر غیرواقعی است',
    literalMeaning: 'موسیقی آینده بودن',
    example: 'Fliegende Taxis klingen spannend, sind aber vorerst noch Zukunftsmusik.',
    exampleTranslation: 'تاکسی‌های پرنده هیجان‌انگیز به نظر می‌رسند، ولی در حال حاضر هنوز یک رویای دوردست هستند.',
    level: 'B1+',
    tags: ['آینده', 'اصطلاح']
  },

  // ==========================================
  // LEKTION 8: Menschliches (احساسات و روابط انسانی)
  // ==========================================
  {
    id: 'l8-v1',
    german: 'trösten',
    persian: 'دلداری دادن، تسلی دادن',
    category: 'Verben',
    lesson: 8,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 8, module: 'Hörtext 8.1', pageOrTrack: 'Track 8.02', context: 'Sie versuchte, das weinende Kind liebevoll zu trösten.' }
    ],
    pronunciation: '[ˈtʁøːstn̩]',
    infinitive: 'trösten (+ Akk.)',
    present: 'tröstet',
    preterite: 'tröstete',
    perfect: 'hat getröstet',
    auxiliary: 'haben',
    example: 'Er fand die richtigen Worte, um seine Freundin nach dem Verlust zu trösten.',
    exampleTranslation: 'او کلمات مناسبی پیدا کرد تا دوستش را پس از فقدان تسلی دهد.',
    level: 'B1+',
    tags: ['احساسات', 'همدلی']
  },
  {
    id: 'l8-n1',
    german: 'die Körpersprache',
    persian: 'زبان بدن، حرکات و حالات غیرکلامی بدن',
    category: 'Nomen',
    lesson: 8,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 8, module: 'Modul 1', pageOrTrack: 'S. 94', context: 'Die Signale der Körpersprache richtig deuten' },
      { source: 'Hörtexte', lesson: 8, module: 'Hörtext 8.2', pageOrTrack: 'Track 8.04', context: 'Seine Körpersprache verriet sofort seine Nervosität.' }
    ],
    pronunciation: '[ˈkœʁpɐˌʃpʁaːxə]',
    article: 'die',
    plural: 'nur Sg. (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Eine offene Körpersprache signalisiert Interesse und Selbstvertrauen.',
    exampleTranslation: 'زبان بدن باز، نشان‌دهنده علاقه و اعتماد به نفس است.',
    level: 'B1+',
    tags: ['ارتباطات', 'روانشناسی']
  },
  {
    id: 'l8-adj1',
    german: 'hilfsbereit',
    persian: 'آماده کمک، مهربان و یاری‌رسان',
    category: 'Adjektive',
    lesson: 8,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 8, module: 'Modul 2', pageOrTrack: 'S. 96', context: 'hilfsbereite Nachbarn im Notfall' }
    ],
    pronunciation: '[ˈhɪlfsbəˌʁaɪ̯t]',
    comparative: 'hilfsbereiter',
    superlative: 'am hilfsbereitesten',
    opposite: 'egoistisch',
    example: 'Unsere neuen Nachbarn sind ausgesprochen freundlich und hilfsbereit.',
    exampleTranslation: 'همسایگان جدید ما فوق‌العاده صمیمی و اهل کمک هستند.',
    level: 'B1+',
    tags: ['اخلاق']
  },

  // ==========================================
  // LEKTION 9: Kaufrausch (خرید و مصرف‌گرایی)
  // ==========================================
  {
    id: 'l9-v1',
    german: 'umtauschen',
    persian: 'تعویض کردن (کالا)، پس دادن و کالای دیگر گرفتن',
    category: 'Verben',
    lesson: 9,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 9, module: 'Modul 2', pageOrTrack: 'S. 108', context: 'beschädigte Ware problemlos umtauschen' },
      { source: 'Hörtexte', lesson: 9, module: 'Hörtext 9.1', pageOrTrack: 'Track 9.02', context: 'Kann ich diese Hose gegen eine andere Größe umtauschen?' }
    ],
    pronunciation: '[ˈʊmˌtaʊ̯ʃn̩]',
    infinitive: 'umtauschen (+ Akk.) gegen (+ Akk.)',
    present: 'tauscht um',
    preterite: 'tauschte um',
    perfect: 'hat umgetauscht',
    auxiliary: 'haben',
    separable: true,
    example: 'Mit dem Kassenbon können Sie den Pullover innerhalb von 14 Tagen umtauschen.',
    exampleTranslation: 'با برگه رسید خرید می‌توانید پلیور را تا ۱۴ روز تعویض کنید.',
    level: 'B1+',
    tags: ['خرید', 'فروشگاه']
  },
  {
    id: 'l9-n1',
    german: 'das Schnäppchen',
    persian: 'خرید بسیار ارزان و سودآور، جنس مفت و ارزان‌قیمت',
    category: 'Nomen',
    lesson: 9,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 9, module: 'Hörtext 9.2', pageOrTrack: 'Track 9.03', context: 'Im Sommerschlussverkauf habe ich echte Schnäppchen gemacht.' }
    ],
    pronunciation: '[ˈʃnɛpçn̩]',
    article: 'das',
    plural: 'die Schnäppchen',
    genderPersian: 'خنثی (das)',
    example: 'Ich habe dieses Markenhemd im Sonderangebot für nur 15 Euro ergattert – ein echtes Schnäppchen!',
    exampleTranslation: 'این پیراهن مارک‌دار را در حراج ویژه فقط با ۱۵ یورو گیر آوردم – واقعاً یک خرید فوق‌العاده ارزان بود!',
    level: 'B1+',
    tags: ['تخفیف', 'خرید']
  },
  {
    id: 'l9-red1',
    german: 'Geld aus dem Fenster werfen',
    persian: 'پول را دور ریختن، ولخرجی کردن بی‌مورد',
    category: 'Redewendungen',
    lesson: 9,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 9, module: 'Modul 3', pageOrTrack: 'S. 112', context: 'Unnötige Abonnements sind wie Geld aus dem Fenster werfen.' },
      { source: 'Hörtexte', lesson: 9, module: 'Hörtext 9.4', pageOrTrack: 'Track 9.08', context: 'Kaufe nicht immer Dinge, die du nicht brauchst; wirf nicht dein Geld aus dem Fenster!' }
    ],
    pronunciation: '[ɡɛlt aʊ̯s deːm ˈfɛnstɐ ˈvɛʁfn̩]',
    explanation: 'مصرف بی‌رویه و غیرمنطقی پول برای کالاهای غیرضروری',
    literalMeaning: 'پرتاب کردن پول از پنجره به بیرون',
    example: 'Wer ständig das neueste Smartphone kauft, wirft sein Geld oft einfach zum Fenster hinaus.',
    exampleTranslation: 'کسی که مدام جدیدترین گوشی هوشمند را می‌خرد، در واقع پولش را بیهوده دور می‌ریزد.',
    level: 'B1+',
    tags: ['مالی', 'اصطلاح']
  },

  // ==========================================
  // LEKTION 10: Endlich Urlaub! (سفر و گردشگری)
  // ==========================================
  {
    id: 'l10-v1',
    german: 'erkunden',
    persian: 'کشف کردن، گشتن و بررسی کردن یک مکان ناشناخته',
    category: 'Verben',
    lesson: 10,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 10, module: 'Modul 1', pageOrTrack: 'S. 120', context: 'die historische Altstadt zu Fuß erkunden' },
      { source: 'Hörtexte', lesson: 10, module: 'Hörtext 10.2', pageOrTrack: 'Track 10.04', context: 'Wir haben mit dem Fahrrad die Küstenregion erkundet.' }
    ],
    pronunciation: '[ɛɐ̯ˈkʊndn̩]',
    infinitive: 'erkunden (+ Akk.)',
    present: 'erkundet',
    preterite: 'erkundete',
    perfect: 'hat erkundet',
    auxiliary: 'haben',
    example: 'Wir möchten auf eigene Faust die geheimen Ecken der Stadt erkunden.',
    exampleTranslation: 'ما می‌خواهیم با پای خودمان گوشه‌های دنج و پنهان شهر را کشف و سیاحت کنیم.',
    level: 'B1+',
    tags: ['سفر', 'گردشگری']
  },
  {
    id: 'l10-n1',
    german: 'die Sehenswürdigkeit',
    persian: 'جاذبه دیدنی، مکان تاریخی یا گردشگری دیدنی',
    category: 'Nomen',
    lesson: 10,
    sources: ['Lehrbuch'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 10, module: 'Modul 1', pageOrTrack: 'S. 121', context: 'berühmte Sehenswürdigkeiten besichtigen' }
    ],
    pronunciation: '[ˈzeːənsˌvʏʁdɪçkaɪ̯t]',
    article: 'die',
    plural: 'die Sehenswürdigkeiten',
    genderPersian: 'مونث (die)',
    example: 'Das Brandenburger Tor ist eine der bekanntesten Sehenswürdigkeiten Deutschlands.',
    exampleTranslation: 'دروازه براندنبورگ یکی از شناخته‌شده‌ترین جاذبه‌های دیدنی آلمان است.',
    level: 'B1+',
    tags: ['گردشگری', 'آلمان']
  },
  {
    id: 'l10-adj1',
    german: 'atemberaubend',
    persian: 'نفس‌گیر، حیرت‌انگیز، خیره‌کننده',
    category: 'Adjektive',
    lesson: 10,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'Hörtext 10.1', pageOrTrack: 'Track 10.01', context: 'Die Aussicht vom Berggipfel war atemberaubend.' },
      { source: 'Lehrbuch', lesson: 10, module: 'Modul 2', pageOrTrack: 'S. 124', context: 'eine atemberaubende Naturkulisse genießen' }
    ],
    pronunciation: '[ˈaːtəmˌbəʁaʊ̯bn̩t]',
    comparative: 'atemberaubender',
    superlative: 'am atemberaubendsten',
    example: 'Vom Berggipfel aus bot sich uns ein atemberaubender Blick auf die Alpen.',
    exampleTranslation: 'از قله کوه نمایی نفس‌گیر و خیره‌کننده از رشته‌کوه‌های آلپ پیش روی ما بود.',
    level: 'B1+',
    tags: ['طبیعت', 'توصیف']
  },
  {
    id: 'l10-red1',
    german: 'die Seele baumeln lassen',
    persian: 'استراحت مطلق کردن، ریلکس کردن، آرامش روح گرفتن',
    category: 'Redewendungen',
    lesson: 10,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 10, module: 'Modul 3', pageOrTrack: 'S. 127', context: 'Am Strand liegen und einfach die Seele baumeln lassen' },
      { source: 'Hörtexte', lesson: 10, module: 'Hörtext 10.3', pageOrTrack: 'Track 10.06', context: 'Nach dem Prüfungsstress muss ich erst mal die Seele baumeln lassen.' }
    ],
    pronunciation: '[diː ˈzeːlə ˈbaʊ̯ml̩n ˈlasn̩]',
    explanation: 'رهایی از تمام استرس‌های شغلی و روزمره و رسیدن به آرامش عمیق فکری و روانی',
    literalMeaning: 'گذاشتن روح به تاب خوردن',
    example: 'Im Urlaub möchte ich einfach am Strand liegen und die Seele baumeln lassen.',
    exampleTranslation: 'در تعطیلات می‌خواهم فقط کنار ساحل دراز بکشم و به روحم استراحت و آرامش بدهم.',
    level: 'B1+',
    tags: ['تعطیلات', 'آرامش', 'اصطلاح محبوب']
  }
];
