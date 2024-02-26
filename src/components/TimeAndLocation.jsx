import React from "react";

const TimeAndLocation = ({ city, time }) => {
  return (
    <div className="TimeAndLocation text-center sm:p-12">
      <div className="location text-8xl font-semiboldbold mb-2">{city}</div>
      <div className="time text-3xl">
        {time}
      </div>    
    </div>
  );
};

export default TimeAndLocation;
