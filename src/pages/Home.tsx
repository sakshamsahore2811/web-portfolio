import  { useState } from "react";
import Navbar from "../components/Navbar";
import saksham from '../images/sakshamm.jpeg';
import map from '../images/map.png';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  const [isToggled, setIsToggled] = useState(false);
  const [word, setWord] = useState("Frontend Developer");
  const handleToggle = () => {
    setIsToggled(!isToggled);
    setWord(isToggled ? "Frontend Developer" : "CS Undergrad");
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="pt-44 pl-32 text-white text-4xl">
          Hello world ! <br />
          I'm Saksham, a {word}
          <br />
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onClick={handleToggle}
              value=""
              title="togglebutton"
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <div className="bg-slate-500">
        <div
          id="toast-top-right"
          className="fixed flex items-center w-full max-w-xs p-4 mr-28 space-x-4 text-gray-500 mt-32 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <div className="text-sm font-normal">
            <img src={saksham} height={280} width={280} alt="my image"/>
          </div>
        </div>
      </div>
      </div>
      <div className="text-white pt-20 text-xl pl-32 flex">
        <div>
        21, 
        </div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

        </div>
        <div>Delhi, India
        </div>
      </div>
    </>
  );
}
