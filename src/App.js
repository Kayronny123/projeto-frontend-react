import React from "react";
import Header from "../components/FiltrosOrdenaçãoBusca/Header";
import CardPodutos from "../components/CardProdutos/CardProdutos";
import "./styles.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
   width: 130px;
   height: 30px;
    padding: 5px;
    margin: 0px;
    box-sizing: border-box;
  
  }
`;
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <CardPodutos />
      <CardPodutos />
    </>
  );
}
