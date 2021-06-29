import React from "react";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolios">
      {menuItem.map((item) => {
        return (
          <div className="porfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link1}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h2>{item.title}</h2>
            <p>{item.describe}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
