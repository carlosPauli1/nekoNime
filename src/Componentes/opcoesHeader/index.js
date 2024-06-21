import './style.css'
const textoItensMenu = ['Animes', 'Mangas', 'Favoritos']

function opcoesHeader(){
    return (
        <ul className='opcoes-menu'>
        { textoItensMenu.map ( (texto) => (
                <li className='opcoes-item-menu'><p>{texto}</p></li>
            ) ) }
        </ul>
    )
}

export default opcoesHeader