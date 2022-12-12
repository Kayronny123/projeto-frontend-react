import React from "react";
import { Container, Search, Choose } from "./styles";

export default function Header() {
  return (
    <Container>
      <Search>
        <input type="text" placeholder="Buscar por nome" />

        <button>Pesquisar</button>
      </Search>
      <br />
      <Choose>
        <select>
          <option value=""> Preço mínimo </option>
          <option value="">50,00</option>
          <option value="">500,00</option>
          <option value="">2000,00</option>
        </select>
        <select>
          <option value=""> Preço Máximo </option>
          <option value="">50 </option>
          <option value="">100</option>
          <option value="">200</option>
        </select>
      </Choose>
    </Container>
  );
}
