# Found & Favoured - Premium Fashion Affiliate Landing Page

A high-converting, Pinterest-worthy Amazon affiliate landing page exclusively focused on **women's fashion and outfit inspiration**. Built with a modern, minimalist aesthetic designed to drive high engagement and multi-item affiliate conversions.

## ✨ Transformation Highlights

CozyMuse Finds has been transformed from a mixed-category store into a specialized **fashion-only niche site**, featuring:

- **Premium Pinterest Aesthetic**: A soft, feminine color palette (blush pink, warm beige, and stone neutrals) with clean spacing and editorial-style layout.
- **Fashion-Only Focus**: Curated exclusively for women's outfits, removing all non-fashion items to maximize niche relevance.
- **Conversion-Optimized UI**: Scroll-stopping headings, attractive descriptions, and high-contrast "Shop the Look" calls-to-action.
- **Advanced Features**: Curated "Full Look" ensemble pages that encourage multi-item purchases by showcasing cohesive outfits.

## 👗 Curated Fashion Categories

The landing page is organized into 9 specialized seasonal and stylistic collections:

1.  **Spring Dresses 👗** (New!)
2.  **Summer Outfits ☀️**
3.  **Winter Outfits ❄️**
4.  **Spring Outfits 🌸**
5.  **Fall Outfits 🍂**
6.  **Workwear / Office 👩‍💼**
7.  **Casual Everyday 👕**
8.  **Party & Guest Dresses ✨**
9.  **Two-Piece Sets & Co-ords 👗**

## 🚀 Key Features

- **Dynamic Hero Section**: High-quality editorial background with soft overlays and immersive typography.
- **Curated "Full Look" Pages**: Specialized routes (`/full-look/[slug]`) that group clothing, shoes, bags, and accessories into a single shoppable ensemble.
- **Mobile-First Responsive Design**: Optimized for the vertical scroll characteristic of Pinterest and social media traffic.
- **Optimized Performance**: Leveraging Next.js 16 `<Image />` components and static generation for lightning-fast load times.
- **SEO & Social Ready**: Automatic meta-data generation and Pinterest-friendly grid layouts.

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with a custom soft-niche palette
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Components**: Custom accessible primitives built with [Radix UI](https://www.radix-ui.com/)

## 🎨 Design System

- **Colors**:
  - `soft-pink` (`#FDF2F2`): Backgrounds and subtle accents
  - `accent-blush` (`#E5B6B6`): Primary CTAs and highlights
  - `stone-text` (`#444444`): High-contrast typography for legibility
  - `warm-beige` (`#F5F5DC`): Secondary backgrounds and cards
- **Typography**: Clean, sans-serif hierarchy with bold editorial headings and light, italicized subtext.
- **Interactions**: Dynamic hover scaling (`1.02x`), smooth transitions, and tactile button feedback.

## 📁 Project Structure

```
cozymuse_finds/
├── app/                    # Next.js App Router (Pages & Layouts)
│   ├── category/           # Dynamic category and 'Full Look' pages
│   ├── full-look/          # Curated outfit ensemble detail pages
│   ├── product/            # Individual product detail pages
│   ├── shop/               # Full collection catalog
│   └── ...                 # About, Contact, Privacy, Sitemap
├── components/             # Reusable UI components
│   ├── ui/                 # Atomic design components (Buttons, etc.)
│   ├── ProductCard.tsx     # Standard product grid item
│   ├── FullLookOutfit.tsx  # Specialized ensemble layout
│   └── ...                 # Header, Footer, Newsletter
├── data/                   # Central static data store
│   └── products.ts         # Products, categories, and full looks
├── public/                 # Optimized static assets & images
└── tailwind.config.ts      # Custom niche-specific theme
```

## 🏁 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Launch Development Environment**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

## 📝 Customization

- **Update Products**: All content is managed in `data/products.ts`. Adding a product to a category automatically updates the homepage and category grids.
- **Change Palette**: Adjust the color constants in `tailwind.config.ts` to instantly transform the site's atmosphere.

## ⚖️ License

This project is open-source and available under the **MIT License**.

---
*Curated by CozyMuse Finds — Elevating your Amazon shopping experience.*
