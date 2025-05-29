import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import WindowPage from "./components/Window";
import Taskbar from "./components/Taskbar";
import DesktopIcons from "./components/DesktopIcons";
import "./index.css";
import ContactPanel from "./components/ContactPanel";
import wallpaper from "./assets/wallpaper.jpeg";
import AboutMePage from "./components/AboutMePage";

const sectionPages = [
  { key: 'about', label: 'About Me', component: AboutMePage },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'skills', label: 'Skills' },
  { key: 'contact', label: 'Contact Me' },
];

const allPages = [
  { key: 'description', label: 'Description' },
  { key: 'folders', label: 'Folders' },
  ...sectionPages
];

export default function App() {
  const [navStack, setNavStack] = useState(['description']);
  const [navIndex, setNavIndex] = useState(0);
  const [isWindowVisible, setIsWindowVisible] = useState(true);

  const currentPageKey = navStack[navIndex];
  const currentPage = allPages.find(p => p.key === currentPageKey);

  const pushPage = (key) => {
    const newStack = navStack.slice(0, navIndex + 1);
    setNavStack([...newStack, key]);
    setNavIndex(newStack.length);
  };

  const goForward = () => {
    if (navIndex < navStack.length - 1) setNavIndex(navIndex + 1);
  };

  const goBack = () => {
    if (navIndex > 0) setNavIndex(navIndex - 1);
  };

  const toggleWindow = () => {
    setIsWindowVisible(!isWindowVisible);
    if (!isWindowVisible) {
      // Reset to initial state when opening window
      setNavStack(['description']);
      setNavIndex(0);
    }
  };

  const closeWindow = () => {
    setIsWindowVisible(false);
  };

  return (
    <div
      className="w-screen h-screen flex flex-col justify-between overflow-hidden cursor-default"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Desktop Icons */}
      <DesktopIcons onPortfolioClick={toggleWindow} />

      {/* Centered Window */}
      {isWindowVisible && (
        <div className="flex-1 flex items-center justify-center">
          <WindowPage
            currentPage={currentPage}
            navIndex={navIndex}
            navStack={navStack}
            goBack={goBack}
            goForward={goForward}
            pushPage={pushPage}
            sectionPages={sectionPages}
            onClose={closeWindow}
          />
        </div>
      )}

      {/* Taskbar at the bottom */}
      <Taskbar />
    </div>
  );
}



