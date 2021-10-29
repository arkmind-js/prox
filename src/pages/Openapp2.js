import React, {useState,useEffect, Fragment}from 'react'
import axios from 'axios'


function Openapp2(){
    const [newApp, setnewApp] = useState([])

useEffect(() => {
    axios
    .get("http://localhost:60665/api/newApp/")
    .then((res) => {
        setnewApp(res.data)
        })
    .catch((err) =>{
        console.log(err);
    })
},[]);

    return (
        <div className='information'>
        <Fragment>
            <h1> Listing </h1>
        {newApp.map((newa) =>(
            <div key={newa.new_id} >
            {newa.new_name} - {newa.new_age} -  {newa.new_state} -  {newa.new_product}
        </div>
        ))} 
   </Fragment>
   </div>
    )
}
export default Openapp2