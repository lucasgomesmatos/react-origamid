import React, { useState } from "react";

const Checkbox = () => {
  const [termos, setTermos] = useState(false);

  return (
    <div>
      {termos && <p>Aceitos os Termos</p>}
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos
      </label>
    </div>
  );
};

export default Checkbox;
