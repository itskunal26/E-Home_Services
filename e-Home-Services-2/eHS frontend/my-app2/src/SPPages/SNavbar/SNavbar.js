import img from "../../Images/logo5.png";
import "../../UserPages/Navbar/Navbar.css";



const SNavbar = () => {
    return (
        <div>
            <section id="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> <img src={img} alt="logo" className="image"></img></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars" ></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav " >
                                <li className="nav-item">
                                    <a className="nav-link " href="/spdashboard">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/spprofile">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/spreviews" >My Reviews</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#footer" >Contact us</a>
                                </li>
                                <div className="signout">
                                    <button className="btn btn-primary w-100" >Sign Out</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    )
}


export default SNavbar;