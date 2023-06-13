import '../Navbar/Navbar.css';
import img from '../../Images/logo5.png';




const Navbar = () => {
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
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a className="nav-link " href="#top">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#About">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#happy">Happy Customers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#social">Social</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/profile">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/booking">My Bookings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#footer">Contact us</a>
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

export default Navbar;

