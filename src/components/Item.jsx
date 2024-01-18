function Item({ item, deleteById, handleToggleItem }) {
    const { id, description, quantity, packed } = item;
    return <li>
        <div onClick={() => handleToggleItem(id)}>
            <input type="checkbox" checked={packed} />
            <span style={packed ? { textDecoration: "line-through" } : {}}>{quantity} {description}</span>
        </div>
        <button onClick={() => { deleteById(id) }}>❌</button>
    </li>
}

export default Item;