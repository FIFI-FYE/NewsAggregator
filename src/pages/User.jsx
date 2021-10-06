import React, {useState, useEffect} from "react";
import { useParams } from "react-router";



const User = () => {
    const {id}=useParams();
    const[ade, setAde]=useState(null)
    const[err,setErr] =useState(null)

    useEffect(() => {
        fetch(` https://newsapi.org/v2/top-headlines?country=ng&apiKey=f60cbe37a0a84fd894e2d5ed8a85550a/${id}`)
            
            .then((response) => {
                if(!response.ok){
                    setErr(response.status)
                    throw Error(response.status);
                }
                return(response)
            })
            .then((response) => response.json())
            .then((info) => setAde(info.data));
            // .catch((error) => console.log(error))
 
    }, [setAde]);

    // console.log(ade);

    return(
        <div>
            
            {err != null ?( <p>you have encountered {err}</p>):
            ade == null ? (
            <p>loading...</p>
            ) : (
        
                <div className="card">
                    <img src={ade.avatar} width="300"/>
                    <p>
                        Full name: {ade.first_name} {ade.last_name} {""}
                     </p>
                    <p>Email: {ade.email} </p>

                </div>
            )};

            </div>

            

      
            
       

                
            
        
    )
};


export default User;