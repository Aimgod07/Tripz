
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Travelform from './pages/Ticketform'
import BookingForm from './pages/Hotelform'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Samples from './pages/Samples'
import AboutUs from './pages/AboutUs'
import Ticket from './pages/Ticket'
import Footer from './components/Footer'
import TicketPricing from './pages/ticketpricing'
import MainHome from './pages/MainHome'
import Planner from './pages/Planner'
import Planning from './pages/Planning'
import Tripz from './pages/Tripz'




function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/tripz" element={<Tripz />} />
          <Route path="/Planner" element={<Planner />} />
          <Route path="/itinerary" element={<Planning />} />
          <Route path="/Ticket" element={<Home />} />
          <Route path="/dashboard" element={<TicketPricing />} />
         
          <Route path="/ticketform" element={<Travelform />} />
          <Route path="/hotelform" element={<BookingForm/>} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/buynow" element={<Ticket />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
    
      </Router>
    </>
  )
}

export default App;
