import './App.css';
import Header from './componets/header/Header.jsx';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Login from './componets/login/Login';
import { Main } from './componets/main/Main';
import Cord from './componets/card/Cord';
import Createadd from './createAdd/CreateAdd';



 

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/card/:id" element={<Cord/>}/>
        <Route path="/linkreact:id" element={<h1>Linkk</h1>}/>
        <Route path="/create-new-add" element={<Createadd/>}/> 
      </Routes>

      
    </div>
    </BrowserRouter>
  );
}

export default App;
