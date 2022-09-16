import React from 'react';
import "./HotelDeals.css";
import {DatePicker, LocationYellow, Search} from '../../assets/index.js';


const HotelDeal = () => {
  return (
    <div>
      
      <section className="hotelDealsSection">
        <div className="container">
         <div className="row">
            <div className="col-lg-6 ">
              <div className="hotelImage">
              {/* <!-- <img src="/assests/images/hotel.png" alt="" srcset=""> --> */}

              <div className="bookingDetails">
                <form action="" method="post" className="formBookingDetails" >

                  <div className="item item1">
                    <div className="itemIcon">
                      <span><img src={LocationYellow} alt="" /></span>
                    </div>
                    <div className="itemDescription">
                      <label className="location" for=""> Location</label>
                      <input type="text" name="" id="" placeholder="United States" />
                    </div>
                  </div>
                    
                
  
                  <div className="item item2">
                    <div className="itemIcon">
                      <span><img src={DatePicker} alt="asdf" /></span>
                    </div>
                    <div className="itemDescription">
                       <label className="CheckIn" for="">Check in</label>
                      <input type="date" name="" id="" placeholder="10 Jun 2021" />
                    </div>  
                  </div>
  
                  
  
                  <div className="item item3">
                    <div className="itemIcon">
                      <span><img src={DatePicker} alt="" /></span>
                    </div>
                    <div className="itemDescription">
                      <label className="CheckOut" for="">Check out</label>
                      <input type="date" name="" id="" placeholder="15 Jun 2021" />
                    </div>
                  </div>
  
                  
                  <div className="item item4">
                    <div className="itemIcon">
                      <span><img src={LocationYellow} alt="" /></span>
                    </div>
                    <div className="itemDescription">
                      <label className="Rooms" for="">  Rooms</label>
                      <input type="number" name="" id="" placeholder="1 room, 2 guests" />
                    </div>
                 </div>

                  <div className="itemButton item5">
                    <button type="submit"> <span><img src={Search} alt="" /></span> Search</button>
                  </div>

                </form>
              </div>
              </div>
            </div>
              <div className=" col-lg-6">
                <div className="BestHotelDescription">
                <h1 className="headingHotelDeals" >Find Your Best Hotel for Deals </h1>
                <p className="HotelDealsDescription" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
                </div>
            </div>         
         </div>          
      </div>
   </section>
        
    </div>
  )
}

export default HotelDeal;
