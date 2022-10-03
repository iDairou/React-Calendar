import React from "react";
class CalendarForm extends React.Component {
  state = {
    value: "",
  };
  render() {
    return (
      <form className="panel__form">
        <label>
          First name: <input type={"text"} name="firstname"></input>
        </label>
        <label>
          Last name: <input type={"text"} name="lastname"></input>{" "}
        </label>
        <label>
          Last name: <input type={"email"} name="lastname"></input>{" "}
        </label>
        <label>
            <input type={date}></input>
        </label>
      </form>
    );
  }
}
export default CalendarForm;
