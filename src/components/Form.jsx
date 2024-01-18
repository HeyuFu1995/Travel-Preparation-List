import { useState } from "react";

function Form({ addItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    function handleSubmit(event) {
        event.preventDefault();
        if (!description) return;
        const newItem = { description, quantity, packed: false, id: Date.now() };
        addItem(newItem);

        setDescription("");
        setQuantity(1);
    }

    function handleChange({ target }) {
        setDescription(target.value);
    }

    function handleSelect({ target }) {
        setQuantity(target.value);
    }

    return <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={handleSelect}>
            {Array.from({ length: 20 }, (_, i) => i + 1)
                .map(num =>
                    <option value={num} key={num}>{num}</option>
                )}
        </select>
        <input type="text" placeholder="Item..." value={description} onChange={handleChange} />
        <button>Add</button>
    </form>
}

export default Form;