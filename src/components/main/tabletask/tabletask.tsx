import React from "react";
import "./style.css";
import Todo from "./components/todo/todo";

const TableTask = () => {

    let todoItems = [
        {id: 1, isSelected: false, category: 'Эстетический уход', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 2, isSelected: true, category: 'Средства для коррекции фигуры и массажа ', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 3, isSelected: true, category: 'Эстетический уход', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 4, isSelected: false, category: 'Пилинги', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 5, isSelected: true, category: 'Эстетический уход', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 6, isSelected: true, category: 'Эстетический уход', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 7, isSelected: false, category: 'Эстетический уход', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 8, isSelected: true, category: 'Пилинги', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 9, isSelected: false, category: 'Эстетический уход', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
        {id: 10, isSelected: true, category: 'Средства для коррекции фигуры и массажа ', subcategory: 'Очищение', brand: '-', goods: '-', cashback: '20%'},
    ]

  return (
    <div className="table">
      <div className="table_container">
        <div className="table_settings">
          <div className="table_settings_first">
            <label
              className="table_settings_label labelForPages"
              htmlFor="numberOfPages"
            >
              Показывать
            </label>
            <select
              className="numberOfPages"
              name="numberOfPages"
              id="numberOfPages"
            >
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="table_settings_second">
            <label className="table_settings_label labelForPage" htmlFor="page">
              Страница
            </label>
            <input className="page" id="page" min="1" value="1" type="number" />
            <span> из 1</span>
          </div>
          <div className="table_settings_third">
            <button className="pagination_button prev_page"></button>
            <button className="pagination_button next_page"></button>
          </div>
        </div>
        <button className="table_button">Добавить акцию</button>
        <div className="table_header">
          <div className="checkbox_container">
            <input type="checkbox" className="checkbox" />
          </div>
          <div className="category_container">
            <div className="category">Категория</div>
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
        {todoItems.map((todoItem) => (
          <Todo todoItem={todoItem} />
        ))}
      </div>
    </div>
  );
};

export default TableTask;
