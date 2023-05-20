import './App.css';
import {Routes , Route} from 'react-router-dom';
import Home from "./Components/Home.js";
import Projects from "./Components/Projects.js";

function App() {
  return (
    <section>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
        </Routes>
    </section>
  );
}

export default App;
