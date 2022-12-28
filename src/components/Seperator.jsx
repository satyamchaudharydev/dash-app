import React from "react";

const defaultStyle = {
  width: "100%",
  background: "rgb(242 242 242)",
  height: "2px",
  marginBlock: "40px",
};
function Seperator(props) {
  const style = props.style
    ? { ...defaultStyle, ...props.style }
    : defaultStyle;
  return (
    <div style={style} className="seperator">
      <div className="seperator__line"></div>
    </div>
  );
}

export default Seperator;
