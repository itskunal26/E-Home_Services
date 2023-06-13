import HNavbar from '../../UserPages/HomePage/HNavbar'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { url } from '../../Common/Constant';
import '../SPSignup/SPSignup.css'



const SPSignup = () => {

    const [firstname, SetFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password, setPassword] = useState("")
    const [contactnumber, setContactNumber] = useState("")
    const [email, setEmail] = useState("")
    const [service_type, setServiceType] = useState("")
    const [service_cost, setServiceCost] = useState("")


    const addServiceProvider = () => {
        console.log('method invoked')
        console.log(contactnumber)
        if (firstname.length === 0) {
            alert('Enter Firstname')
        } else if (lastname.length === 0) {
            alert('Enter Lastname')
        } else if (password.length === 0) {
            alert('Enter Password')
        } else if (contactnumber.length === 0) {
            console.log(contactnumber.length)
            alert('Enter Contactnumber')
        } else if (email.length === 0) {
            alert('Enter Email')
        } else if (service_type.length === 0) {
            alert('Enter Service_type')
        } else if (service_cost.length === 0) {
            alert('Enter Service_cost')
        } else {

            const data = new FormData()
            data.append('firstname', firstname)
            data.append('lastname', lastname)
            data.append('password', password)
            data.append('contactnumber', contactnumber)
            data.append('email', email)
            data.append('service_type', service_type)
            data.append('service_cost', service_cost)

            console.log(data.getAll)

            axios.post(url + '/service/register', data).then((response) => {
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
                            <h3>Service Provider Registration</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(e) => { SetFirstname(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => { setLastname(e.target.value) }} />
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
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="Service type" onChange={(e) => { setServiceType(e.target.value) }} />
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="Service cost" onChange={(e) => { setServiceCost(e.target.value) }} />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn float-right login_btn" onClick={addServiceProvider} >Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Already registered?<Link to="/SPLogin">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SPSignup;