import { Header } from '@/components/layouts';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
