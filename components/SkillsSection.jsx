import { FormattedMessage } from 'react-intl';
import { Button } from './ui/button';
import AnimatedSection from './AnimatedSection';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'GIT' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Tailwind CSS' },
  { name: 'Express.js' },
];

export default function SkillsSection() {
  const handleButtonClick = () => {
    window.location.href = '#get-in-touch';
  };

  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      });
    });

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <AnimatedSection>
      <section className="pt-20 px-8" id="about">
        <h2 className="text-3xl font-bold mb-16 text-center">
          <FormattedMessage id="about_title" />
        </h2>

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="text-2xl pb-5 font-bold">
              <FormattedMessage id="know_me" />
            </div>

            <div className="leading-8">
              <FormattedMessage id="know_me_text" />
              <br />
              <br />
              <FormattedMessage id="know_me_text_last" />

              <div className="flex flex-row gap-2 pt-6">
                <Button onClick={handleButtonClick}>
                  <FormattedMessage id="know_me_button" />
                </Button>
                <Button onClick={() => window.open('/cv-en.pdf', '_blank')}>
                  <FormattedMessage id="cv_button" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0" ref={skillsRef}>
            <div className="text-2xl pb-5 font-bold">
              <FormattedMessage id="skills_title" />
            </div>

            <div className="flex flex-row gap-4 flex-wrap">
              {skills.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: isVisible ? 0 : 1, y: isVisible ? -20 : 0 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                  transition={{ delay: index * 0.1 }} // Transición en cascada
                  className="px-4 py-3 text-sm rounded-sm text-zinc-700 bg-gray-300 font-semibold"
                >
                  {item.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
