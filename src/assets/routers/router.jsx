import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from "../../components/signUpPage/signupCard";
import Login from "../../components/login/login";
import Layout from "../layout/layout";
import ForgotPassword from "../../components/forgotPassword/forgot";
import ResetPassword from "../../components/resetPassword/reset";

export default function AppRouter() {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="/signup" replace />} />
      <Route
        path="/signup"
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <Layout>
            <ForgotPassword />
          </Layout>
        }
      />
      <Route
        path="/reset-password"
        element={
          <Layout>
            <ResetPassword />
          </Layout>
        }
      />
    </Routes>
  );
}
