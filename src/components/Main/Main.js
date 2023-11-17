import './Main.css';
import Window from './Window/Window';
import Keyboard from './Keyboard/Keyboard';
import { useState } from 'react';
function Main() {
  const [example, setExample] = useState('0');
  return (
    <main className="main">
      <Window example={example}/>
      <Keyboard example={example} setExample={setExample}/>
    </main>
  );
}

export default Main;
