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
import SkillsPage from "./components/SkillsPage";

const sectionPages = [
  { key: 'about', label: 'About Me', component: AboutMePage },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'skills', label: 'Skills', component: SkillsPage },
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
  const [windowState, setWindowState] = useState('open'); // 'open', 'minimized', 'maximized'

  const currentPageKey = navStack[navIndex];
  const currentPage = currentPageKey.startsWith('experience-') 
    ? { key: currentPageKey, label: 'Experience Detail' }
    : allPages.find(p => p.key === currentPageKey);

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
    setWindowState(prev => prev === 'open' ? 'minimized' : 'open');
    if (windowState === 'minimized') {
       setNavStack(['description']);
       setNavIndex(0);
    }
  };

  const closeWindow = () => {
    setWindowState('closed'); 
  };

  const handlePortfolioClick = () => {
     setWindowState('open');
  };

  const handleMinimize = () => {
    setWindowState('minimized');
  };

  const handleMaximizeRestore = () => {
    setWindowState(prev => prev === 'maximized' ? 'open' : 'maximized');
  };

  const isWindowRendered = windowState !== 'minimized' && windowState !== 'closed';

  return (
    <div
      className="w-screen h-screen flex flex-col justify-between overflow-hidden cursor-default scrollbar-hide"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Desktop Icons */}
      <DesktopIcons onPortfolioClick={handlePortfolioClick} />

      {/* Window */} {/* Removed Centered Window div */}
      {isWindowRendered && (
          <WindowPage
            currentPage={currentPage}
            navIndex={navIndex}
            navStack={navStack}
            goBack={goBack}
            goForward={goForward}
            pushPage={pushPage}
            sectionPages={sectionPages}
            onClose={() => setWindowState('closed')}
            onMinimize={handleMinimize}
            onMaximizeRestore={handleMaximizeRestore}
            windowState={windowState} 
          />
      )}

      <Taskbar windowState={windowState} onWindowRestore={() => setWindowState('open')} currentPage={currentPage} /> 
    </div>
  );
}



