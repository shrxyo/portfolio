import FolderGrid from "./FolderGrid";
import { Rnd } from "react-rnd";
import ContactPanel from "./ContactPanel";
import ExperienceGrid from "./ExperienceGrid";
import ExperienceDetail from "./ExperienceDetail";
import ProjectsGrid from "./ProjectsGrid";
import ProjectDetail from "./ProjectDetail";
import LandingPage from "./LandingPage";
import { useState, useEffect } from "react";

export default function WindowPage({ 
  currentPage, 
  navIndex, 
  navStack, 
  goBack, 
  goForward, 
  pushPage, 
  sectionPages, 
  onClose, 
  onMinimize, 
  onMaximizeRestore, 
  windowState,
  isContactWindow = false,
  initialPosition = null
}) {
  const [openExpId, setOpenExpId] = useState(null);
  const [openProjectId, setOpenProjectId] = useState(null);

  const defaultWidth = 1000;
  const defaultHeight = 600;
  const defaultX = (window.innerWidth - defaultWidth) / 2;
  const defaultY = (window.innerHeight - 40 - defaultHeight) / 2; 

  const [windowPosAndSize, setWindowPosAndSize] = useState(
    initialPosition || {
      x: defaultX,
      y: defaultY,
      width: defaultWidth,
      height: defaultHeight,
    }
  );
  const [lastOpenPosAndSize, setLastOpenPosAndSize] = useState(null);

  const handleBack = () => {
    if (openProjectId) {
      setOpenProjectId(null);
    } else if (openExpId) {
      setOpenExpId(null);
      goBack();
    } else {
      goBack();
    }
  };

  const renderContent = () => {
    if (isContactWindow) {
      return <ContactPanel />;
    }

    if (currentPage.key.startsWith('experience-')) {
      const expId = currentPage.key.split('-')[1];
      return <ExperienceDetail expId={expId} onBack={() => {
        setOpenExpId(null);
        goBack();
      }} />;
    }

    switch (currentPage.key) {
      case 'description':
        return <LandingPage onMenuClick={() => pushPage('folders')} />;
      case 'folders':
        return <FolderGrid setActiveTab={pushPage} />;
      case 'experience':
        return <ExperienceGrid onSelect={(id) => {
          pushPage(`experience-${id}`);
          setOpenExpId(id);
        }} />;
      case 'projects':
        return openProjectId ? (
          <ProjectDetail projectId={openProjectId} onBack={handleBack} />
        ) : (
          <ProjectsGrid onSelect={setOpenProjectId} />
        );
      default:
        if (sectionPages.some(s => s.key === currentPage.key)) {
          const SectionComponent = sectionPages.find(s => s.key === currentPage.key)?.component;
          return SectionComponent ? <SectionComponent /> : null;
        }
        return null;
    }
  };

  const maximizedWidth = window.innerWidth;
  const maximizedHeight = window.innerHeight - 40; 

  useEffect(() => {
    if (windowState === 'maximized') {
      setLastOpenPosAndSize(windowPosAndSize);
      setWindowPosAndSize({
        x: 0,
        y: 0,
        width: maximizedWidth,
        height: maximizedHeight,
      });
    } else if (windowState === 'open' && lastOpenPosAndSize) {
      setWindowPosAndSize(lastOpenPosAndSize);
    }
  }, [windowState]);

  const handleResize = (e, direction, ref, delta, position) => {
    const newWidth = parseInt(ref.style.width);
    const newHeight = parseInt(ref.style.height);
    
    if (windowState === 'maximized') {
      onMaximizeRestore();
      const newX = position.x;
      const newY = position.y;
      const newPosAndSize = {
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight,
      };
      setWindowPosAndSize(newPosAndSize);
      setLastOpenPosAndSize(newPosAndSize);
    } else {
      const newPosAndSize = {
        width: newWidth,
        height: newHeight,
        ...position,
      };
      setWindowPosAndSize(newPosAndSize);
      setLastOpenPosAndSize(newPosAndSize);
    }
  };

  const windowTitle = currentPage?.label || 'Shreya Balakrishna'; 

  return (
    <Rnd
      className="z-10"
      size={{ 
        width: windowState === 'maximized' ? maximizedWidth : windowPosAndSize.width, 
        height: windowState === 'maximized' ? maximizedHeight : windowPosAndSize.height 
      }}
      position={{ 
        x: windowState === 'maximized' ? 0 : windowPosAndSize.x, 
        y: windowState === 'maximized' ? 0 : windowPosAndSize.y 
      }}
      onDragStop={(e, d) => {
        if (windowState !== 'maximized') {
          setWindowPosAndSize(prev => ({ ...prev, x: d.x, y: d.y }));
        }
      }}
      onResizeStop={handleResize}
      minWidth={500}
      minHeight={350}
      bounds="window"
      dragHandleClassName={windowState === 'maximized' ? null : 'drag-handle'} 
      enableResizing={true}
      disableDragging={windowState === 'maximized'}
    >
      <div className="rounded-sm border-[3px] border-blue-700 bg-white shadow-xl overflow-hidden flex flex-col h-full cursor-default">
        {/* Title Bar */}
        <div className={`text-white text-sm font-semibold px-4 py-1 flex justify-between items-center ${windowState === 'maximized' ? '' : 'drag-handle'} select-none cursor-default ${isContactWindow ? 'bg-blue-700' : 'bg-blue-700'}`}>
          <span>{currentPage?.label || 'Window'}</span>
          <div className="text-xs flex gap-1">
            <span className="cursor-pointer hover:bg-blue-800 px-1 rounded" onClick={onMinimize}>_</span>
            <span className="cursor-pointer hover:bg-blue-800 px-1 rounded" onClick={onMaximizeRestore}>□</span>
            <span className="cursor-pointer hover:bg-blue-800 px-1 rounded" onClick={onClose}>✕</span>
          </div>
        </div>
        
        {/* Menu Bar */}
        <div className="bg-gray-200 text-sm text-[13px] px-4 py-1 border-b border-gray-300 flex items-center justify-between">
          <div className="flex gap-1">
            <span className="px-2 py-1 cursor-pointer hover:bg-gray-300 active:bg-gray-400" onClick={() => {}}>File</span>
            <span className="px-2 py-1 cursor-pointer hover:bg-gray-300 active:bg-gray-400" onClick={() => {}}>Edit</span>
            <span className="px-2 py-1 cursor-pointer hover:bg-gray-300 active:bg-gray-400" onClick={() => {}}>View</span>
            <span className="px-2 py-1 cursor-pointer hover:bg-gray-300 active:bg-gray-400" onClick={() => {}}>Tools</span>
          </div>
          <div className="ml-auto flex gap-2">
            {!isContactWindow && (
              <>
                <button onClick={handleBack} disabled={navIndex === 0 && !openProjectId} className="px-2 py-1 border rounded disabled:opacity-50 ml-2 cursor-pointer">&#8592; Back</button>
                <button onClick={goForward} disabled={navIndex === navStack.length - 1 || navIndex === 0} className="px-2 py-1 border rounded disabled:opacity-50 cursor-pointer">Forward &#8594;</button>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={`flex-1 flex flex-col cursor-default ${
          !isContactWindow && ['folders', 'experience', 'projects'].includes(currentPage.key) 
            ? 'items-start justify-start' 
            : 'items-center justify-center'
        } bg-white p-8 w-full overflow-auto min-h-0`}>
          {renderContent()}
        </div>
      </div>
    </Rnd>
  );
}