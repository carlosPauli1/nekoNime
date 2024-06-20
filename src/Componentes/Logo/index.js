import './style.css'
import logo from '../../img/logo.png'

function Logo(){
    return(
        <div className='App-hearder-logo'> 
          <img src={logo} alt='logo-site'></img>
        </div>
    )
}

export default Logo