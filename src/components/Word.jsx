import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import list from "../List";

const Word = ({
  letter,
  activeWord,
  setActiveWord,
  word,
  listCount,
  setListCount,
  activeList,
  setActiveList,
  newList,
  setConfirm,
  confirm,
  setResponse,
  open,
  setOpen,
}) => {
  const [active, setActive] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setTimeout(() => {
      setOpen(true);
    }, 1500);
  };
  useEffect(() => {
    if (listCount.length === newList.length && list[activeList + 1]) {
      handleOpen();
      setTimeout(() => {
        setActiveList(activeList + 1);
        setListCount([]);
        handleClose();
      }, 4000);
    } else if (listCount.length === newList.length && !list[activeList + 1]) {
      setTimeout(() => {
        setActiveList(activeList + 1);
        setListCount([]);
        handleClose();
      }, 1000);
    }
  }, [listCount, newList, open]);

  useEffect(() => {
    if (!listCount.includes(word)) {
      setActive(false);
    }

    if (confirm && activeWord === word) {
      // Cuando la palabra escrita por el usuario es igual a la palabra
      setActive(true); // La palabra se muestra
      if (!listCount.includes(activeWord)) {
        // Actualiza el estado de listCount
        setResponse(true);
        setListCount([...listCount, activeWord]);
        setTimeout(() => {
          setActiveWord(""); // Se borra la palabra escrita por el usuario
          setResponse(null);
          setConfirm(false);
        }, 1000);
      }
    }

    if (confirm && activeWord !== word) {
      const condition = newList.filter((item) => item === activeWord);
      if (condition.length == 0) {
        setResponse(false);
      }
      setTimeout(() => {
        setActiveWord("");
        setConfirm(false);
        setResponse(null);
      }, 1000);
    }
  }, [activeWord, listCount, newList, setActiveWord, setListCount, confirm]);

  useEffect(() => {
    if (confirm && listCount.includes(activeWord)) {
      setResponse(false);
      setTimeout(() => {
        setActiveWord("");
        setConfirm(false);
        setResponse(null);
      }, 1000);
    }
  }, [confirm]);

  return (
    <span className={`${active ? "activeWordConfirm" : "word"}`}>
      {active ? letter : ""}
    </span>
  );
};

export default Word;
