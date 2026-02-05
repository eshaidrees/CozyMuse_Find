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
  price: string;
  image: string;
  description: string;
  rating: number;
  link: string;
  slug: string;
  index: number;
  totalProducts: number;
}

const FullPageProductCard = ({
  id,
  title,
  price,
  image,
  description,
  rating,
  link,
  slug,
  index,
  totalProducts
}: FullPageProductCardProps) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="min-h-screen flex flex-col justify-center py-16 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="order-1 md:order-1">
            <div className="relative w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={image}
                alt={title}
                width={600}
                height={600}
                className="w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="order-2 md:order-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>

                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{description}</p>

                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-bold text-gray-900">{price}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/product/${slug}`}
                  className={cn(
                    buttonVariants({ variant: 'cozy-primary', size: 'lg' }),
                    'flex items-center justify-center gap-2 flex-1'
                  )}
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: totalProducts }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? 'bg-amber-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FullPageProductCard;