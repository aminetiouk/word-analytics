import { useState } from 'react';
import Warning from "./Warning";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

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
      instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
      facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
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