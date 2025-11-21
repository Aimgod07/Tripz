import React from "react";

const Dummyticket = () => {
  return (
    <>
      {/* Main Container */}
      <div className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden">
        
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-200/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Card */}
            <div className="order-2 lg:order-1">
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 transform transition-all duration-700 hover:scale-105 hover:shadow-3xl">
                  {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-slate-500 to-gray-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-1 -z-10 blur-sm"></div>
                
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
                      <span className="text-white text-3xl">✈️</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Check Our 
                  <span className="block bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                    Dummy Ticket Samples
                  </span>
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 text-lg mb-8 leading-relaxed">
                  View authentic sample tickets that have been successfully used for visa applications worldwide. 
                  See exactly what you'll receive with your order.
                </p>                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3">
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📋</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Verified Documents</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-50 rounded-xl p-3">
                    <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Instant Download</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-50 rounded-xl p-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🌍</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Global Acceptance</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-50 rounded-xl p-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🔒</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">100% Secure</span>
                  </div>
                </div>                {/* CTA Button */}
                <div className="text-center">
                  <a
                    href="/samples"
                    className="group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold text-lg rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-700 hover:to-slate-700"
                  >
                    <span className="mr-3 text-xl">👁️</span>
                    View Sample Tickets
                    <span className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-gray-700 text-sm font-medium">Used by 10,000+ travelers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:scale-105">
                  <img
                    src="/air1.jpg"
                    alt="Sample Dummy Ticket"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Floating Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">Sample Preview</span>
                    </div>
                  </div>
                </div>                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-gray-400 to-slate-500 rounded-2xl opacity-20 transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-slate-400 to-gray-500 rounded-xl opacity-30 transform -rotate-12 group-hover:-rotate-45 transition-transform duration-700"></div>
                
                {/* Sample Info Cards */}
                <div className="absolute -bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-600">PDF</div>
                      <div className="text-xs text-gray-600">High Quality</div>
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-600">24h</div>
                      <div className="text-xs text-gray-600">Valid Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-gray-600 mb-2">50K+</div>
              <div className="text-gray-600 text-sm">Documents Issued</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-slate-600 mb-2">99.8%</div>
              <div className="text-gray-600 text-sm">Approval Rate</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-gray-700 mb-2">195</div>
              <div className="text-gray-600 text-sm">Countries Served</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-3xl font-bold text-slate-700 mb-2">30min</div>
              <div className="text-gray-600 text-sm">Avg. Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dummyticket;