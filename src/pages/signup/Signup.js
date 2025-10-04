import React, { useState } from "react";
import './Signup.scss' 
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";

function Signup(){

    const [name,setName] =useState('');
    const [email,setEmail]=useState('');
    const [password ,setPassword] =useState('');
    const navigate =useNavigate();
        async function handleSubmit(e){
            e.preventDefault();
            try {
                const result= await axiosClient.post('/auth/signup',{
                    name,
                    email,
                    password,
                });

                setItem(KEY_ACCESS_TOKEN,result.accessToken);
                navigate('/');
    
            } catch (error) {
                console.log(error);  
            }
        }
    

    return (
        <div className="Signup">
            <div className="signup-box">
                <h2 className="heading">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="name" id="name"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input type="email" className="email" id="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />

                    <label htmlFor="password">password</label>
                    <input type="password" className="password" id="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />

                    <input type="Submit" className="submit"/>
                </form>
                <p className="subheading">Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </div>
    )
}
export default Signup