import { useEffect, useState } from 'react';

export default function ExperienceDetail({ expId, onBack }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    import(`../data/experience/${expId}.json`).then(mod => setData(mod.default));
  }, [expId]);

  if (!data) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto ">
        <div className="text-2xl font-bold ">{data.mainHeading}</div>
        <div className="text-lg font-semibold mb-4 flex items-center gap-2">

          {data.dates}
        </div>
        <div className="flex gap-6 mb-6 flex-wrap">
          {data.technologies.map(tech => (
            <div key={tech.name} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-1" />
              <span className="text-xs font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <div className="font-semibold mb-1">Context</div>
          <div className="text-sm">{data.context}</div>
        </div>
        <div>
          <div className="font-semibold mb-1">Objectives</div>
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