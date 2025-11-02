import React from "react";

const Hero = ({ title, description }) => {   
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../assets/air.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-gray-800/60 to-slate-900/70"></div>
      </div>      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gray-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-10 w-96 h-96 bg-slate-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-10 left-1/2 w-80 h-80 bg-gray-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Main Content Card */}
          <div className="max-w-4xl mx-auto">            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-100/20 backdrop-blur-sm border border-gray-200/30 rounded-full text-gray-100 text-sm font-medium mb-8 animate-fade-in">
              <span className="mr-2">✈️</span>
              Trusted by 10,000+ Travelers Worldwide
            </div>            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Get Your Verified
              <span className="block bg-gradient-to-r from-gray-300 to-slate-300 bg-clip-text text-transparent">
                Dummy Ticket
              </span>
              <span className="block text-4xl md:text-5xl mt-2">
                at $5 or ₹350
              </span>
            </h1>            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
              {description || "Quickly book verified dummy tickets for visa applications, immigration, and passport renewals. Professional service with 30-60 minute delivery."}
            </p>

            {/* Features List */}            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-slide-up delay-400">
              <div className="flex items-center justify-center md:justify-start text-gray-100">
                <span className="mr-3 text-2xl">⚡</span>
                <span className="text-lg font-medium">30-60 Min Delivery</span>
              </div>
              <div className="flex items-center justify-center text-gray-100">
                <span className="mr-3 text-2xl">✅</span>
                <span className="text-lg font-medium">100% Verified</span>
              </div>
              <div className="flex items-center justify-center md:justify-end text-gray-100">
                <span className="mr-3 text-2xl">🔒</span>
                <span className="text-lg font-medium">Secure & Reliable</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-600">              <a 
                href="/buynow" 
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold text-lg rounded-2xl hover:from-gray-700 hover:to-slate-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-2">🎫</span>
                  Book Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-slate-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="/samples" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform transition-all duration-300 hover:scale-105 flex items-center"
              >
                <span className="mr-2">👁️</span>
                View Samples
              </a>
            </div>            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20 animate-slide-up delay-800">
              <p className="text-gray-200 text-sm mb-4">Trusted by travelers from</p>
              <div className="flex flex-wrap justify-center gap-6 text-white/80">
                <span className="flex items-center text-sm">🇮🇳 India</span>
                <span className="flex items-center text-sm">🇺🇸 USA</span>
                <span className="flex items-center text-sm">🇬🇧 UK</span>
                <span className="flex items-center text-sm">🇨🇦 Canada</span>
                <span className="flex items-center text-sm">🇦🇺 Australia</span>
                <span className="flex items-center text-sm">🇩🇪 Germany</span>
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-bounce delay-1000">
        <div className="w-6 h-6 bg-gray-400/40 rounded-full"></div>
      </div>
      <div className="absolute top-20 right-20 animate-bounce delay-2000">
        <div className="w-4 h-4 bg-slate-400/40 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce delay-3000">
        <div className="w-5 h-5 bg-gray-500/40 rounded-full"></div>
      </div>
    </div>
  );
};
export default Hero;