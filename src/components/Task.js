const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <i
          class="fa-regular fa-trash-can"
          onClick={() => onDelete(task.id)}
        ></i>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
// state gets passed down, actions get passed up
export default Task;
