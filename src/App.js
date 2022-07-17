import Navbar from "./Components/Navbar/Navbar";
import "./app.css";
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
