import { Navbar } from "./components/navbar/Navbar";
import { Paralax } from "./components/Paralax";
import { Activate } from "./sections/Activate";
import { Comunity } from "./sections/Comunity";
import { Hero } from "./sections/Hero";
import { How } from "./sections/How";
import { Orion } from "./sections/Orion";
import { Problems } from "./sections/Problems";
import { Services } from "./sections/Services";
import { Why } from "./sections/Why";
import { Paralax2 } from "./sections/Paralax2";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Why />
      <Paralax />
      <How />
      <Problems />
      <Services/>
      <Activate/>
      <Comunity/>
      <Orion />
      <Paralax2 />
      <Footer />
    </div>
  );
}

export default App;
