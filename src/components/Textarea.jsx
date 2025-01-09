import { useState } from 'react';

export default function Textarea({ setStats }) {
  const [text, setText] = useState("");


  const handleChange = (event) => {

    let text = event.target.value;
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
    </section>
  );
}