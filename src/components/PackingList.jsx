import { useState } from "react";
import Item from "./Item";

function PackingList({ list, deleteById, handleToggleItem, clearList }) {
    const [sortBy, setSortBy] = useState("input");

    function handleSortChange(event) {
        setSortBy(event.target.value);
    }

    let sortList;
    if (sortBy === "input") {
        sortList = list;
    }
    else if (sortBy === "description") {
        sortList = list.slice().sort((a, b) => a.description.localeCompare(b.description));
    }
    else if (sortBy === "packed") {
        sortList = list.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return <div className="list">
        <ul>
            {sortList.map(item => <Item item={item} key={item.id} deleteById={deleteById} handleToggleItem={handleToggleItem} />)}
        </ul>

        <div className="action">
            <select value={sortBy} onChange={handleSortChange}>
                <option value="input">Sort by input order</option>
                <option value="description">Sort by description</option>
                <option value="packed">Sort by packed status</option>
            </select>
            <button onClick={clearList}>Clear List</button>
        </div>
    </div>
}

export default PackingList;