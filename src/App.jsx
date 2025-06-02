import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import WindowPage from "./components/Window";
import Taskbar from "./components/Taskbar";
import DesktopIcons from "./components/DesktopIcons";
import "./index.css";
import ContactPanel from "./components/ContactPanel";
import wallpaper from "./assets/wallpaper.jpg";
import AboutMePage from "./components/AboutMePage";
import SkillsPage from "./components/SkillsPage";

import exp1Data from './data/experience/exp1.json';
import exp2Data from './data/experience/exp2.json';
import exp3Data from './data/experience/exp3.json';
import project1Data from './data/projects/project1.json';
import project2Data from './data/projects/project2.json';
import project3Data from './data/projects/project3.json';
import project4Data from './data/projects/project4.json';

const experienceData = {
  'experience-exp1': exp1Data,
  'experience-exp2': exp2Data,
  'experience-exp3': exp3Data,
};

const projectsData = {
  'projects-project1': project1Data,
  'projects-project2': project2Data,
  'projects-project3': project3Data,
  'projects-project4': project4Data,
};

const sectionPages = [
  { key: 'about', label: 'About Me', component: AboutMePage },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'skills', label: 'Skills', component: SkillsPage },
];

const allPages = [
  { key: 'description', label: 'Shreya Balakrishna' },
  { key: 'folders', label: 'Folders' },
  ...sectionPages
];

export default function App() {
  const [navStack, setNavStack] = useState(['description']);
  const [navIndex, setNavIndex] = useState(0);
  const [windows, setWindows] = useState({
    portfolio: { state: 'closed', currentPage: allPages[0] },
    contact: { state: 'closed', currentPage: { key: 'contact', label: 'Contact Me' } }
  });

  const [selectedDesktopIconIndex, setSelectedDesktopIconIndex] = useState(null);

  const currentPageKey = navStack[navIndex];
  const currentPage = currentPageKey.startsWith('experience-') 
    ? { key: currentPageKey, label: 'Experience' }
    : currentPageKey.startsWith('projects-')
    ? { key: currentPageKey, label: 'Projects' }
    : allPages.find(p => p.key === currentPageKey);

  const currentPageData = currentPageKey.startsWith('experience-')
    ? experienceData[currentPageKey]
    : currentPageKey.startsWith('projects-')
    ? projectsData[currentPageKey]
    : null;

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

  const handlePortfolioClick = () => {
    setNavStack(['description']);
    setNavIndex(0);
    setWindows(prev => ({
      ...prev,
      portfolio: { 
        ...prev.portfolio, 
        state: 'open',
        currentPage: allPages[0] 
      }
    }));
  };

  const handleContactClick = () => {
    setWindows(prev => ({
      ...prev,
      contact: { 
        ...prev.contact, 
        state: 'open',
        position: {
          x: (window.innerWidth - 700) / 2 - 100, 
          y: (window.innerHeight - 440) / 2 - 50,  
          width: 700,
          height: 440
        }
      }
    }));
  };

  const handleWindowAction = (windowId, action) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: { ...prev[windowId], state: action }
    }));
  };

  const handleWindowRestore = (windowId) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: { ...prev[windowId], state: 'open' }
    }));
  };

  const handleDesktopClick = (event) => {
    if (!event.target.closest('[data-desktop-icon]')) {
      setSelectedDesktopIconIndex(null);
    }
  };

  return (
    <div
      className="w-screen h-screen flex flex-col justify-between overflow-hidden cursor-default scrollbar-hide"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
      onClick={handleDesktopClick}
    >
      {/* Desktop Icons */}
      <DesktopIcons 
        onPortfolioClick={handlePortfolioClick} 
        onContactClick={handleContactClick}
        selectedIconIndex={selectedDesktopIconIndex}
        setSelectedIconIndex={setSelectedDesktopIconIndex}
      />

      {/* Portfolio Window */}
      {windows.portfolio.state !== 'closed' && windows.portfolio.state !== 'minimized' && (
        <WindowPage
          currentPage={currentPage}
          navIndex={navIndex}
          navStack={navStack}
          goBack={goBack}
          goForward={goForward}
          pushPage={pushPage}
          sectionPages={sectionPages}
          onClose={() => handleWindowAction('portfolio', 'closed')}
          onMinimize={() => handleWindowAction('portfolio', 'minimized')}
          onMaximizeRestore={() => handleWindowAction('portfolio', windows.portfolio.state === 'maximized' ? 'open' : 'maximized')}
          windowState={windows.portfolio.state}
          pageData={currentPageData}
        />
      )}

      {/* Contact Window */}
      {windows.contact.state !== 'closed' && windows.contact.state !== 'minimized' && (
        <WindowPage
          currentPage={windows.contact.currentPage}
          navIndex={0}
          navStack={['contact']}
          goBack={() => {}}
          goForward={() => {}}
          pushPage={() => {}}
          sectionPages={[]}
          onClose={() => handleWindowAction('contact', 'closed')}
          onMinimize={() => handleWindowAction('contact', 'minimized')}
          onMaximizeRestore={() => handleWindowAction('contact', windows.contact.state === 'maximized' ? 'open' : 'maximized')}
          windowState={windows.contact.state}
          isContactWindow={true}
          initialPosition={windows.contact.position}
          pageData={null}
        />
      )}

      <Taskbar 
        windows={windows} 
        onWindowRestore={handleWindowRestore}
        portfolioCurrentPage={currentPage}
      />
    </div>
  );
}



