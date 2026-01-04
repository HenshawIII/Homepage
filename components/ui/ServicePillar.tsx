interface ServicePillarProps {
  title: string;
  description: string;
  includes: string[];
  microTagline: string;
}

export function ServicePillar({
  title,
  description,
  includes,
  microTagline,
}: ServicePillarProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">
        {title}
      </h3>
      
      <p className="text-gray-700 font-body mb-6 grow">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 font-body mb-3 uppercase tracking-wide">
          Includes
        </h4>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="text-gray-600 font-body text-sm flex items-start">
              <span className="text-[#216299] mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm font-semibold text-[#216299] font-body italic mt-auto pt-4 border-t border-gray-200">
        {microTagline}
      </p>
    </div>
  );
}

