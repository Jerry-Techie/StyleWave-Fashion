import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './styles/global.module.scss';
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout"
import Showroom from "./pages/Showroom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Staffs from "./pages/Staffs";


export default function App() {
  return (
    <BrowserRouter>

        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4 }}
              >
            <Home /> </motion.div>} />
          <Route path="about" element={<About />} />
          <Route path="showroom" element={<Showroom />} />
          <Route path="staffs" element={<Staffs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
