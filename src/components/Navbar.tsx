import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="flex justify-between bg-slate-600 p-3 text-white text-xl space-x-80">
      <div className="flex-initial">
        Saksham Sharma
      </div>
      <div className="flex-initial space-x-16">
        <Link to="/">Home</Link>
        <Link to="https://drive.google.com/file/d/1G8cBg6p26-TQCPLX-UBFis-PWpIHWInT/view?usp=sharing" target="_blank">Resume</Link>
        <Link to="/links">Links</Link>
        <Link to="/about">Experience</Link>
        <button className="bg-slate-500 rounded-xl p-3 text-white"><Link to="/contact">Work with me</Link></button>
      </div>
    </div>
  )
}
