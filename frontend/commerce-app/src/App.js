import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import Register from './pages/Register';
import Login from './pages/Login';
import UserPanel from './pages/UserPanel';
import ProductPage from './pages/ProductPage';
import BlogPage from './pages/BlogPage';
import Shop from './pages/Shop';
import CreatePost from './pages/CreatePost';
import ListItem from './pages/ListItem';
import './App.css'

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user-panel' element={<UserPanel />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/post' element={<BlogPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/list-item' element={<ListItem />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
