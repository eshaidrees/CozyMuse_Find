import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#FCFAFA] border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-stone-text tracking-tighter"
            >
              Found & <span className="text-accent-blush italic">Favoured</span>
            </Link>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              Your daily destination for curated, effortless fashion inspiration and handpicked Amazon gems.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-text">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-sm text-gray-500 hover:text-accent-blush transition-colors">Home</Link>
              <Link href="/shop" className="text-sm text-gray-500 hover:text-accent-blush transition-colors">Shop All</Link>
              <Link href="/about" className="text-sm text-gray-500 hover:text-accent-blush transition-colors">Our Story</Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-accent-blush transition-colors">Get in Touch</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-text">Information</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-accent-blush transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-accent-blush transition-colors">Terms of Service</Link>
              <p className="text-[10px] text-gray-400 font-light leading-relaxed pt-2 italic">
                * As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Found & Favoured. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Pinterest Icon */}
            <a href="#" className="w-8 h-8 rounded-full bg-white shadow-soft flex items-center justify-center text-accent-blush hover:bg-accent-blush hover:text-white transition-all duration-300">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.289 2C6.617 2 2 6.617 2 12.289c0 4.305 2.774 8.012 6.746 9.525-.09-.806-.17-2.04.036-2.92.185-.794 1.197-5.07 1.197-5.07s-.306-.61-.306-1.513c0-1.42.823-2.48 1.848-2.48.87 0 1.29.654 1.29 1.44 0 .876-.558 2.184-.846 3.396-.24 1.017.51 1.845 1.512 1.845 1.815 0 3.207-1.913 3.207-4.676 0-2.444-1.756-4.153-4.266-4.153-2.91 0-4.613 2.18-4.613 4.43 0 .878.337 1.822.757 2.33.084.102.096.19.07.296l-.28 1.137c-.046.183-.15.222-.345.13-1.286-.6-2.09-2.482-2.09-3.996 0-3.254 2.364-6.24 6.812-6.24 3.578 0 6.357 2.55 6.357 5.955 0 3.555-2.242 6.416-5.353 6.416-1.045 0-2.027-.542-2.362-1.185l-.644 2.45c-.233.893-.863 2.012-1.284 2.703 1.1.34 2.274.524 3.49.524 5.671 0 10.288-4.617 10.288-10.289S17.96 2 12.289 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;