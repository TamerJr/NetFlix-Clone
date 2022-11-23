import { Route, Routes } from 'react-router-dom';
import  Home  from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Account from "./Pages/Account"
import { AuthContextProvider } from './Context/Context';
import ProtectUser from './Components/ProtectUser';
import { NavBar } from './Components/NavBar';
function App() {
  return (
    <AuthContextProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/account" element={<ProtectUser> <Account/></ProtectUser>}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
