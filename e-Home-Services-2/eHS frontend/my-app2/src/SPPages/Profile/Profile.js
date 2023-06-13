import { useState } from "react";
import { Link } from "react-router-dom";
import "../../UserPages/Profile/Profile.css";
import SNavbar from "../SNavbar/SNavbar";
import { url } from "../../Common/Constant";
import axios from "axios";
import Footer from "../../UserPages/UserDashboard/Footer/Footer";




const Profile = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [service_cost, setServiceCost] = useState("")
    const spid = sessionStorage.getItem('spid')


    const updateProfile = () => {
        const data = new FormData()
        data.append('firstname', firstname)
        data.append('lastname', lastname)
        data.append('email', email)
        data.append('mobile', mobile)
        data.append('password', password)
        data.append('service_cost', service_cost)


        axios.put(url + '/service/edit/' + spid, data).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                alert('Profile updated Successfully!')
            } else {
                console.log(result.error)
                alert('Update Failed!...Please try again!')
            }
        })
    }

    return (
        <div>
            <div>
                <SNavbar />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="profile1 p-3 mb-2 bg-secondary text-white">
                            <form className="form-control">
                                <h3 className="user">My Info</h3>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(e) => {
                                        setFirstname(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => {
                                        setLastname(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Mobile No</label>
                                    <input type="number" className="form-control" placeholder="Enter Mobile No" onChange={(e) => {
                                        setMobile(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Service Cost</label>
                                    <input type="text" className="form-control" placeholder="Change Service Cost" onChange={(e) => {
                                        setServiceCost(e.target.value);
                                    }} />
                                </div><br />
                                <div className="button2">
                                    <button type="submit" className="btn-primary btn btn-success" onClick={updateProfile}>Edit</button>

                                    <Link to="/spdashboard">
                                        <a className="btn btn-warning">Back</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile;