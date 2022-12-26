// import React from "react";
// import CardProdutos from "../components/CardProdutos/CardProdutos";
// import "./styles.css";
// import { createGlobalStyle } from "styled-components";
// import Main, { CardContainer } from "./styled";
// import TodosProdutos from "../components/Objetos";
// import Styles from "./styles-sass/cardproduto"
import Header from "./components/FiltrosOrdenaçãoBusca/Header";
import CardProdutos from "./components/CardProdutos/NovosProdutos";
import { useState } from "react";

// const GlobalStyle = createGlobalStyle`
//   *{
//  font-family: "Josefin Sans";
//  padding: 0;
//  margin: 0;
// max-width: 100%;
// height:100%;
// justify-content:center;

//   }
// `;
export default function App() {
  const [nomeProduto, setNomeProduto] = useState("");

  return (
    <>
      <div>
        <Header nomeProduto={nomeProduto} setNomeProduto={setNomeProduto} />
        <CardProdutos />
      </div>
    </>
  );
}
