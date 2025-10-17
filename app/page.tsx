'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductSeries from '@/components/ProductSeries'
import AnimatedECigarette from '@/components/AnimatedECigarette'
import Footer from '@/components/Footer'
import VapeCanShowcase from '@/components/VapeCanShowcase'

export default function Home() {
  const [showVapeShowcase, setShowVapeShowcase] = useState(false)

  if (showVapeShowcase) {
    return (
      <div className="min-h-screen">
        <VapeCanShowcase />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <AnimatedECigarette />
      <ProductSeries />
      
      {/* Vape Can Showcase Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold gradient-text mb-6">
            Interactive Vape Showcase
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Scroll through our vape cans and watch them open with flying ingredients
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowVapeShowcase(true)}
            className="btn-primary text-lg px-8 py-4"
          >
            View Vape Can Showcase
          </motion.button>
        </div>
      </motion.div>

      <Footer />
    </main>
  )
}
