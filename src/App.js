import './App.css'
import {Route,Switch} from 'react-router-dom'
import Navbar from './component/navbar/navbar'
import Home from './component/pages/home'
import {useEffect} from 'react'
function App() {
  useEffect(()=>{
    let alert=document.querySelector('.alert')
    setTimeout(() => {
      alert.style.display="none"
    }, 3000);
  },[])
  return (
    <>
      <div className="alert" style={{backgroundColor:'white',color:'black',textAlign:'center',fontSize:"20px",fontWeight:'bolder'}}>!! Not Yet Mobile Responsive !!</div>
      <Navbar/>
      <Switch>
        <Route exact to='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
