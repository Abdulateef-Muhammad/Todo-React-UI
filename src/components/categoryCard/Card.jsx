import ProgressBar from "./ProgressBar";
import Text from "../Text";
const Card = (props) => {
  return (
    <div className="pr-2">
      <div className="p-4 rounded-xl w-48 shadow-md bg-white basis-2/3 shrink-0 grow-0 mr-2">
        <div className="">
          <Text text={props.numOfTasks} classes="text-gray-400 lowercase" />
        </div>
        <div className="">
          <Text
            text={props.catName}
            classes="text-gray-800 font-bold capitalize text-xl"
          />
        </div>
        <div className="py-2">
          <ProgressBar progress={props.progress} />
        </div>
      </div>
    </div>
  );
};

export default Card;
