import useConfirm from "./useConfirm";
function App() {
  const deleteWord = () => console.log("Deleting Word");
  const abort = () => console.log("Abort");
  const confrimDelete = useConfirm("Are you sure?",deleteWord,abort)
  return (
    <div className="App">
      <h1 >HI</h1>
      <button onClick={confrimDelete}>delete</button>
    </div>
  )
}
export default App;