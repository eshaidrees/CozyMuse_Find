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

// Fashion categories
export const categories = [
  {
    id: "spring-dresses",
    title: "Spring Dresses 👗",
    description: "Flowy, feminine, and floral dresses that capture the essence of spring.",
    image: "/images/a2.jpg",
  },
  {
    id: "summer-outfits",
    title: "Summer Outfits ☀️",
    description: "Lightweight, breathable, and effortlessly chic styles for the sunny days ahead.",
    image: "/images/sum-1.jpg",
  },
  {
    id: "winter-outfits",
    title: "Winter Outfits ❄️",
    description: "Stay warm without sacrificing style with our curated cozy winter essentials.",
    image: "/images/c-f1.jpg",
  },
  {
    id: "spring-outfits",
    title: "Spring Outfits 🌸",
    description: "Fresh, floral, and vibrant looks to celebrate the season of renewal.",
    image: "/images/spr-2.jpg",
  },
  {
    id: "workwear",
    title: "Workwear Outfits 👩‍💼",
    description: "Professional, polished, and powerful looks for the modern workspace.",
    image: "/images/work-1.jpg",
  },
  {
    id: "casual-looks",
    title: "Casual Everyday Looks 👕",
    description: "Effortless style for your daily errands, coffee runs, and relaxed weekends.",
    image: "/images/casual-1.jpg",
  },
  {
    id: "party-dresses",
    title: "Party & Guest Dresses ✨",
    description: "Stunning silhouettes for weddings, parties, and every special occasion.",
    image: "/images/party-1.jpg",
  },
  {
    id: "two-piece-sets",
    title: "Two-Piece Sets & Co-ords 👗",
    description: "Perfectly matched sets that make getting ready the easiest part of your day.",
    image: "/images/d-99.jpg",
  },
];

// Re-categorized products
export const products: Product[] = [
  // // Spring Dresses
  // {
  //   id: "sd-1",
  //   title: "Trendy 2 Piece Maxi Set",
  //   image: "/images/spr-2.jpg",
  //   description: "A beautiful floral print dress with a flattering tie waist, perfect for spring brunches.",
  //   rating: 4.5,
  //   price: "$38.99",
  //   link: "https://amzn.to/4wCNZ79",
  //   category: "spring-dresses",
  //   slug: generateSlug("Floral Ruffle Midi Dress")
  // },
  // {
  //   id: "sd-2",
  //   title: "Boho Maxi Spring Dress",
  //   image: "/images/spr-3.jpg",
  //   description: "Elegant boho maxi dress with a square neck and tiered ruffle hem.",
  //   rating: 4.6,
  //   price: "$45.99",
  //   link: "https://amzn.to/4cNar4g",
  //   category: "spring-dresses",
  //   slug: generateSlug("Boho Maxi Spring Dress")
  // },
  // {
  //   id: "sd-3",
  //   title: "Casual Printed Jumpsuit",
  //   image: "/images/spr-1.jpg",
  //   description: "Soft pastel tones and delicate fabrics for your next garden event.",
  //   rating: 4.7,
  //   price: "$42.99",
  //   link: "https://amzn.to/3PRB9B5",
  //   category: "spring-dresses",
  //   slug: generateSlug("Pastel Garden Party Dress")
  // },

  // Summer Outfits
  {
    id: "sum-1",
    title: "Summer Boho Floral Maxi",
    image: "/images/sum-1.jpg",
    description: "✨ Turn heads this summer with this elegant strapless boho floral maxi dress by Simplee 💐 This summer maxi dress 2026 is perfect for vacation outfits women, beach dress women, and stylish wedding guest dress looks",
    rating: 4.8,
    price: "$34.99",
    link: "https://amzn.to/43jqtyy",
    category: "summer-outfits",
    slug: generateSlug("Linen Summer Breeze Set")
  },
  {
    id: "sum-2",
    title: "Womens Summer Floral Sundress",
    image: "/images/sum-2.jpg",
    description: "Stay stylish this season with this beautiful Amazon womens sundress 🌸 Featuring a flattering wrap V-neck, short sleeves, and a flowy A-line midi design, perfect for effortless summer outfits.",
    rating: 4.5,
    price: "$39.99",
    link: "https://amzn.to/4vTwOOg",
    category: "summer-outfits",
    slug: generateSlug("Mediterranean Escape Maxi")
  },
  {
    id: "sum-3",
    title: "Elegant Strapless Floral Maxi",
    image: "/images/sum-3.jpg",
    description: "✨ Turn heads this summer with this elegant strapless boho floral maxi dress by Simplee 💐 This summer maxi dress 2026 is perfect for vacation outfits women, beach dress women, and stylish wedding guest dress looks Designed with flowy mesh fabric, this boho floral dress gives a flattering and feminine vibe, making it ideal for summer parties, holiday outfits, brunch outfits, and special occasions",
    rating: 4.4,
    price: "$28.99",
    link: "https://amzn.to/4t08Heo",
    category: "summer-outfits",
    slug: generateSlug("Sun-Kissed Crochet Top")
  },
  {
    id: "sum-4",
    title: "Floral Wedding Guest Maxi",
    image: "/images/sum-4.jpg",
    description: "Make a statement with this beautiful Amazon floral wedding guest maxi dress 🌸 Designed with soft puff short sleeves, a flattering fit, and a tiered flowy silhouette, its perfect for weddings, parties, and special occasions. Lightweight and breathable, this summer dress 2026 combines comfort with elegance. Whether youre attending a wedding, brunch, or evening event, this dress gives a graceful and feminine look.",
    rating: 4.9,
    price: "$45.99",
    link: "https://amzn.to/4n1QnAb",
    category: "summer-outfits",
    slug: generateSlug("Coastal White Sundress")
  },

  // Winter Outfits
  {
    id: "win-1",
    title: "Cozy Winter 3-Piece Set",
    image: "/images/win-1.jpg",
    description: "Stay warm and stylish with this cozy 3 piece winter set featuring a knit beanie, matching scarf, and touchscreen gloves with soft fleece lining. Perfect for cold days and everyday winter outfits.",
    rating: 4.9,
    price: "$18.99",
    link: "https://amzn.to/3PwfkXS",
    category: "winter-outfits",
    slug: generateSlug("Knit Beanie & Scarf Set")
  },
  {
    id: "win-2",
    title: "Cropped Winter Puffer Jacket",
    image: "/images/win-2.jpg",
    description: "Trendy cropped puffer jacket with padded insulation for winter warmth.",
    rating: 4.4,
    price: "$32.39",
    link: "https://amzn.to/42Kf4HS",
    category: "winter-outfits",
    slug: generateSlug("Cropped Puffer Jacket")
  },
  {
    id: "win-3",
    title: "Elegant Soft Shawl Wrap",
    image: "/images/win-3.jpg",
    description: "Add effortless style to any outfit with this soft, lightweight shawl wrap poncho. Perfect for layering in spring, fall, and winter, it drapes beautifully and works with jeans, dresses, or office wear. A cozy yet elegant piece you’ll reach for again and again.",
    rating: 4.3,
    price: "$51.99",
    link: "https://amzn.to/3PQfklJ",
    category: "winter-outfits",
    slug: generateSlug("Fleece Lined Lounge Set")
  },

  // Spring Outfits
  {
    id: "spr-out-1",
    title: "Casual Printed Jumpsuit",
    image: "/images/spr-1.jpg",
    description: "Stay stylish without trying too hard 🤍 This casual loose jumpsuit features a sleeveless design, eye-catching prints, and a wide-leg fit that feels as good as it looks. Perfect for everyday wear, travel ,brunch, or relaxed outings. Plus… it has pockets (yes, really 😉). Pair it with sneakers for a laid-back vibe or dress it up with heels and accessories for a chic look. ",
    rating: 4.6,
    price: "$29.99",
    link: "https://amzn.to/3PRB9B5",
    category: "spring-outfits",
    slug: generateSlug("Casual Spring Outfit")
  },
  {
    id: "spr-out-2",
    title: "Trendy 2 Piece Skirt Set",
    image: "/images/spr-2.jpg",
    description: "Womens trendy 2 piece maxi skirt set is made of lightweight, skin-friendly and breathable fabirc, soft and comfy to wear. Casual two piece outfits for women is confortable to wear in spring and summer Casual chic skirt set for women, including a crop top and a high waisted long skirt, feature loose fit, round neck, short sleeve, high waist, minimalist style, 2 side pockets and elastic waist, stunning beach skirt sets will flatter your figure, make you look amazing in a crowd, perfect choice for your wardrobe",
    rating: 4.6,
    price: "$29.99",
    link: "https://amzn.to/4wCNZ79",
    category: "spring-outfits",
    slug: generateSlug("Skirt Set")
  },
  {
    id: "spr-out-3",
    title: "Elegant Boho Maxi Dress",
    image: "/images/spr-3.jpg",
    description: "Step into effortless elegance with this stunning boho chic floral maxi dress 🤍 Designed with a refined wrap V-neck, soft 1/2 sleeves, and a graceful flowy silhouette with a subtle slit, this piece blends comfort with a high-end look. Perfect for beach weddings, sunset events, and luxury vacation styling, this dress gives a polished, feminine feel without the designer price tag. The lightweight fabric drapes beautifully, making it an ideal choice for women who love timeless, elevated fashion.",
    rating: 4.5,
    price: "$26.99",
    link: "https://amzn.to/4cNar4g",
    category: "spring-outfits",
    slug: generateSlug("Maxi Dress")
  },

  // Workwear
  {
    id: "work-1",
    title: "Structured Modern Blazer",
    image: "/images/work-1.jpg",
    description: "A sharp, tailored blazer that commands respect in any meeting.",
    rating: 4.8,
    price: "$55.99",
    link: "https://amzn.to/4nJ4yui",
    category: "workwear",
    slug: generateSlug("Structured Modern Blazer")
  },
  {
    id: "work-2",
    title: "Classic Black Two-Piece Suit",
    image: "/images/work-2.jpg",
    description: "Nothing beats a classic black two piece suit women look 🖤 This sleek business blazer pant suit set is the perfect professional work outfit for office days when you want to look confident and polished instantly.The tailored fit, structured blazer, and flattering wide leg pants outfit create a powerful silhouette that works for meetings, presentations, or everyday workwear fashion. If you love clean and minimal style, this office outfit women essential is a must-have.",
    rating: 4.7,
    price: "$39.99",
    link: "https://amzn.to/3QKwq4N",
    category: "workwear",
    slug: generateSlug("Professional Tapered Trousers")
  },
  {
    id: "work-3",
    title: "Business Casual Pantsuit",
    image: "/images/work-3.jpg",
    description: "Chic and polished two piece pantsuit set for women perfect for business casual, office wear, and formal looks 💼 Features a tailored blazer and dressy pants for a sleek, professional style. Style it with heels for a powerful office vibe or dress it down with flats for a more relaxed feel. Add minimal jewelry and a handbag to complete the look.",
    rating: 4.6,
    price: "$34.99",
    link: "https://amzn.to/4dvvhr3",
    category: "workwear",
    slug: generateSlug("Silk Button-Down Shirt")
  },
  {
    id: "work-4",
    title: "Business Casual Knit Blazer",
    image: "/images/work-4.jpg",
    description: "Soft knit blazer with lapel and pockets.Comfortable enough for all-day wear and polished enough for the office, meetings, or casual outings. A versatile must-have for fall wardrobes.",
    rating: 4.2,
    price: "$29.69",
    link: "https://amzn.to/49Zkhzs",
    category: "workwear",
    slug: generateSlug("Business Casual Sweater Blazer")
  },
   {
    id: "work-5",
    title: "Professional Wide Leg Suit",
    image: "/images/work-5.jpg",
    description: "Womens Suits 2 Piece Set Business Casual Blazer Jacket Wide Leg Dress Pants Suits Professional Work Office Outfits.",
    rating: 4.2,
    price: "$29.69",
    link: "https://amzn.to/4dxGaXw",
    category: "workwear",
    slug: generateSlug("Business Casual Sweater Blazer")
  },


  // Casual Looks
  {
    id: "cas-1",
    title: "Pleated Shirt Dress",
    image: "/images/casual-1.jpg",
    description: "✨ Upgrade your everyday look with this women’s button front pleated shirt dress 💙 A perfect mix of comfort and style for daily wear Ideal for 👉 college outfits, office casual looks, brunch dates, and weekend style Style it 👉 with sneakers for a relaxed vibe or heels for a classy touch 👗",
    rating: 4.7,
    price: "$32.99",
    link: "https://amzn.to/41KVFGk",
    category: "casual-looks",
    slug: generateSlug("Weekend Comfort Knit")
  },
  {
    id: "cas-2",
    title: "Double-Breasted Wool Coat",
    image: "/images/casual-2.jpg",
    description: "Women Winter Wool Blend Camel Mid-Long Coat Notch Double-Breasted Lapel Jacket Outwear",
    rating: 4.8,
    price: "$48.99",
    link: "https://amzn.to/43mEZFG",
    category: "casual-looks",
    slug: generateSlug("Effortless Denim Jacket")
  },
  {
    id: "cas-3",
    title: "Summer 2 Piece Skirt Set",
    image: "/images/casual-3.jpg",
    description: "✨ Looking for the perfect summer outfit? This women’s 2 piece skirt set is a must-have! Featuring a cute cap sleeve crop top + flowy maxi skirt with pockets 💕 Perfect for 👉 college outfits, casual days, brunch looks, and vacation style Easy to style 👉 pair with sneakers or sandals for an effortless chic vibe",
    rating: 4.6,
    price: "$27.99",
    link: "https://amzn.to/41DiVGe",
    category: "casual-looks",
    slug: generateSlug("Urban Chic Hoodie")
  },
  {
    id: "cas-5",
    title: "Flowy Boho White Maxi",
    image: "/images/casual-4.jpg",
    description: "Stay effortlessly elegant with this stunning Amazon white maxi dress 🤍 Designed with a flattering scoop neckline, sleeveless ruffle details, and a flowy A-line silhouette, this dress is perfect for creating soft, feminine summer looks. This boho-inspired maxi dress is lightweight, breathable, and ideal for vacations, beach days, brunch, or casual outings. The tiered flowy design adds movement and charm, making it one of the most loved summer dresses 2026.",
    rating: 4.5,
    price: "$19.99",
    link: "https://amzn.to/4tLDw7q",
    category: "casual-looks",
    slug: generateSlug("Minimalist Ribbed Tank")
  },

  // Party Dresses
  {
    id: "party-1",
    title: "Sweetheart Neck Midi Dress",
    image: "/images/party-1.jpg",
    description: "Turn heads with this women’s sweetheart neck jacquard midi dress 💕 Designed with a flattering A-line silhouette and elegant texture, this dress is perfect for formal events, parties, weddings, and special occasions.The structured fit and feminine neckline create a timeless, classy look that never goes out of style. Pair it with heels and minimal accessories for a stunning evening outfit 2026 ✨ ",
    rating: 4.9,
    price: "$59.99",
    link: "https://amzn.to/4mo1CSR",
    category: "party-dresses",
    slug: generateSlug("Satin Evening Slip")
  },
  {
    id: "party-2",
    title: "Off Shoulder Fairy Maxi",
    image: "/images/party-2.jpg",
    description: "Step into timeless elegance with this off shoulder fairy maxi dress designed to blend vintage charm with modern style ✨ Made from lightweight chiffon fabric, it features a flattering corset-style waist, soft puff sleeves, and a dreamy ruffled high-low hem that flows beautifully with every step.",
    rating: 4.8,
    price: "$65.99",
    link: "https://amzn.to/4e5WiS1",
    category: "party-dresses",
    slug: generateSlug("Cocktail Hour Velvet")
  },
  {
    id: "party-3",
    title: "Pastel Pink Chic Guest Dress",
    image: "/images/party-3.jpg",
    description: "Sparkle and shine through the night in this head-turning gown.",
    rating: 4.7,
    price: "$89.99",
    link: "https://amzn.to/4cAbE0x",
    category: "party-dresses",
    slug: generateSlug("Sequin Statement Gown")
  },
  {
    id: "party-4",
    title: "Elegant A-line Midi Dress",
    image: "/images/party-4.jpg",
    description: "This timeless A-line midi dress gives you that effortless elegant look inspired by Audrey Hepburn. Perfect for weddings, office wear, church, or any special occasion. Flattering fit, classy design, and easy to style — a must-have in every wardrobe.",
    rating: 4.9,
    price: "$75.99",
    link: "https://amzn.to/4m2fD8W",
    category: "party-dresses",
    slug: generateSlug("Midnight Gala Dress")
  },

  // Two-Piece Sets
  {
    id: "set-1",
    title: "Zip-Up Sweatsuit Set",
    image: "/images/d-99.jpg",
    description: "Stay cozy and stylish with this long sleeve zip-up lounge set. Features a relaxed fit and wide-leg sweatpants, perfect for travel, errands, or everyday comfort.",
    rating: 4.3,
    price: "$47.49",
    link: "https://amzn.to/4dSUqeY",
    category: "two-piece-sets",
    slug: generateSlug("Spring Lounge Sweatsuit")
  },
  {
    id: "set-2",
    title: "2-Piece Knit Lounge Set",
    image: "/images/daily-outfit.jpg",
    description: "Soft and stretchy 2-piece knit lounge set designed for comfort and easy movement. Features a short-sleeve split hem top and wide-leg pants with pockets. Perfect for relaxing at home, running errands, or casual everyday wear.",
    rating: 4.6,
    price: "$38.99",
    link: "https://amzn.to/4qEmhDR",
    category: "two-piece-sets",
    slug: generateSlug("Comfy Knit Wide Leg Set")
  },
  {
    id: "set-3",
    title: "Casual Matching Lounge Set",
    image: "/images/d-3.jpg",
    description: "Lightweight and cozy set that blends comfort with modern style.",
    rating: 4.8,
    price: "$29.99",
    link: "https://amzn.to/4wDlPch",
    category: "two-piece-sets",
    slug: generateSlug("Matching Modal Lounge Set")
  },
];

// Full Look - Complete Outfits (Keep as curated collections)
export const fullLooks: FullLook[] = [
  {
    id: "fl-1",
    title: "Polished Winter Workwear",
    slug: "cozy-winter-essentials",
    description: "A refined cold-weather outfit featuring a structured blazer set, classic pointed heels, and elegant gold jewelry.",
    coverImage: "/images/fl-1-outfit.jpg",
    items: [
      {
        id: "fl-1-clothing",
        title: "2 Piece Business Casual Suit",
        image: "/images/fl-1-outfit.jpg",
        description: "Professional blazer set ideal for business casual or formal occasions.",
        rating: 4.6,
        link: "#",
        itemType: "clothing",
      },
      {
        id: "fl-1-shoes",
        title: "Pointed-Toe Stiletto Pumps",
        image: "/images/fl-1-shoes.jpg",
        description: "Pointed-toe pumps with a wrapped stiletto heel.",
        rating: 4.5,
        link: "#",
        itemType: "shoes",
      },
      {
        id: "fl-1-bag",
        title: "Professional Leather Laptop Tote",
        image: "/images/fl-1-bag.jpg",
        description: "Large professional leather computer bag fits 15.6 inch laptop.",
        rating: 4.7,
        link: "#",
        itemType: "bag",
      },
      {
        id: "fl-1-accessories",
        title: "14K Gold Teardrop Earrings",
        image: "/images/fl-1-acc.jpg",
        description: "Chunky, lightweight earrings that add effortless luxury.",
        rating: 4.8,
        link: "#",
        itemType: "accessories",
      },
    ],
  },
];
