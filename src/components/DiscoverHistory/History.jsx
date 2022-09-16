import React from 'react';
import './DiscoverHistory.css';
import {HistoryImg} from '../../assets/index';

const DiscoverHistory = () => {
  return (
    <div>
      
    {/* <!-- discover History --> */}
    <div className="container historyContainer">
      <h1 className="HeadingDiscoverHistory">
      Discover our History
      </h1>
    </div>

    {/* <!-- DiscoverBackgroundSection --> */}

    <section className="DiscoverBackgroundSection">
      {/* <!-- DiscoverBackgroundContainer --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="DiscoverBackgroundDescription">
              <div className="DiscoverBackground-h1" ><h1>Discover our underground</h1></div>
              <div className="DiscoverBackground-p">
                <p>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s.</p>
              </div>
              <div className="DiscoverBackground-btn">
                <button type="submit">Start Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className = "DiscoverHistoryImg">
              <img src={HistoryImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>




    </div>
  )
}

export default DiscoverHistory
