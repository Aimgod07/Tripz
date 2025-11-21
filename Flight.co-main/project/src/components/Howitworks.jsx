const Howitworks = () => {
  return (
    <>
      {/* Main Container */}
      <div className="relative py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 w-72 h-72 bg-gray-300/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-gray-700 text-sm font-medium">
                Simple Process
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              How It{" "}
              <span className="block bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get your verified travel documents in just three simple steps.
              Fast, secure, and reliable service trusted by thousands.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-gray-300 to-slate-300 transform -translate-y-1/2"></div>
            <div className="hidden lg:block absolute top-24 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-slate-300 to-gray-400 transform -translate-y-1/2"></div>

            {/* Step 1: Fill Form */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    1
                  </div>
                </div>

                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="relative">
                    <img
                      src="/form.png"
                      alt="Fill form"
                      className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-xs">📝</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Fill Up the Form
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  Provide us with your complete details including your name,
                  desired travel dates, email address, and departure/arrival
                  destinations.
                </p>

                {/* Features */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Quick 5-minute form</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Secure data handling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Make Payment */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    2
                  </div>
                </div>

                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="relative">
                    <img
                      src="/card.png"
                      alt="Make payment"
                      className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-xs">💳</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Make the Payment
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  Once payment is completed, our staff will process your booking
                  with the provided information. 100% secured payment gateway.
                </p>

                {/* Features */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-4 h-4 bg-slate-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>SSL encrypted payment</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-4 h-4 bg-slate-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Multiple payment options</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Get Ticket */}
            <div className="group relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    3
                  </div>
                </div>

                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="relative">
                    <img
                      src="/open.png"
                      alt="Get ticket"
                      className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-xs">📧</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Get Ticket Quickly
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  Your ticket will be sent as a PDF attachment via email within
                  60 minutes. You can verify your dummy ticket on the airline's
                  website.
                </p>

                {/* Features */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-4 h-4 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>PDF format delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-4 h-4 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Airline website verifiable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-20 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us for their
                travel document needs.
              </p>
              <a
                href="/ticketform"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold text-lg rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-700 hover:to-slate-700"
              >
                <span className="mr-3 text-xl">🚀</span>
                Start Your Application
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-gray-600 mb-2">60min</div>
              <div className="text-gray-600 text-sm">Max Delivery Time</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-slate-600 mb-2">3</div>
              <div className="text-gray-600 text-sm">Simple Steps</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-gray-700 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Secure Process</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-slate-700 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Howitworks;
