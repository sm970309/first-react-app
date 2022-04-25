import useAxios from "./hooks/useAxios";
function App() {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json "
  })
  console.log(loading, JSON.stringify(data))
  return (
    <div className="App">
      <h1>{loading ? "Loading..." : "OK"}</h1>

      <button onClick={refetch}>refetch</button>
    </div>
  )
}
export default App;