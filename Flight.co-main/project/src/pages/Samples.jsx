const Samples = () => {
  return (
    <>      {/* Main Container */}
      <div className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 via-gray-50 to-slate-50 overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-200/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-gray-700 text-sm font-medium">Verified Samples</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Sample 
              <span className="block bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Tickets
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              View authentic sample tickets from major airlines worldwide. These samples show exactly 
              what you'll receive with your order - professional, verified, and accepted globally.
            </p>            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
                <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                <span className="text-gray-700 text-sm font-medium">100% Authentic</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-slate-100 rounded-full">
                <span className="w-3 h-3 bg-slate-500 rounded-full mr-2"></span>
                <span className="text-slate-700 text-sm font-medium">Global Acceptance</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
                <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                <span className="text-gray-700 text-sm font-medium">Embassy Approved</span>
              </div>
            </div>
          </div>

          {/* Sample Gallery Section */}
          <div className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Supported Airlines
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our dummy tickets are available for all major international airlines. 
                  Click on any logo to view a sample ticket.
                </p>
              </div>

              {/* Airlines Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                
                {/* Airline Card Template */}
                {[
                  { src: "../assets/aeroflot.png", name: "Aeroflot", link: "../assets/image.png" },
                  { src: "../assets/a2.png", name: "Emirates", link: "../assets/image.png" },
                  { src: "../assets/a3.png", name: "Qatar Airways", link: "../assets/image.png" },
                  { src: "../assets/a4.png", name: "Lufthansa", link: "../assets/image.png" },
                  { src: "../assets/a5.png", name: "British Airways", link: "../assets/image.png" },
                  { src: "../assets/a6.png", name: "Air France", link: "../assets/image.png" },
                  { src: "../assets/a7.png", name: "KLM", link: "../assets/image.png" },
                  { src: "../assets/a8.png", name: "Turkish Airlines", link: "../assets/image.png" },
                  { src: "../assets/a9.png", name: "Singapore Airlines", link: "../assets/image.png" },
                  { src: "../assets/a10.png", name: "Cathay Pacific", link: "../assets/image.png" },
                  { src: "../assets/a11.png", name: "Swiss International", link: "../assets/image.png" },
                  { src: "../assets/a12.png", name: "Austrian Airlines", link: "../assets/image.png" }
                ].map((airline, index) => (
                  <div key={index} className="group">
                    <a href={airline.link} className="block">                      <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group-hover:border-gray-300">
                        
                        {/* Gradient Border Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-slate-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-0.5 -z-10 blur-sm"></div>
                        
                        {/* Airline Logo */}
                        <div className="flex items-center justify-center h-16 mb-3">
                          <img 
                            src={airline.src} 
                            alt={airline.name}
                            className="max-h-12 max-w-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                          {/* Airline Name */}
                        <div className="text-center">
                          <h3 className="text-sm font-semibold text-gray-700 group-hover:text-gray-600 transition-colors duration-300">
                            {airline.name}
                          </h3>
                        </div>

                        {/* View Sample Button */}
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center">
                            <span className="text-xs text-gray-600 font-medium">View Sample</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-3">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Format</h3>
              <p className="text-gray-600">
                Exact same format as real airline tickets with all required fields and verification codes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform -rotate-3">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Embassy Approved</h3>
              <p className="text-gray-600">
                Accepted by embassies and consulates worldwide for visa applications and travel purposes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-3">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Delivery</h3>
              <p className="text-gray-600">
                Receive your dummy ticket within 30-60 minutes via email in PDF format.
              </p>
            </div>
          </div>          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-600 to-slate-600 rounded-3xl p-8 text-white mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Get Your Ticket?
              </h3>
              <p className="text-gray-100 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of satisfied customers who trust us for their travel document needs. 
                Fast, secure, and globally accepted.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/ticketform"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-600 font-bold text-lg rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="mr-3 text-xl">✈️</span>
                  Book Dummy Ticket
                </a>
                
                <a 
                  href="/pricing"
                  className="inline-flex items-center px-8 py-4 bg-gray-500/20 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border-2 border-white/30 transform transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  <span className="mr-3 text-xl">💰</span>
                  View Pricing
                </a>
              </div>
            </div>
          </div>          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-gray-600 mb-2">50K+</div>
              <div className="text-gray-600 text-sm">Tickets Issued</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-slate-600 mb-2">195</div>
              <div className="text-gray-600 text-sm">Countries Served</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-gray-600 mb-2">99.8%</div>
              <div className="text-gray-600 text-sm">Acceptance Rate</div>
            </div>            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-gray-600 mb-2">50K+</div>
              <div className="text-gray-600 text-sm">Tickets Issued</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-slate-600 mb-2">195</div>
              <div className="text-gray-600 text-sm">Countries Served</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-gray-600 mb-2">99.8%</div>
              <div className="text-gray-600 text-sm">Acceptance Rate</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-slate-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Samples;