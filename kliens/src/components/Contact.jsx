import React from "react";

const contactStilus = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img id="gelada" src="kepek Marvel/Gelada.png" />
        </div>
        <div className="col-sm-4" style={contactStilus}>
          <p style={{ fontSize: "3em" }}>Gelada Shop</p>
        </div>
        <div className="col-sm-4" style={contactStilus}>
          <input type="text" name="" id="" />
          <input type="button" value="Keresés" style={{ marginLeft: "10px" }} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
