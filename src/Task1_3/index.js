import React from "react";

/*
    React.Children ->
        Методы для перебора дочерных элементов

        React.Children.map(children, function[(thisArg)]) -> Возвращает новый массив
        React.Children.forEach(children, function[(thisArg)]) -> Просто перебирает

        React.Children.count(children) -> Возвращает количество дочерних элементов
        React.Children.only(children) -> Проверят что у компонента есть только один дочерний элемент

        React.isValidElement(object) -> Проверяет, явкляет ли то что вы туда передали валидным реакт обьектом

        React.cloneElement(
            element,
            [props],
            [...children]
        )
*/

const DemoChilds = ({ children }) => {
  console.log("[counter]", React.Children.count(children));
  // console.log('[only]', React.Children.only(children) );
  return (
    <div>
      <h1> Demo Childs </h1>
      {React.Children.count(children) >= 0 && (
        <>
          {React.Children.map(children, (childItem) => {
            console.log("[child]", childItem, React.isValidElement(childItem));
            if (React.isValidElement(childItem)) {
              return React.cloneElement(childItem, {
                text: "123",
              });
            }
          })}
        </>
      )}
    </div>
  );
};

export default DemoChilds;
