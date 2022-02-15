import Button from "../button/Button";
import { IoTodayOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const AddTask = ({closeModal}) => {
  return (
    <section className="relative md:h-[90vh] h-[100vh] p-2 flex flex-col">
      <div className="p-4 flex self-end flex-1">
        <Button
          Icon={IoMdClose}
          buttonClasses="shadow-none border-2 h-10 w-10"
          iconClasses="text-gray-500 text-xl"
          handleClick={closeModal}
        />
      </div>
      <div className="p-4 flex-[3]">
        <div className="pb-4">
          <input
            type="text"
            placeholder="Enter a new task"
            className="bg-transparent p-2 caret-teal-500 outline-none w-full"
          />
        </div>
        <div className="">
          <Button
            buttonText="Today"
            Icon={IoTodayOutline}
            buttonClasses="bg-transparent shadow-none border-2 h-10 px-2 py-0"
            textClasses="text-gray-500 text-md p-2"
            iconClasses="text-gray-500 text-lg mr-2"
          />
        </div>
      </div>
      <div className="absolute right-[20px] bottom-[3%]">
        <Button
          buttonText="New Task"
          Icon={IoIosArrowUp}
          iconClasses="text-xl text-white"
          buttonClasses="h-10 bg-blue-500 shadow-lg shadow-blue-300"
        />
      </div>
    </section>
  );
};

export default AddTask;
