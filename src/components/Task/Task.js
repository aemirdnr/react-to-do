import "./Task.sass";

const isFinished = false;

function Task() {
  return (
    <>
      {isFinished ? (
        <div className="task w-75 mx-auto my-3 p-3 gap-3">
          <p className="task__text m-0">Task Test 1</p>
        </div>
      ) : (
        <div className="task w-75 mx-auto my-3 p-3 gap-3">
          <p className="task__text m-0">Task Test 2</p>
        </div>
      )}
    </>
  );
}

export default Task;
