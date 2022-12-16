import React from "react";
import { Card, CardImagem, InfoProdutos, Bloco2 } from "../CardProdutos/styles";
export default function CardProdutos(props) {
  return (
    <Card>
      {<CardImagem src={props.produto.imagem} alt={"imagem de produtos"} />}

      <InfoProdutos>
        <Bloco2>
          <p>{`Descrição:${props.produto.descricao1}`}</p>
          <p>{`Nome:${props.produto.produto1}`}</p>
        </Bloco2>
      </InfoProdutos>
    </Card>
  );
}
