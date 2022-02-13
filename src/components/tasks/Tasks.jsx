import Task from "./Task";
import tasksInfo from "./tasksInfo";

const Tasks = () => {
    return (
        <div>
            {tasksInfo.map((task) => {
                return (
                    <Task taskText={task.taskText} checked={task.checked} deleted={task.deleted} key={task.id} id={task.id}/>
                )
            })}
        </div>
    )
};

export default Tasks;
