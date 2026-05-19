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
    color: "bg-rose-50 text-rose-700",
  },
  pants: {
    label: "Pants",
    icon: Armchair,
    color: "bg-stone-100 text-stone-700",
  },
  coat: {
    label: "Coat",
    icon: Cloud,
    color: "bg-slate-100 text-slate-700",
  },
  shoes: {
    label: "Shoes",
    icon: Footprints,
    color: "bg-accent-blush/20 text-stone-700",
  },
  bag: {
    label: "Bag",
    icon: ShoppingBag,
    color: "bg-pink-50 text-pink-700",
  },
  accessories: {
    label: "Accessories",
    icon: Gem,
    color: "bg-warm-beige/50 text-stone-700",
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
      className="group relative overflow-hidden rounded-3xl bg-white shadow-elegant hover:shadow-hover transition-all duration-500 border border-gray-50 flex flex-col h-full"
    >
      {/* Item Type Badge */}
      <div className={`absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold backdrop-blur-md shadow-soft ${config.color.split(' ')[0]}/80 ${config.color.split(' ')[1]}`}>
        <Icon className="w-3.5 h-3.5" />
        {config.label}
      </div>

      {/* Product Image */}
      <div className="relative w-full overflow-hidden aspect-square p-8">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 p-8"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif font-bold text-stone-text line-clamp-2 mb-3 min-h-[3rem] text-lg group-hover:text-accent-blush transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 mb-6 line-clamp-2 font-light italic flex-grow">
          "{item.description}"
        </p>

        {/* CTA Button */}
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="w-full flex items-center justify-center gap-2 bg-stone-text hover:bg-accent-blush text-white px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-soft"
        >
          Shop the Find
          <ExternalLink className="w-3.5 h-3.5" />
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
    <div className="min-h-screen bg-[#FCFAFA]">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-white">
        <Image
          src={fullLook.coverImage}
          alt={fullLook.title}
          fill
          className="object-contain p-12 md:p-24"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAFA] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6"
            >
              <span className="text-accent-blush text-sm font-bold uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-accent-blush/5 border border-accent-blush/10">The Look</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-serif font-bold text-stone-text mb-6 tracking-tight"
            >
              {fullLook.title}
            </motion.h1>
            <div className="w-24 h-1 bg-accent-blush/30 mx-auto mb-8"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-500 text-xl md:text-2xl max-w-2xl mx-auto font-light italic leading-relaxed"
            >
              {fullLook.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {typeOrder.map((type, index) => {
            const item = itemsByType[type];
            if (!item) return null;
            return <OutfitItemCard key={item.id} item={item} delay={0.1 + index * 0.1} />;
          })}
        </div>
      </div>
    </div>
  );
}
