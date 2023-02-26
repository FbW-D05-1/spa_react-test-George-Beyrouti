import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Form = () => {
  const user = useContext(UserContext);
  return (
    <div className="Form">
      <form>
        <label>
          Name:{" "}
          <input
            className="input-item"
            type="text"
            onChange={(e) => user.setName(e.target.value)}
          />
        </label>
        <label>
          Location:{" "}
          <input
            className="input-item"
            type="text"
            onChange={(e) => user.setLocation(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
