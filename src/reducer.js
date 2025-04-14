export const initialState = {
    basket: [],
    user : null
  };




  const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
            ...state, // this is for the user and other
            basket : [...state.basket, action.item]// this is updating the basket with and append 
        };
  
      case "REMOVE_FROM_BASKET":
        return {state};

      default:
        return state;
    }
  };
  
  export default reducer;