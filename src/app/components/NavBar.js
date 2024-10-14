"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [active, setActive] = useState(''); // Track active link
    const handleSetActive = (item) => {
        setActive(item);
    };

    return (
        <header className="bg-gray-900 py-4 px-6">
            <nav className="flex justify-between items-center max-w-4xl mx-auto">
            {/* Menu items */}
            <ul className="flex space-x-4 text-white">
                {/* Nav Item: Home */}
                <li>
                <Link href="#home"
                    className={`relative px-4 py-2 rounded-full ${
                        active === 'Home'
                        ? 'bg-gray-600 text-white'
                        : 'hover:bg-gray-800 hover:text-gray-300'
                    }`}
                    onClick={() => handleSetActive('Home')}
                    >
                    Home
                </Link>
                </li>

                {/* Nav Item: Posts */}
                <li>
                <Link href="#posts"
                    className={`relative px-4 py-2 rounded-full ${
                        active === 'Posts'
                        ? 'bg-gray-600 text-white'
                        : 'hover:bg-gray-800 hover:text-gray-300'
                    }`}
                    onClick={() => handleSetActive('Posts')}
                    >
                    Posts
                </Link>
                </li>

                {/* Nav Item: About */}
                <li>
                <Link href="/about"
                    className={`relative px-4 py-2 rounded-full ${
                        active === 'About'
                        ? 'bg-gray-600 text-white'
                        : 'hover:bg-gray-800 hover:text-gray-300'
                    }`}
                    onClick={() => handleSetActive('About')}
                    >
                    About
                </Link>
                </li>
            </ul>

            {/* Settings Icon */}
            <Link href="#settings"
                className={` relative px-4 py-2 rounded-full ${
                    active === 'Settings'
                        ? 'bg-gray-600 text-white'
                        : 'hover:bg-gray-800 hover:text-gray-300'
                    }`}
                    onClick={() => handleSetActive('Settings')}
                >
                <svg
                    className="h-5 w-5  text-gray-100 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
            </Link>
            </nav>
        </header>
        );
        }
