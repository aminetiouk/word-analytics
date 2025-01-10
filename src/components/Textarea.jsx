import { useState } from 'react';
import Warning from "./Warning";

export default function Textarea({ setStats }) {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState("");


  const handleChange = (event) => {

    let text = event.target.value;

    if (text.includes("<script>")) {
      setWarning("You can't use <script> in your text.");
      text = text.replace("<script>", "");
    } else {
      setWarning("");
    }
    
    setText(text);
    setStats({
      numberOfWords: text.split(" ")[0] === "" ? 0 : text.split(" ").length,
      numberOfCharacters: text.length,
      instagramCharactersLeft: 2200 - text.length,
      facebookCharactersLeft: 6320 - text.length,
    });
  };
  return (
    <section className="textarea">
      <textarea
        spellCheck="false"
        placeholder="Enter or paste your text here"
        onChange={handleChange}
        value={text}
      ></textarea>
      <Warning warningText={warning} />
    </section>
  );
}