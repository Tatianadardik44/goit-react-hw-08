import { useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { selectUser } from "../../redux/auth/selectors"
const UserMenu = () => {
    const user = useSelector(selectUser)
    return (
        <div className={css.menu}>
            <p className={css.titleMenu}>Welcome, {user.name }!</p>
            <button className={css.btnMenu}>Logout</button>
        </div>
    )
}
export default UserMenu