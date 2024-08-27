import Presentation from "./sections/Presentation";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
