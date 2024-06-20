import  { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../context/ContextProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dentists } = useContext(ContextGlobal);
  if (!state || !state.favs) {
    return <div>Error: Contexto no proporcionado correctamente.</div>;
  }
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => {
          const dentist = dentists.dentistas.find(d => d.id === fav.id);
          return <Card key={fav.id} dentista={dentist || fav} />;
        })}
      </div>
    </>
  );

};

export default Favs;










