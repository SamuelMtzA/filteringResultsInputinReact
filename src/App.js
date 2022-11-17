import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  /**
   * Input state management logic here
   */
  const [inputData, setinputData] = useState({
    query: "",
    name: []
  });
  const handleChangeData = (e) => {
    const result = pokemons.filter((pokemon) => {
      if (e.target.value === "") return pokemons;
      return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setinputData({
      query: e.target.value,
      name: result
    });
  };
  console.log(inputData);

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <form>
        <input
          type="search"
          value={inputData.query}
          onChange={handleChangeData}
        />
      </form>
      <ul>
        {inputData.query === ""
          ? ""
          : inputData.name.map((pokemon) => {
              return (
                <div className="cards" key={pokemon.name}>
                  <CardItem name={pokemon.name} sprite={pokemon.sprite} />
                </div>
              );
            })}
      </ul>
    </div>
  );
}
