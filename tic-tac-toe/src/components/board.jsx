import React from "react";
import Square from "./square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square key={i} value={value} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
