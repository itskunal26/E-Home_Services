import '../HomePage/HomePage.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import HNavbar from './HNavbar'
import axios from 'axios';
import { url } from "../../Common/Constant"


const HomePage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log("hello")
    }, [])

    const LogInUser = () => {
        const data = new FormData()
        data.append('email', email)
        data.append('password', password)

        sessionStorage.clear()

        axios.post(url + '/user/authenticate', data).then((response) => {
            const result = response.data
            
            if (result.status === 'success') {
                window.location = '/dashboard'
                sessionStorage.setItem("id", result.data.userid)
                sessionStorage.setItem("address", result.data.address)
                sessionStorage.setItem("userEmail", result.data.email)
                
                alert('Login Sucessfull!')
            } else {
                console.log(result.error)
                alert('Login Failed!...Please try again!')
                window.location = '/home'
            }
        })
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
                            <h3> User Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value); }} />
                                </div>

                                <div className="input-group form-group">
                                    <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value); }} />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" onClick={LogInUser} />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<Link to="/usersignup">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage;