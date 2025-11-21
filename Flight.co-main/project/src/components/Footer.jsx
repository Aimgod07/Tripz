import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    
    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service here
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-40 bg-red-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-red-600 text-4xl mb-4">⚠️</div>
                        <p className="text-red-800 font-medium">Something went wrong in the footer.</p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}


const Footer = () => {
    const businessHours = [
        { day: "Monday - Thursday", time: "9:00 AM - 9:00 PM" },
        { day: "Friday", time: "9:00 AM - 11:00 PM" },
        { day: "Saturday", time: "9:00 AM - 3:00 PM" },
        { day: "Sunday", time: "Closed" },
    ];    const socialLinks = [
        {
            name: "YouTube",
            icon: "/youtube.png",
            url: "https://youtube.com",
            hoverColor: "hover:bg-gray-100"
        },
        {
            name: "Instagram",
            icon: "/instagram.png",
            url: "https://instagram.com",
            hoverColor: "hover:bg-gray-100"
        }
    ];

    return (
        <ErrorBoundary>
            <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center space-x-3 mb-6">
                                <img 
                                    src="/logo.jpg" 
                                    alt="TravelCo Logo" 
                                    className="h-12 w-12 rounded-lg shadow-lg"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-white">TravelCo</h3>
                                    <p className="text-sm text-gray-300">Your Travel Partner</p>
                                </div>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                Experience the world with confidence. We provide exceptional travel services, 
                                from flight bookings to hotel reservations, making your journey memorable.
                            </p>
                            
                            {/* Social Media */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>                                <div className="flex space-x-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group p-3 bg-gray-700 rounded-full transition-all duration-300 ${social.hoverColor} hover:scale-110 hover:shadow-lg`}
                                        >
                                            <img 
                                                src={social.icon} 
                                                alt={social.name}
                                                className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2">
                                Quick Links
                            </h4>                            <ul className="space-y-3">                                <li>
                                    <Link 
                                        to="/" 
                                        className="text-gray-300 hover:text-gray-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            →
                                        </span>
                                        {' '}Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/samples" 
                                        className="text-gray-300 hover:text-gray-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            →
                                        </span>
                                        {' '}Samples
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/about" 
                                        className="text-gray-300 hover:text-gray-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            →
                                        </span>
                                        {' '}About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/buynow" 
                                        className="text-gray-300 hover:text-gray-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            →
                                        </span>
                                        {' '}Buy Now
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2">
                                Contact Us
                            </h4>                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-gray-600 p-2 rounded-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Phone</p>
                                        <p className="text-white font-medium">+91 1234567890</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="bg-slate-600 p-2 rounded-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Email</p>
                                        <p className="text-white font-medium">info@travelco.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="bg-gray-700 p-2 rounded-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Address</p>
                                        <p className="text-white font-medium">123 Travel St, City</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-600 pb-2">
                                Business Hours
                            </h4>                            <div className="space-y-3">
                                {businessHours.map((schedule) => (
                                    <div key={schedule.day} className="flex justify-between items-center">
                                        <span className="text-gray-300 text-sm">{schedule.day}</span>
                                        <span className={`text-sm font-medium ${schedule.time === 'Closed' ? 'text-gray-500' : 'text-gray-400'}`}>
                                            {schedule.time}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            
                            {/* Newsletter Signup */}
                            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
                                <h5 className="text-white font-medium mb-2">Stay Updated</h5>
                                <p className="text-gray-400 text-xs mb-3">Get travel deals and updates</p>                                <div className="flex">
                                    <input 
                                        type="email" 
                                        placeholder="Enter email"
                                        className="flex-1 px-3 py-2 bg-gray-700 text-white text-sm rounded-l-lg border border-gray-600 focus:outline-none focus:border-gray-500 transition-colors duration-300"
                                    />
                                    <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded-r-lg transition-colors duration-300">
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-center md:text-left">
                                <p className="text-gray-400 text-sm">
                                    © 2025 TravelCo. All rights reserved.
                                </p>
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    Terms of Service
                                </Link>
                                <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </ErrorBoundary>
    );
};

export default Footer;
