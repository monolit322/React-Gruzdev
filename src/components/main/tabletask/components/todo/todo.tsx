import React from "react";
import "./style.css";
import { TodoProps } from "./todoProps";

const todo = (props: TodoProps) => {
  
  const { todoItem } = props;

  return (
    
    <div>
      <div className="table_header table_todo">
        <div className="checkbox_container">
          <input checked={todoItem.isSelected} type="checkbox" className="checkbox" />
        </div>
        <div className="category_container">
          <div className="category">{todoItem.category}</div>
        </div>
        <div className="subcategory_container">
          <div className="Subcategory">{todoItem.subcategory}</div>
        </div>
        <div className="brand_container">
          <div className="Brand">{todoItem.brand}</div>
        </div>
        <div className="goods_container">
          <div className="goods">{todoItem.goods}</div>
        </div>
        <div className="cashback_container">
          <div className="cashback">{todoItem.cashback}</div>
        </div>
      </div>
    </div>
  );
};

export default todo;
