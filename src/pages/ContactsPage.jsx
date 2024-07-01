import { useDispatch, useSelector } from "react-redux";
import pero from "../assets/pero-removebg-preview.png"
import { useEffect } from "react";
import css from "./ContactsPage.module.css"
import ContactsForm from "../components/ContactsForm/ContactsForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
      const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchContacts())
  }, [dispatch])
    return (
    <div className={css.contactBox}>
        <h1 className={css.title}>Phonebook</h1>
        <div className={css.pero}>
         <ContactsForm />
        <img src={pero} alt="pero" width="200" height="200" />
        </div>
      
      <SearchBox />
     
            <ContactList />
    </div>
    )
}
export default ContactsPage