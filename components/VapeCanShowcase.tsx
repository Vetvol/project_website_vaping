'use client'

import { motion } from 'framer-motion'
import VapeCan from '@/components/VapeCan'

export default function VapeCanShowcase() {
  const products = [
    {
      flavor: "Kiwi-Guava",
      ingredients: ["🥝", "🍈", "🍋"],
      description: "A tropical explosion of sweet kiwi and exotic guava, perfectly balanced with a refreshing citrus twist."
    },
    {
      flavor: "Mango Tango",
      ingredients: ["🥭", "🍊", "🌶️"],
      description: "Juicy mango meets zesty orange with a hint of spice for an unforgettable tropical experience."
    },
    {
      flavor: "Berry Blast",
      ingredients: ["🫐", "🍓", "🍒"],
      description: "A medley of fresh berries bursting with natural sweetness and antioxidant goodness."
    },
    {
      flavor: "Citrus Splash",
      ingredients: ["🍊", "🍋", "🍇"],
      description: "Refreshing citrus blend with grape undertones for a crisp, energizing vape experience."
    },
    {
      flavor: "Tropical Paradise",
      ingredients: ["🍍", "🥥", "🍌"],
      description: "Escape to paradise with this exotic blend of pineapple, coconut, and banana."
    },
    {
      flavor: "Apple Cinnamon",
      ingredients: ["🍎", "🍯", "🌿"],
      description: "Warm apple pie meets aromatic cinnamon for a cozy, comforting flavor profile."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Product Showcase Sections */}
      {products.map((product, index) => (
        <section 
          key={index}
          className="h-screen w-full flex items-center justify-center relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, 
              hsl(${200 + index * 30}, 70%, 10%) 0%, 
              hsl(${220 + index * 20}, 60%, 15%) 50%, 
              hsl(${240 + index * 10}, 50%, 8%) 100%)`
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
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text mb-6">
                    {product.flavor}
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl">
                    {product.description}
                  </p>
                  
                  {/* Flavor Tags */}
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                    {product.ingredients.map((ingredient, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-lg"
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
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-md mx-auto lg:mx-0"
                  >
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">10ml</div>
                        <div className="text-sm text-gray-400">Volume</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">20mg/ml</div>
                        <div className="text-sm text-gray-400">Nicotine</div>
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
                className="flex-1 flex justify-center"
              >
                <VapeCan 
                  flavor={product.flavor}
                  ingredients={product.ingredients}
                  description={product.description}
                  index={index}
                  totalProducts={products.length}
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}