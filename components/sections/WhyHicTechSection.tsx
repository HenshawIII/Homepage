export function WhyHicTechSection() {
  const points = [
    "Built for African businesses, with global standards",
    "One partner for brand, systems, and digital presence",
    "Scalable solutions designed for long-term growth",
    "Clear communication and human-centered execution",
    "Future-ready thinking without unnecessary complexity",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
            Why Businesses Choose HIC Tech
          </h2>
          
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#216299] mr-3 mt-1 font-bold text-xl">•</span>
                <span className="text-lg text-gray-700 font-body">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

