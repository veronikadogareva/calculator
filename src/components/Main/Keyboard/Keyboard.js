import './Keyboard.css';
import Button from '../Button/Button';
function Keyboard() {
  return (
    <div className="keyboard">
      <Button className="keyboard__button" />
      <Button className="keyboard__button keyboard__button_type_clear"/>
      <Button className="keyboard__button" text="/"/>
      <Button className="keyboard__button" text="*"/>
      <Button className="keyboard__button" text="7"/>
      <Button className="keyboard__button" text="8"/>
      <Button className="keyboard__button" text="9"/>
      <Button className="keyboard__button" text="-"/>
      <Button className="keyboard__button" text="4"/>
      <Button className="keyboard__button" text="5"/>
      <Button className="keyboard__button" text="6"/>
      <Button className="keyboard__button" text="+"/>
      <Button className="keyboard__button" text="1"/>
      <Button className="keyboard__button" text="2"/>
      <Button className="keyboard__button" text="3"/>
      <Button className="keyboard__button keyboard__button_type_equal" text="="/>
      <Button className="keyboard__button keyboard__button_type_zero" text="0"/>
      <Button className="keyboard__button" text="."/>
    </div>
  );
}

export default Keyboard;
