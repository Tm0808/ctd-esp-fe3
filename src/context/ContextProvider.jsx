import { createContext, useReducer, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import reducer from "../reducer/reducer";
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const initialState={dentistas: [] , dark:"" , favs:JSON.parse(localStorage.getItem("favs")) || []};
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dentistas, setDentistas] = useState([]);
  const [dark, setDark] = useState(false);
  //const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const pedirApi = async () => {
      const resultado = await axios(url);
      setDentistas(resultado.data);
    };
    pedirApi();
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  const dentists = {
    dentistas,
    setDentistas,
  };

  return (
    <ContextGlobal.Provider
      value={{ dentists, dark, setDark, dispatch, state }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};













































