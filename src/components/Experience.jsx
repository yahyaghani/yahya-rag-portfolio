import React from 'react';
import { experiences } from '../utils/data/experience';
import { BsPersonWorkspace } from 'react-icons/bs';
import GlowCard from './helpers/GlowCard';

const Experience = ({ onCardClick }) => {
  const getWidthPercentage = (months) => {
    const maxMonths = Math.max(...experiences.map(e => e.months));
    const minWidth = 200; // Minimum width in pixels
    const maxWidth = 400; // Maximum width in pixels
    const width = ((months / maxMonths) * (maxWidth - minWidth)) + minWidth;
    return width;
  };

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <img
        src="/section.svg"
        alt="SectionSvg"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="py-8">
        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-wrap justify-center gap-6">
            {experiences.map(experience => (
              <GlowCard
                key={experience.id}
                identifier={`experience-${experience.id}`}
                onClick={() => onCardClick(experience.query)}
                width={getWidthPercentage(experience.months)}
              >
                <div className="p-3 relative overflow-hidden h-full">
                  <img
                    src="/blur-23.svg"
                    alt="BlurSvg"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {experience.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
