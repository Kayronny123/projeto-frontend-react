import styled from "styled-components";

export const Card = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  height: 60%;
  background-color: #2e6894;
  justify-content: space-between;
  color: white;
  border-radius: 10px;
  margin: 5px;
  max-height: 100%;
`;

export const CardImagem = styled.img`
  display: flex;
  max-width: 50%;
  height: 50%;
  border-radius: 10px;
  flex-direction: column;
  flex-wrap: flex;
  max-height: 100%;
  align-items: center;
  text-align: center;
`;
export const Btn = styled.button`
  display: flex;
  padding: 5px;
  margin-bottom: 150px;
  width: 50%;
  height: 20%;
`;
