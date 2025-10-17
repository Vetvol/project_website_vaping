'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductSeries from '@/components/ProductSeries'
import AnimatedECigarette from '@/components/AnimatedECigarette'
import Footer from '@/components/Footer'

export default function Home() {
  const products = [
    {
      name: "Wild Strawberry Ice",
      series: "SIC! SALTS",
      flavors: ["🍓 Strawberry", "❄️ Ice"]
    },
    {
      name: "Raspberry Ice", 
      series: "SIC! SALTS",
      flavors: ["🫐 Raspberry", "❄️ Ice"]
    },
    {
      name: "Cherry Ice",
      series: "SIC! SALTS", 
      flavors: ["🍒 Cherry", "❄️ Ice"]
    },
    {
      name: "Strawberry Mojito",
      series: "MOJITO",
      flavors: ["🍓 Strawberry", "🍃 Mint", "🍋 Lime"]
    },
    {
      name: "Green Tea Ice",
      series: "THEA",
      flavors: ["🍵 Green Tea", "❄️ Ice"]
    },
    {
      name: "Elderflower Lychee Ice",
      series: "DUPLEX", 
      flavors: ["🌸 Elderflower", "🥭 Lychee", "❄️ Ice"]
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const jarContainers = document.querySelectorAll('.jar-product-container')
      
      jarContainers.forEach((container) => {
        const rect = container.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isInView) {
          container.classList.add('in-view')
        } else {
          container.classList.remove('in-view')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <AnimatedECigarette />
      <ProductSeries />
      
      {/* Jar Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scroll down to see flavors fly out of each jar
            </p>
          </motion.div>

          {/* Jar Products Grid - Single Column */}
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="jar-product-container flex justify-center"
              >
                {/* Jar */}
                <div className="jar-card relative bg-gradient-to-br from-emerald-800 via-emerald-900 to-black rounded-2xl p-8 shadow-2xl overflow-hidden w-80 h-96">
                  {/* Jar Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
                  </div>

                  {/* Brand Logo */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">S</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">{product.series}</h3>
                    <div className="w-20 h-1 bg-emerald-400 mx-auto"></div>
                  </div>

                  {/* Product Name */}
                  <div className="text-center mb-6">
                    <h4 className="text-white text-2xl font-bold mb-3">
                      {product.name.split(' ')[0]}
                    </h4>
                    <p className="text-emerald-200 text-sm">SALT • 10ml / 20mg/ml</p>
                  </div>

                  {/* Jar Bottom - Where flavors will fly out */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-emerald-700 rounded-b-2xl overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-emerald-800 to-transparent"></div>
                  </div>

                  {/* Flying Flavors */}
                  <div className="flying-flavors absolute bottom-20 left-0 right-0 h-20">
                    {product.flavors.map((flavor, flavorIndex) => (
                      <div
                        key={flavorIndex}
                        className={`flavor-item flavor-${flavorIndex} absolute bg-emerald-600 text-white px-4 py-3 rounded-lg text-sm font-semibold shadow-lg`}
                        style={{
                          left: `${15 + flavorIndex * 25}%`,
                          bottom: '0px',
                          transform: 'translateY(100px)',
                          opacity: '0'
                        }}
                      >
                        {flavor}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warning Label */}
                <div className="mt-6 bg-white border-2 border-gray-300 rounded-lg p-4 text-center max-w-md mx-auto">
                  <p className="text-black text-xs font-semibold">
                    Product contains nicotine, which causes rapid addiction.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
