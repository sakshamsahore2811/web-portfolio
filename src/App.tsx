import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NoPage from "./pages/NoPage";
import Links from "./pages/Links";

function App() {
  return (
    <>
    <div className="bg-slate-600 min-h-screen">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/links" element={<Links/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
