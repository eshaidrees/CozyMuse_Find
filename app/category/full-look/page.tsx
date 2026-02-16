import { fullLooks } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Full Look - Complete Outfits | CozyMuse Finds",
  description:
    "Browse our curated complete outfits with clothing, shoes, bags, and accessories. Shop the full look on Amazon.",
};

export default function FullLookCategoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Look</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Complete outfits curated just for you. Each look includes clothing, shoes,
            bags, and accessories - everything you need in one place.
          </p>
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
          <span className="text-gray-800 font-medium">Full Look</span>
        </nav>
      </div>

      {/* Full Looks Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullLooks.map((fullLook, index) => (
            <Link
              key={fullLook.id}
              href={`/full-look/${fullLook.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
                <div
                  className="absolute inset-0 bg-contain bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${fullLook.coverImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {fullLook.title}
                  </h2>
                  <p className="text-white/90 text-sm line-clamp-2 mb-4">
                    {fullLook.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <span>View Complete Outfit</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Items Preview */}
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="font-medium">
                    {fullLook.items.length} items included
                  </span>
                  <div className="flex gap-2">
                    {fullLook.items.slice(0, 4).map((item) => (
                      <div
                        key={item.id}
                        className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm"
                      >
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {fullLooks.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Full Looks Available
            </h2>
            <p className="text-gray-600">
              Check back soon for new curated outfits!
            </p>
          </div>
        )}

        {/* Back to Shop */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
