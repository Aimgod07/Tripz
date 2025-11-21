
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="../src/css/logo2.png" 
                alt="logo" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </div>            <span className="hidden sm:block text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
              TRIPZY
            </span>
          </Link>          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/Ticket" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-600 hover:bg-gray-50 transition-all duration-300 font-medium"
            >
              Dummy Tickets
            </Link>
            <Link 
              to="/todolist" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-600 hover:bg-gray-50 transition-all duration-300 font-medium"
            >
            Todo List
            </Link>
            <Link 
              to="/tripz" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-600 hover:bg-gray-50 transition-all duration-300 font-medium"
            >
              About Us
            </Link>
            <Link 
              to="/Planner" 
              className="ml-4 px-6 py-2 bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-lg hover:from-gray-700 hover:to-slate-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explore
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-600 hover:bg-gray-100 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2 mb-4">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-lg text-gray-700 hover:text-gray-600 hover:bg-white transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/samples" 
              className="block px-3 py-2 rounded-lg text-gray-700 hover:text-gray-600 hover:bg-white transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Samples
            </Link>
            <Link 
              to="/tripz" 
              className="block px-3 py-2 rounded-lg text-gray-700 hover:text-gray-600 hover:bg-white transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/buynow" 
              className="block px-3 py-2 mt-2 bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-lg hover:from-gray-700 hover:to-slate-700 transition-all duration-300 font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;