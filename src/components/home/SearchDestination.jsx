import React from "react";

const SearchDestination = () => {
     return (
          <div
               className="bg-white mx-16 p-8 rounded-4xl flex"
               style={{ fontFamily: "Montserrat" }}
          >
               {/* where to */}
               <div className="flex w-full items-center gap-5">
                    <img src="src/assets/logo/location.png" alt="" />
                    <p className="text-4xl font-bold text-[#2E4A3D]">
                         Where to?
                    </p>
                    <img
                         src="src/assets/logo/down.png"
                         className="bg-[#9AB0B5] rounded-full"
                         alt=""
                    />
               </div>
               {/* when */}
               <div className="flex w-full items-center gap-5">
                    <img src="src/assets/logo/calender.png" alt="" />
                    <p className="text-4xl font-bold text-[#2E4A3D]">When?</p>
                    <img
                         src="src/assets/logo/down.png"
                         className="bg-[#9AB0B5] rounded-full"
                         alt=""
                    />
               </div>
               {/* no of people */}
               <div className="flex w-full items-center gap-5">
                    <img src="src/assets/logo/people.png" alt="" />
                    <p className="text-4xl font-bold text-[#2E4A3D]">
                         No. of people
                    </p>
                    <img
                         src="src/assets/logo/down.png"
                         className="bg-[#9AB0B5] rounded-full"
                         alt=""
                    />
               </div>
               {/* search */}
               <button
                    className="flex items-center justify-center bg-[#246662] px-12 py-4 rounded-3xl hover:bg-[#1e524f] transition-colors"
                    type="button"
               >
                    <p className="text-4xl font-bold text-white mr-2">Search</p>
                    <img
                         src="src/assets/logo/search.png"
                         alt="Search"
                         className="w-8 h-8"
                    />
               </button>
          </div>
     );
};

export default SearchDestination;
