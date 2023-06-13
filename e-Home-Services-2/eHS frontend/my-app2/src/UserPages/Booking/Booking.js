import '../Booking/Booking.css'
import { Link } from 'react-router-dom';
import Pnav from '../Profile/Pnav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../Common/Constant';
import Footer from '../UserDashboard/Footer/Footer';


const Booking = () => {
    const [booking, setBookings] = useState([])

    const userEmail = sessionStorage.getItem('userEmail')
    const userAddress = sessionStorage.getItem('address')

    console.log(userAddress)

    useEffect(() => {
        getAllBooking()
    }, [])


    const getAllBooking = () => {


        axios.get(url + '/booking/history/' + userEmail).then((response) => {
            const result = response.data

            if (result.status === 'success') {
                setBookings(result.data)
            } else {
                console.log(result.error)
            }
        })
    }


    return (
        <div>
            <div>
                <div>
                    <Pnav />
                </div>
                <table id="students">
                    <tr>
                        <th>Service Provider Name</th>
                        <th>Service-Type</th>
                        <th>Service-Cost</th>
                        <th>Address</th>
                        <th>Date</th>
                    </tr>

                    {booking.map((book) => {
                        return (
                            <tr >
                                <td >{book.firstname} {book.lastname}</td>
                                <td >{book.service_type}</td>
                                <td >{book.service_cost}</td>
                                <td >{userAddress}</td>
                                <td >{new Date().toLocaleString() + ''}</td>

                            </tr>
                        )
                    })}
                </table>
            </div>
            <Link to='/dashboard'>
                <a className="btn btn-warning btn1">Back</a>
            </Link>
            <div>
           <Footer/>
               </div>
        </div>
           

    )
}

export default Booking;