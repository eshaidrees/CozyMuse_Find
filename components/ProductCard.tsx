"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  brand?: string;
  image: string;
  description: string;
  rating: number;
  link: string;
  slug: string;
  delay?: number;
}

const ProductCard = ({
  id,
  title,
  image,
  description,
  rating,
  link,
  slug,
  delay = 0,
}: ProductCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-elegant hover:shadow-hover transition-all duration-500 flex flex-col h-full border border-gray-50/50 hover:border-accent-blush/20"
    >
      {/* Product Image */}
      <div className="relative w-full overflow-hidden aspect-[4/5]">
        <Image
          src={image}
          alt={title}
          width={600}
          height={750}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Pinterest Tag */}
        <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-soft text-accent-blush">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.289 2C6.617 2 2 6.617 2 12.289c0 4.305 2.774 8.012 6.746 9.525-.09-.806-.17-2.04.036-2.92.185-.794 1.197-5.07 1.197-5.07s-.306-.61-.306-1.513c0-1.42.823-2.48 1.848-2.48.87 0 1.29.654 1.29 1.44 0 .876-.558 2.184-.846 3.396-.24 1.017.51 1.845 1.512 1.845 1.815 0 3.207-1.913 3.207-4.676 0-2.444-1.756-4.153-4.266-4.153-2.91 0-4.613 2.18-4.613 4.43 0 .878.337 1.822.757 2.33.084.102.096.19.07.296l-.28 1.137c-.046.183-.15.222-.345.13-1.286-.6-2.09-2.482-2.09-3.996 0-3.254 2.364-6.24 6.812-6.24 3.578 0 6.357 2.55 6.357 5.955 0 3.555-2.242 6.416-5.353 6.416-1.045 0-2.027-.542-2.362-1.185l-.644 2.45c-.233.893-.863 2.012-1.284 2.703 1.1.34 2.274.524 3.49.524 5.671 0 10.288-4.617 10.288-10.289S17.96 2 12.289 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex-grow flex flex-col bg-white">
        <h3 className="font-serif font-bold text-xl text-stone-text line-clamp-2 mb-2 group-hover:text-accent-blush transition-colors duration-300">{title}</h3>
        <p className="text-sm text-gray-500 font-light leading-relaxed mb-6 flex-grow line-clamp-3 italic">"{description}"</p>

        <div className="flex flex-col gap-3 mt-auto">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-full bg-accent-blush hover:bg-stone-text text-white px-6 py-4 rounded-2xl text-center transition-all duration-300 text-sm font-bold shadow-soft hover:shadow-elegant group/btn"
          >
            <span className="flex items-center justify-center gap-2 uppercase tracking-widest">
              Shop the Find
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </span>
          </Link>
          <Link
            href={`/product/${slug}`}
            className="w-full flex items-center justify-center gap-2 border border-accent-blush/20 text-stone-text hover:bg-[#FCFAFA] px-6 py-4 rounded-2xl text-center transition-all duration-300 text-xs font-bold uppercase tracking-widest hover:border-accent-blush"
          >
            Must-Have Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;