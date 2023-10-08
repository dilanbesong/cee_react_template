import { useState, useEffect } from "react";
import axios from "axios";

export const usePoster = (posterId) => {
  const [poster, setPoster] = useState({
    posterImage: "",
    posterId,
    posterName: "",
    postType: "user",
    navigateToProfileUrl:'',
  });
  const [ showPoster, setShowPoster ] = useState(false)
  async function getPoster(){
    const { data } = await axios.get(`/api/post/getPoster/${posterId}`)
    if(data.posterName){
       setShowPoster(true)
       setPoster(data)
    } 
  }

useEffect(() => {
    getPoster();
  }, [posterId]);

  
    return {...poster, showPoster};
  

  }

