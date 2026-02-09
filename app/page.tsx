"use client";

import { motion } from "framer-motion";
import { TrendingUp, Tag, Heart, Sparkles, DollarSign, Award } from "lucide-react";
import Footer from "@/components/footer";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { fashionProducts, homeProducts, categories } from "@/data/products";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Cute Fashion and Cozy Home Finds You'll Love
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Handpicked Amazon favorites for your wardrobe and home.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                variant="cozy-primary"
                size="lg"
                onClick={() => document.getElementById('fashion')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop the Favorites
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Shop by Category
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                image={category.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Fashion Picks */}
      <section id="fashion" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Trending Fashion Picks
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {fashionProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                rating={product.rating}
                link={product.link}
                slug={product.slug}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Home Favorites */}
      <section id="home" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Aesthetic Home Favorites
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {homeProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                description={product.description}
                rating={product.rating}
                link={product.link}
                slug={product.slug}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why These Picks */}
      <section id="about" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Why These Picks
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Trendy & Viral</h3>
              <p className="text-gray-600">Curated from the latest trends and viral finds</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Affordable Finds</h3>
              <p className="text-gray-600">Quality items at budget-friendly prices</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Handpicked Quality</h3>
              <p className="text-gray-600">Carefully selected for durability and style</p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Email Signup Section */}
      <Newsletter className="py-16" />

      <Footer />
    </div>
  );
}