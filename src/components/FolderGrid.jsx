const tabs = [
    { label: "About Me", key: "about", icon: "src/assets/about.png" },
    { label: "Experience", key: "experience", icon: "src/assets/folder.png" },
    { label: "Projects", key: "projects", icon: "src/assets/folder.png" },
    { label: "Skills", key: "skills", icon: "src/assets/folder.png" },
    { label: "Contact Me", key: "contact", icon: "src/assets/folder.png" },
  ];
  
  export default function FolderGrid({ setActiveTab }) {
    return (
      <div className="flex flex-wrap gap-4 p-2 items-start justify-start cursor-default w-full">
        {tabs.map(tab => (
          <div
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-3 rounded transition w-32"
          >
            <img
              src={tab.icon}
              alt={tab.label}
              className="w-16 h-16"
            />
            <p className="text-sm font-medium mt-2 text-center">{tab.label}</p>
          </div>
        ))}
      </div>
    );
  }