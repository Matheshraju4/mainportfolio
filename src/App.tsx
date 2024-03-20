import "./App.css";

import { Navbar } from "./elements/Navbar";

import { Topsection } from "./elements/Topsection";
import { ImageComponent } from "./elements/ImageComponent";
import { Projectssection } from "./elements/Projectssection";
import { Footer } from "./elements/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactForm } from "./Routes/Contactform";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
function Page1() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap ... ">
        <div className="flex-auto w-64 ...">
          <Topsection />
        </div>
        <div className="flex-auto w-32 ">
          <ImageComponent />
        </div>
      </div>
      <br></br>
      <div className="text-4xl font-semibold	font-bold">Projects</div>
      <Projectssection />
      <Footer />
    </>
  );
}

export default App;
