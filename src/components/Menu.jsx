import React from "react";

function Menu() {
  const section1 = () => {
    return (
      <ul className="w-1/4 text-neutral-500 text-sm">
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Innovation
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">Design</li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Exhibition
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Museum & History
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">Sports</li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Driving Events
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes me Portal
        </li>
      </ul>
    );
  };

  const section2 = () => {
    return (
      <ul className="w-1/4  text-neutral-500 text-sm">
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Dealer Search
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes-Benz Accessoires
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes-Benz Collection
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes me connect Store
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Service & Parts
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Formula 1 Store
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes-Benz Classic Center
        </li>
      </ul>
    );
  };

  const section3 = () => {
    return (
      <ul className="w-1/4  text-neutral-500 text-sm">
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Model Overview
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Configurator
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Test Drive
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes-Maybach
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes me connect
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes-Benz Ex-Factory Driving Aids
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">WLTP</li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">RDE</li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Semiconductors supply situation
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Li-Ion UN38.3
        </li>
      </ul>
    );
  };

  const section4 = () => {
    return (
      <ul className="w-1/4  text-neutral-500 text-sm">
        <li className="md:dark:hover:text-blue-700 cursor-pointer">Newsroom</li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">Press</li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">Career</li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">heycar</li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          SHARE NOW
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Vulnerability Reporting Policy
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes-Benz Energy
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes-Benz Bank
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Fleet Sales
        </li>
        <li className="md:dark:hover:text-blue-700 cursor-pointer">
          Mercedes-Benz Global Training
        </li>
      </ul>
    );
  };

  return (
    <div>
      <div className="sm:visible invisible sm:w-full sm:h-auto w-0 h-0">
        <div className="flex p-8 text-3xl mb-6 sm:w-full w-0">
          <div className="sm:w-1/4 w-0 h-0">More topics </div>
          <div className="sm:w-1/4 w-0 h-0">Shopping</div>
          <div className="sm:w-1/4 w-0 h-0">All about cars</div>
          <div className="sm:w-1/4 w-0 h-0">Discover more</div>
        </div>
        <hr className="mx-6 mb-4"></hr>
        <div className="flex p-8">
          {section1()}
          {section2()}
          {section3()}
          {section4()}
        </div>
      </div>
      <div className="flex flex-col p-8 text-xl sm:invisible sm:w-0 sm:h-0 ">
        <div className="flex flex-col whitespace-nowrap w-full sm:w-0 sm:h-0">
          <div className="sm:invisible mx-2 my-4">More topics</div>
          <hr className="mb-4 sm:invisible"></hr>
          <div className="px-2 sm:invisible">{section1()}</div>
        </div>
        <div className="flex flex-col whitespace-nowrap w-full sm:w-0 sm:h-0">
          <div className="sm:invisible mx-2 my-4">Shopping</div>
          <hr className="mb-4"></hr>
          <div className="px-2">{section2()}</div>
        </div>
        <div className="flex flex-col whitespace-nowrap w-full sm:w-0 sm:h-0">
          <div className="sm:invisible mx-2 my-4">All about cars</div>
          <hr className="mb-4"></hr>
          <div className="px-2">{section3()}</div>
        </div>
        <div className="flex flex-col whitespace-nowrap w-full sm:w-0 sm:h-0">
          <div className="sm:invisible mx-2 my-4">Discover more</div>
          <hr className="mb-4"></hr>
          <div className="px-2">{section4()}</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
