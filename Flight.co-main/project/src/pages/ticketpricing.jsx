import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketPricing = () => {
  const [formData, setFormData] = useState({
    basePrice: '',
    discount: '',
    finalPrice: ''
  });
  const [price, setBasePrice] = useState(null); // Use null for single object
  const [loading, setLoading] = useState(true);

 const getSinglePrice = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/ticket/getAll");
      // Log the response to debug structure
      console.log("API response:", response.data);

      // Try to find the price array or object in the response
      let priceData = null;
      if (response.data.success && Array.isArray(response.data.data) && response.data.data.length > 0) {
        priceData = response.data.data[0];
      } else if (response.data.success && response.data.price) {
        priceData = Array.isArray(response.data.price) ? response.data.price[0] : response.data.price;
      }

      if (priceData && priceData.basePrice !== undefined) {
        setBasePrice(priceData);
      } else {
        console.error("Price data is missing or invalid:", priceData);
        setBasePrice({ basePrice: 5999, discount: 0, finalPrice: 5999 }); // Fallback to default price object
      }
    } catch (error) {
      console.error("Error fetching price:", error);
      setBasePrice({ basePrice: 5999, discount: 0, finalPrice: 5999 }); // Fallback to default price object
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  
  useEffect(() => {
    getSinglePrice();
 
  }, []); // Only run once on mount

  // Add this function to handle form submission
  const addSinglePrice = async (e) => {
    e.preventDefault();
    try {
      // You can adjust the API endpoint and payload as needed
      const response = await axios.post("http://localhost:5000/api/v1/ticket/update", {
        basePrice: formData.basePrice,
        discount: formData.discount,
        finalPrice: formData.finalPrice
      });
      // Optionally, update the price state with the new data
      setBasePrice({
        basePrice: formData.basePrice,
        discount: formData.discount,
        finalPrice: formData.finalPrice
      });
      // Optionally, reset the form
      setFormData({
        basePrice: '',
        discount: '',
        finalPrice: ''
      });
      // Optionally, refetch the price from the server
      // await getSinglePrice();
    } catch (error) {
      console.error("Error updating price:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center my-4">Ticket Pricing</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={addSinglePrice} className="mb-4">
            <div className="mb-3">
              <label htmlFor="basePrice" className="form-label">Base Price</label>
              <input
                type="number"
                className="form-control"
                id="basePrice"
                value={formData.basePrice}
                onChange={(e) => setFormData({ ...formData, basePrice: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="discount" className="form-label">Discount (%)</label>
              <input
                type="number"
                className="form-control"
                id="discount"
                value={formData.discount}
                onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="finalPrice" className="form-label">Final Price</label>
              <input
                type="number"
                className="form-control"
                id="finalPrice"
                value={formData.finalPrice}
                onChange={(e) => setFormData({ ...formData, finalPrice: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Update Price</button>
          </form>
        )}
        {price && (
          <>
            <div>
              <h2>Current Price Details</h2>
              <p><strong>Base Price:</strong> {price.basePrice}</p>
              <p><strong>Discount:</strong> {price.discount}%</p>
              <p><strong>Final Price:</strong> {price.finalPrice}</p>
            </div>
            <style>{`
              .container {
                max-width: 600px;
                margin: auto;
                padding: 20px;
                background-color: #f8f9fa;
                border-radius: 5px;
              }
              h1 {
                color: #343a40;
              }
              .form-label {
                font-weight: bold;
              }
            `}</style>
          </>
        )}
      </div>
    </>
  );
};

export default TicketPricing;