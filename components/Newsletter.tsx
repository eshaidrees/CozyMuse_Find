"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const Newsletter = ({ title = "Elevate Your Inbox 🤍", subtitle = "Join our community for exclusive daily outfit inspiration, trend alerts, and handpicked Amazon finds you'll love.", className = "" }: NewsletterProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll send the best finds to ${email}`);
    setEmail("");
  };

  return (
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="bg-stone-text rounded-[3rem] p-10 md:p-24 relative overflow-hidden shadow-hover group">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blush/10 rounded-full -mr-32 -mt-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blush/10 rounded-full -ml-32 -mb-32 blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">{title}</h2>
            <p className="text-gray-300 font-light italic text-xl mb-12 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full px-8 py-5 rounded-2xl border-none focus:outline-none focus:ring-2 focus:ring-accent-blush bg-white/10 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:bg-white/20"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-accent-blush hover:bg-white text-stone-text px-10 h-16 rounded-2xl font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]"
              >
                Join Now
              </Button>
            </form>
            <p className="mt-8 text-gray-500 text-xs font-light tracking-[0.2em] uppercase">No spam, just style. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;