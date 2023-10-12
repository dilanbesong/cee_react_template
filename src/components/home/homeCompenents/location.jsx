import MoreLinks from "./moreLinks"
import PhotoSlide from "./photoSlide"
import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Marker, useLoadScript, GoogleMap }  from '@react-google-maps/api'
import { Audio, ThreeCircles, ThreeDots } from 'react-loader-spinner'
import axios from "axios"
import { useGlobalContext } from "../../../context"
import maplibregl from 'maplibre-gl';
import Map, {NavigationControl} from 'react-map-gl';


const Maps = ({ lat, lng, }) => {
    const locationCoord = useMemo( () => ({lat, lng}), [] )
    console.log(lat, lng);
    return <>
        <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: lng , // 16.62662018
          latitude: lat, // 49.2125578
          zoom: 14
        }}
        // style={{width: "100%", height: "100vh"}}
        mapStyle="https://api.maptiler.com/maps/basic/style.json?key=OTWx8gHIyfySiWNiYIIx"
        style={{width: "100%", height: " calc(45vh - 77px)"}}
        // mapStyle="https://api.maptiler.com/maps/streets/style.json?key=YOUR_MAPTILER_API_KEY_HERE"
      >
        <NavigationControl position="top-left" />
      </Map>
    </>
}

export const MapLocation = ({ lat, lng}) => {
    
    
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:import.meta.env.VITE_GOOGLE_MAP_API_KEY
  })
  if(!isLoaded) return <ThreeDots color="brown"/>
  return <Maps lat={lat} lng={lng}/> 
}

 
const EsutLocation = () => {
    const { location: { lat, lng} } = useGlobalContext()
  
    const [ local, setLocal ] = useState('ceelocal')
    const [loading, setLoading ] = useState(true)
    const [ esutFilesGalery, setEsutFileGalery ] = useState([])
    const navigate = useNavigate()

   async function getCEEGallery(){
   
    const { data } = await axios.get('/api/post/getAllpost')
  
    if(data.posts){
      let fileList = data.posts.map( post => {
        if(post.poster == 'CEE'){
          return post.fileList
        }
      }).filter( file => file !== undefined ).flat(1)
      setEsutFileGalery(fileList)
      setLoading(false)
      return
    }
   
  }

   useEffect( () => {
      getCEEGallery()
   },[])

      console.log(esutFilesGalery)


    const Local = ({ local }) => {
        if(local == 'ceelocal') return <MapLocation lat={49.2125578} lng={16.62662018}/>
        if(local == 'mylocal') return <MapLocation lat={lat} lng={lng}/>
        if(local == 'images') return <PhotoSlide fileList={esutFilesGalery}/>
    }
   return <>
        { loading ? <div className="centerLoad"> <ThreeCircles color="brown"/></div>  : <div className="Img_map">
        <nav> <i className="fa fa-arrow-left" onClick={() => navigate(-1)} aria-hidden></i> others</nav>
  
          <select className="localOption" onChange={(e) => setLocal(e.target.value)}>
              <option value="ceelocal">CEE local </option>
              <option value="mylocal">My local</option>
              <option value="images">CEE images</option>
          </select>
          <i className="fa fa-map-marker" aria-hidden></i>
           <Local local={local}/>
           <MoreLinks/>
        </div>  }
       
   </>               
}


export default EsutLocation