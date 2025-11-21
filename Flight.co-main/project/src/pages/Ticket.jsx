


const Ticket = () => {
  return (
    <>      {/* Main Container */}
      <div className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 overflow-hidden">
        
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
              <span className="text-gray-700 text-sm font-medium">Choose Your Service</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Select Your 
              <span className="block bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our verified travel document services. Fast, secure, and trusted by thousands worldwide.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Dummy Ticket Card */}
            <a href="/ticketform" className="group block">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl h-full">
                  {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>
                
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gray-500 to-slate-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="relative">
                    <img src="/flt.png" alt="Flight ticket" className="w-24 h-24 object-contain transform group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Dummy Ticket
                </h3>                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Verified flight reservation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Maximum of two flights permitted</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Valid for 1-2 weeks (depends on route)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Quick delivery in 30-60 minutes</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-auto">
                  <div className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      <span className="mr-2">✈️</span>
                      Book Flight Ticket
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Hotel Reservation Card */}
            <a href="/hotelform" className="group block">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl h-full">
                  {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-gray-500 to-slate-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-8">
                  <div className="relative">
                    <img src="/hotel.png" alt="Hotel reservation" className="w-24 h-24 object-contain transform group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-sm">🏨</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Hotel Reservation
                </h3>                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Verified hotel reservation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Maximum of two hotel bookings</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Valid until check-in date</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Quick delivery in 30-60 minutes</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-auto">
                  <div className="w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      <span className="mr-2">🏨</span>
                      Book Hotel Stay
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Travel Insurance Card */}
            <a href="/insurance" className="group block">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl h-full">
                  {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-8">
                  <div className="relative">
                    <img src="/insurance.png" alt="Travel insurance" className="w-24 h-24 object-contain transform group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-sm">🛡️</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                  Travel Insurance
                </h3>

                {/* Features */}
                <div className="space-y-4 mb-8">                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Provable insurance coverage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Maximum 2 changes allowed</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Beneficial for immigration & visa</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">Quick delivery in 30-60 minutes</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-auto">
                  <div className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <span className="flex items-center justify-center">
                      <span className="mr-2">🛡️</span>
                      Get Insurance
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Bottom Trust Section */}
          <div className="mt-20">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Why Choose Our Services?
                </h3>
                <p className="text-gray-600">
                  Trusted by thousands of travelers worldwide
                </p>
              </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="transform transition-all duration-500 hover:scale-110">
                  <div className="text-3xl font-bold text-gray-600 mb-2">99.8%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
                <div className="transform transition-all duration-500 hover:scale-110">
                  <div className="text-3xl font-bold text-slate-600 mb-2">60min</div>
                  <div className="text-gray-600 text-sm">Max Delivery</div>
                </div>
                <div className="transform transition-all duration-500 hover:scale-110">
                  <div className="text-3xl font-bold text-gray-700 mb-2">50K+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="transform transition-all duration-500 hover:scale-110">
                  <div className="text-3xl font-bold text-slate-700 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>          {/* Additional CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-gray-600 to-slate-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
                Our travel experts are here to help you select the right documents for your journey.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-600 font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="mr-2">💬</span>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ticket;