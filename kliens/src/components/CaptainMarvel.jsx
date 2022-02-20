import "../Stilus.css";

const CaptainMarvel = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <div className="kep">
            <img
              src="kepek Marvel/Amerika.jpg"
              alt="Marvel"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="col-sm-7">
          <div className="leiras">
            <span className="kicsi">-47%</span>
            <span className="nagy">Készleten</span>
            <h1>Amerika Kapitány</h1>
            <h4>Részletek</h4>
            <ul>
              <li>Műanyag</li>
              <li>Gyűjtői darab</li>
              <li>10cm</li>
              <li>2500ft</li>
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
            <img src="kepek Marvel/Thor.jpg" alt="" />
            <h3>Thor</h3>
            <p>2000Ft</p>
            {/* <input type="button" className="btn btn-primary" value="Kosárba" /> */}
          </div>
        </div>
        <div className="col-sm-3">
          <img src="kepek Marvel/Spider.jpg" alt="" />
          <h3>Spiderman</h3>
          <p>2000Ft</p>
        </div>
        <div className="col-sm-3">
          <img src="kepek Marvel/Parduc.jpg" alt="" />
          <h3>Thor</h3>
          <p>3500Ft</p>
        </div>
        <div className="col-sm-3">
          <img src="kepek Marvel/Tanosz.jpg" alt="" />
          <h3>Thanos</h3>
          <p>2000Ft</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainMarvel;
