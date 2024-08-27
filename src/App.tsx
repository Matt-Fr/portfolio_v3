import Presentation from "./sections/Presentation";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
