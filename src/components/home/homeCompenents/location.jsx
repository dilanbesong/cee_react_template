import MoreLinks from "./moreLinks"

const EsutLocation = () => {
   return <>
    {/* <nav className="navLocal"> <i className="fa fa-arrow-left"></i></nav> */}
       <div className="Img_map">
  
          <select name="" id="">
              <option value="cee">CEE local </option>
              <option value="user">My local</option>
              <option value="user">CEE images</option>
          </select>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
           <div id="esut_map">esut map</div>
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