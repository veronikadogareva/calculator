import './Keyboard.css';
import Button from '../Button/Button';
function Keyboard({setExample, example}) {
  return (
    <div className="keyboard">
      <Button className="keyboard__button" />
      <Button className="keyboard__button keyboard__button_type_clear"/>
      <Button className="keyboard__button" text="/" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="*" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="7" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="8" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="9" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="-" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="4" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="5" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="6" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="+" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="1" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="2" setExample={setExample} example={example}/>
      <Button className="keyboard__button" text="3" setExample={setExample} example={example}/>
      <Button className="keyboard__button keyboard__button_type_equal" text="="/>
      <Button className="keyboard__button keyboard__button_type_zero" text="0" setExample={setExample}/>
      <Button className="keyboard__button" text="." setExample={setExample}/>
    </div>
  );
}

export default Keyboard;
