// TYPES
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// INITIAL STATE
export const initialState = [];

// ACTIONS
export const addProduct = (product) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT, payload: product });
};

export const removeProduct = (id) => (dispatch) => {
  dispatch({ type: REMOVE_PRODUCT, payload: id });
};

// REDUCER
export function productsReducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case REMOVE_PRODUCT:
      const filteredProducts = state.filter(
        ({ product_id }) => product_id !== action.payload
      );

      return filteredProducts;

    default:
      return state;
  }
}
