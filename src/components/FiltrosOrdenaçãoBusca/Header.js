import React from "react";
import "./header.sass";

export default function Header() {
  return (
    <div className="search-container">
      <input
        className="search-name"
        type="text"
        placeholder="Buscar por nome"
      />
      <button className="search-btn">Pesquisar</button>
      <input className="search-min" type="text" placeholder="Preço Mínimo" />
      <input className="search-max" type="text" placeholder="Preço Máximo" />
    </div>
  );
}
