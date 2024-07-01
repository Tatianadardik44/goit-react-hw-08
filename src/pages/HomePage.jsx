import css from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={css.homeBox}>
           <h1 className={css.title}>Task manager welcome page</h1>
            <span role="img"   aria-label="Greeting icon" className={css.emoji}>
            💁‍♀️
            </span>
          </div>
    )
}
export default HomePage