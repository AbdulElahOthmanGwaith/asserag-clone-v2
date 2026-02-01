import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'الخدمات', href: '#services' },
    { label: 'المشاريع', href: '#projects' },
    { label: 'عن الشركة', href: '#about' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Asserag Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-2">
              <button className="text-sm font-semibold text-primary">EN</button>
              <span className="text-gray-300">|</span>
              <button className="text-sm font-semibold text-gray-500">AR</button>
            </div>
            <button className="bg-secondary text-white px-6 py-2 rounded font-semibold hover:shadow-lg transition-all">
              تواصل معنا
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-secondary text-white px-6 py-2 rounded font-semibold w-full mt-2">
              تواصل معنا
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
