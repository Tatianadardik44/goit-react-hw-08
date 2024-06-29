import css from "./LoginPage.module.css"
import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm/LoginForm"

const LoginPage = () => {
    return (
        <div className={css.loginPage}>
            <LoginForm />
              <div className={css.box}>
                <b className={css.text}>If you are not registered, take advantage of this opportunity</b>
            <button type="button" className={css.btnRegister}>
                <Link to="/register">Registration</Link>
            </button>
            </div>
           
        </div>
    )
}
export default LoginPage