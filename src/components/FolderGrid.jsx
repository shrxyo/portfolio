import { useIsMobile } from '../hooks/useIsMobile';

const tabs = [
    { label: "About Me", key: "about", icon: "src/assets/about.png" },
    { label: "Experience", key: "experience", icon: "src/assets/folder.png" },
    { label: "Projects", key: "projects", icon: "src/assets/folder.png" },
    { label: "Skills", key: "skills", icon: "src/assets/folder.png" },
  ];
  
  export default function FolderGrid({ setActiveTab }) {
    const isMobile = useIsMobile();
    return (
      <div className={`flex flex-wrap ${isMobile ? 'gap-2 p-2' : 'gap-4 p-2'} items-start justify-start cursor-default w-full`}>
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-3 rounded transition"
            style={{ width: isMobile ? '80px' : '128px' }}
          >
            <img
              src={tab.icon}
              alt={tab.label}
              className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'}`}
            />
            <p className="text-sm font-medium mt-2 text-center ">{tab.label}</p>
          </div>
        ))}
      </div>
    );
  }