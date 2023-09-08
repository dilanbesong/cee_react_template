// import WaveSurfer from "wavesurfer.js";
import { AudioPlayer } from 'react-audio-player-component';

import { useRef,  useState } from "react";

function showFileByType (file, waveFormContainer, i) {
  
  
  if (file.includes("data:audio")) {
      
    return (
      <div ref={waveFormContainer} key={i} >
         <AudioPlayer 
         
      src={file}
      minimal={false}
      width={250}
      trackHeight={75}
      barWidth={1}
      gap={1}

      visualise={true}
      backgroundColor="#FFF8DE"
      barColor="#C1D0B5"
      barPlayedColor="#99A98F"

      skipDuration={2}
      showLoopOption={true}
      showVolumeControl={true}

      // seekBarColor="purple"
      // volumeControlColor="blue"
      // hideSeekBar={true}
      // hideTrackKnobWhenPlaying={true}
    />
      </div>
    );
  }
  if (file.includes("data:video")) {
    return (
      <div key={i}>
        <video src={file} controls></video>
      </div>
    );
  }

  if (file.includes("data:image")) {
    return (
      <div key={i}>
        {" "}
        <img src={file} alt="" />
      </div>
    );
  }
  return;
};

const Filegrid = ({ fileList }) => {
  
  const waveFormContainer = useRef(null)
  // useEffect(() => {
  //   if(waveFormContainer.current) {
  //     const wavesurfer = WaveSurfer.create({
  //     container:waveFormContainer.current,
  //     waveColor: "#4F4A85",
  //     progressColor: "#383351",
  //     url:'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'
  //     });
  //     setSuffer(wavesurfer)
  //   }
    
  // },[]);
  
  if (fileList.length == 0) return;

  if (fileList.length == 1) {
    return (
      <div className="fileGrid filegrid_1">
        {fileList.map((file, i) => showFileByType(file, waveFormContainer, i))}
      </div>
    );
  }

  if (fileList.length == 2 || fileList.length == 4) {
    return (
      <div className="fileGrid ">
        {fileList.map((file, i) => showFileByType(file, waveFormContainer, i))}
      </div>
    );
  }

  if (fileList.length == 3) {
    return (
      <div className="fileGrid filegrid_3">
        {fileList.map((file, i) => showFileByType(file, waveFormContainer, i))}
      </div>
    );
  }

  return (
    <div className="fileGrid filegrid_nth" data-morefile={+fileList.length - 4}>
      {fileList.slice(0, 4).map((file,i) => showFileByType(file, waveFormContainer, i))}
    </div>
  );
};

export default Filegrid;
