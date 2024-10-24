'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitcher from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function Component() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const NavItems = ({ onClick }) => (
    <>
      <a href="#about" className="hover:text-primary dark:text-white dark:hover:text-primary font-semibold transition-colors" onClick={onClick}>
        <FormattedMessage id="header_about" />
      </a>
      <a href="#collaborated" className="hover:text-primary dark:hover:text-primary dark:text-white font-semibold transition-colors" onClick={onClick}>
        <FormattedMessage id="header_where_collaborated" />
      </a>
      <a href="#my-drafts" className="hover:text-primary dark:hover:text-primary dark:text-white font-semibold transition-colors" onClick={onClick}>
        <FormattedMessage id="header_my_drafts" />
      </a>
      <a href="#get-in-touch" className="hover:text-primary dark:hover:text-primary dark:text-white font-semibold transition-colors" onClick={onClick}>
        <FormattedMessage id="header_get_in_touch" />
      </a>
    </>
  );

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  const headerVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '100%', 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1],
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50 px-4 py-4">
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial="hidden"
            animate="visible"
            variants={headerVariants}
            className="rounded-full max-w-5xl w-full py-2 px-6 bg-white dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <motion.a variants={childVariants} href="#" className="text-2xl font-bold text-black dark:text-white">
                Brayan
              </motion.a>

              <motion.nav variants={childVariants} className="hidden md:flex space-x-6">
                <NavItems onClick={() => {}} />
              </motion.nav>

              <motion.div variants={childVariants} className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-gray-600 dark:text-gray-300">
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>

                <LanguageSwitcher />

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden text-gray-600 dark:text-gray-300" onClick={() => setIsOpen(true)}>
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
                    <nav className="flex flex-col space-y-4 mt-8">
                      <NavItems onClick={handleNavItemClick} />
                    </nav>
                  </SheetContent>
                </Sheet>
              </motion.div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
}