function NewTask({ newTask, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={newTask.title || ""}
        onChange={handleChange}
        placeholder="Enter New Task"
      />
      <input type="date" name="date" value={newTask.date || ""} onChange={handleChange } />
      {!newTask.title ? null : (
        <>
          <textarea
            name="description"
            value={newTask.description || ""}
            onChange={handleChange}
            placeholder="task description"
          />
          <button type="submit">Add Task</button>
        </>
      )}
    </form>
  );
}

export default NewTask;
