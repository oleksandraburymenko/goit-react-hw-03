import Contact from "./Contact";
import css from './Phonebook.module.css';


export default function ContactList ({ contacts, onDelete }) {
    return <>
    <ul>
    {contacts.map(contact=>
         <li key={contact.id} className={css.contact }>
        <Contact name={contact.name} number={contact.number} id={contact.id} onDelete={onDelete} />
    </li> )
    }
    </ul>
    </>
        
    
}

