'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProductSeries() {
  const [activeSeries, setActiveSeries] = useState(0)

  const series = [
    {
      name: "SIC! SALTS",
      description: "Introducing the ultimate nicotine salt series for those who crave simplicity with a twist. Enjoy a range of fruity flavors infused with a refreshing ice-cool sensation, and beloved beverages like cola energy drink and cappuccino.",
      products: [
        { name: "WILD STRAWBERRY ICE", description: "Bursting with the sweet flavor of wild strawberries, this refreshing vape is perfectly balanced by a cool exhale." },
        { name: "RASPBERRY ICE", description: "Indulge in the irresistible flavor of juicy raspberries, perfectly complemented by a touch of cooler." },
        { name: "CHERRY ICE", description: "Experience the bold, sweet taste of cherries with a frosty finish, vibrant flavor that lingers with every puff." },
        { name: "CRANBERRY ICE", description: "Crisp blend of tart cranberries and cooling ice for a refreshing, invigorating taste." },
        { name: "POMEGRANATE ICE", description: "Experience the vibrant fusion, succulent pomegranate seeds meet a refreshing chill for a revitalizing vape." },
        { name: "FOREST FRUITS ICE", description: "Immerse yourself in the lush depths of the forest with Forest Fruits Ice. A delicious blend of ripe berries." },
        { name: "GRAPE ICE", description: "Treat your taste buds to the sweetness of ripe grapes, elevated by a cool and refreshing sensation." },
        { name: "BLACKCURRANT ICE", description: "Plump blackcurrants burst with tangy goodness, perfectly paired with a cool exhale that refreshes with every puff." },
        { name: "BLUEBERRY ICE", description: "Dive into the juicy depths of ripe blueberries, their natural sweetness enhanced by a hint of frosty coolness." },
        { name: "ENERGY DRINK ICE", description: "Get ready to power up! This electrifying blend combines the flavor of energy drink with a chilling twist." },
        { name: "ICE CANDY", description: "A unique blend of fruity freshness and icy refreshment, leaving a delightful chill on the palate." },
        { name: "ALOE VERA", description: "Enjoy the pure, refreshing taste of aloe vera with a hint of frosty freshness, delivering a smooth and calming flavor." },
        { name: "GREEN GRAPE ICE", description: "Enjoy the cool, crisp taste of green grapes with a hint of sourness, for a refreshingly tart and sweet treat." },
        { name: "PEAR ICE", description: "Savor the crisp, refreshing flavor of ripe pears, perfectly complemented by a touch of icy coolness." },
        { name: "GOOSEBERRY ICE", description: "Indulge in the tart, juicy flavor of gooseberry, smooth and invigorating vape experience." },
        { name: "CAPPUCCINO", description: "Indulge in the rich and creamy flavor of freshly brewed cappuccino. The bold flavor of espresso with milk." },
        { name: "COLA ICE", description: "Experience the nostalgic taste of your favorite soda, transformed into a refreshing vape." }
      ]
    },
    {
      name: "DUPLEX",
      description: "Introducing DUPLEX, a dynamic nicotine salt series that harmoniously blends two exceptional flavors. Enjoy the delightful pairing of sweet strawberries and tangy rhubarb, promising a symphony of taste sensations with every puff.",
      products: [
        { name: "ELDERFLOWER LYCHEE ICE", description: "Delicate elderflower blends with sweet lychee, creating a refreshing and floral flavor with a fruity twist." },
        { name: "ALOE GRAPE", description: "Refreshing aloe pairs beautifully with sweet grape, creating a smooth, balanced flavor." },
        { name: "STRAWBERRY RHUBARB", description: "Juicy strawberries are perfectly complemented by tangy rhubarb, creating a delicious flavor profile." },
        { name: "BLACKBERRY RASPBERRY", description: "Ripe raspberries combined with blackberries create a perfect harmony of flavors." },
        { name: "BLACKCURRANT GRAPE", description: "A unique combination of juicy, sweet grapes and intensely sour blackcurrant fruity balanced composition." },
        { name: "BLACKCURRANT LIME", description: "A refreshing mix of juicy blackcurrant and zesty lime for a bold, tangy burst of flavor." },
        { name: "BLUEBERRY POMAGRANATE", description: "Fusion of ripe blueberries and rich pomegranate, delivering a smooth and refreshing burst of flavor." },
        { name: "RASPBERRY CHERRY", description: "Vibrant fusion of juicy raspberries and sweet cherries, delivering a bold and refreshing burst of fruity flavor." },
        { name: "STRAWBERRY GRAPE", description: "Delicious blend of sweet strawberries and juicy grapes, perfectly balanced for a smooth and fruity taste." },
        { name: "STRAWBERRY LIME", description: "Refreshing mix of sweet strawberries and zesty lime for a bright, fruity burst of flavor." },
        { name: "STRAWBERRY WILD STRAWBERRY", description: "Delightful mix of ripe strawberries and sweet wild strawberries, offering a fresh and juicy berry flavor." },
        { name: "WATERMELON GRAPE", description: "Refreshing fusion of juicy watermelon and sweet grapes, delivering a smooth and fruity flavor burst." },
        { name: "COFFEE TOBACCO", description: "Blend of bold roasted coffee and smooth tobacco, offering a deep, satisfying flavor with a refined finish." },
        { name: "COOKIE TOBACCO", description: "Smooth mix of sweet buttery cookie and rich tobacco, creating a warm and satisfying flavor experience." }
      ]
    },
    {
      name: "THEA",
      description: "A refreshing nicotine salt series with a splash of tea. Indulge in the serene essence of green tea, the invigorating chill of mint tea, the sweet allure of peach tea, the zesty burst of lemon tea, and the tangy excitement of raspberry tea, all enhanced with a cooling effect.",
      products: [
        { name: "GREEN TEA ICE", description: "Fragrant green tea leaves combined with a cooling sensation, delicate and nuanced flavor profile." },
        { name: "MINT TEA ICE", description: "Step into a world of cool tranquility, Experience the rejuvenating essence of peppermint tea." },
        { name: "LEMON TEA ICE", description: "Immerse yourself in the tangy zest of freshly squeezed lemons, delicately blended with the comforting tea." },
        { name: "PEACH TEA ICE", description: "Indulge in the succulent sweetness of ripe peaches, skillfully infused into a soothing tea base." },
        { name: "RASPBERRY TEA ICE", description: "Juicy raspberries are balanced with tea, creating a harmonious blend of sweetness and depth." },
        { name: "ELDERFLOWER TEA ICE", description: "Fragrant elderflower is balanced with tea, creating a delicate blend of floral sweetness and refreshing depth." },
        { name: "HIBISCUS TEA ICE", description: "Hibiscus tea offers a naturally fruity and sour flavor, balanced with a touch of sweetness for a refreshing vape." },
        { name: "PEAR TEA ICE", description: "A smooth blend of juicy pear and refreshing iced tea, finished with a cooling touch of ice." }
      ]
    },
    {
      name: "MOJITO",
      description: "Introducing the new Mojito series, where vibrant fruit meets a refreshing twist! Enjoy the cool, minty goodness of Strawberry Mojito and Passionfruit Mojito, delivering a perfectly chilled vape experience.",
      products: [
        { name: "PASSION MOJITO", description: "A zesty fusion of tangy passionfruit and refreshing mojito, delivering a tropical burst with a cool, minty finish." },
        { name: "STRAWBERRY MOJITO", description: "A perfect blend of sweet strawberries and refreshing mojito, offering a vibrant, fruity flavor with a minty kick." },
        { name: "RASPBERRY MOJITO", description: "A vibrant mix of sweet raspberries, zesty lime, and fresh mint, finished with an icy mojito twist." },
        { name: "WATERMELON MOJITO", description: "A refreshing mix of sweet watermelon, zesty lime, and a hint of mint for a cool, tropical twist." },
        { name: "PAPAYA MOJITO", description: "An exotic fusion of sweet papaya, fresh lime, and cool mint for a vibrant mojito-inspired flavor." }
      ]
    }
  ]

  return (
    <section id="series" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Our Product Series
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our carefully crafted collection of premium vaping experiences
          </p>
        </motion.div>

        {/* Series Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {series.map((seriesItem, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveSeries(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSeries === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {seriesItem.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Series Content */}
        <motion.div
          key={activeSeries}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              {series[activeSeries].name}
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              {series[activeSeries].description}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {series[activeSeries].products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card p-6 group"
              >
                <div className="h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-4xl"
                  >
                    {product.name.includes('STRAWBERRY') ? '🍓' :
                     product.name.includes('RASPBERRY') ? '🫐' :
                     product.name.includes('CHERRY') ? '🍒' :
                     product.name.includes('GRAPE') ? '🍇' :
                     product.name.includes('BLUEBERRY') ? '🫐' :
                     product.name.includes('COFFEE') ? '☕' :
                     product.name.includes('TEA') ? '🍵' :
                     product.name.includes('MOJITO') ? '🍹' :
                     '💨'}
                  </motion.div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {product.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
