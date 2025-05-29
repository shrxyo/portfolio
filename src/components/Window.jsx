import FolderGrid from "./FolderGrid";
import { Rnd } from "react-rnd";
import ContactPanel from "./ContactPanel";
import ExperienceGrid from "./ExperienceGrid";
import ExperienceDetail from "./ExperienceDetail";
import ProjectsGrid from "./ProjectsGrid";
import ProjectDetail from "./ProjectDetail";
import LandingPage from "./LandingPage";
import { useState } from "react";

export default function WindowPage({ currentPage, navIndex, navStack, goBack, goForward, pushPage, sectionPages, onClose }) {
  const [openExpId, setOpenExpId] = useState(null);
  const [openProjectId, setOpenProjectId] = useState(null);

  const renderContent = () => {
    switch (currentPage.key) {
      case 'description':
        return <LandingPage onMenuClick={() => pushPage('folders')} />;
      case 'folders':
        return <FolderGrid setActiveTab={pushPage} />;
      case 'experience':
        return openExpId ? (
          <ExperienceDetail expId={openExpId} onBack={() => setOpenExpId(null)} />
        ) : (
          <ExperienceGrid onSelect={setOpenExpId} />
        );
      case 'projects':
        return openProjectId ? (
          <ProjectDetail projectId={openProjectId} onBack={() => setOpenProjectId(null)} />
        ) : (
          <ProjectsGrid onSelect={setOpenProjectId} />
        );
      case 'contact':
        return <ContactPanel />;
      default:
        if (sectionPages.some(s => s.key === currentPage.key)) {
          const SectionComponent = sectionPages.find(s => s.key === currentPage.key)?.component;
          return SectionComponent ? <SectionComponent /> : null;
        }
        return null;
    }
  };

  return (
    <Rnd
      default={{
        x: window.innerWidth / 2 - 350,
        y: window.innerHeight / 2 - 250,
        width: 700,
        height: 440,
      }}
      minWidth={500}
      minHeight={350}
      bounds="window"
      dragHandleClassName="drag-handle"
      enableResizing={true}
      className="z-10"
    >
      <div className="rounded-sm border-[3px] border-blue-700 bg-white shadow-xl overflow-hidden flex flex-col h-full">
        {/* Title Bar */}
        <div className={`text-white text-sm font-semibold px-4 py-1 flex justify-between items-center drag-handle select-none cursor-default ${currentPage.key === 'contact' ? 'bg-blue-700' : 'bg-blue-700'}`}>
          <span>{currentPage.key === 'contact' ? 'Contact me' : 'Shreya Balakrishna'}</span>
          <div className="text-xs flex gap-1">
            <span>_</span>
            <span>□</span>
            <span className="cursor-pointer hover:bg-blue-800 px-1 rounded" onClick={onClose}>✕</span>
          </div>
        </div>
        {/* Menu Bar */}
        <div className="bg-gray-200 text-sm text-[13px] px-4 py-1 border-b border-gray-300 flex items-center justify-between">
          <span>File &nbsp; Edit &nbsp; Place &nbsp; Holder</span>
          <div className="ml-auto flex gap-2">
            <button onClick={goBack} disabled={navIndex === 0} className="px-2 py-1 border rounded disabled:opacity-50 ml-2">&#8592; Back</button>
            <button onClick={goForward} disabled={navIndex === navStack.length - 1 || navIndex === 0} className="px-2 py-1 border rounded disabled:opacity-50">Forward &#8594;</button>
          </div>
        </div>
        {/* Content */}
        {/* below code works for now, got to make it better later. */}
        <div className={`flex-1 flex flex-col ${currentPage.key === 'folders' ? 'items-start justify-start' : 'items-center justify-center'} bg-white p-8 w-full overflow-auto min-h-0`}>
          {renderContent()}
        </div>
      </div>
    </Rnd>
  );
}