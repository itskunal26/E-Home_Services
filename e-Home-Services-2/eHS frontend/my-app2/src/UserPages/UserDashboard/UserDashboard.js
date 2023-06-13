import '../UserDashboard/UserDashboard.css';

import h3 from '../../Images/h3.png'
import wave1 from '../../Images/wave1.png'
import swing from '../../Images/swing.png'
import motorcycle from '../../Images/motorcycle.png'
import household from '../../Images/household.png'
import paintroller from '../../Images/paint-roller.png'
import plumber from '../../Images/plumber.png'
import PestControl from '../../Images/Pest Control.png'
import HowWeAreDifferent from '../../Images/How-We-Are-Different.jpg'
import user1 from '../../Images/user1.jpg'
import user2 from '../../Images/user2.jpg'
import facebookicon from '../../Images/facebook-icon.png'
import instagramicon from '../../Images/instagram-icon.png'
import twittericon from '../../Images/twitter-icon.png'
import whatsappicon from '../../Images/whatsapp-icon.png'
import linkedinicon from '../../Images/linkedin-icon.png'
import snapchaticon from '../../Images/snapchat-icon.png'
import wave2 from '../../Images/wave2.png'
import logo5 from '../../Images/logo5.png'
import Navbar from '../Navbar/Navbar';





const UserDashboard = () => {
  return (
    <div>
      {/* <!--banner section --> */}
      <Navbar/>
      <section id="banner">
        <div className="text-center container">
          <div className="text-center row">
            <div className="col-md-6">
              <p className="promo-title">Best Home services</p>
              <p className="slogn">We Provide Many Types Of Services at Your Door Step </p>
              <p className="slogn">Our Professionals Follow All COVID-19 Norms</p>
              <pre className="slogn">"Your Health is Our Wealth...!!!"</pre>

              {/* <!-- <a href="#"><img src="./images/play.png" alt="play" className="play" />play</a>--> */}
            </div>
            <div className="col-md-6">
              <img src={h3} alt="home" className="home" />
            </div>
          </div>
        </div>
        <img src={wave1} alt="wave1" className="wave1" />
      </section>

      {/* <!--Services--> */}

      <section id="services">
        <div className="text-center container">
          <h1 className="title">What we Do? </h1>
          <div className=" text-center row ">
            <div className="col-md-4 services">
              <img src={swing} alt="Ac" className="service-img" />
              <h4>Ac reparing</h4>
              <p>We provide all types of ac repaires and services</p>
            </div>
            <div className="col-md-4 services">
              <img src={motorcycle} alt="Ac" className="service-img" />
              <h4>Bike Services</h4>
              <p>We provide all types of Bike services</p>
            </div>
            <div className="col-md-4 services">
              <img src={household} alt="Ac" className="service-img" />
              <h4>Cleaning</h4>
              <p>We provide all types of cleaning services</p>
            </div>
          </div>
          <div className=" text-center row ">
            <div className="col-md-4 services">
              <img
                src={paintroller}
                alt="Ac"
                className="service-img"
              />
              <h4>Painters</h4>
              <p>We provide all types of painting patterns</p>
            </div>
            <div className="col-md-4 services">
              <img src={plumber} alt="Ac" className="service-img" />
              <h4>Plumber</h4>
              <p>We provide all types of Bike services</p>
            </div>
            <div className="col-md-4 services">
              <img
                src={PestControl}
                alt="Ac"
                className="service-img"
              />
              <h4>Pest Control</h4>
              <p>We provide all types of cleaning services</p>
            </div>
          </div>

          {/* <!--<button type="button" className="btn btn-primary">All Services</button>--> */}
        </div>
      </section>

      {/* <!--About us --> */}

      <section id="About">
        <div className="container">
          <br />
          <h1 className="text-center title">Why Choose us ?</h1>
          <div className="row">
            <div className="col-md-6 About">
              <p className="about-title">Why we are different </p>
              <ul>
                <li>Customer is our 1st priority</li>
                <li>Belive in doing business with honesty</li>
                <li>We deliver on time</li>
                <li>We have professionals for every work</li>
                <li>Understand our client's need first</li>
                <li>We follow all covid noms</li>
              </ul>
            </div>
            <div className="col-md-6 ">
              <img
                src={HowWeAreDifferent}
                alt="why us"
                className="img-fluid"
              />

              {/* <!--img-fluid make img responsive--> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!--Happy Customers--> */}

      <section id="happy">
        <br />
        <br />
        <br />
        <div className="container">
          <h1 className="text-center title">What customer say</h1>
          <div className="row offset-2">
            <div className="col-md-5 happy">
              <p> Great service ,happy to use it again and again</p>
              <img src={user1} alt="user1" />
              <p className="user">
                <b>Women</b>
                <br />
                Co-founder at XYZ
              </p>
            </div>
            <div className="col-md-5 happy">
              <p> Great service ,happy to use it again and again</p>
              <img src={user2} alt="user2" />
              <p className="user">
                <b>Men</b>
                <br />
                Founder at PQR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- social media --> */}

      <section id="social">
        <div className="text-center container ">
          <p>find us on </p>
        </div>
        <div className="text-center social">
          <a href="#">
            <img src={facebookicon} alt="" />
          </a>
          <a href="#">
            <img src={instagramicon} alt="" />
          </a>
          <a href="#">
            <img src={twittericon} alt="" />
          </a>
          <a href="#">
            <img src={whatsappicon} alt="" />
          </a>
          <a href="#">
            <img src={linkedinicon} alt="" />
          </a>
          <a href="#">
            <img src={snapchaticon} alt="" />
          </a>
        </div>
      </section>

      {/* <!--footer section --> */}

      <section id="footer">
        <img src={wave2} alt="wave2" className="img-fluid" />

        <div className="container">
          <div className="row">
            <div className="col-md-4" className="footer-box">
              <span id="lowerlogo">
                <img src={logo5} alt="logo" className="image" />
              </span>
            </div>
            <div className="col-md-4" className="footer-box">
              <p>
                <b>CONTACT US</b>{" "}
              </p>
              <p>
                {" "}
                <i className="fa fa-map-marker"></i> CDAC Knowledge Park Bengaluru,
                Karnataka 560038{" "}
              </p>
              <p>
                {" "}
                <i className="fa fa-phone"></i> +91 0123456789
              </p>
              <p>
                {" "}
                <i className="fa fa-envelope-o"></i> xyzpqr @ bugBusters.com
              </p>
            </div>
            <div className="col-md-4" className="footer-box">
              <p>
                <b>SUBSCRIBE FOR LATEST UPDATES</b>{" "}
              </p>
              <input type="email" className="subs" placeholder="Email" />
              <button type="button" className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
          <hr />
          <p className="copyright">
            &copy copyright website created by Bug Busters
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
