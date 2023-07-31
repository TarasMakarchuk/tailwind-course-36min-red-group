import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.parent}>
      <h1 className={styles.header}>Hello</h1>
      <div>
        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <hr />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />
        <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
          Login
        </button>

        {isOpen && <button className="animate-fade">Test1</button>}
      </div>
    </div>
  );
}

export default App;
