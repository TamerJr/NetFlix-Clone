import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import SavedShows from "./Pages/SavedShows"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/saved" element={<SavedShows/>}/>
      </Routes>
    </div>
  );
}

export default App;
