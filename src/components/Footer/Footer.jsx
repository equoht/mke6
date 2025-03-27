import { Link, NavLink } from 'react-router-dom'
import footerlogo from '../../../public/footer_logo.png'
import s from './Footer.module.css'

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className={s.footer_inner}>
                    <img src={footerlogo} alt="#" className={s.logo}/>
                    <nav className={s.nav}>
                        <NavLink to="/" className={`${s.nav_item} nav_item`}>О нас</NavLink>
                        <NavLink to="/catalog" className={`${s.nav_item} nav_item`}>Каталог</NavLink>
                        <NavLink to="/about_us" className={`${s.nav_item} nav_item`}>Где нас найти</NavLink>
                    </nav>
                </div>
            </div>
        </footer>
    )
}