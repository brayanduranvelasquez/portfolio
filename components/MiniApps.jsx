'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"

import infoLocalImg from "@/assets/info-local.png"
import whatIsMinecraftImg from "@/assets/what-is-minecraft.png"
import loginMaterialUi from "@/assets/login-material-ui.png"
import landingMaterialUi from "@/assets/template-landing-material-ui.png"
import notesApp from "@/assets/notes-app.png"
import guessIt from "@/assets/guess-it.png"
import { useRef } from 'react'

const miniApps = [
  {
    id: 1,
    title: 'InfoLocal',
    description: 'Experimenting with Material UI Design',
    link: 'https://info-local.vercel.app/',
    image: infoLocalImg,
    technologies: ['React', 'TypeScript', 'Material UI']
  },
  {
    id: 2,
    title: 'Single static page',
    description: 'Static web',
    link: 'https://brayanduranvelasquez.github.io/que-es-minecraft/',
    image: whatIsMinecraftImg,
    technologies: ["HTML", "CSS", 'BulmaCSS']
  },
  {
    id: 3,
    title: 'React App',
    description: 'Login and signup UI',
    link: 'https://template-login-material-ui.vercel.app/',
    image: loginMaterialUi,
    technologies: ['React', 'TypeScript', 'Material UI']
  },
  {
    id: 4,
    title: 'Landing page',
    description: 'Styled landing page',
    link: 'https://template-landing-material-ui.vercel.app/',
    image: landingMaterialUi,
    technologies: ['React', 'TypeScript', 'Material UI']
  },
  {
    id: 5,
    title: 'Notes app',
    description: 'My first app',
    link: 'https://brayanduranvelasquez.github.io/app-de-notas/',
    image: notesApp,
    technologies: ['Nuxt.js', 'SASS']
  },
  {
    id: 6,
    title: 'Guess it',
    description: 'Mini-game',
    link: 'https://brayanduranvelasquez.github.io/adivina-el-numero/',
    image: guessIt,
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
]

export default function MiniApps() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )
  
  return (
    <section id="my-drafts" className="py-20  sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">My Drafts</h2>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
          
        }}
        plugins={[plugin.current]}
        className="w-full max-w-5xl mx-auto px-6"
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
                      <CardDescription>{app.description}</CardDescription>
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

        {/* Botones para pantallas grandes */}
        <div className="hidden lg:flex justify-between mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      
    </section>
  )
}