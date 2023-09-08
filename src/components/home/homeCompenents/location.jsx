import MoreLinks from "./moreLinks"
import PhotoSlide from "./photoSlide"
import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Marker, useLoadScript, GoogleMap }  from '@react-google-maps/api'
import { Audio } from 'react-loader-spinner'
import { useGlobalContext } from "../../../context"


const Map = ({ lat, lng, }) => {
    console.log(lat,lng);
    const locationCoord = useMemo( () => ({lat, lng}), [] )
    return <>
       <GoogleMap zoom={10} center={locationCoord} mapContainerClassName={ `esut_map_google_class`}>
           <Marker position={locationCoord}/>
         </GoogleMap>
    </>
}

export const MapLocation = ({ lat, lng}) => {
    
    
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:import.meta.env.VITE_GOOGLE_MAP_API_KEY
  })
  if(!isLoaded) return <Audio
  height="80"
  width="80"
  radius="9"
  color="brown"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
  return <Map lat={lat} lng={lng}/> 
}


const EsutLocation = () => {
    const { location: { lat, lng} } = useGlobalContext()
    const [ local, setLocal ] = useState('ceelocal')
    const navigate = useNavigate()
    const Local = ({ local }) => {
        if(local == 'ceelocal') return <MapLocation lat={0} lng={15}/>
        if(local == 'mylocal') return <MapLocation lat={lat} lng={lng}/>
        if(local == 'images') return <PhotoSlide/>
    }
   return <>
    {/* <nav className="navLocal"> <i className="fa fa-arrow-left"></i></nav> */}
       <div className="Img_map">
        <nav> <i className="fa fa-arrow-left" onClick={() => navigate(-1)} aria-hidden></i> others</nav>
  
          <select className="localOption" onChange={(e) => setLocal(e.target.value)}>
              <option value="ceelocal">CEE local </option>
              <option value="mylocal">My local</option>
              <option value="images">CEE images</option>
          </select>
          <i className="fa fa-map-marker" aria-hidden></i>
           <Local local={local}/>
           <MoreLinks/>
        </div> 
   </>               
}


export default EsutLocation