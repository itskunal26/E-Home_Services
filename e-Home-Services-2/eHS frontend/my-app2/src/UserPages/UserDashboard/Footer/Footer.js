
import "../Footer/Footer.css";
import wave2 from "../../../Images/wave2.png";
import lowerlogo from "../../../Images/1.png";

const Footer = () => {
  return (
    <section id="footer">
      <img src={wave2} alt="wave2" className="wave2" /> 

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-box">
              <sapn id="lowerlogo"><img src={lowerlogo} alt="logo" className="image" /></sapn>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Follow us </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-box">
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
          </div>
           <div className="col-md-4">
           <div className="footer-box">
            <p className="slogn">
              We Provide Many Types Of Services at Your Door Step
            </p>
            <p className="slogn">Our Professionals Follow All COVID-19 Norms</p>
            <pre className="slogn">"Your Health is Our Wealth...!!!"</pre>
            </div>
          </div> 
        </div>
      </div>
      <hr />
      <p className="copyright">@ copyright website created by Bug Busters</p>
    </section>
  );
};

export default Footer;
