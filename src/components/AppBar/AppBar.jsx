import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import css from "./AppBar.module.css"
const AppBar = () => {
    return (
        <div className={css.header}>
            <Navigation />
            <AuthNav />
        </div>
    )
}
export default AppBar