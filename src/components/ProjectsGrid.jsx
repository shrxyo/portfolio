import projectsData from '../data/projects/index.json';

export default function ProjectsGrid({ onSelect }) {
  return (
    <div className="flex gap-8 justify-center flex-wrap mt-8">
      {projectsData.projects.map(project => (
        <div
          key={project.id}
          onClick={() => onSelect(project.id)}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
        >
          <img
            src={project.icon}
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