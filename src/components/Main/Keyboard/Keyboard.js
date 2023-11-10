import './Keyboard.css';
function Keyboard() {
  return (
    <div className="keyboard">
      <button className="keyboard__button "/>
      <button className="keyboard__button keyboard__button_type_clear"></button>
      <button className="keyboard__button">/</button>
      <button className="keyboard__button">*</button>
      <button className="keyboard__button">7</button>
      <button className="keyboard__button">8</button>
      <button className="keyboard__button">9</button>
      <button className="keyboard__button">-</button>
      <button className="keyboard__button">4</button>
      <button className="keyboard__button">5</button>
      <button className="keyboard__button">6</button>
      <button className="keyboard__button">+</button>
      <button className="keyboard__button">1</button>
      <button className="keyboard__button">2</button>
      <button className="keyboard__button">3</button>
      <button className="keyboard__button keyboard__button_type_equal">=</button>
      <button className="keyboard__button keyboard__button_type_zero">0</button>
      <button className="keyboard__button">.</button>
    </div>
  );
}

export default Keyboard;
