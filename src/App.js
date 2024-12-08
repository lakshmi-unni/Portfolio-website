import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>
    </div>
  );
}

export default App;
