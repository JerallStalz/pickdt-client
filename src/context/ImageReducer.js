import { GET_IMAGES } from "./types";

const ImageReducer = (state, action) => {
  switch (action.type) {
    case GET_IMAGES:
      console.log(action.payload);
      return {
        ...state,
        ArrayparaMap: action.payload
      };
    default:
      return state;
  }
};
export default ImageReducer;
