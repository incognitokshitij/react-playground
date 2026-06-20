import React, { useEffect, useState } from "react";

let lastThrottleCall = 0;
let throttleTimer = null;

function ThrottleWithUseEffect() {
  const [text, setText] = useState("");
  const [throttleText, setThrottleText] = useState("");

  useEffect(() => {
    const now = Date.now();
    console.log("now", now);
    const timeSinceLastCall = now - lastThrottleCall;
    const delay = 3000;
    if (timeSinceLastCall >= delay) {
      lastThrottleCall = now;
      console.log("time gone setting data", text);
      setThrottleText(text);
    } else {
      // move to next call
      const remaining = delay - timeSinceLastCall;
      throttleTimer = setTimeout(() => {
        throttleTimer = Date.now();
        console.log("first time setting data in a window", text);
        setThrottleText(text);
      }, remaining);
    }

    return () => {
      clearTimeout(throttleTimer);
    };
  }, [text]);

  function handleValueChange(e) {
    setText(e.target.value); // updates `text`, which triggers the throttle effect
  }

  return (
    <div>
      <input
        value={text}
        onChange={handleValueChange}
        placeholder="Type here..."
      />
      <p>
        <strong>Real-time value:</strong> {text}
      </p>
      <p>
        <strong>Throttle value (3000ms delay):</strong> {throttleText}
      </p>
    </div>
  );
}
export default ThrottleWithUseEffect;
