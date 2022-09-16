import React from 'react';
import './LuxuryHotel.css';
import { luxuryhotel } from '../../assets/index';

const LuxuryHotels = () => {
  return (
    <div>
      
      {/* <!-- Luxury Hotel --> */}

     <section className ="LuxuryHotelSection">
      {/* <!-- LuxuryHotelContainer --> */}
      <div className ="container">
        <div className ="row">

          {/* <!-- LuxuryHotelImgDiv --> */}
          <div className ="col-lg-6 col-md-12">
            <img className ="LuxuryHotelImg" src={luxuryhotel} alt="" />
          </div>
          <div className ="col-lg-6 col-md-12">
            <div className ="LuxuryHotelDescription">
              <div className ="Description" >
                <h1 className ="LuxuryHotel-h1">Finest Luxury Hotels & Resort</h1>
                <p className ="LuxuryHotel-p">Lorem Ipsum is simply dummy text of the printing
                   and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                   text ever since the 1500s, </p>
              </div>
              <div className ="LuxuryHotel-flex-box">
                <div className ="item">
                  <h4>120K+</h4>
                  <p>Website User</p>
                </div>
                <div className ="item">
                  <h4>110K+</h4>
                  <p>Happy Clients</p>
                </div>
                <div className ="item">
                  <h4>20K+</h4>
                  <p>Active Hotels</p>
                </div>
                <div className ="item">
                  <h4>8Y+</h4>
                  <p>Company Year</p>
                </div>
              </div>
              <div className ="ExploreMore">
                <button>Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default LuxuryHotels;
