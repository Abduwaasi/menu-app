import React from "react";

const Menu = ({ items }) => {
  return (
    <section className="section-center">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <div className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <p className="price">${price}</p>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Menu;
