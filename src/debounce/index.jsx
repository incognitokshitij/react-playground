import { useState, useEffect } from "react";

function DebounceWithUseEffect() {
  const [text, setText] = useState("");
  const [debounceText, setDebounceText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("setting debounce value", text);
      setDebounceText(text);
    }, 500);

    return () => {
      console.log("clear timeout");
      clearInterval(timer);
    };
  }, [text]);

  return (
    <div>
      <div>{"text value: " + text}</div>
      <div>{"debounceText value: " + debounceText}</div>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default DebounceWithUseEffect;
