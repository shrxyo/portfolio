import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import WindowPage from "./components/Window";
import Taskbar from "./components/Taskbar";
import "./index.css";
import wallpaper from "./assets/wallpaper.jpeg";

const sectionPages = [
  { key: 'about', label: 'About Me' },
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

  const currentPageKey = navStack[navIndex];
  const currentPage = allPages.find(p => p.key === currentPageKey);

  const pushPage = (key) => {
    const newStack = navStack.slice(0, navIndex + 1);
    setNavStack([...newStack, key]);
    setNavIndex(newStack.length);
  };
  const popPage = () => {
    if (navIndex > 0) setNavIndex(navIndex - 1);
  };
  const goForward = () => {
    if (navIndex < navStack.length - 1) setNavIndex(navIndex + 1);
  };
  const goBack = () => {
    if (navIndex > 0) setNavIndex(navIndex - 1);
  };

  return (
    <div
      className="w-screen h-screen flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Centered Window */}
      <div className="flex-1 flex items-center justify-center">
        <WindowPage
          currentPage={currentPage}
          navIndex={navIndex}
          navStack={navStack}
          goBack={goBack}
          goForward={goForward}
          pushPage={pushPage}
          sectionPages={sectionPages}
        />
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
