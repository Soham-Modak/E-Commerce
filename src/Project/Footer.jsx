import React from "react";
import { BsBox2Heart } from "react-icons/bs";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FcAssistant } from "react-icons/fc";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import Terms from "./Terms";
import { NavLink } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook} from "react-icons/ai";




const Footer = () => {
    return (
        <footer className="footer">
            <div className="about">
                <div>
                    <div className="head"> India's Best Gift Portal. Gifts & Flowers Online</div>
                    <div className="body">
                        BLOOMING BUD is India's top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones.
                        You can find thoughtful gifts for all special days like Birthdays, Anniversaries, Valentine's day and festivals like Rakshabandhan , Diwali and Christmas etc.
                        Our range of gifts includes flower bouquets and yummy cakes which can be delivered to all major cities in under 2 hours.
                        We can also deliver personalised gifts, potted plants, chocolates, gift hampers, digital gifts etc.
                    </div>

                    <div className="box"></div>
                </div>

                <div className="icons">
                    <div className="icon1">
                        <div id="one"> <BsBox2Heart /> </div>
                        <h6 >Supar Fast Delivery</h6>
                        <p id="sub1">We deliver gifts super fast</p>
                    </div>

                    <div className="icon2">
                        <div id="two"> <BsFillShieldLockFill /> </div>
                        <h6 id="h">100% Safe & Secure Payments</h6>
                        <p id="sub2">Pay using secure payment methods</p>
                    </div>

                    <div className="icon3">
                    <NavLink className="nav-link " to='contact' id=""><div id="three"> <FcAssistant /> </div></NavLink>
                        <h6>Dedicated Help Center</h6>
                        <p id="sub3">Call us +91 7439591552 | 8:00AM-10:30PM</p>
                    </div>
                </div>


                <div className="box1"></div>

                <div className="f1">
                    <div className="policy">
                        <h6 id="drop">Policy Info</h6>
                        <ul id="list">
                            <li><NavLink to="/terms" id="policy1">Terms & Conditions </NavLink> </li>
                            <li><NavLink to="/privacy" id="policy1">Privacy Policy </NavLink></li>
                            <li><NavLink to="/disclaimer" id="policy1">Disclaimer </NavLink></li>
                        </ul>
                    </div>

                    <div className="company">
                        <h6 id="drop">About Company</h6>
                        <ul id="list">
                            <li>About Us</li>
                            <li>BB Team</li>
                            <li>Testimonials</li>

                        </ul>
                    </div>

                    <div className="business">
                        <h6 id="drop">BB business</h6>
                        <ul id="list">
                            <li>Decoration Services</li>
                            <li>Corporate Service</li>
                            <li>Affiliate Program</li>
                        </ul>
                    </div>
                    <div className="style_subscribe">
                        <h6 className="style_subscribe2">SUBSCRIBE</h6>
                        <form>
                        <BsFillEnvelopeAtFill id="sublogo"/>
                            <input type="email" id="sub" value="" placeholder="Email"/>
                            <button className="subscribeBtn1" type="submit">SUBMIT</button>
                        </form>
                        <p className="subscribeSuccesfull">Get updates on promotions and offers coupons.</p>
                    </div>
                </div>

                <div className="box2">
                <span id="span">© 2023 blooming bud.com.All rights reserved.</span>
                <span id="span2">Get In Touch</span>
                <AiFillTwitterCircle id="foot1"/>
                <AiFillGoogleCircle id="foot2"/>
                <AiFillInstagram id="foot3"/>
                <AiFillFacebook id="foot4"/>
                </div>

            </div>



        </footer>
    )

}

export default Footer;