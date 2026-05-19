"use client";

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { motion } from 'framer-motion';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#FCFAFA] py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <span className="text-accent-blush text-sm font-bold uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-accent-blush/5 border border-accent-blush/10">The Edit</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-stone-text mb-8 tracking-tight"
          >
            All Curated <span className="text-accent-blush italic">Finds</span> 🤍
          </motion.h1>
          <div className="w-24 h-1 bg-accent-blush/30 mx-auto mb-8"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 font-light italic max-w-2xl mx-auto leading-relaxed"
          >
            A carefully selected collection of the season&apos;s most viral, high-quality fashion pieces from Amazon.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id!}
              title={product.title}
              image={product.image}
              description={product.description}
              rating={product.rating}
              link={product.link}
              slug={product.slug}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}