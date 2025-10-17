'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface VapeCanProps {
  flavor: string
  ingredients: string[]
  description: string
  index: number
  totalProducts: number
  imageUrl?: string
}

export default function VapeCan({ flavor, ingredients, description, index, totalProducts, imageUrl }: VapeCanProps) {
  const ref = useRef<HTMLDivElement>(null)
  const canRef = useRef<HTMLDivElement>(null)
  const ingredientsRef = useRef<HTMLDivElement>(null)
  
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [imageError, setImageError] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const isInView = useInView(ref, {
    amount: 0.3,
    margin: "-20% 0px -20% 0px"
  })

  // Transform values based on scroll progress
  const canScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const canRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const canOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height
      
      // Calculate scroll progress for this specific element
      const elementTop = rect.top
      const elementCenter = elementTop + elementHeight / 2
      const viewportCenter = windowHeight / 2
      
      // Distance from viewport center
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter)
      const maxDistance = windowHeight / 2 + elementHeight / 2
      
      // Calculate progress (0 when far, 1 when centered)
      const progress = Math.max(0, 1 - distanceFromCenter / maxDistance)
      setScrollProgress(progress)
      
      // Open can when it's near center of viewport
      const shouldOpen = progress > 0.6
      setIsOpen(shouldOpen)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={ref}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          hsl(${200 + index * 20}, 70%, 15%) 0%, 
          hsl(${220 + index * 20}, 60%, 10%) 50%, 
          hsl(${240 + index * 20}, 50%, 5%) 100%)`
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Product Number Indicator */}
      <div className="absolute top-8 left-8 text-white/50 text-sm font-mono">
        {String(index + 1).padStart(2, '0')} / {String(totalProducts).padStart(2, '0')}
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-8">
        {/* Vape Can */}
        <motion.div
          ref={canRef}
          style={{
            scale: canScale,
            rotateY: canRotateY,
            opacity: canOpacity,
          }}
          className="relative z-10"
        >
          {/* Can Container */}
          <div className="relative">
            {/* Can Body */}
            {imageUrl && !imageError ? (
              <div className="w-24 h-60 sm:w-28 sm:h-72 md:w-32 md:h-80 rounded-2xl shadow-2xl relative overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`${flavor} Vape Can`}
                  fill
                  className="object-contain rounded-2xl"
                  priority={index === 0}
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="w-24 h-60 sm:w-28 sm:h-72 md:w-32 md:h-80 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 rounded-2xl shadow-2xl relative overflow-hidden border border-slate-400/20">
              {/* Can Top */}
              <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-200 rounded-t-2xl border-b border-slate-400/30">
                <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-4 h-3 sm:w-6 sm:h-4 bg-gradient-to-b from-slate-500 to-slate-400 rounded-sm shadow-inner"></div>
              </div>

              {/* Can Label Area */}
              <div className="absolute top-6 sm:top-8 left-1.5 sm:left-2 right-1.5 sm:right-2 bottom-12 sm:bottom-16 bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-xl shadow-inner border border-slate-200/50">
                {/* Brand Logo */}
                <div className="text-center pt-3 sm:pt-4 pb-1 sm:pb-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border border-purple-400/30">
                    <span className="text-white font-bold text-xs sm:text-sm drop-shadow-sm">L</span>
                  </div>
                  <h3 className="text-slate-800 text-xs font-bold drop-shadow-sm">LUNIQ VAPE</h3>
                </div>

                {/* Flavor Name */}
                <div className="text-center px-1 sm:px-2">
                  <h2 className="text-slate-900 text-sm sm:text-base md:text-lg font-bold mb-1 drop-shadow-sm">{flavor}</h2>
                  <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 mx-auto mb-1 sm:mb-2 shadow-sm"></div>
                  <p className="text-slate-600 text-xs drop-shadow-sm">10ml / 20mg/ml</p>
                </div>

                {/* Flavor Description */}
                <div className="px-3 mt-2">
                  <p className="text-slate-700 text-xs leading-relaxed drop-shadow-sm">{description}</p>
                </div>
              </div>

              {/* Can Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-slate-400 via-slate-300 to-slate-200 rounded-b-2xl border-t border-slate-400/30">
                <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 bg-gradient-to-r from-slate-500 to-slate-400 rounded-full shadow-inner"></div>
              </div>

              {/* Opening Animation - Lid */}
              <motion.div
                animate={{
                  rotateX: isOpen ? -90 : 0,
                  y: isOpen ? -20 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut"
                }}
                className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-300 to-slate-200 rounded-t-2xl origin-bottom"
                style={{
                  transformOrigin: 'bottom center'
                }}
              >
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-slate-400 rounded-sm"></div>
              </motion.div>
            </div>
            )}

            {/* Flying Ingredients */}
            <div ref={ingredientsRef} className="absolute inset-0 pointer-events-none">
              {ingredients.map((ingredient, ingredientIndex) => (
                <motion.div
                  key={ingredientIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0,
                    x: isOpen ? (Math.random() - 0.5) * 200 : 0,
                    y: isOpen ? -Math.random() * 150 - 50 : 0,
                    rotate: isOpen ? (Math.random() - 0.5) * 360 : 0,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: ingredientIndex * 0.2,
                    ease: "easeOut"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="text-4xl animate-bounce">
                    {ingredient}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="ml-16 text-white max-w-md"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">
            {flavor}
          </h1>
          <p className="text-xl text-white/80 mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {ingredients.map((ingredient, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 text-sm"
        >
          Scroll to discover
        </motion.div>
      </motion.div>
    </section>
  )
}
