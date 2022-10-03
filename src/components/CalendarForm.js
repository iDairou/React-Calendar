import React from "react";
class CalendarForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
  };
  render() {
    const { firstName, lastName, email, date, time } = this.state;
    console.log(this.state);
    return (
      <form className="panel__form" onSubmit={this.handleSubmit}>
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
            type="temail"
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
  handleSubmit = (e) => {
    e.preventDefault();
  };
}
export default CalendarForm;
