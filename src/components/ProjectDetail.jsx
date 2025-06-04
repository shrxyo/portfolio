import { useEffect, useState } from 'react';

export default function ProjectDetail({ projectId, onBack, data }) {
  if (!data) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold mb-2 text-justify">{data.mainHeading}</div>
        <div className="text-lg font-semibold mb-4 flex items-center gap-2 text-justify">
          
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
              Code
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
        <div className="mb-6">
          <div className="font-bold mb-1 underline">Tech Stack:</div>
          <span className="italic text-sm text-justify">
            {Array.isArray(data.technologies[0]) || typeof data.technologies[0] === 'string'
              ? data.technologies.join(', ')
              : data.technologies.map(t => t.name).join(', ')}
          </span>
        </div>

        {/* Context */}
        <div className="mb-4">
          <div className="font-bold mb-1 underline text-justify">Overview:</div>
          <div className="text-sm text-justify">{data.context}</div>
        </div>

        {/* Objectives */}
        <div className="mb-4">
          <div className="font-bold mb-1 underline text-justify">Project Description:</div>
          <ul className="list-disc ml-6 text-sm text-justify">
            {data.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="font-bold mb-1 underline text-justify">Key Features:</div>
          <ul className="list-disc ml-6 text-sm text-justify">
            {data.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
} 