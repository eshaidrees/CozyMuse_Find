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
  price: string;
  image: string;
  description: string;
  rating: number;
  link: string;
  delay?: number;
}

const ProductCard = ({
  id,
  title,
  price,
  image,
  description,
  rating,
  link,
  delay = 0,
}: ProductCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="rounded-xl w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-gray-800 line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3 flex-grow">{description}</p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-semibold text-gray-900">{price}</span>
          <div className="flex flex-col gap-2">
           {link && (
            <Link
           href={link}
           target="_blank"
           rel="noopener noreferrer sponsored"
          className="flex bg-black text-white px-5 py-2 gap-2 rounded text-center"
             >
            See on Amazon

              <ExternalLink className="w-3 h-6" />
            </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;