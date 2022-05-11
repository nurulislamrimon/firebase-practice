import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Committee from './Components/Committee/Committee';
import Home from './Components/Home/Home';
import Members from './Components/Home/Members/Members';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/members">Members</Link>
        <Link to="/committee">Committee</Link>
        <Link to="/signin">Sign in</Link>
      </nav>




      {/* router */}
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/members" element={<Members></Members>}></Route>
        <Route path="/committee" element={<Committee></Committee>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
