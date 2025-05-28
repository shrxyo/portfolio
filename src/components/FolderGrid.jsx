const tabs = [
    { label: "About Me", key: "about", icon: "src/assets/about.png" },
    { label: "Experience", key: "experience", icon: "src/assets/folder.png" },
    { label: "Projects", key: "projects", icon: "src/assets/folder.png" },
    { label: "Skills", key: "skills", icon: "src/assets/folder.png" },
    { label: "Contact Me", key: "contact", icon: "src/assets/folder.png" },
  ];
  
  export default function FolderGrid({ setActiveTab }) {
    return (
      <div className="flex gap-6 justify-center mb-4 flex-wrap cursor-default">
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <img
              src={tab.icon}
              alt={tab.label}
              className="w-12 h-12"
            />
            <p className="text-xs mt-1">{tab.label}</p>
          </div>
        ))}
      </div>
    );
  }