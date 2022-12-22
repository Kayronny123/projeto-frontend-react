import React from "react";
import { Card, CardImagem } from "../CardProdutos/styles";
export default function CardProdutos(props) {
  return (
    <Card>
      {`${props.produto.produto} `}
      {<CardImagem src={props.produto.imagem} alt={"imagem de produtos"} />}
      {`Descrição:${props.produto.descricao} `}
      <p>{`Preço:${props.produto.preco}`}</p>
      <button>Adicionar ao carrinho</button>
    </Card>
  );
}
