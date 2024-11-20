import { useState } from "react";

function TaskList({ allTasks, handleDeleteTask }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Trigger the popup when "X" is clicked
  const confirmDeleteTask = (id) => {
    setTaskToDelete(id);
    setShowConfirm(true);
  };

  // Proceed with deletion
  const handleConfirmDelete = () => {
    handleDeleteTask(taskToDelete);
    setShowConfirm(false); // Hide the popup
    setTaskToDelete(null); // Reset the state
  };

  // Cancel the deletion
  const handleCancelDelete = () => {
    setShowConfirm(false); // Hide the popup
    setTaskToDelete(null); // Reset the state
  };
  return (
    <>
      <ul>
        {allTasks.map(({ title, date, description, id }) => (
          <li key={id}>
            <div>
              <h2>{title}</h2>
              <button onClick={() => confirmDeleteTask(id)}>X</button>
            </div>
            {!description ? null : <p>{description}</p>}
            {!date ? null : <p>{date}</p>}
          </li>
        ))}
      </ul>

      {showConfirm && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to delete this task?</p>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskList;
