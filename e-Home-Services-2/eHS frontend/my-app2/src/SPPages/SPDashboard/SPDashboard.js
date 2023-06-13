import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../UserPages/Services/AcService/ACService.css";
import SNavbar from "../SNavbar/SNavbar";
import axios from "axios";
import { url } from "../../Common/Constant";
import Footer from "../../UserPages/UserDashboard/Footer/Footer";

const SPDashboard = () => {
    const [bookings, setBookings] = useState([])
    const spemail = sessionStorage.getItem('spemail')

    useEffect(() => {
        getAllBookings()
    }, [])

    const getAllBookings = () => {


        axios.get(url + '/booking/getbookingbymail/' + spemail).then((response) => {
            const result = response.data

            if (result.status === 'success') {
                setBookings(result.data)
            } else {
                console.log(result.error)
            }
        })


    }

    function action(user) {
        const useremail = user.email

        axios.delete(url + '/booking/deletebookingbymail?', { params: { useremail: useremail, spemail: spemail } }).then((response) => {
            const result = response.data

            if (result.status === 'success') {
                window.location.reload();
                console.log(result.status)
                alert('Happy User')
            } else {
                console.log(result.error)
            }
        })

    }

    return (
        <div>
            <SNavbar />
            <table id="students">
                <tr>
                    <th>User name</th>
                    <th>Address</th>
                    <th>User Contact Number</th>
                    <th>Action</th>
                </tr>
                {bookings.map((user) => {
                    return (
                        <tr >
                            <td >{user.firstname} {user.lastname}</td>
                            <td >{user.address}</td>
                            <td >{user.contactnumber}</td>
                            <td>
                                <div>
                                    <button type="button" className="btn btn-outline-success button" onClick={() => { action(user) }}>Done</button>
                                </div>
                            </td>

                        </tr>

                    )
                })}

            </table>
            <br></br><br></br><br></br>
            <Footer/>
        </div>
    )
}

export default SPDashboard;