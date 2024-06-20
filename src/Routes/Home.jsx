import  { useContext } from "react";
import Card from '../Components/Card'
import { ContextGlobal } from '../context/ContextProvider';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Contex

const Home = () => {
  const { dentists } = useContext(ContextGlobal);
  return (
    <>
    <main>
      <div className="features-container">
        <h1>Home</h1>
        <div className="card-grid">
          {dentists.dentistas.map((dentista) => {
            return <Card key={dentista.id} dentista={dentista} />;
          })}
        </div>
      </div>
    </main>
  </>
  
  
  
  
  
  
  
  
  )
}
export default Home;











