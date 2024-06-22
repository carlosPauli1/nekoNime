import styled from 'styled-components'

const OpcoesMenu = styled.ul`
  display: flex;
`
const OpcoesMenuItem = styled.li`
    font-size: 25px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
    height: 100%;
    font-family: "Lobster", sans-serif;
    font-weight: 400;
    font-style: normal;
`

const textoItensMenu = ['Animes', 'Mangas', 'Favoritos']

function opcoesHeader(){
    return (
        <OpcoesMenu>
            { textoItensMenu.map ( (texto) => (
                <OpcoesMenuItem> <p>{texto}</p> </OpcoesMenuItem>
            ) ) }
        </OpcoesMenu>
        
    )
}

export default opcoesHeader