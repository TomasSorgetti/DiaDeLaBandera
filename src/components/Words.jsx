import Word from "./Word";
import { useState } from "react";

const Words = ({
  activeWord,
  setActiveWord,
  activeList,
  setActiveList,
  newList,
  listCount,
  setListCount,
  setConfirm,
  confirm,
  response,
  setResponse,
  open,
  setOpen,
  setShake,
  setSoundPlayErr,
  setSoundPlayOk,
}) => {
  return (
    <div className="wordsCont">
      {newList.words?.map((word, index) => (
        <div key={index} className="wordCont" data-testid="word">
          {word.split("").map((letter, letterIndex) => (
            <Word
              key={letterIndex}
              letter={letter}
              activeWord={activeWord}
              setActiveWord={setActiveWord}
              word={word}
              listCount={listCount}
              setListCount={setListCount}
              activeList={activeList}
              setActiveList={setActiveList}
              newList={newList.words}
              confirm={confirm}
              setConfirm={setConfirm}
              response={response}
              setResponse={setResponse}
              open={open}
              setOpen={setOpen}
              setShake={setShake}
              setSoundPlayErr={setSoundPlayErr}
              setSoundPlayOk={setSoundPlayOk}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Words;
