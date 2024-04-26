import {Route, Navigate, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import Profilepage from './pages/Profile/Profilepage';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import Sidebar from "./pages/Sidebar/Sidebar";

function App() {
  const [authUser] = useAuthState(auth);
  return (
    <>
      <Routes>
      <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
			<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
      <Route path='/:username' element={<Profilepage />} />
      <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;

