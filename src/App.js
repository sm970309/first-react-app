import useFadeIn from "./hooks/useFadeIn";
function App() {
  const fadeInH1 = useFadeIn(3);
  const fadeInP = useFadeIn(3,1);
  return (
    <div className="App">
      <h1 {...fadeInH1}>HI</h1>
      <p {...fadeInP}>Nice to meet you</p>
    </div>
  )
}
export default App;