import useNetwork from "./hooks/useNetwork";

function App() {
  const handleNetworkChange = (online) =>{
    console.log(online?"Online":"Offline")
  }
  const online = useNetwork(handleNetworkChange);
  
  return (
    <div className="App">
      <h1>{online?"ON":"OFF"}</h1>
    </div>
  )
}
export default App;