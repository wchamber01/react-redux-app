import axios from "axios";

export const FETCH_NUMBERS_START = "FETCH_NUMBERS_START"
export const FETCH_NUMBERS_SUCCESS = "FETCH_NUMBERS_SUCCESS"
export const FETCH_NUMBERS_FAILURE = "FETCH_NUMBERS_FAILURE"

//async action creator
export const getNumbers = () => dispatch {
  dispatch({ type: FETCH_NUMBERS_START })
  axios
    .get("http://numbersapi.com/random/year?json")
    .then(res => {
      console.log(res, "res")
      dispatch({ type: FETCH_NUMBERS_SUCCESS, payload: res.data.text})
    })
    .catch(err => {
      dispatch({ type: FETCH_NUMBERS_FAILURE, payload: err.response})
    })
}
