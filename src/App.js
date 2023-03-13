import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import '../src/styles/style.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Route>
      </Routes>
  
    </div>
  );
}

export default App;
