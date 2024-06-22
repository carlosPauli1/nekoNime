import logo from '../../img/logo.png'
import styled from 'styled-components'

const AppHeaderLogo = styled.div`
  background-color: #ebe8dd;
`
const Logotipo = styled.img`
  width: 200px;
  margin: 2%;
`

function Logo(){
    return(
       <AppHeaderLogo>
          <Logotipo
            src={logo} 
            alt='logo-site'
          />
        </AppHeaderLogo>
    )
}

export default Logo