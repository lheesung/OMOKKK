import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const Board = styled.div`
  display: inline-block;
  border: 1px solid #000;
`;

export const Row = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Cell = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  background-color: ${({ cell }) =>
   cell === 1 ? 
    '#000' : 
  cell === 2 ?
    '#fff' : 
  'none'};
  border-radius: ${({ cell }) => (cell === 1 || cell === 2 ? '50%' : '0')};
  transition: 500ms ease-in-out;
`;

export const ResetButton = styled.button`
  width: 600px;
  height: 70px;
  border: none;
  font-size: 24px;
  font-weight: 700px;
  color: white;
  cursor: pointer;
  background: rgb(26,26,26);
  border-radius: 50px;
  margin-top: 20px;
`;
