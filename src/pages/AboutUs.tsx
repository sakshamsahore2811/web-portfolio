import Navbar from "../components/Navbar";
import dawaai from "../images/dawa-ai.png";
import ffi from "../images/ffi.png";
import iiit from "../images/iiit.png";
export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="pl-10">
          <img
            alt="dawa-ai"
            className="rounded-md"
            src={dawaai}
            height={200}
            width={200}
          />
        </div>
        <div className="text-white text-xl pt-16 pl-8">
          <a href="https://oabco.in" target="_blank" rel="noopener"><u>Dawa.AI</u></a>
          <br />
          <ul>
            <li>Startup founded by IITians</li>
            <li>
              Worked on building MVP and official website along with handling
              backend and deployment tasks
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="pl-10 mt-10">
          <img
            src={ffi}
            height={200}
            width={200}
            className="rounded-md"
            alt="ffi"
          />
        </div>
        <div className="text-white text-xl pt-16 pl-8">
          <a href="https://www.friendsforinclusion.org" rel="noopener" target="_blank"><u>Friends For Inclusion</u></a> <br />
          <ul>
            <li>Sign language application</li>
            <li>
              Worked on Signer application with python frameworks like FastAPI
              and Django to help people
              <br /> with disabilities
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="pl-10 mt-10">
          <img
            src={iiit}
            height={200}
            width={200}
            className="rounded-md"
            alt="ffi"
          />
        </div>
        <div className="text-white text-xl pt-16 pl-8">
          <a href="https://www.iiitu.ac.in" target="_blank" rel="noopener"><u>Indian Institute of Information Technology Una</u></a> <br />
          <ul>
            <li>ML and data science projects </li>
            <li>
              Worked on Data Science projects under the guidance of university
              professors
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
