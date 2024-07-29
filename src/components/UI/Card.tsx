import { IconCode, IconLink } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Project {
    title: string;
    pic: any;
    github: string;
    live: string;
}

const Card = (project: Project) => {
    return (
        <div className='lg:w-[300px] lg:h-[180px] sm:w-[400px] w-[90vw] h-[240px] overflow-hidden rounded-md group drop-shadow-xl bg-slate-400'>
            <div className='object-cover w-full lg:h-[130px] h-[170px] duration-300 overflow-hidden group-hover:blur-sm '>
                <Image src={project.pic} alt='project' width={500} height={300} className='bg-blend-darken opacity-90' />
            </div>
            <div className='px-4 py-4 lg:py-2 relative duration-300 lg:group-hover:-translate-y-16 group-hover:-translate-y-12 bg-basic-purple'>
                <div className='font-bold text-white pb-4 text-[15px] whitespace-nowrap text-ellipsis'> {project.title}</div>
                <div className='flex flex-row-reverse gap-4 py-3 lg:py-2'>
                    <Link href={project.github} className='p-2 bg-white hover:bg-slate-100 rounded-full'><IconCode /></Link>
                    <Link href={project.live} className='p-2 bg-white hover:bg-slate-100 rounded-full'><IconLink /></Link>
                </div>
            </div>

        </div>
    )
}

export default Card