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
          className="min-h-screen lg:h-screen w-full flex items-center justify-center relative overflow-hidden"
        >
          {/* Full Screen Gradient Background - Semi-transparent */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, 
                  ${product.background_color}10 0%, 
                  ${product.background_color}20 15%, 
                  ${product.background_color}30 30%, 
                  ${product.background_color}22 45%, 
                  ${product.background_color}15 60%, 
                  ${product.background_color}25 75%, 
                  ${product.background_color}12 100%),
                linear-gradient(45deg, 
                  transparent 0%, 
                  ${product.background_color}08 25%, 
                  ${product.background_color}18 50%, 
                  ${product.background_color}10 75%, 
                  transparent 100%),
                radial-gradient(ellipse at top left, ${product.background_color}15 0%, transparent 60%),
                radial-gradient(ellipse at bottom right, ${product.background_color}12 0%, transparent 60%),
                radial-gradient(ellipse at center, ${product.background_color}08 0%, transparent 70%)`
            }}
          />
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

          {/* Page Number Indicator - Hidden */}
          <div className="hidden absolute top-8 left-8 text-white/50 text-sm font-mono z-20">
            {String(index + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
          </div>

          {/* Product Content */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center w-full max-w-6xl lg:max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0 lg:h-screen gap-4 sm:gap-6 lg:gap-0 relative z-10">
            {/* Photo Box - Full width on laptop */}
            <div className="w-full sm:w-1/3 lg:w-full flex items-center justify-center order-2 sm:order-1 lg:order-1 lg:h-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 flex justify-center"
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
            </div>

            {/* Text Box - Full width on laptop */}
            <div className="w-full sm:w-2/3 lg:w-full flex items-center justify-center order-1 sm:order-2 lg:order-2 lg:h-1/2">
              {/* This box is intentionally empty as VapeCan component handles the text content */}
            </div>
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