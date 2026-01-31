import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About CozyMuse Finds</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Welcome to CozyMuse Finds, your curated destination for cute fashion and aesthetic home products.
            We believe that life is better when surrounded by beautiful, cozy, and stylish items that bring joy
            to your everyday moments.
          </p>
          <p className="text-gray-600 mb-4">
            We carefully select each product based on quality, style, and value, focusing on items that
            make you feel comfortable and confident. Whether you're looking for the perfect outfit for a cozy
            day in or a beautiful piece to enhance your living space, we've got you covered.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Curated Selection</h3>
              <p className="text-gray-600">
                Every product on our site has been personally reviewed and selected for its quality and aesthetic appeal.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Trusted Partnerships</h3>
              <p className="text-gray-600">
                We partner with reputable sellers and brands to ensure authentic products and reliable service.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Trend Awareness</h3>
              <p className="text-gray-600">
                Stay up-to-date with the latest trends in fashion and home decor through our carefully curated collections.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Value Focused</h3>
              <p className="text-gray-600">
                We find the best deals and affordable options without compromising on style or quality.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-4">
            At CozyMuse Finds, transparency and customer satisfaction are our top priorities. As an Amazon
            Affiliate, we earn commissions from qualifying purchases, but this never influences our product
            recommendations. We only promote items we genuinely believe in and would use ourselves.
          </p>
          <p className="text-gray-600">
            Thank you for trusting us with your shopping needs. We hope you find everything you're looking for
            and discover new favorites along the way!
          </p>
        </div>

      </div>
    </div>
  );
}