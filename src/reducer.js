export const initialState = {
    basket: [],
    user : null
  };


// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);



  const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
            ...state, // this is for the user and other
            basket : [...state.basket, action.item]// this is updating the basket with and append 
        };
  
      case "REMOVE_FROM_BASKET":
        
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];

        if (index >= 0) {
          newBasket.splice(index, 1);

        } else {
          //console.warn is just red console.log
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }

        return {
          ...state,
          basket: newBasket
        }

      default:
        return state;
    }
  };
  
  export default reducer;