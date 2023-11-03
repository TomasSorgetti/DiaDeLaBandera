import Word from './Word'
import { useState } from "react";



const Words = ({
  activeWord,
  setActiveWord,
  activeList,
  setActiveList,
  newList,
  listCount,
  setListCount,
}) => {

  return (
    <div className="wordsCont">
      {newList.words?.map((word, index) => (
        <div key={index} className="wordCont">
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
              index={index}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Words