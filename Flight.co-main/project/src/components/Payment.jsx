import React, { useState } from 'react';
import './Payment.css';

const Payment = ({ onSubmit, pricingData = null, onBackToForm = null }) => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Default pricing if not provided
  const defaultPricing = {
    totalAmount: 25.99,
    passengerCount: 1,
    basePrice: 25.99,
    taxAmount: 0,
    convenienceFee: 0
  };

  const pricing = pricingData || defaultPricing;
  const orderId = `ORD-${Date.now()}`;

  // Payment details with dynamic data
  const paymentDetails = {
    amount: `₹${pricing.totalAmount.toLocaleString()}`,
    merchant: 'Flight Booking Services',
    orderId: orderId,
    qrCode: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmZiIvPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiPgogICAgUVIgQ29kZQogIDwvdGV4dD4KICA8IS0tIFNpbXBsZSBRUiBwYXR0ZXJuIC0tPgogIDxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDAwIi8+CiAgPHJlY3QgeD0iNjAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMDAiLz4KICA8cmVjdCB4PSIxNjAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMDAiLz4KICA8cmVjdCB4PSIyMCIgeT0iNjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzAwMCIvPgogIDxyZWN0IHg9IjE2MCIgeT0iNjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzAwMCIvPgogIDxyZWN0IHg9IjIwIiB5PSIxNjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzAwMCIvPgogIDxyZWN0IHg9IjE2MCIgeT0iMTYwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMDAiLz4KPC9zdmc+'
  };
  const handleConfirmPayment = async () => {
    setLoading(true);
    
    try {
      // Call the onSubmit function passed from Ticketform
      if (onSubmit && typeof onSubmit === 'function') {
        await onSubmit();
        setPaymentConfirmed(true);
      } else {
        // Fallback simulation if no onSubmit provided
        setTimeout(() => {
          setPaymentConfirmed(true);
          setLoading(false);
        }, 2000);
        return;
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      // Handle error - you might want to show an error message here
    } finally {
      setLoading(false);
    }
  };
  const handleReset = () => {
    setPaymentConfirmed(false);
    setLoading(false);
    // Optionally call onBackToForm if provided
    if (onBackToForm) {
      onBackToForm();
    }
  };

  if (paymentConfirmed) {
    return (
      <div className="payment-container">
        <div className="payment-card success">
          <div className="success-icon">✓</div>
          <h2>Payment Confirmed!</h2>
          <p>Your payment of {paymentDetails.amount} has been processed successfully.</p>
          <p>Order ID: {paymentDetails.orderId}</p>
          <p className="success-details">
            {pricing.passengerCount > 1 
              ? `${pricing.passengerCount} flight tickets have been booked.`
              : 'Your flight ticket has been booked.'
            }
          </p>
          <div className="success-actions">
            <button onClick={handleReset} className="btn btn-primary">
              Book Another Ticket
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment Details</h2>
          <div className="payment-info">
          <div className="info-row">
            <span className="label">Service:</span>
            <span className="value">{paymentDetails.merchant}</span>
          </div>
          <div className="info-row">
            <span className="label">Passengers:</span>
            <span className="value">{pricing.passengerCount}</span>
          </div>
          <div className="info-row">
            <span className="label">Amount:</span>
            <span className="value amount">{paymentDetails.amount}</span>
          </div>
          <div className="info-row">
            <span className="label">Order ID:</span>
            <span className="value">{paymentDetails.orderId}</span>
          </div>
        </div>

        {/* Pricing Breakdown */}
        {pricingData && (
          <div className="pricing-breakdown">
            <h3>Payment Breakdown</h3>
            <div className="breakdown-item">
              <span>Base Price ({pricing.passengerCount} × ₹{pricing.basePrice.toLocaleString()})</span>
              <span>₹{(pricing.basePrice * pricing.passengerCount).toLocaleString()}</span>
            </div>
            {pricing.discountAmount > 0 && (
              <div className="breakdown-item discount">
                <span>Multi-passenger Discount (10%)</span>
                <span>-₹{pricing.discountAmount.toLocaleString()}</span>
              </div>
            )}
            <div className="breakdown-item">
              <span>Taxes & Fees (18%)</span>
              <span>₹{pricing.taxAmount.toLocaleString()}</span>
            </div>
            <div className="breakdown-item">
              <span>Convenience Fee</span>
              <span>₹{pricing.convenienceFee.toLocaleString()}</span>
            </div>
            <div className="breakdown-item total">
              <span>Total Amount</span>
              <span>₹{pricing.totalAmount.toLocaleString()}</span>
            </div>
          </div>
        )}

        <div className="qr-section">
          <h3>Scan QR Code to Pay</h3>
          <div className="qr-container">
            <img 
              src={paymentDetails.qrCode} 
              alt="Payment QR Code" 
              className="qr-code"
            />
          </div>
          <p className="qr-instruction">
            Scan this QR code with your mobile payment app
          </p>
        </div>        <div className="payment-actions">
          {onBackToForm && (
            <button 
              onClick={onBackToForm}
              className="btn btn-secondary"
            >
              ← Back to Form
            </button>
          )}
          <button 
            onClick={handleConfirmPayment} 
            disabled={loading}
            className="btn btn-confirm"
          >            {loading ? (
              <>
                <span className="spinner"></span>
                Processing Payment...
              </>
            ) : (
              'Confirm Payment'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;