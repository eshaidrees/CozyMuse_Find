import { fullLooks } from "@/data/products";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import CategoryHero from "@/components/CategoryHero";

export const metadata: Metadata = {
  title: "Full Look - Complete Outfits | Found & Favoured",
  description:
    "Browse our curated complete outfits with clothing, shoes, bags, and accessories. Shop the full look on Amazon.",
};

export default function FullLookCategoryPage() {
  return (
    <div className="min-h-screen bg-[#FCFAFA]">
      <CategoryHero 
        title="Complete Looks" 
        description="Every item you need for a perfectly curated aesthetic, handpicked for style and quality." 
      />

      {/* Full Looks Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {fullLooks.map((fullLook) => (
            <Link
              key={fullLook.id}
              href={`/full-look/${fullLook.slug}`}
              className="group relative overflow-hidden rounded-[3rem] bg-white shadow-soft hover:shadow-elegant transition-all duration-700 border border-gray-50"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-white p-6">
                <div
                  className="w-full h-full rounded-[2.5rem] bg-contain bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-1000"
                  style={{ backgroundImage: `url(${fullLook.coverImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-text/80 via-stone-text/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                  <span className="text-accent-blush text-[10px] font-bold uppercase tracking-[0.4em] mb-4">The Complete Edit</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
                    {fullLook.title}
                  </h2>
                  <div className="flex items-center gap-3 text-white/90 text-xs font-bold uppercase tracking-widest">
                    <span className="border-b border-white/30 pb-1">Shop the Full Look</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Info section for mobile/base */}
              <div className="p-10 group-hover:bg-[#FCFAFA] transition-colors duration-700">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-text mb-4">
                  {fullLook.title}
                </h2>
                <p className="text-gray-500 text-base line-clamp-2 mb-8 font-light italic leading-relaxed">
                  "{fullLook.description}"
                </p>
                <div className="flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold border-t border-gray-100 pt-6">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blush"></span>
                    {fullLook.items.length} Curated Pieces
                  </span>
                  <span className="text-accent-blush group-hover:translate-x-2 transition-transform duration-300">View Look →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {fullLooks.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[3rem] shadow-elegant border border-gray-100 max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-stone-text mb-6">
              Style in Progress
            </h2>
            <p className="text-gray-400 font-light italic text-xl">
              Our stylists are currently curating more complete looks for you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
