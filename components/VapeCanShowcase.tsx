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
      {/* Hero Section */}
      <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="gradient-text">SIC! SALTS</span>
              <br />
              <span className="text-white">Vape Collection</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              Scroll to discover our premium flavors
            </p>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Each can opens as you scroll, revealing the ingredients that make each flavor unique
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white hover:text-primary-400 transition-colors duration-300"
            >
              <div className="text-center">
                <div className="text-sm mb-2">Scroll Down</div>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1 h-3 bg-white rounded-full mt-2"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vape Can Products */}
      {products.map((product, index) => (
        <VapeCan
          key={index}
          flavor={product.flavor}
          ingredients={product.ingredients}
          description={product.description}
          index={index}
          totalProducts={products.length}
        />
      ))}

      {/* Footer Section */}
      <section className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold gradient-text mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Premium nicotine salts crafted with the finest ingredients for an unforgettable vaping experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Shop All Flavors
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
