import React, { useState } from 'react';
import axios from 'axios';
import Payment from '../components/Payment';

const MAX_PASSENGERS = 6;

const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", 
  "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", 
  "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", 
  "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", 
  "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", 
  "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", 
  "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad", 
  "Tiruchirappalli", "Bareilly", "Mysore", "Tiruppur", "Gurgaon", "Aligarh", "Jalandhar", 
  "Bhubaneswar", "Salem", "Warangal", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur", 
  "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai Nagar", "Cuttack", "Firozabad", 
  "Kochi", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", "Nanded-Waghala", "Kolhapur", 
  "Ajmer", "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi", "Ulhasnagar", 
  "Nellore", "Jammu", "Sangli-Miraj & Kupwad", "Belgaum", "Mangalore", "Ambattur", 
  "Tirunelveli", "Malegaon", "Gaya", "Jalgaon", "Udaipur", "Maheshtala"
];

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "United States/Canada" },
  { code: "+44", country: "United Kingdom" },
  { code: "+86", country: "China" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+39", country: "Italy" },
  { code: "+61", country: "Australia" },
  { code: "+7", country: "Russia" },
  { code: "+82", country: "South Korea" },
  { code: "+34", country: "Spain" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+31", country: "Netherlands" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+32", country: "Belgium" },
  { code: "+351", country: "Portugal" },
  { code: "+30", country: "Greece" },
  { code: "+90", country: "Turkey" },
  { code: "+65", country: "Singapore" },
  { code: "+60", country: "Malaysia" },
  { code: "+66", country: "Thailand" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+84", country: "Vietnam" },
  { code: "+64", country: "New Zealand" },
  { code: "+27", country: "South Africa" },
  { code: "+20", country: "Egypt" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+92", country: "Pakistan" },
  { code: "+880", country: "Bangladesh" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+977", country: "Nepal" },
  { code: "+975", country: "Bhutan" }
];

const nationalities = [
  "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan", "Argentine",
  "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi",
  "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian",
  "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian",
  "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean",
  "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot",
  "Czech", "Danish", "Djiboutian", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian",
  "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino",
  "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek",
  "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Herzegovinian",
  "Honduran", "Hungarian", "I-Kiribati", "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi",
  "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani",
  "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese",
  "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourgish", "Macedonian", "Malagasy",
  "Malawian", "Malaysian", "Maldivan", "Malian", "Maltese", "Marshallese", "Mauritanian",
  "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan",
  "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander",
  "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Northern Irish", "Norwegian", "Omani",
  "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish",
  "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan",
  "San Marinese", "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois",
  "Sierra Leonean", "Singaporean", "Slovakian", "Slovenian", "Solomon Islander", "Somali",
  "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi",
  "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan",
  "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian",
  "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Welsh", "Yemenite", "Zambian", "Zimbabwean"
];

const emptyForm = {
  id: Date.now(),
  check_in_date: '',
  check_out_date: '',
  city: '',
  title: '',
  first_name: '',
  last_name: '',
  dob: '',
  nationality: '',
  country_code: '',
  phone: '',
  email: '',
  purpose: ''
};

const BookingForm = () => {
  const [passengers, setPassengers] = useState([{ ...emptyForm }]);
  const [errors, setErrors] = useState([{}]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const [tab, setTab] = useState("hotel");
  const [transformedData, setTransformedData] = useState([]);
  
  // Pricing constants for hotel booking
  const BASE_PRICE = 4999; // Base price per guest per night
  const TAX_RATE = 0.18; // 18% tax
  const CONVENIENCE_FEE = 149;
  const DISCOUNT_RATE = 0.08; // 8% discount for multiple guests
  
  // Calculate pricing details
  const calculatePricing = () => {
    const guestCount = passengers.length;
    const subtotal = BASE_PRICE * guestCount;
    const discountAmount = guestCount > 1 ? subtotal * DISCOUNT_RATE : 0;
    const discountedSubtotal = subtotal - discountAmount;
    const taxAmount = discountedSubtotal * TAX_RATE;
    const convenienceFee = CONVENIENCE_FEE * guestCount;
    const totalAmount = discountedSubtotal + taxAmount + convenienceFee;
    
    return {
      passengerCount: guestCount,
      basePrice: BASE_PRICE,
      subtotal,
      discountAmount,
      discountedSubtotal,
      taxAmount,
      convenienceFee,
      totalAmount
    };
  };

  const validateForm = (formData) => {
    const newErrors = {};
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!formData.check_in_date) newErrors.check_in_date = 'Check-in date is required';
    if (!formData.check_out_date) newErrors.check_out_date = 'Check-out date is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.first_name) newErrors.first_name = 'First name is required';
    if (!formData.last_name) newErrors.last_name = 'Last name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.country_code) newErrors.country_code = 'Country code is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Please use a valid phone number';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please use a valid email address';
    if (!formData.purpose) newErrors.purpose = 'Purpose is required';

    return newErrors;
  };

  const handleChange = (idx, e) => {
    const { name, value } = e.target;
    const updatedPassengers = passengers.map((p, i) =>
      i === idx ? { ...p, [name]: value } : p
    );
    setPassengers(updatedPassengers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = passengers.map(validateForm);
    setErrors(newErrors);
    const isValid = newErrors.every((err) => Object.keys(err).length === 0);
    
    if (isValid) {
      // Transform the form data to match backend expectations
      setTransformedData(
        passengers.map((form) => ({
          check_in_date: form.check_in_date,
          check_out_date: form.check_out_date,
          city: form.city,
          title: form.title,
          first_name: form.first_name,
          last_name: form.last_name,
          dob: form.dob,
          nationality: form.nationality,
          country_code: form.country_code,
          phone: form.phone,
          email: form.email,
          purpose: form.purpose
        }))
      );

      setTab("payment");
    }
  };

  const saveHotelData = async () => {
    try {
      setIsSubmitting(true);
      setSubmitMessage("");
      setSubmitError("");

      const response = await axios.post(
        "http://localhost:5000/api/v1/hotel/add",
        transformedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        const emailInfo = response.data.emailConfirmation;
        let successMessage = `🎉 Hotel booking successful! ${passengers.length} booking(s) confirmed.`;
        
        if (emailInfo) {
          if (emailInfo.failedEmails === 0) {
            successMessage += ` 📧 Confirmation emails sent to all guests.`;
          } else if (emailInfo.successfulEmails > 0) {
            successMessage += ` 📧 ${emailInfo.successfulEmails} confirmation email(s) sent successfully. ${emailInfo.failedEmails} email(s) failed to send.`;
          } else {
            successMessage += ` ⚠️ Booking confirmed but confirmation emails could not be sent. Please contact support.`;
          }
        }
        
        setSubmitMessage(successMessage);
        
        // Reset form after successful submission
        setTimeout(() => {
          setPassengers([{ ...emptyForm, id: Date.now() }]);
          setErrors([{}]);
          setSubmitMessage("");
          setTab("hotel");
        }, 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      let errorMessage = "❌ Booking failed. ";
      
      if (error.response?.data?.message) {
        errorMessage += error.response.data.message;
      } else if (error.response?.status === 500) {
        errorMessage += "Server error. Please try again later.";
      } else if (error.code === "ECONNREFUSED") {
        errorMessage += "Cannot connect to server. Please check if the backend is running.";
      } else {
        errorMessage += "Please try again or contact support.";
      }
      
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddPassenger = () => {
    if (passengers.length < MAX_PASSENGERS) {
      setPassengers([...passengers, { ...emptyForm, id: Date.now() }]);
      setErrors([...errors, {}]);
    }
  };

  const handleRemovePassenger = (idx) => {
    if (passengers.length > 1) {
      const updatedPassengers = passengers.filter((_, i) => i !== idx);
      const updatedErrors = errors.filter((_, i) => i !== idx);
      setPassengers(updatedPassengers);
      setErrors(updatedErrors);
    }
  };

  if (tab === "payment") {
    const pricingData = calculatePricing();
    return (
      <Payment 
        onSubmit={saveHotelData} 
        pricingData={pricingData}
        onBackToForm={() => setTab("hotel")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 py-8 px-4">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Main Form Section */}
        <div className="flex-1 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏨 Hotel Booking
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete your hotel reservation information below. Add multiple guests if needed.
            </p>
          </div>

          {/* Mobile Pricing Summary */}
          <div className="lg:hidden mb-8">
            <button
              type="button"
              onClick={() => setShowMobileSummary(!showMobileSummary)}
              className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center justify-between text-left hover:bg-blue-100 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Booking Summary</h3>
                <p className="text-sm text-gray-600">
                  {passengers.length} guest{passengers.length > 1 ? 's' : ''} • ₹{calculatePricing().totalAmount.toLocaleString()}
                </p>
              </div>
              <svg
                className={`w-5 h-5 text-gray-400 transition-transform ${showMobileSummary ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showMobileSummary && (
              <div className="mt-4 bg-white rounded-xl border border-gray-200 p-6">
                {(() => {
                  const pricing = calculatePricing();
                  return (
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Base Price ({pricing.passengerCount} guest{pricing.passengerCount > 1 ? 's' : ''})</span>
                        <span className="font-medium">₹{pricing.subtotal.toLocaleString()}</span>
                      </div>
                      
                      {pricing.discountAmount > 0 && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>Multi-guest discount (-8%)</span>
                          <span>-₹{pricing.discountAmount.toLocaleString()}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Taxes (18%)</span>
                        <span className="font-medium">₹{pricing.taxAmount.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Convenience Fee</span>
                        <span className="font-medium">₹{pricing.convenienceFee.toLocaleString()}</span>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-gray-900">Total Amount</span>
                          <span className="text-2xl font-bold text-blue-600">
                            ₹{pricing.totalAmount.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {pricing.discountAmount > 0 && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-green-700">
                            <span>💰</span>
                            <span className="font-medium">
                              You're saving ₹{pricing.discountAmount.toLocaleString()} on this booking!
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Success/Error Messages */}
          {submitMessage && (
            <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
              <p className="text-gray-800 text-center font-medium">{submitMessage}</p>
            </div>
          )}
          
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 text-center font-medium">{submitError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {passengers.map((formData, idx) => (
              <div key={formData.id} className="relative">
                {/* Guest Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-gray-600 to-slate-600 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {idx + 1}
                        </span>
                        {passengers.length > 1 ? `Guest ${idx + 1}` : "Guest Information"}
                      </h2>
                      {passengers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemovePassenger(idx)}
                          className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                          title="Remove guest"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Form Content */}
                  <div className="p-6">
                    {/* Hotel Information */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-gray-600">🏨</span> Hotel Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative">
                          <label htmlFor={`checkindate-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            Check-in Date
                          </label>
                          <input
                            id={`checkindate-${idx}`}
                            type="date"
                            name="check_in_date"
                            value={formData.check_in_date}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                          />
                          {errors[idx]?.check_in_date && <p className="text-red-500 text-xs mt-1">{errors[idx].check_in_date}</p>}
                        </div>

                        <div className="relative">
                          <label htmlFor={`checkoutdate-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            Check-out Date
                          </label>
                          <input
                            id={`checkoutdate-${idx}`}
                            type="date"
                            name="check_out_date"
                            value={formData.check_out_date}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                          />
                          {errors[idx]?.check_out_date && <p className="text-red-500 text-xs mt-1">{errors[idx].check_out_date}</p>}
                        </div>

                        <div className="relative">
                          <label htmlFor={`city-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            City
                          </label>
                          <select
                            id={`city-${idx}`}
                            name="city"
                            value={formData.city}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select city</option>
                            {indianCities.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                          {errors[idx]?.city && <p className="text-red-500 text-xs mt-1">{errors[idx].city}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-gray-600">👤</span> Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative">
                          <label htmlFor={`title-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            Title
                          </label>
                          <select
                            id={`title-${idx}`}
                            name="title"
                            value={formData.title}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select title</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Dr">Dr</option>
                          </select>
                          {errors[idx]?.title && <p className="text-red-500 text-xs mt-1">{errors[idx].title}</p>}
                        </div>

                        <div className="relative">
                          <label htmlFor={`firstname-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <input
                            id={`firstname-${idx}`}
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter first name"
                          />
                          {errors[idx]?.first_name && <p className="text-red-500 text-xs mt-1">{errors[idx].first_name}</p>}
                        </div>

                        <div className="relative">
                          <label htmlFor={`lastname-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <input
                            id={`lastname-${idx}`}
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter last name"
                          />
                          {errors[idx]?.last_name && <p className="text-red-500 text-xs mt-1">{errors[idx].last_name}</p>}
                        </div>

                        <div className="relative">
                          <label htmlFor={`dob-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            Date of Birth
                          </label>
                          <input
                            id={`dob-${idx}`}
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                          />
                          {errors[idx]?.dob && <p className="text-red-500 text-xs mt-1">{errors[idx].dob}</p>}
                        </div>

                        <div className="relative">
                          <label htmlFor={`nationality-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            Nationality
                          </label>
                          <select
                            id={`nationality-${idx}`}
                            name="nationality"
                            value={formData.nationality}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select nationality</option>
                            {nationalities.map((nationality) => (
                              <option key={nationality} value={nationality}>
                                {nationality}
                              </option>
                            ))}
                          </select>
                          {errors[idx]?.nationality && <p className="text-red-500 text-xs mt-1">{errors[idx].nationality}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-gray-600">📞</span> Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-3">
                          <div className="w-32">
                            <label htmlFor={`countrycode-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                              Country Code
                            </label>
                            <select
                              id={`countrycode-${idx}`}
                              name="country_code"
                              value={formData.country_code}
                              onChange={(e) => handleChange(idx, e)}
                              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                            >
                              <option value="">Code</option>
                              {countryCodes.map((country) => (
                                <option key={country.code} value={country.code}>
                                  {country.code}
                                </option>
                              ))}
                            </select>
                            {errors[idx]?.country_code && <p className="text-red-500 text-xs mt-1">Required</p>}
                          </div>
                          <div className="flex-1">
                            <label htmlFor={`phone-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              id={`phone-${idx}`}
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={(e) => handleChange(idx, e)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                              placeholder="Enter phone number"
                            />
                            {errors[idx]?.phone && <p className="text-red-500 text-xs mt-1">{errors[idx].phone}</p>}
                          </div>
                        </div>

                        <div className="relative">
                          <label htmlFor={`email-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            id={`email-${idx}`}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => handleChange(idx, e)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                            placeholder="Enter email address"
                          />
                          {errors[idx]?.email && <p className="text-red-500 text-xs mt-1">{errors[idx].email}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Purpose Information */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-gray-600">🎯</span> Visit Purpose
                      </h3>
                      <div className="relative">
                        <label htmlFor={`purpose-${idx}`} className="block text-sm font-medium text-gray-700 mb-2">
                          Purpose of Visit
                        </label>
                        <select
                          id={`purpose-${idx}`}
                          name="purpose"
                          value={formData.purpose}
                          onChange={(e) => handleChange(idx, e)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select purpose</option>
                          <option value="Business">Business</option>
                          <option value="Vacation">Vacation</option>
                          <option value="Family Visit">Family Visit</option>
                          <option value="Medical">Medical</option>
                          <option value="Education">Education</option>
                          <option value="Conference">Conference</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors[idx]?.purpose && <p className="text-red-500 text-xs mt-1">{errors[idx].purpose}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Guest Button */}
            {passengers.length < MAX_PASSENGERS && (
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleAddPassenger}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-gray-600 hover:text-gray-700 font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Another Guest
                  <span className="text-sm text-gray-500">({passengers.length}/{MAX_PASSENGERS})</span>
                </button>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-12 py-3 bg-gradient-to-r from-gray-600 to-slate-600 text-white rounded-lg hover:from-gray-700 hover:to-slate-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <span>💳</span>
                    Proceed to Payment
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Desktop Pricing Sidebar */}
        <div className="hidden lg:block w-96">
          <div className="sticky top-8">
            {(() => {
              const pricing = calculatePricing();
              return (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Booking Summary
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Base Price ({pricing.passengerCount} guest{pricing.passengerCount > 1 ? 's' : ''})</span>
                      <span className="font-medium">₹{pricing.subtotal.toLocaleString()}</span>
                    </div>
                    
                    {pricing.discountAmount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Multi-guest discount (-8%)</span>
                        <span>-₹{pricing.discountAmount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Taxes (18%)</span>
                      <span className="font-medium">₹{pricing.taxAmount.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Convenience Fee</span>
                      <span className="font-medium">₹{pricing.convenienceFee.toLocaleString()}</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-blue-600">
                          ₹{pricing.totalAmount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Savings Badge */}
                  {pricing.discountAmount > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 text-green-700">
                        <span>💰</span>
                        <span className="font-medium">
                          You're saving ₹{pricing.discountAmount.toLocaleString()} on this booking!
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Payment Method Info */}
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span>💳</span> Payment Methods
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <span>✅</span> Credit/Debit Cards
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✅</span> UPI & Net Banking
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✅</span> Digital Wallets
                      </div>
                    </div>
                  </div>

                  {/* Security Info */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Secure SSL encrypted payment</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
