import Imagem1 from "../Imagens/arma-port.png";
import Imagem2 from "../Imagens/bateria-micro2.jpg";
import Imagem3 from "../Imagens/caixa-meeseks1.jfif";
import Imagem4 from "../Imagens/espaconave-rick.jpg";
import Imagem5 from "../Imagens/robo-passa-manteiga.png";
import "../CardProdutos/cardproduto.sass";

const TodosProdutos = [
  {
    id: 1,
    produto: " Arma de Portais",
    preco: 6000,
    imagem: Imagem1,
    descricao:
      " A arma de portais, dispara portais em formate redemoinhos verdes. Permitindo que o usuário viaje até outra dimensão ao atravessa-lo."
  },
  {
    id: 2,
    produto: " Bateria de Microverso",
    preco: 4000,
    imagem: Imagem2,
    descricao:
      " É Um mundo que gera energia a partir de dispositivos de movimento mecânico que é realizado pelos micro humanos que habitam nela."
  },
  {
    id: 3,
    produto: "Caixa de Meeseks",
    preco: 2000,
    imagem: Imagem3,
    descricao:
      " A Caixa Meeseek é um gadget que cria um Sr. Meeseeks com o propósito de completar um objetivo específico que você pedir, após cumprir seu objetivo ele desaparece."
  },
  {
    id: 4,
    produto: "Espaçonave",
    preco: 9000,
    imagem: Imagem4,
    descricao:
      " Uma nave  é movida por um elemento chamado ''matéria escura concentrada'', que é capaz de vencer a barreira espaço-tempo sempre que preciso."
  },
  {
    id: 5,
    produto: " Robozinho passa manteiga",
    preco: 1000,
    imagem: Imagem5,
    descricao:
      " Um robô que tem um único objetivo de alcançar a manteiga na mesa do café da manhã."
  }
];

export default function CardProdutos(props) {
  return (
    <div>
      {TodosProdutos.map((cartoes) => {
        return (
          <p className="card-nome">
            {cartoes.produto}
            <div className="card-imagem">
              <img
                className="card-imagem"
                src={cartoes.imagem}
                alt="card-imagem"
              />
              <button className="price-product">Preço: {cartoes.preco}</button>
            </div>
            <p className="description-product">{cartoes.descricao}</p>
          </p>
        );
      })}
    </div>

    // <Card>

    //   {/* {`${props.produto.produto} `}
    //   {<CardImagem src={props.produto.imagem} alt={"imagem de produtos"} />}
    //   {`Descrição:${props.produto.descricao} `}
    //   <p>{`Preço:${props.produto.preco}`}</p> */}
    //   <Btn>Adicionar ao carrinho</Btn>
    // </Card>
  );
}
