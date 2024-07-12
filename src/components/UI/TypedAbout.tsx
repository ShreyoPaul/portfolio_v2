import React from 'react'
import { TypewriterEffectSmooth } from '../typewriter-effect'

const TypedAbout = () => {

    const words = [
        {
            text: "I am from West Bengal, India.",
        },
        {
            text: "I am pursuing BTech in Information Technology in MAKAUT,WB."
        },
        {
            text: "I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites. Working on my skills."
        },
        {
            text: "I am pursuing BTech in Information Technology in MAKAUT,WB."
        },
        {
            text: "Love to solve real life problem with coding mind.Welcome to My Portfolio, Feel free for a tour."
        }
    ]

    return (
        <div className="w-full">
            <TypewriterEffectSmooth words={words} />

        </div>
    )
}

export default TypedAbout