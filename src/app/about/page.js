// src/app/about/page.js
import Navbar from '../components/NavBar.js';
import Image from 'next/image';

export default function About() {
    return (
        <div className=" font-silkscreen min-h-screen bg-black text-white px-8">
            <header className="flex justify-center items-center p-4">
                <Navbar /> {/* Replace the nav element with the Navbar component */}
            </header>
            <div className="mt-10 text-center">
                <div className="flex space-x-3 p-16">

                    <Image
                        src="/KooRouZhenPicture.jpg"
                        alt="Profile Picture"
                        width={500} 
                        height={500} 
                        className="rounded-full w-40 h-40 mx-auto mb-4 shadow-lg object-cover"
                        style={{ objectFit: 'cover' }} // Ensures the image maintains proportions
                    />
                    
                        <div className="px-12 text-left">
                            <h1 className="text-4xl font-light mb-8">Hello! 👋</h1>
                            <div className="space-y-5">
                                <p className=" font-raleway font-semibold text-l text-neutral-300">
                                    I'm Rou Zhen, a creative Software Engineer with strong design instincts and a love for coding!
                                </p>
                                <p className="font-raleway font-semibold text-l mt-4 text-neutral-300">
                                    I love designing and building things that are both beautiful and functional.
                                    Some of my favorite tools include MERN.
                                </p>
                                <p className="font-raleway font-semibold text-l mt-4 text-neutral-300">
                                    Currently studying at SUTD as a Computer Science and Design student specialising in Artificial Intelligence, but I'm also always building side projects. Feel free to follow me on social media to see what I'm working on and stay in the loop!
                                </p>
                            </div>
                        </div>
                </div>
            {/* Experience Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-light text-center mb-6 md: w-[40rem] lg:w-[99rem]">Experience</h2>
                <div className="flex flex-col items-center space-y-6">
                    <div className="bg-zinc-900 opacity-90 p-6 rounded-lg w-full max-w-md text-left shadow-lg">
                    <h3 className="font-light text-l">Request & Resource Management Web App</h3>
                    <p className="font-raleway font-semibold text-neutral-400">Back-End Engineer</p>
                    <span className="text-gray-500">June 2024 - August 2024</span>
                    </div>
                    <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-md text-left shadow-lg">
                    <h3 className="font-light text-l ">CSEShell</h3>
                    <p className="font-raleway font-semibold text-neutral-400"> CSEShell is a simple, custom shell for Unix-based systems, designed to provide an interface for executing system programs.  </p>
                    <span className="text-gray-500">June 2024 - August 2024</span>
                    </div>
                </div>
                </div>

            <div className="mt-12 text-center">
                <p className="font-raleway font-semibold text-neutral-300 text-lg">When I'm not coding, I'm probably idk cooking? :/</p>
                <div className="flex justify-center mt-4">
                    <img src="/dog.jpg" alt="Dog" className="w-40 h-40 rounded-lg shadow-lg" />
                </div>
                </div>

                
            </div>
            <footer className=" mt-12 text-center text-neutral-300">
                <p>Get In Touch: <a href="mailto:rouzhen.internships@gmail.com" className="underline">rouzhen.internships@gmail.com</a></p>
                <div className="mt-4 space-x-4">
                <a href="https://www.linkedin.com/in/koorz/" className="text-white hover:text-orange-200">LinkedIn </a>
                <a href="https://github.com/rouzhen/rouzhen" className="text-white hover:text-orange-200">GitHub</a>
                
                </div>
                <p className="p-16 text-neutral-300 ">©2024 Koo Rou Zhen | Built with ❤️ | Singapore</p>
            </footer>
        </div>

        
    );
}