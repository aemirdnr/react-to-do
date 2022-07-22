import "./Tasks.sass";
import Task from "../Task/Task";

function Tasks() {
  return (
    <div className="container p-4">
      <div className="task__create p-2 mx-auto w-75">
        <div className="task__input p-1 mx-auto">
          <input
            onkeyup="createTask()"
            className="px-2"
            type="text"
            placeholder="Add task.."
          />
        </div>
      </div>
      <div className="p-4">
        <Task />
      </div>
    </div>
  );
}

export default Tasks;
