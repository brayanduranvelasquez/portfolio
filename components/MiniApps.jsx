'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import infoLocalImg from '@/assets/info-local.png';
import whatIsMinecraftImg from '@/assets/what-is-minecraft.png';
import loginMaterialUi from '@/assets/login-material-ui.png';
import landingMaterialUi from '@/assets/template-landing-material-ui.png';
import notesApp from '@/assets/notes-app.png';
import guessIt from '@/assets/guess-it.png';
import { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import AnimatedSection from './AnimatedSection';

const miniApps = [
  {
    id: 1,
    title: 'InfoLocal',
    descriptionId: 'mini_app_info_local_description',
    link: 'https://info-local.vercel.app/',
    image: infoLocalImg,
    technologies: ['React', 'TypeScript', 'Material UI'],
  },
  {
    id: 2,
    title: 'Single static page',
    descriptionId: 'mini_app_single_static_page_description',
    link: 'https://brayanduranvelasquez.github.io/que-es-minecraft/',
    image: whatIsMinecraftImg,
    technologies: ['HTML', 'CSS', 'BulmaCSS'],
  },
  {
    id: 3,
    title: 'React App',
    descriptionId: 'mini_app_react_app_description',
    link: 'https://template-login-material-ui.vercel.app/',
    image: loginMaterialUi,
    technologies: ['React', 'TypeScript', 'Material UI'],
  },
  {
    id: 4,
    title: 'Landing page',
    descriptionId: 'mini_app_landing_page_description',
    link: 'https://template-landing-material-ui.vercel.app/',
    image: landingMaterialUi,
    technologies: ['React', 'TypeScript', 'Material UI'],
  },
  {
    id: 5,
    title: 'Notes app',
    descriptionId: 'mini_app_notes_app_description',
    link: 'https://brayanduranvelasquez.github.io/app-de-notas/',
    image: notesApp,
    technologies: ['Nuxt.js', 'SASS'],
  },
  {
    id: 6,
    title: 'Guess it',
    descriptionId: 'mini_app_guess_it_description',
    link: 'https://brayanduranvelasquez.github.io/adivina-el-numero/',
    image: guessIt,
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default function MiniApps() {
  const plugin = useRef(Autoplay({ delay: 8000, stopOnInteraction: true }));

  return (
    <AnimatedSection>
      <section id="my-drafts" className="py-20 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8">
          <FormattedMessage id="mini_apps_title" />
        </h2>

        <h2 className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
          <FormattedMessage id="mini_apps_subtitle" />
        </h2>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto px-6 scale-[0.75] lg:scale-[1]"
        >
          <CarouselContent>
            {miniApps.map((app) => (
              <CarouselItem key={app.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <a href={app.link} target="_blank" rel="noopener noreferrer">
                    <Card className="overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={app.image.src}
                          alt={app.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-all duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{app.title}</CardTitle>
                        <CardDescription>
                          <FormattedMessage id={app.descriptionId} />
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {app.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </section>
    </AnimatedSection>
  );
}
