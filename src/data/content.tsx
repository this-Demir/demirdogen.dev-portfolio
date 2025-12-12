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
        title: "YU-Sync — Smart Course Scheduler",
        desc: "A volunteer web app helping students build conflict-free timetables. Uses a backtracking algorithm with heuristics to generate valid schedules while honoring user preferences.",
        detailLabel: "Details",
        whatTitle: "What it does",
        whatDesc: "Automated schedule generation with conflict detection and mobile-first UI.",
        statsTitle: "Usage Snapshot",
        statsDesc: "~5–6K visitors during enrollment period.",
        perfTitle: "Performance",
        perfDesc: "100/100 Desktop Experience Score.",
        note: "Community project, hosted on Vercel."
      },
      legacyRay: {
        title: "Legacy CPU Ray Tracer",
        desc: "The predecessor to the Vulkan engine. A physically-based path tracer written in Java/JavaFX. Served as the prototyping ground for the material system and lighting logic.",
        detailLabel: "Legacy Details",
        coreLogic: "Core Logic: Monte-Carlo path tracing, dielectric materials, and soft lighting on CPU.",
        uiLogic: "Interactive UI: Outliner for object selection and property editing."
      },
      udemy: {
        title: "Web Application Test Plan",
        desc: "Black-box UI testing project for a learning platform using Selenium WebDriver and JUnit 5. Automates critical user flows like search, cart management, and checkout.",
        detailText: "14 automated JUnit test classes using Equivalence Partitioning and Boundary Value Analysis."
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
        title: "YU-Sync — Akıllı Ders Programlayıcı",
        desc: "Öğrencilerin çakışmasız programlar oluşturmasına yardımcı olan gönüllü web uygulaması. Kullanıcı tercihlerini gözeterek geçerli programlar oluşturmak için sezgisel yöntemlerle desteklenen bir geri izleme (backtracking) algoritması kullanır.",
        detailLabel: "Detaylar",
        whatTitle: "Ne yapar?",
        whatDesc: "Çakışma tespiti ve mobil öncelikli arayüz ile otomatik program oluşturma.",
        statsTitle: "Kullanım Özeti",
        statsDesc: "Ders seçim döneminde ~5–6K ziyaretçi.",
        perfTitle: "Performans",
        perfDesc: "100/100 Masaüstü Deneyim Puanı.",
        note: "Topluluk projesidir, Vercel üzerinde barındırılmaktadır."
      },
      legacyRay: {
        title: "Legacy CPU Ray Tracer",
        desc: "Vulkan motorunun öncüsü. Java ve JavaFX ile yazılmış fiziksel tabanlı bir yol izleyici (path tracer). Materyal sistemi ve ışıklandırma mantığı için prototip oluşturma alanı olarak kullanıldı.",
        detailLabel: "Eski Sürüm Detayları",
        coreLogic: "Çekirdek Mantık: CPU üzerinde Monte-Carlo yol izleme, dielektrik materyaller ve yumuşak ışıklandırma.",
        uiLogic: "İnteraktif Arayüz: Nesne seçimi ve özellik düzenleme için taslak görünümü."
      },
      udemy: {
        title: "Web Uygulaması Test Planı",
        desc: "Selenium WebDriver ve JUnit 5 kullanılarak bir öğrenme platformu için geliştirilen kara kutu (black-box) UI test projesi. Arama, sepet yönetimi ve ödeme gibi kritik kullanıcı akışlarını otomatikleştirir.",
        detailText: "Eşdeğerlik Bölümlemesi ve Sınır Değer Analizi kullanan 14 otomatik JUnit test sınıfı."
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