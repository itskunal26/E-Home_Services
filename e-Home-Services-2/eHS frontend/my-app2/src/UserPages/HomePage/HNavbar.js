import { Link } from "react-router-dom";
import '../HomePage/HNavbar.css';
import img from '../../Images/logo5.png';


const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light my">
              <Link className="navbar-brand ml-5" to="/home"><img src={img} alt="logo" className="image"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home <span className="sr-only"></span></Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/SPLogin">Service Provider</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/adminlogin">Admin</Link>
                    </li>
                   

                </ul>
            </div>
        </nav>
    )
}

export default NavBar