import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    <div >
     <Navbar/>
     <Intro/>
     <Skills/>
     <Work/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
