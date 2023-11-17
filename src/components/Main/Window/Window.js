import './Window.css';

function Window({example}) {
  return (
    <div className="window">
     <p className="window__history">34+35=</p> 
     <p className="window__answer">{example}</p>
    </div>
  );
}

export default Window;
