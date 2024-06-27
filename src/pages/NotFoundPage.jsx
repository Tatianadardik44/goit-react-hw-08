import { Link } from "react-router-dom"
import css from "./NotFoundPage.module.css"
const NotFoundPage = () => {
    return (
        <div className={css.error}>
            <b>Ooops! Not found page ...</b>
            <button className={css.btnError}>
                <Link to="/">Back to home page!</Link>
            </button>
            
        </div>
    )
}
export default NotFoundPage 
