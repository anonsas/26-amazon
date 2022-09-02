import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Header } from './components/index';
import { Homepage, Login, Checkout, NotFound } from './pages/index';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Homepage />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
