export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FCFAFA] py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-accent-blush text-sm font-bold uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-accent-blush/5 border border-accent-blush/10 inline-block mb-6">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-text mb-8 tracking-tight">About Found & <span className="text-accent-blush italic">Favoured</span> 🤍</h1>
          <div className="w-24 h-1 bg-accent-blush/30 mx-auto"></div>
        </div>

        <div className="bg-white rounded-[3rem] shadow-elegant border border-gray-50 p-10 md:p-20 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blush/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-text mb-8 italic">Our Vision</h2>
            <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed italic">
              "Welcome to Found & Favoured, your curated destination for Pinterest-worthy fashion and effortless style. 
              We believe that every woman deserves to feel confident and beautiful in what she wears, without the 
              stress of endless searching."
            </p>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              We carefully select each outfit based on current trends, quality reviews, and wearable aesthetic, 
              focusing on pieces that transition seamlessly from your morning coffee to your evening plans. 
              Whether you&apos;re looking for the perfect workwear blazer or a cozy matching set for your weekend 
              adventures, we&apos;ve got you covered.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-[2.5rem] shadow-soft border border-gray-50 p-10 hover:shadow-elegant transition-all duration-500 group">
            <h3 className="font-serif font-bold text-stone-text mb-4 text-2xl group-hover:text-accent-blush transition-colors">Curated Trends</h3>
            <p className="text-gray-500 font-light text-base leading-relaxed italic">
              Every item on our site is handpicked to match the latest viral trends while maintaining a timeless 
              and approachable appeal.
            </p>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-soft border border-gray-50 p-10 hover:shadow-elegant transition-all duration-500 group">
            <h3 className="font-serif font-bold text-stone-text mb-4 text-2xl group-hover:text-accent-blush transition-colors">Quality First</h3>
            <p className="text-gray-500 font-light text-base leading-relaxed italic">
              We sift through thousands of reviews to ensure that the products we recommend meet our high standards 
              for fabric, fit, and durability.
            </p>
          </div>
        </div>

        <div className="bg-stone-text text-white rounded-[3rem] p-10 md:p-20 shadow-hover relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blush/10 rounded-full -ml-32 -mb-32 blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl text-black font-serif font-bold mb-8">Our Commitment</h2>
            <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed max-w-3xl">
              Transparency is at the heart of what we do. As an Amazon Affiliate, we earn commissions from 
              qualifying purchases, which allows us to keep this platform running and free for you to explore. 
              However, our recommendations are always driven by style and quality first—we only promote items 
              we genuinely love and would wear ourselves.
            </p>
            <p className="text-black font-serif italic text-xl">
              Thank you for being part of our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}