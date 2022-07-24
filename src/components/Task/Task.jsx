import "./Task.sass";
import { FaTrash } from "react-icons/fa";

function Task(task) {
  let isFinish = task.isDone;

  const finishTask = () => {};

  const removeTask = () => {};

  return (
    <>
      {
        <div
          className={
            isFinish
              ? "task task-done w-75 mx-auto my-3 p-3 gap-3"
              : "task w-75 mx-auto my-3 p-3 gap-3"
          }
        >
          <p onClick={finishTask} className="task__text m-0">
            {task.text}
          </p>
          <i onClick={removeTask} className="task__icon">
            <FaTrash />
          </i>
        </div>
      }
    </>
  );
}

export default Task;
