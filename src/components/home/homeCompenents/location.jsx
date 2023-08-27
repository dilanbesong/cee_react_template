import MoreLinks from "./moreLinks"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"



const EsutLocation = () => {
    const [ local, setLocal ] = useState('ceelocal')
    const navigate = useNavigate()
    const Local = ({ local }) => {
        if(local == 'ceelocal') return <div id="esut_map"> esut  cee local</div>
        if(local == 'mylocal') return <div id="esut_map"> my own local</div>
        if(local == 'images') return <div id="esut_map">esut cee images</div>
    }
   return <>
    {/* <nav className="navLocal"> <i className="fa fa-arrow-left"></i></nav> */}
       <div className="Img_map">
        <nav> <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i></nav>
  
          <select className="localOption" name="" id="" onChange={(e) => setLocal(e.target.value)}>
              <option value="ceelocal">CEE local </option>
              <option value="mylocal">My local</option>
              <option value="images">CEE images</option>
          </select>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
           <Local local={local}/>



           {/* <span><i className="fa fa-photo" aria-hidden="true"></i> CEE Gallery</span>
           <section className="imageContent">
             <button className="btn_left"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
             <button className="btn_right"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
               <div className="imgSlider">
                   <article className="fileContainer">1</article>
                   <article className="fileContainer">1</article>
                   <article className="fileContainer">1</article>
               </div>
           </section> */}


           <MoreLinks/>
        </div> 
   </>               
}


export default EsutLocation