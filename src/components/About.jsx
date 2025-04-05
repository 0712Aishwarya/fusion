import { useState } from 'react';
import { Element } from 'react-scroll';

export default function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <Element name='about'>

    
    <div className="relative bg-[#d6c8b8] pb-32 overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-1 z-0">
        <svg
          className="relative block w-full h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f3ebe2"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,133.3C672,117,768,75,864,80C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* About Content */}
      <div className="relative z-10 container mx-auto pt-32 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">About Fusion Planner</h2>
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Best Wedding Services in India</h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Fusion Planner is here to help you plan the wedding of your dreams – stress-free, beautifully, and just the way you imagined.
          {readMore && (
            <>
              <br />
              As India’s most trusted wedding service provider, we specialize in end-to-end solutions that include venue bookings, décor, entertainment, and more. With 1,000+ weddings successfully planned, we’re passionate about crafting experiences that reflect your story.
            </>
          )}
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setReadMore(!readMore)}
          className="mt-4 text-[#7B3F00] underline hover:text-[#170f07] transition"
        >
          {readMore ? 'Read less' : 'Read more'}
        </button>
      </div>

      {/* Bottom wave - flipped and layered behind */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          className="relative block w-full h-28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f3f3ed"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,133.3C672,117,768,75,864,80C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
    </Element>
  );
}
