# TokoBuku Hidayah - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── cart/             # Shopping cart
│   ├── layout/           # Navigation & footer
│   ├── products/         # Product components
│   └── sections/         # Page sections
├── data/                 # Static data
│   └── products.ts       # Product catalog
└── store/                # State management
    └── cartStore.ts      # Shopping cart store
```

## Key Features

✅ **E-Commerce Functionality**
- Interactive product catalog
- Shopping cart with persistence
- WhatsApp checkout integration
- Category filtering

✅ **Modern Design**
- Tailwind CSS styling
- Framer Motion animations
- Responsive design
- Islamic/educational theme

✅ **Performance**
- Next.js 14 with App Router
- TypeScript for type safety
- Image optimization
- SEO optimized

## Customization

### Update Products
Edit `src/data/products.ts` to add/modify books

### Change Colors
Modify `tailwind.config.js` color palette

### Update Contact Info
Update phone numbers in:
- `src/components/layout/Navbar.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/cart/CartDrawer.tsx`

## Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### Build Locally
```bash
npm run build
npm run start
```

## Support

For technical issues, check:
1. Node.js version (18+)
2. Dependencies installed correctly
3. Port 3000 is available

Happy coding! 🚀