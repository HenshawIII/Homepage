export function ContextStrip() {
  return (
    <section className="bg-white border-y border-gray-200 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm sm:text-base text-gray-600 font-body text-center md:text-left">
            <span className="font-semibold">Business Intelligence</span> •{" "}
            <span className="font-semibold">Software & Apps</span> •{" "}
            <span className="font-semibold">Automation</span> •{" "}
            <span className="font-semibold">Blockchain</span> •{" "}
            <span className="font-semibold">Digital Media</span>
          </div>
          <div className="text-sm sm:text-base text-[#216299] font-semibold font-body italic">
            Built in Africa. Designed for the world.
          </div>
        </div>
      </div>
    </section>
  );
}

