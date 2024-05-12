export default function Item({ item, onDeleteItem, onToggleItem }) {
  const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;


  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <span>{formattedDate}</span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
