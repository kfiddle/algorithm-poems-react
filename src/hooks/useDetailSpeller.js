import { useState, useEffect } from "react";

const useDetailSpeller = (on) => {
  const [letters, setLetters] = useState("");

  const deets = "click for details";
  let lettersIndex = 0;

  useEffect(() => {

    function oneLetter() {
      function changeALetter(timestamp) {
        if (lettersIndex < deets.length + 1) {
          setLetters(deets.substr(0, lettersIndex));
          lettersIndex++;
        }
        requestAnimationFrame(oneLetter);
      }
      requestAnimationFrame(changeALetter);
    }

    if (on) {
      oneLetter();
    } else {
      setLetters("");
    }
  }, [on, lettersIndex]);

  return letters;
};

export default useDetailSpeller;
