"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CategoryHeroProps {
  title: string;
  description: string;
}

const CategoryHero = ({ title, description }: CategoryHeroProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-soft-pink/10 -skew-x-12 translate-x-1/4"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <span className="text-accent-blush text-sm font-bold uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-accent-blush/5 border border-accent-blush/10">Collection</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-stone-text mb-8 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-accent-blush/30 mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-500 font-light italic max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
