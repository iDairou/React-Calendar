import React from "react";

class CalendarList extends React.Component {
  render() {
    const { data, onClick } = this.props;
    if (data.length > 0) {
      return (
        <ul className="meeting">
          {data.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.firstName}</p>
                <p>{item.lastName}</p>
                <p>{item.email}</p>
                <p>{item.date}</p>
                <p>{item.time}</p>
                <button onClick={() => onClick(item.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      );
    }
    return <h1>No meetings this day</h1>;
  }
}
export default CalendarList;
