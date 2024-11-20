function TaskList({ allTasks, handleDeleteTask }) {
  return (
    <ul>
      {allTasks.map(({ title,date,  description, id }) => (
        <li key={id}>
          <div>
            <h2>{title}</h2>
            <button onClick={() => handleDeleteTask(id)}>X</button>
          </div>
          {!description ? null : <p>{description}</p>}
          {!date ? null : <p>{date}</p>}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
