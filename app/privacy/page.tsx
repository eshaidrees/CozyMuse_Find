import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#FCFAFA] py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-accent-blush text-sm font-bold uppercase tracking-[0.4em] px-4 py-1.5 rounded-full bg-accent-blush/5 border border-accent-blush/10 inline-block mb-6">Transparency</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-text mb-8 tracking-tight">Privacy <span className="text-accent-blush italic">Policy</span> 🤍</h1>
          <div className="w-24 h-1 bg-accent-blush/30 mx-auto"></div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-elegant border border-gray-50 space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blush/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <p className="text-gray-500 font-light leading-relaxed italic text-xl text-center relative z-10">
            "At Found & Favoured, we respect your privacy and are committed to protecting your personal data. 
            This policy explains how we handle your information with care."
          </p>

          <section>
            <h2 className="text-xs font-bold text-stone-text mb-3 uppercase tracking-widest">Information We Collect</h2>
            <p className="text-gray-600 font-light leading-relaxed">
              We collect information when you subscribe to our newsletter, including your email address. 
              We do not collect any sensitive personal information or tracking data beyond what is necessary for our service.
            </p>
          </section>

          <section>
            <h2 className="text-xs font-bold text-stone-text mb-3 uppercase tracking-widest">How We Use Your Information</h2>
            <p className="text-gray-600 font-light leading-relaxed">
              We use your email address solely to send you our curated Amazon fashion finds and style inspiration. 
              We strictly do not sell, rent, or share your information with third parties.
            </p>
          </section>

          <section className="p-8 bg-soft-pink/10 rounded-3xl">
            <h2 className="text-xs font-bold text-stone-text mb-3 uppercase tracking-widest">Affiliate Disclosure</h2>
            <p className="text-gray-600 font-light leading-relaxed text-sm">
              Found & Favoured is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed
 
              to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. 
              We may earn a commission from qualifying purchases made through our links at no additional cost to you. 
              This support allows us to continue curating the best fashion for you!
            </p>
          </section>

          <section className="text-center pt-8">
            <h2 className="text-xs font-bold text-stone-text mb-3 uppercase tracking-widest">Contact Us</h2>
            <p className="text-gray-600 font-light italic">
              If you have any questions about this privacy policy, please contact us through our contact form.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;