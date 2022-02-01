const CaptainMarvel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="kep">
            <img
              src="kepek/Amerika.jfif"
              alt="tészta"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="leiras">
            <h1>Amerika Kapitány</h1>
            <h4>Részletek</h4>
            <ul>
              <li>első</li>
              <li>második</li>
              <li>harmadik</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h1>Hasonló termékek</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="elemtarto">
            <img src="kepek/Thor.jfif" alt="" />
            <h3>Thor</h3>
            <p>2000Ft</p>
            {/* <input type="button" className="btn btn-primary" value="Kosárba" /> */}
          </div>
        </div>
        <div className="col-sm-3">
          <img src="kepek/Thor.jfif" alt="" />
        </div>
        <div className="col-sm-3">
          <img src="kepek/Thor.jfif" alt="" />
        </div>
        <div className="col-sm-3">
          <img src="kepek/Thor.jfif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CaptainMarvel;
