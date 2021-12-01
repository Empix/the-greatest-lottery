import { Route, Routes } from 'react-router';
import Layout from './components/Layout';

import Authentication from './pages/Authentication';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}
