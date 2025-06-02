import React from 'react';

export default function SkillsPage() {
  const technicalSkills = {
    "Frontend": [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "TypeScript",
      "Placeholder Tech Skill 1",
      "Placeholder Tech Skill 2",
      "Placeholder Tech Skill 3",
      "Placeholder Tech Skill 4",
      "Placeholder Tech Skill 5",
    ],
    "Backend": [
      "Node.js",
      "Express",
      "Python",
      "MongoDB",
      "SQL",
    ],
    "Tools & Others": [
      "Git",
      "Docker",
      "AWS",
      "Figma",
      "Agile/Scrum",
    ]
  };

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
    "Critical Thinking",
    "Leadership",
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-4">

        {/* Technical Skills Section */}
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        
        <div className="space-y-6">
          {Object.entries(technicalSkills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <h2 className="text-2xl font-bold mt-8 mb-6">Soft Skills</h2>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <span 
              key={skill}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
} 