import React from 'react';
import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container text-white">
     <div class="row">
       <div className="footer-col">
         <ul>
           <li><a href="/">About ABC Talkies</a></li>
           <li><a href="/">Privacy Policy</a></li>
           <li><a href="/">Copyright Policy</a></li>
           <li><a href="/">Cookies Policy</a></li>
           <li><a href="/">Filmmaker Contract</a></li>
         </ul>
       </div>
       <div className="footer-col">
         <ul>
           <li><a href="/">Big Shorts Challenge</a></li>
           <li><a href="/">Payment Cancellation &amp; Refund Policy</a></li>
           <li><a href="/">User Terms of Use</a></li>
           <li><a href="/">Contact us</a></li>
         </ul>
       </div>
       
       <div className="footer-col">
         <h4>follow us</h4>
         <div className="social-links">
           <a href="/"><FaFacebook size={20} /></a>
           <a href="/"><FaInstagram size={20} /></a>
           <a href="/"><FaTwitter size={20} /></a>
         </div>
       </div>
       <div className="footer-col">
         <h4>App available on</h4>
         <div className="social-links">
           <a href="/"><FaApple size={40} /></a>
           <a href="/"><FaGooglePlay size={40} /></a>
         </div>
       </div>
     </div>
    </div>
    <div className="row">
        <div className="col-md-12 text-center">
          <p>@2023 ABC Talkies. All Rights Reserved.</p>
        </div>
      </div>
 </footer>
  );
};

export default Footer;
