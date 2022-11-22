import React from "react";
import './Footer.css'
const Footer=()=>{
    return  <div class="footer__container">
    <div class="footer__links">
        <div class="footer__link--wrapper">
            <div class="footer__link--items">
                <h2>About Us</h2>
                <a href="/sign-up">Details on workers</a>
                <a href="/">Awards</a>
                <a href="/">Special Menu</a>
                <a href="/">Services</a>
            </div>
            <div class="footer__link--items">
                <h2>Contact Us</h2>
                <a href="/">Contact</a>
                <a href="/">Support</a>
                <a href="/">Registor/Login</a>
               
            </div>
            </div>
            <div class="footer__link--wrapper">
            <div class="footer__link--items">
                <h2>Videos</h2>
                <a href="/">Places</a>
                <a href="/">bangalore</a>
                <a href="/">Hydrabad</a>
                
            </div>
            <div class="footer__link--items">
                <h2>Social Media</h2>
                <a href="/">Instagram</a>
                <a href="/">Facebook</a>
                <a href="/">Youtube</a>
                <a href="/">Twitter</a>
            </div>
        </div>
        </div>
        <section class="social__media">
            <div class="social__media--wrap">
                <div class="footer__logo">
                    <a href="/" id="footer__logo">Login</a>
                </div>
                <p class="website__rights"> &lt;&lt;&lt; &copy;www.royalsretaurent.com &gt;&gt;&gt;</p>
                <div class="social__icons">
                    <a href="/" class="social__icon--link" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="/" class="social__icon--link"><i class="fab fa-instagram"></i></a>
                    <a href="/" class="social__icon--link"><i class="fab fa-youtube"></i></a>
                    <a href="/" class="social__icon--link"><i class="fab fa-linkedin"></i></a>
                    <a href="/" class="social__icon--link"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </section>
    </div>
}
export default Footer