import React, { useEffect, useState } from "react";

function App() {
  const [isFocused, setIsFocused] = useState(true);

  const onFocus = () => {
    setIsFocused(true);
    console.log(
      "Tab is in focus",
      new Date().getMinutes(),
      "min:",
      new Date().getSeconds(),
      "s"
    );
  };

  // User has switched away from the tab (AKA tab is hidden)
  const onBlur = () => {
    setIsFocused(false);
    console.log(
      "Tab is Blurred",
      new Date().getMinutes(),
      "min:",
      new Date().getSeconds(),
      "s"
    );
  };
  useEffect(() => {
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    // Specify how to clean up after this effect:
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  });
  return (
    <div className="app">
      <p>Check the console to get the logs.</p>
      the tab is is : {isFocused ? "in focus" : "not focused"}
    </div>
  );
}

export default App;
