import { useState } from "react";
import { FiCheck, FiTrash } from "react-icons/fi";
// import './../../assets/css/task.css'

const Task = ({taskText, checked, deleted, id}) => {

    const [isChecked, setIsChecked] = useState(checked);
    const handleChange = ()=> {
        setIsChecked(!isChecked);
    }

  return (
    <div className="relative">
      <div
        className="p-2 relative bg-white rounded-lg m-1 h-auto w-full z-10"
      >
        <input
          hidden
          checked={isChecked}
          onChange={handleChange}
          id={id}
          type="checkbox"
        ></input>
        <label className="flex" htmlFor={id} >
          <span className={`${isChecked? 'transition bg-[#adbaeb] border-[#adbaeb]': ''} rounded-full border-2 w-5 h-5 flex-none m-1`}>
            <FiCheck className={`${!isChecked? 'hidden':''} text-white `}/>
          </span>
          <span className={`${isChecked? 'line-through decoration-1': ''} grow m-1`}>
            {taskText}
          </span>
        </label>
      </div>
      <div className="flex p-4 w-full absolute top-0 left-0 z-0">
        <span className="flex-1">
            <FiTrash className="h-auto w-5"/>
        </span>
        <span className="flex-grow">
          The task was deleted!
        </span>
        <span className="flex-1">
          <input
            type="submit"
            value="UNDO"
            className="px-2 py-1 rounded-full text-sm"
          />
        </span>
      </div>
    </div>
  );
};

export default Task;
