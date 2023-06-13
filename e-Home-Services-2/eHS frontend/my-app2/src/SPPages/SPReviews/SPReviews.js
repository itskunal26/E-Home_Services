import SNavbar from "../SNavbar/SNavbar";
import "../../UserPages/Services/AcService/ACService.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { url } from "../../Common/Constant";
import axios from "axios";
import Footer from "../../UserPages/UserDashboard/Footer/Footer";



const SPReviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        getAllBookings()
    }, [])

    const getAllBookings = () => {
        const spid = sessionStorage.getItem('spid')

        axios.get(url + '/review/getreviewforsp/' + spid).then((response) => {
            const result = response.data

            if (result.status === 'success') {
                setReviews(result.data)
            } else {
                console.log(result.error)
            }
        })


    }


    return (
        <div>
            <div>
                <div>
                    <SNavbar />
                </div>
                <table id="students">
                    <tr>
                        <th>Title</th>
                        <th>Message</th>
                        <th>Added Date</th>
                    </tr>

                    {reviews.map((review) => {
                        return (
                            <tr >
                                <td >{review.title}</td>
                                <td >{review.message}</td>
                                <td >{review.addedat}</td>
                            </tr>
                        )
                    })}


                </table>
                <Link to='/spdashboard'>
                    <a className="btn btn-warning btn1">Back</a>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default SPReviews;