import Logo from '../Logo';
import OpcoesHeader from '../opcoesHeader';
import IconesHeader from '../iconsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 4px solid #fff;

     @media (max-width: 863px) {
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header