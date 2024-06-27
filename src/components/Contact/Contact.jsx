import { FaPhone, FaUserLarge } from "react-icons/fa6"

import css from "./Contact.module.css"
import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"


const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  }
    return (
        <div className={css.contact}> 
            
         <div>
            <p><FaUserLarge className={css.icon }/>{contact.name}</p>
            <p> <FaPhone className={css.icon }/>{contact.number}</p>
            </div>
         <div>
           <button className={css.btn} onClick={handleDelete}>
             Delete
           </button>
         </div>
               
                
            
        </div>
    )
}
export default Contact