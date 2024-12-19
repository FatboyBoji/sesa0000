"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import SesaIcon from './icons/sesalogoComb';

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [activeLink, setActiveLink] = useState<string>('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const updateActiveLink = () => {
      const path = window.location.pathname;
      setActiveLink(path);
    };
  
    window.addEventListener('popstate', updateActiveLink);
    updateActiveLink();
  
    return () => {
      window.removeEventListener('popstate', updateActiveLink);
    };
  }, []);

  const services = [
    "Javadoc Repository",
    "Test Service 2",
    "Test Service 3"
  ];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <nav className={`
        sticky top-0 z-50 
        bg-white/90 backdrop-blur-sm
        py-4 px-6 md:px-10
        transition-all duration-300 border-b border-gray-100
        ${className}`}>
        
        <div className="max-w-10xl mx-auto flex items-center justify-between">
          <div className="w-32 md:w-40 h-10 md:h-10">
            <SesaIcon className="text-black w-full h-full" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {['/', '/about'].map((path, index) => {
              const linkNames = ['Home', 'About'];
              const isActive = activeLink === path;

              return (
                <li key={index}>
                  <Link
                    href={path}
                    className={`
                      px-4 py-2 rounded-full
                      text-base font-medium
                      transition-all duration-300
                      ${isActive ? 
                        'bg-black text-white shadow-md transform scale-105' : 
                        'text-gray-600 hover:bg-gray-100 hover:text-black'
                      }
                    `}
                    onClick={() => setActiveLink(path)}
                  >
                    {linkNames[index]}
                  </Link>
                </li>
              );
            })}

            {/* Services Dropdown with Hover */}
            <li className="relative group">
              <Link
                href="/services"
                className={`
                  px-4 py-2 rounded-full
                  text-base
                  transition-all duration-300
                  text-black
                  ${activeLink.startsWith('/services') ? 'bg-black text-white' : 'hover:bg-black/5'}
                  flex items-center gap-2
                `}
              >
                Services
                <svg 
                  className="w-4 h-4 transition-transform group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Hover Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/contact"
                className={`
                  px-4 py-2 rounded-full
                  text-base font-medium
                  transition-all duration-300
                  ${activeLink === '/contact' ? 
                    'bg-black text-white shadow-md transform scale-105' : 
                    'text-gray-600 hover:bg-gray-100 hover:text-black'
                  }
                `}
                onClick={() => setActiveLink('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button 
            onClick={() => {
              setIsAnimating(true);
              setSidebarOpen(true);
            }}
            className="md:hidden p-2 group"
            aria-label="Open menu"
          >
            <div className="w-6 space-y-1.5 transform transition-all duration-300">
              <div className={`
                w-full h-0.5 bg-gray-800 
                transition-all duration-300
                ${isSidebarOpen ? 'rotate-45 translate-y-2' : ''}
              `}></div>
              <div className={`
                w-full h-0.5 bg-gray-800
                transition-all duration-300
                ${isSidebarOpen ? 'opacity-0' : 'opacity-100'}
              `}></div>
              <div className={`
                w-full h-0.5 bg-gray-800
                transition-all duration-300
                ${isSidebarOpen ? '-rotate-45 -translate-y-2' : ''}
              `}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay - Updated with click handler */}
      <div 
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden
          transition-opacity duration-300
          ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={handleOverlayClick}
      >
        <div className={`
          fixed top-0 left-0 h-full w-72
          bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
        `}>
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-100">
            <button 
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-gray-800 hover:text-black transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex-grow overflow-y-auto">
            <ul className="p-4 space-y-1">
              {['/', '/about'].map((path, index) => {
                const linkNames = ['Home', 'About'];
                const isActive = activeLink === path;

                return (
                  <li key={index}>
                    <Link
                      href={path}
                      className={`
                        block px-4 py-2.5 rounded-lg
                        transition-all duration-300
                        ${isActive ? 
                          'bg-gray-100 text-black font-medium transform translate-x-2' : 
                          'text-gray-600 hover:bg-gray-50 hover:text-black'
                        }
                      `}
                      onClick={() => {
                        setActiveLink(path);
                        setSidebarOpen(false);
                      }}
                    >
                      {linkNames[index]}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile Services Dropdown */}
              <li>
                <div className="px-4 py-2.5 text-gray-700">
                  <Link href="/services" className="block mb-2" onClick={() => setSidebarOpen(false)}>
                    Services
                  </Link>
                  <ul className="ml-4 border-l border-gray-200 space-y-1">
                    {services.map((service, index) => (
                      <li key={index}>
                        <a
                          href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setSidebarOpen(false)}
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`
                    block px-4 py-2.5 rounded-lg
                    transition-all duration-300
                    ${activeLink === '/contact' ? 
                      'bg-gray-100 text-black font-medium transform translate-x-2' : 
                      'text-gray-600 hover:bg-gray-50 hover:text-black'
                    }
                  `}
                  onClick={() => {
                    setActiveLink('/contact');
                    setSidebarOpen(false);
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sidebar Footer with Logo */}
          <div className="p-4 border-t border-gray-100">
            <div className="w-32 h-8 mx-auto">
              <SesaIcon className="text-black w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
