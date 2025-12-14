export type LangType = 'en' | 'tr';

export const content = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education"
    },
    hero: {
      role: "Software Engineering Student",
      tagline: (
        <>
          Constantly learning and growing while building{' '}
          <span className="text-ui-blue font-medium">meaningful projects</span> that make a{' '}
          <span className="text-ui-purple font-medium">positive impact</span> in people's lives.
        </>
      ),
      location: "Türkiye - İzmir",
      techStack: "React • .NET • Java"
    },
    about: {
      title: "About",
      p1: "I'm a Software Engineering student who enjoys turning ideas into useful, well-crafted products. I focus on clear problem framing, thoughtful UI/UX, and reliable engineering—from front-end work in React/TypeScript to back-end APIs with .NET and SQL.",
      p2: (
        <>
          I value teamwork, clarity, and incremental improvement. Currently pursuing my{' '}
          <a
            className="font-medium text-ui-blue hover:text-ui-purple focus-visible:text-ui-purple transition-colors duration-300 glow-on-hover px-1 py-0.5 rounded"
            href="https://www.yasar.edu.tr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Bachelor's degree in Software Engineering at Yaşar University
          </a>.
        </>
      ),
      mission: "Dedicated to Continuous Improvement"
    },
    experience: {
      title: "Experience",
      yusync: {
        period: "2025 — Present",
        title: "Volunteer Developer & Project Lead",
        company: "YU-Sync",
        desc: "Architected and developed a volunteer scheduling application to assist Yaşar University students in generating conflict-free course timetables. Led the project from initial concept to a fully functional web application.",
        badge_volunteer: "Volunteer project for students",
        badge_users: "6k+ Users & 14k+ Views"
      }
    },
    projects: {
      title: "Featured Projects",
      vulkan: {
        title: "Vulkan BVH Ray Tracer",
        desc: "A high-performance, real-time ray tracing engine engineered from the ground up with Java and Vulkan (LWJGL). Moves beyond static images to offer a live viewer with dynamic geometry and physically-based lighting at 60+ FPS.",
        detailLabel: "Technical Deep Dive",
        featuresTitle: "Key Engineering Features:",
        f1: "Dynamic OBJ Loader & Scene Graph: Seamlessly parses external 3D models and integrates them into the scene.",
        f2: "O(log n) GPU Acceleration: Utilizes a Bounding Volume Hierarchy (BVH) built on the CPU and flattened for the GPU.",
        f3: "Triple-Thread Architecture: Decoupled UI (Swing), Render Engine (VRT), and Scene Builder (SRT) threads for smooth performance.",
        f4: "Interactive Experience: Fully dynamic camera and live material editing.",
        quote: "\"This project represents the evolution from understanding the math (CPU version) to mastering the hardware (Vulkan version).\""
      },
      yusync: {
        title: "YU-Sync — Intelligent Academic Scheduler",
        desc: "A high-performance algorithmic solution solving the 'course scheduling' chaos. It helped ~6,000 students generate conflict-free timetables during the enrollment period using a custom constraint solver.",
        detailLabel: "Technical & Impact Report",
        
        whatTitle: "The Problem & Solution",
        whatDesc: "Course selection is a stressful, time-critical process. YU-Sync transforms this manual burden into an automated experience. It parses university data to visualize 1000+ sections, offering features like custom filters, time-blocks, and instant conflict detection.",
        
        statsTitle: "Impact at Scale",
        statsDesc: "Achieved viral adoption with ~6,000 unique visitors and ~14,000 page views in a single week. Became the de-facto tool for the university community, handling high-traffic spikes seamlessly on Vercel.",
        
        perfTitle: "Engineering: Backtracking & Bitmasking",
        perfDesc: "The core is a Constraint Satisfaction solver using Backtracking. By implementing Bitwise Operations (Bitmasking) for time-slot collision detection, the algorithm achieves near O(log n) real-time performance, generating valid schedules from millions of permutations in milliseconds.",
        
        note: "Volunteer student project. Not affiliated with Yaşar University."
    },
      legacyRay: {
      title: "Legacy Ray Tracer — Java/CPU Engine",
      desc: "A raw implementation of ray tracing physics built from scratch in Java. It successfully simulates light transport (reflections, shadows) but served as a critical lesson in the limitations of CPU-based rendering.",
      detailLabel: "Post-Mortem & Analysis",
      
      archTitle: "Core Architecture",
      archDesc: "I built a 3D engine from scratch without using any graphics libraries. It simulates how light behaves in the real world—bouncing off mirrors and creating shadows—to generate realistic images.",

      limitsTitle: "Why I moved to GPU ?",
      limitsDesc:"The CPU struggled to handle millions of math operations simultaneously. This heavy load overwhelmed the system, causing the interface to freeze and the screen to black out during rendering.",
      
      takeaway: "This performance wall was the catalyst for learning Vulkan and GPU Compute shaders."
    },
     udemy: {
        title: "QA Automation & Test Architecture",

        desc: "A comprehensive QA automation suite engineered by a 5-person team to validate critical e-learning platform functionalities. Delivers black-box test coverage using IEEE-compliant methodologies.",
        detailLabel: "Project Scope & Team",

        storyTitle: "Scope & Methodology",
        storyDesc: "Executed a rigorous Black-box testing strategy targeting system fragility. We utilized Boundary Value Analysis (BVA) and Equivalence Partitioning (EP) to define test cases, all formally documented under IEEE 829 standards. The project deploys autonomous agents (DiscUdemy & SauceDemo Bots) to replace manual validation with precise, automated execution.",
        
        techTitle: "Technical Architecture",
        techDesc: "Built on a Java/Selenium/JUnit 5 stack, the architecture is designed for resilience against dynamic DOM elements and anti-bot measures. It simulates end-to-end user journeys—from search queries to checkout logic—ensuring data integrity and functional reliability without requiring backend access.",
        
        teamTitle: "Engineering Team ",
        note: "Developed for academic purposes only."
      },
      avo: {
        title: "Avo Breeze — E-commerce Demo",
        desc: "Full-stack demo showcasing production-style architecture with .NET 8 Web API, SQL database, JWT auth, and Iyzico payment integration."
      },
      artGallery: {
        title: "Art Gallery Swing UI",
        desc: "SQL-focused Java Swing application. Business logic implemented heavily via stored procedures, views, and triggers."
      }
    },
    education: {
      title: "Education",
      yasar: {
        date: "2023 — Present",
        degree: "B.Sc. Software Engineering",
        school: "Yaşar University",
        year: "3rd Year Student",
        gpa: "GPA"
      },
      deneyap: {
        date: "2020 — 2023",
        title: "Science & Innovation Program",
        org: "DENEYAP Technology Workshops",
        desc: "Advanced technology program focused on STEM, robotics, and coding.",
        certButton: "Certificates"
      },
      highschool: {
        date: "2019 — 2023",
        title: "Science High School",
        school: "Doğa Koleji Fen Lisesi"
      }
    },
    skills: {
      title: "Technical Expertise",
      core: "Core Specialization",
      tools: "Technologies Used in Projects",
      interestsTitle: "Personal Interests",
      i1: "Former National Fencer",
      i2: "Gaming Enthusiast",
      i3: "World Traveler",
      i4: "Tech Explorer"
    },
    footer: {
      built: "Built with React, TypeScript & Tailwind CSS",
      design: "Design inspired by",
      rights: "Demir Demirdöğen."
    }
  },
  tr: {
    nav: {
      about: "Hakkımda",
      experience: "Deneyim",
      projects: "Projeler",
      skills: "Yetenekler",
      education: "Eğitim"
    },
    hero: {
      role: "Yazılım Mühendisliği Öğrencisi",
      tagline: (
        <>
          Sürekli öğrenerek ve gelişerek, insanların hayatında{' '}
          <span className="text-ui-purple font-medium">pozitif etki</span> bırakan{' '}
          <span className="text-ui-blue font-medium">anlamlı projeler</span> geliştiriyorum.
        </>
      ),
      location: "Türkiye - İzmir",
      techStack: "React • .NET • Java"
    },
    about: {
      title: "Hakkımda",
      p1: "Fikirleri işlevsel ve iyi tasarlanmış ürünlere dönüştürmekten keyif alan bir Yazılım Mühendisliği öğrencisiyim. Problemleri net bir şekilde tanımlamaya, kullanıcı deneyimine (UI/UX) ve güvenilir mühendisliğe odaklanıyorum. React/TypeScript ile frontend geliştirmeden, .NET ve SQL ile backend mimarilerine kadar geniş bir yelpazede çalışıyorum.",
      p2: (
        <>
          Takım çalışmasına, net iletişime ve adım adım gelişime değer veriyorum. Şu anda{' '}
          <a
            className="font-medium text-ui-blue hover:text-ui-purple focus-visible:text-ui-purple transition-colors duration-300 glow-on-hover px-1 py-0.5 rounded"
            href="https://www.yasar.edu.tr/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Yaşar Üniversitesi'nde Yazılım Mühendisliği lisans eğitimime
          </a> devam ediyorum.
        </>
      ),
      mission: "Sürekli Gelişime Adanmışlık"
    },
    experience: {
      title: "Deneyim",
      yusync: {
        period: "2025 — Günümüz",
        title: "Gönüllü Geliştirici & Proje Lideri",
        company: "YU-Sync",
        desc: "Yaşar Üniversitesi öğrencilerinin çakışmasız ders programları oluşturmasına yardımcı olmak için gönüllü bir uygulama tasarladım ve geliştirdim. Projeyi fikir aşamasından çalışan bir web uygulamasına dönüştürdüm.",
        badge_volunteer: "Öğrenciler için gönüllü proje",
        badge_users: "6k+ Kullanıcı & 14k+ Görüntülenme"
      }
    },
    projects: {
      title: "Öne Çıkan Projeler",
      vulkan: {
        title: "Vulkan BVH Ray Tracer",
        desc: "Java ve Vulkan (LWJGL) ile sıfırdan geliştirilmiş, yüksek performanslı, gerçek zamanlı bir ışın izleme (ray tracing) motoru. Statik görüntülerin ötesine geçerek, dinamik geometri ve fiziksel tabanlı ışıklandırmayı 60+ FPS ile sunan canlı bir görüntüleyici sağlar.",
        detailLabel: "Teknik Detaylar",
        featuresTitle: "Temel Mühendislik Özellikleri:",
        f1: "Dinamik OBJ Yükleyici & Sahne Grafiği: Harici 3D modelleri sorunsuz bir şekilde ayrıştırır ve sahneye entegre eder.",
        f2: "O(log n) GPU Hızlandırma: CPU üzerinde oluşturulan ve GPU için düzleştirilen bir Sınırlayıcı Hacim Hiyerarşisi (BVH) kullanır.",
        f3: "Üçlü Thread Mimarisi: Akıcı performans için UI (Swing), Render Motoru (VRT) ve Sahne Oluşturucu (SRT) iş parçacıkları birbirinden ayrılmıştır.",
        f4: "İnteraktif Deneyim: Tamamen dinamik kamera ve canlı materyal düzenleme.",
        quote: "\"Bu proje, işin matematiğini anlamaktan (CPU versiyonu) donanıma hükmetmeye (Vulkan versiyonu) geçişi temsil ediyor.\""
      },
      yusync: {
      title: "YU-Sync — Akıllı Akademik Planlayıcı",
      desc: "Ders seçim kaosunu çözen yüksek performanslı bir mühendislik çözümü. Gelişmiş bir kısıt çözücü (constraint solver) kullanarak, kayıt döneminde ~6.000 öğrencinin çakışmasız ders programları oluşturmasını sağladı.",
      detailLabel: "Teknik Detaylar ve Etki",
      
      whatTitle: "Problem ve Çözüm",
      whatDesc: "Ders seçimi, öğrenciler için stresli ve hataya açık bir süreçtir. YU-Sync, bu süreci tamamen otomatikleştirir. Üniversite verilerini işleyerek binlerce şube (section) kombinasyonunu analiz eder; özel filtreler ve zaman kısıtlamaları ile öğrencilere en uygun programı saniyeler içinde sunar.",
      
      statsTitle: "Ölçeklenebilirlik ve Etki",
      statsDesc: "Sadece bir haftada ~6.000 tekil ziyaretçi ve ~14.000 sayfa görüntülenmesi ile viral bir etki yarattı. Kayıt döneminin fiili standart aracı haline gelerek yüksek trafik anlarında bile kesintisiz hizmet verdi.",

      perfTitle: "Mühendislik: Backtracking & Bitmasking",
      perfDesc: "Projenin kalbinde Backtracking tabanlı bir algoritma yatar. Zaman çakışmalarını tespit etmek için Bitwise Operasyonlar (Bitmasking) kullanılarak algoritma optimize edilmiştir. Bu sayede milyonlarca permütasyon arasından O(log n)'e yaklaşan bir hızla, milisaniyeler içinde geçerli programlar üretilir.",
    
      note: "Gönüllü öğrenci projesidir. Yaşar Üniversitesi ile resmi bir bağlantısı yoktur."
    },
      legacyRay: {
      title: "Legacy Ray Tracer — Java/CPU Motoru",
      desc: "Java ile sıfırdan yazılmış saf bir ışın izleme (ray tracing) motoru. Işık fiziğini (yansıma, gölge) başarıyla simüle etse de, CPU tabanlı render işlemlerinin sınırlarını öğreten kritik bir proje oldu.",
      detailLabel: "Analiz ve Limitler",
      
      archTitle: "Çekirdek Mimari",
      archDesc: "Hazır grafik kütüphaneleri kullanmadan, sıfırdan bir 3D motoru geliştirdim. Işığın gerçek dünyadaki hareketini (aynalardan yansımasını ve gölge oluşturmasını) taklit ederek gerçekçi görüntüler oluşturuyor.",

      limitsTitle: "Neden GPU'ya Geçtim?",
      limitsDesc: "İşlemci (CPU), milyonlarca ışık hesaplamasını aynı anda yapmaya çalışırken yetersiz kaldı. Bu aşırı işlem yükü, arayüzün donmasına ve ekranın kararmasına sebep oldu.",
      

      takeaway: "Bu performans duvarı, Vulkan ve GPU Compute Shader öğrenmem için itici güç oldu."
    },
    udemy: {
        title: "QA Otomasyon ve Test Mimarisi",
        desc: "5 kişilik mühendislik ekibi tarafından geliştirilen, e-öğrenme platformlarının kritik fonksiyonlarını doğrulayan kapsamlı QA otomasyon paketi. IEEE uyumlu metodolojilerle  test kapsamı sağlar.",
        detailLabel: "Proje Kapsamı ve Ekip",
        
        storyTitle: "Kapsam ve Metodoloji",
        storyDesc: "Sistemin en kırılgan noktalarını hedefleyen, Sınır Değer Analizi (BVA) ve Eşdeğerlik Bölümleme (EP) tekniklerine dayalı titiz bir Kara Kutu test stratejisi uygulandı. Tüm süreç IEEE 829 standartlarına göre belgelendirilmiş olup; manuel doğrulama yükünü ortadan kaldıran ve uç durumları (edge cases) yakalayan otonom botlar devreye alındı.",
        
        techTitle: "Teknik Mimari",
        techDesc: "Java, Selenium WebDriver ve JUnit 5 mimarisi üzerine inşa edilmiştir. Sistem, dinamik DOM yapılarını ve anti-bot önlemlerini yöneterek; arama, sepet ve ödeme gibi uçtan uca (E2E) kullanıcı senaryolarını veritabanı erişimi olmadan (backend-less) doğrular ve raporlar.",
        
        teamTitle: "Mühendislik Ekibi ",

        note: "Bu proje sadece akademik amaçlar için yapılmıştır."
      },
      avo: {
        title: "Avo Breeze — E-Ticaret Demosu",
        desc: ".NET 8 Web API, SQL veritabanı, JWT kimlik doğrulama ve Iyzico ödeme entegrasyonu ile prodüksiyon tarzı mimariyi sergileyen tam kapsamlı (full-stack) demo."
      },
      artGallery: {
        title: "Sanat Galerisi Swing UI",
        desc: "SQL odaklı Java Swing uygulaması. İş mantığı ağırlıklı olarak saklı yordamlar (stored procedures), görünümler (views) ve tetikleyiciler (triggers) ile veritabanı katmanında uygulanmıştır."
      }
    },
    education: {
      title: "Eğitim",
      yasar: {
        date: "2023 — Günümüz",
        degree: "Lisans, Yazılım Mühendisliği",
        school: "Yaşar Üniversitesi",
        year: "3. Sınıf Öğrencisi",
        gpa: "Ortalama"
      },
      deneyap: {
        date: "2020 — 2023",
        title: "Bilim & İnovasyon Programı",
        org: "DENEYAP Teknoloji Atölyeleri",
        desc: "STEM, robotik ve kodlama odaklı ileri teknoloji eğitim programı.",
        certButton: "Sertifikalar"
      },
      highschool: {
        date: "2019 — 2023",
        title: "Fen Lisesi",
        school: "Doğa Koleji Fen Lisesi"
      }
    },
    skills: {
      title: "Teknik Uzmanlık",
      core: "Temel Uzmanlık",
      tools: "Projelerde Kullanılan Teknolojiler",
      interestsTitle: "Kişisel İlgi Alanları",
      i1: "Eski Milli Eskrimci",
      i2: "Oyun Tutkunu",
      i3: "Dünya Gezgini",
      i4: "Teknoloji Kaşifi"
    },
    footer: {
      built: "React, TypeScript & Tailwind CSS ile geliştirildi",
      design: "Tasarım ilhamı:",
      rights: "Demir Demirdöğen."
    }
  }
};