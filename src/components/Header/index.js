import './style.css'
import logo from '../../assets/logo.png'

function Header(){
    return(
        <header>
            <img className='logo' src={logo} alt='logo'/>
        </header>
    )
}

export default Header;