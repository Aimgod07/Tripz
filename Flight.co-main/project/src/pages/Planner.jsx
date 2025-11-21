import { ImAirplane, ImGlass2, ImOffice, ImEarth } from "react-icons/im";
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

      // get plain text that may contain the JSON
      const raw = typeof data === "string" ? data : data.aiPlan || "";
      const cleaned = (raw || "")
        .replace(/```/g, "") // remove code fences
        .replace(/^\s*json\s*/i, "") // remove leading "json"
        .trim();

      // helper to extract the JSON object/array block
      const extractJsonBlock = (s) => {
        // try code block capture first
        const codeMatch = s.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
        if (codeMatch && codeMatch[1]) return codeMatch[1].trim();

        // otherwise locate first { or [ and last matching } or ]
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
          console.warn("JSON.parse failed, trying relaxed fixes:", err);
          // fallback: replace single quotes with double quotes (risky) and try again
          const relaxed = jsonBlock
            .replace(/(['”’])/g, '"')
            .replace(/,\s*([}\]])/g, "$1");
          try {
            parsedData = JSON.parse(relaxed);
          } catch (err2) {
            console.error("Second parse attempt failed:", err2);
            parsedData = {};
          }
        }
      } else {
        console.warn("No JSON block found in AI response.");
      }

      setAiResult(parsedData);
      console.log("Parsed Data:", parsedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  // ...existing code...

  const { hotels = [], restaurants = [], flights = [] } = aiResult || {};

  return (
    <div className="full-page">
      {aiResult ? (
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Trip Destination Details</h1>

          <section>
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
          </section>

          <section>
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

          <section>
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
        </div>
      ) : (
        <div className="planner">
          <img src="/pilotboy.png" className="image1"/>
          <img src="/fakeplane.png" className="image2"/>
          <img src="/pushing.png" className="image3"/>
          <div className="icons-container">
            <button className="item2">
              <ImAirplane size={40} />
            </button>

            <button className="item2">
              <ImGlass2 size={40} />
            </button>

            <button className="item2">
              <ImOffice size={40} />
            </button>

            <button className="item2">
              <ImEarth size={40} />
            </button>
          </div>

          <div className="planner-container">
            <form onSubmit={handleSubmit}>
              <div className="input-section">
                <div className="tags">
                  <label>
                    <p style={{ fontWeight: "bolder", fontSize: "24px" }}>
                      Destination:
                    </p>
                  </label>
                  <label>
                    <p style={{ fontWeight: "bolder", fontSize: "24px" }}>
                      Travel Dates:
                    </p>
                  </label>
                  <label>
                    <p style={{ fontWeight: "bolder", fontSize: "24px" }}>
                      {" "}
                      Budget:
                    </p>
                  </label>
                </div>
                <div className="blanks">
                  <input
                    type="text"
                    name="destination"
                    className="blanks"
                    required
                    size={50}
                    height={20}
                    onChange={handleChange}
                  />
                  <br />

                  <input
                    type="text"
                    name="travelDate"
                    className="blanks"
                    required
                    size={50}
                    height={20}
                    onChange={handleChange}
                  />
                  <br />

                  <input
                    type="number"
                    name="budget"
                    className="blanks"
                    required
                    size={50}
                    height={20}
                    onChange={handleChange}
                  />
                  <br />
                </div>
              </div>

              <button type="submit" className="planbutton">
                Create Plan
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planner;
