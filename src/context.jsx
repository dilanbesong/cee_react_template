import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';

const AppContext = createContext();

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    person: null,
    location:{ lat:0, lng:0},
    otp: '',
  });
  

  const fetchUserInformation = async () => {
    try {
      const { data } = await axios.get('/api/user')

      function onSuccess(pos) {
        const { latitude, longitude } = pos.coords;
        setState({user:{...data}, location:{ lat:latitude, lng:longitude }, person:null, otp:'', setState})
      }

      navigator.geolocation.getCurrentPosition(onSuccess);
      //console.log(state);
   
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
   
    fetchUserInformation()
      
 },[state.location.latitude]);

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

