import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet";
import "./Details.css"
function Details() {
    let {Id} =useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://northwind.vercel.app/api/suppliers/${Id}`)
        .then(res=>setData(res.data))
    },[])
  return (
   <>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Details Page</title>
        <link rel="icon" type="image/x-icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEEybzjp8yK_qgIBuTq_h-fiSOssdw-QqXQ&usqp=CAU" />
        
      </Helmet>
    <div className="col-4">
                    <div className="card2">
                        <div className="card-body">
                        <h2>{data.companyName}</h2>
                    <p>{data.contactTitle}</p>
                    </div>
                </div>
                </div>
   </>
  )
}

export default Details
