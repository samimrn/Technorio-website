
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './pages/ContactForm';
import Services from './pages/Services';
import About from './pages/About';
import Team from './pages/Team';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Header/>
      {/* {component} */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/contactform" element={<ContactForm/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Team" element={<Team/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
