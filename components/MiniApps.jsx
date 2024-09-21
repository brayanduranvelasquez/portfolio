'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import infoLocalImg from "@/assets/info-local.png"
import whatIsMinecraftImg from "@/assets/what-is-minecraft.png"
import loginMaterialUi from "@/assets/login-material-ui.png"
import landingMaterialUi from "@/assets/template-landing-material-ui.png"
import notesApp from "@/assets/notes-app.png"
import guessIt from "@/assets/guess-it.png"

const miniApps = [
  {
    id: 1,
    title: 'InfoLocal',
    description: 'Static web. Built with React, Typescript, Material UI.',
    link: 'https://info-local.vercel.app/',
    image: infoLocalImg,
    technologies: ['React', 'TypeScript', 'Material UI']
  },
  {
    id: 2,
    title: 'Static Web',
    description: 'Single static web. Built with BulmaCSS, and also using SASS.',
    link: 'https://brayanduranvelasquez.github.io/que-es-minecraft/',
    image: whatIsMinecraftImg,
    technologies: ['BulmaCSS', 'SASS']
  },
  {
    id: 3,
    title: 'Login Web',
    description: 'Static Log-in and Sign-up. React, Typescript, Material UI.',
    link: 'https://template-login-material-ui.vercel.app/',
    image: loginMaterialUi,
    technologies: ['React', 'TypeScript', 'Material UI']
  },
  {
    id: 4,
    title: 'Landing page',
    description: 'Styled landing page. Used React, Typescript y Material UI.',
    link: 'https://template-landing-material-ui.vercel.app/',
    image: landingMaterialUi,
    technologies: ['React', 'TypeScript', 'Material UI']
  },
  {
    id: 5,
    title: 'Notes App',
    description: 'When I was learning about Nuxtjs (Vuejs). Using SASS as well.',
    link: 'https://brayanduranvelasquez.github.io/app-de-notas/',
    image: notesApp,
    technologies: ['Nuxt.js', 'Vue.js', 'SASS']
  },
  {
    id: 6,
    title: 'Guess it!',
    description: 'Mini-game. My first app using HTML, CSS and JS.',
    link: 'https://brayanduranvelasquez.github.io/adivina-el-numero/',
    image: guessIt,
    technologies: ['HTML', 'CSS', 'JavaScript']
  }
]

export default function MiniApps() {
  return (
    <section id="my-drafts" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">My Drafts</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {miniApps.map((app) => (
            <CarouselItem key={app.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={app.image.src}
                      alt={app.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-all duration-300"
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
                  <CardFooter>
                    <Button asChild>
                      <a href={app.link} target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}