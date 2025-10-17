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
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-16">
        {/* Vape Can */}
        <motion.div
          ref={canRef}
          style={{
            scale: canScale,
            rotateY: canRotateY,
            opacity: canOpacity,
          }}
          className="relative z-10 w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
        >
          {/* Can Container */}
          <div className="relative w-32 h-80 sm:w-36 sm:h-90 md:w-40 md:h-100 lg:w-44 lg:h-110 xl:w-48 xl:h-120">
            {/* Can Body */}
            {imageUrl && !imageError ? (
              <div className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden">
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
              <div className="absolute inset-0 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 rounded-2xl shadow-2xl overflow-hidden border border-slate-400/20">
              {/* Can Top */}
              <div className="absolute top-0 left-0 right-0 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-200 rounded-t-2xl border-b border-slate-400/30">
                <div className="absolute top-2 sm:top-2.5 md:top-3 lg:top-3.5 xl:top-4 left-1/2 transform -translate-x-1/2 w-6 h-4 sm:w-7 sm:h-5 md:w-8 md:h-6 lg:w-9 lg:h-7 xl:w-10 xl:h-8 bg-gradient-to-b from-slate-500 to-slate-400 rounded-sm shadow-inner"></div>
              </div>

              {/* Can Label Area */}
              <div className="absolute top-8 sm:top-10 md:top-12 lg:top-14 xl:top-16 left-2 sm:left-2.5 md:left-3 lg:left-3.5 xl:left-4 right-2 sm:right-2.5 md:right-3 lg:right-3.5 xl:right-4 bottom-16 sm:bottom-18 md:bottom-20 lg:bottom-22 xl:bottom-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-xl shadow-inner border border-slate-200/50">
                {/* Brand Logo */}
                <div className="text-center pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8 pb-2 sm:pb-2.5 md:pb-3 lg:pb-3.5 xl:pb-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 mx-auto mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border border-purple-400/30">
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-sm">L</span>
                  </div>
                  <h3 className="text-slate-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold drop-shadow-sm">LUNIQ VAPE</h3>
                </div>

                {/* Flavor Name */}
                <div className="text-center px-2 sm:px-2.5 md:px-3 lg:px-3.5 xl:px-4">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 drop-shadow-sm">{flavor}</h2>
                  <div className="w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 h-1 sm:h-1.5 md:h-2 lg:h-2.5 xl:h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 mx-auto mb-2 sm:mb-2.5 md:mb-3 lg:mb-3.5 xl:mb-4 shadow-sm"></div>
                  <p className="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl drop-shadow-sm">10ml / 20mg/ml</p>
                </div>

                {/* Flavor Description */}
                <div className="px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8">
                  <p className="text-slate-700 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed drop-shadow-sm">{description}</p>
                </div>
              </div>

              {/* Can Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24 bg-gradient-to-t from-slate-400 via-slate-300 to-slate-200 rounded-b-2xl border-t border-slate-400/30">
                <div className="absolute bottom-2 sm:bottom-2.5 md:bottom-3 lg:bottom-3.5 xl:bottom-4 left-1/2 transform -translate-x-1/2 w-8 sm:w-9 md:w-10 lg:w-11 xl:w-12 h-1 sm:h-1.5 md:h-2 lg:h-2.5 xl:h-3 bg-gradient-to-r from-slate-500 to-slate-400 rounded-full shadow-inner"></div>
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

          {/* Product Info Near Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            {/* Product Title */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 gradient-text">
              {flavor}
            </h2>
            
            {/* Product Description */}
            <p className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed max-w-md mx-auto">
              {description}
            </p>
            
            {/* Flavor Tags */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {ingredients.map((ingredient, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white/20 rounded-full text-xs sm:text-sm font-medium"
                >
                  {ingredient}
                </span>
              ))}
            </div>
            
            {/* Product Specs */}
            <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 shadow-lg max-w-xs mx-auto">
              <div className="text-base font-semibold text-white text-center">
                10ml / 20mg/ml
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Product Info - Hidden */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
            {flavor}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
            {ingredients.map((ingredient, idx) => (
              <span
                key={idx}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-white/20 rounded-full text-sm sm:text-base font-medium"
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
