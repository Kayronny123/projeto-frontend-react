import styled from "styled-components";

export const Card = styled.body`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 28vw;
  height: 500px;
  margin-bottom: 25px;
  box-shadow: 0px 5px 5px 5px rgba(102, 102, 102, 1);
  padding: 10px;
  background-color: #2e5894;
  justify-content: center;
`;
export const InfoProdutos = styled.div`
  /* height: 44%; */
  font-size: 0.8rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardImagem = styled.img`
  width: 26vw;
  height: 35vh;
  border-radius: 12px;
`;
export const Bloco2 = styled.section`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: -40px;
  }
`;
