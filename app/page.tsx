'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProductSeries from '@/components/ProductSeries'
import AnimatedECigarette from '@/components/AnimatedECigarette'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <AnimatedECigarette />
      <ProductSeries />
      <Footer />
    </main>
  )
}
