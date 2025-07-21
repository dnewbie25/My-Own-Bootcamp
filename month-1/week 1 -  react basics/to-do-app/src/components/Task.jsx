import { useRef } from "react";
import pencilIcon from "../assets/pencil.svg";
import deleteIcon from "../assets/delete.svg";

export function Task(props) {
  const editableRef = useRef();
  /**
   * Updates the task with the new value from the content editable element.
   * Retrieves the current text content from the editable ref and calls the
   * edit function passed in props with the updated task value.
   */

  function handleEdit() {
    const newTaskValue = editableRef.current.textContent;
    props.edit({ ...props, task: newTaskValue });
  }
  return (
    <div className="tasks__elements">
      <p ref={editableRef} contentEditable={props.editable}>
        {props.task || " "}
        <span>
          <input
            type="image"
            src={pencilIcon}
            alt="edit button"
            onClick={handleEdit}
          />
          <input
            type="image"
            src={deleteIcon}
            alt="delete button"
            onClick={props.delete}
          />
        </span>
      </p>
    </div>
  );
}
