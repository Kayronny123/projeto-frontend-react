// importação de todos componentes, hooks e styles
import Header from "./components/FiltrosOrdenaçãoBusca/Header";
import NovosProdutos from "./components/CardProdutos/NovosProdutos";
import { useState } from "react";
import "../src/components/CardProdutos/cardproduto.sass";

// função do componente pai
export default function App() {
  // começando a manipular os estados para buscar produtos por id, nome e preço máximo
  const [id, setId] = useState("");
  const [produto, setProduto] = useState("");
  return (
    <div>
      {/* componente filho da barra de busca recebendo por props os estados */}
      <Header produto={produto} setProduto={setProduto} id={id} setId={setId} />
      {/* componente filho da redenrização dos produtos recebendo por props os estados */}
      <NovosProdutos
        produto={produto}
        setProduto={setProduto}
        id={id}
        setId={setId}
      />
    </div>
  );
}
