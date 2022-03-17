import Head from 'next/head';
import Link from "next/link";
import React, { useEffect } from "react";
import Carosal from './Carosal';
const Nav = () => {
    useEffect(() => {
        try {
          const btn = document.querySelector("button.mobile-menu-button");
          const navButton1 = document.querySelector("button.navButton1");
          const navButton2 = document.querySelector("button.navButton2");
          const navButton3 = document.querySelector("button.navButton3");
          const navButton4 = document.querySelector("button.navButton4");
          const menu = document.querySelector(".mobile-menu");
          btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
          });
          navButton1.addEventListener("click", () => {
            menu.classList.toggle("hidden");
          }); 
          navButton2.addEventListener("click", () => {
            menu.classList.toggle("hidden");
          }); 
          navButton3.addEventListener("click", () => {
            menu.classList.toggle("hidden");
          }); 
          navButton4.addEventListener("click", () => {
            menu.classList.toggle("hidden");
          });      
        } catch (error) {
          handleError(error);
        }
        function handleError(error) {
          console.error(error);
        }
      }, []);

return (
<>
<Head>
<title>Manar Al Meedan</title>
<link rel="icon" href="./assest/logo.jpg" />
<meta name="description" content="SURVEYOR - MANAR AL MEEDAN" />
<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
</Head>
<>
        <section>
          <div className="leading-normal tracking-normal text-white gradient">
            <nav id="header" className="top-0 z-30 w-full font-sans text-white bg-white">
              <div className="container flex flex-wrap items-center justify-between w-full py-2 pl-2 mx-auto mt-0">
                <Link href='/'>
                  <img className='w-2/12 sm:w-1/12 hover:scale-110 cursor-grab'
                    src='./assest/logo.jpg' />
                </Link>
                <div class="flex items-right mt-2 mx-5">
            <button class="mobile-menu-button" type="button" >
                    <span class="sr-only">Open main menu</span>
                    <svg class="text-gray-900 flex w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  </button>
                </div>
              </div>
              <div class='hidden mobile-menu w-full bg-white opacity-80 border-gray-900'>
                <ul class="text-sky-900 flex flex-col md:space-x-0 md:mt-0 md:text-medium md:font-medium text-center">
                  <li className='py-3'>
                    <button class='navButton1'><a href="#Services" class="font-bold cursor-grab hover:scale-110 py-2  text-center no-underline hover:text-violet-600 md:p-0">الخدمات</a></button>
                  </li>
                  <li className='py-3'>
                  <button class='navButton2'><a href="#Product" class="cursor-grab hover:scale-110 py-2 font-bold text-center no-underline hover:text-violet-600 md:p-0">المشاريع</a></button>
                  </li>
                  <li className='py-3'>
                  <button class='navButton3'><a href="#Image" class="cursor-grab font-bold hover:scale-110 py-2 text-center hover:text-violet-600 rounded md:p-0">الأدوات والمعدات</a></button>
                  </li>
                  <li className='py-3'>
                  <button class='navButton4'><a href="#Info" class="cursor-grab hover:scale-110 py-2 font-bold text-center no-underline hover:text-violet-600 md:p-0">حول منار الميدان</a></button>
                  </li>
                  <li className='py-3'>
                  <button class='navButton4'><a href="#Info" class="cursor-grab hover:scale-110 py-2 font-bold text-center no-underline hover:text-violet-600 md:p-0">اتصل بنا</a></button>
                  </li>
                </ul>
</div>
              <hr className="py-0 my-0 border-b border-gray-100 opacity-25" />
            </nav>
          </div>
        </section>
      </>
      <Carosal />

</>
  )
}
export default Nav