import LienarGraph from "./LinearGraph";
import Text from "../Text";

const TotalProgress = () => {
  return (
    <div>
      <div className="pb-1">
        <LienarGraph />
      </div>
      <div>
        <Text text="Good" classes="text-gray-400" />
        <Text text="Consistency" classes="text-white text-xl" />
      </div>
    </div>
  );
};

export default TotalProgress;
