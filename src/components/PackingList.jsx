import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {

    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

    function handleDelete(id) {
        setItems((item) => item.filter((item) => item.id !== id));
    }

    function handleToggle(id) {
        setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
    }

    function handleClearList() {
        setItems([]);
    }
    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (<Item item={item} key={item.id} handleDelete={handleDelete} handleToggle={handleToggle} />))}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={handleClearList}>Clear List</button>
            </div>
        </div>
    );
}
