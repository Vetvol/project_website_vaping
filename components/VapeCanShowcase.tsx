'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import VapeCan from '@/components/VapeCan'

interface Product {
  id: number
  flavor: string
  description: string
  ingredients: string[]
  background_color: string
  is_active: boolean
  image_url?: string
  created_at: string
  updated_at: string
}

export default function VapeCanShowcase() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        const result = await response.json()
        
        if (result.success) {
          setProducts(result.data)
        } else {
          // Fallback to mock data if API fails
          setProducts([
            {
              id: 1,
              flavor: "Kiwi Guava Passionfruit",
              ingredients: ["🥝", "🍈", "🥭"],
              description: "A tropical explosion of sweet kiwi, exotic guava, and tangy passionfruit for the ultimate fruity experience.",
              background_color: "#3b82f6",
              is_active: true,
              image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Kivi_guava_passionfruit.png",
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 2,
              flavor: "Dragonfruit Strawberry Ice",
              ingredients: ["🐉", "🍓", "❄️"],
              description: "Cool dragonfruit meets sweet strawberry with an icy finish for a refreshing vape sensation.",
              background_color: "#e91e63",
              is_active: true,
              image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Dragonfruit_strawberry_ice.jpg",
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 3,
              flavor: "Grape Passionfruit",
              ingredients: ["🍇", "🥭", "💜"],
              description: "Rich grape flavor combined with tropical passionfruit for a bold and exotic taste experience.",
              background_color: "#9c27b0",
              is_active: true,
              image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Grape_passionfruit.jpg",
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 4,
              flavor: "Melon Lychee",
              ingredients: ["🍈", "🌰", "💚"],
              description: "Sweet melon meets delicate lychee for a refreshing and sophisticated flavor profile.",
              background_color: "#4caf50",
              is_active: true,
              image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Melon_lychee.jpg",
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 5,
              flavor: "Mint Ice",
              ingredients: ["🌿", "❄️", "💙"],
              description: "Cool mint with an icy finish for a crisp, refreshing vape experience that awakens your senses.",
              background_color: "#00bcd4",
              is_active: true,
              image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Mint_ice.jpg",
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 6,
              flavor: "Papaya Aloe",
              ingredients: ["🥭", "🌿", "🧡"],
              description: "Tropical papaya meets soothing aloe for a smooth, refreshing vape with exotic undertones.",
              background_color: "#ff9800",
              is_active: true,
              image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Papaya_aloe.jpg",
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 7,
              flavor: "Raspberry Mojito Ice",
              ingredients: ["🍓", "🌿", "❄️"],
              description: "Fresh raspberry meets mint with an icy twist, inspired by the classic mojito cocktail.",
              background_color: "#f44336",
              is_active: true,
              image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Raspberry_mojito_ice.jpg",
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            }
          ])
        }
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products')
        // Use fallback data
        setProducts([
          {
            id: 1,
            flavor: "Kiwi Guava Passionfruit",
            ingredients: ["🥝", "🍈", "🥭"],
            description: "A tropical explosion of sweet kiwi, exotic guava, and tangy passionfruit for the ultimate fruity experience.",
            background_color: "#3b82f6",
            is_active: true,
            image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Kivi_guava_passionfruit.png",
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 2,
            flavor: "Dragonfruit Strawberry Ice",
            ingredients: ["🐉", "🍓", "❄️"],
            description: "Cool dragonfruit meets sweet strawberry with an icy finish for a refreshing vape sensation.",
            background_color: "#e91e63",
            is_active: true,
            image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Dragonfruit_strawberry_ice.jpg",
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 3,
            flavor: "Grape Passionfruit",
            ingredients: ["🍇", "🥭", "💜"],
            description: "Rich grape flavor combined with tropical passionfruit for a bold and exotic taste experience.",
            background_color: "#9c27b0",
            is_active: true,
            image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Grape_passionfruit.jpg",
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 4,
            flavor: "Melon Lychee",
            ingredients: ["🍈", "🌰", "💚"],
            description: "Sweet melon meets delicate lychee for a refreshing and sophisticated flavor profile.",
            background_color: "#4caf50",
            is_active: true,
            image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Melon_lychee.jpg",
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 5,
            flavor: "Mint Ice",
            ingredients: ["🌿", "❄️", "💙"],
            description: "Cool mint with an icy finish for a crisp, refreshing vape experience that awakens your senses.",
            background_color: "#00bcd4",
            is_active: true,
            image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Mint_ice.jpg",
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 6,
            flavor: "Papaya Aloe",
            ingredients: ["🥭", "🌿", "🧡"],
            description: "Tropical papaya meets soothing aloe for a smooth, refreshing vape with exotic undertones.",
            background_color: "#ff9800",
            is_active: true,
            image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Papaya_aloe.jpg",
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 7,
            flavor: "Raspberry Mojito Ice",
            ingredients: ["🍓", "🌿", "❄️"],
            description: "Fresh raspberry meets mint with an icy twist, inspired by the classic mojito cocktail.",
            background_color: "#f44336",
            is_active: true,
            image_url: "https://raw.githubusercontent.com/Vetvol/project_website_vaping/main/images/Raspberry_mojito_ice.jpg",
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Loading background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full relative z-10"
        />
      </div>
    )
  }

  if (error && products.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Error background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)]"></div>
        
        <div className="text-center relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4">Unable to load products</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Product Showcase Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id}
          className="h-screen w-full flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              ${product.background_color}15 0%, 
              ${product.background_color}35 25%, 
              ${product.background_color}50 50%, 
              ${product.background_color}35 75%, 
              ${product.background_color}15 100%),
              radial-gradient(ellipse at top, ${product.background_color}20 0%, transparent 50%),
              radial-gradient(ellipse at bottom, ${product.background_color}10 0%, transparent 50%)`
          }}
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            {/* Dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"></div>
            {/* Mesh gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent"></div>
          </div>

          {/* Enhanced Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${1 + Math.random() * 3}px`,
                  height: `${1 + Math.random() * 3}px`,
                  background: `radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute rounded-full blur-xl"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 20}%`,
                  width: `${200 + i * 100}px`,
                  height: `${200 + i * 100}px`,
                  background: `radial-gradient(circle, ${product.background_color}20 0%, ${product.background_color}10 50%, transparent 100%)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Product Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 text-center lg:text-left order-1 lg:order-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold gradient-text mb-0.5 sm:mb-1 md:mb-2 lg:mb-4">
                    {product.flavor}
                  </h2>
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-gray-300 mb-0.5 sm:mb-1 md:mb-2 lg:mb-4 max-w-2xl mx-auto lg:mx-0">
                    {product.description}
                  </p>
                  
                  {/* Flavor Tags */}
                  <div className="flex flex-wrap gap-0.5 sm:gap-1 md:gap-2 lg:gap-3 justify-center lg:justify-start mb-0.5 sm:mb-1 md:mb-2 lg:mb-4">
                    {product.ingredients.map((ingredient, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-0.5 py-0 sm:px-1 sm:py-0.5 md:px-2 md:py-1 lg:px-3 lg:py-1 xl:px-4 xl:py-2 text-[10px] sm:text-xs md:text-sm lg:text-lg"
                      >
                        {ingredient}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Vape Can */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center order-2 lg:order-2 relative"
              >
                {/* Product Specifications - Right Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute top-4 right-4 lg:top-8 lg:right-8 z-20"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 lg:px-4 lg:py-3">
                    <div className="text-xs sm:text-sm lg:text-base font-semibold text-white text-center">
                      10ml / 20mg/ml
                    </div>
                  </div>
                </motion.div>

                <VapeCan 
                  flavor={product.flavor}
                  ingredients={product.ingredients}
                  description={product.description}
                  index={index}
                  totalProducts={products.length}
                  imageUrl={product.image_url}
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}