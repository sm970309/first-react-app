import useFullscreen from "./hooks/useFullscreen";
function App() {
  const onFulls = (isFull) =>{
    console.log(isFull?"Full":"Small");
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  
  return (
    <div ref={element} className="App" style={{ height: "200vh" }}>
      <div>
        <img src="http://wiki.hash.kr/images/thumb/5/5c/%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8_%EB%A1%9C%EA%B3%A0.png/200px-%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8_%EB%A1%9C%EA%B3%A0.png" />
      </div>
      <button onClick={exitFull}>Exit full Screen</button>
      <button onClick={triggerFull}>Make full Screen</button>
    </div>
  )
}
export default App;