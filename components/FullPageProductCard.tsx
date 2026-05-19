'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface FullPageProductCardProps {
  id: string;
  title: string;
  brand?: string;
  image: string;
  description: string;
  rating: number;
  link: string;
  slug: string;
  index: number;
  totalProducts: number;
}

const FullPageProductCard = ({
  title,
  image,
  description,
  link,
  slug,
  index,
  totalProducts
}: FullPageProductCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[80vh] flex flex-col justify-center py-16 md:py-32 px-4 bg-transparent border-b border-gray-100 last:border-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Product Image */}
          <div className="lg:col-span-7 order-1 group">
            <div className="relative w-full overflow-hidden rounded-[3rem] shadow-elegant group-hover:shadow-hover transition-all duration-700 bg-white p-4 border border-gray-50">
              <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                <Image
                  src={image}
                  alt={title}
                  width={1000}
                  height={1250}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:col-span-5 order-2">
            <div className="space-y-10 lg:pl-4">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <span className="h-[1px] w-12 bg-accent-blush"></span>
                  <span className="text-accent-blush text-xs font-bold uppercase tracking-[0.3em]">Must Have Item</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-text leading-[1.1] tracking-tight group-hover:text-accent-blush transition-colors duration-300">
                  {title}
                </h2>

                <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-light italic">
                  "{description}"
                </p>
              </div>

              <div className="space-y-5 pt-4">
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group/btn flex items-center justify-center gap-3 w-full bg-stone-text hover:bg-accent-blush text-black px-10 h-20 rounded-2xl text-lg font-bold uppercase tracking-widest transition-all duration-300 shadow-elegant hover:shadow-hover hover:scale-[1.02] active:scale-[0.98]"
                >
                  Shop the Find
                  <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Link>
                
                <Link
                  href={`/product/${slug}`}
                  className="flex items-center justify-center gap-3 w-full border border-accent-blush/20 text-stone-text hover:bg-white px-10 h-20 rounded-2xl transition-all duration-300 text-xs font-bold uppercase tracking-[0.2em] hover:border-accent-blush"
                >
                  View Collection Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FullPageProductCard;