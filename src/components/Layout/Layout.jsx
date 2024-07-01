import { Suspense } from "react"
import AppBar from "../AppBar/AppBar"
import { useSelector } from "react-redux"
import { selectErrorContact, selectLoadingContact } from "../../redux/contacts/selectors";
import { selectErrorAuth, selectLoadingAuth } from "../../redux/auth/selectors";



const Layout = ({ children }) => {
    const loadingContact = useSelector(selectLoadingContact);
    const errorContact = useSelector(selectErrorContact);
    const loadingAuth = useSelector(selectLoadingAuth);
    const errorAuth = useSelector(selectErrorAuth)
    return (
        <div>
            <AppBar />
            {loadingContact && <p>Loading contacts...</p>}
            {errorContact}
            {loadingAuth && <p>Loading...</p>}
             {errorAuth }
            <Suspense fallback={null}>{children}</Suspense>
        </div>
    )
}
export default Layout