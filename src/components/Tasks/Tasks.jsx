import "./Tasks.sass";
import Task from "../Task/Task";
import { useState } from "react";

function Tasks() {
  const [todoList, setList] = useState([{ task: "", isDone: false }]);

  const createTask = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setList([...todoList, { task: e.target.value, isDone: false }]);
    }
  };

  return (
    <div className="container p-4">
      <div className="task__create p-2 mx-auto w-75">
        <div className="task__input p-1 mx-auto">
          <input
            onKeyUp={createTask}
            className="px-2 w-100"
            type="text"
            placeholder="Add task.."
          />
        </div>
      </div>
      <div className="p-4">
        {todoList.map((todo, index) =>
          todo.task !== "" ? (
            <Task key={index} text={todo.task} isDone={todo.isDone} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Tasks;
