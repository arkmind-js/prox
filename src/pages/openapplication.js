import React, {useState,useEffect} from 'react';



function Openapplication(){

const [newApp,setnewApp] = useState([])


useEffect(() => {
    fetch("http://localhost:60665/api/newApp/")
    
        .then(response => response.json())
        .then (json => setnewApp(json))
    },[])

    return(
        <div className="information" >
               {
                   newApp.map(newApp => {
                return <pre>{JSON.stringify(newApp)}</pre>
        })}
        </div>
    )
}
export default Openapplication