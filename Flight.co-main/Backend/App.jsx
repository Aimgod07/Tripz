import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";

import Footer from "./components/Footer";

import MainHome from "./pages/MainHome";
import Planner from "./pages/Planner";

import Tripz from "./pages/Tripz";
import TodoList from "./pages/Todolist";
import Reviewpage from "./pages/Reviewpage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/tripz" element={<Tripz />} />
          <Route path="/Planner" element={<Planner />} />
          <Route path='/reviews' element={<Reviewpage />} />
          <Route path="/about" element={<AboutUs />} />
          
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
