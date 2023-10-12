import { Bar, Doughnut, PolarArea, Scatter, Bubble, Pie, Line, Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useRef, useState, useEffect } from "react";

export const BarChart = ({ studentData }) => {
  const [dimention, setDimention] = useState({ height: 0, width: 0 });
  const graphDataEle = useRef();
  useEffect(() => {
    setDimention({
      height: graphDataEle.current.clientHeight,
      width: graphDataEle.current.clientWidth,
    });
  }, []);

  return (
    <div className="graphData" ref={graphDataEle}>
      <Bar
        data={{
          labels: ["boys", "girls", ],
            datasets: [
            {
              label: "boys",
              data: studentData.BoysData,
              backgroundColor:['rgba(75,192,192, 1)']
            },
            {
              label: "girls",
              data: studentData.GirlsData,
              backgroundColor:['#2a71d0']
            },
          ],
        }
      
      }
        
        height={dimention.height}
        width={dimention.width}
      />
    </div>
  );
};

export const BoysVsGirlsGraph = ({ studentData }) => {
  const [dimention, setDimention] = useState({ height: 0, width: 0 });
  const graphDataEle = useRef();
  useEffect(() => {
    setDimention({
      height: graphDataEle.current.clientHeight,
      width: graphDataEle.current.clientWidth,
    });
  }, []);
  return  (
    <div className="studenTable" ref={graphDataEle}>
      <Bubble
        data={

          {
          labels: ["boys", "girls"],
          datasets: [
            {
              label: "boys",
              data: studentData.BoysData,
               backgroundColor:['rgba(75,192,192, 1)']
            },
            {
              label: "girls",
              data: studentData.GirlsData,
              backgroundColor:['#2a71d0'],
            },
          ],
        }

        
      
      }
        height={dimention.height}
        width={dimention.width}
      />
    </div>
  );
}

export const OnlineGraph = ({ studentData }) => {
  const [dimention, setDimention] = useState({ height: 0, width: 0 });
  const graphDataEle = useRef();
  useEffect(() => {
    setDimention({
      height: graphDataEle.current.clientHeight,
      width: graphDataEle.current.clientWidth,
    });
  }, []);
  return  (
    <div className="onlineGraph" ref={graphDataEle}>
      <Line
        data={{
          labels: ["boys", "girls", ],
            datasets: [
            {
              label: "boys",
              data: studentData.BoysData,
              backgroundColor:['rgba(75,192,192, 1)']
            },
            {
              label: "girls",
              data: studentData.GirlsData,
              backgroundColor:['#2a71d0']
            },
          ],
        }
      
      }
        height={dimention.height}
        width={dimention.width}
      />
    </div>
  );
}

