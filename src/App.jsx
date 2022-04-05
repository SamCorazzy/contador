import { useState } from "react";

function App() {

  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);

  const handleClick = () => {
    setCuenta(cuenta + paso);
  };
  const handleMenosClick = () => {
    setCuenta(cuenta - paso);
  };
  const handleResetClick = () => {
    setCuenta(cuenta - cuenta);
    setPaso(1);
  };
  const handleInputChange = (e) => {
    setPaso(Number(e.target.value));
  };



  return (
    <div className="App">
      <div class="mx-auto">
        <h3>Contador</h3>
        <hr />
        <h3 className="text-center">{cuenta}</h3>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "5px" }}>
          <label>Paso:
            <input name="paso" id="paso" type="text" onChange= {handleInputChange} class="mx-2" style={{ width: "60px" }}/>
          </label>
          <button type="button" class="btn btn-primary " onClick={() => {
            handleClick();
          }}>+</button>

          <button type="button" class="btn btn-primary mx-2" onClick={() => {
            handleMenosClick();
          }}>-</button>

          <button type="button" class="btn btn-primary" onClick={() => {
            handleResetClick();
          }}>Reset</button>

        </div>
      </div>

    </div>
  );
}

export default App;
