import { useState, useEffect } from "react";
import css from './Phonebook.module.css';
import "modern-normalize";
import  ContactForm  from './ContactForm';
import  SearchBox  from './SearchBox';
import  ContactList  from './ContactList';


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("updContacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return allContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("updContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };


  const deleteContact = (contactId)=>{
    setContacts(prevContacts=> {
      return prevContacts.filter(contact=> contact.id !== contactId)}
    )
      }
    
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log(filterContacts);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox onFilter={setFilter} value={filter} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
}


