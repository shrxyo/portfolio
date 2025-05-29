import experiencesData from '../data/experience/index.json';

export default function ExperienceGrid({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-6 p-4 items-start justify-start cursor-default w-full">
      {experiencesData.experiences.map(exp => (
        <div
          key={exp.id}
          onClick={() => onSelect(exp.id)}
          className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
        >
          <img
            src={exp.icon}
            alt={exp.company}
            className="w-16 h-16 mb-2"
          />
          <div className="text-sm font-bold text-center">{exp.company}</div>
          <div className="text-xs text-center">{exp.designation}</div>
        </div>
      ))}
    </div>
  );
} 