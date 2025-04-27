import React from "react";

const Navbar = () => {
     return (
          <nav className="flex items-center justify-between px-12">
               {/* logo */}
               <div className="bg-white rounded-b-[80px] p-4">
                    <img src="src/assets/logo/logo.png" width={180} alt="" />
               </div>
               {/* comps */}
               <ul
                    className="flex gap-10 text-2xl text-white font-bold px-4 font-montserrat items-center"
                    style={{ fontFamily: "Montserrat" }}
               >
                    <li className="text-[#246662]">HOME</li>
                    <li>EXPLORE</li>
                    <li>SERVICES</li>
                    <li>ABOUT US</li>
                    <li>BLOGS</li>
                    <button className="bg-[#246662] px-5 py-2 rounded-full">
                         LOGIN
                    </button>
               </ul>
          </nav>
     );
};

export default Navbar;
