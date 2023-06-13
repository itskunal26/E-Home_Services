import HNavbar from '../../UserPages/HomePage/HNavbar'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../Common/Constant'
import '../SPLogin/SPLogin.css'




const SericeProviderLogin = () => {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    useEffect(()=>{
        console.log('SP Login')
    },[])

    const spLogin= () =>{
        const data = new FormData()
        data.append('email',email)
        data.append('password',password)

        history.push('/spdashboard')

        axios.post(url + '/service/authenticate',data).then((response)=>{
            const result = response.data
            if(result.status === 'success'){
                sessionStorage.setItem('spid', result.data.spid)
                sessionStorage.setItem('spemail', result.data.email)
                alert('Login Successfull!')
                history.push('/spdashboard')
            }else{
                console.log(result.error)
                alert('Login Failed!...Please try again!')
            }
        })

    }

    return (
        <div>
            <HNavbar/>
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
                            <h3>Service Provider Sign In</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <input type="email" className="form-control" placeholder="Enter Email" onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }} />
                                </div>

                                <div className="input-group form-group">
                                    <input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}/>
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" onClick={spLogin} />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<Link to="/SPSignup">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SericeProviderLogin