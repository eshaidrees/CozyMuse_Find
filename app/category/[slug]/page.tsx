import { products } from '@/data/products';
import FullPageProductCard from '@/components/FullPageProductCard';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Define category names mapping
const validCategories = [
  'daily-outfits',
  'cozy-fashion',
  'cute-accessories',
  'home-decor',
  'home-essentials'
];

const categoryNames: Record<string, string> = {
  'daily-outfits': 'Daily Outfits',
  'cozy-fashion': 'Cozy Fashion',
  'cute-accessories': 'Cute Accessories',
  'home-decor': 'Home Decor',
  'home-essentials': 'Home Essentials',
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  // Validate the slug
  if (!validCategories.includes(slug)) {
    notFound();
  }

  // Filter products based on the category slug
  const filteredProducts = products.filter(product => product.category === slug);

  // Get the display name for the category
  const categoryName = categoryNames[slug];

  if (filteredProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center">
        <div className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{categoryName}</h1>
          <h2 className="text-xl text-gray-600">No products found in this category</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <h1 className="sr-only">{categoryName}</h1>

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
    </div>
  );
};

export default CategoryPage;