import React from "react";
import {
  CardsProdutos,
  CardImagem,
  InfoProdutos
} from "../CardProdutos/styles";
export default function CardBodyPodutos() {
  return (
    <CardsProdutos>
      <CardImagem />
      Arma de portáis $:200,00 schmeckles
      <InfoProdutos>
        O produto é produzido por impressora 3D Material: Plástico PLA O
        poliácido láctico (PLA ou ácido poliláctico) é um polímero constituído
        por moléculas de ácido láctico, um ácido orgânico de origem biológica,
        que é obtido a partir de recursos renováveis.{" "}
        <button>Adicionar ao carrinho</button>
      </InfoProdutos>
    </CardsProdutos>
  );
}
