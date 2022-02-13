import "../../assets/css/linearGraph.css";
import C3Chart from "react-c3js";
import "c3/c3.css";

const LienarGraph = () => {
  const chart = {
    data: {
      columns: [["data1", 30, 200, 100, 400, 150, 250, 200, 200]],
      type: "spline",
      colors: {
        data1: '#2643c4',
      }
    },
    tooltip: {
      show: false,
    },
    point: {
      show: false,
    },
    axis: {
      x: {
        show: false,
      },
      y: {
        show: false,
      },
      
    },
    legend: {
      hide: true,
    },
    line: {
      connectNull: true,
    },
    size: {
        height: '70',
        width: '150'
    },
    transition: {
      duration: 1000
    }
  };
  return (
    <figure id="chart" className="transition-all duration-1000 ease-linear">
      <C3Chart {...chart}/>
    </figure>
  );
};

export default LienarGraph;
