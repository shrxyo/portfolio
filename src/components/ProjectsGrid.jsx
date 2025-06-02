import projectsData from '../data/projects/index.json';
import folderIcon from '../assets/folder.png';

export default function ProjectsGrid({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-6 p-4 items-start justify-start cursor-default w-full">
      {projectsData.projects.map(project => (
        <div
          key={project.id}
          onClick={() => onSelect(project.id)}
          className="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded transition w-32"
        >
          <img
            src={folderIcon}
            alt={project.title}
            className="w-16 h-16 mb-2"
          />
          <div className="text-sm font-bold text-center">{project.title}</div>
          <div className="text-xs text-gray-500 text-center">{project.dates}</div>
        </div>
      ))}
    </div>
  );
} 