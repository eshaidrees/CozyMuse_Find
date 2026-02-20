"use client";

import React from "react";
import { ExternalLink, Shirt, Footprints, ShoppingBag, Gem, Armchair, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface OutfitItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    description: string;
    rating: number;
    link: string;
    itemType: "clothing" | "pants" | "coat" | "shoes" | "bag" | "accessories";
  };
  delay: number;
}

const itemTypeConfig = {
  clothing: {
    label: "Clothing",
    icon: Shirt,
    color: "bg-rose-100 text-rose-600",
  },
  pants: {
    label: "Pants",
    icon: Armchair,
    color: "bg-purple-100 text-purple-600",
  },
  coat: {
    label: "Coat",
    icon: Cloud,
    color: "bg-indigo-100 text-indigo-600",
  },
  shoes: {
    label: "Shoes",
    icon: Footprints,
    color: "bg-blue-100 text-blue-600",
  },
  bag: {
    label: "Bag",
    icon: ShoppingBag,
    color: "bg-emerald-100 text-emerald-600",
  },
  accessories: {
    label: "Accessories",
    icon: Gem,
    color: "bg-amber-100 text-amber-600",
  },
};

const OutfitItemCard = ({ item, delay }: OutfitItemProps) => {
  const config = itemTypeConfig[item.itemType];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Item Type Badge */}
      <div className={`absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${config.color}`}>
        <Icon className="w-3.5 h-3.5" />
        {config.label}
      </div>

      {/* Product Image */}
      <div className="relative w-full overflow-hidden aspect-square">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[3rem]">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(item.rating)
                    ? "text-amber-500 fill-amber-500"
                    : "text-gray-300"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">{item.rating.toFixed(1)}</span>
        </div>

        {/* CTA Button */}
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          View on Amazon
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

interface FullLookOutfitProps {
  fullLook: {
    id: string;
    title: string;
    slug: string;
    description: string;
    coverImage: string;
    items: Array<{
      id: string;
      title: string;
      image: string;
      description: string;
      rating: number;
      link: string;
      itemType: "clothing" | "pants" | "coat" | "shoes" | "bag" | "accessories";
    }>;
  };
}

export default function FullLookOutfit({ fullLook }: FullLookOutfitProps) {
  // Group items by type for organized display
  const itemsByType = fullLook.items.reduce(
    (acc, item) => {
      acc[item.itemType] = item;
      return acc;
    },
    {} as Record<string, typeof fullLook.items[0]>
  );

  const typeOrder: Array<"clothing" | "pants" | "coat" | "shoes" | "bag" | "accessories"> = [
    "clothing",
    "pants",
    "coat",
    "shoes",
    "bag",
    "accessories",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden bg-gray-50">
        <Image
          src={fullLook.coverImage}
          alt={fullLook.title}
          fill
          className="object-contain"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-3"
            >
              {fullLook.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/90 text-base md:text-lg max-w-2xl"
            >
              {fullLook.description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-amber-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-amber-600 transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/category/full-look"
            className="hover:text-amber-600 transition-colors"
          >
            Full Look
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">{fullLook.title}</span>
        </nav>
      </div>

      {/* Full Outfit Image Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
        >
          {/* <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <Image
              src={fullLook.coverImage}
              alt={fullLook.title}
              fill
              className="object-contain bg-gray-50"
              priority
            />
          </div> */}
        </motion.div>

        {/* Complete Outfit Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Complete the Look
          </h2>
          <p className="text-gray-600">
            Every item you need for this outfit - click to shop on Amazon
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {typeOrder.map((type, index) => {
            const item = itemsByType[type];
            if (!item) return null;
            return <OutfitItemCard key={item.id} item={item} delay={0.1 + index * 0.1} />;
          })}
        </div>

        {/* Shop All Items Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-medium transition-colors"
          >
            Shop All Products
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Affiliate Disclosure */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500"
        >
          <p>
            As an Amazon Associate, we earn from qualifying purchases.
            Prices and availability are subject to change.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
