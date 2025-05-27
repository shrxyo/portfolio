import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import WindowPage from "./components/Window";
import Taskbar from "./components/Taskbar";
import "./index.css";
import wallpaper from "./assets/wallpaper.jpeg";
import FolderGrid from "./components/FolderGrid";
import ContentPanel from "./components/ContentPanel";

export default function Window({ activeTab, setActiveTab }) {
  return (
    // <div className="w-[700px] rounded-sm border-[3px] border-blue-700 bg-white shadow-xl overflow-hidden">
    <div className="w-screen h-screen bg-cover bg-center flex flex-col" 
      style={{ backgroundImage: `url(${wallpaper})` }}>
      {/* Title Bar */}
      <div className="bg-blue-700 text-white text-sm font-semibold px-3 py-1 flex justify-between items-center">
        <span>Shreya Balakrishna</span>
        <div className="text-xs">_ □ ✕</div>
      </div>

      {/* Menu Bar */}
      <div className="bg-gray-200 text-[12px] px-4 py-1 border-b border-gray-400">
        File &nbsp; Edit &nbsp; Place &nbsp; Holder
      </div>

      {/* Content */}
      <div className="p-4">
        <FolderGrid setActiveTab={setActiveTab} />
        <ContentPanel activeTab={activeTab} />
      </div>
    </div>
    
    
    

  );
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
