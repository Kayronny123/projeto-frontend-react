import styled from "styled-components";

export const CardsProdutos = styled.body`
  display: flex;
  padding: 1px;
  margin: 1px;
  height: 300px;
  width: 480px;
  font-size: 25px;
  background-color: yellowgreen;
  color: white;
  flex-direction: row;
  text-align: center;
  align-items: center;
  border-radius: 40px;
`;
export const InfoProdutos = styled.p`
  display: flex;
  padding: 9px;
  margin: 5px;
  height: 290px;
  width: 400px;
  font-size: 12px;
  color: white;
  flex-direction: column;
  text-align: flex-end;
  position: bottom;
  align-self: flex-end;
  align-items: flex-end;
  border-radius: 30px;
`;
export const CardImagem = styled.img`
  display: flex;
  padding: 1px;
  margin: 1px;
  width: 193px;
  height: 193px;
  position: relative;
  top: 0px;
  border-radius: 10px;
  border: 2px solid black;
  right: -3px;
`;
