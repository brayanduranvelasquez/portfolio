'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitcher from './LanguageSwitcher';
import { FormattedMessage } from 'react-intl';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const NavItems = ({ onClick }) => (
    <>
      <a href="#collaborated" className="hover:text-primary dark:text-white font-semibold transition-colors" onClick={onClick}>
        <FormattedMessage id="header_where_collaborated" />
      </a>
      <a href="#my-drafts" className="hover:text-primary dark:text-white font-semibold transition-colors" onClick={onClick}>
        <FormattedMessage id="header_my_drafts" />
      </a>
      <a href="#get-in-touch" className="hover:text-primary dark:text-white font-semibold transition-colors" onClick={onClick}>
        <FormattedMessage id="header_get_in_touch" />
      </a>
    </>
  );

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`py-4 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 right-0 border-b bg-white dark:bg-gray-900 backdrop-blur-sm z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Brayan
        </a>

        <div className="flex items-center space-x-4">
          <div className='flex flex-row gap-4 items-center'>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <LanguageSwitcher />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className={"bg-white text-gray-800 dark:bg-gray-800 dark:text-white"}>
              <nav className="flex flex-col space-y-4 mt-8">
                <NavItems onClick={handleNavItemClick} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}