import React from "react";
import CalendarForm from "./CalendarForm";
import ApiProvider from "./calendarProvider";
import CalendarList from "./CalendarList";

class Calendar extends React.Component {
  state = {
    meetings: [],
  };
  api = new ApiProvider();

  render() {
    const { meetings } = this.state;
    return (
      <>
        <CalendarForm></CalendarForm>
        <CalendarList data={meetings}></CalendarList>
      </>
    );
  }
  componentDidMount = () => {
    return this.api.loadData().then((data) => {
      this.setState({
        meetings: data,
      });
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { data } = this.props;
    console.log(data);
  };
}
export default Calendar;
