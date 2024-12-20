"use client";

import { useState } from 'react';
import Navbar from '../../components/navbar';
import SesaBG from '../../components/sesa_background';
import SesaIcon from '../../components/icons/sesalogoComb';
import ContactForm from '../../components/ContactForm';

// Define types for our content structure
type Language = 'en' | 'de' | 'bg';

interface ContentType {
  title: string;
  subtitle: string;
  description: {
    highlight: string;
    rest: string;
  };
  contactInfo: {
    title: string;
    email: string;
    emailLabel: string;
    location: string;
    locationLabel: string;
    hours: string;
    hoursLabel: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
}

interface Content {
  en: ContentType;
  de: ContentType;
  bg: ContentType;
}

const content: Content = {
  en: {
    title: 'Get in Touch',
    subtitle: 'We are here to help',
    description: {
      highlight: 'Please,',
      rest: 'do not hesitate to contact us for more information on available products and services.'
    },
    contactInfo: {
      title: 'Other Ways to Connect',
      email: 'info@tjksesa.com',
      emailLabel: 'Email',
      location: 'Frankfurt, Germany',
      locationLabel: 'Location',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM CET',
      hoursLabel: 'Business Hours'
    },
    form: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Message',
      submit: 'Send Message'
    }
  },
  de: {
    title: 'Kontaktieren Sie uns',
    subtitle: 'Wir sind für Sie da',
    description: {
      highlight: 'Bitte,',
      rest: 'zögern Sie nicht, uns für weitere Informationen zu Produkten und Dienstleistungen zu kontaktieren.'
    },
    contactInfo: {
      title: 'Weitere Kontaktmöglichkeiten',
      email: 'info@tjksesa.com',
      emailLabel: 'E-Mail',
      location: 'Frankfurt, Deutschland',
      locationLabel: 'Standort',
      hours: 'Mo-Fr: 9:00 - 18:00 MEZ',
      hoursLabel: 'Geschäftszeiten'
    },
    form: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Nachricht',
      submit: 'Nachricht senden'
    }
  },
  bg: {
    title: 'Свържете се с нас',
    subtitle: 'Ние сме тук да помогнем',
    description: {
      highlight: 'Моля,',
      rest: 'не се колебайте да се свържете с нас за повече информация за налични продукти и услуги.'
    },
    contactInfo: {
      title: 'Други начини за връзка',
      email: 'info@tjksesa.com',
      emailLabel: 'Имейл',
      location: 'Франкфурт, Германия',
      locationLabel: 'Локация',
      hours: 'Пон-Пет: 9:00 - 18:00 ч. ЦЕВ',
      hoursLabel: 'Работно време'
    },
    form: {
      name: 'Вашето име',
      email: 'Вашият имейл',
      message: 'Съобщение',
      submit: 'Изпрати'
    }
  }
};

export default function Contact() {
  const [currentLang, setCurrentLang] = useState<Language>('de');

  const handleLanguageChange = (lang: Language) => {
    console.log('Language changed to:', lang);
    setCurrentLang(lang);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background with lower z-index */}
      <div className="absolute inset-0 z-0">
        <SesaBG />
      </div>

      {/* Main content with higher z-index */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {content[currentLang].title}
              </h1>
              <p className="text-xl text-gray-600">
                {content[currentLang].subtitle}
              </p>
            </div>

            {/* Language Selector */}
            <div className="mb-12 flex justify-center text-green-600 space-x-4">
              {(Object.keys(content) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500
                           ${currentLang === lang ? 'bg-green-100 text-yellow-600' : ''}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <p className="text-lg text-gray-600 mb-8">
                  <span className="text-xl font-semibold text-green-600">
                    {content[currentLang].description.highlight}
                  </span>{' '}
                  {content[currentLang].description.rest}
                </p>
                <ContactForm content={content[currentLang].form} />
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {content[currentLang].contactInfo.title}
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        {/* Email icon */}
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {content[currentLang].contactInfo.emailLabel}
                        </p>
                        <p className="text-lg font-medium" style={{ color: 'tan' }}>
                          {content[currentLang].contactInfo.email}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        {/* Location icon */}
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {content[currentLang].contactInfo.locationLabel}
                        </p>
                        <p className="text-lg font-medium" style={{ color: 'tan' }}>
                          {content[currentLang].contactInfo.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        {/* Clock icon */}
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {content[currentLang].contactInfo.hoursLabel}
                        </p>
                        <p className="text-lg font-medium" style={{ color: 'tan' }}>
                          {content[currentLang].contactInfo.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map or Additional Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 h-64 flex items-center justify-center">
                  <p className="text-gray-500">-- extra Information hier --</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 text-white py-4 px-6 relative">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-24 h-5">
              <SesaIcon className="text-white w-full h-full" />
            </div>
            <p className="text-sm text-center md:text-right">
              © tjk sesa exclusive information service, 2024.06/ 2.8
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}