import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.title} - CozyMuse Finds`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Generate star ratings
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 > 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-amber-600 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link href={`/category/${product.category}`} className="hover:text-amber-600 transition-colors capitalize">
            {product.category.replace('-', ' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.title}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
            {/* Full-width/height image section */}
            <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center aspect-square md:aspect-auto md:h-[500px]">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Product details section */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>

                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < fullStars
                            ? 'text-amber-500 fill-amber-500'
                            : hasHalfStar && i === fullStars
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
                </div>

                <p className="text-2xl font-semibold text-amber-600 mb-6">
                  {product.price}
                </p>

                <p className="text-gray-700 text-base leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full py-6 text-lg font-semibold bg-amber-600 hover:bg-amber-700 transition-colors"
                >
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    See on Amazon
                  </a>
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <p>As an Amazon Associate, we earn from qualifying purchases.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}