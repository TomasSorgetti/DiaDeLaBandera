import "./App.css";
import list from "./List.js";
import { useEffect, useState } from "react";
import Words from "./components/Words.jsx";
import Leter from "./components/Leter.jsx";
import DeleteIcon from "./assets/Delete.png";
import arrow from "../src/assets/arrow.svg";
import Modals from "./components/Modals.jsx";
import song from "./assets/song.mp3";
import { Howl } from "howler";
import answerErr from "./assets/answerErr.mp3";
import answerOk from "./assets/answerOk.mp3";

let soundok;
let sounderr;
function App() {
  const [activeWord, setActiveWord] = useState(""); // palabra activa
  const [deleteLastWord, setDeleteLastWord] = useState(false); // confirm delete last word
  const [activeWordIndex, setActiveWordIndex] = useState([]); // index de palabras activas
  const [confirm, setConfirm] = useState(false); // confirmar
  const [activeList, setActiveList] = useState(0); // nivel del juego
  const [listCount, setListCount] = useState([]); //conteo de palabras completadas
  const [response, setResponse] = useState(null); // respuesta
  const [clean, setClean] = useState(false); // limpiar las palabras
  const [open, setOpen] = useState(false); // modal al terminar el nivel
  const [shake, setShake] = useState(false);

  const [soundPlayOk, setSoundPlayOk] = useState(false);
  const [soundPlayErr, setSoundPlayErr] = useState(false);

  const initializeSounds = () => {
    if (!soundok && !sounderr) {
      soundok = new Howl({
        src: [answerOk],
        onend: () => setSoundPlayOk(false),
      });

      sounderr = new Howl({
        src: [answerErr],
        onend: () => setSoundPlayErr(false),
      });
    }
  };
  useEffect(() => {
    initializeSounds();
  }, []);
  useEffect(() => {
    if (soundPlayOk && soundok) {
      soundok.play();
    }

    if (soundPlayErr && sounderr) {
      sounderr.play();
    }
  }, [soundPlayOk, soundPlayErr]);

  const actualLevel = Number(activeList) + 1;
  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      setActiveList(storedCount);
    }
  }, []);

  const handleClick = (word, index) => {
    let newWord = activeWord + word;
    setActiveWord(newWord);
    setActiveWordIndex((prev) => [...prev, index]);
    setDeleteLastWord(false);
  };

  const deleteLastLetter = () => {
    if (activeWordIndex.length === 0) return;
    let newWord = activeWord.slice(0, -1);
    setActiveWord(newWord);
    setDeleteLastWord(true);
    let newIndexList = activeWordIndex.slice(0, -1);
    setActiveWordIndex(newIndexList);
  };

  const handleSend = () => {
    if (activeWord.length === 0) return;
    setConfirm(true);
  };

  // Si ya no tengo mas niveles retorna la pantalla de completado
  if (list[activeList]) {
    const newList = list[activeList];
    return (
      <>
        <header>
          <h1>Día de la Bandera</h1>
          <p>
            Adiviná las palabras{" "}
            <span className="level">Nivel {actualLevel}</span>
          </p>
        </header>
        <main className="cont">
          <Words
            activeWord={activeWord}
            setActiveWord={setActiveWord}
            activeList={activeList}
            setActiveList={setActiveList}
            newList={newList}
            listCount={listCount}
            setListCount={setListCount}
            confirm={confirm}
            setShake={setShake}
            setConfirm={setConfirm}
            response={response}
            setResponse={setResponse}
            open={open}
            setOpen={setOpen}
            setSoundPlayErr={setSoundPlayErr}
            setSoundPlayOk={setSoundPlayOk}
          />
          <div className="activeWordCont">
            <div
              className={`activeWord ${shake ? "shake" : ""} ${
                response === true && "trueActiveWord"
              } 
            ${response === false && "falseActiveWord"} ${
                activeWord.length === 0 && "inactive"
              }`}
            >
              <span>{activeWord}</span>
            </div>
            <button
              className="send"
              onClick={() => {
                setActiveWord("");
                setClean(!clean);
              }}
            >
              <img src={DeleteIcon} alt="delete word" />
            </button>
            <button className="deleteLastLetter" onClick={deleteLastLetter}>
              del
            </button>
            <button className="send" onClick={handleSend}>
              <img src={arrow} alt="send answer" />
            </button>
          </div>
          <div className="letersCont">
            {newList.leters.map((leter, index) => (
              <Leter
                key={index}
                leter={leter}
                index={index}
                handleClick={handleClick}
                deleteLastWord={deleteLastWord}
                setDeleteLastWord={setDeleteLastWord}
                activeWordIndex={activeWordIndex}
                listCount={listCount}
                clean={clean}
                confirm={confirm}
                response={response}
              />
            ))}
          </div>
        </main>
        <Modals open={open} setOpen={setOpen} />
      </>
    );
  } else {
    return (
      <main className="complete">
        <h1>Día de la Bandera</h1>
        <span>has completado exitosamente el desafío</span>
        <audio src={song} type="audio/mpeg" autoPlay>
          Your browser does not support the <code>audio</code> element.
        </audio>
        <button
          onClick={() => {
            localStorage.setItem("count", 0);
            setActiveList(0);
          }}
        >
          Jugar de nuevo
        </button>
      </main>
    );
  }
}

export default App;
