import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Header, Banner, ProductFeed } from './components/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />

        <main className="main">
          <Banner />
          <ProductFeed />
        </main>
        {/* <Routes>
        <Route path="/" />
        <Route path="about" />
        <Route path="order-summary" />

        <Route path="products">
          <Route index />
          <Route path="jackets" />
          <Route path="shoes" />
        </Route>

        <Route path="users">
          <Route path=":userId" />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes> */}
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
