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
    if (activeWord === word) {
      // Cuando la palabra escrita por el usuario es igual a la palabra
      setActive(true); // La palabra se muestra
      if (!listCount.includes(activeWord)) {
        // Actualiza el estado de listCount
        setListCount([...listCount, activeWord]);
        setActiveWord(""); // Se borra la palabra escrita por el usuario
      }
    }
  }, [activeWord, listCount, newList, setActiveWord, setListCount]);

  return <span className="word">{active ? letter : ""}</span>;
};

export default Word;
