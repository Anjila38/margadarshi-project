import React from "react";
import Navbar from "../components/home/Navbar";
import SearchDestination from "../components/home/SearchDestination";

const HomePage = () => {
     return (
          <div className="overflow-x-hidden bg-[#F1E9DD]">
               {/* SECTION ONE */}
               <div
                    className="w-screen h-screen bg-cover bg-center flex flex-col justify-between pb-10"
                    style={{
                         backgroundImage:
                              "url('src/assets/images/main-bg.png')",
                    }}
               >
                    <Navbar />
                    <SearchDestination />
               </div>
               {/* SECTION TWO */}
               <div className="w-screen h-screen bg-cover bg-center flex flex-col items-center py-12">
                    <p
                         className="text-7xl text-center text-[#D6A463]"
                         style={{ fontFamily: "MonteCarlo" }}
                    >
                         Featured
                    </p>
                    <p
                         className="text-8xl text-center py-5 pb-20 text-[#2E4A3D]"
                         style={{ fontFamily: "Montserrat" }}
                    >
                         DESTINATIONS
                    </p>
                    <div
                         className="flex justify-center items-center gap-15 text-[#D6A463]"
                         style={{ fontFamily: "Montserrat" }}
                    >
                         <button>
                              <img
                                   src="src/assets/logo/down.png"
                                   className="rotate-90"
                                   alt=""
                              />
                         </button>
                         <div className="flex flex-col gap-10">
                              <img
                                   src="src/assets/images/destinations/image-1.png"
                                   alt=""
                                   width={280}
                              />
                              <p className="text-center text-3xl">POKHARA</p>
                         </div>
                         <div className="flex flex-col gap-10">
                              <img
                                   src="src/assets/images/destinations/image-2.png"
                                   alt=""
                                   width={280}
                              />
                              <p className="text-center text-3xl">KATHMANDU</p>
                         </div>
                         <div className="flex flex-col gap-10">
                              <img
                                   src="src/assets/images/destinations/image-3.png"
                                   alt=""
                                   width={280}
                              />
                              <p className="text-center text-3xl">LUMBINI</p>
                         </div>
                         <div className="flex flex-col gap-10">
                              <img
                                   src="src/assets/images/destinations/image-4.png"
                                   alt=""
                                   width={280}
                              />
                              <p className="text-center text-3xl">CHITWAN</p>
                         </div>
                         <button>
                              <img
                                   src="src/assets/logo/down.png"
                                   className="rotate-270"
                                   alt=""
                              />
                         </button>
                    </div>
               </div>
               <div>{/* <BrowseServices /> */}</div>
          </div>
     );
};

export default HomePage;
