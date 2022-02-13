// import './../../assets/css/progressbar.css'

import { useEffect, useState } from "react";

const ProgressBar = (props) => {
  const [progressValue, setProgressValue] = useState(0);
  const increaseTo = () => {
    setProgressValue(props.progress);
  };

  useEffect(increaseTo, []);

  return (
    <div className="container">
      <div id="bar" className="bg-gray-200 h-1 w-full rounded-full">
        <div
          id="progress"
          style={{ width: progressValue + "%", transition: "width 1s ease 1s" }}
          className={`${progressValue < 100? "after:content-[''] after:absolute after:-top-full after:right-0 after:border-4 after:border-t-transparent after:border-l-transparent after:border-r-blue-500 after:border-b-blue-500": ''} bg-blue-500 h-1 rounded-full  drop-shadow-md`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
