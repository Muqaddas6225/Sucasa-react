import React from 'react';
import './PopularsHotel.css';
import { Popularhotel, location } from '../../assets/index';

const PopularsHotel = () => {
  return (

    <section className="popuarHotelSection">
    {/* <!-- PopularHotelContainer --> */}
    <div className="container">
      {/* <!-- PopularHotel --> */}
      <div className="PopularHotel">
          <h1 className="headingPopularHotel">Our most popular Hotels</h1>
          <button className="PopularHotelButton">View All</button>
      </div>
      {/* <!-- <div className="row"> --> */}
        <div className="PopularCardRow">
          <div className="card PopularCard card1">
            <img className="card-img-top card-img" src={Popularhotel} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Hotel Regenids park</h5>
              <p className="card-text">
                <span>
                  <img src={location} alt=""/>   
              </span>
              Ujung Genteng, Sukabumi
              </p>
              <div className="Stars">
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star "></i>
                
                <span>4.8</span>
              </div>

              {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> -->  */}

              <button className="PopularCardButton">$230/day</button>
            </div>
        </div>
        <div className="card PopularCard card2">
            <img className="card-img-top card-img" src={Popularhotel} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Hotel Regenids park</h5>
              <p className="card-text">
                <span>
                  <img src={location} alt="" />           
              </span>
              Ujung Genteng, Sukabumi
              </p>
              <div className="Stars">
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star "></i>
                <span>4.8</span>
              </div> 
              {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
              <button className="PopularCardButton">$230/day</button>
            </div>
        </div>
        <div className="card PopularCard card3">
            <img className="card-img-top card-img" src={Popularhotel} alt="Card cap"/>
            <div className="card-body">
              <h5 className="card-title">Hotel Regenids park</h5>
              <p className="card-text">
                <span>
                  <img src={location} alt=""/>            
              </span>
              Ujung Genteng, Sukabumi
              </p>
              <div className="Stars">
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star active"></i>
                <i className="fa-solid fa-star "></i>
                <span>4.8</span>
              </div>

              {/* <!-- <a href="#" className="btn btn-primary">Go somewhere</a> --> */}
        
              <button className="PopularCardButton">$230/day</button>
            </div>
        </div>
      </div>
    {/* <!-- </div> --> */}
    </div>
  </section>
  )
}

export default PopularsHotel
