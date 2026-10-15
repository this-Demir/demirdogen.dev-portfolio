export type LangType = 'en' | 'tr';

/**
 * House style: no em dashes anywhere in copy. Use commas, colons, parentheses
 * or a full stop instead, and a plain hyphen for date ranges.
 */

/** Shared styling for inline links inside translated prose. */
const linkClass =
  'text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent';

const en = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
  },
  hero: {
    role: 'Software Engineering Student',
    location: 'İzmir, Türkiye',
  },
  about: {
    title: 'About',
    intro: (
      <>
        I'm a final-year Software Engineering student at{' '}
        <a
          className={linkClass}
          href="https://www.yasar.edu.tr/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Yaşar University
        </a> and a
        part-time Software Developer at{' '}
        <a
          className={linkClass}
          href="https://www.broadangle.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          broadAngle
        </a>, working on
        production .NET applications. On the side I built and maintain YU-Sync, a
        course scheduler that thousands of students use every enrolment period.
      </>
    ),
  },
  experience: {
    title: 'Experience',
    broadanglePartTime: {
      period: 'Sep 2026 - Present',
      title: 'Software Developer (Part-time)',
      company: 'broadAngle',
      desc: 'Develop customer-facing production software and design solutions as part of an agile team.',
    },
    broadangleIntern: {
      period: 'Jul 2026 - Sep 2026',
      title: 'Software Engineering Intern',
      company: 'broadAngle',
      desc: 'Shipped production code for .NET web projects within an agile team.',
    },
    yusync: {
      period: 'Aug 2025 - Present',
      title: 'Creator & Maintainer',
      company: 'YU-Sync',
      desc: 'Built and maintain a free course-scheduling tool for Yaşar University students that generates conflict-free timetables in the browser. Took it from idea to a live product used every enrolment period.',
      metricUnique: '10,000+ unique visitors in 30 days',
      metricSearch: '10,000+ Google Search clicks in 28 days',
    },
  },
  projects: {
    title: 'Selected Projects',
    curiosityTitle: 'Just Curiosity',
    curiosityIntro:
      'Lower-level work built to understand how things run underneath: graphics pipelines, distributed simulation, and rendering maths.',
    yusync: {
      title: 'YU-Sync: Academic Scheduler',
      desc: 'An algorithmic solution to the course-selection scramble. It served 12,900+ visits during the Fall 2026 enrolment week and 10,000+ unique visitors over the following month, generating conflict-free timetables with an automated Python data pipeline and a custom constraint solver.',
      detailLabel: 'Technical & impact report',
      whatTitle: 'The problem and the solution',
      whatDesc:
        'Course selection is a stressful, time-critical process. YU-Sync turns that manual burden into an automated one: a Python pipeline parses university data to surface 1,000+ sections, with custom filters, time blocks, and instant conflict detection.',
      statsTitle: 'Adoption',
      statsDesc:
        'Fall 2026 enrolment week (8-15 Sep) brought 12,900+ visits, more than 8,400 of them from Google Search, and the following 30 days added 10,000+ unique visitors. Search Console recorded 10,000+ clicks in the 28 days to 22 September.',
      perfTitle: 'Engineering: backtracking and bitmasking',
      perfDesc:
        'The core is a constraint-satisfaction solver built on backtracking. Representing time slots as bitmasks reduces collision detection to a single bitwise AND, which is what makes generating valid schedules from millions of permutations feasible in milliseconds.',
      note: 'Volunteer student project. Not affiliated with Yaşar University.',
    },
    hotel: {
      title: 'StayEase: Hotel Booking Microservices',
      desc: 'A cloud-native booking platform built as eight independently deployed .NET 9 services behind an Ocelot API gateway. It covers search, reservations, comments, and an AI booking agent, with asynchronous notifications over RabbitMQ and a nightly occupancy job on AWS Lambda.',
      detailLabel: 'Architecture & infrastructure',
      archTitle: 'Service topology',
      archDesc:
        'All traffic enters through an Ocelot gateway that validates AWS Cognito JWTs before routing downstream. Hotel search, comments, AI-assisted booking, and notifications each run as a dedicated service, communicating synchronously over REST and asynchronously over RabbitMQ.',
      dataTitle: 'Polyglot persistence',
      dataDesc:
        'Relational data lives in Supabase PostgreSQL, comments in MongoDB Atlas, and an Upstash Redis cache sits in front of hotel search. Each service owns its own store instead of sharing a single schema.',
      opsTitle: 'Deployment and automation',
      opsDesc:
        'Services are containerised onto Azure Container Apps with internal ingress, the two Next.js clients onto Vercel, and scheduled jobs onto AWS Lambda via EventBridge, all shipped through GitHub Actions. A nightly job flags hotels whose occupancy exceeds 80% for the coming month.',
      note: 'Built for SE 4458, Software Architecture & Design of Modern Large Scale Systems. The live deployment has since been taken down.',
    },
    airline: {
      title: 'Airline Ticketing Platform & AI Agent',
      desc: 'A .NET 8 ticketing backend in strict Clean Architecture, covering flight inventory, atomic seat reservation, sequential check-in and role-based access, plus a conversational agent layered on top that turns plain-English requests into tool calls against the same API.',
      detailLabel: 'Backend & agent layer',
      apiTitle: 'Backend: Clean Architecture',
      apiDesc:
        'Four layers under a strict dependency rule: Domain holds entities and repository interfaces with zero external dependencies, and every EF Core query stays confined to Infrastructure. Covered by 25 unit and 56 integration tests, fronted by an Ocelot gateway with rate limiting, and load-tested with k6 against Grafana.',
      agentTitle: 'Agent: grounded tool calling',
      agentDesc:
        'A FastAPI service streams over SSE while a locally hosted Ollama model selects tools for flight search, booking, and check-in. Flight data, confirmations, and seat assignments are always rendered from raw API responses rather than model output, so safety-critical travel details cannot be hallucinated.',
      note: 'Built for SE 4458. Two repositories: the .NET backend, and the agent layer that sits on top of it.',
    },
    qa: {
      title: 'E-learning QA Test Automation',
      desc: 'An end-to-end test suite for an e-learning platform, built by a five-person team with black-box techniques and documented to IEEE 829.',
      detailLabel: 'Scope & team',
      storyTitle: 'Scope and methodology',
      storyDesc:
        'Test cases were derived with Boundary Value Analysis and Equivalence Partitioning, focusing on the flows most likely to break, and documented under IEEE 829.',
      techTitle: 'Technical architecture',
      techDesc:
        'Built on Java, Selenium WebDriver and JUnit 5, with explicit waits and stable locators so tests stay reliable as page content changes. It runs end-to-end journeys from search to checkout without backend access.',
      teamTitle: 'Engineering team',
      note: 'Developed for academic purposes only.',
    },
    vulkan: {
      title: 'Vulkan BVH Ray Tracer',
      desc: 'A real-time ray tracing engine written from scratch in Java and Vulkan (LWJGL). Rather than producing static images, it runs a live viewer with dynamic geometry and physically based lighting at 60+ FPS.',
      detailLabel: 'Technical deep dive',
      featuresTitle: 'Key engineering features',
      f1: 'Dynamic OBJ loader and scene graph: parses external 3D models and integrates them into the scene at runtime.',
      f2: 'O(log n) GPU acceleration: a Bounding Volume Hierarchy built on the CPU, then flattened for GPU traversal.',
      f3: 'Triple-thread architecture: UI, render engine, and scene builder decoupled onto separate threads.',
      f4: 'Interactive experience: fully dynamic camera and live material editing.',
      quote:
        'This project is the step from understanding the maths (the CPU version) to working with the hardware (the Vulkan version).',
    },
    aerolink: {
      title: 'AERO-LINK: UAV Simulation & Ground Control',
      desc: 'A client-server simulation in which a virtual UAV acts as a server processing commands. Built with Java and the Vulkan API, it carries real-time telemetry and simulates the interaction between ground control and the aircraft end to end.',
      detailLabel: 'System architecture',
      arch1Title: 'Distributed architecture',
      arch1Desc:
        'The UAV runs as a server handling inbound commands, with flight modes managed through the State pattern.',
      arch2Title: 'Real-time telemetry',
      arch2Desc:
        'The Observer pattern carries telemetry to the control station without polling.',
      arch3Title: 'Vulkan integration',
      arch3Desc:
        'Physical interactions in the simulation are rendered live through the Vulkan API.',
    },
    legacyRay: {
      title: 'Legacy Ray Tracer: Java/CPU Engine',
      desc: 'A raw implementation of ray tracing physics written from scratch in Java. It simulates light transport, including reflections and shadows, and became a pointed lesson in the limits of CPU rendering.',
      detailLabel: 'Post-mortem',
      archTitle: 'Core architecture',
      archDesc:
        'A 3D engine built without graphics libraries. It simulates how light behaves in the real world, bouncing off mirrors and casting shadows, to produce realistic images.',
      limitsTitle: 'Why I moved to the GPU',
      limitsDesc:
        'The CPU could not carry millions of simultaneous ray calculations. The load froze the interface and blacked out the screen mid-render.',
      takeaway:
        'That performance wall is what pushed me into Vulkan and GPU compute shaders.',
    },
  },
  education: {
    title: 'Education',
    yasar: {
      date: '2023 - Present',
      degree: 'B.Sc. Software Engineering',
      school: 'Yaşar University',
      year: '4th Year Student',
      gpaLabel: 'GPA',
      gpaValue: '3.34',
      scholarship: 'Academic Merit Scholarship (GPA-based)',
      coursesLabel: 'Relevant coursework',
      courses:
        'Data Structures, Algorithms, OOP, Design Patterns, Software Architecture, Automata Theory',
    },
    deneyap: {
      date: '2020 - 2023',
      title: 'Science & Innovation Program',
      org: 'DENEYAP Technology Workshops',
      desc: 'Advanced technology program focused on STEM, robotics, and coding.',
      certButton: 'Certificates',
    },
    highschool: {
      date: '2019 - 2023',
      title: 'Science High School',
      school: 'Doğa Koleji Fen Lisesi',
    },
  },
  skills: {
    /** Caption shown under the technology marquee. */
    tools: 'Technologies used in projects',
  },
  footer: {
    contact: 'Get in touch',
    built: 'Built with React, TypeScript and Tailwind CSS',
    design: 'Design inspired by',
    rights: 'Demir Demirdöğen',
    source: 'Source on GitHub',
  },
  notFound: {
    title: 'Page not found',
    description:
      'The page you are looking for may have been removed, or is temporarily unavailable.',
    goHome: 'Return home',
    goBack: 'Go back',
  },
};

/**
 * Every language must provide exactly the keys `en` provides. Typing `tr`
 * against this catches a missing or misspelled translation at build time
 * instead of rendering `undefined` in production.
 */
export type Dictionary = typeof en;

const tr: Dictionary = {
  nav: {
    about: 'Hakkımda',
    experience: 'Deneyim',
    projects: 'Projeler',
    education: 'Eğitim',
  },
  hero: {
    role: 'Yazılım Mühendisliği Öğrencisi',
    location: 'İzmir, Türkiye',
  },
  about: {
    title: 'Hakkımda',
    intro: (
      <>
        <a
          className={linkClass}
          href="https://www.yasar.edu.tr/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Yaşar Üniversitesi
        </a>
        'nde son sınıf Yazılım Mühendisliği öğrencisiyim ve{' '}
        <a
          className={linkClass}
          href="https://www.broadangle.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          broadAngle
        </a>
        'da canlıdaki .NET uygulamaları üzerinde yarı zamanlı Yazılım Geliştirici
        olarak çalışıyorum. Bunun yanında, her kayıt döneminde binlerce öğrencinin
        kullandığı ders planlayıcısı YU-Sync'i geliştirip sürdürüyorum.
      </>
    ),
  },
  experience: {
    title: 'Deneyim',
    broadanglePartTime: {
      period: 'Eyl 2026 - Günümüz',
      title: 'Yazılım Geliştirici (Yarı Zamanlı)',
      company: 'broadAngle',
      desc: 'Çevik bir ekipte, müşterilere sunulan canlı yazılımlar geliştiriyor ve çözümler tasarlıyorum.',
    },
    broadangleIntern: {
      period: 'Tem 2026 - Eyl 2026',
      title: 'Yazılım Mühendisliği Stajyeri',
      company: 'broadAngle',
      desc: 'Çevik bir ekipte, .NET web projelerinde canlıya çıkan kod yazdım.',
    },
    yusync: {
      period: 'Ağu 2025 - Günümüz',
      title: 'Kurucu & Geliştirici',
      company: 'YU-Sync',
      desc: 'Yaşar Üniversitesi öğrencileri için tarayıcıda çakışmasız ders programları üreten ücretsiz bir ders planlama aracı geliştirdim ve sürdürüyorum. Fikir aşamasından her kayıt döneminde kullanılan canlı bir ürüne taşıdım.',
      metricUnique: '30 günde 10.000+ tekil ziyaretçi',
      metricSearch: '28 günde 10.000+ Google Arama tıklaması',
    },
  },
  projects: {
    title: 'Seçilmiş Projeler',
    curiosityTitle: 'Sadece Merak',
    curiosityIntro:
      'İşlerin alt katmanda nasıl çalıştığını anlamak için yazılmış düşük seviyeli çalışmalar: grafik hatları, dağıtık simülasyon ve render matematiği.',
    yusync: {
      title: 'YU-Sync: Akademik Planlayıcı',
      desc: 'Ders seçim kaosuna algoritmik bir çözüm. Otomatik bir Python veri hattı ve özel bir kısıt çözücü kullanarak, 2026 Güz kayıt haftasında 12.900+ ziyaret, takip eden ayda 10.000+ tekil ziyaretçi için çakışmasız ders programı üretti.',
      detailLabel: 'Teknik detaylar ve etki',
      whatTitle: 'Problem ve çözüm',
      whatDesc:
        'Ders seçimi stresli ve zamana karşı yürüyen bir süreçtir. YU-Sync bu manuel yükü otomatiğe çevirir: bir Python hattı üniversite verisini ayrıştırarak 1.000+ şubeyi görünür kılar; özel filtreler, zaman blokları ve anlık çakışma tespiti sunar.',
      statsTitle: 'Kullanım ve etki',
      statsDesc:
        '2026 Güz kayıt haftasında (8-15 Eylül), 8.400’den fazlası Google Arama’dan gelmek üzere 12.900+ ziyaret aldı; takip eden 30 günde 10.000+ tekil ziyaretçiye ulaştı. Search Console, 22 Eylül’e kadarki 28 günde 10.000+ tıklama kaydetti.',
      perfTitle: 'Mühendislik: backtracking ve bitmasking',
      perfDesc:
        'Çekirdekte backtracking tabanlı bir kısıt sağlama çözücüsü var. Zaman dilimlerini bit maskesi olarak temsil etmek, çakışma tespitini tek bir bitwise AND işlemine indirger; milyonlarca permütasyon arasından geçerli programları milisaniyeler içinde üretmeyi mümkün kılan da budur.',
      note: 'Gönüllü öğrenci projesidir. Yaşar Üniversitesi ile resmi bir bağlantısı yoktur.',
    },
    hotel: {
      title: 'StayEase: Otel Rezervasyon Mikroservisleri',
      desc: 'Ocelot API gateway arkasında, bağımsız olarak dağıtılan sekiz .NET 9 servisiyle kurulmuş bulut tabanlı rezervasyon platformu. Arama, rezervasyon, yorumlar ve yapay zekâ destekli rezervasyon ajanını kapsıyor; RabbitMQ üzerinden asenkron bildirimler ve AWS Lambda üzerinde gecelik doluluk işi yürütüyor.',
      detailLabel: 'Mimari ve altyapı',
      archTitle: 'Servis topolojisi',
      archDesc:
        'Tüm trafik, AWS Cognito JWT doğrulamasını yapan bir Ocelot gateway üzerinden giriyor ve oradan alt servislere yönleniyor. Otel arama, yorumlar, yapay zekâ destekli rezervasyon ve bildirim işlemleri ayrı servisler olarak çalışıyor; senkron iletişim REST, asenkron iletişim RabbitMQ üzerinden yürüyor.',
      dataTitle: 'Çok modelli veri katmanı',
      dataDesc:
        'İlişkisel veri Supabase PostgreSQL üzerinde, yorumlar MongoDB Atlas üzerinde tutuluyor; otel aramanın önünde Upstash Redis önbelleği var. Her servis ortak bir şema paylaşmak yerine kendi veri deposuna sahip.',
      opsTitle: 'Dağıtım ve otomasyon',
      opsDesc:
        'Servisler dahili ingress ile Azure Container Apps üzerine, iki Next.js istemcisi Vercel üzerine, zamanlanmış işler ise EventBridge tetikleyicisiyle AWS Lambda üzerine konteynerleştirilerek GitHub Actions ile dağıtılıyor. Gecelik bir iş, gelecek ay doluluğu %80’i aşan otelleri işaretliyor.',
      note: 'SE 4458 (Software Architecture & Design of Modern Large Scale Systems) dersi için geliştirildi. Canlı dağıtım bu tarihten sonra kapatıldı.',
    },
    airline: {
      title: 'Havayolu Biletleme Platformu & Yapay Zekâ Ajanı',
      desc: 'Katı Clean Architecture ile yazılmış bir .NET 8 biletleme arka ucu; uçuş envanteri, atomik koltuk rezervasyonu, sıralı check-in ve rol tabanlı erişimi kapsıyor. Üzerine kurulu sohbet ajanı ise düz metin istekleri aynı API’ye yapılan araç çağrılarına çeviriyor.',
      detailLabel: 'Arka uç ve ajan katmanı',
      apiTitle: 'Arka uç: Clean Architecture',
      apiDesc:
        'Katı bağımlılık kuralıyla dört katman: Domain katmanı hiçbir dış bağımlılığı olmadan varlıkları ve repository arayüzlerini tutuyor, tüm EF Core sorguları Infrastructure içinde kalıyor. 25 birim ve 56 entegrasyon testiyle kapsanıyor, rate limiting yapan bir Ocelot gateway arkasında duruyor ve k6 ile Grafana üzerinde yük testinden geçiriliyor.',
      agentTitle: 'Ajan: veriye dayalı araç çağrısı',
      agentDesc:
        'Bir FastAPI servisi SSE üzerinden yanıt akışı sağlarken, yerelde çalışan bir Ollama modeli uçuş arama, rezervasyon ve check-in araçlarını seçiyor. Uçuş verileri, onaylar ve koltuk atamaları model çıktısından değil, ham API yanıtlarından render ediliyor; böylece kritik seyahat bilgileri halüsinasyona açık kalmıyor.',
      note: 'SE 4458 için geliştirildi. İki depo: .NET arka ucu ve onun üzerine oturan ajan katmanı.',
    },
    qa: {
      title: 'E-öğrenme QA Test Otomasyonu',
      desc: 'Bir e-öğrenme platformu için beş kişilik bir ekiple, kara kutu teknikleriyle tasarlanıp IEEE 829 standardına göre belgelenen uçtan uca test paketi.',
      detailLabel: 'Kapsam ve ekip',
      storyTitle: 'Kapsam ve metodoloji',
      storyDesc:
        'Test senaryoları, en kırılgan akışlara odaklanılarak Sınır Değer Analizi ve Eşdeğerlik Bölümleme ile türetildi ve IEEE 829 standardına göre belgelendi.',
      techTitle: 'Teknik mimari',
      techDesc:
        'Java, Selenium WebDriver ve JUnit 5 üzerine kurulu; açık beklemeler (explicit wait) ve kararlı seçicilerle sayfa içeriği değişse de güvenilir çalışıyor. Aramadan ödemeye kadar uçtan uca kullanıcı akışlarını arka uç erişimi olmadan yürütüyor.',
      teamTitle: 'Mühendislik ekibi',
      note: 'Yalnızca akademik amaçlarla geliştirilmiştir.',
    },
    vulkan: {
      title: 'Vulkan BVH Ray Tracer',
      desc: 'Java ve Vulkan (LWJGL) ile sıfırdan yazılmış gerçek zamanlı bir ışın izleme motoru. Statik görüntü üretmek yerine, dinamik geometri ve fizik tabanlı ışıklandırmayla 60+ FPS’te çalışan canlı bir görüntüleyici sunuyor.',
      detailLabel: 'Teknik detaylar',
      featuresTitle: 'Temel mühendislik özellikleri',
      f1: 'Dinamik OBJ yükleyici ve sahne grafiği: harici 3D modelleri çalışma zamanında ayrıştırıp sahneye ekliyor.',
      f2: 'O(log n) GPU hızlandırma: CPU üzerinde kurulan, ardından GPU gezinmesi için düzleştirilen bir Sınırlayıcı Hacim Hiyerarşisi (BVH).',
      f3: 'Üçlü thread mimarisi: arayüz, render motoru ve sahne oluşturucu ayrı thread’lere bölünmüş durumda.',
      f4: 'Etkileşimli deneyim: tamamen dinamik kamera ve canlı materyal düzenleme.',
      quote:
        'Bu proje, matematiği anlamaktan (CPU sürümü) donanımla çalışmaya (Vulkan sürümü) geçilen adımı temsil ediyor.',
    },
    aerolink: {
      title: 'AERO-LINK: İHA Simülasyonu & Yer Kontrol',
      desc: 'Sanal bir İHA’nın komutları işleyen bir sunucu gibi davrandığı istemci-sunucu simülasyonu. Java ve Vulkan API ile geliştirildi; gerçek zamanlı telemetri taşıyor ve yer kontrol istasyonu ile hava aracı arasındaki etkileşimi uçtan uca simüle ediyor.',
      detailLabel: 'Sistem mimarisi',
      arch1Title: 'Dağıtık mimari',
      arch1Desc:
        'İHA, gelen komutları işleyen bir sunucu olarak çalışıyor; uçuş modları State deseniyle yönetiliyor.',
      arch2Title: 'Gerçek zamanlı telemetri',
      arch2Desc:
        'Observer deseni, telemetriyi yoklama yapmadan kontrol istasyonuna taşıyor.',
      arch3Title: 'Vulkan entegrasyonu',
      arch3Desc:
        'Simülasyondaki fiziksel etkileşimler Vulkan API üzerinden canlı olarak render ediliyor.',
    },
    legacyRay: {
      title: 'Legacy Ray Tracer: Java/CPU Motoru',
      desc: 'Java ile sıfırdan yazılmış saf bir ışın izleme uygulaması. Yansımalar ve gölgeler dâhil ışık taşınımını simüle ediyor; CPU render’ının sınırları konusunda net bir ders oldu.',
      detailLabel: 'Değerlendirme',
      archTitle: 'Çekirdek mimari',
      archDesc:
        'Grafik kütüphanesi kullanmadan kurulmuş bir 3D motor. Işığın gerçek dünyadaki davranışını, aynalardan yansımasını ve gölge oluşturmasını taklit ederek gerçekçi görüntüler üretiyor.',
      limitsTitle: 'Neden GPU’ya geçtim',
      limitsDesc:
        'CPU, aynı anda milyonlarca ışın hesabını taşıyamadı. Bu yük arayüzü dondurdu ve render sırasında ekranı kararttı.',
      takeaway:
        'Bu performans duvarı, beni Vulkan ve GPU compute shader’lara iten şey oldu.',
    },
  },
  education: {
    title: 'Eğitim',
    yasar: {
      date: '2023 - Günümüz',
      degree: 'Lisans, Yazılım Mühendisliği',
      school: 'Yaşar Üniversitesi',
      year: '4. Sınıf Öğrencisi',
      gpaLabel: 'Ortalama',
      gpaValue: '3.34',
      scholarship: 'Akademik Başarı Bursu (ortalamaya bağlı)',
      coursesLabel: 'İlgili dersler',
      courses:
        'Veri Yapıları, Algoritmalar, OOP, Tasarım Desenleri, Yazılım Mimarisi, Otomata Teorisi',
    },
    deneyap: {
      date: '2020 - 2023',
      title: 'Bilim & İnovasyon Programı',
      org: 'DENEYAP Teknoloji Atölyeleri',
      desc: 'STEM, robotik ve kodlama odaklı ileri teknoloji eğitim programı.',
      certButton: 'Sertifikalar',
    },
    highschool: {
      date: '2019 - 2023',
      title: 'Fen Lisesi',
      school: 'Doğa Koleji Fen Lisesi',
    },
  },
  skills: {
    tools: 'Projelerde kullanılan teknolojiler',
  },
  footer: {
    contact: 'İletişim',
    built: 'React, TypeScript ve Tailwind CSS ile geliştirildi',
    design: 'Tasarım ilhamı:',
    rights: 'Demir Demirdöğen',
    source: 'Kaynak kodu GitHub’da',
  },
  notFound: {
    title: 'Sayfa bulunamadı',
    description:
      'Aradığınız sayfa kaldırılmış ya da geçici olarak erişilemiyor olabilir.',
    goHome: 'Ana sayfaya dön',
    goBack: 'Geri dön',
  },
};

export const content: Record<LangType, Dictionary> = { en, tr };
