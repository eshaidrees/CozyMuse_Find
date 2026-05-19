'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const categoryLinks = [
    { name: 'Summer Outfits', href: '/category/summer-outfits' },
    { name: 'Winter Outfits', href: '/category/winter-outfits' },
    { name: 'Spring Outfits', href: '/category/spring-outfits' },
    { name: 'Fall Outfits', href: '/category/fall-outfits' },
    { name: 'Workwear', href: '/category/workwear' },
    { name: 'Casual Looks', href: '/category/casual-looks' },
    { name: 'Party Dresses', href: '/category/party-dresses' },
    { name: 'Two-Piece Sets', href: '/category/two-piece-sets' },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-stone-text hover:text-accent-blush transition-all duration-300 tracking-tighter"
            aria-label="Home page"
            onClick={() => setIsMenuOpen(false)}
          >
            Found & <span className="text-accent-blush italic">Favoured</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group py-2 ${
                  pathname === link.href
                    ? 'text-accent-blush'
                    : 'text-stone-text/70 hover:text-stone-text'
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent-blush transform origin-left transition-transform duration-300 ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            {/* Category Dropdown */}
            <div className="relative group">
              <button
                className="text-sm font-bold uppercase tracking-[0.2em] text-stone-text/70 hover:text-stone-text transition-all duration-300 flex items-center gap-1.5 focus:outline-none"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Collections
                <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform duration-300">▼</span>
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:block pt-4 w-64 z-50 animate-fade-in">
                <div className="bg-white shadow-hover rounded-2xl py-4 border border-gray-100 backdrop-blur-md bg-white/95">
                  {categoryLinks.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-6 py-3 text-xs font-bold uppercase tracking-widest text-stone-text/70 hover:text-accent-blush hover:bg-gray-50/50 transition-all"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-accent-blush focus:outline-none focus:ring-2 focus:ring-accent-blush rounded p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="img"
                aria-label="Close icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                role="img"
                aria-label="Menu icon"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? 'max-h-[80vh] opacity-100 mt-6 pb-6'
              : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="flex flex-col space-y-4 px-2 pt-4 pb-6 bg-white border-t border-gray-100 rounded-2xl shadow-hover">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`py-3 px-6 rounded-xl transition-all duration-300 text-xs font-bold uppercase tracking-widest ${
                  pathname === link.href
                    ? 'bg-accent-blush/10 text-accent-blush'
                    : 'text-stone-text hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile Category Dropdown */}
            <div className="pt-4 border-t border-gray-100 mx-2">
              <details className="group">
                <summary className="py-3 px-4 rounded-xl text-stone-text hover:bg-gray-50 cursor-pointer list-none text-xs font-bold uppercase tracking-widest">
                  <span className="flex justify-between items-center">
                    <span>Collections</span>
                    <span className="ml-2 group-open:rotate-180 transition-transform duration-300">▼</span>
                  </span>
                </summary>
                <div className="pl-4 py-2 space-y-1 mt-2">
                  {categoryLinks.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block py-3 px-6 text-[11px] font-bold uppercase tracking-widest text-stone-text/70 hover:text-accent-blush hover:bg-gray-50 rounded-xl transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;