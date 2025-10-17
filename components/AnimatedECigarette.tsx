'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimatedECigarette() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('e-cigarette-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="e-cigarette-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Experience Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge vaping technology with smooth animations and premium design
          </p>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* E-Cigarette Body */}
            <motion.div
              animate={isVisible ? {
                rotateY: [0, 5, -5, 0],
                scale: [1, 1.02, 1],
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-16 h-80 bg-gradient-to-b from-slate-800 to-slate-900 rounded-full shadow-2xl"
            >
              {/* LED Light */}
              <motion.div
                animate={isVisible ? {
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.1, 1],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary-400 rounded-full shadow-lg"
                style={{
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)'
                }}
              />

              {/* Vapor Effect */}
              <motion.div
                animate={isVisible ? {
                  y: [0, -20, -40, -60],
                  opacity: [0, 0.8, 0.4, 0],
                  scale: [0.5, 1, 1.5, 2],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-t from-transparent to-white/30 rounded-full blur-sm"
              />

              {/* Charging Port */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-slate-700 rounded-sm" />

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full cursor-pointer shadow-lg"
              >
                <motion.div
                  animate={isVisible ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full bg-primary-400 rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            {isVisible && (
              <>
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-10 -left-10 w-4 h-4 bg-accent-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, -15, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-8 -right-8 w-3 h-3 bg-primary-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    y: [0, -25, 0],
                    x: [0, 20, 0],
                    rotate: [0, 90, 180],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute top-20 -right-12 w-2 h-2 bg-accent-500 rounded-full opacity-60"
                />
              </>
            )}
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              title: "Smooth Draw",
              description: "Experience the smoothest draw with our advanced airflow technology",
              icon: "💨"
            },
            {
              title: "Long Battery Life",
              description: "Enjoy extended vaping sessions with our high-capacity battery",
              icon: "🔋"
            },
            {
              title: "Premium Build",
              description: "Crafted with premium materials for durability and style",
              icon: "✨"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="card p-6 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
