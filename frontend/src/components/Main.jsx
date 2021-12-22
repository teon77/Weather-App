import { Card } from "semantic-ui-react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchCities } from "../actions";
import CountryWeather from "./CountryWeather";

export default function Main() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div>
      <br />
      <h1>Weather Around The World</h1>
      <hr />
      <br />
      <Card.Group className="myCards">
        {state.map((country, i) => {
          return <CountryWeather key={i + "key"} country={country} />;
        })}
      </Card.Group>
    </div>
  );
}
