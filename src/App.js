import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navabar from './Components/Navabar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Reasearch from './Components/Reasearch';
import About from './Components/About';
function App() {
  return (
<Router>
  <Navabar />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/reasearch' element={<Reasearch/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
</Router>
  );
}

export default App;
