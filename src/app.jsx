import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './Pages/Home';
import About from './Pages/About';
import Destination from './Pages/Destination';
import Tour from './Pages/Tour';
import Contact from './Pages/Contact';
import News from './Pages/News';
import Login from './Pages/Login';
import MoroccoTourDetail from './Pages/Morocco-Tour-Detail';
import UnitedKingdomTourDetail from './Pages/United-Kingdom-Tour-Detail';
import Footer from './components/Footer';

function App(){
  return(
    <BrowserRouter>
      <Header />
      <main className="main-wrapper">
        <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/tours" element={<Tour />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/morocco-tour-detail" element={<MoroccoTourDetail />} /> 
            <Route path="/united-kingdom-tour-detail" element={<UnitedKingdomTourDetail />} /> 
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
