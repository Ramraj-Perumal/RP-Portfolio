import React from 'react'
import myPic from "../Assets/Ram3.png"
import { BsFillPersonLinesFill } from "react-icons/bs"

const About = () => {

    const resume = [
        {
            id: 4,
            child: (
              <>
                Download CV <BsFillPersonLinesFill size={25} />
              </>
            ),
            href: "/Ramraj_Resume.pdf",
            download: true,
        },
    ]

    return (
        <div id='about'>
            <div className='bg-gradient-to-t from-primary via-secondary to-secondary w-full'>
                <div className="container py-24">
                    <h1 className='text-white text-4xl text-center font-bold'>About Me</h1>
                    <div className="mx-auto w-44 border-b-4 border-gray-500 mt-1 mb-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                        <div className='space-y-3 mt-4 md:mt-0 md:ml-10 order-2 md:order-1'>
                            <h1 className='text-white text-4xl font-semibold'>Hi There! I'm Ramraj Perumal</h1>
                            <p className='text-orange text-2xl'>React Developer</p>
                            <p className='text-white text-sm md:text-lg mt-4'>
                                Front-end developer with proven ability to design and develop JavaScript-based
                                applications for web or mobile environments. Strong knowledge of HTML, CSS, React JS, Bootstrap and Tailwind Css.
                                {" "}
                            </p>
                            <p className='text-white text-sm md:text-lg mt-4'>
                                React Developer Intern | Human Cloud Soft | Jun-2023 - Dec-2023. <br />
                                Developed and maintained components for E-commerce project. <br />
                                Collaborated with cross-functional teams to deliver high-quality software solutions.
                            </p>
                            <button
                                class=" text-white font-semibold text-md px-6 py-2 bg-orange border-none rounded-md w-fit hover:bg-orange/70 duration-300">
                                {resume.map(({id, href, download, child})=>(
                                    <a 
                                    key={id}
                                    className="flex justify-between items-center font-bold w-full text-white mr-2"
                                    href={href}
                                    download={download}
                                    target="_blank"
                                    rel="noreferrer"
                                > {child}
                                </a>
                                ))}
                            </button>
                        </div>

                        <div className='mt-3 md:ml-5 order-1 md:order-2'>
                            <img src={myPic} alt="myPic" width={400} height={450} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About