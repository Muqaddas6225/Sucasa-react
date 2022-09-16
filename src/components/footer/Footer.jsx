import React from 'react';
import './footer.css';
import {Vector, facebook, Instagram, twitter, LinkedIn} from '../../assets/index';

const Footer = () => {
  return (
      
    <section className ="FooterSection">

        <div className ="container FooterContainer">
        
            <div className ="row FooterRow">
                <div className ="col-lg-4 col-md-12 col-sm-12 col-xs-12 aboutFooter">
                <img src={Vector} className ="footerLogo" alt="Logo" srcset="" />
                <p >
                    Nor again is there anyone who loves or pursues or desires to obtain pain
                    of itself.Nor again is there anyone who loves or pursues or desires to 
                    obtain pain of itself.</p>
                <input type="email" name="" className ="InputEmail" id="EmaiInput" placeholder="Enter your email" />
                </div>
                <div className ="col-lg-3 col-md-6 col-sm-12 col-xs-12 homeFooter">
                <h5 className ="title">Home</h5>
                <ul className ="homeList">
                    <li className ="ListContent">Home</li>
                    <li className ="ListContent">Features</li>
                    <li className ="ListContent">FAQs</li>
                    <li className ="ListContent">
                    Reviews</li>
                    <li className ="ListContent">
                        Stories</li>
                </ul>

                </div>
                <div className ="col-lg-2 col-md-6 col-sm-12 col-xs-12 helpfooter">
                <h5 className ="title">Help</h5>
                <ul className ="helpList">
                    <li className ="helpListContent">Help Centre</li>
                    <li className ="helpListContent" >Privacy Policy</li>
                </ul>
                </div>
                <div className ="col-lg-3 col-md-6 col-sm-12 col-xs-12 contactFooter">
                <h5 className ="title">Contact Us</h5>
                <ul className ="contactFooterList">
                    <li className ="contactListcontent">+01 234 5684 6545</li>
                    <li className ="contactListcontent">sucasa@gmail.com</li>
                </ul>
                <div className ="SocialMedia">
                    <img className ="instagram socialIcon" src= {Instagram} alt="instagram" />
                    <img className ="linkedin socialIcon" src= {LinkedIn} alt="linkedin" />
                    <img className ="twitter socialIcon" src= {twitter} alt="twitter" />
                    <img className ="facebook socialIcon" src= {facebook} alt="facebook" />
                </div>

                </div>
            </div>
            <div className ="HorizontalRow"></div>
            <div className ="copyright"><span>© Copyright 2022 All rights reserved.</span></div> 
        </div>
    </section>
  )
}

export default Footer
