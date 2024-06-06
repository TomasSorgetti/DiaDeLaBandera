import "./App.css";
import list from "./List.js";
import { useState } from "react";
import Words from "./components/Words.jsx";
import Leter from "./components/Leter.jsx";
import DeleteIcon from "./assets/Delete.png";
import arrow from "../src/assets/arrow.svg";
import Modals from "./components/Modals.jsx";

function App() {
  const [activeWord, setActiveWord] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [activeList, setActiveList] = useState(0);
  const [listCount, setListCount] = useState([]); //conteo de palabras completadas
  const [response, setResponse] = useState(null);
  const [clean, setClean] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClick = (word) => {
    let newWord = activeWord + word;
    setActiveWord(newWord);
  };
  const handleSend = () => {
    setConfirm(true);
  };

  let content;
  if (!list[activeList]) {
    content = (
      <div>
        <h1>Felicidades, has completado exitosamente el desafío</h1>
      </div>
    );
  } else {
    const newList = list[activeList];
    
    content = (
      <>
        <header>
          <span>Día de la Bandera</span>
          <h1>Adiviná las palabras</h1>
        </header>

        <div className="cont">
          <Words
            activeWord={activeWord}
            setActiveWord={setActiveWord}
            activeList={activeList}
            setActiveList={setActiveList}
            newList={newList}
            listCount={listCount}
            setListCount={setListCount}
            confirm={confirm}
            setConfirm={setConfirm}
            response={response}
            setResponse={setResponse}
            open={open}
            setOpen={setOpen}
          />
          <div className="activeWordCont">
            <div
              className={`activeWord ${response === true && "trueActiveWord"} 
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
            <button className="send" onClick={handleSend}>
              <img src={arrow} alt="send answer" />
            </button>
          </div>
          <div className="letersCont">
            {newList.leters.map((leter, index) => (
              <Leter
                key={index}
                leter={leter}
                handleClick={handleClick}
                listCount={listCount}
                clean={clean}
                confirm={confirm}
                response={response}
              />
            ))}
          </div>
        </div>

        <Modals open={open} setOpen={setOpen} />
      </>
    );
  }

  return <main className="main">{content}</main>;
}

export default App;
