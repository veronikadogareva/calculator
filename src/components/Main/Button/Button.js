import './Button.css';
function Button({ text, className, setExample, example }) {
  function onClick(evt) {
console.log(example);
    if (example === '0'){
      setExample('');
    }
    setExample((prevExample => prevExample + text));
  }
  return (
    <button className={className} onClick={onClick}>{text}</button>
  );
}

export default Button;