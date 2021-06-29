import React from "react";

function Categories({ filter, categories }) {
  return (
    <div className="button">
      {categories.map((catego, index) => {
        return (
          <button
            type="button"
            className="btnPort"
            onClick={() => filter(catego)}
            key={index}
          >
            {catego}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
