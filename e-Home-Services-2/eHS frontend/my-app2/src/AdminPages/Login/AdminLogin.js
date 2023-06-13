import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { url } from '../../Common/Constant'
import HNavbar from '../../UserPages/HomePage/HNavbar'


const AdminLogin = () => {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const adminLogin = () => {
        const data = new FormData()
        data.append('email', email)
        data.append('password', password)

        console.log(data)
        sessionStorage.clear()
        // history.push('/admindashboard')

        axios.post(url + '/admin/authenticate', data).then((response) => {
            const result = response.data

            if (result.status === 'success') {
                sessionStorage.setItem('adminid', result.data.id)
                window.location = '/addashboard'
                
                alert('Login Successfull!')


            } else {
                console.log(result.error)
                alert('Login Failed!...Please try again!')
                window.location='/adminlogin'
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
                            <h3>Admin Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
                                </div>

                                <div className="input-group form-group">
                                    <input type="password" className="form-control" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" onClick={adminLogin} />
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin