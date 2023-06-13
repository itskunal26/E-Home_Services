import Pnav from "../../Profile/Pnav";
import "../AcService/ACService.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router'
import HomePage from "../../HomePage/HomePage";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../Common/Constant";
import Footer from "../../UserDashboard/Footer/Footer";


const BikeService = () => {
    const history = useHistory()
    const [bikesp, setBikesp] = useState([])

    useEffect(() => {
        getBikeSps()
    }, [])

    const getBikeSps = () => {
        const service = 'Bike Service'

        axios.get(url + '/service/findbyservice/' + service).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setBikesp(result.data)
            } else {
                console.log(result.error)
            }
        })
    }

    function addBikeReview(bksp) {
        console.log(bksp)
        history.push('/addreviews', { trip: bksp })
    }

    function readBikeReview(bksp) {
        console.log(bksp)
        history.push('/reviews', { trip: bksp })
    }

    function bookBikeService(bksp) {
        const userEmail = sessionStorage.getItem('userEmail')

        const email = bksp.email

        const data = new FormData()
        data.append('useremail', userEmail)
        data.append('spemail', email)



        axios.post(url + '/booking/book', data).then((response) => {
            const result = response.data

            if (result.status === 'success') {
                alert('Booking successfull!')
                console.log(result.status)
            } else {
                alert('Booking Failed! Service is already booked')
                console.log(result.error)
            }
        })
    }

    if (sessionStorage.getItem("id") !== null) {
        return (
            <div>
                <div>
                    <Pnav />
                </div>
                <table id="students">
                    <tr>
                        <th>Service Provider Name</th>
                        <th>Service-Type</th>
                        <th>Service-Cost</th>
                        <th>Read Reviews</th>
                        <th>Add Review</th>
                        <th>Book</th>
                    </tr>

                    {bikesp.map((bksp) => {
                        return (
                            <tr >
                                <td >{bksp.firstname} {bksp.lastname}</td>
                                <td >{bksp.service_type}{ }</td>
                                <td >{bksp.service_cost}</td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-outline-success button" onClick={() => { readBikeReview(bksp) }}>Read</button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-outline-success button" onClick={() => { addBikeReview(bksp) }}>Add</button>
                                    </div>

                                </td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-outline-success button" onClick={() => { bookBikeService(bksp) }}>Book</button>
                                    </div>

                                </td>
                            </tr>
                        )
                    })}


                </table>
                <Link to='/dashboard'>
                    <a className="btn btn-warning btn1">Back</a>
                </Link>
                <Footer/>
            </div>
        )
    } else {
        return (<HomePage />)
    }
}

export default BikeService;