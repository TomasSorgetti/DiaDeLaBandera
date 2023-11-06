import React, { useState } from "react";
import { useEffect } from "react";

const Leter = ({ leter, handleClick, listCount, clean, confirm }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(false);
  }, [listCount, clean, confirm]);

  return (
    <button
      className={`leter ${active ? "activeButton" : ""}`}
      onClick={() => {
        handleClick(leter);
        setActive(true);
      }}
      disabled={active ? true : false}
    >
      <span>{leter}</span>
    </button>
  );
};

export default Leter;
