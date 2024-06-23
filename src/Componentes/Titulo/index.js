import styled from "styled-components";

export const Titulo = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '30px'};
    text-align: center;
    margin: 0;
    font-family: "Oswald", sans-serif;
`