import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [value,setValue] = useState(0)
  const onClick = () => setValue((prev) => prev+1);
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome Back!</h1>
      <h2>{value}</h2>
      <Button text={"Click me"} onClick = {onClick} />
    </div>
  );
}
export default App;