'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductSeries from '@/components/ProductSeries'
import AnimatedECigarette from '@/components/AnimatedECigarette'
import Footer from '@/components/Footer'
import JarProductsPage from '@/components/JarProductsPage'

export default function Home() {
  const [showJarProducts, setShowJarProducts] = useState(false)

  if (showJarProducts) {
    return (
      <div className="min-h-screen">
        <JarProductsPage onBack={() => setShowJarProducts(false)} />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <AnimatedECigarette />
      <ProductSeries />
      
      {/* Jar Products Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Experience Our Products
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Scroll through our products with interactive jar animations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowJarProducts(true)}
            className="btn-primary text-lg px-8 py-4"
          >
            View Jar Products
          </motion.button>
        </div>
      </motion.div>

      <Footer />
    </main>
  )
}
