import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { animes } from './dados'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const ResultadoPesquisa = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
// ...
function Pesquisa() {
    // Nome do estado, mudar o valor (set+nome do estado)
    const [animesPesquisados, setAnimesPesquisados] = useState([])


    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu anime em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva seu próximo anime"
                onBlur={evento => {
                    const textDigitado = evento.target.value
                    const resultadoPesquisa = animes.filter( anime => anime.nome.includes(textDigitado))
                    setAnimesPesquisados(resultadoPesquisa)
                }} 
            />

            {animesPesquisados.map(anime => (
                <ResultadoPesquisa>
                    <p>{anime.nome}</p>
                    <img src={anime.src} alt='capa-livro' />
                </ResultadoPesquisa>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa