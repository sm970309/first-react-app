import usePreventLeave from "./usePreventLeave";


function App() {
  const {enableEvent,disableEvent} = usePreventLeave();
  return (
    <div className="App">
      <h1 >HI</h1>
      <button onClick={enableEvent}>delete</button>
      <button onClick={disableEvent}>delete</button>
    </div>
  )
}
export default App;