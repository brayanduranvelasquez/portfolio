import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from "next/image"

import goosesmurfs from '@/assets/goosesmurfs.png'
import cbaConference from '@/assets/cba-conference.png'
import brewers from '@/assets/brewers.png'
import cenipa from '@/assets/cenipa.png'

const projects = [
  {
    id: 1,
    title: 'GooseSmurfs',
    description: 'Take your LOL experience to the next level. Their accounts give you a head start on your ranked journey.',
    link: 'https://www.goosesmurfs.com/',
    image: goosesmurfs,
  },
  {
    id: 2,
    title: 'CBA Conference 2024',
    description: 'It is a prestigious and renowned event that celebrates the exceptional quality and diversity of Canadian beer.',
    link: 'https://cbaconf.com/',
    image: cbaConference,
  },
  {
    id: 3,
    title: 'Brewers Portal',
    description: 'The Brewers Portal is a platform for breweries to register, manage their information, and submit entries.',
    link: 'https://brewers.canadianbrewingawards.com/',
    image: brewers,
  },
  {
    id: 4,
    title: 'CENIPA',
    description: 'CENIPA (National Center for Fisheries and Aquaculture Research)',
    link: 'https://cenipa.web.ve/panel',
    image: cenipa,
  }
]

export default function Projects() {
  return (
    <section id="collaborated" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects where I've collaborated</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group hover:scale-105 transition-all duration-300">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </a>
          </Card>
        ))}
      </div>
    </section>
  )
}