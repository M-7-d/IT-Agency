import Navbar from "./segments/Navbar";
import Hero from "./segments/Navbar/Hero";
import Achievment from "./segments/Achievement"
import About from "./segments/About";

function App() {
  return (
    <h1>
        <Navbar/>
        <Hero />
        <Achievment/>
        <About/>
    </h1>
  );
}

export default App; 
