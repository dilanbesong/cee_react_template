import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';



const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [state, setState] = useState({
    user:null,
    location:{ lat:0, lng:0},
    otp: '',
  });
  
  
  const fetchUserInformation = async () => {
   
    try {
      const { data } = await axios.get('/api/user')
       console.log(data);
     function onSuccess(pos) {
        const { latitude, longitude } = pos.coords;
        setState(state => {
          return {...state, user:{...data}, location:{ lat:latitude, lng:longitude }, otp:'', setState}
        })
      } 
    navigator.geolocation.getCurrentPosition(onSuccess);

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUserInformation()  
 },[state.location.lng]);
    
 console.log(state)
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};


// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};





