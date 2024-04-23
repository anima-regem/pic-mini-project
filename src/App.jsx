import {Route, Navigate, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";

function App() {
  const [authUser] = useAuthState(auth);
  return (
    <>
      <Routes>
      <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
			<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;

