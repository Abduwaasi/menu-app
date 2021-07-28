import React, { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
const allCategory = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategory);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenuItem(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};

export default App;
