import React, { useState } from "react";
import { useEffect } from "react";

const Leter = ({ leter, handleClick, listCount, clean }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(false);
  }, [listCount, clean]);

  return (
    <button
      className={`leter ${active ? "activeButton" : ""}`}
      onClick={() => {
        handleClick(leter);
        setActive(true);
      }}
      disabled={active ? true : false}
    >
      {leter}
    </button>
  );
};

export default Leter;
