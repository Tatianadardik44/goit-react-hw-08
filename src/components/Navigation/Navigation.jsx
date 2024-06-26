import clsx from "clsx"
import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

const Navigation = () => {
    return (
        <div className={css.header}>
            <nav>
                <NavLink to="/" className={buildLinkClass}>Home</NavLink>
                <NavLink to="/contacts" className={buildLinkClass}>Contacts</NavLink>
            </nav>
        </div>
    )
}
export default Navigation