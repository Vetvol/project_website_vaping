'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface JarProductProps {
  name: string
  description: string
  series: string
  flavor: string
  index: number
}

export default function JarProduct({ name, description, series, flavor, index }: JarProductProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    threshold: 0.3,
    margin: "-100px 0px -100px 0px"
  })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Animation values
  const jarScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const flavorY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, 100])
  const flavorOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Determine if flavor should be visible based on scroll direction and position
  const shouldShowFlavor = isInView && scrollDirection === 'up'

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md mx-auto">
        {/* Jar Container */}
        <motion.div
          style={{ scale: jarScale }}
          className="relative"
        >
          {/* Main Jar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-emerald-800 via-emerald-900 to-black rounded-2xl p-8 shadow-2xl overflow-hidden"
            style={{
              background: `
                linear-gradient(135deg, #065f46 0%, #064e3b 50%, #000000 100%),
                radial-gradient(circle at 30% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
              `
            }}
          >
            {/* Jar Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>

            {/* Brand Logo Area */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <h2 className="text-white text-3xl font-bold mb-2">{series}</h2>
              <div className="w-24 h-1 bg-emerald-400 mx-auto"></div>
            </div>

            {/* Product Name - Large Stylized Text */}
            <div className="text-center mb-6">
              <motion.h1 
                className="text-white text-4xl font-bold mb-2"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                {name.split(' ')[0]}
              </motion.h1>
              <p className="text-emerald-200 text-sm">SALT • 10ml / 20mg/ml</p>
            </div>

            {/* Jar Bottom Section - Where flavor will slide out */}
            <div className="relative h-16 bg-emerald-700 rounded-b-2xl overflow-hidden">
              {/* Flavor Text - Slides out from jar */}
              <motion.div
                style={{
                  y: shouldShowFlavor ? 0 : 100,
                  opacity: shouldShowFlavor ? 1 : 0
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center bg-emerald-600"
              >
                <span className="text-white font-semibold text-lg">
                  {flavor}
                </span>
              </motion.div>
              
              {/* Jar Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-emerald-800 to-transparent"></div>
            </div>
          </motion.div>

          {/* Warning Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 bg-white border-2 border-gray-300 rounded-lg p-3 text-center"
          >
            <p className="text-black text-xs font-semibold">
              Product contains nicotine, which causes rapid addiction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
