// aiResult.js

const aiResult = {
  hotels: [
    {
      id: 1,
      name: "Grand Palace Hotel",
      location: "New Delhi",
      pricePerNight: 4500,
      rating: 4.5,
      amenities: ["WiFi", "Pool", "Gym"],
      image: "https://via.placeholder.com/300x200?text=Hotel+1",
    },
    {
      id: 2,
      name: "Sea View Resort",
      location: "Goa",
      pricePerNight: 6500,
      rating: 4.7,
      amenities: ["Beach Access", "Spa"],
      image: "https://via.placeholder.com/300x200?text=Hotel+2",
    },
  ],

  restaurants: [
    {
      id: 1,
      name: "Spice Garden",
      cuisine: "Indian",
      location: "Delhi",
      rating: 4.3,
      priceRange: "₹₹",
      image: "https://via.placeholder.com/300x200?text=Restaurant+1",
    },
    {
      id: 2,
      name: "Pasta House",
      cuisine: "Italian",
      location: "Mumbai",
      rating: 4.6,
      priceRange: "₹₹₹",
      image: "https://via.placeholder.com/300x200?text=Restaurant+2",
    },
  ],

  flights: [
    {
      id: 1,
      airline: "IndiGo",
      from: "Delhi",
      to: "Bangalore",
      departure: "10:00 AM",
      arrival: "12:30 PM",
      price: 5200,
    },
    {
      id: 2,
      airline: "Air India",
      from: "Mumbai",
      to: "Goa",
      departure: "3:00 PM",
      arrival: "4:15 PM",
      price: 3500,
    },
  ],

  weathers: [
    {
      city: "Delhi",
      temperature: "32°C",
      condition: "Sunny",
      humidity: "40%",
    },
    {
      city: "Goa",
      temperature: "28°C",
      condition: "Cloudy",
      humidity: "70%",
    },
  ],

  places: [
    {
      id: 1,
      name: "India Gate",
      location: "Delhi",
      description: "War memorial and popular tourist spot.",
      image: "https://via.placeholder.com/300x200?text=Place+1",
    },
    {
      id: 2,
      name: "Baga Beach",
      location: "Goa",
      description: "Famous beach with nightlife and water sports.",
      image: "https://via.placeholder.com/300x200?text=Place+2",
    },
  ],
};

export default aiResult;