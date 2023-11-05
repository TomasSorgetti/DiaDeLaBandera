import "./App.css";
import list from "./List.js";
import { useState } from "react";
import Words from "./components/Words.jsx";
import Leter from "./components/Leter.jsx";

function App() {
  const [activeWord, setActiveWord] = useState("");
  const [confirm , setConfirm] = useState(false);
  const [activeList, setActiveList] = useState(0);
  const [listCount, setListCount] = useState([]); //conteo de palabras completadas
  const [clean, setClean] = useState(false);

  const newList = list[activeList] ? list[activeList] : list[0];

  const handleClick = (word) => {
    let newWord = activeWord + word;
    setActiveWord(newWord);
  };
  const handleSend = () => {
    setConfirm(true)
  };

  return (
    <main>
      <h1>Word Game</h1>
      <span>{activeWord}</span>
      <section className="cont">
        <article className="">
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
          />
        </article>
        <article className="letersCont">
          {newList.leters.map((leter, index) => (
            <Leter
              key={index}
              leter={leter}
              handleClick={handleClick}
              listCount={listCount}
              clean={clean}
            />
          ))}
        </article>
        <article>
          <button
            className="clean"
            onClick={() => {
              setActiveWord("");
              setClean(!clean);
            }}
          >
            Clean
          </button>
          <button
            className="send"
            onClick={handleSend}
          >
            Send
          </button>
        </article>
      </section>
    </main>
  );
}

export default App;
