import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page === 3 ? 1 : page + 1);
  };

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex flex-row space-x-1 lg:space-x-2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full" style={{ backgroundColor: 'green' }}></div>
          </div>
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl flex-grow text-center">
            {project.name}
          </p>
        </div>
        <div className="ml-auto">
          <button onClick={nextPage} className="flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full">
            <span>learn more</span>
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        {page === 1 && (
          <code className="font-mono text-xs md:text-sm lg:text-base">
            <div className="blink">
              <span className="mr-2 text-white">project</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-gray-400">{'{'}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
              <span className="text-gray-400">{`'`}</span>
              <span className="text-amber-300">{project.name}</span>
              <span className="text-gray-400">{`',`}</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">tools:</span>
              <span className="text-gray-400">{` ['`}</span>
              {project.tools.map((tool, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tool}</span>
                  {project.tools.length - 1 !== i && <span className="text-gray-400">{`', '`}</span>}
                </React.Fragment>
              ))}
              <span className="text-gray-400">{"],"}</span>
            </div>
            <div>
              <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
              <span className="text-orange-400">{project.role}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">Description:</span>
              <span className="text-cyan-400">{' ' + project.description}</span>
              <span className="text-gray-400">,</span>
            </div>
            <div><span className="text-gray-400">{`}`}</span></div>
          </code>
        )}
        {page === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img src={project.image1} alt={project.name} className="w-full h-48 object-cover" />
              <p className="mt-2 text-sm sm:text-base text-center">{project.description}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="mt-2 text-sm sm:text-base text-center">{project.description}</p>
              <img src={project.image2} alt={project.name} className="w-full h-48 object-cover" />
            </div>
          </div>
        )}
        {page === 3 && (
          <div className="flex justify-center">
            {project.video.includes('arcade.software') ? (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, width: '100%' }}>
                <iframe
                  src={project.video}
                  title={project.name}
                  frameBorder="0"
                  loading="lazy"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen
                  allow="clipboard-write"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            ) : (
              <video controls className="w-full">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
