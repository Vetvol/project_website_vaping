'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import VapeCan from '@/components/VapeCan'
import Image from 'next/image'

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
          className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
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
          {/* Enhanced Gradient Transition to Next Product */}
          {index < products.length - 1 && (
            <div 
              className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 z-30"
              style={{
                background: `linear-gradient(to bottom, 
                  transparent 0%, 
                  ${products[index + 1].background_color}15 25%, 
                  ${products[index + 1].background_color}30 50%, 
                  ${products[index + 1].background_color}45 75%, 
                  ${products[index + 1].background_color}60 100%)`
              }}
            />
          )}
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

          {/* Page Number Indicator */}
          <div className="absolute top-8 left-8 text-white/50 text-sm font-mono z-20">
            {String(index + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
          </div>

          {/* Product Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full gap-8 lg:gap-16">
            {/* Vape Can */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
            >
              <VapeCan 
                flavor={product.flavor}
                ingredients={product.ingredients}
                description={product.description}
                index={index}
                totalProducts={products.length}
                imageUrl={product.image_url}
              />
            </motion.div>

            {/* Product Info - Hidden on mobile/tablet, visible on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block w-full lg:w-1/2 text-white text-center lg:text-left order-1 lg:order-2"
            >
              {/* Product Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
                {product.flavor}
              </h1>

              {/* Product Description */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {product.description}
              </p>
              
              {/* Flavor Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
                {product.ingredients.map((ingredient, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-white/20 rounded-full text-sm sm:text-base font-medium"
                  >
                    {ingredient}
                  </motion.span>
                ))}
              </div>

              {/* Product Specs */}
              <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg max-w-xs mx-auto lg:mx-0">
                <div className="text-lg sm:text-xl font-semibold text-white text-center">
                  10ml / 20mg/ml
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="text-white/60 text-sm">
              Scroll to discover
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  )
}