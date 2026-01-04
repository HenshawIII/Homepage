export function ProcessSection() {
  const steps = [
    {
      title: "Understand",
      description: "We learn your business, goals, and challenges.",
    },
    {
      title: "Design",
      description: "We map the right strategy, systems, and structure.",
    },
    {
      title: "Build",
      description: "We develop, deploy, and integrate with precision.",
    },
    {
      title: "Support & Scale",
      description: "We evolve with your business as it grows.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading text-center">
            How We Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-[#216299] text-white text-2xl font-bold font-heading">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-700 font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

