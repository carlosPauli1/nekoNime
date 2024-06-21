import './style.css'
import profile from '../../img/perfil.svg'
import shop from '../../img/sacola.svg'

const icones = [profile, shop]

function iconesHeader(){
    return (
        <ul className='icons'>
          {icones.map( (icones) =>
            <li className='icon'><img src={icones} alt='icones'></img></li>
          )}
        </ul>
    )
}

export default iconesHeader