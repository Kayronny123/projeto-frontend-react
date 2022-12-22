import React from "react";
import Header from "../components/FiltrosOrdenaçãoBusca/Header";
import CardProdutos from "../components/CardProdutos/CardProdutos";
import "./styles.css";
import { createGlobalStyle } from "styled-components";
import Main, { CardContainer } from "./styled";
import TodosProdutos from "../components/Objetos";

const GlobalStyle = createGlobalStyle`
  *{
 font-family: "Josefin Sans";
 padding: 0;
 margin: 3px;
max-width: 1170px;
flex-direction: row;
/* background-color:#2e6894; */
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
