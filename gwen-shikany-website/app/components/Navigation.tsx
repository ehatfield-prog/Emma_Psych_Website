'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/early-years', label: 'Early Years' },
    { href: '/young-adulthood', label: 'Young Adulthood' },
    { href: '/portland', label: 'Portland Community' },
    { href: '/family', label: 'Family & Relationships' },
    { href: '/marriage', label: 'Marriage' },
    { href: '/cursillo', label: 'Cursillo Experience' },
    { href: '/today', label: 'Hobbies & Interests' },
    { href: '/reflections', label: 'Reflections & Wisdom' },
  ];

  return (
    <nav className="bg-[#f5f1e8] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-[#6b7d5a] hover:text-[#9ca986] transition-colors">
            Gwen Shikany
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#d4917b] ${
                  pathname === item.href ? 'text-[#d4917b]' : 'text-[#2d2d2d]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#6b7d5a] hover:bg-[#e8dcc8]"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 text-sm hover:bg-[#e8dcc8] rounded transition-colors ${
                  pathname === item.href ? 'text-[#d4917b] font-medium' : 'text-[#2d2d2d]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
