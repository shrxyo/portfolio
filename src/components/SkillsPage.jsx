import React from 'react';

export default function SkillsPage() {
  const skills = {
    "Frontend": [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" }
    ],
    "Backend": [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "SQL", level: "Basic" }
    ],
    "Tools & Others": [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Basic" },
      { name: "AWS", level: "Basic" },
      { name: "Figma", level: "Intermediate" },
      { name: "Agile/Scrum", level: "Intermediate" }
    ]
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold mb-4 text-blue-700">{category}</h3>
              <div className="space-y-3">
                {skillList.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          skill.level === 'Advanced' ? 'bg-green-500 w-4/5' :
                          skill.level === 'Intermediate' ? 'bg-blue-500 w-3/5' :
                          'bg-yellow-500 w-2/5'
                        }`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Communication",
              "Time Management",
              "Adaptability",
              "Attention to Detail",
              "Critical Thinking",
              "Leadership"
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-blue-50 text-blue-700 px-4 py-2 rounded text-center text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 