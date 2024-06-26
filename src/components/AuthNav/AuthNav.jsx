import clsx from "clsx"
import { NavLink } from "react-router-dom"
import css from "./AuthNav.module.css"

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

const AuthNav = () => {
    return (
        <div className={css.header}>
            <nav>
                <NavLink to="/register" className={buildLinkClass}>Register</NavLink>
                <NavLink to="/login" className={buildLinkClass}>Log In</NavLink>
            </nav>
        </div>
    )
}
export default AuthNav