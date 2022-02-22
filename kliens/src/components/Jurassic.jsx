//import React from "react";
import { Link } from "react-router-dom";
import CaptainMarvel from "./CaptainMarvel";

const Jurassic = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="keptarto">
            <Link to="/CaptainMarvel">
              <img
                src="kepek JP/torlo.jpg"
                alt="Jurassic Park"
                className="img-thumbnail"
              />
            </Link>
          </div>
          <div className="szovegtarto">
            <h4>JURASSIC PARK lábtörlő</h4>
            <ul>
              <li>Ár: 7.990 Ft</li>
              <li>Anyag: PVC alapból készült</li>
              <li>Méret: 60x40 </li>
            </ul>
            <div>
            Kókuszrostból és csúszásmentes PVC alapból készült.
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="keptarto">
            <img src="kepek JP/notesz.jpg" alt="Jurassic Park" />
          </div>
          <div className="szovegtarto">
            <h4>JURASSIC PARK prémium jegyzetfüzet</h4>
            <ul>
              <li>Ár: 4.999 Ft</li>
              <li>Anyag: Puha szintetikus bőrkötés és gumiszalag a záráshoz.</li>
              <li>Méret: A/5</li>
            </ul>
            <div>
            Puha szintetikus bőrkötés és gumiszalag a záráshoz. Egyedi tervezésű belső burkolatok.
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="keptarto">
            <img src="kepek JP/utibogre.jpg" alt="Jurassic Park" />
          </div>
          <div className="szovegtarto">
            <h4>JURASSIC PARK utazóbögre </h4>
            <ul>
              <li>Ár: 4.499 Ft</li>
              <li>Anyag: Acél</li>
              <li>Méret: (450 ml)</li>
            </ul>
            <div>
            Tökéletes méret a táskába, hátizsákba vagy az autó pohártartójába csúsztatható kettős falú rozsdamentes acél konstrukció, amely alkalmas hideg és meleg italok tárolására.
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="keptarto">
            <img src="kepek JP/utibogre2.jpg" alt="Jurassic Park" />
          </div>
          <div className="szovegtarto">
            <h4>JURASSIC PARK fém utazóbögre</h4>
            <ul>
              <li>Ár: 5.990 Ft Ft</li>
              <li>Anyag: Acél</li>
              <li>Méret: (500 ml)</li>
            </ul>
            <div>
            Tökéletes méret a táskába, hátizsákba vagy az autó pohártartójába csúsztatható kettős falú rozsdamentes acél konstrukció, amely alkalmas hideg és meleg italok tárolására.
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="keptarto">
            <img src="kepek JP/sakk.jpg" alt="Jurassic Park" />
          </div>
          <div className="szovegtarto">
            <h4>JURASSIC PARK sakk készlet</h4>
            <ul>
              <li>Ár: 22.990 Ft</li>
              <li>Anyag: PVC</li>
              <li>Méret: 18,5x18,5 cm </li>
            </ul>
            <div>
            Ki a király? Természetesen a Tyrannosaurus Rex, a királynő a Spinosaurus.
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="keptarto">
            <img src="kepek JP/bogre.jpg" alt="Jurassic Park" />
          </div>
          <div className="szovegtarto">
            <h4>JURASSIC PARK korsó</h4>
            <ul>
              <li>Ár: 4.490 Ft</li>
              <li>Anyag: Műanyag</li>
              <li>Méret: 400ml</li>
            </ul>
            <div>
            A 400 ml -es űrtartalmú Jurassic Park dombornyomott bögre tökéletes bármilyen hideg vagy meleg italhoz.
            Matt gránit hatású kivitele a fosszíliák felfedezésének emlékeit idézi fel, és a rendkívül részletes
            dombornyomott Jurassic Park logó, beleértve az ikonikus Tyrannosaurus Rex csontvázat is, visszavezet ahhoz, 
            amikor először láttad a klónozott dinoszauruszok vidámparkját az Isla Nublar szigetén.
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="keptarto">
            <img src="kepek JP/polo.jpg" alt="Jurassic Park" />
          </div>
          <div className="szovegtarto">
            <h4>JURRASIC PARK logo fekete póló</h4>
            <ul>
              <li>Ár: 3.999 Ft</li>
              <li>Anyag: Pamut</li>
              <li>Méret: M, LX, XXL, férfi</li>
            </ul>
            <div>
            <p>Minőségi, 100% pamut póló</p>

            <p>Európai méretezés</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="keptarto">
            <img src="kepek JP/figura.jpg" alt="Jurassic Park" />
          </div>
          <div className="szovegtarto">
            <h4>Jurassic  Park figura </h4>
            <ul>
              <li>Ár: 2.999 Ft</li>
              <li>Anyag: Műanyag</li>
              <li>Méret: 10cm</li>
            </ul>
            <div>
              Támadó dinoszaurusz.
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Jurassic;
