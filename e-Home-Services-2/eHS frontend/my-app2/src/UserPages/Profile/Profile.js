
import Footer from "../UserDashboard/Footer/Footer";
import "../Profile/Profile.css";
import Pnav from "./Pnav";
import { Link } from "react-router-dom";
import { useState } from "react";
import { url } from "../../Common/Constant";
import axios from "axios";




const Profile = () => {


    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [contactnumber, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const userid = sessionStorage.getItem('id')


    const updateProfile = () => {
        const data = new FormData()
        data.append('firstname', firstname)
        data.append('lastname', lastname)
        data.append('email', email)
        data.append('contactnumber', contactnumber)
        data.append('password', password)
        data.append('address', address)


        axios.put(url + '/user/updateuser/' + userid, data).then((response) => {
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
                <Pnav />
            </div>
          <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="profile1 ">
                            <form className="form-control">
                                <h3 className="user">My Info</h3>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input  type="text" className="form-control" placeholder="First Name" onChange={(e) => {
                                        setFirstname(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input  type="text" className="form-control" placeholder="Last Name" onChange={(e) => {
                                        setLastname(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input  type="email" className="form-control" placeholder="Enter Email" onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                                <div className="form-group">
                                    <label>Mobile No</label>
                                    <input  type="text" className="form-control" placeholder="Enter Mobile No" onChange={(e) => {
                                        setMobile(e.target.value);
                                    }} />
                                </div>
                               
                                <div className="form-group">
                                    <label>Address</label>
                                    <input  type="text" className="form-control" placeholder="Enter City"  onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}/>
                                </div><br />
                                <div className="button2">
                                    <button type="submit" className="btn-primary btn btn-success" onClick={updateProfile} >Edit</button>
                                    <Link to="/dashboard">
                                        <a className="btn btn-warning btn btn-success">Back</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div >
    )
}

export default Profile;