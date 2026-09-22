export default function Stats({ items }) {
    const totalItems = items.length;
    const packedItems = items.filter((item) => item.packed).length;
    const percentage = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

    return <div className="stats">
        <em>💼 You have {totalItems} items on your list, and you already packed {packedItems} ({percentage}%)</em>
    </div>;
}
