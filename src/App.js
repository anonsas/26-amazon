import { useEffect } from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Header } from './components/index';
import { Homepage, Login, Checkout, NotFound } from './pages/index';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './setup/redux/features/cartSlice';

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is', authUser);
      if (authUser) {
        // the user just logged-in/ was logged-in
        dispatch(setUser(authUser));
      } else {
        // the user is logged-out
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

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
