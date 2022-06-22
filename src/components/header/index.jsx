import React from "react";

const Header = ({ children }) => {
  return (
    <>
      <h3 className="title">{children}</h3>
    </>
  );
};

export default Header;
