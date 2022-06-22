import AboutUs from "./pages/AboutUs";
//Global style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Contactus from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
