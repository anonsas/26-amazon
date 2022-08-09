import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Header, Banner } from './components/index';

function App() {
  return (
    <div>
      <Header />

      <main className="main">
        <Banner />
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
  );
}

export default App;
