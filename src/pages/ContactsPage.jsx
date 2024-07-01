import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import css from "./ContactsPage.module.css"
import ContactsForm from "../components/ContactsForm/ContactsForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { fetchContacts } from "../redux/contacts/operations";
import { selectErrorContact, selectLoadingContact } from "../redux/contacts/selectors";
const ContactsPage = () => {
      const dispatch = useDispatch();
  const loading = useSelector(selectLoadingContact);
  const error = useSelector(selectErrorContact);
  useEffect(() => {
   dispatch(fetchContacts())
  }, [dispatch])
    return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error }
            <ContactList />
    </div>
    )
}
export default ContactsPage