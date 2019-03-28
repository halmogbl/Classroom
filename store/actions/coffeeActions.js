import axios from "axios";
import * as actionTypes from "./types";

export const getClassRoom = () => {
  return async dispatch => {
    dispatch(setCoffeeShopsLoading());
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/classrooms/list/");
      const coffeeShops = res.data;
      dispatch({
        type: actionTypes.GET_CLASSROOM,
        payload: coffeeShops
      });
    } catch (err) {
      console.error("Error while fetching shops", err);
    }
  };
};

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});
