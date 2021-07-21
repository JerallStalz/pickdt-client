import ImageContext from "./ImageContext";
import ImageReducer from "./ImageReducer";
import { useReducer } from "react";
import axios from "axios";
import { GET_IMAGES } from "./types";

const ImageState = (props) => {
  const initialState = {
    ArrayparaMap: []
  };

  const [state, dispatch] = useReducer(ImageReducer, initialState);

  const getImagesFn = async () => {
    try {
      const result = await axios.get("http://localhost:4000/download");
      console.log(result);
      dispatch({
        type: GET_IMAGES,
        payload: result.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        ArrayparaMap: state.ArrayparaMap,
        getImagesFn
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;