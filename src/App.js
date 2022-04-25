import useNotification from "./hooks/useNotification";
function App() {
  const triggerNotif = useNotification("Hi",{body:"It's a message"});
  return (
    <div className="App">
      <button onClick={triggerNotif}>Click</button>
    </div>
  )
}
export default App;