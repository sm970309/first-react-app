import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [value,setValue] = useState(0);
  const [keyword,setKeyword] = useState("")
  const onChange=(event) => {
    setKeyword(event.target.value);
  }
  const onClick = () => setValue((prev) => prev+1);
  // console.log('i run all the time')
  useEffect(() =>{
    console.log('CALL TEH API...');
  },[])
  useEffect(() =>{
    if (keyword!="" && keyword.length>5){
    console.log('SERCH FOR',keyword);
    }
  },[keyword])
  useEffect(() =>{
    console.log("value is changed.");
  },[value])
  return (
    <div className="App">
    <input value={keyword} onChange={onChange}type="text" placeholder = "Search here..."></input>
      <h1 className={styles.title}>Welcome Back!</h1>
      <h2>{value}</h2>
      <Button text={"Click me"} onClick = {onClick} />
    </div>
  );
}
export default App;