import React from 'react';
import './SuggestedRoom.css'
import { SuggestedRooms, SuggestedRooms2, SuggestedRooms3,SuggestedRooms4  } from '../../assets/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";



const SuggestedRoom = () => {

    // var swiper = new Swiper(".mySwiper", {
    //     // slidesPerView: 3,
    //     // spaceBetween: 30,
    //     breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //           slidesPerView: 1,
    //           spaceBetween: 0
    //         },
    //         // when window width is >= 480px
    //         786: {
    //           slidesPerView: 2,
    //           spaceBetween: 30
    //         },
    //         // when window width is >= 640px
    //         991: {
    //           slidesPerView: 3,
    //           spaceBetween: 30
    //         }
    //       },
    //     navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    //   });




  return (
           
    <section className="carousal">
      {/* <!-- carousalContainer --> */}

      <div className="container">
        <h1 className="HeadingSuggestedRooms" >Suggested Rooms</h1>
           <div className="row">
              {/* <!-- <div className="SuggestedRoomsRow"> --> */}
                <div className="col-lg-10">
                  <p className="SuggestedRoomsPara">There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration.</p>
                  </div>
                <div className="col-lg-2">
                  <div className="SuggestedRoomsbutton">
                    <div className="swiper-button-next next"></div>
                    <div className="swiper-button-prev previouse"></div>
                  </div>
               {/* <!-- </div> --> */}
             </div>
           </div>
         

        {/* <!-- Swiper --> */}


      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation = {{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // navigation={true} 
        modules={[Navigation]}
        breakpoints= {{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              // when window width is >= 480px
              786: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              991: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }}

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
      
      </Swiper>

        {/* <Swiper/> */}

{/*         
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="card" style={{ backgroundImage: `url(${SuggestedRooms})` }} >
                <div className="text">
                  <h4>Luxery Room</h4>
                  <p>United States</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card" style={{ backgroundImage: `url(${SuggestedRooms2})` }} >
                <div className="text">
                  <h4>Luxery Room</h4>
                  <p>United States</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card" style={{ backgroundImage: `url(${SuggestedRooms3})` }}  >
                <div className="text">
                  <h4>Luxery Room</h4>
                  <p>United States</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card" style={{ backgroundImage: `url(${SuggestedRooms4})` }}  >
                <div className="text">
                  <h4>Luxery Room</h4>
                  <p>United States</p>
                </div>
              </div>
            </div>

            </div>
         

            
            <!-- <div className="swiper-pagination"></div> -->
          </div> */}

      </div>
   </section>

  )
}

export default SuggestedRoom
