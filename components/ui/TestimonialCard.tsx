import Image from "next/image";

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    authorName: string;
    authorTitle: string;
    authorImage: string;
    personImage: string;
    companyLogo?: string;
    companyName?: string;
    backgroundColor: string;
  };
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="grid grid-rows-6 grid-cols-6 gap-2 mx-auto max-w-full">
      {/* Image Card */}
      <div className="relative hidden xl:block w-full xl:min-h-[40vh] col-span-1 row-span-5  rounded-2xl overflow-hidden bg-gray-200">
        <Image
          src={testimonial.personImage}
          alt="Team member"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1280px) 100vw, 50vw"
        />
      </div>

      

      {/* Testimonial Card */}
      <div className={`${testimonial.backgroundColor} rounded-2xl col-span-6 xl:col-span-5 flex flex-col justify-between row-span-6 p-6 sm:p-8 space-y-6`}>
        {/* Quote */}
        <div className="space-y-4 text-center xl:text-left">
          <div className="flex justify-center xl:justify-start">
            <svg
              className="w-8 h-8 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10z" />
            </svg>
          </div>
          <p className="text-base sm:text-xl text-gray-700 font-body leading-relaxed">
            {testimonial.quote}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-center xl:justify-start gap-4 pt-4 border-t border-gray-300">
          {/* Author Image - Mobile Only */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden xl:hidden flex-shrink-0">
            <Image
              src={testimonial.personImage}
              alt={testimonial.authorName}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <p className="font-bold text-gray-900 font-body">
              {testimonial.authorName}
            </p>
            <p className="text-sm text-gray-600 font-body">
              {testimonial.authorTitle}
            </p>
          </div>
        </div>
      </div>

      {/* Logo Card */}
      <div className="bg-gray-100 hidden rounded-xl p-4 row-span-1 col-span-1 xl:flex items-center gap-3">
        {testimonial.companyLogo ? (
          <div className="w-8 h-8 relative">
            <Image
              src={testimonial.companyLogo}
              alt={testimonial.companyName || "Company logo"}
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>
        ) : (
          <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        <span className="text-gray-900 font-semibold font-body">
          {testimonial.companyName || "Logoipsum"}
        </span>
      </div>
    </div>
  );
}

