import FolderGrid from "./FolderGrid";
import { Rnd } from "react-rnd";
import ContactPanel from "./ContactPanel";

export default function WindowPage({ currentPage, navIndex, navStack, goBack, goForward, pushPage, sectionPages }) {
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
          <div className="text-xs">_ □ ✕</div>
        </div>
        {/* Menu Bar */}
        {currentPage.key === 'contact' ? (
          <>
            <div className="bg-gray-200 text-xs px-4 py-1 border-b border-gray-300 flex gap-4 select-none">
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Insert</span>
              <span>Format</span>
              <span>Tools</span>
              <span>Message</span>
              <span>Help</span>
            </div>
            <ContactPanel />
          </>
        ) : (
          <>
            <div className="bg-gray-200 text-[13px] px-4 py-1 border-b border-gray-300 flex items-center">
              <span>File &nbsp; Edit &nbsp; Place &nbsp; Holder</span>
              <div className="ml-auto flex gap-2">
                <button onClick={goBack} disabled={navIndex === 0} className="px-2 py-1 border rounded disabled:opacity-50 ml-2">&#8592; Back</button>
                <button onClick={goForward} disabled={navIndex === navStack.length - 1 || navIndex === 0} className="px-2 py-1 border rounded disabled:opacity-50">Forward &#8594;</button>
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center bg-white p-8 w-full">
              {currentPage.key === 'description' && (
                <>
                  <div className="text-base text-gray-800 text-center max-w-xl mb-8">
                    Hi! I'm Shreya Balakrishna, a developer and designer passionate about building delightful digital experiences. Welcome to my portfolio!
                  </div>
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
                    onClick={() => pushPage('folders')}
                  >
                    View Folders
                  </button>
                </>
              )}
              {currentPage.key === 'folders' && (
                <FolderGrid setActiveTab={pushPage} />
              )}
              {sectionPages.some(s => s.key === currentPage.key) && currentPage.key !== 'contact' && (
                <div className="text-base text-gray-800 text-center max-w-xl">
                  {currentPage.label}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Rnd>
  );
}