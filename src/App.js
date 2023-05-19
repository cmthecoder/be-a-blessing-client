import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/chat' element={<Chat />}/>
        <Route path='/community' element={<Community />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
