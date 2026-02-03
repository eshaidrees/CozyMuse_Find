export type Product = {
  id?: string;
  title: string;
  brand?: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  link: string;
  category: string;
};

// Category definitions
export const categories = [
  {
    id: "daily-outfits",
    title: "Daily Outfits",
    image: "/images/amazon-3.jpg",
  },
  {
    id: "cozy-fashion",
    title: "Cozy Fashion",
    image: "/images/c-f1.jpg",
  },
  {
    id: "cute-accessories",
    title: "Cute Accessories",
    image: "/images/a3.jpg",
  },
  {
    id: "home-decor",
    title: "Home Decor",
    image: "/images/hd3.jpg",
  },
  {
    id: "home-essentials",
    title: "Home Essentials",
    image: "/images/he2.jpg",
  },
];


// Fashion products
export const fashionProducts = [
  {
    id: "1",
    title: "PRETTYGARDEN 2 Piece Sets for Women Summer",
    image: "/images/d-7.jpg",
    description: "Perfect comfy daily outfit",
    rating: 4.6,
    price: "$35.99",
    link: "https://amzn.to/4qN4Dh3",
    category: "daily-outfits"
  },
  {
    id: "2",
    title: "Casly Lamiit Lounge Sets for Women 2026 Spring Sweatsuit",
    image: "/images/d-99.jpg",
    description: "Stylish and comfortable for everyday wear",
    rating: 4.3,
    price: "$47.49",
    link: "https://amzn.to/45D4HHK",
    category: "daily-outfits"
  },
  {
    id: "3",
    title: "BTFBM Casual Two Piece Sets For Women Summer Outfits",
    image: "/images/d-6.jpg",
    description: "Warm and stylish for cooler days",
    rating: 4.8,
    price: "$37.99",
    link: "https://amzn.to/3M271RR",
    category: "daily-outfits"
  },
];

// Home products
export const homeProducts = [
  {
    id: "4",
    title: "Bamworld Plant Stand with Grow Light Plant Shelf for Mutiple Pots",
    image: "/images/hd3.jpg",
    description: "Soft and stylish home accent",
    rating: 4.6,
    price: "$37.99",
    link: "https://amzn.to/3ObBTA4",
    category: "home-decor"
  },
  {
    id: "5",
    title: "HUONUL Makeup Mirror, Vanity Mirror with Lights, 2X/3X/10X Magnification",
    image: "/images/hd1.jpg",
    description: "Ambient lighting for cozy atmosphere",
    rating: 4.8,
    price: "$30.99",
    link: "https://amzn.to/4qM84V8",
    category: "home-decor"
  },
  {
    id: "6",
    title: "Candle Warmer Lamp with Timer Dimmable",
    image: "/images/hd2.jpg",
    description: "Beautiful prints for your space",
    rating: 4.5,
    price: "$27.99",
    link: "https://amzn.to/4k9PYdh",
    category: "home-decor"
  },
];

// All products combined
export const products: Product[] = [
  // Daily Outfits - 10+ products
   {
    id: "7",
    title: "Womens Comfy Knit Lounge Set with Wide Leg Pants",
    image: "/images/daily-outfit.jpg",
    description: "Soft knit two piece set designed for comfort, movement, and effortless everyday style.",
    rating: 4.6,
    price: "$38.99",
    link: "https://amzn.to/4qEmhDR",
    category: "daily-outfits"
  },
  {
    id: "8",
    title: "WIHOLL Womens Casual Two Piece Matching Set",
    image: "/images/d-2.jpg",
    description: "Relaxed and breathable outfit set perfect for errands, travel, or laid back days.",
    rating: 4.3,
    price: "$26.94",
    link: "https://amzn.to/4bm9xwL",
    category: "daily-outfits"
  },
  {
    id: "9",
    title: "Casly Lamiit Womens Soft Lounge Sweatsuit Set",
    image: "/images/d-99.jpg",
    description: "Cozy yet stylish loungewear set that keeps you comfortable all day long.",
    rating: 4.8,
    price: "$47.49",
    link: "https://amzn.to/45D4HHK",
    category: "daily-outfits"
  },
  {
    id: "10",
    title: "Fleece Lined Womens 2 Piece Lounge Outfit",
    image: "/images/d-10.jpg",
    description: "Warm fleece interior with a flattering relaxed fit for chilly days.",
    rating: 4.3,
    price: "$51.99",
    link: "https://amzn.to/4k4d1WS",
    category: "daily-outfits"
  },
  {
    id: "11",
    title: "PRETTYGARDEN Womens Matching Lounge Set",
    image: "/images/d-3.jpg",
    description: "Lightweight and cozy set that blends comfort with modern casual style.",
    rating: 4.8,
    price: "$29.99",
    link: "https://amzn.to/49ONPAo",
    category: "daily-outfits"
  },
  {
    id: "12",
    title: "BTFBM Womens Summer Two Piece Outfit Set",
    image: "/images/d-6.jpg",
    description: "Breathable and lightweight matching set ideal for warm weather outfits.",
    rating: 4.4,
    price: "$37.99",
    link: "https://amzn.to/3M271RR",
    category: "daily-outfits"
  },
  {
    id: "13",
    title: "PRETTYGARDEN Casual Summer Lounge Set",
    image: "/images/d-7.jpg",
    description: "Versatile outfit set that works for home, travel, or casual streetwear.",
    rating: 4.6,
    price: "$35.99",
    link: "https://amzn.to/4qN4Dh3",
    category: "daily-outfits"
  },
  {
    id: "14",
    title: "Oversized Cable Knit Sweater for Women",
    image: "/images/amazon-3.jpg",
    description: "Chunky knit oversized sweater that adds warmth and cozy texture to any outfit.",
    rating: 4.5,
    price: "$34.99",
    link: "https://amzn.to/4qzsvVk",
    category: "daily-outfits"
  },
  {
    id: "16",
    title: "GRACE KARIN Women’s Business Casual Sweater Blazer",
    image: "/images/d-8.jpg",
    description: "Blazer style sweater that delivers a polished office look with soft comfort.",
    rating: 4.2,
    price: "$29.69",
    link: "https://amzn.to/4bs2Ida",
    category: "daily-outfits"
  },
  {
    id: "17",
    title: "LILLUSORY Women’s Zip Up Cardigan Sweater",
    image: "/images/d-11.jpg",
    description: "Lightweight zip cardigan perfect for layering in every season.",
    rating: 4.7,
    price: "$14.99",
    link: "https://amzn.to/4q99fx4",
    category: "daily-outfits"
  },

  // Cozy Fashion - 3+ products
  {
  id: "18",
  title: "Womens Winter Knit Beanie, Scarf and Touchscreen Gloves Set",
  image: "/images/c-f1.jpg",
  description: "Cozy three piece winter set with fleece lining that keeps you warm while staying stylish outdoors.",
  rating: 4.9,
  price: "$18.99",
  link: "https://amzn.to/49MYUSs",
  category: "cozy-fashion"
},
{
  id: "19",
  title: "PULI Womens Soft Shawl Wrap Open Front Poncho Sweater",
  image: "/images/c-f2.jpg",
  description: "Elegant and lightweight poncho wrap perfect for layering in cool spring, fall, and winter weather.",
  rating: 4.5,
  price: "$38.99",
  link: "https://amzn.to/4rnqawM",
  category: "cozy-fashion"
},
{
  id: "20",
  title: "BenBoy Womens Cropped Puffer Jacket Warm Quilted Coat",
  image: "/images/c-f3.jpg",
  description: "Trendy cropped puffer jacket with padded insulation to keep you warm without bulk.",
  rating: 4.4,
  price: "$32.39",
  link: "https://amzn.to/4k9QCaD",
  category: "cozy-fashion"
},


  // Cute Accessories - 3+ products
 {
    id: "21",
    title: "Trendy Gold Plated Knot Earrings",
    image: "/images/a1.jpg",
    description: "Minimal yet elegant earrings that elevate everyday outfits instantly.",
    rating: 4.6,
    price: "$9.99",
    link: "https://amzn.to/4rjjWxI",
    category: "cute-accessories"
  },
  {
    id: "22",
    title: "Hawaiian Flower Hair Claw Clips Set",
    image: "/images/a2.jpg",
    description: "Cute floral hair clips that add a fun and stylish touch to hairstyles.",
    rating: 4.7,
    price: "$9.96",
    link: "https://amzn.to/3ZFwNP6",
    category: "cute-accessories"
  },
  {
    id: "23",
    title: "Metal Flower Hair Claw Clips 6 Piece Set",
    image: "/images/a3.jpg",
    description: "Durable and trendy hair accessories perfect for daily styling.",
    rating: 4.0,
    price: "$15.99",
    link: "https://amzn.to/4qPw6yM",
    category: "cute-accessories"
  },

  // Home Decor
  {
    id: "24",
    title: "Lighted Vanity Makeup Mirror with Magnification",
    image: "/images/hd1.jpg",
    description: "Bright LED mirror with multiple magnification modes for precise makeup.",
    rating: 4.6,
    price: "$30.99",
    link: "https://amzn.to/4qM84V8",
    category: "home-decor"
  },
  {
    id: "25",
    title: "Dimmable Candle Warmer Lamp with Timer",
    image: "/images/hd2.jpg",
    description: "Modern candle warmer lamp that creates a cozy glow without open flames.",
    rating: 4.8,
    price: "$27.99",
    link: "https://amzn.to/4k9PYdh",
    category: "home-decor"
  },

  // Home Essentials
  {
    id: "26",
    title: "Bamworld Multi Tier Plant Stand with Grow Light",
    image: "/images/hd3.jpg",
    description: "Stylish plant shelf with built in grow light for healthy indoor plants.",
    rating: 4.5,
    price: "$37.99",
    link: "https://amzn.to/3ObBTA4",
    category: "home-decor"
  },

  {
    id: "27",
    title: "BISSELL Little Green Max Portable Carpet Cleaner",
    image: "/images/he1.jpg",
    description: "Powerful portable cleaner that removes stains from carpets and upholstery.",
    rating: 4.9,
    price: "$149.99",
    link: "https://amzn.to/46n9mOe",
    category: "home-essentials"
  },
  {
    id: "28",
    title: "Titanium Non Toxic 2 in 1 Cutting Board",
    image: "/images/he2.jpg",
    description: "Durable and hygienic cutting board designed for modern kitchens.",
    rating: 4.4,
    price: "$29.95",
    link: "https://amzn.to/4bWEdor",
    category: "home-essentials"
  },
  {
    id: "29",
    title: "Lifewit Collapsible Laundry Hamper 2 Pack",
    image: "/images/he3.jpg",
    description: "Large foldable laundry baskets that save space and stay lightweight.",
    rating: 4.3,
    price: "$11.99",
    link: "https://amzn.to/3Z6Gt5a",
    category: "home-essentials"
  }
]
