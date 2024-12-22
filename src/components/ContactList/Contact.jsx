import './Contact.css'

const Contact = ({ contact, onRemoveContact }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={() => onRemoveContact(contact.id)}>Delete</button>
  </li>
);

export default Contact;
