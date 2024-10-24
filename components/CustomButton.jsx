import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const CustomButton = ({ title, href }) => {
  return (
    <div className="flex min-h-[80px] w-full max-w-[300px] items-center justify-start text-center">
      <Button text={title} href={href} />
    </div>
  );
};

const Button = ({ text, href }) => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: 'forwards' });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate({ left: '50%' }, { duration: 100, fill: 'forwards' });
    };

    btnRef.current.addEventListener('mousemove', handleMouseMove);
    btnRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener('mousemove', handleMouseMove);
      btnRef.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.a
      href={href}
      ref={btnRef}
      className="relative w-[500px] overflow-hidden rounded-lg bg-blue-900/20 px-4 py-3 text-lg font-medium text-white"
      whileTap={{ scale: 0.985 }}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">{text}</span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-52 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.a>
  );
};

export default CustomButton;
