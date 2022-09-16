import React from 'react';
import './SucasaStandard.css';
import { standard1, standard2, standard3 } from '../../assets/index';

const SucasaStandard = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="sucasaStandards">
        <h1 className="SucasaStandard">The Sucasa Standard</h1>
        
          <div className="PicsContainer">
            <div className="item PicsItem"> 
              <img src={standard1} alt="" />
              <h2>Work From Anywhere</h2>
              <p>Optimal flexiblity to work remotely</p>
            </div>
            <div className="item PicsItem"> 
              <img src={standard2} alt="" />
              <h2>Work From Anywhere</h2>
              <p>Optimal flexiblity to work remotely</p>
            </div>
            <div className="item PicsItem"> 
              <img src={standard3} alt="" />
              <h2>Work From Anywhere</h2>
              <p>Optimal flexiblity to work remotely</p>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default SucasaStandard;
