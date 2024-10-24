'use client';

import bgImage from '@/assets/background.jpg';
import { FormattedMessage } from 'react-intl';
import CustomButton from './CustomButton';
import { motion } from 'framer-motion';
import { FlipWords } from './flip-words';
import { useParams } from 'next/navigation';

export default function Hero() {
  const params = useParams();
  const { locale } = params;

  const words = [
    'React Enthusiast',
    'Next.js Fan',
    'Tailwind CSS Geek',
    'JavaScript Dev',
    'CSS Wizard',
    'HTML Lover',
    'Web UI',
    'Responsive Design',
  ];

  const palabras = [
    'Entusiasta de React',
    'Fan de Next.js',
    'Experto en Tailwind CSS',
    'Desarrollador de JavaScript',
    'Mago del CSS',
    'Amante del HTML',
    'Interfaz Web',
    'Diseño Responsivo',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      className="relative py-30 lg:px-20 rounded-b-[30px] pt-10 lg:pt-6 lg:rounded-b-[60px] lg:h-[100vh] h-[600px] flex justify-center text-center items-center flex-col px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <motion.div className="relative z-10 max-w-2xl" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1
          variants={itemVariants}
          className="text-3xl lg:text-6xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          <FormattedMessage id="hero_name" />
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="text-2xl lg:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          <FormattedMessage id="hero_title" /> <br />
          <FlipWords
            words={locale === 'es' ? palabras : words}
            className="text-blue-500 font-bold dark:text-blue-500"
          />
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl lg:text-xl mb-8 text-gray-400">
          <FormattedMessage id="hero_description" />
        </motion.p>

        <div className="w-full flex justify-center items-center">
          <motion.div variants={itemVariants}>
            <CustomButton href="#collaborated" title={<FormattedMessage id="hero_button_text" />} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
