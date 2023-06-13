import "../AdminDashboard/AdminDashboard.css";
import user from "../../Images/user.png";
import app from "../../Images/approval.png";
import pending from "../../Images/pending.png";
import AdNavbar from "../AdminNavbar/AdNavbar";
import { Link } from "react-router-dom";
import Footer from "../../UserPages/UserDashboard/Footer/Footer";


const AdminDashboard = () => {
    console.log(sessionStorage.getItem('adminid'))
    return (
        <div>
            <div>
                <AdNavbar />
            </div>
            <div className="text-center container">                
            <h2>Welcome Admin</h2>
            </div>
            <section id="About">
                <div className="container">
                    <br />
                    <div className=" text-center row ">
                        <div className="col-md-4 services">
                            <Link to="/registerdusers" className="link">
                                <img src={user} alt="Ac" className="service-img" />
                                <h4> Registerd Users</h4>
                            </Link>
                        </div>

                        <div className="col-md-4 services">
                            <Link to="/registerdsp" className="link">
                                <img src={app} alt="Ac" className="service-img" />
                                <h4>Registerd Service Providers</h4>
                            </Link>
                        </div>

                        <div className="col-md-4 services">
                            <Link to="/approvesp" className="link">
                                <img src={pending} alt="Ac" className="service-img" />
                                <h4>Approve Service Providers</h4>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default AdminDashboard;