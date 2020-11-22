import React from "react";
import PropTypes from "prop-types";

export const Toggler = ({ children, active, action, titleName }) => {
  return (
    <div className="toggler">
      <b>{titleName}: </b>
      {React.Children.count(children) > 0 && (
        <>
          {React.Children.map(children, (childItem) => {
            if (React.isValidElement(childItem)) {
              return React.cloneElement(
                childItem,
                {
                  active: childItem.props.value === active,
                  action: action(childItem.props.value),
                },
                <>{childItem.props.value}</>
                //ЧИ можна тут заюзати children, а в app прибрати з кожного компоненту label(right... left...)
              );
            }
          })}
        </>
      )}
    </div>
  );
};

Toggler.propTypes = {
  action: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};

export const TogglerItem = ({ children, active, action }) => {
  return (
    <button
      type="button"
      className={active ? "toggler__item active" : "toggler__item"}
      onClick={action}>
      {children}
    </button>
  );
};

TogglerItem.propTypes = {
  children: PropTypes.element,
  active: PropTypes.bool,
  action: PropTypes.func,
  value: PropTypes.string,
};
