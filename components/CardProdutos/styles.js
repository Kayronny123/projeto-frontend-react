import styled from "styled-components";

export const CardsProdutos = styled.body`
  display: flex;
  padding: 1px;
  margin: 1px;
  height: 360px;
  width: 500px;
  font-size: 17px;
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
  margin: 9px;
  height: 220px;
  width: 600px;
  font-size: 13px;
  color: white;
  flex-direction: column;
  text-align: flex-end;
  position: bottom;
  text-align: center;
  align-self: flex-end;
  align-items: flex-end;
  border-radius: 30px;
  text-decoration: underline;
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
