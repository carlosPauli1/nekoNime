import './style.css'
import Logo from '../Logo';
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconsHeader';

function Header(){
    return(
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header