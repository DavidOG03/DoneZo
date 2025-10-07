import React, { useState } from "react";

const TravelList = () => {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState("input");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!description.trim()) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    setItems((items) => [...items, newItem]);
    setDescription("");
    setQuantity(1);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?"
    );
    if (confirmed) setItems([]);
  };

  let sortedItems = [...items];
  if (sortBy === "description") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <div className="w-full mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-t-lg text-white text-center">
        <h1 className="text-3xl font-bold">Travel Packing List </h1>
        <p className="text-sm mt-2 opacity-90">Pack smart, travel light!</p>
      </div>

      {/* Add Item Form */}
      <form
        onSubmit={handleAddItem}
        className="bg-orange-200 p-6 flex flex-wrap gap-3 items-center justify-center"
      >
        <span className="text-lg font-semibold">What do you need?</span>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition-colors"
        >
          Add
        </button>
      </form>

      {/* Items List */}
      <div className="bg-amber-50 p-6 min-h-[300px]">
        {items.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-xl mb-2">📦 Your packing list is empty!</p>
            <p className="text-sm">
              Start adding items you need for your trip.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sortedItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 bg-white p-3 rounded shadow-sm hover:shadow-md transition-shadow"
              >
                <input
                  type="checkbox"
                  checked={item.packed}
                  onChange={() => handleToggleItem(item.id)}
                  className="w-5 h-5 cursor-pointer accent-orange-500"
                />
                <span
                  className={`flex-1 ${
                    item.packed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.quantity} {item.description}
                </span>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-bold text-xl"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Controls */}
      <div className="bg-teal-700 p-6 rounded-b-lg">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
          <div className="flex gap-3 items-center">
            <span className="text-white font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-teal-500 rounded px-3 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="input">Input Order</option>
              <option value="description">Description</option>
              <option value="packed">Packed Status</option>
            </select>
          </div>
          <button
            onClick={handleClearList}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded font-semibold transition-colors"
          >
            Clear List
          </button>
        </div>

        {/* Statistics */}
        <div className="text-center text-white">
          <p className="text-lg font-semibold">
            {totalItems === 0
              ? "Start adding items to your list!"
              : percentage === 100
              ? "You're all packed and ready to go!"
              : ` You have ${totalItems} item${
                  totalItems !== 1 ? "s" : ""
                } on your list, and you already packed ${packedItems} (${percentage}%)`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelList;
