import "../css/style.css"; // your external CSS file


export default function Banner() {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src="../src/images/pic1.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src="../src/images/pic2.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src="../src/images/hotel.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src="../src/images/plane.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src="../src/images/pic3.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src="../src/images/hotel2.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src="../src/images/pic4.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src="../src/images/pic6.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src="../src/images/pic8.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src="../src/images/pic9.jpg" alt="" />
        </div>
      </div>

      <div className="content">
        <h1 data-content="TRIPZY">TRIPZY</h1>

        <div className="author">
          <h2>TRIPZY</h2>
          <p>
            <b>Ai Planner</b>
          </p>
          <p>Plan Everthing At One Place</p>
        </div>

        <div className="model"></div>
      </div>
    </div>
  );
}
