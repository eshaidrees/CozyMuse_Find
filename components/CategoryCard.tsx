"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  onClick?: () => void;
  delay?: number;
}

const CategoryCard = ({ title, image, onClick, delay = 0 }: CategoryCardProps) => {
  // Convert title to slug format
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/category/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      >
        {/* <div className="w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div> */}
        <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => console.error(`Failed to load image: ${image}`)}
            onLoad={(e) => console.log(`Successfully loaded image: ${image}`)}
          />
        </div>
        <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
          <h3 className="text-white font-semibold text-lg drop-shadow-lg">{title}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;