import React from "react";

const Blog = () => {
     return (
          //   <div classNameName="mx-20">
          //        <nav className="pt-4 py-2">
          //             <div className="container mx-auto flex justify-between items-center">
          //                  <div className="social-media-icons flex space-x-3">
          //                       <a href="#">
          //                            <i className="fa-brands p-2 fa-md fa-facebook"></i>
          //                       </a>
          //                       <a href="#">
          //                            <i className="fa-brands p-2 fa-md fa-instagram"></i>
          //                       </a>
          //                       <a href="#">
          //                            <i className="fa-brands p-2 fa-md fa-twitter"></i>
          //                       </a>
          //                       <a href="#">
          //                            <i className="fa-brands p-2 fa-md fa-linkedin"></i>
          //                       </a>
          //                  </div>
          //                  <div className="contact flex space-x-4">
          //                       <a href="#" className="flex items-center">
          //                            <i className="fa-solid fa-phone text-[#f46b5b]"></i>
          //                            <span className="pl-2 text-sm">
          //                                 +977 9817153553
          //                            </span>
          //                       </a>
          //                       <a href="#" className="flex items-center">
          //                            <i className="fa-solid fa-envelope text-[#f46b5b]"></i>
          //                            <span className="pl-2 text-sm">
          //                                 support@trailmate.com
          //                            </span>
          //                       </a>
          //                  </div>
          //             </div>
          //        </nav>
          //        <hr className="custom-hr" />

          //        <div className="container mx-auto my-4 flex flex-col sm:flex-row justify-between items-center">
          //             <a
          //                  href="/index/main.html"
          //                  className="text-3xl font-bold text-red-400 mb-2 sm:mb-0"
          //             >
          //                  TrailMate
          //             </a>

          //             <div className="pt-2 text-gray-950 text-sm flex justify-center space-x-7 mb-2 sm:mb-0">
          //                  <a
          //                       href="/index/main.html"
          //                       className="hover:text-red-400"
          //                  >
          //                       Home
          //                  </a>
          //                  <a
          //                       href="/index/about.html"
          //                       className="hover:text-red-400"
          //                  >
          //                       About
          //                  </a>
          //                  <a
          //                       href="/index/category.html"
          //                       className="hover:text-red-400"
          //                  >
          //                       Product
          //                  </a>
          //                  <a href="#" className="text-red-400">
          //                       Blog
          //                  </a>
          //                  <a
          //                       href="/index/contact.html"
          //                       className="hover:text-red-400"
          //                  >
          //                       Contact
          //                  </a>
          //             </div>

          //             <div className="flex items-center space-x-4">
          //                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          //                       <input
          //                            type="text"
          //                            placeholder="Search here"
          //                            className="py-2 px-4 w-80 border-none outline-none text-sm text-gray-600 focus:ring-0"
          //                       />
          //                       <i className="fa-solid fa-magnifying-glass bg-red-400 p-3 text-white"></i>
          //                  </div>

          //                  <div>
          //                       <i
          //                            className="fa-solid fa-lg fa-bag-shopping px-2"
          //                            style="color: #000000"
          //                       ></i>
          //                  </div>
          //             </div>
          //        </div>

          //        <section className="py-12 px-6">
          //             <h2 className="text-3xl font-bold text-center text-red-400 mb-12">
          //                  FROM OUR BLOGS
          //             </h2>
          //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          //                  <a
          //                       href="#"
          //                       className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          //                  >
          //                       <img
          //                            src="/images/blog1.jpg"
          //                            alt="Top 10 Trekking Must-Haves"
          //                            className="w-full h-48 object-cover"
          //                       />
          //                       <div className="p-4">
          //                            <p className="text-red-400 font-semibold text-sm">
          //                                 May 31, 2019
          //                            </p>
          //                            <h3 className="text-lg font-bold text-gray-800 mt-2">
          //                                 Top 10 Trekking Must-Haves
          //                            </h3>
          //                            <p className="text-gray-600 text-sm mt-1">
          //                                 Essential gear to make your adventure
          //                                 seamless and stress-free.
          //                            </p>
          //                       </div>
          //                  </a>

          //                  <a
          //                       href="#"
          //                       className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          //                  >
          //                       <img
          //                            src="/images/blog2.jpeg"
          //                            alt="Beginner’s Trekking Guide"
          //                            className="w-full h-48 object-cover"
          //                       />
          //                       <div className="p-4">
          //                            <p className="text-red-400 font-semibold text-sm">
          //                                 May 31, 2019
          //                            </p>
          //                            <h3 className="text-lg font-bold text-gray-800 mt-2">
          //                                 Beginner’s Trekking Guide
          //                            </h3>
          //                            <p className="text-gray-600 text-sm mt-1">
          //                                 Everything you need to know to hit the
          //                                 trails with confidence.
          //                            </p>
          //                       </div>
          //                  </a>

          //                  <a
          //                       href="#"
          //                       className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          //                  >
          //                       <img
          //                            src="/images/blog3.jpg"
          //                            alt="Epic Global Trekking Spots"
          //                            className="w-full h-48 object-cover"
          //                       />
          //                       <div className="p-4">
          //                            <p className="text-red-400 font-semibold text-sm">
          //                                 May 31, 2019
          //                            </p>
          //                            <h3 className="text-lg font-bold text-gray-800 mt-2">
          //                                 Epic Global Trekking Spots
          //                            </h3>
          //                            <p className="text-gray-600 text-sm mt-1">
          //                                 Discover the world's most breathtaking
          //                                 trails and landscapes.
          //                            </p>
          //                       </div>
          //                  </a>

          //                  <a
          //                       href="#"
          //                       className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          //                  >
          //                       <img
          //                            src="/images/blog4.jpeg"
          //                            alt="Trail Tales: Lessons from Trekkers"
          //                            className="w-full h-48 object-cover"
          //                       />
          //                       <div className="p-4">
          //                            <p className="text-red-400 font-semibold text-sm">
          //                                 May 31, 2019
          //                            </p>
          //                            <h3 className="text-lg font-bold text-gray-800 mt-2">
          //                                 Trail Tales: Lessons from Trekkers
          //                            </h3>
          //                            <p className="text-gray-600 text-sm mt-1">
          //                                 Inspiring stories and practical tips
          //                                 from seasoned adventurers.
          //                            </p>
          //                       </div>
          //                  </a>

          //                  <a
          //                       href="#"
          //                       className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          //                  >
          //                       <img
          //                            src="/images/blog5.jpg"
          //                            alt="Eco-Friendly Trekking Gear"
          //                            className="w-full h-48 object-cover"
          //                       />
          //                       <div className="p-4">
          //                            <p className="text-red-400 font-semibold text-sm">
          //                                 May 31, 2019
          //                            </p>
          //                            <h3 className="text-lg font-bold text-gray-800 mt-2">
          //                                 Eco-Friendly Trekking Gear
          //                            </h3>
          //                            <p className="text-gray-600 text-sm mt-1">
          //                                 Sustainable options for the
          //                                 environmentally conscious adventurer.
          //                            </p>
          //                       </div>
          //                  </a>
          //                  <a
          //                       href="#"
          //                       className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          //                  >
          //                       <img
          //                            src="/images/blog6.png"
          //                            alt="Trekking as a Lifestyle"
          //                            className="w-full h-48 object-cover"
          //                       />
          //                       <div className="p-4">
          //                            <p className="text-red-400 font-semibold text-sm">
          //                                 May 31, 2019
          //                            </p>
          //                            <h3 className="text-lg font-bold text-gray-800 mt-2">
          //                                 Trekking as a Lifestyle
          //                            </h3>
          //                            <p className="text-gray-600 text-sm mt-1">
          //                                 Why more people are embracing the trail
          //                                 as a way of life.
          //                            </p>
          //                       </div>
          //                  </a>
          //             </div>
          //        </section>

          <footer className="footer -mx-20 px-20 w-100% text-gray-800 py-16 bg-[#f46b5b0d]">
               <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between">
                         <div className="w-1/3">
                              <h2 className="text-2xl text-red-400 font-semibold mb-4">
                                   TrailMate
                              </h2>
                              <p className="text-gray-500 mb-6 text-xs">
                                   Lorem ipsum dolor sit amet, consectetur
                                   adipiscing elit, sed do eiusmod tempor.
                              </p>

                              <ul className="space-y-3 text-xs">
                                   <li>
                                        <a
                                             href="#"
                                             className="flex items-center"
                                        >
                                             <i
                                                  className="fa-solid fa-phone"
                                                  style="color: #f46b5b"
                                             ></i>
                                             <span className="pl-2 text-xs">
                                                  +977 9817153553
                                             </span>
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="#"
                                             className="flex items-center"
                                        >
                                             <i
                                                  className="fa-solid fa-envelope"
                                                  style="color: #f46b5b"
                                             ></i>
                                             <span className="pl-2 text-xs">
                                                  support@trkmate.com
                                             </span>
                                        </a>
                                   </li>
                              </ul>
                         </div>

                         <div className="justify-items-end grid grid-cols-3 gap-20">
                              <div>
                                   <h3
                                        className="text-md font-bold mb-4"
                                        style="font-family: montserrat"
                                   >
                                        Company
                                   </h3>
                                   <ul className="space-y-3 text-xs">
                                        <li>
                                             <a
                                                  href="/index/about.html"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  About
                                             </a>
                                        </li>
                                        <li>
                                             <a
                                                  href="#"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  Products
                                             </a>
                                        </li>
                                        <li>
                                             <a
                                                  href="/index/contact.html"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  Contact
                                             </a>
                                        </li>
                                        <li>
                                             <a
                                                  href="#"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  Blog
                                             </a>
                                        </li>
                                        <li>
                                             <a
                                                  href="#"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  Careers
                                             </a>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h3
                                        className="text-md font-bold mb-4"
                                        style="font-family: montserrat"
                                   >
                                        Information
                                   </h3>
                                   <ul className="space-y-3 text-xs">
                                        <li>
                                             <a
                                                  href="#"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  Help Center
                                             </a>
                                        </li>
                                        <li>
                                             <a
                                                  href="#"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  Payment Methods
                                             </a>
                                        </li>
                                        <li>
                                             <a
                                                  href="#"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  Return & Refund
                                             </a>
                                        </li>
                                        <li>
                                             <a
                                                  href="#"
                                                  className="text-gray-600 hover:text-gray-800"
                                             >
                                                  Privacy Policy
                                             </a>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h3
                                        className="text-md mr-8 font-bold mb-4"
                                        style="font-family: montserrat"
                                   >
                                        Follow Us
                                   </h3>
                                   <div className="flex space-x-4">
                                        <a
                                             href="#"
                                             className="text-white hover:text-gray-800 bg-red-300 px-2 py-1 rounded"
                                        >
                                             <i className="fab fa-lg fa-instagram"></i>
                                        </a>
                                        <a
                                             href="#"
                                             className="text-white rounded hover:text-gray-800 bg-red-300 px-2 py-1"
                                        >
                                             <i className="fab fa-lg fa-twitter"></i>
                                        </a>
                                        <a
                                             href="#"
                                             className="text-white rounded hover:text-gray-800 bg-red-300 px-2 py-1"
                                        >
                                             <i className="fab fa-lg fa-facebook"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="flex justify-between footer-bottom mt-20 w-full">
                         <p className="text-left flex justify-start text-gray-600 text-xs">
                              Copyright © 2021 Trailmate. All Rights Reserved
                         </p>

                         <div className="flex justify-end space-x-4">
                              <i className="fab fa-cc-visa text-gray-600"></i>
                              <i className="fab fa-cc-mastercard text-gray-600"></i>
                              <i className="fab fa-cc-paypal text-gray-600"></i>
                         </div>
                    </div>
               </div>
          </footer>
          //   </div>
     );
};

export default Blog;
