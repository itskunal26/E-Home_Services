import HNavbar from "../HomePage/HNavbar";
import '../Signup/UserSignup.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { url } from "../../Common/Constant"


const UserSignup = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [address, setAddress] = useState("")
    const [contactnumber, setContactNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const addUser = () => {
        if (firstname.length === 0) {
            alert('Enter Firstname')
        } else if (lastname.length === 0) {
            alert('Enter Lastname')
        } else if (address.length === 0) {
            alert('Enter Address')
        } else if (contactnumber.length === 0) {
            alert('Enter Mobile')
        } else if (email.length === 0) {
            alert('Enter Emial')
        } else if (password.length === 0) {
            alert('Enter Password')
        } else {

            const data = new FormData()

            data.append('firstname', firstname)
            data.append('lastname', lastname)
            data.append('address', address)
            data.append('contactnumber', contactnumber)
            data.append('email', email)
            data.append('password', password)


            console.log(data.getAll)

            axios.post(url + '/user/register', data).then((response) => {
                const result = response.data

                if (result.status === 'success') {
                    alert('Sign up Successfull! Kindly Login')
                } else {
                    console.log(result.error)
                    alert('Sign up failed! Try again')
                }
            })
        }
    }



    return (
        <div>
            <HNavbar />
            <ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
</ul>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>User Registration</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(e) => { setFirstname(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => { setLastname(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="Address" onChange={(e) => { setAddress(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="Contact number" onChange={(e) => { setContactNumber(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn res_btn  float-right" onClick={addUser} >Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Already registerd?<Link to="/home">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignup;