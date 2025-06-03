import { useEffect, useState } from 'react';

export default function ExperienceDetail({ expId, onBack, data }) {
  if (!data) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-2xl font-bold mb-2 text-justify">{data.mainHeading}</div>
        <div className="text-lg font-semibold mb-4 flex items-center gap-2 text-justify">
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
        <div className="font-bold mb-1 underline text-justify">Tech Stack:</div>
        <div className="flex gap-6 mb-6 flex-wrap">
        
          {data.technologies && (
            <span className="italic text-sm text-justify">
              {Array.isArray(data.technologies[0]) || typeof data.technologies[0] === 'string'
                ? data.technologies.join(', ')
                : data.technologies.map(t => t.name).join(', ')}
            </span>
          )}
        </div>
        <div className="mb-4">
          <div className="font-bold mb-1 underline text-justify">Context:</div>
          <div className="text-sm text-justify">{data.context}</div>
        </div>
        <div className="mb-4">
          <div className="font-bold mb-1 underline text-justify">Objectives:</div>
          <ul className="list-disc ml-6 text-sm text-justify">
            {data.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 