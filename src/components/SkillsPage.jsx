import React from 'react';

export default function SkillsPage() {
  const technicalSkills = {
    "Programming Languages": [
      "Python",
      "JavaScript",
      "HTML/CSS",
      "TypeScript",
      "R Programming",
    ],
    "Full Stack Development": [
      "React",
      "TailwindCSS",
      "Django",
      "Flask",
      "Electron.js",
      "Git",
      "PostgreSQL",
      "MySQL",
    ],
    "AI/ ML": [
      "Tensorflow",
      "Pytorch",
      "Keras",
      "Hugging Face Transformers",
      "ChromaDB",
      "LLM Fine-tuning",
      "OpenCV",
      "NLTK",
    ],
    "Data Analysis": [
      "Pandas",
      "Tableau",
      "Microsoft Excel",
      "PowerBI",
      "NumPy",
      "MATLAB",
      "Seaborn",
      "Beautiful Soup",
    ],
    "Cloud": [
      "Amazon Web Services",
      "IBM Cloud",
    ],
    "Design": [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Procreate",
    ],
  };



  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-5xl mx-auto p-4">

        {/* Technical Skills Section */}
        {/* <h2 className="text-2xl font-bold mb-6">Technical Skills</h2> */}
        
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

        

      </div>
    </div>
  );
} 