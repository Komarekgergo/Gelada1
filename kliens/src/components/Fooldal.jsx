const Aloldal = () => {
    return (
        <div className="container">

        <div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='kepek/Marvel-logo.jpg' alt="Marvel logo" width="1100" height="500" />
      <div className="carousel-caption">
      <h1>Marvel</h1>

      </div>
    </div>

     <div className="carousel-item">
      <img src="kepek/HarryPotter-logo.jpg" alt="Harry Potter logo" width="1100" height="500" />
      <div className="carousel-caption">
      <h1>Harry Potter</h1>
      </div>
    </div>

    <div className="carousel-item">
      <img src="kepek/StarWars-logo.jpg" alt="Star Wars logo" width="1100" height="500" />
      <div className="carousel-caption">
      <h1>Star Wars</h1>
      </div>
    </div>
  </div> 
  
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
        </div>
    )
}

export default Aloldal;
