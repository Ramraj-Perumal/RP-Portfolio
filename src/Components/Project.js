import React from 'react'
import crud from "../Assets/project2.jpeg"
import weather from "../Assets/weather.png"
import todo from "../Assets/todo.jpg"
import ecom from "../Assets/project6.jpeg"
import imgSearch from "../Assets/project4.jpeg"
import BootWeb from "../Assets/project5.jpeg"
import staticWeb from "../Assets/project3.jpeg"
import hoverImage from "../Assets/project1.jpeg"

const Skills = () => {
    const projectPic = [
        { id: 1, src: ecom, title: "E-commerce React App", href:"https://dapper-sunburst-18661c.netlify.app/", link:"https://github.com/Ramraj-Perumal/E-commerce-React-App" },
        { id: 2, src: crud, title: "React CRUD App", href:"https://scintillating-chimera-7d0550.netlify.app/", link:"https://github.com/Ramraj-Perumal/React-crud-app" },
        { id: 3, src: imgSearch, title: "Image Search Engine", href:"https://ramraj-perumal.github.io/Image-Search-Engine/", link:"https://github.com/Ramraj-Perumal/Image-Search-Engine" },
        { id: 4, src: BootWeb, title: "Coffee Shop", href:"https://ramraj-perumal.github.io/Coffee-Shop-Bootstrap-Website/", link:"https://github.com/Ramraj-Perumal/Coffee-Shop-Bootstrap-Website" },
        { id: 5, src: staticWeb, title: "Static Website", href:"https://ramraj-perumal.github.io/Static-website/", link:"https://github.com/Ramraj-Perumal/Static-website" },
        { id: 6, src: hoverImage, title: "Image HoverEffect", href: "https://ramraj-perumal.github.io/Card-Design/", link:"https://github.com/Ramraj-Perumal/Card-Design" },
        { id: 7, src: todo, title: "React Todo List", href:"https://aesthetic-khapse-e2214e.netlify.app/", link:"https://github.com/Ramraj-Perumal/React-Todo-List" },
        { id: 8, src: weather, title: "React Weather App", href:"https://helpful-lily-08f074.netlify.app/", link:"https://github.com/Ramraj-Perumal/weather-app" },
    ];
    return (
        <div id='projects'>
            <div className='bg-gradient-to-t from-primary via-secondary to-secondary w-full'>
                <div className="container py-24">
                    <h1 className='text-white text-4xl text-center font-bold'>Projects</h1>
                    <div className="mx-auto w-32 border-b-4 border-gray-500 mt-1"></div>
                    <p className='text-white text-lg text-center mt-2 mb-10'>Checkout some of my works right here</p>
                    <div className="grid grid-cols-1 duration-300 my-2 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                        {projectPic.map(({ id, src, title, href, link }) => (
                            <div key={id} className='mt-3 p-4 md:ml-5'>
                                <img src={src} alt={title} className='rounded-md hover:scale-105' />
                                <p className='text-white font-bold text-center my-2'>{title}</p>
                                <span className='flex justify-between text-white font-semibold'>
                                    <a href={href} target='_blank' rel="noreferrer">
                                        <button className='py-2 px-8 border border-orange gap-1 rounded-md hover:bg-orange/70'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href={link} target='_blank' rel="noreferrer">
                                        <button className='py-2 px-8 border border-orange gap-1 rounded-md hover:bg-orange/70'>
                                            Code
                                        </button>
                                    </a>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;