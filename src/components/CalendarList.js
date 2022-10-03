import React from "react";

class CalendarList extends React.Component {
  render() {
    const { data } = this.props;
    return <div>{data}</div>;
  }
}
export default CalendarList