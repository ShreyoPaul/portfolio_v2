import { HoverEffect } from "../card-hover-effect";

export function Skillcard() {
    return (
        <div className="max-w-5xl mx-auto sm:px-8 px-0">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        pic: 'https://cdn.iconscout.com/icon/free/png-128/c-57-1175191.png',
        name: 'C'
    },
    {
        pic: 'https://cdn.iconscout.com/icon/free/png-128/c-4-226082.png',
        name: 'C++'
    },
    {
        pic: 'https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png',
        name: 'Javascript'
    },
    {
        pic: '/python.png',
        name: 'Python'
    },
    {
        pic: '/go.png',
        name: 'Go'
    },
    {
        pic: 'https://cdn.iconscout.com/icon/free/png-256/html-2752158-2284975.png',
        name: 'HTML5'
    },
    {
        pic: 'https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png',
        name: 'CSS3'
    },
    {
        pic: 'https://imgs.search.brave.com/X3FUOFR4SZrEmRcpMlpryVcHDksMtvdQIY4e60-Z8Dk/rs:fit:820:820:1/g:ce/aHR0cHM6Ly9jb21t/ZXJjZWRhLmNvbS9p/bWFnZXMvbWF0ZXJp/YWwtdWktbG9nby5w/bmc',
        name: 'Material UI'
    },
    {
        pic: 'https://res.cloudinary.com/dvsmetmxh/image/upload/v1678874381/tailwind-removebg-preview_n811fw.png',
        name: 'Tailwind'
    },
    {
        pic: 'https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png',
        name: 'React JS'
    },
    {
        pic: 'https://react-redux.js.org/img/redux.svg',
        name: 'Redux'
    },
    {
        pic: 'https://res.cloudinary.com/dvsmetmxh/image/upload/v1678873682/download-removebg-preview_2_zauh6x.png',
        name: 'Next JS'
    },
    {
        pic: '/node.png',
        name: 'Node JS'
    },
    {
        pic: 'https://res.cloudinary.com/dvsmetmxh/image/upload/v1678874191/images-removebg-preview_1_uzvbup.png',
        name: 'Express JS'
    },
    {
        pic: 'https://res.cloudinary.com/dvsmetmxh/image/upload/v1678874296/download-removebg-preview_5_bpunub.png',
        name: 'MongoDB'
    },
    {
        pic: '/mysql.png',
        name: 'MySQL'
    },
    {
        pic: '/firebase.png',
        name: 'Firebase'
    },
    {
        pic: '/github.png',
        name: 'GitHub'
    },
    {
        pic: 'https://cdn.iconscout.com/icon/free/png-128/figma-3521426-2944870.png',
        name: 'Figma'
    },
    
]
