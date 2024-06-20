import  { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../context/ContextProvider";
import PropTypes from "prop-types";
const Card = ({ dentista }) => {
  const { dispatch } = useContext(ContextGlobal);
  return (
    <div className="card">
      <Link to={`/detail/${dentista.id}`}>
        <img
          src="src/images/doctor.jpg"
          style={{ width: "100%", loading: "lazy" }}
        />
        <h4>{dentista.name}</h4>
        <h5>{dentista.username}</h5>
      </Link>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_FAV",
            payload: dentista,
          })
        }
        className="favButton"
      >
        Add fav
      </button>
    </div>
  );
};
Card.propTypes = {
  dentista: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
export default Card



 
 
 

 
 
 

 

 
 
 
 



