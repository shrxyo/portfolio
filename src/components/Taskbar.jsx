import { useState, useRef, useEffect } from 'react';

export default function Taskbar({ windows, onWindowRestore, portfolioCurrentPage }) {
  const [showMenu, setShowMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const menuRef = useRef(null);
  const startButtonRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        startButtonRef.current && !startButtonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener('mouseup', handleClickOutside);
    } else {
      document.removeEventListener('mouseup', handleClickOutside);
    }
    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, [showMenu]);

  return (
    <div className="bottom-0 left-0 w-full bg-blue-800 text-white px-4 py-2 text-sm flex justify-between items-center fixed cursor-default z-50">
      <div className="flex items-center gap-2">
        <div className="relative">
          <button
            ref={startButtonRef}
            className="bg-green-600 px-4 py-1 shadow cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              setShowMenu((v) => !v);
            }}
          >
            <span>Start</span>
          </button>
          {showMenu && (
            <div
              ref={menuRef}
              className="absolute left-0 bottom-12 bg-white border border-gray-300 rounded shadow-lg p-4 min-w-[200px] z-50"
            >
              <div className="font-bold mb-2">Social Media</div>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/shrxyo" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 flex items-center gap-2 cursor-pointer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shreya-balakrishna-a67772201/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 flex items-center gap-2 cursor-pointer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/raeneyy/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 flex items-center gap-2 cursor-pointer">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Window Buttons */}
        {Object.entries(windows).map(([windowId, window]) => (
          window.state !== 'closed' && (
            <button
              key={windowId}
              className={`${window.state === 'minimized' ? 'bg-blue-500' : 'bg-blue-900'} px-3 py-1 shadow cursor-pointer`}
              onClick={() => onWindowRestore(windowId)}
            >
              {windowId === 'portfolio' ? portfolioCurrentPage?.label : window.currentPage?.label}
            </button>
          )
        ))}
      </div>

      <span className="cursor-default">
        {currentTime.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })}
      </span>
    </div>
  );
}