const tabs = [
    { label: "About Me", key: "about" },
    { label: "Experience", key: "experience" },
    { label: "Projects", key: "projects" },
    { label: "Skills", key: "skills" },
    { label: "Contact Me", key: "contact" },
  ];
  
  export default function FolderGrid({ setActiveTab }) {
    return (
      <div className="flex gap-6 justify-center mb-4 flex-wrap">
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <img
              src="/folder-icon.png" 
              alt={tab.label}
              className="w-12 h-12"
            />
            <p className="text-xs mt-1">{tab.label}</p>
          </div>
        ))}
      </div>
    );
  }