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
    const { onSubmit } = this.props;
    return (
      <form className="panel__form" onSubmit={this.setNewMeeting}>
        <label>
          First name:{" "}
          <input
            onChange={this.handleChange}
            value={firstName}
            type="text"
            name="firstName"
            required
          ></input>
        </label>
        <label>
          Last name:{" "}
          <input
            onChange={this.handleChange}
            value={lastName}
            type="text"
            name="lastName"
            required
          ></input>{" "}
        </label>
        <label>
          Email:{" "}
          <input
            onChange={this.handleChange}
            value={email}
            type="email"
            name="email"
            required
          ></input>{" "}
        </label>
        <label>
          Date:{" "}
          <input
            onChange={this.handleChange}
            value={date}
            type="date"
            name="date"
            required
          ></input>{" "}
        </label>
        <label>
          Time:{" "}
          <input
            onChange={this.handleChange}
            value={time}
            type="time"
            name="time"
            required
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
  setNewMeeting = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, date, time } = this.state;
    const newMeeting = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      date: date,
      time: time,
    };
    this.sendNewMeetingToJSON(newMeeting);
  };
  sendNewMeetingToJSON = (data) => {
    return this.api.addData(data).then((resp) => console.log(resp));
  };
}
export default CalendarForm;
