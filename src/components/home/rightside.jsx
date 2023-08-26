import MoreLinks from "./homeCompenents/moreLinks"

const RightSide = () => {
    return <>
          <section className="right_side" id="right">
        <span><i className="fa fa-map-marker" aria-hidden="true"></i> CEE Local</span>
        <div id="Schoolmap">
           <img src="./images/map.jpg" alt=""/>
        </div>
         {/* <span><i className="fa fa-photo" aria-hidden="true"></i> CEE Gallery</span>
         <section className="imageContent">
             <button className="btn_left"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
             <button className="btn_right"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
               <div className="imgSlider">
                   <article className="fileContainer">
                        <img src="./images/img1.jpg" alt=""/>
                   </article>
                   <article className="fileContainer">2</article>
                   <article className="fileContainer">3</article>
               </div>

           </section> */}

           <MoreLinks/>
           </section>
    </>              
}

export default RightSide