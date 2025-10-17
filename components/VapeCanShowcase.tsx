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
              flavor: "Kiwi-Guava",
              ingredients: ["🥝", "🍈", "🍋"],
              description: "A tropical explosion of sweet kiwi and exotic guava, perfectly balanced with a refreshing citrus twist.",
              background_color: "#3b82f6",
              is_active: true,
              image_url: undefined,
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 2,
              flavor: "Mango Tango",
              ingredients: ["🥭", "🍊", "🌶️"],
              description: "Juicy mango meets zesty orange with a hint of spice for an unforgettable tropical experience.",
              background_color: "#f59e0b",
              is_active: true,
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 3,
              flavor: "Berry Blast",
              ingredients: ["🫐", "🍓", "🍒"],
              description: "A medley of fresh berries bursting with natural sweetness and antioxidant goodness.",
              background_color: "#8b5cf6",
              is_active: true,
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 4,
              flavor: "Citrus Splash",
              ingredients: ["🍊", "🍋", "🍇"],
              description: "Refreshing citrus blend with grape undertones for a crisp, energizing vape experience.",
              background_color: "#10b981",
              is_active: true,
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 5,
              flavor: "Tropical Paradise",
              ingredients: ["🍍", "🥥", "🍌"],
              description: "Escape to paradise with this exotic blend of pineapple, coconut, and banana.",
              background_color: "#f97316",
              is_active: true,
              created_at: "2024-01-01T00:00:00Z",
              updated_at: "2024-01-01T00:00:00Z"
            },
            {
              id: 6,
              flavor: "Apple Cinnamon",
              ingredients: ["🍎", "🍯", "🌿"],
              description: "Warm apple pie meets aromatic cinnamon for a cozy, comforting flavor profile.",
              background_color: "#dc2626",
              is_active: true,
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
            flavor: "Kiwi-Guava",
            ingredients: ["🥝", "🍈", "🍋"],
            description: "A tropical explosion of sweet kiwi and exotic guava, perfectly balanced with a refreshing citrus twist.",
            background_color: "#3b82f6",
            is_active: true,
            image_url: "/images/kivi.jpg",
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 2,
            flavor: "Mango Tango",
            ingredients: ["🥭", "🍊", "🌶️"],
            description: "Juicy mango meets zesty orange with a hint of spice for an unforgettable tropical experience.",
            background_color: "#f59e0b",
            is_active: true,
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 3,
            flavor: "Berry Blast",
            ingredients: ["🫐", "🍓", "🍒"],
            description: "A medley of fresh berries bursting with natural sweetness and antioxidant goodness.",
            background_color: "#8b5cf6",
            is_active: true,
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 4,
            flavor: "Citrus Splash",
            ingredients: ["🍊", "🍋", "🍇"],
            description: "Refreshing citrus blend with grape undertones for a crisp, energizing vape experience.",
            background_color: "#10b981",
            is_active: true,
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 5,
            flavor: "Tropical Paradise",
            ingredients: ["🍍", "🥥", "🍌"],
            description: "Escape to paradise with this exotic blend of pineapple, coconut, and banana.",
            background_color: "#f97316",
            is_active: true,
            created_at: "2024-01-01T00:00:00Z",
            updated_at: "2024-01-01T00:00:00Z"
          },
          {
            id: 6,
            flavor: "Apple Cinnamon",
            ingredients: ["🍎", "🍯", "🌿"],
            description: "Warm apple pie meets aromatic cinnamon for a cozy, comforting flavor profile.",
            background_color: "#dc2626",
            is_active: true,
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
        />
      </div>
    )
  }

  if (error && products.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Unable to load products</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Product Showcase Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id}
          className="h-screen w-full flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              ${product.background_color}20 0%, 
              ${product.background_color}40 50%, 
              ${product.background_color}10 100%)`
          }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
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

                  {/* Product Specs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-md p-0 sm:p-0.5 md:p-1 lg:p-2 xl:p-4 max-w-[180px] sm:max-w-[200px] md:max-w-xs lg:max-w-sm mx-auto lg:mx-0"
                  >
                    <div className="grid grid-cols-2 gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-center">
                      <div>
                        <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg font-bold text-white">10ml</div>
                        <div className="text-[6px] sm:text-[8px] md:text-xs text-gray-400">Volume</div>
                      </div>
                      <div>
                        <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm xl:text-lg font-bold text-white">20mg/ml</div>
                        <div className="text-[6px] sm:text-[8px] md:text-xs text-gray-400">Nicotine</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Vape Can */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center order-2 lg:order-2"
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
          </div>
        </section>
      ))}
    </div>
  )
}