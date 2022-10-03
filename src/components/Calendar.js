import React from "react";
import CalendarForm from "./CalendarForm";

class Calender extends React.Component {
  state = {
    meetings: [],
  };
  render() {
   return <>
      <CalendarForm></CalendarForm>
    </>;
  }
}
export default Calender;
