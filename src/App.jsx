import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/home'} element={<Home></Home>} />
        <Route path={'*'} element={<Navigate to={'/home'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
