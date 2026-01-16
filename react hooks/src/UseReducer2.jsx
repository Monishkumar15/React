import React from "react";
import { useReducer } from "react";
import { createRoot } from "react-dom/client";

const initialScore = [
  {
    id: 1,
    score: 0,
    name: "Kavin",
  },
  {
    id: 2,
    score: 0,
    name: "Jenny",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "DECREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score - 1 };
        } else {
          return player;
        }
      });
    case "INCREASE":
      return state.map((player) => {
        if (player.id === action.id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      });
    default:
      return state;
  }
};

const UseReducer2 = () => {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player) => {
    dispatch({ type: "INCREASE", id: player.id });
  };

  const handleDecrease = (player) => {
    dispatch({ type: "DECREASE", id: player.id });
  };
  return (
    <>
      {score.map((player) => (
        <div key={player.id}>
          <label>
            <h2>{player.name}</h2>
            <input
              type="button"
              onClick={() => handleIncrease(player)}
              value={"Increase"}
            />
            {player.score}
            <input
              type="button"
              onClick={() => handleDecrease(player)}
              value={"Decrease"}
            />
          </label>
        </div>
      ))}
      <hr />
    </>
  );
};

export default UseReducer2;
