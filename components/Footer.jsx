import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">&copy; 2023 Your Name. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}