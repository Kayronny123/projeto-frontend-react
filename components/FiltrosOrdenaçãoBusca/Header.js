import React from "react";
import { Container, Search, Choose } from "./styles";

export default function Header() {
  return (
    <Container>
      <Search>
        <button>Pesquisar</button>
        <input type="text" placeholder="Buscar por nome" />
        <input type="text" placeholder="Preço Mínimo" />
        <input type="text" placeholder="Preço Máximo" />
      </Search>
    </Container>
  );
}
