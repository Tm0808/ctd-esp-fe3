import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [seleccionado, setSeleccionado] = useState({});

  useEffect(() => {
    const getResponse = async () => {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setSeleccionado(res.data);
    };

    getResponse();
  },);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <div className="card">
        <h4>{seleccionado.name}</h4>
        <h5>{seleccionado.email}</h5>
        <h5>{seleccionado.phone}</h5>
        <h5>{seleccionado.website}</h5>
      </div>
    </>
  );
};

export default Detail;
