import { useEffect, useState } from 'react';

export default function ExperienceDetail({ expId, onBack, data }) {
  if (!data) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold mb-2">{data.mainHeading}</div>
        <div className="text-lg font-semibold mb-4 flex items-center gap-2">
          {data.dates}
        </div>
        {data.githubLink && (
          <div className="flex gap-4 mb-6">
            <a
              href={data.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-1 rounded shadow hover:bg-gray-700 transition text-xs cursor-pointer"
            >
              Code
            </a>
          </div>
        )}
        <div className="flex gap-6 mb-6 flex-wrap">
          {data.technologies.map(tech => (
            <div key={tech.name} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-1" />
              <span className="text-xs font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <div className="font-bold mb-1 underline">Context:</div>
          <div className="text-sm">{data.context}</div>
        </div>
        <div className="mb-4">
          <div className="font-bold mb-1 underline">Objectives:</div>
          <ul className="list-disc ml-6 text-sm">
            {data.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 