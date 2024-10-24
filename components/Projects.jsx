'use client';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { useEffect, useState, useRef } from 'react';

import goosesmurfs from '@/assets/goosesmurfs.png';
import cbaConference from '@/assets/cba-conference.png';
import brewers from '@/assets/brewers.png';
import cenipa from '@/assets/cenipa.png';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    id: 1,
    title: 'GooseSmurfs',
    descriptionId: 'project_goosesmurfs_description',
    link: 'https://www.goosesmurfs.com/',
    image: goosesmurfs,
  },
  {
    id: 2,
    title: 'CBA Conference 2024',
    descriptionId: 'project_cba_conference_description',
    link: 'https://cbaconf.com/',
    image: cbaConference,
  },
  {
    id: 3,
    title: 'Brewers Portal',
    descriptionId: 'project_brewers_description',
    link: 'https://brewers.canadianbrewingawards.com/',
    image: brewers,
  },
  {
    id: 4,
    title: 'CENIPA',
    descriptionId: 'project_cenipa_description',
    link: 'https://cenipa.web.ve/panel',
    image: cenipa,
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const observerRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectIndex = observerRef.current.indexOf(entry.target);
          if (projectIndex !== -1 && !visibleProjects.includes(projectIndex)) {
            setVisibleProjects((prev) => [...prev, projectIndex]);
            observer.unobserve(entry.target); // Dejar de observar después de que se vuelva visible
          }
        }
      });
    });

    observerRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <AnimatedSection>
      <section
        id="collaborated"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10"
      >
        <h2 className="text-4xl font-bold mb-8 text-center">
          <FormattedMessage id="projects_title" />
        </h2>

        <h2 className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
          <FormattedMessage id="projects_subtitle" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => (observerRef.current[index] = el)}
              className={`overflow-hidden group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    <FormattedMessage id={project.descriptionId} />
                  </CardDescription>
                </CardHeader>
              </a>
            </Card>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
