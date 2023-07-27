import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.parent}>
      <h1 className={styles.header}>Hello</h1>
      <div>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <hr />
        <input
          placeholder="Password"
          value={password}
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
