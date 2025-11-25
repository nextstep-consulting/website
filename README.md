# Next Step Consulting Group - Landing Page

A professional landing page for Next Step Consulting Group, specializing in freelance visa solutions and international recruitment services.

## Features

- **SEO Optimized**: Comprehensive metadata, structured data (Schema.org), Open Graph, and Twitter cards
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Component-Based Architecture**: Separated sections for better code organization
- **Performance**: Built with Next.js 16 for optimal performance

## Project Structure

```
app/
├── components/
│   ├── Hero.tsx              # Landing hero section
│   ├── Pricing.tsx           # 2-year visa pricing packages
│   ├── About.tsx             # Company information
│   ├── WhyChooseUs.tsx       # Value propositions
│   ├── Contact.tsx           # Contact form and info
│   └── Footer.tsx            # Footer with links
├── layout.tsx                # Root layout with SEO metadata
├── page.tsx                  # Main landing page
├── sitemap.ts                # XML sitemap generation
└── robots.ts                 # Robots.txt configuration
```

## Components

### Hero

Welcome section with company introduction and CTA buttons.

### Pricing

Displays two pricing packages (Men/Women) for 2-year working permits with:

- Working visa and permit
- Labor card
- Emirates ID with NOC
- 1 month accommodation
- Insurance upon request

### About

Company overview including:

- Who we are
- What we offer
- Global talent partnership

### Why Choose Us

Highlights key differentiators:

- Transparency
- Tailored solutions
- Success stories

### Contact

Contact form and company contact information.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## SEO Features

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card metadata
- Structured data (JSON-LD) with Schema.org markup
- XML sitemap
- Robots.txt configuration
- Semantic HTML structure

## Customization

### Update Contact Information

Edit `/app/components/Contact.tsx` to add:

- Phone number
- Email address
- Physical address

### Update Business Information

1. **Metadata**: Edit `/app/layout.tsx` to update SEO information
2. **Structured Data**: Update the JSON-LD schema in `/app/layout.tsx`
3. **Sitemap**: Update `/app/sitemap.ts` with your actual domain

### Add Images

Place images in the `/public` directory:

- `/public/og-image.jpg` - Open Graph image (1200x630px)
- `/public/favicon.ico` - Favicon
- `/public/logo.png` - Company logo

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework

## Performance Optimization

- Server-side rendering (SSR)
- Automatic code splitting
- Image optimization ready
- Font optimization with Inter font

## License

Private - Next Step Consulting Group

## Support

For support, email info@nextstepgroup.com
