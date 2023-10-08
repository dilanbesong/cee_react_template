import { useRef, useState } from "react";
import { SoundPlayer } from "./filegrid";

const PhotoSlide = ({ fileList }) => {
  const sliderEle = useRef();
  const fileCardEle = useRef();

  let fileIndex = 0
 
  const goBack = () => {
    const fileCardWidth = fileCardEle.current.clientWidth;
    
      if (fileIndex <= 0) {
           fileIndex = fileList.length - 1
           return
      }
        fileIndex -= 1;

    sliderEle.current.style.transform = `translateX(${
     - fileCardWidth * fileIndex
    }px)`;
    sliderEle.current.style.transition = '500ms'
  };
  const goFoward = () => {
    const fileCardWidth = fileCardEle.current.clientWidth;
    
      if (fileIndex >= fileList.length - 1) {
           fileIndex = 0
      }
       fileIndex += 1
    
    sliderEle.current.style.transform = `translateX(${
      -fileCardWidth * fileIndex
    }px)`;
    sliderEle.current.style.transition = '500ms'
  };
  return (
    <>
      {fileList.length == 0 ? (
        <section>No files to show</section>
      ) : (
        <>
          <span>
            <i className="fa fa-photo" aria-hidden="true"></i> CEE Gallery
          </span>
          <section className="imageContent">
            <button className="btn_left" onClick={goBack}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button className="btn_right" onClick={goFoward}>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
            <div className="imgSlider" ref={sliderEle}>
              {fileList.map((file, i) => {
                if (file.includes("data:image")) {
                  return (
                    <article  key={i} className="fileContainer" ref={fileCardEle}>
                      <img src={file} alt="" />
                    </article>
                  );
                } else if (file.includes("data:audio")) {
                  return (
                    <article key={i} className="fileContainer" ref={fileCardEle}>
                       <SoundPlayer src={file}/>
                    </article>
                  );
                }
                return (
                  <article key={i} className="fileContainer" ref={fileCardEle}>
                    <video src={file} controls></video>
                  </article>
                );
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
};
export default PhotoSlide;
