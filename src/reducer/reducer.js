const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DENTISTAS':
        return { ...state, dentistas: action.payload };
      case 'SET_DARK':
        return { ...state, dark: action.payload };
      case 'SET_FAVS':
        return { ...state, favs: action.payload };
      case "ADD_FAV":{
        if (!action.payload || !action.payload.id) {
          console.error("Action payload is invalid for type ADD_FAV");
          return state;
        }
        let newFavs;
  
        if (state.favs.some((fav) => fav.id === action.payload.id)) {
          newFavs = state.favs;
        } else {
          newFavs = [...state.favs, action.payload];
        }
        return {
          ...state,
          favs: newFavs,
        };
      }
        default:
  return state; 
    }
  };
  
  export default reducer;