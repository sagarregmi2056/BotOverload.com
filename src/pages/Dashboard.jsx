import React, { useEffect, useRef } from 'react';

const Dashboard = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      const handleCanPlay = () => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      };
      videoRef.current.addEventListener('canplay', handleCanPlay);
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#010108]">
      <div className="max-w-6xl mx-auto p-8">
        {/* Simplified Monitor Frame */}
        <div className="bg-[#010108] rounded-xl overflow-hidden">
          {/* Top Bar */}
          <div className="bg-gray-900/50 border-b border-gray-700/50 p-3 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              {/* Platform Icons */}
              <div className="flex space-x-4">
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5.557L10.15 4.608L10.156 11.496L3.007 11.544L3 5.557ZM10.145 12.516L10.153 19.414L3.007 18.455L3.007 12.473L10.145 12.516ZM11.153 4.46L20 3.25L20 11.377L11.153 11.445L11.153 4.46ZM20.001 12.526L20 20.627L11.153 19.457L11.142 12.522L20.001 12.526Z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              className="px-3 py-1 text-sm bg-gray-800/50 border border-gray-700/50 rounded-md w-64 text-gray-300 placeholder-gray-500"
              placeholder="Search..."
            />
          </div>

          {/* Main Content */}
          <div>
            <header className="p-6">
              <h1 className="text-2xl font-bold text-white">Cross-Platform Dashboard</h1>
              <p className="text-gray-400">Available on all major platforms</p>
            </header>

            {/* Video Section */}
            <div className="relative w-full aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="https://res.cloudinary.com/dfqc0mmdn/video/upload/v1735037848/original-c46d12d970c45ec42a5e8a4bb6d20d67_vwikvq.jpg"
                loading="eager"
                controls={false}
              >
                <source
                  src="https://res.cloudinary.com/dfqc0mmdn/video/upload/q_auto,f_auto,w_1280/v1735037848/original-c46d12d970c45ec42a5e8a4bb6d20d67_vwikvq.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://res.cloudinary.com/dfqc0mmdn/video/upload/q_auto,f_auto,w_1280/v1735037848/original-c46d12d970c45ec42a5e8a4bb6d20d67_vwikvq.webm"
                  type="video/webm"
                />
              </video>

              {/* Simplified Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#010108] via-transparent to-transparent opacity-90"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;