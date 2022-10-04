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
        <CalendarForm updateData={this.updateData}></CalendarForm>
        <CalendarList
          onClick={this.removeMeeting}
          data={meetings}
        ></CalendarList>
      </>
    );
  }
  componentDidMount = () => {
    this.updateData();
  };
  updateData = () => {
    return this.api.loadData().then((data) => {
      this.setState({
        meetings: data,
      });
    });
  };
  removeMeeting = (id) => {
    const { meetings } = this.state;
    const currMeetings = meetings.filter((meeting) => meeting.id !== id);
    this.setState({
      meetings: currMeetings,
    });
    return this.api.removeData(id);
  };
}
export default Calendar;
