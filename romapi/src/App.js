
import './App.css';
{/* importation de nos composants */}
import UserList from './composants/UserList';

{/* importation de nos composants */}
function App() {
  
  return (
    <div style={{marginTop: "50px", boxSizing:"border-box", borderBlockStyle:"double", backgroundImage: "linear-gradient(red,lightyellow)", padding:"30px",fontsize: "20px", color:"#4a54f1", textalign:"center"}}>


      <UserList/>

    </div>
  );
}

export default App;
