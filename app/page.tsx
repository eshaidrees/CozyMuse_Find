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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAF9F6]">
        {/* Perfect Mesh Gradient & Image Background */}
        <div className="absolute inset-0 z-0">
          {/* Subtle Fashion Imagery */}
          <div className="absolute inset-0 opacity-30">
            <Image 
              src="/images/casual-2.jpg" 
              alt="Background Style" 
              fill 
              className="object-cover object-top grayscale-[30%]"
              priority
            />
          </div>
          
          {/* Layered Mesh Gradient */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_0%_0%,#FDF2F2_0%,transparent_50%),radial-gradient(circle_at_100%_0%,#E5B6B6_0%,transparent_50%),radial-gradient(circle_at_50%_100%,#F5F5DC_0%,transparent_50%)]"></div>
          
          {/* Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20"></div>
          
          {/* Soft Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF9F6]"></div>
        </div>

        {/* Decorative Animated Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blush/20 rounded-full blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-soft-pink/30 rounded-full blur-[150px]"
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            
            {/* Elegant Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blush/5 border border-accent-blush/10 text-accent-blush text-[10px] uppercase tracking-[0.4em] mb-10"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated with Love</span>
            </motion.div>

            {/* Refined Heading - Simple & Elegant */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-stone-text mb-8 tracking-tight leading-tight"
            >
              Elevate Your <br />
              <span className="text-accent-blush italic font-medium">Daily Style</span>
            </motion.h1>

            {/* Minimalist Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-16 h-[1.5px] bg-accent-blush/30 mb-10"
            ></motion.div>

            {/* Graceful Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-500 font-light max-w-xl mb-14 leading-relaxed tracking-wide italic"
            >
              "Hand-picked fashion treasures from Amazon, <br className="hidden md:block" />
              chosen for the modern, effortless wardrobe."
            </motion.p>

            {/* Polished CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col items-center gap-10"
            >
              <Button
                size="lg"
                className="bg-accent-blush hover:bg-[#D4A3A3] text-black px-14 rounded-full h-16 text-lg font-medium shadow-soft hover:shadow-elegant transition-all hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => document.getElementById('summer-outfits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop the Collection
              </Button>
              
              {/* Subtle Scroll Hint */}
              <div className="flex flex-col items-center gap-3 opacity-30">
                <span className="text-[9px] uppercase tracking-[0.6em] text-stone-text font-bold">Explore</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-[1px] h-10 bg-gradient-to-b from-stone-text to-transparent"
                ></motion.div>
              </div>
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