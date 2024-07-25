import React from "react";
import event1 from '/src/assets/event1.png' 
import event2 from '/src/assets/event2.png' 
import event3 from '/src/assets/event3.png' 
const Cards = () => {
  return (
    <div>
      <div className="event-banner">
        <div className="event-banner-left">
          <div className="event-card">
            <div className="content">
              <h3>
                GET UP TO <span>60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <img src={event1} alt="Event 1" />
          </div>

          <div className="event-card">
            <h3>GET 30% Off</h3>
            <p>USE PROMO CODE</p>
            <button>DINEWEEKENDSALE</button>
          </div>
        </div>

        <div className="event-banner-right">
          <div className="event-banner-right-1">
            <div className="details">
              <p>Flex Sweatshirt</p>
              <div className="price">
                <span>$100.00</span>
                <span>$75.00</span>
              </div>
            </div>
            <img src={event2} alt="Event 2" />
          </div>

          <div className="event-banner-right-2">
            <div className="details">
              <p>Flex Push Button Bomber</p>
              <div className="price">
                <span>$225.00</span>
                <span>$190.00</span>
              </div>
            </div>
            <img src={event3} alt="Event 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
