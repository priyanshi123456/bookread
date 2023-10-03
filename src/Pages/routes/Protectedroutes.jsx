import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Protectedroutes(props) {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(()=>{
        let token = localStorage.getItem("token")
        if(!token){
            navigate('/login')
        }
    },[])
  return (
    <div>
        <Component/>
      
    </div>
  )
}

export default Protectedroutes;

