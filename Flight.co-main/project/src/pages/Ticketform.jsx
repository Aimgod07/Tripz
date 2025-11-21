import React, { useEffect, useState } from "react";
import axios from "axios";
import Payment from "../components/Payment";
import { useNavigate } from "react-router-dom";

const MAX_PASSENGERS = 6;

const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
  "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad",
  "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Varanasi", "Aurangabad", "Amritsar", "Navi Mumbai",
  "Kochi", "Dehradun", "Noida", "Gurgaon", "Chandigarh", "Coimbatore",  "Guwahati", "Jodhpur", "Madurai"
  // Add more if needed
];

const countryCodes = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "Australia" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+92", country: "Pakistan" },
  { code: "+880", country: "Bangladesh" }
];

const nationalities = [
  "Indian", "American", "British", "Canadian", "Australian", "German", "French", "Chinese", "Japanese", "Russian",
  "Pakistani", "Bangladeshi", "Afghan", "Nepalese", "Sri Lankan", "Filipino", "Indonesian", "Malaysian", "Thai", "Vietnamese"
];

const emptyForm = {
  id: Date.now(),
  from_city: "",
  to_city: "",
  date: "",
  title: "",
  first_name: "",
  last_name: "",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [transformedData, setTransformedData] = useState([]);

  // Fetch price from backend
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/ticket/getAll");
        if (res.data.success && res.data.price?.basePrice) {
          setBasePrice(res.data.price.basePrice);
        }
      } catch (err) {
        console.error("Failed to fetch price:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrice();
  }, []);

  // Pricing calculation
  const calculatePricing = () => {
    const count = forms.length;
    const subtotal = basePrice * count;
    const discount = count > 1 ? subtotal * 0.1 : 0;
    const afterDiscount = subtotal - discount;
    const tax = afterDiscount * 0.18;
    const convenience = 199 * count;
    const total = Math.round(afterDiscount + tax + convenience);

    return {
      passengerCount: count,
      basePrice,
      subtotal,
      discount,
      tax: Math.round(tax),
      convenience,
      total,
    };
  };

  const pricing = calculatePricing();

  // Validation
  const validateForm = (data) => {
    const err = {};
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.from_city) err.from_city = "Required";
    if (!data.to_city) err.to_city = "Required";
    if (!data.date) err.date = "Required";
    if (!data.title) err.title = "Required";
    if (!data.first_name.trim()) err.first_name = "Required";
    if (!data.last_name.trim()) err.last_name = "Required";
    if (!data.nationality) err.nationality = "Required";
    if (!data.country_code) err.country_code = "Required";
    if (!data.phone) err.phone = "Required";
    else if (!phoneRegex.test(data.phone.replace(/\D/g, ""))) err.phone = "Invalid phone";
    if (!data.email) err.email = "Required";
    else if (!emailRegex.test(data.email)) err.email = "Invalid email";
    if (!data.purpose_of_travel) err.purpose_of_travel = "Required";

    return err;
  };

  const handleChange = (idx, e) => {
    const { name, value } = e.target;
    setForms(prev => prev.map((f, i) => i === idx ? { ...f, [name]: value } : f));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = forms.map(validateForm);
    setErrors(allErrors);

    const isValid = allErrors.every(err => Object.keys(err).length === 0);
    if (isValid) {
      setTransformedData(forms.map(f => ({
        from_city: f.from_city,
        to_city: f.to_city,
        date: f.date,
        title: f.title,
        first_name: f.first_name,
        last_name: f.last_name,
        nationality: f.nationality,
        country_code: f.country_code,
        phone: f.phone,
        email: f.email,
        purpose_of_travel: f.purpose_of_travel,
      })));
      setTab("payment");
    }
  };



  const handleAddPassenger = () => {
    if (forms.length < MAX_PASSENGERS) {
      setForms([...forms, { ...emptyForm, id: Date.now() }]);
      setErrors([...errors, {}]);
    }
  };

  const handleRemovePassenger = (idx) => {
    if (forms.length > 1) {
      setForms(forms.filter((_, i) => i !== idx));
      setErrors(errors.filter((_, i) => i !== idx));
    }
  };

  const saveTicketData = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError("");
      setSubmitMessage("");

      await axios.post("http://localhost:5000/api/v1/ticket/add", transformedData, {
        headers: { "Content-Type": "application/json" }
      });
  
      console.log("Transformed Data:", transformedData);

      setSubmitMessage(`Flight ticket booked for ${forms.length} passenger(s)!`);
      setTimeout(() => {
        setForms([{ ...emptyForm, id: Date.now() }]);
        setErrors([{}]);
        setTab("ticket");
        setSubmitMessage("");
      }, 5000);
    } catch (err) {
      setSubmitError("Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600">
        Loading price...
      </div>
    );
  }

  if (tab === "payment") {
    return (
      <Payment
        onSubmit={saveTicketData}
         pricingData={calculatePricing()}
        onBackToForm={() => setTab("form")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 py-8 px-4">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Main Form */}
        <div className="flex-1 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Flight Ticket Booking
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book verified dummy flight tickets for visa applications, proof of onward travel, or visa extensions.
            </p>
          </div>

          {/* Mobile Summary */}
          <div className="lg:hidden mb-8">
            <button
              type="button"
              onClick={() => setShowMobileSummary(!showMobileSummary)}
              className="w-full bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-center justify-between hover:bg-blue-100 transition-colors"
            >
              <div>
                <h3 className="font-semibold text-gray-900">Booking Summary</h3>
                <p className="text-sm text-gray-600">
                  {forms.length} passenger{forms.length > 1 ? "s" : ""} • ₹{pricing.total.toLocaleString()}
                </p>
              </div>
              <svg className={`w-5 h-5 transition-transform ${showMobileSummary ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showMobileSummary && (
              <div className="mt-4 bg-white rounded-xl shadow-lg border p-6 text-sm space-y-3">
                <div className="flex justify-between"><span>Base Price (×{pricing.passengerCount})</span><span>₹{pricing.subtotal.toLocaleString()}</span></div>
                {pricing.discount > 0 && <div className="flex justify-between text-green-600"><span>10% Multi-Passenger Discount</span><span>-₹{pricing.discount.toLocaleString()}</span></div>}
                <div className="flex justify-between"><span>Tax (18%)</span><span>₹{pricing.tax.toLocaleString()}</span></div>
                <div className="flex justify-between"><span>Convenience Fee</span><span>₹{pricing.convenience}</span></div>
                <div className="border-t pt-3 font-bold text-lg flex justify-between">
                  <span>Total</span>
                  <span className="text-blue-600">₹{pricing.total.toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>

          {/* Messages */}
          {submitMessage && <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center font-medium text-green-800">{submitMessage}</div>}
          {submitError && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-center font-medium text-red-800">{submitError}</div>}

          <form onSubmit={handleSubmit} className="space-y-8">
            {forms.map((formData, idx) => (
              <div key={formData.id} className="bg-white rounded-2xl shadow-xl border overflow-hidden">
                <div className="bg-gradient-to-r from-gray-600 to-slate-700 px-6 py-4 flex justify-between items-center text-white">
                  <h2 className="text-xl font-semibold flex items-center gap-3">
                    <span className="bg-white/20 rounded-full w-9 h-9 flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </span>
                    {forms.length > 1 ? `Passenger ${idx + 1}` : "Passenger Details"}
                  </h2>
                  {forms.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemovePassenger(idx)}
                      className="hover:bg-white/20 p-2 rounded-full transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="p-6 space-y-8">
                  {/* Travel Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                      Travel Information
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">From City</label>
                        <select name="from_city" value={formData.from_city} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option value="">Select city</option>
                          {indianCities.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                        {errors[idx]?.from_city && <p className="text-red-500 text-xs mt-1">{errors[idx].from_city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">To City</label>
                        <select name="to_city" value={formData.to_city} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option value="">Select city</option>
                          {indianCities.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                        {errors[idx]?.to_city && <p className="text-red-500 text-xs mt-1">{errors[idx].to_city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                        <input type="date" name="date" value={formData.date} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                        {errors[idx]?.date && <p className="text-red-500 text-xs mt-1">{errors[idx].date}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <select name="title" value={formData.title} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option value="">Select</option>
                          {["Mr", "Mrs", "Ms", "Miss", "Dr"].map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="John" />
                        {errors[idx]?.first_name && <p className="text-red-500 text-xs mt-1">{errors[idx].first_name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                        {errors[idx]?.last_name && <p className="text-red-500 text-xs mt-1">{errors[idx].last_name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                        <select name="nationality" value={formData.nationality} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option value="">Select</option>
                          {nationalities.map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex gap-3">
                        <div className="w-32">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Code</label>
                          <select name="country_code" value={formData.country_code} onChange={(e) => handleChange(idx, e)} required className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option value="">Code</option>
                            {countryCodes.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}
                          </select>
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input type="tel" name="phone" value={formData.phone} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="9876543210" />
                          {errors[idx]?.phone && <p className="text-red-500 text-xs mt-1">{errors[idx].phone}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                        {errors[idx]?.email && <p className="text-red-500 text-xs mt-1">{errors[idx].email}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Purpose */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Travel</label>
                    <select name="purpose_of_travel" value={formData.purpose_of_travel} onChange={(e) => handleChange(idx, e)} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="">Select purpose</option>
                      <option>Visa Validation</option>
                      <option>Proof of Onward Travel</option>
                      <option>Visa Extension</option>
                      <option>Immigration Requirement</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}

            {/* Add Passenger */}
            {forms.length < MAX_PASSENGERS && (
              <div className="text-center my-10">
                <button type="button" onClick={handleAddPassenger} className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-medium transition">
                  Add Another Passenger
                  <span className="text-sm">({forms.length}/{MAX_PASSENGERS})</span>
                </button>
              </div>
            )}

            {/* Submit */}
            <div className="text-center pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-16 py-5 bg-gradient-to-r from-gray-700 to-slate-800 text-white text-xl font-bold rounded-xl shadow-xl hover:from-gray-800 hover:to-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 mx-auto"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>Proceed to Payment</>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-96">
          <div className="sticky top-8 bg-white rounded-2xl shadow-xl border p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Booking Summary</h3>
            <div className="space-y-5 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Passengers</span><strong>{pricing.passengerCount}</strong></div>
              <div className="flex justify-between"><span className="text-gray-600">Base Price</span><span>₹{pricing.subtotal.toLocaleString()}</span></div>
              {pricing.discount > 0 && <div className="flex justify-between text-green-600 font-medium"><span>10% Discount</span><span>-₹{pricing.discount.toLocaleString()}</span></div>}
              <div className="flex justify-between"><span className="text-gray-600">Tax (18%)</span><span>₹{pricing.tax.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Convenience Fee</span><span>₹{pricing.convenience}</span></div>
              <div className="border-t-2 border-gray-200 pt-5 text-xl font-bold flex justify-between">
                <span>Total Amount</span>
                <span className="text-blue-600">₹{pricing.total.toLocaleString()}</span>
              </div>
            </div>
            {pricing.discount > 0 && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-700 font-semibold">You're saving ₹{pricing.discount.toLocaleString()}!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelform;