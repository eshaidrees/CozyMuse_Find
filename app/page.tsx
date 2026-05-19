"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Heart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-28 md:py-48 overflow-hidden">
        <Image 
          src="/images/spr-1.jpg" 
          alt="Spring Fashion Inspiration" 
          fill 
          priority 
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blush/10 text-accent-blush text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Curated Edit</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-9xl font-serif font-bold text-stone-text mb-8 tracking-tight leading-[0.85] drop-shadow-sm"
            >
              Elevate Your <br /> 
              <span className="text-accent-blush italic">Daily Style</span> 🤍
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
            >
              Curated Amazon fashion finds for the modern, effortless wardrobe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-accent-blush hover:bg-[#D4A3A3] text-stone-text px-12 rounded-full h-16 text-lg font-bold shadow-elegant hover:shadow-hover transition-all hover:scale-[1.05] active:scale-[0.95]"
                onClick={() => document.getElementById('spring-dresses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Shopping
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fashion Sections */}
      {categories.map((category, index) => {
        const categoryProducts = products.filter(p => p.category === category.id);
        if (categoryProducts.length === 0) return null;

        return (
          <section 
            id={category.id} 
            key={category.id} 
            className={`py-24 ${index % 2 === 0 ? 'bg-[#FCFAFA]' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block mb-4"
                >
                  <span className="text-accent-blush text-sm font-bold uppercase tracking-[0.3em]">Curated Collection</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-6xl font-serif font-bold text-stone-text mb-6"
                >
                  {category.title}
                </motion.h2>
                <div className="w-20 h-1 bg-accent-blush/30 mx-auto mb-8"></div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-500 font-light italic text-xl max-w-2xl mx-auto leading-relaxed"
                >
                  {category.description}
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
                {categoryProducts.map((product, pIndex) => (
                  <ProductCard 
                    key={product.id}
                    id={product.id || ''}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    rating={product.rating}
                    link={product.link}
                    slug={product.slug}
                    delay={pIndex * 0.1}
                  />
                ))}
              </div>

              <div className="mt-20 text-center">
                <Button 
                  variant="outline" 
                  className="rounded-full border-accent-blush/30 text-stone-text hover:bg-accent-blush hover:text-white transition-all duration-300 px-12 h-16 font-bold uppercase tracking-widest text-xs shadow-soft hover:shadow-elegant"
                  onClick={() => window.location.href = `/category/${category.id}`}
                >
                  Explore All {category.title.split(' ')[0]} Finds
                </Button>
              </div>
            </div>
          </section>
        );
      })}

      {/* Trust Section */}
      <section className="py-32 bg-stone-text relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-center group"
            >
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:bg-accent-blush/20 group-hover:-translate-y-2 border border-white/10 group-hover:border-accent-blush/30">
                <TrendingUp className="w-10 h-10 text-accent-blush" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Trending Now</h3>
              <p className="text-gray-400 font-light leading-relaxed">The most viral pieces from TikTok and Pinterest, meticulously curated for your style.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-center group"
            >
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:bg-accent-blush/20 group-hover:-translate-y-2 border border-white/10 group-hover:border-accent-blush/30">
                <Heart className="w-10 h-10 text-accent-blush" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Handpicked Quality</h3>
              <p className="text-gray-400 font-light leading-relaxed">We only feature items with exceptional reviews and verified quality you can trust.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-center group"
            >
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:bg-accent-blush/20 group-hover:-translate-y-2 border border-white/10 group-hover:border-accent-blush/30">
                <Sparkles className="w-10 h-10 text-accent-blush" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white">Effortless Style</h3>
              <p className="text-gray-400 font-light leading-relaxed">Making it effortless for you to look polished and put-together, every single day.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <Newsletter className="py-24 bg-white" />
    </div>
  );
}