import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Layout from "./Components/layout/layout";
import { ContextGlobal } from "./context/ContextProvider";
import  { useContext } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  const { dark } = useContext(ContextGlobal);
  return (
  <div className={dark ? "dark" : "light"}>
    <Navbar/>
      <Routes>
        <Route element={<Layout />}/>
        <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Favs" element={<Favs />} />
    </Routes>
    <Footer/>
  </div>

  );
}

export default App;











