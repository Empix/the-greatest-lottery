import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import Authentication from './pages/Authentication';
import Home from './pages/Home';
import NewBet from './pages/NewBet';
import ResetPassword from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import { actions } from './redux/authSlice';

function calculateRemainingTokenTime(expiration: string) {
  const now = Date.now();
  const expiresIn = new Date(expiration).getTime();

  return expiresIn - now;
}

export default function App() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!auth.token || !auth.expiresIn) return;

    const logoutTimer = setTimeout(() => {
      dispatch(actions.logout());
    }, calculateRemainingTokenTime(auth.expiresIn));

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [auth.token, auth.expiresIn, dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/*" element={<Navigate to="/authentication" />} />

        {auth.token && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/new-bet" element={<NewBet />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}
