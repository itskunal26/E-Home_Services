import React from "react";
import Pnav from "../../Profile/Pnav";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../AddReview/AddReview.css";
import { useState } from "react";
import axios from "axios";
import { url } from "../../../Common/Constant";


const AddReview = () => {
    const location = useLocation("")

    const serviceProvider = location.state.trip

    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")


    const saveReview = () => {
        const data = new FormData()
        data.append('title', title)
        data.append('message', message)

        axios.post(url + '/review/addreview/' + serviceProvider.spid, data).then((response) => {
            const result = response.data

            if (result.status === 'success') {
                alert('Review added successfully!')
            } else {
                console.log(result.error)
                alert('Fields cannot be empty')
            }
        })
    }

    return (
        <div>
            <div>
                <Pnav />
            </div>
            <div>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label >Title</label>
                            <select className="form-control" id="exampleFormControlSelect1" onChange={(e) => { setTitle(e.target.value) }}>
                                <option>Excellent</option>
                                <option>Very good</option>
                                <option>Good</option>
                                <option>Moderate</option>
                                <option>Poor</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label >Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setMessage(e.target.value) }}></textarea>
                        </div>

                        <div>
                            <div>
                                <button type="submit" className="btn btn-warning btn1" onClick={saveReview}>Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="btngrp">

                <Link to='/dashboard'>
                    <a className="btn btn-warning btn2">Back</a>
                </Link>
            </div>

        </div>
    )
}

export default AddReview;