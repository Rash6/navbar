//import logo from './logo.svg';
import './App.css';

function App() {
  const links=["Services","Project","About"]
  return (
    <div className="App">

      <div>
        <h1>
          LOGOBAKERY
        </h1>
      </div>


    <div className="block">
     
    {links.map((e)=>{
      return <LINK links={e}/>;

    })}
      </div>


      <div > <button>Contact</button></div>
     
  
    </div>
  );
}
function LINK(pro){
  return <p>{pro.links}</p>
}

export default App;
