import { Link } from "react-router-dom";
import AdNavbar from "../AdminNavbar/AdNavbar";
import "../ApproveSP/ApproveSp.css";
import { url } from "../../Common/Constant";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../UserPages/UserDashboard/Footer/Footer";



const ApproveSp = () => {

    const [sp, setSp] = useState([])

    useEffect(() => {
        getAllServiceProviders()
    }, [])

    const getAllServiceProviders = () => {


        axios.get(url + '/service/findunauthorised').then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setSp(result.data)
            } else {
                console.log(result.error)
            }
        })
    }


    function approveServiceProvider(serviceProvider) {
        const spid = serviceProvider.spid

        axios.put(url + '/admin/approvesp/'+spid).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                window.location.reload()
                alert('Service Provider approved successfully!')
                console.log(result.data)
            } else {
                console.log(result.error)
            }
        })

    }

    function declineServiceProvider(serviceProvider) {
        const spid = serviceProvider.spid

        axios.delete(url + '/service/deletesp/'+spid).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                window.location.reload()
                alert('Service Provider decline successfully!')
                console.log(result.data)
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
                    <th>Approved Action</th>
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
                            <td ><button className="btn btn-outline-success button" onClick={() => { approveServiceProvider(serviceProvider) }}>Approve</button> &nbsp; <button className="btn btn-outline-success button" onClick={() => { declineServiceProvider(serviceProvider) }}>Decline</button></td>

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


export default ApproveSp;