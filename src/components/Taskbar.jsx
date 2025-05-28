import { useState, useRef, useEffect } from 'react';

export default function Taskbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  return (
    <div className="bg-blue-800 text-white px-4 py-2 text-sm flex justify-between items-center relative cursor-default">
      <div className="relative">
        <button
          className="bg-green-600 px-3 py-1 rounded shadow cursor-pointer"
          onClick={() => setShowMenu((v) => !v)}
        >
          Start
        </button>
        {showMenu && (
          <div
            ref={menuRef}
            className="absolute left-0 bottom-12 bg-white border border-gray-300 rounded shadow-lg p-4 min-w-[200px] z-50"
          >
            <div className="font-bold mb-2">Social Media</div>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 flex items-center gap-2 cursor-pointer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 flex items-center gap-2 cursor-pointer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 flex items-center gap-2 cursor-pointer">
                  Twitter
                </a>
              </li>
            </ul>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
      <span className="cursor-default">12:05 AM</span>
    </div>
  );
}