"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CategoryCardProps {
  title: string;
  image: string;
  delay?: number;
}

const CategoryCard = ({ title, image, delay = 0 }: CategoryCardProps) => {
  // Convert title to slug format
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/category/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-50"
      >
        <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <span className="text-accent-blush text-[10px] font-bold uppercase tracking-[0.3em] mb-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Explore Collection</span>
            <h3 className="text-white font-serif font-bold text-2xl tracking-tight drop-shadow-sm group-hover:text-accent-blush transition-colors duration-300">{title}</h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;