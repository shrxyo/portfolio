import FolderGrid from "./FolderGrid";
import { Rnd } from "react-rnd";

export default function WindowPage({ currentPage, navIndex, navStack, goBack, goForward, pushPage, sectionPages }) {
  return (
    <Rnd
      default={{
        x: window.innerWidth / 2 - 350,
        y: window.innerHeight / 2 - 250,
        width: 700,
        height: 400,
      }}
      minWidth={400}
      minHeight={300}
      bounds="window"
      dragHandleClassName="drag-handle"
      enableResizing={true}
      className="z-10"
    >
      <div className="border-4 border-blue-700 bg-white shadow-lg h-full flex flex-col">
        {/* Title Bar */}
        <div className="bg-blue-700 text-white p-2 font-bold text-sm flex justify-between drag-handle cursor-move select-none">
          <span>Shreya Balakrishna</span>
          <span>_ [] X</span>
        </div>
        {/* Menu Bar */}
        <div className="bg-gray-100 text-xs px-3 py-1 border-b border-gray-300 flex items-center">
          <span>File &nbsp; Edit &nbsp; Place &nbsp; Holder</span>
          <div className="ml-auto flex gap-2">
            <button onClick={goBack} disabled={navIndex === 0} className="px-2 py-1 border rounded disabled:opacity-50 ml-2">&#8592; Back</button>
            <button onClick={goForward} disabled={navIndex === navStack.length - 1} className="px-2 py-1 border rounded disabled:opacity-50">Forward &#8594;</button>
          </div>
        </div>
        {/* Content */}
        <div className="p-4 min-h-[120px] flex-1 flex flex-col items-center justify-center overflow-auto">
          {currentPage.key === 'description' && (
            <>
              <div className="text-base text-gray-800 text-center max-w-xl mb-6">
                Hi! I'm Shreya Balakrishna, a developer and designer passionate about building delightful digital experiences. Welcome to my portfolio!
              </div>
              <button
                className="bg-blue-600 text-black px-4 py-2 rounded shadow hover:bg-blue-700 transition"
                onClick={() => pushPage('folders')}
              >
                View Folders
              </button>
            </>
          )}
          {currentPage.key === 'folders' && (
            <FolderGrid setActiveTab={pushPage} />
          )}
          {sectionPages.some(s => s.key === currentPage.key) && (
            <div className="text-base text-gray-800 text-center max-w-xl">
              {currentPage.label}
            </div>
          )}
        </div>
      </div>
    </Rnd>
  );
}