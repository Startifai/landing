import { Navbar } from "./components/navbar/Navbar";
import { Paralax } from "./components/Paralax";
import { Activate } from "./sections/Activate";
import { Comunity } from "./sections/Comunity";
import { Hero } from "./sections/Hero";
import { How } from "./sections/How";
import { Problems } from "./sections/Problems";
import { Services } from "./sections/Services";
import { Why } from "./sections/Why";


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
    </div>
  );
}

export default App;
