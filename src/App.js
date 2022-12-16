import React from "react";
import Header from "../components/FiltrosOrdenaçãoBusca/Header";
import CardProdutos from "../components/CardProdutos/CardProdutos";
import "./styles.css";
import { createGlobalStyle } from "styled-components";
import Main, { CardContainer } from "./styled";
import TodosProdutos from "../components/Objetos";

const GlobalStyle = createGlobalStyle`
  *{
   width: 55%;
   height: 5vh;
    padding: 0px;
    margin: 0px;

  
  }
`;
export default function App(props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <CardContainer>
          {TodosProdutos.map((produto) => {
            return (
              <CardProdutos key={produto.id} produto={produto}></CardProdutos>
            );
          })}
        </CardContainer>
      </Main>
    </>
  );
}
