import React from 'react';
import "./App.css";
import Navbar from './components/navbar/Navbar';
import HotelDeals from './components/HotelDeals/HotelDeal';
import SucasaStandard from './components/SucasaStandards/SucasaStandard';
import SuggestedRoom from './components/SugestedRooms/SuggestedRoom';
import DiscoverHistory from './components/DiscoverHistory/History';
import LuxuryHotels from './components/LuxuryHotel/LuxuryHotels';
import PopularsHotel from './components/PopularHotels/PopularsHotel';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>

      <Navbar/>
      <HotelDeals/>
      <SucasaStandard/>
      <SuggestedRoom />
      <DiscoverHistory/>
      <LuxuryHotels/>
      <PopularsHotel/>
      <Footer/>
    </div>
  )
}

export default App;

