import React from 'react';

const reklamStilus = {
    backgroundColor: "red",
    height: "2em",
    textAlign:"center",
    lineHeight: "2em",
    fontSize: "1.5em",
    color:"white",
};

const Reklam = () => {
  return <div style={reklamStilus}>
      Februári AKCIÓ!! Star Wars figurákra 10%!! Kedvezmény!!
  </div>;
};

export default Reklam;
