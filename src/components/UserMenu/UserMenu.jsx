import { useDispatch, useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from "../../redux/auth/operations"
const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    return (
        <div className={css.menu}>
            <p className={css.titleMenu}>Welcome, {user.name }!</p>
            <button type="button" onClick={() => dispatch(logOut())} className={css.btnMenu}>Logout</button>
        </div>
    )
}
export default UserMenu