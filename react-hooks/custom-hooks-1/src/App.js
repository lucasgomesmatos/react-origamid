import React, { useEffect } from "react";
import useFetch from "./useFetch/useFetch";
import useLocalStorage from "./useLocalStorage/useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      console.log(response, json)
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <>
        <p>Produto: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button style={{ marginLeft: "1rem" }} onClick={handleClick}>
          smartphone
        </button>
        {!loading && data.map(({ id, nome }) => <p key={id}>{nome}</p>)}
      </>
    );
  else return null;
};

export default App;
