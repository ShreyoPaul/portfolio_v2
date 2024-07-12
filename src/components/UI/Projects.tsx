import React from 'react'
import Card from './Card'
import bus from '@/assets/Images/busmern.png'
import task from '@/assets/Images/taskmern.png'
import film from '@/assets/Images/filmrtk.png'
import paul from '@/assets/Images/paulkart.png'
import podium from '@/assets/Images/podiumpe.png'
import grad from '@/assets/Images/gradient.png'
import Link from 'next/link'

const Projects = () => {
    const projects = [
        {
            title: "Bus Ticket Booking MERN",
            pic: bus,
            github: "https://github.com/ShreyoPaul/BusBooKing_MERN",
            live: "https://bus-booking-mern.vercel.app"
        },
        {
            title: "Task Manager MERN",
            pic: task,
            github: "https://github.com/ShreyoPaul/Task_Manager_MERN",
            live: "https://task-manager-shreyopaul.vercel.app"
        },
        {
            title: "Film Search App",
            pic: film,
            github: "https://github.com/ShreyoPaul/FilmSearch-RTK",
            live: "https://film-search-rtk.vercel.app"
        },
        {
            title: "PaulKart MERN",
            pic: paul,
            github: "https://github.com/ShreyoPaul/PaulKart_project",
            live: "https://paulkart.vercel.app"
        },
        {
            title: "Podium Pe",
            pic: podium,
            github: "https://github.com/ShreyoPaul/podiumpe_website",
            live: "https://www.podiumpe.com"
        },
        {
            title: "Gradient Generator",
            pic: grad,
            github: "https://github.com/ShreyoPaul/gradientgenerator.github.io",
            live: "https://shreyopaul.github.io/gradientgenerator.github.io/"
        }

    ]
    return (
        <div className='md:py-10 py-8 max-w-5xl mx-auto sm:px-8 px-0 flex flex-col itmes-center gap-8 w-full '>
            <div className='flex  flex-wrap gap-6 justify-center'>
                {
                    projects.map((project, id) => {
                        return (
                            <Card key={id} title={project.title} pic={project.pic} github={project.github} live={project.live} />
                        )
                    })
                }
            </div>
            <Link href={"https://github.com/ShreyoPaul?tab=repositories"} className='text-basic-purple pt-2 underline text-center'>Wanna see other repos!</Link>

        </div>

    )
}

export default Projects