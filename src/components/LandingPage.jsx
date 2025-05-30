import React from 'react';

export default function LandingPage({ onMenuClick }) {
  return (
    <div className="bg-white w-[400px] flex flex-col cursor-default">
      {/* Notepad-style title bar */}
      {/* <div className="bg-gray-200 px-3 py-2 border-b border-gray-300 flex justify-between items-center rounded-t-md">
        <span className="font-mono text-sm">Notepad - Shreya.txt</span>
      </div> */}
      {/* Notepad content */}
      <div className="flex-1 p-4 font-mono text-gray-800 text-base">
        Hi! I'm Shreya Balakrishna, a developer and designer passionate about building delightful digital experiences. Welcome to my portfolio!
      </div>
      {/* Menu button */}
      <div className="p-3 border-t border-gray-300 flex justify-end">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition cursor-pointer"
          onClick={onMenuClick}
        >
          Menu
        </button>
      </div>
    </div>
  );
} 