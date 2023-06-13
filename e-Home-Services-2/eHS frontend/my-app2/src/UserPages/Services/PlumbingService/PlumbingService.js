import Pnav from "../../Profile/Pnav";
import { Link } from "react-router-dom";
import "../AcService/ACService.css";
import { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import axios from "axios";
import { url } from "../../../Common/Constant";
import Footer from "../../UserDashboard/Footer/Footer";



const PlumbingService = () => {
    const [plsp, setPlsp] = useState([])
    const history = useHistory()


    useEffect(() => {
        getPestControllSp()
    }, [])

    const getPestControllSp = () => {
        const service = 'Plumbing'

        axios.get(url + '/service/findbyservice/' + service).then((response) => {
            const result = response.data

            if (result.status === 'success') {
                setPlsp(result.data)
            } else {
                console.log(result.error)
            }
        })
    }

    function addPlumbingReview(sp) {
        console.log(sp)
        history.push('/addreviews', { trip: sp })
    }

    function readPlumbingReview(sp) {
        console.log(sp)
        history.push('/reviews', { trip: sp })
    }

    function bookPlumbingService(sp) {
        const userEmail = sessionStorage.getItem('userEmail')

        const email = sp.email

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
                    {plsp.map((sp) => {
                        return (
                            <tr >
                                <td >{sp.firstname} {sp.lastname}</td>
                                <td >{sp.service_type}</td>
                                <td >{sp.service_cost}</td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-outline-success button" onClick={() => { readPlumbingReview(sp) }}>Read</button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-outline-success button" onClick={() => { addPlumbingReview(sp) }}>Add</button>
                                    </div>

                                </td>
                                <td>
                                    <div>
                                        <button type="button" className="btn btn-outline-success button" onClick={() => { bookPlumbingService(sp) }}>Book</button>
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
    }
}

export default PlumbingService;