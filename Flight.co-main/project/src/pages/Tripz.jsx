import React from 'react'

const Tripz = () => {
  return (
    <>
            {/* Main Container */}
            <div className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden">
                
                {/* Background Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden">                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-gray-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-slate-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gray-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header Section */}
                    <div className="text-center mb-16">                        <div className="inline-flex items-center px-4 py-2 bg-gray-500/20 backdrop-blur-sm rounded-full mb-6 border border-gray-300/30">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-gray-200 text-sm font-medium">Our Story</span>
                        </div>
                          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            About{" "}
                            <span className="block bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
                                Tripzy
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            At Tripzy, we understand that planning international travel can be 
                            overwhelming, especially when it comes to securing the necessary documentation. 
                            Founded in 2020 by a team of travel enthusiasts and industry experts, 
                            our mission is to simplify this process and make travel dreams a reality for everyone.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">                        <div className="order-2 lg:order-1">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-600 rounded-2xl flex items-center justify-center mr-4">
                                    <span className="text-white text-xl">🎯</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white">Our Experience</h2>
                            </div>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                To simplify the travel documentation process by providing genuine, 
                                verifiable documents that meet embassy and consulate requirements worldwide. 
                                We believe everyone deserves hassle-free travel planning.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-300">99.8% embassy acceptance rate</span>
                                    
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-300">Best Ai support</span>
                                    
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-300">Create Your Dream Trip According to Your Budget</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <span className="text-gray-300">24/7 customer support</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2 relative">
                            <div className="bg-gradient-to-r from-gray-400 to-slate-500 rounded-3xl p-8 transform rotate-3">
                                <div className="bg-white rounded-2xl p-6 transform -rotate-3 shadow-2xl">
                                    <img 
                                        src="../assets/pic5.jpg" 
                                        alt="Our mission" 
                                        className="w-full h-64 object-cover rounded-xl mb-4"
                                    />
                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted Worldwide</h3>
                                        <p className="text-gray-600">Making travel dreams come true</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <div className="w-16 h-16 bg-gray-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <span className="text-white text-2xl">🛡️</span>
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-4">Trust & Security</h3>
                                <p className="text-gray-300 text-center leading-relaxed">
                                    Your personal information and travel plans are protected with 
                                    bank-level security measures and strict confidentiality protocols.
                                </p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <div className="w-16 h-16 bg-slate-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <span className="text-white text-2xl">⚡</span>
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-4">Speed & Efficiency</h3>
                                <p className="text-gray-300 text-center leading-relaxed">
                                    Quick turnaround times without compromising quality. 
                                    Most documents delivered within an hour of confirmation.
                                </p>
                            </div>
                            
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                    <span className="text-white text-2xl">🌟</span>
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-4">Excellence</h3>
                                <p className="text-gray-300 text-center leading-relaxed">
                                    Commitment to providing the highest quality documents that 
                                    meet or exceed embassy and airline requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Experienced professionals dedicated to your travel success
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Team Member 1 */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
                                <div className="w-24 h-24 bg-gradient-to-r from-gray-400 to-slate-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-2xl">👨‍💼</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Alex Johnson</h3>
                                <p className="text-gray-400 mb-4">CEO & Founder</p>
                                <p className="text-gray-300 text-sm">
                                    10+ years in travel industry with expertise in visa requirements
                                </p>
                            </div>
                            
                            {/* Team Member 2 */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
                                <div className="w-24 h-24 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-2xl">👩‍💻</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Sarah Chen</h3>
                                <p className="text-gray-400 mb-4">Head of Operations</p>
                                <p className="text-gray-300 text-sm">
                                    Ensures quality control and timely delivery of all documents
                                </p>
                            </div>
                            
                            {/* Team Member 3 */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
                                <div className="w-24 h-24 bg-gradient-to-r from-gray-500 to-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-2xl">👨‍🎓</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Michael Rodriguez</h3>
                                <p className="text-gray-400 mb-4">Customer Success Manager</p>
                                <p className="text-gray-300 text-sm">
                                    Dedicated to providing exceptional customer support 24/7
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">Our Track Record</h2>
                            <p className="text-gray-300">Numbers that speak for themselves</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="transform transition-all duration-500 hover:scale-110">
                                <div className="text-3xl font-bold text-gray-600 mb-2">50K+</div>
                                <div className="text-gray-400 text-sm">Happy Customers</div>
                            </div>
                            <div className="transform transition-all duration-500 hover:scale-110">
                                <div className="text-3xl font-bold text-slate-600 mb-2">195</div>
                                <div className="text-gray-400 text-sm">Countries Served</div>
                            </div>
                            <div className="transform transition-all duration-500 hover:scale-110">
                                <div className="text-3xl font-bold text-gray-700 mb-2">99.8%</div>
                                <div className="text-gray-400 text-sm">Success Rate</div>
                            </div>
                            <div className="transform transition-all duration-500 hover:scale-110">
                                <div className="text-3xl font-bold text-slate-700 mb-2">60min</div>
                                <div className="text-gray-400 text-sm">Avg Delivery Time</div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20 text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Ready to Start Your Journey?
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                Join thousands of satisfied travelers who trust us with their documentation needs.
                            </p>
                            <a 
                                href="/buynow"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-600 text-white font-bold text-lg rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-700 hover:to-slate-700"                            >
                                <span className="mr-3 text-xl">🚀</span>
                                Get Started Today
                                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Tripz