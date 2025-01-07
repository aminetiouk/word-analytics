import Header  from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Textarea from "./Textarea"
import Stats from "./Stats"
import { useState } from "react"

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    instagramCharactersLeft: 2200,
    facebookCharactersLeft: 6320,
  });

  return (
    <>
      <Header />

      <Main>
        <Textarea setStats={setStats} />
        <Stats stats={stats}/>
      </Main>

      <Footer />
    </>
  );
}

export default App
