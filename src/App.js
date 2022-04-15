import useBeforeLeave from './useBeforeLeave'

function App() {
  const onBefore = (()=>window.alert("Don't Leave"));
  useBeforeLeave(onBefore);
  return (
    <div className="App">
      <h1 >HI</h1>
    </div>
  )
}
export default App;