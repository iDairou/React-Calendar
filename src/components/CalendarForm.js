import React from "react";
import CalendarProvider from "./calendarProvider";
class CalendarForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
  };
  constructor(props) {
    super(props);
    this.api = new CalendarProvider();
  }
  render() {
    const { firstName, lastName, email, date, time } = this.state;
    return (
      <form className="panel__form" onSubmit={this.setNewMeeting}>
        <label>
          First name:{" "}
          <input
            onChange={this.handleChange}
            value={firstName}
            type="text"
            name="firstName"
          ></input>
        </label>
        <label>
          Last name:{" "}
          <input
            onChange={this.handleChange}
            value={lastName}
            type="text"
            name="lastName"
          ></input>{" "}
        </label>
        <label>
          Email:{" "}
          <input
            onChange={this.handleChange}
            value={email}
            type="email"
            name="email"
          ></input>{" "}
        </label>
        <label>
          Date:{" "}
          <input
            onChange={this.handleChange}
            value={date}
            type="date"
            name="date"
          ></input>{" "}
        </label>
        <label>
          Time:{" "}
          <input
            onChange={this.handleChange}
            value={time}
            type="time"
            name="time"
          ></input>{" "}
        </label>
        <input type="submit" value="Add meeting!" />
      </form>
    );
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };
  setNewMeeting = async (e) => {
    e.preventDefault();
    const { updateData } = this.props;

    const { firstName, lastName, email, date, time } = this.state;
    const newMeeting = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      date: date,
      time: time,
    };
    await this.sendNewMeetingToJSON(newMeeting);
    updateData();
  };
  sendNewMeetingToJSON = (data) => {
    return this.api.addData(data).then((resp) => console.log(resp));
  };
}
export default CalendarForm;
