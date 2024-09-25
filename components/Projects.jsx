'use client'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

import goosesmurfs from '@/assets/goosesmurfs.png';
import cbaConference from '@/assets/cba-conference.png';
import brewers from '@/assets/brewers.png';
import cenipa from '@/assets/cenipa.png';
import { FormattedMessage } from 'react-intl';

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
    }
];

export default function Projects() {
    return (
        <section id="collaborated" className="py-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
                <FormattedMessage id="projects_title" />
            </h2>
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
                                <CardDescription>
                                    <FormattedMessage id={project.descriptionId} />
                                </CardDescription>
                            </CardHeader>
                        </a>
                    </Card>
                ))}
            </div>
        </section>
    );
}