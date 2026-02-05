"use client";

import ProductCard from '@/components/ProductCard';
import Footer from '@/components/footer';
import { products } from '@/data/products';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Shop All Products</h1>
        <p className="text-gray-600 mb-8">Browse our complete collection of curated products.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="h-full">
              <ProductCard
                id={product.id!}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                rating={product.rating}
                link={product.link}
                slug={product.slug}
                delay={index * 0.05}
              />
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}
