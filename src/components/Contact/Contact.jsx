import css from "./Contact.module.css";

const Contact = ({ contact, onDelete }) => {
  const { name, number } = contact;

  return (
    <li className={css.card}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Contact;
