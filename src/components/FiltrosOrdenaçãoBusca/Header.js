import React from "react";
import "./header.sass";

export default function Header(props) {
  const onChangeNome = (event)=>{
    props.setNomeProduto(event.target.value)
  } 
  return (
    <div className="search-container">
      <input
        className="search-name"
        type="text"
        placeholder="Buscar por nome"
        onChange={(event)=>onChangeNome(event)}
      />
      <input className="search-min" type="text" placeholder="Preço Mínimo" />
      <input className="search-max" type="text" placeholder="Preço Máximo" />
    </div>
  );
}
