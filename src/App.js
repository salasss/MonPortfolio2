import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Compo/Home/Home';
import Nav from './Compo/nav/Nav';
import Contact from './Compo/Contact/Contact';
import Apropo from './Compo/Apropos/Apropo';
import Projets from './Compo/Projets/Projets';

function App() {

  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route index element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projets />} />
          <Route path="/About" element={<Apropo />} />
        </Routes>

      </AnimatePresence>

    </div>
  );
}

export default App;
