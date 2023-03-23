export const ContactList = ({ contacts, onDeliteTodo }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number }) => (
          <li key={name}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => onDeliteTodo(name)}>Delite</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
