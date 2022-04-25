import useScroll from "./hooks/useScroll";
function App() {
  const {y} = useScroll();
  return (
    <div className="App" style={{height:"200vh"}}>
      <h1 style={{position:"fixed", color: y<100? "red":"blue"}}>HI</h1>
    </div>
  )
}
export default App;