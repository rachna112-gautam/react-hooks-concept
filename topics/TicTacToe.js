import React, { useState, useEffect } from "react";
import "./App.css";

const initMat = [];
function App() {
  const [matrix, setMatrix] = useState(initMat);
  // eslint-disable-next-line no-unused-vars
  const [matrixSize, setMatrixSize] = useState(3);
  const [currPlayer, setCurrPlayer] = useState("O");
  const [selR, setSelR] = useState(null);
  const [selC, setSelC] = useState(null);
  const [winner, setWinner] = useState(false);
  const [reset, SetReset] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setWinner(false);
    setSelR(null);
    setSelC(null);
    setCount(0);
    const row = new Array(matrixSize).fill(null);
    const tempMatrix = [];
    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }
    setMatrix(tempMatrix);
  }, [matrixSize, reset]);

  function isWinner() {
    let vertical = true;
    let horizontal = true;
    let d1 = true;
    let d2 = true;

    if (selR === null || selC === null) return;

    for (let i = 0; i < matrixSize; i++) {
      if (matrix[i][selC] !== currPlayer) {
        vertical = false;
      }
      if (matrix[selR][i] !== currPlayer) {
        horizontal = false;
      }
      if (matrix[i][i] !== currPlayer) {
        d1 = false;
      }
      if (matrix[i][matrixSize - i - 1] !== currPlayer) {
        d2 = false;
      }
    }

    if (horizontal || vertical || d1 || d2) {
      setWinner(true);
    }
  }

  useEffect(() => {
    if (!winner) {
      isWinner();
    }
  });

  function boxClickHandle(i, j) {
      
      if(count < 9)
      setCount(count + 1);
    if (!matrix[i][j] && !winner) {
      setSelR(i);
      setSelC(j);
      let nextPlayer = currPlayer === "X" ? "O" : "X";
      setCurrPlayer(nextPlayer);
      const matCopy = [...matrix];
      matCopy[i][j] = nextPlayer;
      setMatrix(matCopy);
    }
  }

  function resetHandle() {
    SetReset(!reset);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h2>Tic Tac Toe </h2>
        <button className="btn-style" onClick={resetHandle}>
          Reset Game
        </button>

        <div>
          {matrix.map((val, c) => (
            <div className="col-style">
              {val.map((val1, r) => (
                <div
                  className="row-style"
                  onClick={() => {
                    boxClickHandle(r, c);
                  }}
                > 
                  {matrix[r][c]} 
                </div>
              ))}
            </div>
          ))}
        </div>
        <h2>
          {winner ? `Player ${currPlayer} is a winner` : ""}
          {(count === 9 && !winner) ? 'TIE' : ''}
        </h2>
      </header>
    </div>
  );
}

export default App;
