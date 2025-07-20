import pencilIcon from "../assets/pencil.svg";
import deleteIcon from "../assets/delete.svg";

export function Task(props) {
  return (
    <div className="tasks__elements">
      <p>
        {props.task || " "}
        <span>
          <img src={pencilIcon} alt="edit button" />
          <img src={deleteIcon} alt="delete button" />
        </span>
      </p>
    </div>
  );
}
