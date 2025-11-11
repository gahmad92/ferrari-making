import React from "react";
import "../App.css";
const Hero = () => {
  return (
    <>
      <div id="hero">
        <div className="relative overflow-hidden bg-gradient-to-r from-red-100 via-white to-orange-50">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="custom-heading1 text-[clamp(1.5rem,5vw,3.75rem)] font-bold tracking-tight text-gray-900">
                 <span className="text-orange-600">Peakplay </span>
                  <span className="hidden lg:inline">is finally here</span>
                </h1>
                 <p className="custom-para mt-4 text-2xl">
                  Elevate Your Game, Every Day{" "}
                  <a
                    href="#"
                    className="sm:hidden inline-block rounded-md border border-transparent bg-indigo-600 px-4 py-2 mx-2 text-center text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    register for Race or watch live
                  </a>
                </p>

                <p className="mt-4 text-[clamp(1rem,2.5vw,1.25rem)] text-gray-500">
                  This year, our new Sports collection will shelter you from the
                  boring life of no speeding...
                </p>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        {/* First Column - Vertical Scroll */}
                        <div className="h-[800px] overflow-hidden">
                          <div className="animate-vertical-scroll-1">
                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg"
                                  alt="Sports activity"
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/6453051/pexels-photo-6453051.jpeg"
                                  alt="Sports competition"
                                  className="size-full object-cover"
                                />
                              </div>
                              {/* Additional images for scrolling */}
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/29252120/pexels-photo-29252120.jpeg"
                                  alt="Basketball game"
                                  className="size-full object-cover"
                                />
                              </div>

                              {/* Duplicate set for seamless scroll */}
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg"
                                  alt="Sports activity"
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/6453051/pexels-photo-6453051.jpeg"
                                  alt="Sports competition"
                                  className="size-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Second Column - Vertical Scroll */}
                        <div className="h-[800px] overflow-hidden">
                          <div className="animate-vertical-scroll-2">
                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/12506014/pexels-photo-12506014.jpeg"
                                  alt="Athlete training"
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/29390578/pexels-photo-29390578.jpeg"
                                  alt="Main sports event"
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/13871063/pexels-photo-13871063.jpeg"
                                  alt="Sports team"
                                  className="size-full object-cover"
                                />
                              </div>
                              {/* Additional images for scrolling */}

                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/34025287/pexels-photo-34025287.jpeg"
                                  alt="Tennis match"
                                  className="size-full object-cover"
                                />
                              </div>
                              {/* Duplicate set for seamless scroll */}

                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/29390578/pexels-photo-29390578.jpeg"
                                  alt="Main sports event"
                                  className="size-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Third Column - Vertical Scroll */}
                        <div className="h-[800px] overflow-hidden">
                          <div className="animate-vertical-scroll-3">
                            <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/19294792/pexels-photo-19294792.jpeg"
                                  alt="Sports equipment"
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/30706133/pexels-photo-30706133.jpeg"
                                  alt="Victory moment"
                                  className="size-full object-cover"
                                />
                              </div>
                              {/* Additional images for scrolling */}
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/20124205/pexels-photo-20124205.jpeg"
                                  alt="Soccer player"
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/29831804/pexels-photo-29831804.jpeg"
                                  alt="Cycling race"
                                  className="size-full object-cover"
                                />
                              </div>
                              {/* Duplicate set for seamless scroll */}
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/19294792/pexels-photo-19294792.jpeg"
                                  alt="Sports equipment"
                                  className="size-full object-cover"
                                />
                              </div>
                              <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                  src="https://images.pexels.com/photos/30706133/pexels-photo-30706133.jpeg"
                                  alt="Victory moment"
                                  className="size-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                <a
                    href="#"
                    className="hidden md:inline-block rounded-md border border-transparent bg-indigo-600 px-4 py-2 mx-2 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Register for Race
                  </a>
                  <a
                    href="#"
                    className="hidden md:inline-block rounded-md border border-transparent bg-red-500 px-3 py-2 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Watch live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes verticalScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-vertical-scroll-1 {
          animation: verticalScroll 25s linear infinite;
        }

        .animate-vertical-scroll-2 {
          animation: verticalScroll 30s linear infinite;
        }

        .animate-vertical-scroll-3 {
          animation: verticalScroll 35s linear infinite;
        }

        .animate-vertical-scroll-1:hover,
        .animate-vertical-scroll-2:hover,
        .animate-vertical-scroll-3:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default Hero;
