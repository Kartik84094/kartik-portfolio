import React from 'react';
import ProfileCard from './ProfileCard';
import NavMenu from './NavMenu';
import { FaXTwitter, FaLinkedinIn, FaGithub, FaMedium } from 'react-icons/fa6';

export default function Sidebar() {
    return (
        <aside className="bg-gray-800 p-4 flex flex-col items-center">
            <ProfileCard />
            <NavMenu />
            {/* <button className="mt-6 bg-green-500 px-4 py-2 rounded hover:bg-green-600">
        💼 Hire Me
      </button> */}
            {/* <DarkModeToggle /> */}

            <div className="flex justify-center items-center space-x-4 mt-6">
                <div className='flex justify-center items-center w-8 h-8 rounded-full bg-green-600 p-3'><a href="https://x.com/Kartikk97429066" aria-label="X"><FaXTwitter /></a></div>
                <div className='flex justify-center items-center w-8 h-8 rounded-full bg-green-600 p-3'><a href="https://www.linkedin.com/in/kartik-kumar-2942211ab/" aria-label="LinkedIn"><FaLinkedinIn /></a></div>
                <div className='flex justify-center items-center w-8 h-8 rounded-full bg-green-600 p-3'><a href="https://github.com/Kartik84094" aria-label="GitHub"><FaGithub /></a></div>
                {/* <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a> */}
                <div className='flex justify-center items-center w-8 h-8 rounded-full bg-green-600 p-3'><a href="https://medium.com/@kartikkumar84094" aria-label="Medium"><FaMedium /></a></div>
                {/* <a href="https://codepen.io" aria-label="Codepen"><FaCodepen /></a> */}
            </div>
        </aside>
    );
}
