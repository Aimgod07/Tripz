import { ImAirplane, ImGlass2, ImOffice, ImEarth } from "react-icons/im";
import { AiFillBackward } from "react-icons/ai";
import "../css/planner.css";
import { useState } from "react";

const Planner = () => {
  const [formData, setFormData] = useState({
    destination: "",
    travelDate: "",
    budget: "",
  });
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status ,setStatus]=useState('hotels');


  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    margin: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)", // 3D shadow effect
    transition: "transform 0.3s ease",
    width: "300px",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: "translateY(-5px)",
  };

  const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "20px 0",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const res = await fetch("http://localhost:5000/api/plan-trip", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!res.ok) {
  //       throw new Error(`HTTP error! status: ${res.status}`);
  //     }

  //     const data = await res.json();
  //     console.log("Raw API Data:", data);
  //     setAiResult(data);
  //     // If the AI returns a string, parse it safely
  //     let parsedData;
  //     try {
  //       // Remove potential "json" or "```json" wrappers before parsing
  //       const cleaned = data.aiPlan
  //         .replace(/^```json\s*/i, "")
  //         .replace(/```$/, "")
  //         .replace(/^json\s*/i, "");

  //       parsedData = JSON.parse(cleaned);
  //     } catch (err) {
  //       console.error("Error parsing AI response:", err);
  //       parsedData = {};
  //     }

  //     setAiResult(parsedData);
  //     console.log("Parsed Data:", parsedData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     console.log(error.message);
  //     // setAiResult({ hotels: [], restaurants: [], flights: [] }); // Set to empty arrays on error
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // ...existing code...
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch("http://localhost:5000/api/plan-trip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    console.log("Raw API Data:", data);

    const raw = typeof data === "string" ? data : data.aiPlan || "";
    const cleaned = (raw || "")
      .replace(/```/g, "")
      .replace(/^\s*json\s*/i, "")
      .trim();

    const extractJsonBlock = (s) => {
      const codeMatch = s.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
      if (codeMatch && codeMatch[1]) return codeMatch[1].trim();

      const startObj = s.indexOf("{");
      const startArr = s.indexOf("[");
      const start =
        startObj === -1
          ? startArr
          : startArr === -1
          ? startObj
          : Math.min(startObj, startArr);
      if (start === -1) return null;

      const endObj = s.lastIndexOf("}");
      const endArr = s.lastIndexOf("]");
      const end = Math.max(endObj, endArr);
      if (end === -1 || end <= start) return null;

      return s.slice(start, end + 1).trim();
    };

    const jsonBlock = extractJsonBlock(cleaned);
    let parsedData = {};

    if (jsonBlock) {
      try {
        parsedData = JSON.parse(jsonBlock);
      } catch (err) {
        console.warn("JSON.parse failed:", err);

        // Attempt a limited, safer normalization for common issues:
        const relaxed = jsonBlock
          .replace(/[\u2018\u2019\u201C\u201D]/g, '"') // smart quotes -> "
          .replace(/,\s*([}\]])/g, "$1") // remove trailing commas
          .replace(/([,{]\s*)([A-Za-z0-9_@-]+)\s*:/g, '$1"$2":'); // quote unquoted keys

        try {
          parsedData = JSON.parse(relaxed);
        } catch (err2) {
          console.warn("Relaxed parse failed:", err2);
          // Final fallback: keep the raw json block so UI/debugging can inspect it
          parsedData = { __raw: jsonBlock, __cleaned: cleaned };
        }
      }
    } else {
      // No JSON block detected — keep entire cleaned response
      parsedData = { __raw: cleaned };
    }

    setAiResult(parsedData);
    console.log("Parsed Data (or raw fallback):", parsedData);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setLoading(false);
  }
};
  // ...existing code...

  const {
    hotels = [],
    restaurants = [],
    flights = [],
    weathers = [],
    places = [],
  } = aiResult || {};

  return (
    <div className="full-page">
      {aiResult ? (
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "1700px",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "monospace",
              fontSize: "30px",
              fontWeight:"bold"
              
            }}
          >
            Trip Destination Details
          </h1>
          <div className="icons-container" style={{ position:"relative",alignContent:"center",marginLeft:'20%',  marginTop:"1vw",marginBottom:"1vw",blockSize:"fit-content",padding:"10px"}}>
            <button className="item2">
              <ImAirplane size={40} onClick={()=>{
                setStatus('flight')
              }}/>
            </button>

            <button className="item2">
              <ImGlass2 size={40}onClick={()=>{
                setStatus('restaurant')
              }}/>
            </button>

            <button className="item2">
              <ImOffice size={40} onClick={()=>{
                setStatus('hotels')
              }}/>
            </button>

            <button className="item2">
              <ImEarth size={40} onClick={()=>{
                setStatus('others')
              }}/>
            </button>
        
          </div>

          {status==='hotels'?
          <section className="hotel" style={{height:"1000px"}} >
            <h2>Hotels</h2>
            <div style={sectionStyle}>
              {hotels.map((hotel, index) => (
                <div
                  key={index}
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = cardHoverStyle.transform)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                >
                  <h3>{hotel.name}</h3>
                  <p>Rating: {hotel.rating}</p>
                  <p>Price: {hotel.price}</p>
                </div>
              ))}
            </div>
          </section>:
            status==='restaurant'?
            <section style={{height:"1000px"}}
          className="restaurant">
            <h2>Restaurants</h2>
            <div style={sectionStyle}>
              {restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = cardHoverStyle.transform)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                >
                  <h3>{restaurant.name}</h3>
                  <p>Type: {restaurant.type}</p>
                  <p>Rating: {restaurant.rating}</p>
                </div>
              ))}
            </div>
          </section>
          :status==='others'?
          <div> 
             <section style={{height:"1000px"}}className="weather">
            <h2>Weather</h2>
            <div style={sectionStyle}>
              {weathers.map((weather, index) => (
                <div
                  key={index}
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = cardHoverStyle.transform)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                >
                  <h3>Condition: {weather.condition}</h3>

                  <h3>Temp_in_day: {weather.temperature.day}</h3>
                  <h3>Temp_in_night: {weather.temperature.night}</h3>
                  <h3>Humidity: {weather.humidity}</h3>
                  <h3>Additional_details: {weather.notes}</h3>
                </div>
              ))}
            </div>
          </section>
          <section style={{height:"1000px"}}className="places">
            <h2>Must Visit Places</h2>
            <div style={sectionStyle}>
              {places.map((place, index) => (
                <div
                  key={index}
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = cardHoverStyle.transform)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                >
                  <h3>{place.name}</h3>
                  <p>Description: {place.description}</p>
                  <p>Price: {place.cost}</p>
                </div>
              ))}
            </div>
          </section>

         
          </div>
          : status==='flight'?
                <section style={{height:"1000px"}}className="flight">
            <h2>Flights</h2>
            <div style={sectionStyle}>
              {flights.map((flight, index) => (
                <div
                  key={index}
                  style={cardStyle}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = cardHoverStyle.transform)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "none")
                  }
                >
                  <h3>{flight.airline}</h3>
                  <p>Departure: {flight.from}</p>
                  <p>Price: {flight.price}</p>
                </div>
              ))}
            </div>
          </section>
            : null
          } 

          

          
        </div>
      ) : (
        <div className="planner">
  
       
          <div className="input-container" >
             <div className="text" style={{
              fontFamily:"sans-serif",fontSize:"60px"
              ,color:"white",fontWeight:"600",marginBottom:"20px"
             }}>
          Enjoy Travelling with <p style={{fontSize:"80px",fontWeight:"900",color:"rgb(242, 130, 96)",border:"2px solid rgb(242, 130, 96)",outline:"2px solid rgb(242, 130, 96)",outlineColor:"black",margin:"20px 0"}}>Tripzy</p>Plan your trip in an easy way.
          </div>
            <form onSubmit={handleSubmit} className="planner-form">
              <input
                type="text"
                name="destination"
                placeholder="Enter destination"
                value={formData.destination}
                onChange={handleChange}
                required
                style={{
                  maxWidth:"20vw",
                  minWidth:"15vw"
                }}
              />
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
                style={{
                  color:"black",
                  maxWidth:"14vw",
                  minWidth:"15vw"
                }}
      
              />
              <input
                type="number"
                name="budget"
                placeholder="Enter budget"
                value={formData.budget}
                onChange={handleChange}
                required
                style={{
                  maxWidth:"20vw",
                  minWidth:"15vw",
                  height:""
                }}
              />
              <button type="submit" className="submit-button"
              style={{
                color:"black"
              }}>
                Plan 
              </button>
            </form>
            </div>
            </div>
 
        
      )}
     
    </div>
  );
};

export default Planner;
