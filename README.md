# NexGen Business Website

A modern, fully responsive business website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Features stunning animations, premium design aesthetics, and a comprehensive component library.

> 🎨 **Original Design**: This project is based on the [Business Website Design](https://www.figma.com/design/OluymUi3iT7hJzUGxuWoh6/Business-Website-Design) Figma template.

## ✨ Features

- 🎯 **Modern Tech Stack**: Built with React 18, Vite 6, TypeScript, and Tailwind CSS
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- 🎨 **Premium Design**: Sleek dark modes, glassmorphism effects, and vibrant gradients
- ⚡ **Smooth Animations**: Powered by Framer Motion for dynamic user experiences
- 🧩 **Reusable Components**: Comprehensive component library with Radix UI primitives
- 🎭 **Interactive Sliders**: React Slick carousels for testimonials and trust indicators
- 🎪 **Rich UI Elements**: Custom buttons, cards, forms, navigation, and more
- ♿ **Accessible**: Built with accessibility best practices using Radix UI
- 🚀 **Fast Performance**: Optimized build with Vite for lightning-fast load times

## 📸 Pages

- **Home** - Hero section with stats, featured products, and CTAs
- **About** - Company values, team slider, and timeline
- **Services** - Service offerings in responsive grid
- **Products** - Product showcase with alternating layouts
- **Features** - Feature grid with animated cards and showcase slider
- **Pricing** - Pricing plans with comparison table
- **Contact** - Contact form with map integration
- **Blog** - (Placeholder)
- **Portfolio** - (Placeholder)

## 🛠️ Tech Stack

### Core
- **React** 18.3.1
- **TypeScript** 5.6.3
- **Vite** 6.3.5

### Styling
- **Tailwind CSS** 4.1.12
- **@tailwindcss/vite** 4.1.12
- **Motion** (Framer Motion) 12.0.5

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon set
- **React Slick** - Carousel/slider functionality
- **Material UI** - Supporting components

### Routing
- **React Router DOM** 7.2.1

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd business-website-design
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at **http://localhost:5173/**

### Build

Create a production build:
```bash
npm run build
```

The build output will be in the `dist/` directory.

## 📁 Project Structure

```
business-website-design/
├── public/              # Static assets
├── src/
│   ├── app/
│   │   ├── components/  # Reusable components
│   │   │   ├── ui/     # Radix UI components
│   │   │   ├── Hero.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── ...
│   │   ├── pages/      # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ServicesPage.tsx
│   │   │   └── ...
│   │   └── App.tsx     # Main app component
│   ├── styles/         # Global styles
│   │   └── index.css
│   └── main.tsx        # Application entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Design System

### Colors
- **Primary**: Purple (#7C3AED, #6D28D9)
- **Secondary**: Light Purple (#A78BFA, #C4B5FD)
- **Neutral**: Grays (#FAFAFA, #6B7280, #1F2937)

### Typography
- **Headings**: Unbounded (Bold, Semibold)
- **Body**: System fonts with fallbacks

### Components
All components follow a consistent design pattern with:
- Responsive sizing (mobile-first approach)
- Hover states and micro-animations
- Proper spacing and padding
- Accessible color contrast

## 📱 Mobile Responsiveness

The entire website is optimized for mobile devices with:
- **Responsive breakpoints**: 640px, 768px, 1024px, 1280px
- **Mobile-first sliders**: Testimonials and Trust Indicators
- **Adaptive layouts**: Cards, grids, and flex containers
- **Touch-friendly**: Large tap targets and proper spacing

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is available for personal and commercial use.

## 🙏 Acknowledgments

- Original design from [Figma Community](https://www.figma.com/design/OluymUi3iT7hJzUGxuWoh6/Business-Website-Design)
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**