import { Route, Routes } from 'react-router-dom';
import './App.css';
import Transaction from './Pages/Transaction';
import Report from './Pages/Report';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import AddTransaction from './Components/AddTransaction';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/add-transaction' element={<AddTransaction/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
      
  );
}

export default App;
