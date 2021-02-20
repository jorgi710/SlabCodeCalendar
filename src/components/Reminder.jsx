import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reminder = () => {
  
  const [startDate, setStartDate] = useState(new Date());

  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;

  const [lista, setLista] = useState([]);
  const [print, setPrint] = useState([]);
  const [edicion, setEdicion] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(null);
  <h1 className=" bg-secondary"> hola</h1>

  const guardarDatos = (e) => {
    e.preventDefault();   
    if (!lista.trim()) {
      console.log("Emphy");
      setError("Digite algo porfavor...");     
      return;
    }

    console.log("Procesando Datos....");

    setPrint([...print, { id: shortid.generate(), nombreLista: lista }]);
    e.target.reset();
    setLista("");
  };

  const eliminar = (id) => {
    // console.log(id);
    const arrayFiltrado = print.filter((item) => item.id !== id);
    setPrint(arrayFiltrado);
  };

  const editar = (item) => {
    console.log(item);
    setEdicion(true);
    setLista(item.nombreLista);
    setId(item.id);
  };

  const editarTarea = (e) => {
    e.preventDefault();
    if (!lista.trim()) {
      console.log("Emphy");
      setError("Emphy");
      return;
    }
    const arrayEditado = print.map((item) =>
      item.id === id ? { id: id, nombreLista: lista } : item
    );
    setPrint(arrayEditado);
    setEdicion(false);
    setLista("");
    setId("");
  };

  return (
    <div>
      <div className="row bg-light p-4">
        <div className="col-8 text-center ">
          <h2>Tarea</h2>
          <ul className="list-group">
            {print.length === 0 ? (
              <li className="list-group-item">No hay Tareas Para Hoy</li>
            ) : (
              print.map((item) => (
                <li className="list-group-item mt-2 lead" key={item.id}>
                  <span className="lead">{item.nombreLista}</span>
                  <button
                    className="btn btn-danger btn-sm  ml-5"
                    onClick={() => eliminar(item.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-success  btn-sm mx-1 float-end"
                    onClick={() => editar(item)}
                  >
                    Editar
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="col-4 text-center">
          <h2>{edicion ? "Editar Tarea" : "Agregar Tarea"}</h2>
          <Form onSubmit={edicion ? editarTarea : guardarDatos}>
            {error ? <span className="text-danger mx-5">{error}</span> : null}
            <input
              onChange={(e) => setLista(e.target.value)}
              value={lista}
              placeholder="Digite la tarea nueva"
              className=" block"
            />
            {edicion ? (
              <Button
                variant="primary"
                type="submit"
                className=" btn-lg btn-success m-4 "
                size="lg"
              >
                Editar Tarea
              </Button>
            ) : (
              <Button
                variant="primary"
                type="submit"
                className=" btn-lg btn-warning mt-3"
                size="lg"
              >
                Añadir Nueva Tarea
              </Button>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
