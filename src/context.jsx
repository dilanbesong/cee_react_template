import React, { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    person: null,
    location:{ latitude:0, longitude:0},
    otp: '',
  });
  

  const fetchUserInformation = async () => {
    try {
      const { data } = await axios.get('/api/user')

      function onSuccess(pos) {
        const { latitude, longitude } = pos.coords;
        setState({user:{...data}, location:{ latitude, longitude }, person:null, otp:''})
      }

      navigator.geolocation.getCurrentPosition(onSuccess);
      console.log(state);
   
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