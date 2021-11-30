import { Route, Routes } from 'react-router';
import Layout from './components/Layout';

import Authentication from './pages/Authentication';
import ResetPassword from './pages/ResetPassword';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Layout>
  );
}
