# LUNIQ VAPE - Premium Vaping Website

A modern, animated website for LUNIQ VAPE vaping products with scroll-based product showcase.

## Features

- 🎨 **Modern Design**: Beautiful gradient backgrounds and smooth animations
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🎭 **Scroll Animations**: Interactive vape can showcase with flying ingredients
- 🚀 **3D Effects**: Modern 3D animations and parallax effects
- 🗄️ **Database Ready**: Neon PostgreSQL database support
- 🌐 **Vercel Ready**: Optimized for Vercel deployment

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Neon PostgreSQL
- **Deployment**: Vercel
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon database account
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vetvol/project_website_vaping.git
   cd project_website_vaping
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   - `DATABASE_URL`: Your Neon database connection string
   - `NEXTAUTH_SECRET`: A random secret for authentication
   - `ADMIN_EMAIL`: Admin panel email
   - `ADMIN_PASSWORD`: Admin panel password

4. **Set up the database**
   - Create a new Neon database
   - Run the SQL schema from `database/schema.sql`
   - Update your `DATABASE_URL` in `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Main website: http://localhost:3000

## Project Structure

```
project_website_vaping/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── AnimatedECigarette.tsx # Animated vaping device
│   ├── ProductSeries.tsx  # Product showcase
│   └── Footer.tsx         # Footer
├── lib/                   # Utility functions
│   └── db.ts             # Database connection
├── database/              # Database files
│   └── schema.sql         # Database schema
└── public/                # Static assets
```

## Key Components

### Vape Can Showcase
- Interactive scroll-based product display
- Flying ingredient animations
- 3D can opening effects
- Smooth parallax scrolling
- One product per full-screen section

## Deployment

### Vercel Deployment

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Import environment variables

2. **Environment Variables**
   - `DATABASE_URL`: Your Neon database URL
   - `NEXTAUTH_SECRET`: Random secret string
   - `ADMIN_EMAIL`: Admin email
   - `ADMIN_PASSWORD`: Admin password

3. **Deploy**
   - Vercel will automatically deploy on every push
   - Your site will be available at `your-project.vercel.app`

### Neon Database Setup

1. **Create Neon Account**
   - Sign up at neon.tech
   - Create a new project

2. **Run Schema**
   - Copy the SQL from `database/schema.sql`
   - Run it in your Neon SQL editor

3. **Get Connection String**
   - Copy your database URL
   - Add it to your environment variables

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { /* Your primary colors */ },
  accent: { /* Your accent colors */ }
}
```

### Animations
Modify animations in `tailwind.config.js`:
```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
  // Add your custom animations
}
```

### Products
Add new products through the admin panel or directly in the database.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@luniqvape.com or create an issue on GitHub.

---

**Note**: This is a demo website. All product information and images are for demonstration purposes only.
