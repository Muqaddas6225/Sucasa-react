import React from 'react';
import './SuggestedRoom.css'
import { SuggestedRooms, SuggestedRooms2, SuggestedRooms3,SuggestedRooms4  } from '../../assets/index';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <SwiperSlide>
        <div className="card" style={{ backgroundImage: `url(${SuggestedRooms})` }} >
            <div className="text">
                <h4>Luxery Room</h4>
                <p>United States</p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
       <div className="card" style={{ backgroundImage: `url(${SuggestedRooms2})` }} >
            <div className="text">
                <h4>Luxery Room</h4>
                <p>United States</p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
       <div className="card" style={{ backgroundImage: `url(${SuggestedRooms3})` }} >
            <div className="text">
                <h4>Luxery Room</h4>
                <p>United States</p>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
       <div className="card" style={{ backgroundImage: `url(${SuggestedRooms4})` }} >
            <div className="text">
                <h4>Luxery Room</h4>
                <p>United States</p>
            </div>
        </div>
    </SwiperSlide>
      ...
    </Swiper>
  );
};