import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Monitor Frame */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="relative">
          {/* Monitor Frame */}
          <div className="bg-gray-800 rounded-2xl p-3 shadow-2xl">
            {/* Screen Bezel */}
            <div className="bg-gray-900 rounded-xl p-2">
              {/* Screen Content */}
              <div className="bg-white rounded-lg shadow-inner min-h-[600px] relative overflow-hidden">
                {/* Top Bar */}
                <div className="bg-gray-100 border-b border-gray-200 p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    {/* Apple Logo */}
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                    {/* Windows Logo */}
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 5.557L10.15 4.608L10.156 11.496L3.007 11.544L3 5.557ZM10.145 12.516L10.153 19.414L3.007 18.455L3.007 12.473L10.145 12.516ZM11.153 4.46L20 3.25L20 11.377L11.153 11.445L11.153 4.46ZM20.001 12.526L20 20.627L11.153 19.457L11.142 12.522L20.001 12.526Z" />
                    </svg>
                    {/* Android Logo */}
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z" />
                    </svg>
                    {/* iOS Logo */}
                    <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.07 19.07L5.35 13.35C4.96 12.96 4.96 12.32 5.35 11.93L6.75 10.53C7.14 10.14 7.78 10.14 8.17 10.53L12 14.36L15.83 10.53C16.22 10.14 16.86 10.14 17.25 10.53L18.65 11.93C19.04 12.32 19.04 12.96 18.65 13.35L12.93 19.07C12.54 19.46 11.9 19.46 11.51 19.07H11.07Z" />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      className="px-3 py-1 text-sm bg-gray-50 border border-gray-200 rounded-md w-64"
                      placeholder="Search..."
                    />
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-6 space-y-6">
                  <header>
                    <h1 className="text-2xl font-bold text-gray-800">Cross-Platform Dashboard</h1>
                    <p className="text-gray-500">Available on all major platforms</p>
                  </header>

                  {/* Video Section */}
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="https://res.cloudinary.com/dfqc0mmdn/video/upload/v1735037848/original-c46d12d970c45ec42a5e8a4bb6d20d67_vwikvq.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30">
                      {/* Center Play/Pause Button */}
                      <div className="absolute inset-0 flex items-center justify-center group">
                        <button
                          className="p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 
                                     transform hover:scale-110 text-white border border-white/20"
                        >
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>

                      {/* Bottom Controls Bar */}
                      <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-center justify-between bg-gradient-to-t from-black/50 via-black/25 to-transparent">
                        {/* Left Side Controls */}
                        <div className="flex items-center space-x-3">
                          <button className="p-2 rounded-full hover:bg-white/20 transition-colors text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </button>
                          <div className="text-white text-sm">00:00 / 02:30</div>
                        </div>

                        {/* Right Side Controls */}
                        <div className="flex items-center space-x-3">
                          <button className="p-2 rounded-full hover:bg-white/20 transition-colors text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                            </svg>
                          </button>
                          <button className="p-2 rounded-full hover:bg-white/20 transition-colors text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monitor Stand */}
          <div className="mx-auto" style={{
            width: '120px',
            height: '60px',
            background: 'linear-gradient(to bottom, #374151, #1f2937)',
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
            marginTop: '-1px'
          }}></div>

          {/* Stand Base */}
          <div className="mx-auto mt-1 bg-gray-700 h-3 w-[200px] rounded-full shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;