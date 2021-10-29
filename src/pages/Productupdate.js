import React, { useState, useEffect } from 'react'
import { Axios } from 'axios'
import { Button } from 'antd'


const Productupdate = (props) => {

    const url = 'http://localhost:60665/api/Product/'
    const [data, setData] = useState({

        productname : "",
        productdesc : ""
    })

    useEffect(
        () => {
            const id = props.match.params.id
        Axios.get(url+id)
        .then(res=>{
            setData(res.data)
        }).catch(err=>console.error(err))
    }, [])


    function submit(e){
        e.preventDefault()
        const id = props.match.params.id
        Axios.put(url+id,data)
        .then (res=>{
            console.log(res.data)
            props.history.push("/")
        }).catch(err => console.error(err))
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }

    return (
        <div className="container">
            <form onSubmit={(e)=> submit(e)}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input onchange={(e) => handle(e)} value={data.productname}
                    type="text" name="productname"/>
                    </div>
                    <div className="form-group">
                        <label>Product Description</label>
                        <input onChange={(e)=> handle(e)} value={data.productdesc}
                        type="text" name="productdesc"/>
                </div>
                <Button>Submit</Button>
            </form>
        </div>

    )
}
export default Productupdate