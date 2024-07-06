import { animesLancamentos } from "./dadosLancamentos"
import { Titulo } from "../Titulo"
import SaibaMais from "../saibaMais"
import ImagemLancamento from '../../img/swordartonline.webp'
import styled from "styled-components"

const LivrosLancamentos = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    img {
        width: 400px;
        margin: 20px;
        border: 5px solid #000;
    }

`

function Lancamentos(){
    return (
        <LivrosLancamentos>
            <Titulo cor="#EB9B00" tamanhoFonte="36px"> Ultimos Lançamentos!!</Titulo>
            <NovosLivrosContainer>
            {animesLancamentos.map(anime => (
                <img src={anime.src} alt="capa-lancamentos" />
            ))}
            </NovosLivrosContainer>
            <SaibaMais
                titulo="Talvez você se interesse por"
                subtitulo="Dragon Ball"
                descricao="Versão classica de Dragon Ball Z"
                img={ImagemLancamento}
            />
            
        </LivrosLancamentos>
    )
}

export default Lancamentos