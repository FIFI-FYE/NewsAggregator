import { useState, useEffect } from "react";
import React from"react";
import { Link } from "react-router-dom";

const  Home= () =>{

    const [user, setUser]= useState (null)
    useEffect(()=>{
        fetch(' https://newsapi.org/v2/top-headlines?country=ng&apiKey=f60cbe37a0a84fd894e2d5ed8a85550a')
        .then((response) => response.json())
        .then((info) => setUser(info.data));

        
    }, [setUser]);

    // console.log(user);

    return(
        <div>
            {user == null ? (
                <p>loading...</p>
              ) : (
                    user.map((val, index) => {
                        return (
                           <Link key={index}to={`/${val.id}`}>
                               <div className="card">
                                
                                    <h1>
                                    Full Name: {val.first_name} {val.last_name}
                                    </h1>
                                    <p>Email: {val.email} </p>
                                </div> 
                             </Link>

                        );
                            
                    })
            

                 )}
        </div>
 
    );
};


export default Home;