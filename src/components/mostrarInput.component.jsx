import React from "react";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";

const MostrarInput = (props) => {
  return (
    <div>
      <form name="first" onSubmit={props.handleSubmit}>
        <label>
          1° (100 puntos) Nombre,código y n°Torneo:
          <input
            name="nombre"
            type="text"
            placeholder="nombre"
            onChange={props.handleChangeNombre}
          />
          <input
            name="codigo"
            type="text"
            placeholder="codigo"
            onChange={props.handleChangeCodigo}
          />
          <input
            name="torneo"
            id="100"
            type="number"
            placeholder="torneo"
            onChange={props.handleChangeTorneo}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form name="second" onSubmit={props.handleSubmit}>
        <label>
          2°(75 puntos) Nombre,código y n°Torneo:
          <input
            name="nombre"
            type="text"
            placeholder="nombre"
            onChange={props.handleChangeNombre}
          />
          <input
            name="codigo"
            type="text"
            placeholder="codigo"
            onChange={props.handleChangeCodigo}
          />
          <input
            name="torneo"
            id="75"
            type="number"
            placeholder="torneo"
            onChange={props.handleChangeTorneo}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form name="third" onSubmit={props.handleSubmit}>
        <label>
          3°(50 puntos) Nombre,código y n°Torneo:
          <input
            name="nombre"
            type="text"
            placeholder="nombre"
            onChange={props.handleChangeNombre}
          />
          <input
            name="codigo"
            type="text"
            placeholder="codigo"
            onChange={props.handleChangeCodigo}
          />
          <input
            name="torneo"
            id="50"
            type="number"
            placeholder="torneo"
            onChange={props.handleChangeTorneo}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form name="4th" onSubmit={props.handleSubmit}>
        <label>
          4°(25 puntos) Nombre,código y n°Torneo:
          <input
            name="nombre"
            type="text"
            placeholder="nombre"
            onChange={props.handleChangeNombre}
          />
          <input
            name="codigo"
            type="text"
            placeholder="codigo"
            onChange={props.handleChangeCodigo}
          />
          <input
            name="torneo"
            id="25"
            type="number"
            placeholder="torneo"
            onChange={props.handleChangeTorneo}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form name="5th" onSubmit={props.handleSubmit}>
        <label>
          5°(15 puntos) Nombre,código y n°Torneo:
          <input
            name="nombre"
            type="text"
            placeholder="nombre"
            onChange={props.handleChangeNombre}
          />
          <input
            name="codigo"
            type="text"
            placeholder="codigo"
            onChange={props.handleChangeCodigo}
          />
          <input
            name="torneo"
            id="15"
            type="number"
            placeholder="torneo"
            onChange={props.handleChangeTorneo}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form name="5th" onSubmit={props.handleSubmit}>
        <label>
          5°(15 puntos) Nombre,código y n°Torneo:
          <input
            name="nombre"
            type="text"
            placeholder="nombre"
            onChange={props.handleChangeNombre}
          />
          <input
            name="codigo"
            type="text"
            placeholder="codigo"
            onChange={props.handleChangeCodigo}
          />
          <input
            name="torneo"
            id="15"
            type="number"
            placeholder="torneo"
            onChange={props.handleChangeTorneo}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form name="5th" onSubmit={props.handleSubmit}>
        <label>
          5°(15 puntos) Nombre,código y n°Torneo:
          <input
            name="nombre"
            type="text"
            placeholder="nombre"
            onChange={props.handleChangeNombre}
          />
          <input
            name="codigo"
            type="text"
            placeholder="codigo"
            onChange={props.handleChangeCodigo}
          />
          <input
            name="torneo"
            id="15"
            type="number"
            placeholder="torneo"
            onChange={props.handleChangeTorneo}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form name="5th" onSubmit={props.handleSubmit}>
        <label>
          5°(15 puntos) Nombre,código y n°Torneo:
          <input
            name="nombre"
            type="text"
            placeholder="nombre"
            onChange={props.handleChangeNombre}
          />
          <input
            name="codigo"
            type="text"
            placeholder="codigo"
            onChange={props.handleChangeCodigo}
          />
          <input
            name="torneo"
            id="15"
            type="number"
            placeholder="torneo"
            onChange={props.handleChangeTorneo}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default MostrarInput;
