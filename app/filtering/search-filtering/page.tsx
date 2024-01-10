"use client";
import { products } from "@/public/data/products";
import { SyntheticEvent, useState } from "react";

export default function SearchFiltering() {
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(products);

  function handleSearch(e: SyntheticEvent<HTMLInputElement>) {
    setSearch(e.currentTarget.value);

    if (search.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search)
      );
      setFilteredItems(filteredProducts);
    } else {
      setFilteredItems(products);
    }
  }

  return (
    <main>
      <div className="flex justify-center items-center gap-4 pt-10">
        <p>Search</p>
        <input
          type="text"
          className="outline-none border border-green-400"
          onChange={handleSearch}
        />
      </div>
      <div className="pt-10 flex flex-col gap-6">
        {filteredItems.map(({ id, name, date }) => (
          <p key={id} className="flex justify-center items-center gap-4 ">
            {name} <span>{date}</span>
          </p>
        ))}
      </div>
    </main>
  );
}
