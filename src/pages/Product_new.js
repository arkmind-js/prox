import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Button, message } from 'antd'
import 'antd/dist/antd.css'
import '../App.css'
import Axios from 'axios'

function Product_new() {
    let history = useHistory();

    const url = "http://localhost:60665/api/product"
    const [data, setData] = useState({
        productname: "",
        productdesc: "",
        productstatus: "Active"
    })

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            productname: data.productname,
            productdesc: data.productdesc,
            productstatus: "Active"
        })
            .then(res => {
                console.log(res.data)
                setTimeout(() => {
                    message.success('Added Successfully')
                }, 2000)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <div className='App'>
            <p><b>Add New Product Type Name</b></p>
            <form onSubmit={(e) => submit(e)}>
                <p >Product Type Name :
                    <input onChange={(e) => handle(e)}
                        id="productname"
                        value={data.productname} type='text' />  </p>
                <br />
                <p >Product Type Description :
                    <input onChange={(e) => handle(e)}
                        id="productdesc"
                        value={data.productdesc} type='text' /> </p>
                <br />

                <p>Product Type Status :    Active</p>
                <br />
                <Button onClick={submit}> Save </Button>
                <Button onClick={() => { history.push('/Productlisting') }}>Back</Button>
            </form>
        </div>




    )
}
export default Product_new