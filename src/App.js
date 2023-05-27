import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Quotes from './components/quotes/Quotes';
import Goals from './components/todo/Todo';
import MyAccount from './components/my_account/My_Account'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quotes' element={<Quotes/>}/>
        <Route path='/goals' element={<Goals/>}/>
        <Route path='/my_account' element={<MyAccount/>}/>
      </Routes>
    </div>
  );
}

export default App;
