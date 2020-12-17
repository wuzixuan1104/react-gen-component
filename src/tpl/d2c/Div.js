import React from "react";
import get from "./methods/get";
import objToArr from "./methods/objToArr";

const Div = ({ name, elId, props, children }) => {
  const getProps = get(props);

  const getClassnames = () => {
    let classes = getProps(`${elId}.class`);
    if (!classes) return "";
    if (typeof classes === "object") {
      classes = objToArr(classes).reduce((acc, name) => {
        if (classes[name]) acc.push(name);
        return acc;
      }, []);
    }
    return classes.length > 0 ? classes.join(" ") : "";
  };
  const getStyles = () => getProps(`${elId}.style`, {});
  return (
    <div
      data-name={name}
      className={`${elId} ${getClassnames()}`}
      style={getStyles()}
      {...getProps(`${elId}.fn`, {})}
    >
      {children}
    </div>
  );
};

export default Div;
