import Pnav from "../../Profile/Pnav";
import { Link } from "react-router-dom";
import "../../Services/AcService/ACService.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { url } from "../../../Common/Constant";
import axios from "axios";



const ReadReview = () => {
    const location = useLocation("")

    const serviceProvider = location.state.trip
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
          getReviews()  
    },[])

    const getReviews = () => {
        const spid = serviceProvider.spid

        axios.get(url + '/review/getreviewforsp/' + spid).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                console.log(result.data)
                setReviews(result.data)
            } else {
                console.log(result.error)
            }
        })
    }

    return (
        <div>
            <div>
                <Pnav/>
            </div>
            <table id="students">
                <tr>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Added Date</th>
                </tr>

                {reviews.map((rev)=>{
                    return(
                        <tr >
                        <td >{rev.title}</td>
                        <td >{rev.message}</td>
                        <td >{rev.addedat}</td>
                    </tr>
                    )
                })}
               

            </table>
            <Link to='/dashboard'>
                <a className="btn btn-warning btn1">Back</a>
            </Link>
        </div>
    )
}

export default ReadReview;