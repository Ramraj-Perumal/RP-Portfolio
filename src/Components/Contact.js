import React from 'react'
import { IoIosMail } from "react-icons/io"
import { FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"


const Contact = () => {
    return (
        <div id='contact'>
            <div className='bg-gradient-to-t from-secondary via-primary to-primary w-full'>
                <div className="container py-24 mx-auto">
                    <h1 className='text-white text-4xl text-center font-bold'>Contact</h1>
                    <div className="mx-auto w-32 border-b-4 border-gray-500 mt-1"></div>
                    <p className='text-white text-lg text-center mt-2 mb-10'>Submit the form below to get in touch with me </p>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                        <div className='mx-0 md:mx-auto'>
                            <div className='text-white mb-10'>
                                <h1 className='font-bold flex items-center'><IoIosMail className='mr-2' /> Email</h1>
                                <p>ramraj.perumal25@gmail.com</p>
                            </div>
                            <div className='text-white mb-10'>
                                <h1 className='font-bold flex items-center'><FaPhoneAlt className='mr-2' />Phone-No</h1>
                                <p>+91 9600154881</p>
                            </div>
                            <div className='text-white mb-2'>
                                <h1 className='font-bold flex items-center'><FaLocationDot className='mr-2' />Location</h1>
                                <p>Chennai</p>
                            </div>
                        </div>

                        <form action="https://getform.io/f/b7244fc3-0800-45fd-95d0-299352c96288" method='POST'>
                            <div className='space-y-3 ml-0 mt-4 md:mt-0 md:ml-10'>
                                <input className='py-1 px-3 w-full md:w-2/3 rounded-md' name='name' type="text" placeholder='Name' /> <br />
                                <input className='py-1 px-3 w-full md:w-2/3 rounded-md' type="mail" name='email' placeholder='Mail' /> <br />
                                <textarea className='py-1 px-3 w-full md:w-2/3 rounded-md' placeholder='enter your message' name="msg" id="msg" cols="30" rows="6"></textarea>

                                <div>
                                    <button
                                        class=" text-white font-semibold text-md px-6 py-2 bg-orange border-none rounded-md w-fit hover:bg-orange/70 duration-300">
                                        Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact