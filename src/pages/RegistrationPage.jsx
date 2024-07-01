import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import css from "./RegistrationPage.module.css"
const RegistrationPage = () => {
    return (
        <div className={css.registerBox}>
            <RegistrationForm />
        </div>
    )
}
export default RegistrationPage