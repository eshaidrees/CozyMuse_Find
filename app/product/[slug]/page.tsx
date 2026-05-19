import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

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
    title: `${product.title} - Found & Favoured`,
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
    <div className="min-h-screen bg-[#FCFAFA]">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-gray-400 uppercase tracking-widest flex justify-center">
          <Link href="/" className="hover:text-accent-blush transition-colors">Home</Link>
          <span className="mx-3">/</span>
          <Link href="/shop" className="hover:text-accent-blush transition-colors">Shop</Link>
          <span className="mx-3">/</span>
          <Link href={`/category/${product.category}`} className="hover:text-accent-blush transition-colors">
            {product.category.replace('-', ' ')}
          </Link>
          <span className="mx-3">/</span>
          <span className="text-stone-text font-semibold">{product.title}</span>
        </nav>

        <div className="bg-white rounded-[2rem] shadow-sm border border-soft-pink/30 overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16">
            {/* Full-width/height image section */}
            <div className="rounded-[1.5rem] overflow-hidden bg-white flex items-center justify-center p-8 border border-soft-pink/10">
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Product details section */}
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-stone-text mb-6 leading-tight">
                  {product.title}
                </h1>

                <div className="flex items-center mb-8">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < fullStars
                            ? 'text-accent-blush fill-accent-blush'
                            : hasHalfStar && i === fullStars
                              ? 'text-accent-blush fill-accent-blush'
                              : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-400 font-medium uppercase tracking-wider">{product.rating.toFixed(1)} Rating</span>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light italic">
                  {product.description}
                </p>

                <div className="mb-10">
                  <Button
                    asChild
                    size="lg"
                    className="w-full py-8 text-lg font-bold bg-accent-blush hover:opacity-90 transition-all rounded-full shadow-lg h-16"
                  >
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      Shop the Find
                    </a>
                  </Button>
                </div>
              </div>

              <div className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
                <p>As an Amazon Associate, we earn from qualifying purchases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
