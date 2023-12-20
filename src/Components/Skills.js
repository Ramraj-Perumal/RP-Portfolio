import React from 'react'
import html from "../Assets/html.png"
import github from "../Assets/github.png"
import css from "../Assets/css.png"
import JavaScript from "../Assets/javascript.png"
import reactImage from "../Assets/react.png"
import Tailwind from "../Assets/tailwind.png"
import json from "../Assets/json.png"
import bootstrap from "../Assets/boot.png"

const Skills = () => {
    const techPic = [
        { id:1, src:html, title:"HTML"},
        { id:2, src:css, title:"CSS"},
        { id:3, src:JavaScript, title:"JAVASCRIPT"},
        { id:4, src:reactImage, title:"REACT JS"},
        { id:5, src:Tailwind, title:"TAILWIND CSS"},
        { id:6, src:bootstrap, title:"BOOTSTRAP"},
        { id:7, src:json, title:"JSON"},
        { id:6, src:github, title:"GITHUB"},
    ];
    return (
        <div id='skills'>
            <div className='bg-gradient-to-t from-secondary via-primary to-primary w-full'>
                <div className="container py-24">
                    <h1 className='text-white text-4xl text-center font-bold'>Skills</h1>
                    <div className="mx-auto w-24 border-b-4 border-gray-500 mt-1"></div>
                    <p className='text-white text-lg text-center mt-2 mb-10'>These are technologies I've worked with my projects</p>
                    <div className="grid grid-cols-1 gap-8 duration-300 my-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
                        {techPic.map(({id, src, title})=>(
                        <div key={id} className='mt-3 p-4 hover:scale-105 md:ml-5 shadow-md shadow-gray-300'>
                            <img src={src} alt={title} width={200} height={200}/>
                            <p className='text-white font-bold text-center my-2'>{title}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;