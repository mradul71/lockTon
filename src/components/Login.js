import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login({setFlag}) {
  
    let navigate = useNavigate();
    const [UserName, setUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const validateCredentials = () => {
      if(UserName==="Lockton" && loginPassword==="Lockton 123"){
        setFlag(true);
      }
      else{
        console.log("Incorrect")
      }
    }
  
    return (
      <div className='loginPage'>
      <div className='loginForm'>
        {/* <h3> Login </h3> */}
        <img className='image' src="MicrosoftTeams-image.png" />
        <input
        type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
        type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={() => validateCredentials()}> Login</button>
    </div>
    </div>
    )
}

export default Login
