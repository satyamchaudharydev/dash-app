import React from "react";

const defaultStyle = {
  border: "1px solid rgb(242 242 242)",
  borderRadius: "5px",
  padding: "20px",
  background: "white",
};
function Card(props) {
  const { header, children } = props;
  const style = props.style
    ? { ...defaultStyle, ...props.style }
    : defaultStyle;
  return (
    <div className="card" style={style}>
      <div className="card-header">
        <h3>{header}</h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
