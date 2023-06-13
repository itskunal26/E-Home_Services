import banner from "../../../Images/h3.png";
import wave from "../../../Images/wave1.png";
import '../Banner/Banner.css';

const Banner = () => {
  return (
    <section id="banner">
      <div className="text-center container">
        <div className="text-center row">
          <div className="col-md-6">
            <p className="promo-title">Best Home services</p>
            <p className="slogn">
              We Provide Many Types Of Services at Your Door Step
            </p>
            <p className="slogn">Our Professionals Follow All COVID-19 Norms</p>
            <pre className="slogn">"Your Health is Our Wealth...!!!"</pre>
          </div>
          <div className="col-md-6">
            <img src={banner} alt="home" className="home" />
          </div>
        </div>
      </div>
      <img src={wave} alt="wave1" className="wave1" />
    </section>
  );
};

export default Banner;
