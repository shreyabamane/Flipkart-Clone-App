import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataProvider';
import { DetailView } from './components/details/DetailView';
import { Cart } from './components/cart/Cart';
import { SuccessPage } from './components/payment/SuccessPage';
import { CancelPage } from './components/payment/CancelPage';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/success' element={<SuccessPage />} />
            <Route path='/cancel' element={<CancelPage />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
