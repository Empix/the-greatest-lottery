import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import { useAppSelector } from './hooks/redux';

import Authentication from './pages/Authentication';
import Home from './pages/Home';
import NewBet from './pages/NewBet';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';

export default function App() {
  const auth = useAppSelector((state) => state.auth);

  return (
    <Layout>
      <Routes>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/*" element={<Navigate to="/authentication" />} />

        {auth.token && [
          <Route path="/" element={<Home />} />,
          <Route path="/new-bet" element={<NewBet />} />,
        ]}
      </Routes>
    </Layout>
  );
}
