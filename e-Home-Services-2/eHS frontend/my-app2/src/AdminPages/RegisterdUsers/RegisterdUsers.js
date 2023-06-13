import { useEffect } from "react";
import { Link } from "react-router-dom";
import AdNavbar from "../AdminNavbar/AdNavbar";
import "../RegisterdUsers/RegisterdUsers.css";
import axios from "axios";
import { useState } from "react";
import { url } from "../../Common/Constant";
import Footer from "../../UserPages/UserDashboard/Footer/Footer";



const RegisterdUsers = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = () => {


        axios.get(url + '/user/findall').then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setUser(result.data)
            } else {
                console.log(result.error)
            }
        })
    }

    return (
        <div>
            <div>
                <AdNavbar />
            </div>
            <table id="students">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                </tr>

                {user.map((user) => {
                    return (
                        <tr >
                            <td >{user.firstname}</td>
                            <td >{user.lastname}</td>
                            <td >{user.address}</td>
                            <td >{user.contactnumber}</td>
                            <td >{user.email}</td>

                        </tr>
                    )
                })}


            </table>
            <Link to='/addashboard'>
                <a className="btn btn-warning btn1">Back</a>
            </Link>
            <br></br>
            <Footer/>
        </div>
    )
}


export default RegisterdUsers;