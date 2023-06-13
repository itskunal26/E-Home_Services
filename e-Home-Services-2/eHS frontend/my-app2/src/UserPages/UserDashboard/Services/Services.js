import '../Services/Services.css';
import ac from '../../../Images/swing.png'
import bike from '../../../Images/motorcycle.png'
import cleaning from '../../../Images/household.png'
import painter from '../../../Images/paint-roller.png'
import plumber from '../../../Images/plumber.png'
import pest from '../../../Images/Pest Control.png'
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section id="services">
            <div className="text-center container">
                <h1 className="title">What we Do? </h1>
                <div className=" text-center row " >
                    <div className="col-md-4 services">
                        <Link to="/acservice" className="link">
                        <img src={ac} alt="Ac" className="service-img" />
                        <h4>Ac reparing</h4>
                        <p>We provide all types of ac repaires and services</p>
                        </Link>
                    </div>
                    <div className="col-md-4 services">
                        <Link to="/bikeservice" className="link">
                            <img src={bike} alt="Bike" className="service-img" />
                            <h4>Bike Services</h4>
                            <p>We provide all types of Bike services</p>
                        </Link>
                    </div>
                    <div className="col-md-4 services">
                        <Link to="/cleaningservice" className="link">
                            <img src={cleaning} alt="Cleaning" className="service-img" />
                            <h4>Cleaning</h4>
                            <p>We provide all types of  cleaning services</p>
                        </Link>
                    </div>
                </div>
                <div className=" text-center row " >
                    <div className="col-md-4 services">
                        <Link to="/paintingservice" className="link">
                            <img src={painter} alt="Painter" className="service-img" />
                            <h4>Painters</h4>
                            <p>We provide all types of painting patterns</p>
                        </Link>
                    </div>
                    <div className="col-md-4 services">
                        <Link to="/plumbingservice" className="link">
                            <img src={plumber} alt="Plumber" className="service-img" />
                            <h4>Plumber</h4>
                            <p>We provide all types of Bike services</p>
                        </Link>
                    </div>
                    <div className="col-md-4 services">
                        <Link to="/pestcontrol" className="link">
                            <img src={pest} alt="Pest control" className="service-img" />
                            <h4>Pest Control</h4>
                            <p>We provide all types of  cleaning services</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;