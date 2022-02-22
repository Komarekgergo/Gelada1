import { Link } from "react-router-dom";

const Fololdal = () => {
  const kepStilus = {
    display: "inline-block",
    width: "80vw",
    height: "100px",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Link to="/marvel">
            <img
              src="kepek Marvel/Marvel poster.jpg"
              alt="Amerika Kapitany"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/dc">
            <img
              src="kepek Dc/DC logo.jpg"
              alt="DC Univerzum"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/hpotter">
            <img
              src="kepek HP/HP logo.jpg"
              alt="Harry Potter filmek"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/SW">
            <img
              src="kepek SW/starwars logo.jpg"
              alt="Star Wars univerzum"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/got">
            <img
              src="kepek GoT/GoT logo.jpg"
              alt="Game of Thrones"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/witcher">
            <img
              src="kepek witcher/witcher logo.jpg"
              alt="The Witcher"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/rm">
            <img
              src="kepek RM/RM logo.jpg"
              alt="RM"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/disney">
            <img
              src="kepek DY/Disney logo.jpg"
              alt="Disney"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/assassin">
            <img
              src="kepek AS/assassin logo.jpg"
              alt="Disney"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/jurassic">
            <img
              src="kepek JP/jurassic logo.jpg"
              alt="Jurassic Park"
              className="img-thumbnail"
            />
          </Link>
        </div>


        <div className="col-sm-4">
          <Link to="/szulejman">
            <img
              src="kepek Sul/szulejman logo.jpg"
              alt="Szulejmán"
              className="img-thumbnail"
            />
          </Link>
        </div>

        <div className="col-sm-4">
          <Link to="/stranger">
            <img
              src="kepek Str/stranger logo.jpg"
              alt="Stranger Things"
              className="img-thumbnail"
            />
          </Link>
        </div>

      </div>
    </div>
    // <div className="container">
    //   <div id="demo" className="carousel slide" data-ride="carousel">
    //     <ul className="carousel-indicators">
    //       <li data-target="#demo" data-slide-to="0" className="active"></li>
    //       <li data-target="#demo" data-slide-to="1"></li>
    //       <li data-target="#demo" data-slide-to="2"></li>
    //     </ul>

    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img
    //           src="kepek/Marvel-logo.jpg"
    //           alt="Marvel logo"
    //           className="d-block w-100"
    //         />
    //         <div className="carousel-caption">
    //           <h1>Marvel</h1>
    //         </div>
    //       </div>

    //       <div className="carousel-item w-50">
    //         <img
    //           src="kepek/HarryPotter-logo.jpg"
    //           alt="Harry Potter logo"
    //           className="d-block w-100"
    //         />
    //         <div className="carousel-caption">
    //           <h1>Harry Potter</h1>
    //         </div>
    //       </div>

    //       <div className="carousel-item">
    //         <img
    //           src="kepek/StarWars-logo.jpg"
    //           alt="Star Wars logo"
    //           className="d-block w-100 h-25"
    //         />
    //         <div className="carousel-caption">
    //           <h1>Star Wars</h1>
    //         </div>
    //       </div>
    //     </div>

    //     <a className="carousel-control-prev" href="#demo" data-slide="prev">
    //       <span className="carousel-control-prev-icon"></span>
    //     </a>
    //     <a className="carousel-control-next" href="#demo" data-slide="next">
    //       <span className="carousel-control-next-icon"></span>
    //     </a>
    //   </div>
    // </div>
  );
};

export default Fololdal;
