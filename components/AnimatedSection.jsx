'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import React from 'react'

export default function AnimatedSection({ children, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}