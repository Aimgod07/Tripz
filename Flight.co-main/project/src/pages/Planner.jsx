import React from "react";
import "../css/planner.css";
const Planner = () => {
  return (
    <div className="planner">
      <div class="bg">
        <div class="wrap">
          <div class="newsletter-bg">
            <form action="#">
            <div>
                <label for="name" class="sr-only">
                  Text Input:
                </label>
                
              </div>
                
              
            </form>
          </div>
          <div class="newsletter-text">
            <h2 style={{borderRadius:"20px",backgroundColor:"white",padding:"5px"}}>This is the Place you are looking for.</h2><br></br>
           <a href="/"> <button className="button-plan" ><div style={{fontWeight:'bolder',fontSize:"20px",backgroundColor:"white",borderRadius:"95%",padding:"9px"
            }}>Plan Your Moments</div></button></a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Planner;
