import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation objects
const translations = {
  en: {
    // Header
    'header.role': 'Software Engineer',
    'header.tagline': 'Constantly pushing myself to grow, learn, and create meaningful projects that make a positive impact.',
    'header.location': 'Istanbul, Turkey',
    'header.techStack': 'React, TypeScript, Python',
    'header.projectCreator': 'YU-Sync Creator',
    'header.availability': 'Available for exciting opportunities',

    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.writing': 'Skills',

    // About section
    'about.title': 'About',
    'about.paragraph1': 'Back in 2019, I decided to try my hand at web development during high school and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I\'ve had the privilege of building software for a variety of companies and personal projects.',
    'about.paragraph2': 'My main focus these days is building accessible, inclusive products and digital experiences at various companies. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.',
    'about.paragraph3': 'When I\'m not at the computer, I\'m usually rock climbing, hanging out with my friends, or exploring new places.',

    // Experience section
    'experience.title': 'Experience',
    'experience.education': 'Education',
    'experience.yasar.title': 'Computer Engineering Student',
    'experience.yasar.company': 'Yaşar University',
    'experience.yasar.description': 'Currently pursuing my Bachelor\'s degree in Computer Engineering with a focus on software development, algorithms, and system design.',
    'experience.doga.title': 'Science High School Graduate',
    'experience.doga.company': 'Doğa Koleji Science High School',
    'experience.doga.description': 'Graduated from science-focused high school with strong foundation in mathematics, physics, and analytical thinking.',

    // Projects section
    'projects.title': 'Projects',
    'projects.yuSync.title': 'YU-Sync',
    'projects.yuSync.description': 'A comprehensive course scheduling platform built for Yaşar University students. Features real-time schedule generation, conflict detection, and an intuitive drag-and-drop interface.',
    'projects.yuSync.viewProject': 'View Project',
    'projects.yuSync.viewCode': 'View Code',

    // Skills section
    'skills.title': 'Skills & Technologies',
    'skills.languages': 'Languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',

    // Languages
    'languages.turkish': 'Turkish',
    'languages.english': 'English',
    'languages.native': 'Native',
    'languages.fluent': 'Fluent',

    // Volunteer badges
    'volunteer.yuSync.title': 'Volunteer Work',
    'volunteer.yuSync.description': 'Made for Yaşar University students to generate schedules easily',
    'volunteer.impact.title': 'Impact Achievement',
    'volunteer.impact.description': '6000 students and 14000 page views during enrollment time',

    // Contact
    'contact.github': 'View Projects',
    'contact.email': 'Contact Me',
    'contact.yuSync': 'Live Project',

    // Accessibility
    'accessibility.skipToContent': 'Skip to Content',
    'accessibility.toggleLanguage': 'Toggle Language'
  },
  tr: {
    // Header
    'header.role': 'Yazılım Geliştirici',
    'header.tagline': 'Sürekli kendimi geliştirmek, öğrenmek ve olumlu etki yaratan anlamlı projeler oluşturmak için elimden geleni yapıyorum.',
    'header.location': 'İstanbul, Türkiye',
    'header.techStack': 'React, TypeScript, Python',
    'header.projectCreator': 'YU-Sync Yaratıcısı',
    'header.availability': 'Heyecan verici fırsatlar için müsait',

    // Navigation
    'nav.about': 'Hakkımda',
    'nav.experience': 'Deneyim',
    'nav.projects': 'Projeler',
    'nav.writing': 'Yetenekler',

    // About section
    'about.title': 'Hakkımda',
    'about.paragraph1': '2019\'da, lise dönemimde web geliştirme yapmaya karar verdim ve kodlama ile web geliştirme dünyasına daldım. Bugüne kadar, çeşitli şirketler ve kişisel projeler için yazılım geliştirme ayrıcalığına sahip oldum.',
    'about.paragraph2': 'Bu günlerde ana odağım, çeşitli şirketlerde erişilebilir, kapsayıcı ürünler ve dijital deneyimler oluşturmak. En çok tasarım ve mühendisliğin buluştuğu noktada yazılım geliştirmekten keyif alıyorum — hem güzel görünen hem de teknik olarak sağlam olan şeyler.',
    'about.paragraph3': 'Bilgisayar başında olmadığım zamanlarda, genellikle kaya tırmanışı yapıyor, arkadaşlarımla vakit geçiriyor veya yeni yerler keşfediyorum.',

    // Experience section
    'experience.title': 'Deneyim',
    'experience.education': 'Eğitim',
    'experience.yasar.title': 'Bilgisayar Mühendisliği Öğrencisi',
    'experience.yasar.company': 'Yaşar Üniversitesi',
    'experience.yasar.description': 'Yazılım geliştirme, algoritmalar ve sistem tasarımı odaklı Bilgisayar Mühendisliği lisans derecemi sürdürüyorum.',
    'experience.doga.title': 'Fen Lisesi Mezunu',
    'experience.doga.company': 'Doğa Koleji Fen Lisesi',
    'experience.doga.description': 'Matematik, fizik ve analitik düşünce konularında güçlü temellere sahip fen odaklı liseden mezun oldum.',

    // Projects section
    'projects.title': 'Projeler',
    'projects.yuSync.title': 'YU-Sync',
    'projects.yuSync.description': 'Yaşar Üniversitesi öğrencileri için geliştirilmiş kapsamlı bir ders programı platformu. Gerçek zamanlı program oluşturma, çakışma tespiti ve sezgisel sürükle-bırak arayüzü içerir.',
    'projects.yuSync.viewProject': 'Projeyi Görüntüle',
    'projects.yuSync.viewCode': 'Kodu Görüntüle',

    // Skills section
    'skills.title': 'Yetenekler ve Teknolojiler',
    'skills.languages': 'Diller',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Araçlar ve Diğerleri',

    // Languages
    'languages.turkish': 'Türkçe',
    'languages.english': 'İngilizce',
    'languages.native': 'Anadil',
    'languages.fluent': 'Akıcı',

    // Volunteer badges
    'volunteer.yuSync.title': 'Gönüllü Çalışma',
    'volunteer.yuSync.description': 'Yaşar Üniversitesi öğrencilerinin kolayca program oluşturması için geliştirildi',
    'volunteer.impact.title': 'Etki Başarısı',
    'volunteer.impact.description': 'Kayıt döneminde 6000 öğrenci ve 14000 sayfa görüntülenmesi',

    // Contact
    'contact.github': 'Projeleri Görüntüle',
    'contact.email': 'İletişime Geç',
    'contact.yuSync': 'Canlı Proje',

    // Accessibility
    'accessibility.skipToContent': 'İçeriğe Geç',
    'accessibility.toggleLanguage': 'Dil Değiştir'
  }
};

// Browser language detection
const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'tr' ? 'tr' : 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'en' || saved === 'tr')) {
      return saved as Language;
    }
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};