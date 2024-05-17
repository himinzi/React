import './App.css';

function Button({ onClick, children }) {
  return (
    <button onClick={() => {onClick('자식에게 전달')}}>
      {children}
    </button>
  );
}

function PlayButton({ movieName, onClick}) { // 객체 분해
  function handlePlayClick(msg) {
    alert(`${msg} Playing ${movieName}!`);
    onClick();
  }

  return (
    <Button onClick={handlePlayClick}> 
    {/* Button의 onClick */}
      Play "{movieName}"
      {/* Button의 children */}
    </Button>
  );
}

function UploadButton({onClick}) {
  return (
    <Button onClick={()=> onClick()}>
      Upload Image
    </Button>
  );
}

function Toolbar({onClick1, onClick2}) {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" onClick={onClick1} />
      <UploadButton onClick ={onClick2} />
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Toolbar onClick1 ={() => alert('click1')} onClick2={()=>alert("click2")}></Toolbar>
    </div>
  );
}

export default App;
