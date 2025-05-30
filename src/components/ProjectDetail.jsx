import { useEffect, useState } from 'react';

export default function ProjectDetail({ projectId, onBack }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    import(`../data/projects/${projectId}.json`).then(mod => setData(mod.default));
  }, [projectId]);

  if (!data) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-2xl font-bold mb-2">{data.mainHeading}</div>
        <div className="text-lg font-semibold mb-4 flex items-center gap-2">
          
          {data.dates}
        </div>

        <div className="flex gap-4 mb-6">
          {data.githubLink && (
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-1 rounded shadow hover:bg-gray-700 transition text-xs cursor-pointer"
            >
              View on GitHub
            </a>
          )}
          {data.liveLink && (
            <a
              href={data.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-1 rounded shadow hover:bg-blue-700 transition text-xs cursor-pointer"
            >
              Documentation
            </a>
          )}
        </div>

        {/* Technologies */}
        <div className="flex gap-6 mb-6 flex-wrap">
          {data.technologies.map(tech => (
            <div key={tech.name} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-1" />
              <span className="text-xs font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Context */}
        <div className="mb-4">
          <div className="font-semibold mb-1">Context</div>
          <div className="text-sm">{data.context}</div>
        </div>

        {/* Objectives */}
        <div className="mb-4">
          <div className="font-semibold mb-1">Objectives</div>
          <ul className="list-disc ml-6 text-sm">
            {data.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="font-semibold mb-1">Key Features</div>
          <ul className="list-disc ml-6 text-sm">
            {data.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
} 