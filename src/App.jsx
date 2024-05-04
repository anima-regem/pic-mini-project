import {Route, Navigate, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import Chat from './pages/ChatPage/Chat';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
// import Sidebar from "./components/Sidebar/Sidebar";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  const [authUser] = useAuthState(auth);
  return (
    <PageLayout>
      <Routes>
      <Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
			<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
      <Route path='/:username' element={<ProfilePage/>} />
      <Route path='/chat' element={<Chat/>} />
      </Routes>
    </PageLayout>
  );
}

export default App;

