import React, { useState } from 'react';
import GlobalStyles from './style/GlobalStyle';
import * as S from "./style/style"

const SIZE = 15; // 게임 판의 크기
const EMPTY = 0; // 빈 공간을 나타내는 상수
const BLACK = 1; // 흑돌을 나타내는 상수
const WHITE = 2; // 백돌을 나타내는 상수

const App = () => {
  const [board, setBoard] = useState(() => {
    // 게임 판 초기화
    const initialBoard = [];
    for (let i = 0; i < SIZE; i++) {
      const row = [];
      for (let j = 0; j < SIZE; j++) {
        row.push(EMPTY);
      }
      initialBoard.push(row);
    }
    return initialBoard;
  });

  const [currentPlayer, setCurrentPlayer] = useState(BLACK);

  const handleCellClick = (row, col) => {
    if (board[row][col] !== EMPTY) {
      return; // 이미 돌이 있는 곳을 클릭한 경우 무시
    }

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    // 승리 조건 체크
    if (checkWinner(row, col)) {
      const winner = currentPlayer === BLACK ? '흑돌' : '백돌';
      alert(`${winner}이 승리했습니다!`);
      resetGame();
    } else {
      setCurrentPlayer(currentPlayer === BLACK ? WHITE : BLACK);
    }
  };

  const checkWinner = (row, col) => {
    const directions = [
      [1, 0], // 가로
      [0, 1], // 세로
      [1, 1], // 대각선 (우하향)
      [-1, 1], // 대각선 (우상향)
    ];

    const currentColor = board[row][col];
    let consecutiveCount = 0; // 연속된 돌의 개수

    for (const [dx, dy] of directions) {
      let count = 1; // 돌의 개수 (클릭한 위치의 돌을 기준으로 센다)

      // 오목을 만들기 위해 같은 색상의 돌을 세는 로직
      for (let i = 1; i <= 4; i++) {
        const newRow = row + dx * i;
        const newCol = col + dy * i;

        if (
          newRow < 0 ||
          newRow >= SIZE ||
          newCol < 0 ||
          newCol >= SIZE ||
          board[newRow][newCol] !== currentColor
        ) {
          break;
        }

        count++;
      }

      // 돌의 개수가 5개 이상인 경우 승리
      if (count >= 5) {
        return true;
      }

      consecutiveCount = Math.max(consecutiveCount, count); // 최대 연속 개수 업데이트
    }

    // 돌의 개수가 5개 이상이거나 최대 연속 개수가 5 이상인 경우 승리
    return consecutiveCount >= 5;
  };


  const resetGame = () => {
    const newBoard = [];
    for (let i = 0; i < SIZE; i++) {
      const row = [];
      for (let j = 0; j < SIZE; j++) {
        row.push(EMPTY);
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
    setCurrentPlayer(BLACK);
  };

  return (
    <S.Container>
      <GlobalStyles />
      <S.Title>OMOKK</S.Title>
      <S.Board>
        {board.map((row, rowIndex) => (
          <S.Row key={rowIndex}>
            {row.map((cell, colIndex) => (
              <S.Cell
                key={colIndex}
                cell={cell}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              />
            ))}
          </S.Row>
        ))}
      </S.Board>
      <S.ResetButton onClick={resetGame}>게임 리셋</S.ResetButton>
    </S.Container>
  );
};

export default App;
