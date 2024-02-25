import React, {useState, useEffect} from "react";
import dateFormat from "dateformat";
const TimeAndLocation = ({ city }) => {
  const renderDate = () => {
    let now = new Date();
    return dateFormat(now, "dddd, mmmm dS, h:MM TT")
  }
  return (
    <div className="TimeAndLocation shadow-xl text-center">
      <div className="location text-8xl font-semiboldbold">{city}</div>
      <div className="time text-8xl">
        {renderDate()}
      </div>    
    </div>
  );
};

export default TimeAndLocation;
