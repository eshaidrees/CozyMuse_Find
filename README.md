# CozyMuse Finds - Amazon Affiliate Landing Page

A modern, high-converting Amazon affiliate landing page focused on women's fashion and aesthetic home products. Designed with a soft, Pinterest-inspired aesthetic to drive engagement and conversions.

## Features

- **Mobile-first responsive design** optimized for Pinterest traffic
- **Soft, aesthetic UI** with cozy, feminine styling
- **Reusable components** for maintainability
- **Smooth animations** with Framer Motion
- **Performance optimized** with lazy loading and efficient rendering
- **SEO friendly** with proper heading structure
- **Accessibility focused** with semantic HTML

## Tech Stack

- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **UI Components**: Custom Shadcn-inspired components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Next.js with Turbopack

## Design Elements

- **Color Palette**: White, beige, light grey, soft brown
- **Typography**: Clean, readable fonts with proper hierarchy
- **Layout**: Ample white space, rounded corners, soft shadows
- **Animations**: Fade-in and slide-up entrance animations
- **Interactive Elements**: Smooth hover states and transitions

## Project Structure

```
cozymuse_finds/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── shop/
│   │   └── page.tsx
│   └── privacy/
│       └── page.tsx
├── components/
│   ├── ui/
│   │   └── button.tsx
│   ├── header.tsx
│   ├── footer.tsx
│   ├── ProductCard.tsx
│   ├── CategoryCard.tsx
│   ├── Newsletter.tsx
│   └── Container.tsx
├── data/
│   └── products.ts
├── lib/
│   └── utils.ts
├── public/
└── styles/
    └── globals.css
```

## Sections Included

1. **Hero Section** - Eye-catching headline with CTA
2. **Shop by Category** - Pinterest-style category cards
3. **Trending Fashion Picks** - Grid of fashion products
4. **Aesthetic Home Favorites** - Grid of home products
5. **Why These Picks** - Value proposition with icons
6. **Pinterest Section** - Engaging callout for Pinterest users
7. **Email Signup** - Newsletter subscription
8. **Footer** - Site info and affiliate disclaimer

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

No environment variables required for this static site.

## Affiliate Links

Amazon affiliate links are stored as placeholder '#' links in the product data. Replace with actual Amazon affiliate links for production use.

## Customization

### Adding New Products

Edit `data/products.ts` to add new fashion or home products:

```typescript
{
  id: "unique-id",
  title: "Product Name",
  price: "$XX.XX",
  imageUrl: "https://path-to-image.jpg",
  benefit: "One-line benefit description",
  rating: 4.5,
  amazonLink: "https://www.amazon.com/your-affiliate-link"
}
```

### Updating Colors

Modify the color palette in `app/globals.css` and `tailwind.config.ts`.

### Adding New Pages

Create new pages in the `app/` directory following the Next.js App Router conventions.

## Performance Considerations

- Images are optimized for fast loading
- Animations are lightweight and smooth
- Component lazy loading implemented where appropriate
- Bundle size minimized with tree-shaking

## Responsive Design

The site is designed with mobile-first approach:
- Touch-friendly buttons and interactions
- Optimized for various screen sizes
- Responsive grid layouts
- Readable typography at all sizes

## Deployment

The site can be deployed to any platform that supports Next.js applications:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting provider

## License

This project is open source and available under the MIT License.