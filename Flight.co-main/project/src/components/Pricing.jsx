const Pricing = () => {
  return (
    <>
      {/* Main Container */}
      <div className="relative py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-200/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-slate-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gray-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            {" "}
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-gray-700 text-sm font-medium">
                Choose Your Service
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Simple &
              <span className="block bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get verified documents for your visa applications with guaranteed
              approval rates. Fast delivery and worldwide acceptance.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Dummy Ticket Card */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl h-full">
                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>
                {/* Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-gray-600 to-slate-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  {" "}
                  <div className="relative">
                    <img
                      src="/flt.png"
                      alt="Flight ticket"
                      className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Dummy Ticket
                </h3>
                {/* Features */}{" "}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Verified flight reservation
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Maximum of two flights permitted
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Valid for 1-2 weeks (depends on route)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Quick delivery in 30-60 minutes
                    </span>
                  </div>
                </div>
                {/* CTA Button */}
                <div className="text-center mt-auto">
                  {" "}
                  <a href="/ticketform" className="block">
                    <button className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-700 hover:to-slate-700">
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Hotel Reservation Card */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl h-full">
                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>
                {/* Icon */}
                <div className="flex justify-center mb-6 mt-8">
                  <div className="relative">
                    <img
                      src="/hotel.png"
                      alt="Hotel reservation"
                      className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-xs">🏨</span>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Hotel Reservation
                </h3>{" "}
                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Verified hotel reservation
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Maximum of two hotel bookings
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Valid until check-in date
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Quick delivery in 30-60 minutes
                    </span>
                  </div>
                </div>
                {/* CTA Button */}
                <div className="text-center mt-auto">
                  {" "}
                  <a href="/buynow" className="block">
                    <button className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-700 hover:to-slate-700">
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel Insurance Card */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl h-full">
                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>
                {/* Icon */}
                <div className="flex justify-center mb-6 mt-8">
                  <div className="relative">
                    <img
                      src="/insurance.png"
                      alt="Travel insurance"
                      className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-xs">🛡️</span>
                    </div>
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Travel Insurance
                </h3>
                {/* Features */}{" "}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Provable insurance coverage
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Maximum 2 changes allowed
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Beneficial for immigration & visa
                    </span>
                  </div>{" "}
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-600 text-sm">
                      Quick delivery in 30-60 minutes
                    </span>
                  </div>
                </div>
                {/* CTA Button */}
                <div className="text-center mt-auto">
                  <a href="/buynow" className="block">
                    <button className="w-full bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-700 hover:to-slate-700">
                      Get Protected
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Section */}
          <div className="mt-20 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              {" "}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="transform transition-all duration-500 hover:scale-110">
                  <div className="text-3xl font-bold text-slate-600 mb-2">
                    99.8%
                  </div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
                <div className="transform transition-all duration-500 hover:scale-110">
                  <div className="text-3xl font-bold text-gray-600 mb-2">
                    30-60min
                  </div>
                  <div className="text-gray-600 text-sm">Delivery Time</div>
                </div>
                <div className="transform transition-all duration-500 hover:scale-110">
                  <div className="text-3xl font-bold text-slate-700 mb-2">
                    50K+
                  </div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="transform transition-all duration-500 hover:scale-110">
                  <div className="text-3xl font-bold text-gray-700 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricing;
