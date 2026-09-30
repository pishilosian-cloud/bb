import { VocabularyItem } from '../types/vocabulary';

export const INITIAL_VOCABULARY: VocabularyItem[] = [
  // ==========================================
  // KAPITEL 1: Leute heute (مردم امروز)
  // ==========================================
  {
    id: 'k1-v1',
    german: 'teilnehmen',
    persian: 'شرکت کردن، حضور یافتن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'an einem Workshop über Freundschaft teilnehmen' },
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2c', pageOrTrack: 'Track 1.3', context: 'Wir wollten eure Meinung wissen und haben Anrufe gesammelt.' }
    ],
    pronunciation: '[ˈtaɪ̯lˌneːmən]',
    infinitive: 'teilnehmen an (+ Dat.)',
    present: 'nimmt teil',
    preterite: 'nahm teil',
    perfect: 'hat teilgenommen',
    auxiliary: 'haben',
    separable: true,
    prepositionCase: 'an + Dativ',
    example: 'Viele Menschen nehmen aktiv an sozialen Projekten und Vereinen teil.',
    exampleTranslation: 'بسیاری از مردم به طور فعال در پروژه‌ها و انجمن‌های اجتماعی شرکت می‌کنند.',
    level: 'B1+',
    tags: ['ارتباطات', 'جامعه']
  },
  {
    id: 'k1-v2',
    german: 'sich verabreden',
    persian: 'قرار گذاشتن، قرار ملاقات گذاشتن',
    category: 'Verben',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2 (S. 172)', context: 'Eventuell verabredet man sich auch mal auf einen Kaffee.' },
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 12', context: 'sich mit Freunden verabreden' }
    ],
    pronunciation: '[zɪç fɛɐ̯ˈʔapˌʁeːdn̩]',
    infinitive: 'sich verabreden mit (+ Dat.) / auf (+ Akk.)',
    present: 'verabredet sich',
    preterite: 'verabredete sich',
    perfect: 'hat sich verabredet',
    auxiliary: 'haben',
    reflexive: true,
    prepositionCase: 'mit + Dativ',
    example: 'Eventuell verabredet man sich auch mal auf einen Kaffee und spricht über dies und das.',
    exampleTranslation: 'احتمالاً آدم گاهی برای یک فنجان قهوه قرار می‌گذارد و درباره این و آن صحبت می‌کند.',
    level: 'B1+',
    tags: ['دوستی', 'قرار']
  },
  {
    id: 'k1-v3',
    german: 'anvertrauen',
    persian: 'راز دل گفتن، در میان گذاشتن (راز یا مسئله خصوصی)',
    category: 'Verben',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2 (S. 172)', context: 'Dinge, die man vielleicht früher nur wenigen anvertraut hat.' }
    ],
    pronunciation: '[ˈanfɛɐ̯ˌtʁaʊ̯ən]',
    infinitive: 'anvertrauen (+ Dat. + Akk.)',
    present: 'vertraut an',
    preterite: 'vertraute an',
    perfect: 'hat anvertraut',
    auxiliary: 'haben',
    separable: true,
    example: 'In sozialen Netzwerken wird über Dinge gesprochen, die man früher nur wenigen Freunden anvertraut hat.',
    exampleTranslation: 'در شبکه‌های اجتماعی درباره چیزهایی صحبت می‌شود که در گذشته فقط با افراد معدودی در میان گذاشته می‌شد.',
    level: 'B1+',
    tags: ['اعتماد', 'روابط']
  },
  {
    id: 'k1-n1',
    german: 'der Freundeskreis',
    persian: 'دایره دوستان، جمع رفقا',
    category: 'Nomen',
    lesson: 1,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2 (S. 172)', context: 'Ein guter Freundeskreis macht uns selbstbewusst und psychisch stabil.' },
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 1', pageOrTrack: 'S. 10', context: 'einen großen Freundeskreis haben' }
    ],
    pronunciation: '[ˈfʁɔɪ̯ndəsˌkʁaɪ̯s]',
    article: 'der',
    plural: 'die Freundeskreise',
    genderPersian: 'مذکر (der)',
    example: 'Ein stabiler Freundeskreis stärkt unser Herz-Kreislaufsystem und die Abwehrkräfte.',
    exampleTranslation: 'یک جمع دوستانه پایدار، سیستم قلبی‌عروقی و قوای دفاعی بدن ما را تقویت می‌کند.',
    level: 'B1+',
    tags: ['دوستی', 'سلامتی']
  },
  {
    id: 'k1-n2',
    german: 'die Abwehrkräfte',
    persian: 'قوای دفاعی بدن، سیستم ایمنی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2 (S. 172)', context: 'Gute Freunde stärken unser Herz-Kreislaufsystem und die Abwehrkräfte.' }
    ],
    pronunciation: '[ˈapveːɐ̯ˌkʁɛftə]',
    article: 'die',
    plural: 'die Abwehrkräfte (معمولاً جمع)',
    genderPersian: 'مونث (die)',
    example: 'Lachen und soziale Bindungen aktivieren die körpereigenen Abwehrkräfte.',
    exampleTranslation: 'خنده و پیوندهای اجتماعی، قوای دفاعی بدن را فعال می‌کنند.',
    level: 'B1+',
    tags: ['سلامتی', 'بدن']
  },
  {
    id: 'k1-n3',
    german: 'das Statussymbol',
    persian: 'نماد موقعیت و پرستیژ اجتماعی',
    category: 'Nomen',
    lesson: 1,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2 (S. 172)', context: 'In den sozialen Netzwerken ist es für manche ein Statussymbol, viele Freunde zu haben.' }
    ],
    pronunciation: '[ˈʃtaːtʊszʏmˌboːl]',
    article: 'das',
    plural: 'die Statussymbole',
    genderPersian: 'خنثی (das)',
    example: 'Für viele junge Leute ist eine hohe Follower-Zahl zu einem modernen Statussymbol geworden.',
    exampleTranslation: 'برای بسیاری از جوانان، تعداد بالای دنبال‌کننده به یک نماد موقعیت اجتماعی مدرن تبدیل شده است.',
    level: 'B1+',
    tags: ['جامعه', 'اینترنت']
  },
  {
    id: 'k1-adj1',
    german: 'schnelllebig',
    persian: 'زودگذر، پرشتاب و متغیر (جامعه و زمانه)',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2 (S. 172)', context: 'Ist unsere Gesellschaft dafür zu schnelllebig geworden?' }
    ],
    pronunciation: '[ˈʃnɛlˌleːbɪç]',
    comparative: 'schnelllebiger',
    superlative: 'am schnelllebigsten',
    example: 'In unserer schnelllebigen Zeit halten manche Freundschaften leider nicht fürs ganze Leben.',
    exampleTranslation: 'در عصر پرشتاب کنونی ما، متأسفانه برخی دوستی‌ها برای تمام طول زندگی باقی نمی‌مانند.',
    level: 'B1+',
    tags: ['جامعه', 'توصیف']
  },
  {
    id: 'k1-adj2',
    german: 'selbstlos',
    persian: 'فداکارانه، از خودگذشته، بدون چشم‌داشت',
    category: 'Adjektive',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 3 Aufgabe 1b', pageOrTrack: 'Track 1.7 (S. 173)', context: 'für seinen selbstlosen Einsatz beim Roten Kreuz gelobt werden' }
    ],
    pronunciation: '[ˈzɛlpstloːs]',
    comparative: 'selbstloser',
    superlative: 'am selbstlosesten',
    opposite: 'egoistisch',
    example: 'Sie engagiert sich seit Jahren selbstlos für benachteiligte Kinder.',
    exampleTranslation: 'او سال‌هاست که فداکارانه برای کودکان محروم فعالیت می‌کند.',
    level: 'B1+',
    tags: ['اخلاق', 'شخصیت']
  },
  {
    id: 'k1-red1',
    german: 'durch dick und dünn gehen',
    persian: 'در تمام فراز و نشیب‌ها کنار هم بودن، پای هم ایستادن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Lehrbuch', 'Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 1.2 (S. 172)', context: 'Gemeinsam durch dick und dünn – gute Freunde zu haben, ist vielen wichtig.' },
      { source: 'Lehrbuch', lesson: 1, module: 'Modul 2', pageOrTrack: 'S. 13', context: 'Wahre Freunde gehen durch dick und dünn.' }
    ],
    pronunciation: '[dʊʁç dɪk ʊnt dʏn ˈɡeːən]',
    explanation: 'توصیف وفاداری عمیق در سختی‌ها و آسانی‌ها',
    literalMeaning: 'گذر از چاقی و لاغری',
    example: 'Wir kennen uns seit der Grundschule und gehen seither durch dick und dünn.',
    exampleTranslation: 'ما از دوران دبستان همدیگر را می‌شناسیم و از آن زمان در تمام سختی‌ها و خوشی‌ها کنار هم بوده‌ایم.',
    level: 'B1+',
    tags: ['دوستی', 'اصطلاح ناب']
  },
  {
    id: 'k1-red2',
    german: 'auf dem Laufenden bleiben',
    persian: 'در جریان امور ماندن، به‌روز بودن از احوالات',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'Modul 2 Aufgabe 2c', pageOrTrack: 'Track 1.4 (S. 172 - Felix)', context: 'Man kann einfach mit vielen Leuten in Kontakt sein und auf dem Laufenden bleiben.' }
    ],
    pronunciation: '[aʊ̯f deːm ˈlaʊ̯fndn̩ ˈblaɪ̯bn̩]',
    explanation: 'باخبر بودن از جدیدترین اتفاقات زندگی دوستان یا اخبار روز',
    example: 'Über unsere Chatgruppe bleibe ich immer auf dem Laufenden, was meine alten Schulfreunde machen.',
    exampleTranslation: 'از طریق گروه چتمان، من همیشه در جریان احوال و کارهای دوستان دوران مدرسه‌ام می‌مانم.',
    level: 'B1+',
    tags: ['ارتباطات', 'اصطلاح']
  },
  {
    id: 'k1-red3',
    german: 'unter einen Hut bekommen',
    persian: 'هماهنگ کردن دو مسئولیت دشوار (مانند کار و خانواده)',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'DVD Kapitel 1', pageOrTrack: 'DVD (S. 193 - Sybille Milde)', context: 'Ich muss Familie und Beruf irgendwie unter einen Hut bekommen.' }
    ],
    pronunciation: '[ˈʊntɐ ˈaɪ̯nən huːt bəˈkɔmən]',
    explanation: 'توانایی برقراری تعادل و تطبیق دادن چند برنامه یا مسئولیت سنگین همزمان',
    literalMeaning: 'جا دادن زیر یک کلاه',
    example: 'Als erfolgreiche Sterneköchin muss sie Familie und Karriere unter einen Hut bekommen.',
    exampleTranslation: 'به عنوان یک سرآشپز ستاره‌دار موفق، او باید خانواده و شغلش را با هم هماهنگ کند.',
    level: 'B1+',
    tags: ['کار', 'خانواده', 'اصطلاح پرکاربرد']
  },
  {
    id: 'k1-red4',
    german: 'in aller Munde sein',
    persian: 'سر زبان‌ها افتادن، بسیار مشهور و نقل محافل شدن',
    category: 'Redewendungen',
    lesson: 1,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 1, module: 'DVD Kapitel 1', pageOrTrack: 'DVD (S. 193)', context: 'Da war ich noch gar nicht in aller Munde, da war ich noch ein kleiner Hase.' }
    ],
    pronunciation: '[ɪn ˈalɐ ˈmʊndə zaɪ̯n]',
    explanation: 'وقتی نام یا اثر کسی همه جا مورد گفتگو و تمجید قرار می‌گیرد',
    example: 'Nach dem Gewinn der Meisterschaft war das Restaurant plötzlich in aller Munde.',
    exampleTranslation: 'پس از برنده شدن در مسابقات، نام آن رستوران ناگهان سر زبان‌ها افتاد.',
    level: 'B1+',
    tags: ['شهرت', 'اصطلاح']
  },

  // ==========================================
  // KAPITEL 2: Wohnwelten (جهان‌های مسکونی)
  // ==========================================
  {
    id: 'k2-v1',
    german: 'auf der Straße landen',
    persian: 'کارتن‌خواب شدن، بی‌خانمان و آواره خیابان شدن',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2 Aufgabe 3', pageOrTrack: 'Track 1.16 (S. 174)', context: 'Ich hatte keine Freunde, bei denen ich wohnen konnte. Und so bin ich auf der Straße gelandet.' }
    ],
    pronunciation: '[aʊ̯f deːɐ̯ ˈʃtʁaːsə ˈlandn̩]',
    explanation: 'از دست دادن محل سکونت و کار به دلایل مالی یا بحران شخصی و بی‌سرپناه شدن',
    example: 'Nach dem Verlust des Arbeitsplatzes und der Kündigung der Wohnung landete er auf der Straße.',
    exampleTranslation: 'پس از از دست دادن شغل و فسخ قرارداد خانه، او کارتن‌خواب و آواره خیابان شد.',
    level: 'B1+',
    tags: ['جامعه', 'مسکن']
  },
  {
    id: 'k2-v2',
    german: 'in den Griff bekommen',
    persian: 'تحت کنترل درآوردن، مسلط شدن بر مشکل',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2 Aufgabe 3', pageOrTrack: 'Track 1.16 (S. 174)', context: 'Wenn ich es schaffe, den Alkohol in den Griff zu bekommen, kann ich wieder arbeiten.' }
    ],
    pronunciation: '[ɪn deːn ɡʁɪf bəˈkɔmən]',
    explanation: 'کنترل کردن یک رفتار نادرست، بیماری، استرس یا بحران پیچیده',
    example: 'Mit Hilfe des Sozialarbeiters bekam er seine Schulden und Probleme endlich in den Griff.',
    exampleTranslation: 'به کمک مددکار اجتماعی، او بالاخره توانست بدهی‌ها و مشکلاتش را تحت کنترل درآورد.',
    level: 'B1+',
    tags: ['روانشناسی', 'کنترل']
  },
  {
    id: 'k2-v3',
    german: 'auf eigenen Beinen stehen',
    persian: 'روی پای خود ایستادن، مستقل بودن و متکی به والدین نبودن',
    category: 'Redewendungen',
    lesson: 2,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 4 Aufgabe 3', pageOrTrack: 'Track 1.17 (S. 175 - Konstantin)', context: 'Es ist wichtig, so früh wie möglich zu lernen, auf eigenen Beinen zu stehen.' },
      { source: 'Hörtexte', lesson: 2, module: 'DVD Kapitel 2', pageOrTrack: 'DVD (S. 195 - Hotel Mama)', context: 'Er hat Angst, dass er mal auf eigenen Beinen stehen muss.' }
    ],
    pronunciation: '[aʊ̯f ˈʔaɪ̯ɡnən ˈbaɪ̯nən ˈʃteːən]',
    explanation: 'تأمین مخارج و اداره مستقل امور زندگی بدون اتکا به دیگران',
    example: 'Mit 18 Jahren zog er in eine WG, um zu lernen, auf eigenen Beinen zu stehen.',
    exampleTranslation: 'او در ۱۸ سالگی به یک خانه اشتراکی نقل مکان کرد تا یاد بگیرد روی پای خودش بایستد.',
    level: 'B1+',
    tags: ['استقلال', 'زندگی']
  },
  {
    id: 'k2-n1',
    german: 'das Obdachlosenheim',
    persian: 'گرمخانه و پناهگاه بی‌خانمان‌ها',
    category: 'Nomen',
    lesson: 2,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 2 Aufgabe 3', pageOrTrack: 'Track 1.16 (S. 174)', context: 'Im Winter habe ich es auf der Straße nicht mehr ausgehalten und bin in ein Obdachlosenheim gegangen.' }
    ],
    pronunciation: '[ˈɔpdaxtloːzn̩ˌhaɪ̯m]',
    article: 'das',
    plural: 'die Obdachlosenheime',
    genderPersian: 'خنثی (das)',
    example: 'Das Obdachlosenheim bietet im kalten Winter warme Mahlzeiten und Schlafplätze.',
    exampleTranslation: 'پناهگاه بی‌خانمان‌ها در زمستان سرد، وعده‌های غذایی گرم و جای خواب فراهم می‌کند.',
    level: 'B1+',
    tags: ['جامعه', 'کمک‌رسانی']
  },
  {
    id: 'k2-n2',
    german: 'die Rundumversorgung',
    persian: 'رسیدگی همه‌جانبه، خدمات کامل رفاهی (غذا، نظافت، شستشو)',
    category: 'Nomen',
    lesson: 2,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'DVD Kapitel 2', pageOrTrack: 'DVD (S. 196 - Hotel Mama)', context: 'Matthias genießt die Vorteile der Rundumversorgung bei seiner Mutter.' }
    ],
    pronunciation: '[ˈʁʊntʔʊmfɛɐ̯ˌzɔʁɡʊŋ]',
    article: 'die',
    plural: 'die Rundumversorgungen',
    genderPersian: 'مونث (die)',
    example: 'Manche Erwachsene bleiben wegen der bequemen Rundumversorgung im Hotel Mama wohnen.',
    exampleTranslation: 'برخی افراد بزرگسال به خاطر رسیدگی همه‌جانبه و راحت در خانه پدری (هتل مامان) به زندگی ادامه می‌دهند.',
    level: 'B1+',
    tags: ['خانواده', 'سبک زندگی']
  },
  {
    id: 'k2-adj1',
    german: 'hellhörig',
    persian: 'کم‌عایق صدا، ساختمانی که صدا به راحتی از دیوارها رد می‌شود',
    category: 'Adjektive',
    lesson: 2,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 2, module: 'Modul 1', pageOrTrack: 'Track 1.14 (S. 173)', context: 'Das Altbauhaus ist leider ziemlich hellhörig.' }
    ],
    pronunciation: '[ˈhɛlˌhøːʁɪç]',
    comparative: 'hellhöriger',
    superlative: 'am hellhörigsten',
    example: 'In einem hellhörigen Haus muss man abends besonders auf die Zimmerlautstärke achten.',
    exampleTranslation: 'در خانه‌ای که عایق صوتی ضعیفی دارد، باید شب‌ها به خصوص مراقب بلندی صدای اتاق بود.',
    level: 'B1+',
    tags: ['مسکن', 'ساختمان']
  },

  // ==========================================
  // KAPITEL 3: Wie geht’s denn so? (سلامت و تغذیه)
  // ==========================================
  {
    id: 'k3-v1',
    german: 'wegschmeißen',
    persian: 'دور انداختن، هدر دادن (غذا یا وسایل)',
    category: 'Verben',
    lesson: 3,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 2 Aufgabe 2b', pageOrTrack: 'Track 1.21 (S. 176)', context: 'Hast du gewusst, dass wir pro Nase und Jahr mehr als 80 Kilo Lebensmittel wegschmeißen?' }
    ],
    pronunciation: '[ˈvɛkˌʃmaɪ̯sn̩]',
    infinitive: 'wegschmeißen (+ Akk.)',
    present: 'schmeißt weg',
    preterite: 'schmiss weg',
    perfect: 'hat weggeschmissen',
    auxiliary: 'haben',
    separable: true,
    example: 'In Deutschland wird jedes achte gekaufte Lebensmittel einfach weggeschmissen.',
    exampleTranslation: 'در آلمان از هر هشت قلم ماده غذایی خریداری‌شده، یکی به سادگی دور ریخته می‌شود.',
    level: 'B1+',
    tags: ['تغذیه', 'محیط زیست']
  },
  {
    id: 'k3-v2',
    german: 'in die Irre führen',
    persian: 'به اشتباه انداختن، گمراه کردن و فریب دادن (حواس)',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'DVD Kapitel 3', pageOrTrack: 'DVD (S. 197 - Geschmackslabor)', context: 'Genießer lassen sich gern von den Farben und Aromen in die Irre führen.' }
    ],
    pronunciation: '[ɪn diː ˈʔɪʁə ˈfyːʁən]',
    explanation: 'ایجاد تصور نادرست در ذهن به وسیله عوامل ظاهری نظیر رنگ و بو',
    example: 'Farben verführen die Zunge und können unseren Geschmackssinn leicht in die Irre führen.',
    exampleTranslation: 'رنگ‌ها زبان را فریب می‌دهند و می‌توانند حس چشایی ما را به سادگی به اشتباه بیندازند.',
    level: 'B1+',
    tags: ['حواس', 'علمی']
  },
  {
    id: 'k3-n1',
    german: 'der Kochmuffel',
    persian: 'آدم بی‌حوصله و تنبل در آشپزی',
    category: 'Nomen',
    lesson: 3,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 2 Aufgabe 1b', pageOrTrack: 'Track 1.20 (S. 176)', context: 'Viele bezeichnen sich als richtige Kochmuffel und greifen zu Fertiggerichten.' }
    ],
    pronunciation: '[ˈkɔxˌmʊfl̩]',
    article: 'der',
    plural: 'die Kochmuffel',
    genderPersian: 'مذکر (der)',
    example: 'Für echte Kochmuffel sind Tiefkühlpizzen und Fertiggerichte die schnellste Lösung.',
    exampleTranslation: 'برای کسانی که حوصله آشپزی ندارند، پیتزاهای منجمد و غذاهای آماده سریع‌ترین راه‌حل است.',
    level: 'B1+',
    tags: ['آشپزی', 'طنز و اصطلاح']
  },
  {
    id: 'k3-n2',
    german: 'der Biorhythmus',
    persian: 'ریتم زیستی و ساعت درونی شبانه‌روزی بدن',
    category: 'Nomen',
    lesson: 3,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 4 Aufgabe 3', pageOrTrack: 'Track 1.22 (S. 177)', context: 'Nach unserer inneren Uhr zu leben, gibt optimale Energie und erzeugt weniger Stress.' }
    ],
    pronunciation: '[ˈbiːoˌʁʏtmʊs]',
    article: 'der',
    plural: 'die Biorhythmen',
    genderPersian: 'مذکر (der)',
    example: 'Wer seinen Arbeitsalltag nach dem natürlichen Biorhythmus plant, arbeitet konzentrierter.',
    exampleTranslation: 'کسی که برنامه کاری روزانه‌اش را بر اساس ریتم طبیعی زیستی بدن تنظیم کند، با تمرکز بالاتری کار می‌کند.',
    level: 'B1+',
    tags: ['سلامتی', 'زمان‌بندی']
  },
  {
    id: 'k3-red1',
    german: 'wie geschmiert laufen',
    persian: 'مثل روغن روان کار کردن، عالی و بدون کوچکترین مانع پیش رفتن',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 4 Aufgabe 3', pageOrTrack: 'Track 1.22 (S. 177)', context: 'Zwischen neun und zwölf Uhr läuft unser Kurzzeitgedächtnis wie geschmiert.' }
    ],
    pronunciation: '[viː ɡəˈʃmiːɐ̯t ˈlaʊ̯fn̩]',
    explanation: 'توصیف کاری که با حداکثر راندمان، روانی و بدون هیچ مشکلی پیش می‌رود',
    literalMeaning: 'مثل روغن‌کاری‌شده حرکت کردن',
    example: 'Am Vormittag läuft das Denken wie geschmiert, deshalb sollte man schwierige Aufgaben dann erledigen.',
    exampleTranslation: 'در ساعات قبل از ظهر ذهن مثل ساعت کار می‌کند، به همین دلیل باید کارهای دشوار را آن موقع انجام داد.',
    level: 'B1+',
    tags: ['موفقیت', 'اصطلاح روزمره']
  },
  {
    id: 'k3-red2',
    german: 'in Schwung kommen',
    persian: 'رو آمدن، گرم شدن و به جریان افتادن شادابی و انرژی',
    category: 'Redewendungen',
    lesson: 3,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 3, module: 'Modul 4 Aufgabe 3', pageOrTrack: 'Track 1.22 (S. 177)', context: 'Der Körper braucht nach dem Aufstehen eine Stunde, um in Schwung zu kommen.' }
    ],
    pronunciation: '[ɪn ʃvʊŋ ˈkɔmən]',
    explanation: 'رسیدن به سطح مطلوبی از آمادگی، نشاط و تحرک پس از خواب یا سکون',
    example: 'Eine Tasse Tee und ein kurzer Spaziergang helfen mir morgens, schnell in Schwung zu kommen.',
    exampleTranslation: 'یک فنجان چای و پیاده‌روی کوتاه به من کمک می‌کند صبح‌ها سریع روی فرم بیایم.',
    level: 'B1+',
    tags: ['انرژی', 'صبح']
  },

  // ==========================================
  // KAPITEL 4: Viel Spaß! (اوقات فراغت و سرگرمی)
  // ==========================================
  {
    id: 'k4-n1',
    german: 'der Freizeitstress',
    persian: 'استرس ناشی از پر کردن بیش از حد اوقات فراغت',
    category: 'Nomen',
    lesson: 4,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Modul 1 Aufgabe 1b', pageOrTrack: 'Track 1.23 (S. 177)', context: 'Die Möglichkeiten sind so vielfältig, dass viele Leute in der Freizeit wieder Stress haben.' },
      { source: 'Hörtexte', lesson: 4, module: 'Modul 1 Aufgabe 1c', pageOrTrack: 'Track 1.26 (S. 178 - Aaron)', context: 'Ich hasse Freizeitstress, ich will nicht ständig irgendwas machen.' }
    ],
    pronunciation: '[ˈfʁaɪ̯tsaɪ̯tˌʃtʁɛs]',
    article: 'der',
    plural: 'nur Sg. (بدون جمع)',
    genderPersian: 'مذکر (der)',
    example: 'Zu viele Verabredungen und Termine am Wochenende führen oft zu echtem Freizeitstress.',
    exampleTranslation: 'قرارهای بیش از حد و برنامه‌های زیاد در آخر هفته اغلب منجر به استرس فراغت می‌شود.',
    level: 'B1+',
    tags: ['اوقات فراغت', 'روانشناسی']
  },
  {
    id: 'k4-v1',
    german: 'den Kopf frei kriegen',
    persian: 'خالی کردن ذهن از فکر و دغدغه‌های کاری',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'DVD Kapitel 4', pageOrTrack: 'DVD (S. 197 - Eisbach Surfen)', context: 'Sport ist Freizeit, das ist Runterkommen, also wirklich den Kopf frei kriegen.' }
    ],
    pronunciation: '[deːn kɔp͡f fʁaɪ̯ ˈkʁiːɡn̩]',
    explanation: 'تخلیه فشارهای روانی با انجام یک فعالیت بدنی یا تفریح لذت‌بخش',
    example: 'Nach einem langen Arbeitstag gehe ich joggen, um einfach den Kopf frei zu kriegen.',
    exampleTranslation: 'بعد از یک روز کاری طولانی، می‌روم می‌دوم تا به سادگی ذهنم را از افکار خالی کنم.',
    level: 'B1+',
    tags: ['آرامش', 'ورزش']
  },
  {
    id: 'k4-red1',
    german: 'ein Herz und eine Seele sein',
    persian: 'یک روح در دو بدن بودن، کمال یکدلی و صمیمیت داشتن',
    category: 'Redewendungen',
    lesson: 4,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 4, module: 'Modul 4 Aufgabe 5', pageOrTrack: 'Track 1.29 (S. 179 - Nachtwächtertour)', context: 'Zerstrittene Paare wurden so lange eingesperrt, bis sie als ein Herz und eine Seele wieder herauskamen.' }
    ],
    pronunciation: '[aɪ̯n hɛʁts ʊnt ˈaɪ̯nə ˈzeːlə zaɪ̯n]',
    explanation: 'توصیف پیوند قلبی بسیار شدید، تفاهم عمیق و یکرنگی بین دو نفر',
    example: 'Die beiden Geschwister streiten zwar manchmal, aber im Grunde sind sie ein Herz und eine Seele.',
    exampleTranslation: 'این دو خواهر و برادر گاهی دعوا می‌کنند، اما در باطن یک روح در دو بدن هستند.',
    level: 'B1+',
    tags: ['محبت', 'اصطلاح تاریخی']
  },

  // ==========================================
  // KAPITEL 5: Alles will gelernt sein (آموزش و حافظه)
  // ==========================================
  {
    id: 'k5-n1',
    german: 'die Merkfähigkeit',
    persian: 'قدرت به خاطرسپاری، توان نگهداری اطلاعات در حافظه',
    category: 'Nomen',
    lesson: 5,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 4 Aufgabe 2b', pageOrTrack: 'Track 1.35 (S. 180)', context: 'Außerdem soll auch die Merkfähigkeit gesteigert und die Formulierungsfähigkeit ausgebaut werden.' }
    ],
    pronunciation: '[ˈmɛʁkfeːɪçkaɪ̯t]',
    article: 'die',
    plural: 'nur Sg. (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Regelmäßiges Vokabeltraining und Assoziationen steigern die Merkfähigkeit spürbar.',
    exampleTranslation: 'تمرین منظم واژگان و ایجاد ارتباط معنایی، قدرت به خاطرسپاری را به طور ملموس افزایش می‌دهد.',
    level: 'B1+',
    tags: ['حافظه', 'یادگیری']
  },
  {
    id: 'k5-n2',
    german: 'die Wissbegierde',
    persian: 'عطش آموختن، اشتیاق شدید و کنجکاوی برای یادگیری',
    category: 'Nomen',
    lesson: 5,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'DVD Kapitel 5', pageOrTrack: 'DVD (S. 197 - Hochbegabte Kinder)', context: 'Daneben fällt ihre ungebremste Wissbegierde auf. Mit drei Jahren lernt sie selbst das Lesen.' }
    ],
    pronunciation: '[ˈvɪsbbəˌɡiːɐ̯də]',
    article: 'die',
    plural: 'nur Sg. (بدون جمع)',
    genderPersian: 'مونث (die)',
    example: 'Ihre unstillbare Wissbegierde trieb sie dazu, schon früh zwei Fremdsprachen fließend zu lernen.',
    exampleTranslation: 'عطش سیری‌ناپذیر او برای یادگیری باعث شد از همان کودکی دو زبان خارجی را روان بیاموزد.',
    level: 'B1+',
    tags: ['هوش', 'استعداد']
  },
  {
    id: 'k5-red1',
    german: 'die Schulbank drücken',
    persian: 'دوباره پشت نیمکت مدرسه نشستن، به تحصیل و کلاس برگشتن',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 1 Aufgabe 2', pageOrTrack: 'Track 1.30 (S. 179 - VHS)', context: 'Drei Gäste im Studio, die ein- bis zweimal in der Woche die Schulbank drücken.' }
    ],
    pronunciation: '[diː ˈʃuːlbaŋk ˈdʁʏkn̩]',
    explanation: 'شرکت در دوره‌های آموزشی یا دانشگاه در سنین بزرگسالی',
    literalMeaning: 'فشار دادن نیمکت مدرسه',
    example: 'Mit über 40 drückt sie an der Volkshochschule wieder die Schulbank, um Spanisch zu lernen.',
    exampleTranslation: 'در سن بالای ۴۰ سال، او دوباره در آموزشگاه پشت نیمکت می‌نشیند تا اسپانیایی یاد بگیرد.',
    level: 'B1+',
    tags: ['آموزش', 'اصطلاح پرکاربرد']
  },
  {
    id: 'k5-red2',
    german: 'Kleider machen Leute',
    persian: 'تن آدمی شریف است به جان آدمیت / ظاهر و پوشش مرتب در قضاوت مردم بسیار مؤثر است',
    category: 'Redewendungen',
    lesson: 5,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 5, module: 'Modul 1', pageOrTrack: 'Track 1.31 (S. 180)', context: 'Durch einen gepflegten Auftritt kann man sich besser präsentieren. Kleider machen Leute.' }
    ],
    pronunciation: '[ˈklaɪ̯dɐ ˈmaxn̩ ˈlɔɪ̯tə]',
    explanation: 'ضرب‌المثل معروف آلمانی درباره اهمیت پوشش شایسته در مصاحبه‌ها و محیط کار',
    example: 'Für das Vorstellungsgespräch wählte er einen eleganten Anzug – denn Kleider machen Leute.',
    exampleTranslation: 'برای مصاحبه استخدامی او کت و شلواری شیک پوشید – زیرا ظاهر و لباس بر نظر دیگران تأثیر دارد.',
    level: 'B1+',
    tags: ['ضرب‌المثل', 'کار']
  },

  // ==========================================
  // KAPITEL 6: Berufsbilder (مشاغل و کار)
  // ==========================================
  {
    id: 'k6-n1',
    german: 'der Knochenjob',
    persian: 'کار طاقت‌فرسا، شغل استخوان‌خردکن و بسیار سخت بدنی',
    category: 'Nomen',
    lesson: 6,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 6, module: 'Auftakt Aufgabe 2b', pageOrTrack: 'Track 2.4 (S. 181 - Weinlese)', context: 'Die Weinlese war echt ein Knochenjob, den ganzen Tag im Weinberg stehen und schneiden.' }
    ],
    pronunciation: '[ˈknɔxn̩ˌdʒɔp]',
    article: 'der',
    plural: 'die Knochenjobs',
    genderPersian: 'مذکر (der)',
    example: 'Möbelpacker und Bauarbeiter zu sein ist ein harter Knochenjob.',
    exampleTranslation: 'کارگر اسباب‌کشی و کارگر ساختمانی بودن، شغلی بسیار سخت و طاقت‌فرسا است.',
    level: 'B1+',
    tags: ['کار', 'بدنی']
  },
  {
    id: 'k6-n2',
    german: 'das Schlüsselerlebnis',
    persian: 'تجربه کلیدی، رخداد سرنوشت‌ساز و دگرگون‌کننده مسیر زندگی',
    category: 'Nomen',
    lesson: 6,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 6, module: 'Modul 4 Aufgabe 3a', pageOrTrack: 'Track 2.12 (S. 183 - Tauchlehrerin)', context: 'Das Schlüsselerlebnis war ein Tauchurlaub in Indonesien; da habe ich gemerkt, wie sehr mich das fasziniert.' }
    ],
    pronunciation: '[ˈʃlʏsl̩ʔɛɐ̯ˌleːpnɪs]',
    article: 'das',
    plural: 'die Schlüsselerlebnisse',
    genderPersian: 'خنثی (das)',
    example: 'Die Reise nach Indonesien war für sie das Schlüsselerlebnis, ihren Bürojob zu kündigen.',
    exampleTranslation: 'سفر به اندونزی برای او تجربه کلیدی و سرنوشت‌سازی بود تا شغل دفتری‌اش را استعفا دهد.',
    level: 'B1+',
    tags: ['زندگی', 'تصمیم']
  },
  {
    id: 'k6-red1',
    german: 'von der Hand in den Mund leben',
    persian: 'بخور و نمیر زندگی کردن، گذران روزمزد زندگی بدون پس‌انداز',
    category: 'Redewendungen',
    lesson: 6,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 6, module: 'DVD Kapitel 6', pageOrTrack: 'DVD (S. 198 - Auf der Walz)', context: 'Rund 400 Gesellen sind derzeit auf der Walz. Sie leben von der Hand in den Mund.' }
    ],
    pronunciation: '[fɔn deːɐ̯ hant ɪn deːn mʊnt ˈleːbn̩]',
    explanation: 'توصیف شرایطی که فرد هر چه درمی‌آورد صرف همان روز می‌کند و ذخیره مالی ندارد',
    example: 'Während der Wanderschaft als Geselle lebte er drei Jahre lang von der Hand in den Mund.',
    exampleTranslation: 'در طول دوران سفر سنتی شاگردی، او به مدت سه سال روزگار را بخور و نمیر سپری می‌کرد.',
    level: 'B1+',
    tags: ['مالی', 'سفر سنتی', 'اصطلاح ناب']
  },

  // ==========================================
  // KAPITEL 7: Für immer und ewig (عشق و خانواده)
  // ==========================================
  {
    id: 'k7-n1',
    german: 'die Patchworkfamilie',
    persian: 'خانواده ناتنی/تلفیقی، خانواده‌ای با فرزندان از ازدواج‌های قبلی',
    category: 'Nomen',
    lesson: 7,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 7, module: 'Modul 1 Aufgabe 2', pageOrTrack: 'Track 2.14 (S. 185)', context: 'Sechs Prozent aller Kinder in Deutschland leben in einer Patchworkfamilie.' },
      { source: 'Hörtexte', lesson: 7, module: 'Modul 1 Aufgabe 2', pageOrTrack: 'Track 2.15 (S. 185 - Herr Massmann)', context: 'Ich habe zwei Kinder aus erster Ehe, meine Frau hatte auch eine Tochter.' }
    ],
    pronunciation: '[ˈpɛtʃvœʁkfaˌmiːli̯ə]',
    article: 'die',
    plural: 'die Patchworkfamilien',
    genderPersian: 'مونث (die)',
    example: 'Das Zusammenleben in einer Patchworkfamilie erfordert viel Geduld und gegenseitige Rücksicht.',
    exampleTranslation: 'زندگی در یک خانواده تلفیقی نیازمند صبوری زیاد و رعایت حال متقابل است.',
    level: 'B1+',
    tags: ['خانواده', 'جامعه']
  },
  {
    id: 'k7-v1',
    german: 'sich zusammenraufen',
    persian: 'پس از اختلاف با هم کنار آمدن و به توافق و صلح رسیدن',
    category: 'Verben',
    lesson: 7,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 7, module: 'Modul 1 Aufgabe 2', pageOrTrack: 'Track 2.15 (S. 185)', context: 'Wir haben uns ganz gut zusammengerauft und die Großen verstehen sich ziemlich gut.' }
    ],
    pronunciation: '[zɪç tsuˈzamənˌʁaʊ̯fn̩]',
    infinitive: 'sich zusammenraufen',
    present: 'rauft sich zusammen',
    preterite: 'raufte sich zusammen',
    perfect: 'hat sich zusammengerauft',
    auxiliary: 'haben',
    reflexive: true,
    separable: true,
    example: 'Anfangs gab es Eifersucht, aber nach ein paar Monaten haben sich alle Kinder gut zusammengerauft.',
    exampleTranslation: 'اوایل حسادت وجود داشت، اما بعد از چند ماه همه بچه‌ها به خوبی با هم کنار آمدند و صمیمی شدند.',
    level: 'B1+',
    tags: ['روابط', 'سازگاری']
  },
  {
    id: 'k7-red1',
    german: 'beim Geld hört die Freundschaft/Liebe auf',
    persian: 'حساب حساب است و کاکا برادر / پای پول که به میان آید رفاقت و عشق کم‌رنگ می‌شود',
    category: 'Redewendungen',
    lesson: 7,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 7, module: 'DVD Kapitel 7', pageOrTrack: 'DVD (S. 199)', context: 'Beim Geld hört die Liebe auf: Männer und Frauen passen zusammen, solange es nicht ums Geldausgeben geht.' }
    ],
    pronunciation: '[baɪ̯m ɡɛlt høːɐ̯t diː ˈliːbə aʊ̯f]',
    explanation: 'تأکید بر این که مسائل مالی و اختلافات بر سر مخارج می‌تواند عمیق‌ترین روابط را تیره کند',
    example: 'Um Streit zu vermeiden, führen viele Paare eine getrennte Kasse, denn beim Geld hört oft die Liebe auf.',
    exampleTranslation: 'برای جلوگیری از مشاجره، بسیاری از زوج‌ها حساب‌های جداگانه نگه می‌دارند، زیرا پای پول که به میان بیاید صمیمیت به خطر می‌افتد.',
    level: 'B1+',
    tags: ['مالی', 'ضرب‌المثل']
  },

  // ==========================================
  // KAPITEL 8: Kaufen, kaufen, kaufen (مصرف‌گرایی)
  // ==========================================
  {
    id: 'k8-n1',
    german: 'die Reklamation',
    persian: 'اعتراض و ثبت شکایت بابت نقص کالای خریداری‌شده',
    category: 'Nomen',
    lesson: 8,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 8, module: 'Modul 3 Aufgabe 1b', pageOrTrack: 'Track 2.22 (S. 187 - Hotline)', context: 'Ich bräuchte die Reklamation schriftlich von Ihnen, sonst kann der Fall nicht bearbeitet werden.' }
    ],
    pronunciation: '[ʁeklamaˈtsi̯oːn]',
    article: 'die',
    plural: 'die Reklamationen',
    genderPersian: 'مونث (die)',
    example: 'Mit dem Kaufbeleg können Sie die Reklamation innerhalb der Garantiefrist einreichen.',
    exampleTranslation: 'با برگه خرید می‌توانید شکایت و ادعای نقص کالا را در مدت گارانتی ثبت کنید.',
    level: 'B1+',
    tags: ['خرید', 'خدمات']
  },
  {
    id: 'k8-n2',
    german: 'der Tauschring',
    persian: 'شبکه مبادله پایاپای، حلقه تبادل کالا و خدمات بدون پول',
    category: 'Nomen',
    lesson: 8,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 8, module: 'Modul 2 Aufgabe 5b', pageOrTrack: 'Track 2.21 (S. 187)', context: 'Dinge, die ich nicht brauche, tausche ich mit Freunden. Ich habe mir einen richtigen Tauschring aufgebaut.' }
    ],
    pronunciation: '[ˈtaʊ̯ʃˌʁɪŋ]',
    article: 'der',
    plural: 'die Tauschringe',
    genderPersian: 'مذکر (der)',
    example: 'Im lokalen Tauschring repariert er Fahrräder und bekommt dafür frisches Biogemüse.',
    exampleTranslation: 'در شبکه مبادله محلی، او دوچرخه تعمیر می‌کند و در عوض سبزیجات ارگانیک تازه دریافت می‌نماید.',
    level: 'B1+',
    tags: ['اقتصاد پایدار', 'مبادله']
  },
  {
    id: 'k8-adj1',
    german: 'folgenreich',
    persian: 'پرپیامد، دارای عواقب و اثرات سنگین (محیط‌زیستی یا اقتصادی)',
    category: 'Adjektive',
    lesson: 8,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 8, module: 'DVD Kapitel 8', pageOrTrack: 'DVD (S. 200 - BUND-Jugend)', context: 'Jede Form von Konsum ist mit Folgen für die Umwelt verbunden; das ist folgenreich.' }
    ],
    pronunciation: '[ˈfɔlɡn̩ˌʁaɪ̯ç]',
    comparative: 'folgenreicher',
    superlative: 'am folgenreichsten',
    opposite: 'folgenlos',
    example: 'Unser täglicher Konsum von Billigkleidung ist extrem folgenreich für die weltweiten Wasserressourcen.',
    exampleTranslation: 'مصرف روزانه لباس‌های ارزان‌قیمت توسط ما، عواقب بسیار سنگینی برای منابع آبی جهان دارد.',
    level: 'B1+',
    tags: ['محیط زیست', 'پیامد']
  },

  // ==========================================
  // KAPITEL 9: Endlich Urlaub (سفر و جهانگردی)
  // ==========================================
  {
    id: 'k9-n1',
    german: 'das Fernweh',
    persian: 'شوق سفر به نقاط دوردست، دلتنگی برای سفر و ماجراجویی',
    category: 'Nomen',
    lesson: 9,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 9, module: 'Modul 1 Aufgabe 2a/b', pageOrTrack: 'Track 2.27/2.28 (S. 188 - Axel Franke)', context: 'Als ich 25 war, bekam ich großes Fernweh. Ich wollte unbedingt mal in die Südsee.' }
    ],
    pronunciation: '[ˈfɛʁnˌveː]',
    article: 'das',
    plural: 'nur Sg. (بدون جمع)',
    genderPersian: 'خنثی (das)',
    opposite: 'das Heimweh (دلتنگی برای وطن/خانه)',
    example: 'Das ständige Fernweh veranlasste ihn, eine 15-monatige Weltreise über fünf Kontinente zu machen.',
    exampleTranslation: 'شوق همیشگی برای سفر به سرزمین‌های دور باعث شد او به یک سفر دور دنیای ۱۵ ماهه در پنج قاره برود.',
    level: 'B1+',
    tags: ['سفر', 'احساسات']
  },
  {
    id: 'k9-n2',
    german: 'das Workcamp',
    persian: 'اردوی کار داوطلبانه بین‌المللی برای سازندگی یا محیط زیست',
    category: 'Nomen',
    lesson: 9,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 9, module: 'Modul 2 Aufgabe 2a', pageOrTrack: 'Track 2.31 (S. 189/190 - Indien)', context: 'In dem indischen Dorf habe ich beim Aufbau einer Schule geholfen; alles ist ehrenamtlich.' }
    ],
    pronunciation: '[ˈvœːɐ̯kˌkɛmp]',
    article: 'das',
    plural: 'die Workcamps',
    genderPersian: 'خنثی (das)',
    example: 'In den Sommerferien nahm sie an einem Workcamp in Indien teil, um beim Schulbau zu helfen.',
    exampleTranslation: 'در تعطیلات تابستان، او در یک اردوی کار داوطلبانه در هند شرکت کرد تا به ساخت مدرسه کمک کند.',
    level: 'B1+',
    tags: ['داوطلبانه', 'سفر']
  },
  {
    id: 'k9-red1',
    german: 'den Goldesel zu Hause stehen haben',
    persian: 'گاو شیرده / دستگاه چاپ پول در خانه داشتن (بسیار پولدار بودن)',
    category: 'Redewendungen',
    lesson: 9,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 9, module: 'Modul 1 Aufgabe 2b', pageOrTrack: 'Track 2.28 (S. 189 - Weltreise)', context: 'Viele beneiden mich und denken: „Der hat einen Goldesel zu Hause stehen.“ Aber ich habe eisern gespart.' }
    ],
    pronunciation: '[deːn ˈɡɔltˌʔeːzl̩ tsu ˈhaʊ̯zə ˈʃteːən ˈhaːbn̩]',
    explanation: 'تصور نادرست از این که کسی بدون زحمت به ثروت بی‌پایان دسترسی دارد',
    literalMeaning: 'داشتن الاغ تولیدکننده طلا در خانه (اشاره به داستان‌های برادران گریم)',
    example: 'Er hat keinen Goldesel zu Hause, sondern hat drei Jahre lang eisern gespart, um die Reise zu finanzieren.',
    exampleTranslation: 'او دستگاه چاپ پول در خانه ندارد، بلکه سه سال با سرسختی تمام پس‌انداز کرد تا هزینه سفر را تأمین کند.',
    level: 'B1+',
    tags: ['مالی', 'ضرب‌المثل ناب']
  },

  // ==========================================
  // KAPITEL 10: Natürlich Natur! (حیوانات و طبیعت)
  // ==========================================
  {
    id: 'k10-n1',
    german: 'das Tierheim',
    persian: 'پناهگاه حیوانات، مرکز نگهداری حیوانات بی‌سرپرست',
    category: 'Nomen',
    lesson: 10,
    sources: ['Hörtexte', 'Lehrbuch'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'Modul 2 Aufgabe 2b', pageOrTrack: 'Track 2.34 (S. 191 - Leipzig)', context: 'Ich bin seitdem im Tierschutzverein aktiv und arbeite im Tierheim Leipzig.' }
    ],
    pronunciation: '[ˈtiːɐ̯ˌhaɪ̯m]',
    article: 'das',
    plural: 'die Tierheime',
    genderPersian: 'خنثی (das)',
    example: 'Im Tierheim werden herrenlose und verletzte Tiere versorgt und an liebevolle Familien vermittelt.',
    exampleTranslation: 'در پناهگاه حیوانات، به حیوانات رهاشده و آسیب‌دیده رسیدگی شده و به خانواده‌های دلسوز واگذار می‌شوند.',
    level: 'B1+',
    tags: ['حیوانات', 'حمایت']
  },
  {
    id: 'k10-v1',
    german: 'aussetzen',
    persian: 'رها کردن، ول کردن (حیوان خانگی در خیابان یا جنگل)',
    category: 'Verben',
    lesson: 10,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'Modul 2 Aufgabe 2c', pageOrTrack: 'Track 2.35 (S. 191)', context: 'Im Sommer finden wir leider sehr viele Tiere, die einfach irgendwo ausgesetzt wurden.' }
    ],
    pronunciation: '[ˈaʊ̯sˌzɛtsn̩]',
    infinitive: 'aussetzen (+ Akk.)',
    present: 'setzt aus',
    preterite: 'setzte aus',
    perfect: 'hat ausgesetzt',
    auxiliary: 'haben',
    separable: true,
    example: 'Vor der Urlaubszeit setzen leider manche unverantwortliche Besitzer ihre Haustiere aus.',
    exampleTranslation: 'متأسفانه قبل از فصل تعطیلات، برخی صاحبان بی‌مسئولیت حیوانات خانگی خود را در خیابان رها می‌کنند.',
    level: 'B1+',
    tags: ['حقوق حیوانات', 'جامعه']
  },
  {
    id: 'k10-n2',
    german: 'die Süßwasservorräte',
    persian: 'ذخایر آب شیرین کره زمین',
    category: 'Nomen',
    lesson: 10,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'Modul 4 Aufgabe 2a', pageOrTrack: 'Track 2.37 (S. 192 - Referat Wasser)', context: 'Nur 0,3 % der globalen Süßwasservorräte befinden sich in Seen und Flüssen.' }
    ],
    pronunciation: '[ˈzyːsvasɐˌfoːɐ̯ʁɛːtə]',
    article: 'die',
    plural: 'die Süßwasservorräte (معمولاً جمع)',
    genderPersian: 'مونث (die)',
    example: 'Durch den Klimawandel und ineffiziente Bewässerung schrumpfen die globalen Süßwasservorräte.',
    exampleTranslation: 'به دلیل تغییرات اقلیمی و آبیاری ناکارآمد، ذخایر آب شیرین جهان در حال کاهش است.',
    level: 'B1+',
    tags: ['محیط زیست', 'منابع']
  },
  {
    id: 'k10-adj1',
    german: 'zutraulich',
    persian: 'اهلی، دست‌آموز، نترس از انسان (حیوانات وحشی شهری)',
    category: 'Adjektive',
    lesson: 10,
    sources: ['Hörtexte'],
    sourceDetails: [
      { source: 'Hörtexte', lesson: 10, module: 'DVD Kapitel 10', pageOrTrack: 'DVD (S. 204 - Stadtfüchse)', context: 'Zutraulich werden die wilden Tiere in Berlin nur, wenn sie von Menschen gefüttert werden.' }
    ],
    pronunciation: '[ˈtsuːˌtʁaʊ̯lɪç]',
    comparative: 'zutraulicher',
    superlative: 'am zutraulichsten',
    opposite: 'scheu / ängstlich',
    example: 'Stadtfüchse in Berlin haben ihre natürliche Scheu verloren und sind erstaunlich zutraulich.',
    exampleTranslation: 'روباه‌های شهری در برلین ترس طبیعی خود را از دست داده و به طرز شگفت‌آوری با انسان‌ها مأنوس و نترس شده‌اند.',
    level: 'B1+',
    tags: ['حیوانات', 'رفتارشناسی']
  }
];
