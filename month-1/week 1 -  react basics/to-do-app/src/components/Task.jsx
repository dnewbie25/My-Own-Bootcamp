import pencilIcon from "../assets/pencil.svg";
import deleteIcon from "../assets/delete.svg";

export function Task(props) {
  return (
    <div className="tasks__elements">
      <p>
        {props.task || " "}
        <span>
          <input
            type="image"
            src={pencilIcon}
            alt="edit button"
            onClick={props.edit}
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
