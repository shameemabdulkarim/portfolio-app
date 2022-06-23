import AboutUs from "./pages/AboutUs";
//Global style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Contactus from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import { Route, Routes, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/work/:id" exact element={<MovieDetail />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
