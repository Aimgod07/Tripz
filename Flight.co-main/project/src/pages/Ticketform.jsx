import React, { useEffect,useState } from "react";
import axios from "axios";
import Payment from "../components/Payment";
// Removed invalid imports that are not used in React components

const indianCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivali",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubballi-Dharwad",
  "Tiruchirappalli",
  "Bareilly",
  "Mysore",
  "Tiruppur",
  "Gurgaon",
  "Aligarh",
  "Jalandhar",
  "Bhubaneswar",
  "Salem",
  "Warangal",
  "Guntur",
  "Bhiwandi",
  "Saharanpur",
  "Gorakhpur",
  "Bikaner",
  "Amravati",
  "Noida",
  "Jamshedpur",
  "Bhilai Nagar",
  "Cuttack",
  "Firozabad",
  "Kochi",
  "Bhavnagar",
  "Dehradun",
  "Durgapur",
  "Asansol",
  "Nanded-Waghala",
  "Kolhapur",
  "Ajmer",
  "Gulbarga",
  "Jamnagar",
  "Ujjain",
  "Loni",
  "Siliguri",
  "Jhansi",
  "Ulhasnagar",
  "Nellore",
  "Jammu",
  "Sangli-Miraj & Kupwad",
  "Belgaum",
  "Mangalore",
  "Ambattur",
  "Tirunelveli",
  "Malegaon",
  "Gaya",
  "Jalgaon",
  "Udaipur",
  "Maheshtala"
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
  from_city: "",
  to_city: "",
  title: "",
  first_name: "",
  last_name: "",
  date: "",
  nationality: "",
  country_code: "",
  phone: "",
  email: "",
  purpose_of_travel: "",
};




const Travelform = () => {
  const [forms, setForms] = useState([{ ...emptyForm }]);
  const [errors, setErrors] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const [tab, setTab] = useState("ticket");
  const [basePrice, setBasePrice] = useState(5999);

  // Move getSinglePrice inside the component and make it a regular async function
  // Fetch price from backend API
  const getSinglePrice = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/ticket/getAll");
      if (response.data.success) {
        const priceData = response.data.price;
        if (priceData && priceData.basePrice) {
          setBasePrice(priceData.basePrice);
        } else {
          console.error("Price data is missing or invalid:", priceData);
          setBasePrice(5999); // Fallback to default price if API fails
        }
      } else {
        console.error("Failed to fetch price:", response.data.message);
        setBasePrice(5999); // Fallback to default price if API fails
      }
    } catch (error) {
      console.error("Error fetching price:", error);
      setBasePrice(5999); // Fallback to default price if API fails
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Optionally, expose setBasePrice via context or props for other pages to update
  // For now, keep the variable here and use basePrice instead of BASE_PRICE below
  const TAX_RATE = 0.18; // 18% tax
  // Calculate pricing details
  // Pricing constants
  const DISCOUNT_RATE = 0.10; // 10% discount for multiple passengers
  const CONVENIENCE_FEE = 199; // Flat fee per passenger

  // Calculate pricing details
  const calculatePricing = () => {
    const passengerCount = forms.length;
    const subtotal = basePrice * passengerCount;
    const discountAmount = passengerCount > 1 ? subtotal * DISCOUNT_RATE : 0;
    const discountedSubtotal = subtotal - discountAmount;
    const taxAmount = discountedSubtotal * TAX_RATE;
    const convenienceFee = CONVENIENCE_FEE * passengerCount;
    const totalAmount = discountedSubtotal + taxAmount + convenienceFee;

    return {
      passengerCount,
      basePrice: priceData.basePrice,
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

    if (!formData.from_city) newErrors.from_city = "From city is required";
    if (!formData.to_city) newErrors.to_city = "To city is required";
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.date) newErrors.date = "Date of travel is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";
    if (!formData.country_code)
      newErrors.country_code = "Country code is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Please use a valid phone number";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please use a valid email address";
    if (!formData.purpose_of_travel) newErrors.purpose_of_travel = "Purpose is required";

    return newErrors;
  };
  const handleChange = (idx, e) => {
    const { name, value } = e.target;
    const updatedForms = forms.map((form, i) =>
      i === idx ? { ...form, [name]: value } : form
    );
    setForms(updatedForms);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [transformedData, setTransformedData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allErrors = forms.map(validateForm);
    setErrors(allErrors);
    const isValid = allErrors.every((err) => Object.keys(err).length === 0);
    
    if (isValid) {

      // Transform the form data to match backend expectations
      setTransformedData(
        forms.map((form) => ({
          from_city: form.from_city,
          to_city: form.to_city,
          date: form.date,
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone,
          country_code: form.country_code,
          purpose_of_travel: form.purpose_of_travel,
          title: form.title,
          nationality: form.nationality,
        }))
      );

      setTab("payment");
    }
  };
  const handleAddPassenger = () => {
    if (forms.length < 6) {
      setForms([...forms, { ...emptyForm, id: Date.now() }]);
      setErrors([...errors, {}]);
    }
  };

  const saveTicketData = async () => {
     try {
      setIsSubmitting(true);
      setSubmitMessage("");
      setSubmitError("");

      // Transform the form data to match backend expectations

      const response = await axios.post(
        "http://localhost:5000/api/v1/ticket/add",
        transformedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        );

        if (response.data.success) {
          const emailInfo = response.data.emailConfirmation;
          let successMessage = `🎉 Booking successful! ${forms.length} ticket(s) booked.`;
          
          if (emailInfo) {
            if (emailInfo.failedEmails === 0) {
              successMessage += ` 📧 Confirmation emails sent to all passengers.`;
            } else if (emailInfo.successfulEmails > 0) {
              successMessage += ` 📧 ${emailInfo.successfulEmails} confirmation email(s) sent successfully. ${emailInfo.failedEmails} email(s) failed to send.`;
            } else {
              successMessage += ` ⚠️ Booking confirmed but confirmation emails could not be sent. Please contact support.`;
            }
          }
          
          setSubmitMessage(successMessage);
          
          // Reset form after successful submission
          setTimeout(() => {
            setForms([{ ...emptyForm }]);
            setErrors([{}]);
            setSubmitMessage("");
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
  }

  const handleRemovePassenger = (idx) => {
    if (forms.length > 1) {
      const updatedForms = forms.filter((_, i) => i !== idx);
      const updatedErrors = errors.filter((_, i) => i !== idx);
      setForms(updatedForms);
      setErrors(updatedErrors);
    }

  
  if (tab === "ticket") {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 py-8 px-4">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Main Form Section */}
        <div className="flex-1 max-w-4xl">          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ✈️ Flight Ticket Booking
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete your travel information below. Add multiple passengers if
              needed.
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
                  {forms.length} passenger{forms.length > 1 ? 's' : ''} • ₹{calculatePricing().totalAmount.toLocaleString()}
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
              <div className="mt-4 bg-white rounded-xl shadow-lg border p-4">
                {(() => {
                  const pricing = calculatePricing();
                  return (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Price ({pricing.passengerCount} × ₹{pricing.basePrice.toLocaleString()})</span>
                        <span>₹{pricing.subtotal.toLocaleString()}</span>
                      </div>
                      {pricing.discountAmount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Multi-passenger Discount (10%)</span>
                          <span>-₹{pricing.discountAmount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes & Fees (18%)</span>
                        <span>₹{pricing.taxAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Convenience Fee</span>
                        <span>₹{pricing.convenienceFee.toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-blue-600">₹{pricing.totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {forms.map((formData, idx) => (
            <div key={formData.id} className="relative">
              {/* Passenger Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-gray-600 to-slate-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                      <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      {forms.length > 1
                        ? `Passenger ${idx + 1}`
                        : "Passenger Information"}
                    </h2>
                    {forms.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePassenger(idx)}
                        className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                        title="Remove passenger"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6">
                  {" "}
                  {/* Travel Information */}{" "}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left gap-2">
                      <span className="text-gray-600">🌍</span> Travel Details
                    </h3>
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">                      <div className="relative md:w-1/2">
                        <label
                          htmlFor={`fromcity-${idx}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          From City
                        </label>
                        <select
                          id={`fromcity-${idx}`}
                          name="from_city"
                          value={formData.from_city}
                          onChange={(e) => handleChange(idx, e)}
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                            errors[idx]?.from_city
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <option value="">Select departure city</option>
                          {indianCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>{" "}
                        {errors[idx]?.from_city && (
                          <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                            <span>⚠️</span> {errors[idx].from_city}
                          </p>
                        )}
                      </div>                      <div className="relative md:w-1/2">
                        <label
                          htmlFor={`tocity-${idx}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          To City
                        </label>
                        <select
                          id={`tocity-${idx}`}
                          name="to_city"
                          value={formData.to_city}
                          onChange={(e) => handleChange(idx, e)}
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                            errors[idx]?.to_city
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <option value="">Select destination city</option>
                          {indianCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>{" "}
                        {errors[idx]?.to_city && (
                          <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                            <span>⚠️</span> {errors[idx].to_city}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>{" "}                  {/* Personal Information */}{" "}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left gap-2">
                      <span className="text-slate-600">👤</span> Personal
                      Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row md:justify-between gap-6">
                        <div className="relative md:w-1/3">
                          <label
                            htmlFor={`title-${idx}`}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Title
                          </label>                          <select
                            id={`title-${idx}`}
                            name="title"
                            value={formData.title}
                            onChange={(e) => handleChange(idx, e)}
                            required
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                              errors[idx]?.title
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <option value="">Select Title</option>
                            {["Mr", "Mrs", "Miss", "Ms", "Dr"].map((title) => (
                              <option key={title} value={title}>
                                {title}
                              </option>
                            ))}
                          </select>
                          {errors[idx]?.title && (
                            <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                              <span>⚠️</span> {errors[idx].title}
                            </p>
                          )}
                        </div>

                        <div className="relative md:w-1/3">
                          <label
                            htmlFor={`name-${idx}`}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            First Name
                          </label>                          <input
                            type="text"
                            id={`name-${idx}`}
                            name="first_name"
                            value={formData.first_name}
                            onChange={(e) => handleChange(idx, e)}
                            placeholder="Enter first name"
                            required
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                              errors[idx]?.first_name
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          />
                          {errors[idx]?.first_name && (
                            <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                              <span>⚠️</span> {errors[idx].first_name}
                            </p>
                          )}
                        </div>

                        <div className="relative md:w-1/3">
                          <label
                            htmlFor={`surname-${idx}`}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Last Name
                          </label>                          <input
                            type="text"
                            id={`surname-${idx}`}
                            name="last_name"
                            value={formData.last_name}
                            onChange={(e) => handleChange(idx, e)}
                            placeholder="Enter last name"
                            required
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                              errors[idx]?.last_name
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          />
                          {errors[idx]?.last_name && (
                            <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                              <span>⚠️</span> {errors[idx].last_name}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:justify-between gap-6">
                        <div className="relative md:w-1/3">
                          <label
                            htmlFor={`date-${idx}`}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Date of Travel
                          </label>                          <input
                            type="date"
                            id={`date-${idx}`}
                            name="date"
                            value={formData.date}
                            onChange={(e) => handleChange(idx, e)}
                            required
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                              errors[idx]?.date
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          />
                          {errors[idx]?.date && (
                            <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                              <span>⚠️</span> {errors[idx].date}
                            </p>
                          )}
                        </div>                        <div className="relative md:w-1/3">
                          <label
                            htmlFor={`nationality-${idx}`}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Nationality
                          </label>
                          <select
                            id={`nationality-${idx}`}
                            name="nationality"
                            value={formData.nationality}
                            onChange={(e) => handleChange(idx, e)}
                            required
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                              errors[idx]?.nationality
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <option value="">Select nationality</option>
                            {nationalities.map((nationality) => (
                              <option key={nationality} value={nationality}>
                                {nationality}
                              </option>
                            ))}
                          </select>
                          {errors[idx]?.nationality && (
                            <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                              <span>⚠️</span> {errors[idx].nationality}
                            </p>
                          )}
                        </div>                        <div className="relative md:w-1/3">
                          <label
                            htmlFor={`countrycode-${idx}`}
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Country Code
                          </label>
                          <select
                            id={`countrycode-${idx}`}
                            name="country_code"
                            value={formData.country_code}
                            onChange={(e) => handleChange(idx, e)}
                            required
                            className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                              errors[idx]?.country_code
                                ? "border-red-300 bg-red-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <option value="">Select country code</option>
                            {countryCodes.map((item) => (
                              <option key={item.code} value={item.code}>
                                {item.code} ({item.country})
                              </option>
                            ))}
                          </select>
                          {errors[idx]?.country_code && (
                            <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                              <span>⚠️</span> {errors[idx].country_code}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Contact Information */}{" "}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left gap-2">
                      <span className="text-gray-600">📞</span> Contact
                      Information
                    </h3>
                    <div className="flex flex-col md:flex-row md:justify-between gap-6">
                      <div className="relative md:w-1/3">
                        <label
                          htmlFor={`phone-${idx}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>                        <input
                          type="tel"
                          id={`phone-${idx}`}
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => handleChange(idx, e)}
                          placeholder="Enter phone number"
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                            errors[idx]?.phone
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        />
                        {errors[idx]?.phone && (
                          <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                            <span>⚠️</span> {errors[idx].phone}
                          </p>
                        )}
                      </div>

                      <div className="relative md:w-1/3">
                        <label
                          htmlFor={`email-${idx}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address
                        </label>                        <input
                          type="email"
                          id={`email-${idx}`}
                          name="email"
                          value={formData.email}
                          onChange={(e) => handleChange(idx, e)}
                          placeholder="Enter email address"
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                            errors[idx]?.email
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        />
                        {errors[idx]?.email && (
                          <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                            <span>⚠️</span> {errors[idx].email}
                          </p>
                        )}
                      </div>

                      <div className="md:w-1/3">
                        <label
                          htmlFor={`purpose-${idx}`}
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Purpose of Travel
                        </label>                        <select
                          id={`purpose-${idx}`}
                          name="purpose_of_travel"
                          value={formData.purpose_of_travel}
                          onChange={(e) => handleChange(idx, e)}
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                            errors[idx]?.purpose_of_travel
                              ? "border-red-300 bg-red-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <option value="">Select Purpose</option>
                          {[
                            "Visa Validation",
                            "Proof of Return",
                            "Extension of Visa",
                            "Proof of Travel",
                            "Other",
                          ].map((purpose) => (
                            <option key={purpose} value={purpose}>
                              {purpose}
                            </option>
                          ))}
                        </select>
                        {errors[idx]?.purpose_of_travel && (
                          <p className="text-red-500 text-sm mt-1 flex items-start gap-1">
                            <span>⚠️</span> {errors[idx].purpose_of_travel}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}          {/* Action Buttons */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            {/* Submit Messages */}
            {submitMessage && (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-center mb-4">
                <div className="text-lg font-semibold mb-1">Success!</div>
                <div>{submitMessage}</div>
              </div>
            )}
            
            {submitError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center mb-4">
                <div className="text-lg font-semibold mb-1">Error</div>
                <div>{submitError}</div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {" "}
              <button
                type="button"
                onClick={handleAddPassenger}
                disabled={forms.length >= 6}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  forms.length >= 6
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-600 hover:bg-gray-700 text-white hover:shadow-lg hover:scale-105 active:scale-95"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Passenger ({forms.length}/6)
              </button>{" "}              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-semibold rounded-xl transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white hover:shadow-lg hover:scale-105 active:scale-95"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Proceed to Payment
                  </>
                )}
              </button>
            </div>
            {forms.length >= 6 && (
              <p className="text-center text-amber-600 text-sm mt-3 flex items-center justify-center gap-1">
                <span>⚠️</span> Maximum 6 passengers allowed
              </p>            )}
          </div>
        </form>
        </div>

        {/* Sticky Pricing Component */}
        <div className="w-80 hidden lg:block">
          <div className="sticky top-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-blue-100 p-2 rounded-lg">💰</span>
                Booking Summary
              </h3>
              
              {(() => {
                const pricing = calculatePricing();
                return (
                  <div className="space-y-4">
                    {/* Passenger Count */}
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 flex items-center gap-2">
                        <span>👥</span> Passengers
                      </span>
                      <span className="font-semibold text-gray-900">{pricing.passengerCount}</span>
                    </div>

                    {/* Base Price */}
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Base Price (per person)</span>
                      <span className="font-medium">₹{pricing.basePrice.toLocaleString()}</span>
                    </div>

                    {/* Subtotal */}
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{pricing.subtotal.toLocaleString()}</span>
                    </div>

                    {/* Discount */}
                    {pricing.discountAmount > 0 && (
                      <div className="flex justify-between items-center py-2 text-green-600">
                        <span className="flex items-center gap-1">
                          <span>🎉</span> Multi-passenger Discount (10%)
                        </span>
                        <span className="font-medium">-₹{pricing.discountAmount.toLocaleString()}</span>
                      </div>
                    )}

                    {/* Tax */}
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Taxes & Fees (18%)</span>
                      <span className="font-medium">₹{pricing.taxAmount.toLocaleString()}</span>
                    </div>

                    {/* Convenience Fee */}
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Convenience Fee</span>
                      <span className="font-medium">₹{pricing.convenienceFee.toLocaleString()}</span>
                    </div>

                    {/* Total */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-blue-600">
                          ₹{pricing.totalAmount.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Savings Badge */}
                    {pricing.discountAmount > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                        <div className="flex items-center gap-2 text-green-700">
                          <span>💰</span>
                          <span className="font-medium">
                            You're saving ₹{pricing.discountAmount.toLocaleString()} on this booking!
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Payment Method Info */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
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
    </div>
  );  } else if (tab === "payment") {
    const pricingData = calculatePricing();
    return (
      <Payment 
        onSubmit={saveTicketData} 
        pricingData={pricingData}
        onBackToForm={() => setTab("ticket")}
      />
    );
  }
  };
}

export default Travelform
