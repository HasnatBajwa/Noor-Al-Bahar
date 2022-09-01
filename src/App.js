import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PageLoad from "./Pages/PageLoad/PageLoad";
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<PageLoad/>} />
      <Route path="Services" element={<Services/>} />
      <Route path="Contact" element={<Contact />} />
      <Route path="About" element={<About/>}/>
    </Routes>
      
      
      </BrowserRouter>
    </>
  );
}

export default App;
