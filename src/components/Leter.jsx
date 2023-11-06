import React, { useState } from "react";
import { useEffect } from "react";

const Leter = ({ leter, handleClick, listCount, clean, confirm, response }) => {
  const [active, setActive] = useState(false);
  const [conditionDisable, setConditionDisable] = useState(false);

  useEffect(() => {
    setActive(false);
    setConditionDisable(false)
  }, [listCount, clean, confirm]);

  useEffect(() => {
    if (response || response === false) {
      setConditionDisable(true);
    }
  }, [response]);

  return (
    <button
      className={`leter ${active ? "activeButton" : ""}`}
      onClick={() => {
        handleClick(leter);
        setActive(true);
      }}
      disabled={
        active || conditionDisable ? true : false
      }
    >
      <span>{leter}</span>
    </button>
  );
};

export default Leter;
