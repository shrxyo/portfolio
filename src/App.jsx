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

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div
      className="w-screen h-screen flex flex-col justify-between"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Centered Window */}
      <div className="flex-1 flex items-center justify-center">
        <WindowPage activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {/* Taskbar at the bottom */}
      <Taskbar />
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
