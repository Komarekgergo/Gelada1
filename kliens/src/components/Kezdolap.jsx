import React from "react";

const Kezdolap = () => {
  return (
    <div class="container border border-dark p-5" style={{ width: "30%" }}>
      <form action="">
        <div class="form-group">
          <label for="felh">Felhasználó név:</label>
          <input
            type="text"
            class="form-control"
            id="felh"
            placeholder="Felhasználó név..."
            name="felh"
          />
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="E-mail cím..."
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Jelszó:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Jelszó..."
            name="pwd"
          />
        </div>
        <div class="form-group">
          <label for="ismpwd">Ismételt jelszó:</label>
          <input
            type="password"
            class="form-control"
            id="ismpwd"
            placeholder="Ismételt jelszó..."
            name="ismpswd"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Kezdolap;
