import Aboutus from "./components/Aboutus.jsx";
import Header2 from "./components/Header2.jsx";
import Hero from "./components/Hero.jsx";
import Contactus from "./components/Contactus.jsx";
import "./css/style.css";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header2 />
      <Hero />
      <Aboutus />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
