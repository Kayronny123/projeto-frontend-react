import React from "react";
import {
  CardsProdutos,
  CardImagem,
  InfoProdutos
} from "../CardProdutos/styles";
export default function CardBodyPodutos() {
  return (
    <CardsProdutos>
      <CardImagem
        src="data:image/jpeg;base64,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"
        alt=""
      />
      Arma de portáis $:200,00 schmeckles
      <InfoProdutos>
        O produto é produzido por impressora 3D Material: Plástico PLA O
        poliácido láctico (PLA ou ácido poliláctico) é um polímero constituído
        por moléculas de ácido láctico, um ácido orgânico de origem biológica,
        que é obtido a partir de recursos renováveis.{" "}
      </InfoProdutos>
    </CardsProdutos>
  );
}
