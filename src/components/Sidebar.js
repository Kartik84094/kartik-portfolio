import React from 'react';
import ProfileCard from './ProfileCard';
import NavMenu from './NavMenu';

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 p-4 flex flex-col items-center">
      <ProfileCard />
      <NavMenu />
      {/* <button className="mt-6 bg-green-500 px-4 py-2 rounded hover:bg-green-600">
        💼 Hire Me
      </button> */}
      {/* <DarkModeToggle /> */}
    </aside>
  );
}
