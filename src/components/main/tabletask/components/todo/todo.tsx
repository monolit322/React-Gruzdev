import React from "react";
import "./style.css";

type TodoObjType = {
  category: string;
  subcategory: string;
  brand: string;
  goods: string;
  cashback: string;
  isSelected: boolean;
};

type TodoType = {
  todoItems: Array<TodoObjType>
};

const todo = (props: TodoType) => {
  
  return (
    
    <div>
      <div className="table_header table_todo">
        <div className="checkbox_container">
          <input checked={props.todoItems[0].isSelected} type="checkbox" className="checkbox" />
        </div>
        <div className="category_container">
          <div className="category">{props.todoItems[0].category}</div>
        </div>
        <div className="subcategory_container">
          <div className="Subcategory">Подкатегория</div>
        </div>
        <div className="brand_container">
          <div className="Brand">Брэнд</div>
        </div>
        <div className="goods_container">
          <div className="goods">Товары</div>
        </div>
        <div className="cashback_container">
          <div className="cashback">Кэшбек</div>
        </div>
      </div>
    </div>
  );
};

export default todo;
