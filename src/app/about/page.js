// src/app/about/page.js
import Navbar from '../components/NavBar.js';
import Image from 'next/image';

export default function About() {
    return (
        <div className="font-silkscreen min-h-screen bg-gray-900 text-white px-8">
            <header className="flex justify-center items-center p-4">
                <Navbar /> {/* Replace the nav element with the Navbar component */}
            </header>
            <div className="flex justify-center mt-10">
                <div className="text-center">
                    <Image
                        src="/KooRouZhenPicture.jpg"
                        alt="Profile Picture"
                        width={500} 
                        height={500} 
                        className="rounded-full w-40 h-40 mx-auto mb-4 shadow-lg object-cover"
                        style={{ objectFit: 'cover' }} // Ensures the image maintains proportions
                    />
                    <h1 className="text-4xl font-semibold mb-4">Hello! 👋</h1>
                    <p className="p-2 font-raleway font-semibold text-l text-neutral-300">
                        I'm Rou Zhen, a creative Software Engineer with strong design instincts and a love for coding!
                    </p>
                    <p className="font-raleway font-semibold text-l mt-4 text-neutral-300">
                        I love designing and building things that are both beautiful and functional.
                        Some of my favorite tools include MERN.
                    </p>
                    <p className="font-raleway font-semibold text-l mt-4 text-neutral-300">
                        Currently studying at SUTD as a Computer Science and Design student specialising in Artificial Intelligence, but I'm also always building side projects. Feel free to follow me on social media to see what I'm working on and stay in the loop!
                    </p>

                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
                        <div className="flex flex-col items-center space-y-4">
                            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md text-left shadow-lg">
                            <h3 className="text-xl font-semibold">Request & Resource Management Web App</h3>
                            <p className="text-gray-400">Back-End Engineer</p>
                            <span className="text-gray-500">April 2024 - August 2024</span>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md text-left shadow-lg">
                            <h3 className="text-xl font-semibold">EyeCue Lab</h3>
                            <p className="text-gray-400">Full Stack Engineer</p>
                            <span className="text-gray-500">2022 - 2024</span>
                            </div>
                        </div>
                        </div>





                </div>
            </div>
        </div>
    );
}