'use client'

import bgImage from '@/assets/background.jpg'
import { FormattedMessage } from 'react-intl'
import CustomButton from './CustomButton'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section 
      className="relative py-30 lg:px-20 rounded-b-[30px] pt-10 lg:pt-6 lg:rounded-b-[60px] lg:h-[100vh] h-[500px] flex justify-center text-start items-start flex-col px-4 sm:px-6 overflow-hidden"
      style={{ 
        backgroundImage: `url(${bgImage.src})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div> 
      
      <motion.div
        className="relative z-10 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-3xl lg:text-6xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
          <FormattedMessage id="hero_name" />
        </motion.h1>

        <motion.h1 variants={itemVariants} className="text-2xl lg:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
          <FormattedMessage id="hero_title" />
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl lg:text-xl mb-8 text-gray-400">
          <FormattedMessage id="hero_description" />
        </motion.p>

        <motion.div variants={itemVariants}>
          <CustomButton href="#collaborated" title={<FormattedMessage id="hero_button_text" />} />
        </motion.div>
      </motion.div>
    </section>
  )
}