import React from "react";
import { Container, Search, Choose } from "./styles";

export default function Header() {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Buscar por nome" />
      </Search>
      <br />
      <Choose>
        <select>
          <option value="">Ordenar</option>
          <option value="">Crescente</option>
          <option value="">Decrescente</option>
        </select>
      </Choose>
    </Container>
  );
}
