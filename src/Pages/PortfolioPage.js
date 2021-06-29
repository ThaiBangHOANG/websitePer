import React from "react";
import { useState } from "react";
import Title from "../Components/AboutContactTitle";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Portfolio from "../Components/Portfolio";

const allCategories = [
  "Categories",
  ...new Set(Portfolio.map((item) => item.category)),
];
function PortfolioPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(Portfolio);

  const filter = (category) => {
    if (category === "Categories") {
      setMenuItems(Portfolio);
      return;
    }

    const filterCategory = Portfolio.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filterCategory);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Portfolios"} span={"Portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfolioPage;
