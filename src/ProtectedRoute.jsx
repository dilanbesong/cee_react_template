import axios from "axios";
import { useGlobalContext } from "./context";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASEURL } from "./baseUrl";


export const ProtectedRoute =  () => {
  const { user } = useGlobalContext()
   async function Auth() {
      const { data } = await axios.get(`${BASEURL}/user`)
      if(data.email){
         sessionStorage.setItem('isAuth', 'true')
      }
      else sessionStorage.setItem('isAuth', 'false')
    }

    useEffect( () => {
      Auth()
    })
    //console.log(sessionStorage.getItem('isAuth'));
    try {
      return  sessionStorage.getItem('isAuth') == 'true' || user.email  ? <Outlet /> : <Navigate to="/" />
    } catch (error) {
      return <Navigate to='/'/>
    }
       
};
