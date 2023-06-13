import { Link } from "react-router-dom";
import AdNavbar from "../AdminNavbar/AdNavbar";
import "../RegisterdSP/RegisterdSp.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../Common/Constant";
import Footer from "../../UserPages/UserDashboard/Footer/Footer";



const RegisterdSp = () => {

    const [sp, setSp] = useState([])

    useEffect(() => {
        getAllServiceProviders()
    }, [])

    const getAllServiceProviders = () => {


        axios.get(url + '/service/findauthorised').then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setSp(result.data)
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
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Service Type</th>
                    <th>Service Cost</th>
                </tr>

                {sp.map((serviceProvider) => {
                    return (
                        <tr >
                            <td >{serviceProvider.firstname}</td>
                            <td >{serviceProvider.lastname}</td>
                            <td >{serviceProvider.contactnumber}</td>
                            <td >{serviceProvider.email}</td>
                            <td >{serviceProvider.service_type}</td>
                            <td >{serviceProvider.service_cost}</td>

                        </tr>
                    )
                })}


            </table>
            <Link to='/addashboard'>
                <a className="btn btn-warning btn1">Back</a>
            </Link>
            <Footer/>
        </div>
    )
}


export default RegisterdSp;