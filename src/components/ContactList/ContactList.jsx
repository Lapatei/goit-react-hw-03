import Contact from './Contact';
import './ContactList.css'

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(contact => (
      <Contact key={contact.id} contact={contact} onRemoveContact={onRemoveContact} />
    ))}
  </ul>
);

export default ContactList;
