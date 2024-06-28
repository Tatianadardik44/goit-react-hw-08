import clsx from "clsx"
import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div className={css.header}>
            <nav>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                {isLoggedIn &&  (<NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>)}
               
            </nav>
        </div>
    )
}
export default Navigation