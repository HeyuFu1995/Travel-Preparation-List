function Status({ list }) {
    const numItems = list.length;
    const numPacked = list.filter((item) => item.packed).length;
    const percentage = Math.round(numPacked / numItems * 100);
    return <footer className="stats">
        <em>{percentage === 100 ? "You got everything! Ready to go 🛫" : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}</em>
    </footer>
}

export default Status;