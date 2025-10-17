'use client'

import { motion } from 'framer-motion'
import JarProduct from '@/components/JarProduct'
import { ArrowLeft } from 'lucide-react'

interface JarProductsPageProps {
  onBack: () => void
}

export default function JarProductsPage({ onBack }: JarProductsPageProps) {
  const products = [
    {
      name: "Wild Strawberry Ice",
      description: "Bursting with the sweet flavor of wild strawberries, this refreshing vape is perfectly balanced by a cool exhale.",
      series: "SIC! SALTS",
      flavor: "Wild Strawberry"
    },
    {
      name: "Raspberry Ice",
      description: "Indulge in the irresistible flavor of juicy raspberries, perfectly complemented by a touch of cooler.",
      series: "SIC! SALTS",
      flavor: "Raspberry"
    },
    {
      name: "Cherry Ice",
      description: "Experience the bold, sweet taste of cherries with a frosty finish, vibrant flavor that lingers with every puff.",
      series: "SIC! SALTS",
      flavor: "Cherry"
    },
    {
      name: "Strawberry Mojito",
      description: "A perfect blend of sweet strawberries and refreshing mojito, offering a vibrant, fruity flavor with a minty kick.",
      series: "MOJITO",
      flavor: "Strawberry Mojito"
    },
    {
      name: "Green Tea Ice",
      description: "Fragrant green tea leaves combined with a cooling sensation, delicate and nuanced flavor profile.",
      series: "THEA",
      flavor: "Green Tea"
    },
    {
      name: "Elderflower Lychee Ice",
      description: "Delicate elderflower blends with sweet lychee, creating a refreshing and floral flavor with a fruity twist.",
      series: "DUPLEX",
      flavor: "Elderflower Lychee"
    },
    {
      name: "Passion Mojito",
      description: "A zesty fusion of tangy passionfruit and refreshing mojito, delivering a tropical burst with a cool, minty finish.",
      series: "MOJITO",
      flavor: "Passion Mojito"
    },
    {
      name: "Blueberry Ice",
      description: "Dive into the juicy depths of ripe blueberries, their natural sweetness enhanced by a hint of frosty coolness.",
      series: "SIC! SALTS",
      flavor: "Blueberry"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-emerald-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </motion.button>
            
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">SIC! SALTS</h1>
              <p className="text-emerald-300">Scroll to discover flavors</p>
            </div>
            
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </motion.div>

      {/* Products */}
      <div className="pt-20">
        {products.map((product, index) => (
          <JarProduct
            key={index}
            name={product.name}
            description={product.description}
            series={product.series}
            flavor={product.flavor}
            index={index}
          />
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black/50 backdrop-blur-md border-t border-emerald-500/20 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Discover More</h3>
          <p className="text-emerald-300 mb-6">
            Experience the world of intense sensations with our premium nicotine salts
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            View All Products
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
