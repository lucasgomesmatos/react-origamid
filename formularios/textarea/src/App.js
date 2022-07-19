import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <form>
      <textarea
        value={value}
        onChange={({ target }) => setValue(target.value)}
        rows="5"
      />
      {value}
    </form>
  );
};

export default App;
