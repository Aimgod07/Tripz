import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
import https from 'https';
const agent = new https.Agent({ rejectUnauthorized: false });
// Use agent in your HTTPS request

// Create reusable transporter object using SMTP transport
const createTransporter = async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    }
  });
};

// Generate booking confirmation email template
const generateBookingEmailTemplate = (ticketData) => {
  const {
    first_name,
    last_name,
    from_city,
    to_city,
    date,
    email,
    phone,
    country_code,
    purpose_of_travel,
    title,
    nationality,
    _id
  } = ticketData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmation - TravelCo</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 3px solid #3b82f6;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #3b82f6;
          margin-bottom: 10px;
        }
        .booking-details {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          color: #4a5568;
        }
        .value {
          color: #2d3748;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          color: #718096;
          font-size: 14px;
        }
        .contact-info {
          background: #edf2f7;
          padding: 15px;
          border-radius: 6px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">TravelCo</div>
          <h1 style="color: #2d3748; margin: 0;">Booking Confirmation</h1>
          <p style="margin: 10px 0 0 0; color: #718096;">Thank you for choosing TravelCo!</p>
        </div>

        <p>Dear ${title} ${first_name} ${last_name},</p>
        
        <p>We are pleased to confirm your travel booking. Below are the details of your reservation:</p>

        <div class="booking-details">
          <h3 style="margin-top: 0; color: #3b82f6;">Booking Details</h3>
          <div class="detail-row">
            <span class="label">Booking ID:</span>
            <span class="value">${_id}</span>
          </div>
          <div class="detail-row">
            <span class="label">Passenger Name:</span>
            <span class="value">${title} ${first_name} ${last_name}</span>
          </div>
          <div class="detail-row">
            <span class="label">From:</span>
            <span class="value">${from_city}</span>
          </div>
          <div class="detail-row">
            <span class="label">To:</span>
            <span class="value">${to_city}</span>
          </div>
          <div class="detail-row">
            <span class="label">Travel Date:</span>
            <span class="value">${new Date(date).toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div class="detail-row">
            <span class="label">Purpose of Travel:</span>
            <span class="value">${purpose_of_travel}</span>
          </div>
          <div class="detail-row">
            <span class="label">Nationality:</span>
            <span class="value">${nationality}</span>
          </div>
          <div class="detail-row">
            <span class="label">Contact:</span>
            <span class="value">${country_code} ${phone}</span>
          </div>
          <div class="detail-row">
            <span class="label">Email:</span>
            <span class="value">${email}</span>
          </div>
        </div>

        <div class="contact-info">
          <h4 style="margin-top: 0; color: #3b82f6;">Need Help?</h4>
          <p style="margin: 5px 0;">📧 Email: support@travelco.com</p>
          <p style="margin: 5px 0;">📞 Phone: +91-1234567890</p>
          <p style="margin: 5px 0;">🕒 Available: Monday to Friday, 9 AM - 6 PM IST</p>
        </div>

        <p><strong>Important:</strong> Please keep this booking confirmation email for your records. You may need to present it during your travel.</p>

        <div class="footer">
          <p>This is an automated email. Please do not reply to this email address.</p>
          <p>&copy; 2024 TravelCo. All rights reserved.</p>
          <p>Visit us at: <a href="#" style="color: #3b82f6;">www.travelco.com</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send booking confirmation email
export const sendBookingConfirmation = async (ticketData) => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: {
        name: 'TravelCo',
        address: 'choudharydeepanshu160@gmail.com'
      },
      to: ticketData.email,
      subject: `Booking Confirmation - TravelCo | ${ticketData.from_city} to ${ticketData.to_city}`,
      html: generateBookingEmailTemplate(ticketData),
      text: `
        Dear ${ticketData.title} ${ticketData.first_name} ${ticketData.last_name},
        
        Your booking has been confirmed!
        
        Booking Details:
        - Booking ID: ${ticketData._id}
        - From: ${ticketData.from_city}
        - To: ${ticketData.to_city}
        - Date: ${new Date(ticketData.date).toLocaleDateString()}
        - Purpose: ${ticketData.purpose_of_travel}
        - Contact: ${ticketData.country_code} ${ticketData.phone}
        
        Thank you for choosing TravelCo!
        
        For support, contact us at support@travelco.com or +91-1234567890
        
        TravelCo Team
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      message: 'Booking confirmation email sent successfully'
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to send booking confirmation email'
    };
  }
};

// Send bulk booking confirmations (for multiple tickets)
export const sendBulkBookingConfirmations = async (ticketsData) => {
  const results = [];
  
  for (const ticket of ticketsData) {
    const result = await sendBookingConfirmation(ticket);
    results.push({
      ticketId: ticket._id,
      email: ticket.email,
      ...result
    });
  }
  
  return results;
};



// Send bulk booking confirmations (for multiple tickets)
export const sendBulkHotelBookingConfirmations = async (hotelData) => {
  const results = [];

  for (const hotel of hotelData) {
    const result = await sendHotelBookingConfirmation(hotel);
    results.push({
      hotelId: hotel._id,
      email: hotel.email,
      ...result
    });
  }
  
  return results;
};


// Send booking confirmation email
export const sendHotelBookingConfirmation = async (hotelData) => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: {
        name: 'TravelCo',
        address: 'choudharydeepanshu160@gmail.com'
      },
      to: hotelData.email,
      subject: `Hotel Booking Confirmation - TravelCo | ${hotelData.first_name} ${hotelData.last_name}`,
      // Use the hotel data to generate a more detailed email template
      html: generateHotelBookingEmailTemplate(hotelData),
      text: `
        Dear ${hotelData.title} ${hotelData.first_name} ${hotelData.last_name},

        Your booking has been confirmed!
        
        Booking Details:
        - Booking ID: ${hotelData._id}
        - Check-in Date: ${new Date(hotelData.check_in_date).toLocaleDateString()}
        - Check-out Date: ${new Date(hotelData.check_out_date).toLocaleDateString()}
        - Contact: ${hotelData.country_code} ${hotelData.phone}

        Thank you for choosing TravelCo!
        
        For support, contact us at support@travelco.com or +91-1234567890
        
        TravelCo Team
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return {
      success: true,
      messageId: info.messageId,
      message: 'Booking confirmation email sent successfully'
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error.message,
      message: 'Failed to send booking confirmation email'
    };
  }
};

// Generate booking confirmation email template
const generateHotelBookingEmailTemplate = (hotelData) => {
  const {
    first_name,
    last_name,
    check_in_date,
    check_out_date,
    email,
    phone,
    country_code,
    purpose,
    title,
    nationality,
    _id
  } = hotelData;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmation - TravelCo</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
          border-bottom: 3px solid #3b82f6;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 28px;
          font-weight: bold;
          color: #3b82f6;
          margin-bottom: 10px;
        }
        .booking-details {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
        }
        .detail-row:last-child {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          color: #4a5568;
        }
        .value {
          color: #2d3748;
        }
        .footer {
          text-align: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          color: #718096;
          font-size: 14px;
        }
        .contact-info {
          background: #edf2f7;
          padding: 15px;
          border-radius: 6px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">TravelCo</div>
          <h1 style="color: #2d3748; margin: 0;">Booking Confirmation</h1>
          <p style="margin: 10px 0 0 0; color: #718096;">Thank you for choosing TravelCo!</p>
        </div>

        <p>Dear ${title} ${first_name} ${last_name},</p>
        
        <p>We are pleased to confirm your travel booking. Below are the details of your reservation:</p>

        <div class="booking-details">
          <h3 style="margin-top: 0; color: #3b82f6;">Booking Details</h3>
          <div class="detail-row">
            <span class="label">Booking ID:</span>
            <span class="value">${_id}</span>
          </div>
          <div class="detail-row">
            <span class="label">Passenger Name:</span>
            <span class="value">${title} ${first_name} ${last_name}</span>
          </div>
          <div class="detail-row">
            <span class="label">From:</span>
            <span class="value">${check_in_date}</span>
          </div>
          <div class="detail-row">
            <span class="label">To:</span>
            <span class="value">${check_out_date}</span>
          </div>
          <div class="detail-row">
            <span class="label">Travel Date:</span>
            <span class="value">${new Date(check_in_date).toLocaleDateString('en-IN', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
          <div class="detail-row">
            <span class="label">Purpose of Travel:</span>
            <span class="value">${purpose}</span>
          </div>
          <div class="detail-row">
            <span class="label">Nationality:</span>
            <span class="value">${nationality}</span>
          </div>
          <div class="detail-row">
            <span class="label">Contact:</span>
            <span class="value">${country_code} ${phone}</span>
          </div>
          <div class="detail-row">
            <span class="label">Email:</span>
            <span class="value">${email}</span>
          </div>
        </div>

        <div class="contact-info">
          <h4 style="margin-top: 0; color: #3b82f6;">Need Help?</h4>
          <p style="margin: 5px 0;">📧 Email: support@travelco.com</p>
          <p style="margin: 5px 0;">📞 Phone: +91-1234567890</p>
          <p style="margin: 5px 0;">🕒 Available: Monday to Friday, 9 AM - 6 PM IST</p>
        </div>

        <p><strong>Important:</strong> Please keep this booking confirmation email for your records. You may need to present it during your travel.</p>

        <div class="footer">
          <p>This is an automated email. Please do not reply to this email address.</p>
          <p>&copy; 2024 TravelCo. All rights reserved.</p>
          <p>Visit us at: <a href="#" style="color: #3b82f6;">www.travelco.com</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
};