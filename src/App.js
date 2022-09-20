
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { publicRoute } from './Routes/publicRoute';

function App() {
  return (
    <div className='max-w-8xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        {
          publicRoute.map(({ path, Components, index }) => <Route
            key={index}
            path={path} element={<Components />}
          ></Route>)
        }
      </Routes>
      <Footer></Footer>
      <Toaster
        toastOptions={{
          className: 'font-medium',
          duration: 5000,
        }}
      ></Toaster>
    </div>
  );
}

export default App;
