import React, { useEffect } from "react";
import useFetch from "./useFetch/useFetch";
import useLocalStorage from "./useLocalStorage/useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const {data, loading, error, request} = useFetch()

  useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/')
  }, [request])
  
  const handleClick = ({ target }) => setProduto(target.innerText);

  if(error) return <p>{error}</p>
  if(loading) return <p>Carregando...</p>
  if(data)
  return (
    <div>
      <p>Preferência: {produto}</p>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <div>
        {data.map(({id, nome}) => (
          <p key={id}>{nome}</p>
        ))}
      </div>
    </div>
  );
  else return null;
};

export default App;
