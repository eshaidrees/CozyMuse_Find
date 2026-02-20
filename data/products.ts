import { generateSlug } from '../lib/utils';

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
  slug: string;
};

export type OutfitItem = {
  id: string;
  title: string;
  image: string;
  description: string;
  rating: number;
  link: string;
  itemType: 'clothing' | 'pants' | 'coat' | 'shoes' | 'bag' | 'accessories';
};

export type FullLook = {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  items: OutfitItem[];
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
  {
    id: "full-look",
    title: "Full Look",
    image: "/images/fl-2-outfit.jpg",
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
    category: "daily-outfits",
    slug: generateSlug("PRETTYGARDEN 2 Piece Sets for Women Summer")
  },
  {
    id: "2",
    title: "Casly Lamiit Lounge Sets for Women 2026 Spring Sweatsuit",
    image: "/images/d-99.jpg",
    description: "Stylish and comfortable for everyday wear",
    rating: 4.3,
    price: "$47.49",
    link: "https://amzn.to/45D4HHK",
    category: "daily-outfits",
    slug: generateSlug("Casly Lamiit Lounge Sets for Women 2026 Spring Sweatsuit")
  },
  {
    id: "3",
    title: "BTFBM Casual Two Piece Sets For Women Summer Outfits",
    image: "/images/d-6.jpg",
    description: "Warm and stylish for cooler days",
    rating: 4.8,
    price: "$37.99",
    link: "https://amzn.to/3M271RR",
    category: "daily-outfits",
    slug: generateSlug("BTFBM Casual Two Piece Sets For Women Summer Outfits")
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
    category: "home-decor",
    slug: generateSlug("Bamworld Plant Stand with Grow Light Plant Shelf for Mutiple Pots")
  },
  {
    id: "5",
    title: "HUONUL Makeup Mirror, Vanity Mirror with Lights, 2X/3X/10X Magnification",
    image: "/images/hd1.jpg",
    description: "Ambient lighting for cozy atmosphere",
    rating: 4.8,
    price: "$30.99",
    link: "https://amzn.to/4qM84V8",
    category: "home-decor",
    slug: generateSlug("HUONUL Makeup Mirror, Vanity Mirror with Lights, 2X/3X/10X Magnification")
  },
  {
    id: "6",
    title: "Candle Warmer Lamp with Timer Dimmable",
    image: "/images/hd2.jpg",
    description: "Beautiful prints for your space",
    rating: 4.5,
    price: "$27.99",
    link: "https://amzn.to/4a4LT6S",
    category: "home-decor",
    slug: generateSlug("Candle Warmer Lamp with Timer Dimmable")
  },
];

// All products combined - concatenate fashionProducts, homeProducts, and additional products
export const products: Product[] = [
  ...fashionProducts,
  ...homeProducts,
  // Additional products beyond the initial fashion and home collections
  {
    id: "7",
    title: "Womens Comfy Knit Lounge Set with Wide Leg Pants",
    image: "/images/daily-outfit.jpg",
    description: "Soft knit two piece set designed for comfort, movement, and effortless everyday style.",
    rating: 4.6,
    price: "$38.99",
    link: "https://amzn.to/4qEmhDR",
    category: "daily-outfits",
    slug: generateSlug("Womens Comfy Knit Lounge Set with Wide Leg Pants")
  },
  {
    id: "8",
    title: "WIHOLL Womens Casual Two Piece Matching Set",
    image: "/images/d-2.jpg",
    description: "Relaxed and breathable outfit set perfect for errands, travel, or laid back days.",
    rating: 4.3,
    price: "$26.94",
    link: "https://amzn.to/4bm9xwL",
    category: "daily-outfits",
    slug: generateSlug("WIHOLL Womens Casual Two Piece Matching Set")
  },
  {
    id: "9",
    title: "Casly Lamiit Womens Soft Lounge Sweatsuit Set",
    image: "/images/d-99.jpg",
    description: "Cozy yet stylish loungewear set that keeps you comfortable all day long.",
    rating: 4.8,
    price: "$47.49",
    link: "https://amzn.to/45D4HHK",
    category: "daily-outfits",
    slug: generateSlug("Casly Lamiit Womens Soft Lounge Sweatsuit Set")
  },
  {
    id: "10",
    title: "Fleece Lined Womens 2 Piece Lounge Outfit",
    image: "/images/d-10.jpg",
    description: "Warm fleece interior with a flattering relaxed fit for chilly days.",
    rating: 4.3,
    price: "$51.99",
    link: "https://amzn.to/4k4d1WS",
    category: "daily-outfits",
    slug: generateSlug("Fleece Lined Womens 2 Piece Lounge Outfit")
  },
  {
    id: "11",
    title: "PRETTYGARDEN Womens Matching Lounge Set",
    image: "/images/d-3.jpg",
    description: "Lightweight and cozy set that blends comfort with modern casual style.",
    rating: 4.8,
    price: "$29.99",
    link: "https://amzn.to/49ONPAo",
    category: "daily-outfits",
    slug: generateSlug("PRETTYGARDEN Womens Matching Lounge Set")
  },
  {
    id: "12",
    title: "BTFBM Womens Summer Two Piece Outfit Set",
    image: "/images/d-6.jpg",
    description: "Breathable and lightweight matching set ideal for warm weather outfits.",
    rating: 4.4,
    price: "$37.99",
    link: "https://amzn.to/3M271RR",
    category: "daily-outfits",
    slug: generateSlug("BTFBM Womens Summer Two Piece Outfit Set")
  },
  {
    id: "13",
    title: "PRETTYGARDEN Casual Summer Lounge Set",
    image: "/images/d-7.jpg",
    description: "Versatile outfit set that works for home, travel, or casual streetwear.",
    rating: 4.6,
    price: "$35.99",
    link: "https://amzn.to/4qN4Dh3",
    category: "daily-outfits",
    slug: generateSlug("PRETTYGARDEN Casual Summer Lounge Set")
  },
  {
    id: "14",
    title: "Oversized Cable Knit Sweater for Women",
    image: "/images/amazon-3.jpg",
    description: "Chunky knit oversized sweater that adds warmth and cozy texture to any outfit.",
    rating: 4.5,
    price: "$34.99",
    link: "https://amzn.to/4qzsvVk",
    category: "daily-outfits",
    slug: generateSlug("Oversized Cable Knit Sweater for Women")
  },
  {
    id: "16",
    title: "GRACE KARIN Women's Business Casual Sweater Blazer",
    image: "/images/d-8.jpg",
    description: "Blazer style sweater that delivers a polished office look with soft comfort.",
    rating: 4.2,
    price: "$29.69",
    link: "https://amzn.to/4bs2Ida",
    category: "daily-outfits",
    slug: generateSlug("GRACE KARIN Women's Business Casual Sweater Blazer")
  },
  {
    id: "17",
    title: "LILLUSORY Women's Zip Up Cardigan Sweater",
    image: "/images/d-11.jpg",
    description: "Lightweight zip cardigan perfect for layering in every season.",
    rating: 4.7,
    price: "$14.99",
    link: "https://amzn.to/4q99fx4",
    category: "daily-outfits",
    slug: generateSlug("LILLUSORY Women's Zip Up Cardigan Sweater")
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
  category: "cozy-fashion",
  slug: generateSlug("Womens Winter Knit Beanie, Scarf and Touchscreen Gloves Set")
},
{
  id: "19",
  title: "PULI Womens Soft Shawl Wrap Open Front Poncho Sweater",
  image: "/images/c-f2.jpg",
  description: "Elegant and lightweight poncho wrap perfect for layering in cool spring, fall, and winter weather.",
  rating: 4.5,
  price: "$38.99",
  link: "https://amzn.to/4rnqawM",
  category: "cozy-fashion",
  slug: generateSlug("PULI Womens Soft Shawl Wrap Open Front Poncho Sweater")
},
{
  id: "20",
  title: "BenBoy Womens Cropped Puffer Jacket Warm Quilted Coat",
  image: "/images/c-f3.jpg",
  description: "Trendy cropped puffer jacket with padded insulation to keep you warm without bulk.",
  rating: 4.4,
  price: "$32.39",
  link: "https://amzn.to/4k9QCaD",
  category: "cozy-fashion",
  slug: generateSlug("BenBoy Womens Cropped Puffer Jacket Warm Quilted Coat")
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
    category: "cute-accessories",
    slug: generateSlug("Trendy Gold Plated Knot Earrings")
  },
  {
    id: "22",
    title: "Hawaiian Flower Hair Claw Clips Set",
    image: "/images/a2.jpg",
    description: "Cute floral hair clips that add a fun and stylish touch to hairstyles.",
    rating: 4.7,
    price: "$9.96",
    link: "https://amzn.to/3ZFwNP6",
    category: "cute-accessories",
    slug: generateSlug("Hawaiian Flower Hair Claw Clips Set")
  },
  {
    id: "23",
    title: "Metal Flower Hair Claw Clips 6 Piece Set",
    image: "/images/a3.jpg",
    description: "Durable and trendy hair accessories perfect for daily styling.",
    rating: 4.0,
    price: "$15.99",
    link: "https://amzn.to/4qPw6yM",
    category: "cute-accessories",
    slug: generateSlug("Metal Flower Hair Claw Clips 6 Piece Set")
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
    category: "home-decor",
    slug: generateSlug("Lighted Vanity Makeup Mirror with Magnification")
  },
  {
    id: "25",
    title: "Dimmable Candle Warmer Lamp with Timer",
    image: "/images/hd2.jpg",
    description: "Modern candle warmer lamp that creates a cozy glow without open flames.",
    rating: 4.8,
    price: "$27.99",
    link: "https://amzn.to/4a4LT6S",
    category: "home-decor",
    slug: generateSlug("Dimmable Candle Warmer Lamp with Timer")
  },
    {
    id: "32",
    title: "JJY Framed Pink Coquette Wall Art Prints - Set of 4 Preppy Aesthetic Posters ",
    image: "/images/hd6.jpg",
    description: "A set of 4 framed pink coquette wall art prints featuring bows, cherries, and preppy designs. Perfect for girls' bedrooms, dorms, and trendy aesthetic décor.",
    rating: 4.8,
    price: "$27.99",
    link: "https://amzn.to/4r5CdPv",
    category: "home-decor",
    slug: generateSlug("JJY Framed Pink Coquette Wall Art Prints - Set of 4 Preppy Aesthetic Posters")
  },  {
    id: "26",
    title: "PESRAE Floor Lamp with Table and Charging Station - LED Side Table Lamp with Shelves",
    image: "/images/hd5.jpg",
    description: "A modern floor lamp with built-in shelves and charging station, featuring 3 light colors, USB, Type-C, and AC ports. Perfect for bedrooms and living rooms where space and convenience matter",
    rating: 4.8,
    price: "$27.99",
    link: "https://amzn.to/4kvnNG8",
    category: "home-decor",
    slug: generateSlug("PESRAE Floor Lamp with Table and Charging Station - LED Side Table Lamp with Shelves")
  },  {
    id: "27",
    title: "Umbra Exhibit Adjustable Picture Frame Gallery Set - 5-Photo Wall Display (Black)",
    image: "/images/hd4.jpg",
    description: "Create a modern gallery wall with the Umbra Exhibit Set. This adjustable display holds five photos (two 4 6 and three 5 7) on a sleek black metal beam. Easy to mount with just two screws, it blends with any décor and adds a clean, contemporary touch to bedrooms, living rooms, or offices.",
    rating: 4.8,
    price: "$27.99",
    link: "https://amzn.to/4aEenob",
    category: "home-decor",
    slug: generateSlug("Umbra Exhibit Adjustable Picture Frame Gallery Set - 5-Photo Wall Display (Black)")
  },

  // Home Essentials
  {
    id: "28",
    title: "Bamworld Multi Tier Plant Stand with Grow Light",
    image: "/images/hd3.jpg",
    description: "Stylish plant shelf with built in grow light for healthy indoor plants.",
    rating: 4.5,
    price: "$37.99",
    link: "https://amzn.to/3ObBTA4",
    category: "home-decor",
    slug: generateSlug("Bamworld Multi Tier Plant Stand with Grow Light")
  },

  {
    id: "29",
    title: "BISSELL Little Green Max Portable Carpet Cleaner",
    image: "/images/he1.jpg",
    description: "Powerful portable cleaner that removes stains from carpets and upholstery.",
    rating: 4.9,
    price: "$149.99",
    link: "https://amzn.to/46n9mOe",
    category: "home-essentials",
    slug: generateSlug("BISSELL Little Green Max Portable Carpet Cleaner")
  },
  {
    id: "30",
    title: "Titanium Non Toxic 2 in 1 Cutting Board",
    image: "/images/he2.jpg",
    description: "Durable and hygienic cutting board designed for modern kitchens.",
    rating: 4.4,
    price: "$29.95",
    link: "https://amzn.to/4bWEdor",
    category: "home-essentials",
    slug: generateSlug("Titanium Non Toxic 2 in 1 Cutting Board")
  },
  {
    id: "31",
    title: "Lifewit Collapsible Laundry Hamper 2 Pack",
    image: "/images/he3.jpg",
    description: "Large foldable laundry baskets that save space and stay lightweight.",
    rating: 4.3,
    price: "$11.99",
    link: "https://amzn.to/3Z6Gt5a",
    category: "home-essentials",
    slug: generateSlug("Lifewit Collapsible Laundry Hamper 2 Pack")
  }
]

// Full Look - Complete Outfits
export const fullLooks: FullLook[] = [
  {
    id: "fl-1",
    title: "Polished Winter Workwear Look",
    slug: "cozy-winter-essentials",
    description: "A refined cold-weather outfit featuring a structured blazer set, classic pointed heels, a spacious tote bag, and elegant gold jewelry. Perfect for office days, meetings, or stylish city outings.",
    coverImage: "/images/fl-1-outfit.jpg",
    items: [
      {
        id: "fl-1-clothing",
        title: "Womens Suits 2 Piece Set Business Casual Blazer Jacket Wide Leg Dress Pants Suits Professional Work Office Outfits",
        image: "/images/fl-1-outfit.jpg",
        description: "Business Casual Outfits For Women: Suits for women combine a loose a bit oversized blazer and high-waisted wide leg dressy pants, crafted from quality fabric with a comfortable feel and good drape. The blend of structured tailoring and comfort makes these blazer sets women 2 piece outfits ideal for business casual, formal, occasions, offering an effortlessly polished look.",
        rating: 4.6,
        link: "https://amzn.to/4tE2ard",
        itemType: "clothing",
      },
      {
        id: "fl-1-shoes",
        title: "Nine WEST Womens Wnflax",
        image: "/images/fl-1-shoes.jpg",
        description: "Pointed-toe pumps. Available in a variety of different uppers including synthetic and leather materials. Lightly cushioned man-made footbed. Wrapped stiletto heel..",
        rating: 4.5,
        link: "https://amzn.to/4kBVcPb",
        itemType: "shoes",
      },
      {
        id: "fl-1-bag",
        title: "LOVEVOOK Laptop Tote Bag for Women",
        image: "/images/fl-1-bag.jpg",
        description: "Work Bags Laptop Bag Teacher Tote Bag, Leather Computer Bag Large Purses Handbag Professional Briefcase, Black, Fits 15.6 Inch Laptop, Black.",
        rating: 4.7,
        link: "https://amzn.to/4rfePPC",
        itemType: "bag",
      },
      {
        id: "fl-1-accessories",
        title: "PAVOI 14K Gold Plated 925 Sterling Silver Post Teardrop Chunky Hoop Earrings",
        image: "/images/fl-1-acc.jpg",
        description: "Elevate your look with our hollow hoops. Measuring 22mm high and 12mm wide, these chunky, lightweight earrings ensure comfortable wear. These hoops feature 925 sterling silver posts and a long-lasting finish. They’re the perfect addition to any outfit, adding effortless luxury..",
        rating: 4.8,
        link: "https://amzn.to/4tG0rlc",
        itemType: "accessories",
      },
    ],
  },
  {
    id: "fl-2",
    title: "Elegant Event-Ready Ensemble",
    slug: "casual-chic-loungewear",
    description: "A graceful statement look with a flowing maxi dress, block heel sandals, a sleek clutch, and delicate jewelry. Ideal for weddings, parties, or special evening occasions.",
    coverImage: "/images/fl-2-outfit.jpg",
    items: [
      { 
        id: "fl-2-clothing",
        title: "Women Plus Size Maxi Dress Long Sleeve Square Neck Wedding Guest Cocktail Belted Elegant Flowy A Line Long Dresses",
        image: "/images/fl-2-outfit.jpg",
        description: "This plus size dresses for curvy women is made of skin-friendly, lightweight, and breathable material, perfect for wearing in fall, spring, winter, and summer as off shoulder dress. The elegant plus size dress drapes beautifully and flows gracefully, creating a flattering silhouette.",
        rating: 4.3,
        link: "https://amzn.to/46SYMia",
        itemType: "clothing",
      },
      {
        id: "fl-2-shoes",
        title: "Carcuume Women's Square Toe Two Strap Open Toe Block Heels Sandals Slip On Shoes",
        image: "/images/fl-2-shoes.jpg",
        description: "Women's Square Toe Two Strap Open Toe Block Heels Sandals Slip On Shoes",
        rating: 4.6,
        link: "https://amzn.to/4aFIISl",
        itemType: "shoes",
      },
      {
        id: "fl-2-bag",
        title: "Women Envelope Clutch Faux Saffiano Leather Evening Handbag Foldover Clutch Bag Formal Dressy Purse",
        image: "/images/fl-2-bag.jpg",
        description: "Dressy Purse --- It was made from Fined Faux Saffiano leather. Gold-finish hardware and lined in twilling fabric with 2 compartments and 2 zipper pockets.",
        rating: 4.4,
        link: "https://amzn.to/4aSbtMK",
        itemType: "bag",
      },
      {
        id: "fl-2-accessories",
        title: "https://amzn.to/4aFIISl",
        image: "/images/fl-2-acc.jpg",
        description: "Women Cubic Zirconia White Gold Butterfly Necklace Ring Bangle Bracelet Birthday Anniversary Valentines Mother's Day Jewelry Gifts for Mom Bridesmaid Wife Sister Friend.",
        rating: 4.7,
        link: "https://amzn.to/46wdNqn",
        itemType: "accessories",
      },
    ],
  },
  {
    id: "fl-3",
    title: "Modern Smart Casual Outfit",
    slug: "elevated-everyday-style",
    description: "A balanced everyday look combining a tailored jumpsuit, comfortable strappy sandals, a chic shoulder bag, and soft gold accessories. Effortless style for brunch, work, or casual events.",
    coverImage: "/images/fl-3-outfit.jpg",
    items: [
      {
        id: "fl-3-clothing",
        title: "Women's One Piece Jumpsuits Dressy Casual Summer Short Sleeve ",
        image: "/images/fl-3-outfit.jpg",
        description: "Short Sleeve Jumpsuit; Wrap V Neck Rompers; Belt Jumpsuits; Pants Romper; One Piece Outfits; Wide Leg Jumpsuits; Summer One Piece Outfits For Women; Casual Romper With Pockets; Elegant Party Jumpsuit; Dressy Jumpsuit Rompers",
        rating: 4.2,
        link: "https://amzn.to/3MbK7b6",
        itemType: "clothing",
      },
      {
        id: "fl-3-shoes",
        title: "Black Nude White Gold Women Sandals Comfortable Walking",
        image: "/images/fl-3-shoes.jpg",
        description: "Comfortable Walking Strappy Open Toe Sandals for Women Dressy Summer 1 Inch Low Block Heel Flat Adjustable Ankle Strap Shoes.",
        rating: 4.4,
        link: "https://amzn.to/4aQW4MC",
        itemType: "shoes",
      },
      {
        id: "fl-3-bag",
        title: "Shoulder Bag for Women Cute Hobo Purses and Handbags",
        image: "/images/fl-3-bag.jpg",
        description: "his cute purse includes 3 card slot pockets, 1 zipper pouch and main pocket inside, making it spacious enough to organize your essentials.",
        rating: 4.6,
        link: "https://amzn.to/4cvZFRp",
        itemType: "bag",
      },
      {
        id: "fl-3-accessories",
        title: "Gold Jewelry Set for Women - 16K Gold Plated Pearl Necklace and Earring Set ",
        image: "/images/fl-3-acc.jpg",
        description: "Women - 16K Gold Plated Pearl Necklace and Earring Set With Drop Earrings,Charm Layered Necklace,Adjustable Bracelets - Dainty Women's Pearl Jewelry Set For Wedding Gifts.",
        rating: 4.6,
        link: "https://amzn.to/4rsnFd8",
        itemType: "accessories",
      },
    ],
  },
  {
    id: "fl-4",
    title: "Chic Winter Layered Look",
    slug: "chic-winter-layered-look",
    description: "A sophisticated cold-weather ensemble featuring a turtleneck sweater, high-waisted wide-leg pants, a tailored wool coat, ankle boots, and a structured crossbody bag. Perfect for office commutes or winter city outings.",
    coverImage: "/images/f-4-coat.jpg",
    items: [
      {
        id: "fl-4-clothing",
        title: "Womens Ribbed Long Sleeve Crewneck Casual Slim Basic Shirts Fitted Knit Tops",
        image: "/images/f-4-shirt.jpg",
        description: "Material:High quality knit soft stretchy Rayon spandex fabric,flexible and breathable,comfortable to wear.Features:Long Sleeve Tops,Crewneck, Solid Color,Slim, Ribbed Knit Fit,Super Soft, Cute Full Length Style,Casual Basic Shirt Top.Simple and unique style make you beautiful and comfortable.",
        rating: 4.5,
        link: "https://amzn.to/4kMYC1P",
        itemType: "clothing",
      },
      {
        id: "fl-4-pants",
        title: "Women's Wide Leg Jeans High Waisted Stretchy Raw Hem Zimbaplatinum Denim Pants",
        image: "/images/f-4-pants.jpg",
        description: "Trendy Zimbaplatinum jean features wide leg, high waisted, raw hem, side seam, loose fit, zipper and basic five pockets design. The raw hem detailing add a touch of rugged charm to your outfit. These jeans have a baggy design. For the best fit, please check the size chart before purchasing",
        rating: 4.4,
        link: "https://amzn.to/4rEpGmg",
        itemType: "pants",
      },
      {
        id: "fl-4-coat",
        title: "Women Winter Wool Blend Camel Mid-Long Coat Notch Double-Breasted Lapel Jacket Outwear",
        image: "/images/f-4-coat.jpg",
        description: "Button closureMaterial: high-quality polyester+wool fabric, breathable, comfortable and warm to wear Women mid-long coats, solid color, long sleeves, front button closure, double-breasted, notched lapel, 2 handbags on the side, 2 decorative buttons on the back.",
        rating: 4.7,
        link: "https://amzn.to/4aFWRPg",
        itemType: "coat",
      },
      {
        id: "fl-4-shoes",
        title: "Women's Ankle Boots Pointed Toe Chunky Block Heel Short Boots for Women Low Heeled Booties",
        image: "/images/f-4-boots.jpg",
        description: "Wide Fit Assurance: Our women's ankle boots are a perfect match for your fashion needs. For those with wider feet, simply opt for a half size up to ensure a comfortable fit.",
        rating: 4.6,
        link: "https://amzn.to/4aubBC5",
        itemType: "shoes",
      },
      {
        id: "fl-4-bag",
        title: "Small Real Lambskin Leather Crossbody Bag for Women, Wavy Quilted Shoulder Purse, Double Chain Strap, Flap Handbag",
        image: "/images/f-4-bag.jpg",
        description: "Premium Material : These women's crossbody handbags are crafted from high-quality lambskin leather, boasting a soft, luxurious texture and a durable finish.Distinctive Wave Pattern : The quilted purse features elegant wave stitching, delivering a sophisticated and timeless appearance.",
        rating: 4.5,
        link: "https://amzn.to/4qLrwk0",
        itemType: "bag",
      },
      {
        id: "fl-4-accessories",
        title: "Layered Gold Necklaces for Women Trendy, 3 Pcs 14K Gold Plated Choker Paperclip Box Chain Necklace,",
        image: "/images/f-4-necklace.jpg",
        description: "Layered Necklace Set: This layered necklace consists of a paperclip chain, a box chain, and a pendant lip chain. As a stacked necklace, it is both elegant and cute. The layered necklace can be freely matched with your style, and you can wear it together or individually.",
        rating: 4.8,
        link: "https://amzn.to/46kY8db",
        itemType: "accessories",
      },
    ],
  },
];
