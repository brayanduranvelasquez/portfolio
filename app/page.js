'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import MiniApps from '@/components/MiniApps'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import Contact from '@/components/Contact'

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="pt-16">
          <Hero />
          <Projects />
          <MiniApps />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}