import React from "react";
import "../App.css";

function FlexContainer(props) {
  const gapStyle = {
    gap: props.gap || 0,
  };
  const alignStyle = {
    justifyContent: props.align || "flex-start",
    alignItems: props.valign || "flex-start",
  };
  return (
    <div style={{ ...gapStyle, ...alignStyle }} className="flex-container">
      {props.children}
    </div>
  );
}

function FlexItem(props) {
  return <div className="flex-item">{props.children}</div>;
}

export { FlexContainer, FlexItem };
