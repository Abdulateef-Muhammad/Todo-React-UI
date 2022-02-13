import colors from 'tailwindcss/colors';
import { FiUser } from "react-icons/fi";
const Avatar = ({ pct, r = 38, imgSrc }) => {
  const wh = 90;
  const cx = 155;
  const cy = 45;
  const circ = 2 * Math.PI * r;
  const strokePctOffset = circ - circ * (pct / 100); // or (circ * (100 - pct))/100
  return (
    <div>
      <a href="#">
        <svg width={wh} height={wh} className="inline-block">
          <foreignObject className="w-full h-full">
            <img
              className="rounded-full absolute top-1/2 left-1/2 w-16 h-16 -translate-y-1/2 -translate-x-1/2"
              src={imgSrc}
              alt=""
            />
          </foreignObject>
          <g transform={`rotate(-90 ${"100 100"})`}>
            <circle
              r={r}
              cx={cx}
              cy={cy}
              fill="transparent"
              stroke={"#13162a"}
              strokeWidth="3px"
              strokeDasharray={circ}
            ></circle>
            <circle
              r={r}
              cx={cx}
              cy={cy}
              fill="transparent"
              stroke="#db2777"
              strokeWidth="3px"
              strokeDasharray={circ}
              strokeDashoffset={strokePctOffset}
              strokeLinecap="round"
            ></circle>
          </g>
        </svg>
      </a>
    </div>
  );
};

const Image = () => {
  return (
    <svg width="200" height="200" className="inline-block rounded-full">
      <image
        style={{ width: "100%", height: "auto" }}
        href="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        clip-path="url(#circleView)"
      />
    </svg>
  );
};

export default Avatar;
