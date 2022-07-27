import "./Task.sass";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

function Task(task) {
  const [isFinish, setFinish] = useState(task.isDone);
  const [isDeleted, setDelete] = useState(false);

  const finishTask = () => {
    isFinish ? setFinish(false) : setFinish(true);
  };

  const removeTask = () => {
    setDelete(true);
  };

  return !isDeleted ? (
    <div
      className={
        isFinish
          ? "task task-done mx-auto my-3 p-3 gap-3"
          : "task mx-auto my-3 p-3 gap-3"
      }
    >
      <p onClick={finishTask} className="task__text m-0">
        {task.text}
      </p>
      <i onClick={removeTask} className="task__icon">
        <FaTrash />
      </i>
    </div>
  ) : (
    ""
  );
}

export default Task;
