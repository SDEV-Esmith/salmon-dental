import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import NewPatients from "./pages/NewPatients";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./MainLayout";
function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/new-patients" element={<NewPatients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
