import "../About us/About.css";

import why_us from "../../../Images/How-We-Are-Different.jpg";

const About = () => {
  return (
    <section id="About">
      <div className="container">
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
            <figure>
            <img src={why_us} alt="why us" className="img-fluid" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
