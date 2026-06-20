import React, { useState } from "react";
let timer;
function debounce(fn, delay) {
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function DebounceWithoutUseEffect() {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  // create debounced function once and move timer outside as line 2
  const handleDebouncedChange = debounce((value) => {
    console.log("debounced:", value);
    setDebouncedText(value);
  }, 2000);

  // const handleDebouncedChange = useMemo(
  //   () =>
  //     debounce((value) => {
  //       console.log("debounced:", value);
  //       setDebouncedText(value);
  //     }, 2000),
  //   [],
  // );

  function handleChange(e) {
    const value = e.target.value;
    setText(value);

    handleDebouncedChange(value);
  }

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <p>
        <strong>Real-time:</strong> {text}
      </p>
      <p>
        <strong>Debounced:</strong> {debouncedText}
      </p>
    </div>
  );
}

export default DebounceWithoutUseEffect;
