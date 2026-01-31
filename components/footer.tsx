import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 text-sm mb-4">
            We are share stylish fashion and home finds from Amazon to make shopping easier and more fun.
          </p>
          <p className="text-amber-600 text-xs font-medium mb-6">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-700 transition-colors">
              Shop
            </Link>
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;