export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding your plans</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <>
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Good Job"
          : ` 💼 You have ${numItems} items on your list, and you already finished ${numPacked} (${percentage}%)`}
      </em>
    
    </footer>
    
    </>
  );
}
