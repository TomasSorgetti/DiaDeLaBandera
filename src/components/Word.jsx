import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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
  response,
  setResponse,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!listCount.includes(word)) {
      setActive(false);
    }
    if (listCount.length === newList.length) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Congrats",
        text: "You complete the level",
        showConfirmButton: false,
        timer: 2500,
      }).then(() => {
        setActiveList(activeList + 1);
        setListCount([]);
      });
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
          }, 1000);
      }
    }
    
    if (confirm && activeWord !== word) {
      const condition= newList.filter(item=>item===activeWord)
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
  }, [confirm])
  
  return (
    <span className={`${active ? "activeWordConfirm" : "word"}`}>
      {active ? letter : ""}
    </span>
  );
};

export default Word;
