import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">2024. Made with ❤️</p>
        <div className="flex space-x-6">
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            onClick={() => window.location.href = 'https://github.com/brayanduranvelasquez'} // Cambia 'tu_usuario' por tu nombre de usuario de GitHub
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            onClick={() => window.location.href = 'mailto:brayan13s133@gmail.com'} // Correo electrónico
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}