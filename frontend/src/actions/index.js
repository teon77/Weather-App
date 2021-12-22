import axios from "axios";

export const fetchCities = () => async (dispatch) => {
  const response = await axios.get(
    "http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,11&appid=05dac35278852e949e793eb0d1fe08ec"
  );
  dispatch({ type: "FETCH_CITIES", payload: response.data.list });
};
