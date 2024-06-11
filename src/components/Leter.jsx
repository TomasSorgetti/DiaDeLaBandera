import React, { useState } from "react";
import { useEffect } from "react";

const Leter = ({
  leter,
  handleClick,
  listCount,
  clean,
  confirm,
  response,
  index,
  activeWordIndex,
  deleteLastWord,
  setDeleteLastWord,
}) => {
  const [active, setActive] = useState(false);
  const [conditionDisable, setConditionDisable] = useState(false);

  useEffect(() => {
    setActive(false);
    setConditionDisable(false);
  }, [listCount, clean, confirm]);

  useEffect(() => {
    if (response || response === false) {
      setConditionDisable(true);
    }
  }, [response, deleteLastWord]);
  useEffect(() => {
    if (deleteLastWord && !activeWordIndex.includes(index)) {
      setActive(false);
      setDeleteLastWord(false);
    }
  }, [deleteLastWord, activeWordIndex]);

  return (
    <button
      className={`leter ${active ? "activeButton" : ""}`}
      onClick={() => {
        handleClick(leter, index);
        setActive(true);
      }}
      disabled={active || conditionDisable ? true : false}
    >
      {leter}
    </button>
  );
};

export default Leter;
