import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PASSWORD } from "../utils/dateConfig";
import "../styles/password.css";

function PasswordPage() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const[count,setcount]=useState(0);
  const navigate = useNavigate();

  const handleUnlock = () => {
    if (input === PASSWORD) {
      navigate("/countdown");
    } 
 
     if(count==0){ 
      setError("Hmm… try again, love 😉");
        setcount(count+1);
        setInput("");
    }
    else if(count==1){
      setError("Almost there, babe! 🌟")   
      setcount(count+1)
      setInput("");
    }
    else if(count==2){
      setError("The password length is 8 💖")   
      setcount(count+1)
      setInput("");
    }
    else {
      setError("Don't give up ,try again! ❤️‍🔥");
      setInput("");
    }
  

  };

  return (
    <div className="password-container">
      <h1>🔒 This surprise is only for you ❤️</h1>
      <p className="hint">Hint: Our special date 💫</p>

      <input
        type="password"
        placeholder="Enter our special date"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleUnlock}>Unlock 🔓</button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default PasswordPage;
