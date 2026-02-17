import React from "react";
import Hero from "../components/Hero";
import Dummyticket from "../components/Dummyticket";
import FAQ from "../components/FAQ";
import Howitworks from "../components/Howitworks";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <>
      {/* Main Container with improved spacing and animations */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <Hero
            title="Welcome to TravelCo"
            description="Your trusted partner for verified travel documents and seamless visa applications. Join thousands of satisfied customers worldwide!"
          />
        </section>

        {/* Main Content Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Dummy Ticket Section */}
          <section className="py-16 transform transition-all duration-700 hover:scale-[1.02]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Verified Travel Documents
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get authentic dummy tickets and hotel reservations for your visa
                applications
              </p>
            </div>
            <Dummyticket />
          </section>{" "}
          {/* Pricing Section */}
          <section className="py-16 bg-gradient-to-r from-gray-50 to-slate-50 rounded-3xl my-16 transform transition-all duration-700 hover:shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Affordable Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your travel documentation needs
              </p>
            </div>
            <Pricing />
          </section>
          {/* How It Works Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple 3-step process to get your documents ready
              </p>
            </div>
            <Howitworks />
          </section>{" "}
          {/* FAQ Section */}
          <section className="py-16 bg-gradient-to-r from-gray-50 to-slate-50 rounded-3xl my-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our services
              </p>
            </div>
            <FAQ />
          </section>{" "}
          {/* Call to Action Section */}
          <section className="py-20 text-center">
            <div className="bg-gradient-to-r from-gray-600 to-slate-600 rounded-3xl p-12 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get your verified travel documents in just 30-60 minutes.
                Trusted by thousands of travelers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/buynow"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-600 font-semibold rounded-xl hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span className="mr-2">🎫</span>
                  Book Dummy Ticket
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-600 transform transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">ℹ️</span>
                  Learn More
                </a>
              </div>
            </div>
          </section>
          {/* Trust Indicators */}
          <section className="py-16 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Trusted by Travelers Worldwide
              </h3>{" "}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-gray-600 mb-2">
                    10K+
                  </div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-slate-600 mb-2">
                    99%
                  </div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-gray-700 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-slate-700 mb-2">
                    30min
                  </div>
                  <div className="text-sm text-gray-600">Avg Delivery</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
