import React from 'react';
import { products, categories } from '@/data/products';
import FullPageProductCard from '@/components/FullPageProductCard';
import { notFound } from 'next/navigation';
import CategoryHero from '@/components/CategoryHero';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  // Find the category object to validate and get details
  const currentCategory = categories.find(c => c.id === slug);

  if (!currentCategory) {
    notFound();
  }

  // Filter products based on the category slug
  const filteredProducts = products.filter(product => product.category === slug);

  return (
    <div className="min-h-screen bg-[#FCFAFA]">
      <CategoryHero 
        title={currentCategory.title} 
        description={currentCategory.description} 
      />

      <div className="container mx-auto px-4 pb-24">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-elegant border border-gray-100">
            <h2 className="text-2xl text-gray-400 font-serif italic">More curated finds coming soon to this collection...</h2>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto space-y-0">
            {filteredProducts.map((product, index) => (
              <FullPageProductCard
                key={product.id}
                id={product.id || ''}
                title={product.title}
                image={product.image}
                description={product.description}
                rating={product.rating}
                link={product.link}
                slug={product.slug}
                index={index}
                totalProducts={filteredProducts.length}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
