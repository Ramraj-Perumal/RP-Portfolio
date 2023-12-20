import React from 'react'
import myPic from "../Assets/Ram.jpeg"

const picStyle = {
    'box-shadow': '7px 7px rgb(251, 146, 60)',
    'border-radius': '10px'
}

const Hero = () => {
    return (
        <div id='home'>
            <div className='bg-gradient-to-t from-secondary via-primary to-primary w-full'>
                <div className="container py-24">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 place-items-center">
                        <div>
                            <img style={picStyle} src={myPic} alt="myPic" width={400} height={450} />
                        </div>
                        <div className='space-y-3 mt-4 md:mt-0 md:ml-10'>
                            <div className='text-orange'>Hello, I'm Ramraj</div>
                            {/* <h1 className='text-5xl text-white font-semibold'>Ramraj <br />Perumal</h1> */}
                            <div className='text-white text-5xl font-semibold'>Frontend <br /><span className='text-orange'>React Developer</span></div>
                            <div className='text-white text-sm mt-2 md:text-lg mt-4'>
                            Dedicated and results-driven React Developer with six months of hands-on internship experience in building responsive and dynamic web applications. 
                            Adept at collaborating with cross-functional teams and translating design concepts into functional and efficient code.{" "}
                            </div>
                            
                            <button
                                class=" text-white font-semibold text-md px-6 py-2 bg-orange border-none rounded-md w-fit hover:bg-orange/70 duration-300">Hire
                                Me</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero