

const PhotoSlide = () => {
     return <>
         <span><i className="fa fa-photo" aria-hidden="true"></i> CEE Gallery</span>
           <section className="imageContent">
             <button className="btn_left"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
             <button className="btn_right"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
               <div className="imgSlider">
                   <article className="fileContainer">1</article>
                   <article className="fileContainer">1</article>
                   <article className="fileContainer">1</article>
               </div>
           </section>
     </>             
}
export default PhotoSlide